"use client";

import { useState, useEffect, useRef } from "react";
import { Plus, Loader2, Pencil, Trash2, User, Image as ImageIcon, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { createTeamMember, updateTeamMember, deleteTeamMember, uploadFile } from "@/actions/team";
import { getAllDepartments } from "@/actions/department";
import { TeamMemberStatus } from "@/validation/team";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
import { cn } from "@/lib/utils";

interface TeamActionsProps {
    member?: any;
    mode: "create" | "edit" | "delete";
}

export function TeamActions({ member, mode }: TeamActionsProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [departments, setDepartments] = useState<any[]>([]);
    const [imagePreview, setImagePreview] = useState<string | null>(member?.image?.url || null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: member?.name || "",
        departmentId: member?.departmentId ? String(member.departmentId) : "",
        status: member?.status || TeamMemberStatus.ACTIVE,
    });

    useEffect(() => {
        if (isOpen) {
            if (mode === "create") {
                setFormData({
                    name: "",
                    departmentId: "",
                    status: TeamMemberStatus.ACTIVE,
                });
                setImagePreview(null);
                setSelectedFile(null);
            } else if (mode === "edit" && member) {
                setFormData({
                    name: member.name || "",
                    departmentId: member.departmentId ? String(member.departmentId) : "",
                    status: member.status || TeamMemberStatus.ACTIVE,
                });
                setImagePreview(member.image?.url || null);
                setSelectedFile(null);
            }

            if (mode !== "delete") {
                const fetchDeps = async () => {
                    const res = await getAllDepartments();
                    if (res.success) setDepartments(res.data || []);
                };
                fetchDeps();
            }
        }
    }, [isOpen, mode, member]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const clearImage = () => {
        setSelectedFile(null);
        setImagePreview(member?.image?.url || null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            let imageObj = member?.image;

            // If a new file is selected, upload it first
            if (selectedFile && imagePreview) {
                setIsUploading(true);
                const uploadRes = await uploadFile(imagePreview);
                setIsUploading(false);

                if (uploadRes.success) {
                    imageObj = uploadRes.data;
                } else {
                    toast.error(uploadRes.error || "Image upload failed");
                    setIsLoading(false);
                    return;
                }
            }

            if (!imageObj) {
                toast.error("Please select an image");
                setIsLoading(false);
                return;
            }

            const payload: any = {
                ...formData,
                departmentId: parseInt(formData.departmentId),
                image: imageObj,
            };

            let result;
            if (mode === "create") {
                result = await createTeamMember(payload);
            } else if (mode === "edit" && member) {
                result = await updateTeamMember(member.id, payload);
            }

            if (result?.success) {
                toast.success(`Member ${mode === "create" ? "added" : "updated"} successfully`);
                setIsOpen(false);
                router.refresh();
            } else {
                toast.error(result?.error || "Something went wrong");
            }
        } catch (error) {
            toast.error("An error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!member) return;
        setIsLoading(true);
        try {
            const result = await deleteTeamMember(member.id);
            if (result.success) {
                toast.success("Member deleted successfully");
                setIsOpen(false);
                router.refresh();
            } else {
                toast.error(result.error || "Failed to delete member");
            }
        } catch (error) {
            toast.error("An error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    if (mode === "delete") {
        return (
            <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-2 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg text-red-600 transition-colors"
                >
                    <Trash2 className="size-4" />
                </button>
                <AlertDialogContent className="max-w-[400px]">
                    <AlertDialogHeader>
                        <AlertDialogTitle>Remove Member</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to remove <span className="font-semibold text-gray-900 dark:text-gray-100">"{member?.name}"</span> from the team?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={(e) => {
                                e.preventDefault();
                                handleDelete();
                            }}
                            className="bg-red-600 hover:bg-red-700 text-white"
                            disabled={isLoading}
                        >
                            {isLoading ? "Removing..." : "Remove"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        );
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {mode === "create" ? (
                    <Button className="bg-brand hover:bg-brand-dark text-white font-bold rounded-xl shadow-lg shadow-brand/20 gap-2">
                        <Plus className="size-4" />
                        Add Member
                    </Button>
                ) : (
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-500 transition-colors">
                        <Pencil className="size-4" />
                    </button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] p-0 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
                <form onSubmit={handleSubmit} className="flex flex-col h-full max-h-[90vh]">
                    <DialogHeader className="px-6 py-4 border-b border-gray-100 dark:border-gray-800">
                        <DialogTitle className="text-xl font-bold">
                            {mode === "create" ? "Add Team Member" : "Edit Member Detail"}
                        </DialogTitle>
                        <DialogDescription>
                            Enter the member details below.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                        {/* Image Upload Area */}
                        <div className="flex flex-col items-center gap-4">
                            <Label className="font-bold self-start">Profile Image</Label>
                            <div className="relative group">
                                <div
                                    className={cn(
                                        "size-32 rounded-2xl overflow-hidden border-2 border-dashed border-gray-200 dark:border-gray-800 flex items-center justify-center bg-gray-50 dark:bg-gray-900 flex-shrink-0 transition-all",
                                        imagePreview ? "border-solid border-brand/50" : "hover:border-brand/50 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                                    )}
                                    onClick={() => !imagePreview && fileInputRef.current?.click()}
                                >
                                    {imagePreview ? (
                                        <Image
                                            src={imagePreview}
                                            alt="Preview"
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="flex flex-col items-center gap-2 text-gray-400">
                                            <ImageIcon className="size-8" />
                                            <span className="text-[10px] uppercase font-black tracking-widest">Upload</span>
                                        </div>
                                    )}
                                </div>

                                {imagePreview && (
                                    <button
                                        type="button"
                                        onClick={clearImage}
                                        className="absolute -top-2 -right-2 size-6 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors z-10"
                                    >
                                        <X className="size-3" />
                                    </button>
                                )}

                                {imagePreview && (
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] font-black uppercase tracking-widest"
                                    >
                                        Change
                                    </button>
                                )}
                            </div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                accept="image/*"
                                className="hidden"
                            />
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider text-center">
                                Square aspect ratio recommended (Max 2MB)
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="font-bold">Full Name *</Label>
                                <Input
                                    id="name"
                                    placeholder="e.g. John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="rounded-xl"
                                    disabled={isLoading}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="department" className="font-bold">Department *</Label>
                                <Select
                                    value={formData.departmentId}
                                    onValueChange={(val) => setFormData({ ...formData, departmentId: val })}
                                >
                                    <SelectTrigger className="rounded-xl">
                                        <SelectValue placeholder="Select Department" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {departments.map((dept) => (
                                            <SelectItem key={dept.id} value={String(dept.id)}>
                                                {dept.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="status" className="font-bold">Status</Label>
                                <Select
                                    value={formData.status}
                                    onValueChange={(val) => setFormData({ ...formData, status: val as any })}
                                >
                                    <SelectTrigger className="rounded-xl">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Object.keys(TeamMemberStatus).map((status) => (
                                            <SelectItem key={status} value={status}>
                                                {status}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <DialogFooter className="px-6 py-4 border-t border-gray-100 dark:border-gray-800">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsOpen(false)}
                            className="rounded-xl font-bold"
                            disabled={isLoading}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="bg-brand hover:bg-brand-dark text-white font-bold rounded-xl shadow-brand/20"
                            disabled={isLoading || isUploading}
                        >
                            {isLoading || isUploading ? (
                                <Loader2 className="size-4 animate-spin mr-2" />
                            ) : null}
                            {isUploading ? "Uploading..." : mode === "create" ? "Add Member" : "Save Changes"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
