"use client";

import { useState, useRef, useEffect } from "react";
import {
    MoreVertical,
    Eye,
    Trash2,
    X,
    Mail,
    Phone,
    Calendar,
    CheckCircle2,
    Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getEnquiryById, deleteEnquiry, markAsRead } from "@/actions/enquiry";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface EnquiryActionsProps {
    enquiryId: number;
    enquiryName: string;
    isRead: boolean;
}

export function EnquiryActions({ enquiryId, enquiryName, isRead }: EnquiryActionsProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isLoadingDetails, setIsLoadingDetails] = useState(false);
    const [enquiryDetails, setEnquiryDetails] = useState<any>(null);
    const [currentIsRead, setCurrentIsRead] = useState(isRead);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        setCurrentIsRead(isRead);
    }, [isRead]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleView = async () => {
        setIsOpen(false);
        setIsDetailsOpen(true);

        if (enquiryDetails) return;

        setIsLoadingDetails(true);
        try {
            if (!currentIsRead) {
                await markAsRead(enquiryId);
                setCurrentIsRead(true);
                router.refresh();
            }

            const result = await getEnquiryById(enquiryId);

            if (result.success) {
                setEnquiryDetails(result.data);
            } else {
                toast.error("Failed to load enquiry details");
                setIsDetailsOpen(false);
            }
        } catch (error) {
            toast.error("An error occurred");
            setIsDetailsOpen(false);
        } finally {
            setIsLoadingDetails(false);
        }
    };

    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            const result = await deleteEnquiry(enquiryId);
            if (result.success) {
                toast.success("Enquiry deleted successfully");
                router.refresh();
            } else {
                toast.error(result.error || "Failed to delete enquiry");
            }
        } catch (error) {
            toast.error("An error occurred");
        } finally {
            setIsDeleting(false);
            setShowDeleteDialog(false);
        }
    };

    return (
        <div className="relative inline-block">
            <div ref={menuRef}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    disabled={isDeleting}
                >
                    {isDeleting ? (
                        <Loader2 className="size-5 animate-spin text-gray-400" />
                    ) : (
                        <MoreVertical className="size-5 text-gray-500" />
                    )}
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -5 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -5 }}
                            className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg z-50 py-1"
                        >
                            <button
                                onClick={handleView}
                                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            >
                                <Eye className="size-4 text-brand" />
                                View Details
                            </button>
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    setShowDeleteDialog(true);
                                }}
                                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                            >
                                <Trash2 className="size-4" />
                                Delete Enquiry
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                <AlertDialogContent className="max-w-[400px]">
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete Enquiry</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to delete the enquiry from <span className="font-semibold text-gray-950 dark:text-gray-200">{enquiryName}</span>? This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={(e) => {
                                e.preventDefault();
                                handleDelete();
                            }}
                            className="bg-red-600 hover:bg-red-700 text-white"
                        >
                            {isDeleting ? "Deleting..." : "Delete"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <AnimatePresence>
                {isDetailsOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsDetailsOpen(false)}
                            className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-[2px]"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed right-0 top-0 h-full w-full sm:max-w-lg bg-white dark:bg-gray-950 shadow-xl z-[101] flex flex-col overflow-hidden border-l border-gray-200 dark:border-gray-800 text-left"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shrink-0">
                                <div className="text-left">
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Enquiry Details</h2>
                                    <p className="text-sm text-gray-500 mt-0.5">Contact info and message log</p>
                                </div>
                                <button
                                    onClick={() => setIsDetailsOpen(false)}
                                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                                >
                                    <X className="size-5 text-gray-500" />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 custom-scrollbar text-left">
                                {isLoadingDetails ? (
                                    <div className="flex flex-col items-center justify-center h-full gap-3 py-20">
                                        <Loader2 className="size-8 animate-spin text-brand" />
                                        <p className="text-sm text-gray-500 font-medium">Loading details...</p>
                                    </div>
                                ) : enquiryDetails ? (
                                    <div className="space-y-8 w-full">
                                        {/* Status & Date */}
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20">
                                                <CheckCircle2 className="size-3.5 text-green-600 dark:text-green-400" />
                                                <span className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-tight">Read</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs font-medium text-gray-400 bg-gray-50 dark:bg-gray-900 px-2.5 py-1 rounded-md">
                                                <Calendar className="size-3.5" />
                                                <span>{new Date(enquiryDetails.createdAt).toLocaleString()}</span>
                                            </div>
                                        </div>

                                        {/* Sender Details Section */}
                                        <div className="space-y-4">
                                            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-left">Sender Information</h3>
                                            <div className="bg-gray-50 dark:bg-gray-900/40 rounded-xl p-5 border border-gray-200 dark:border-gray-800 space-y-5">
                                                <div className="flex items-center gap-4">
                                                    <div className="size-12 rounded-lg bg-brand text-white flex items-center justify-center font-bold text-lg shrink-0">
                                                        {enquiryDetails.name.charAt(0).toUpperCase()}
                                                    </div>
                                                    <div className="min-w-0 text-left">
                                                        <p className="text-lg font-bold text-gray-900 dark:text-white truncate">{enquiryDetails.name}</p>
                                                        <p className="text-xs text-brand font-bold uppercase tracking-wider">Global Customer</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 gap-2 pt-4 border-t border-gray-200/60 dark:border-gray-800/60">
                                                    <a href={`mailto:${enquiryDetails.email}`} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-brand transition-colors">
                                                        <Mail className="size-4 opacity-70" />
                                                        <span className="font-medium break-all">{enquiryDetails.email}</span>
                                                    </a>
                                                    <a href={`tel:${enquiryDetails.phone}`} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-brand transition-colors">
                                                        <Phone className="size-4 opacity-70" />
                                                        <span className="font-medium">{enquiryDetails.phone}</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Subject & Message Section */}
                                        <div className="space-y-6">
                                            <div className="space-y-3">
                                                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-left">Subject</h3>
                                                <div className="p-4 bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 rounded-lg text-left">
                                                    <p className="text-base font-bold text-gray-900 dark:text-white break-words">
                                                        {enquiryDetails.subject}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-left">Message Content</h3>
                                                <div className="p-5 bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 rounded-lg text-left">
                                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap break-words">
                                                        {enquiryDetails.message}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : null}
                            </div>

                            {/* Footer */}
                            <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shrink-0">
                                <button
                                    onClick={() => setIsDetailsOpen(false)}
                                    className="w-full py-2.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-bold rounded-lg hover:opacity-90 transition-opacity"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
