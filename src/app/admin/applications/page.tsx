"use client";

import { useEffect, useState, useTransition } from "react";
import { getAllApplications, deleteApplication, updateApplicationStatus } from "@/actions/application";
import { toast } from "sonner";
import { format } from "date-fns";
import { useDebounce } from "use-debounce";
import { Badge } from "@/components/ui/badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

enum ApplicationStatus {
    NEW = "NEW",
    REVIEWING = "REVIEWING",
    SHORTLISTED = "SHORTLISTED",
    INTERVIEW = "INTERVIEW",
    OFFER = "OFFER",
    HIRED = "HIRED",
    REJECTED = "REJECTED"
}

const statusColors: Record<string, string> = {
    NEW: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    REVIEWING: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    SHORTLISTED: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    INTERVIEW: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
    OFFER: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
    HIRED: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    REJECTED: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
};

type Application = {
    id: number;
    jobId: number;
    applicantId: number;
    coverLetter: string | null;
    status: ApplicationStatus | string;
    createdAt: Date;
    applicant: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        linkedin: string | null;
        portfolio: string | null;
        resumeUrl: any; // Cloudinary result
    };
    job: {
        title: string;
    };
};

export default function ApplicationsPage() {
    const [applications, setApplications] = useState<Application[]>([]);
    const [filteredApplications, setFilteredApplications] = useState<Application[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedSearchQuery] = useDebounce(searchQuery, 300);
    const [isPending, startTransition] = useTransition();
    const [updatingId, setUpdatingId] = useState<number | null>(null);

    // Dialog & Alert State
    const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
    const [isViewOpen, setIsViewOpen] = useState(false);
    const [applicationToDelete, setApplicationToDelete] = useState<number | null>(null);

    useEffect(() => {
        loadApplications();
    }, []);

    useEffect(() => {
        if (!applications.length) return;

        const search = debouncedSearchQuery.toLowerCase();
        const filtered = applications.filter((app) =>
            app.applicant.firstName.toLowerCase().includes(search) ||
            app.applicant.lastName.toLowerCase().includes(search) ||
            app.applicant.email.toLowerCase().includes(search) ||
            app.job.title.toLowerCase().includes(search)
        );
        setFilteredApplications(filtered);
    }, [debouncedSearchQuery, applications]);

    const loadApplications = async () => {
        try {
            const result = await getAllApplications();
            if (result.success && result.data) {
                setApplications(result.data as Application[]);
                setFilteredApplications(result.data as Application[]);
            } else {
                toast.error("Failed to load applications");
            }
        } catch (error) {
            toast.error("An error occurred while loading applications");
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!applicationToDelete) return;

        startTransition(async () => {
            const result = await deleteApplication(applicationToDelete);
            if (result.success) {
                toast.success("Application deleted successfully");
                setApplications((prev) => prev.filter((app) => app.id !== applicationToDelete));
                setFilteredApplications((prev) => prev.filter((app) => app.id !== applicationToDelete));
                setApplicationToDelete(null);
            } else {
                toast.error(result.error || "Failed to delete application");
            }
        });
    };

    const handleStatusUpdate = async (id: number, newStatus: string) => {
        setUpdatingId(id);
        const previousApplications = [...applications];

        // Optimistic update
        setApplications(prev => prev.map(app => app.id === id ? { ...app, status: newStatus } : app));
        setFilteredApplications(prev => prev.map(app => app.id === id ? { ...app, status: newStatus } : app));

        try {
            const result = await updateApplicationStatus(id, newStatus);
            if (!result.success) {
                throw new Error(result.error);
            }
            toast.success(`Status updated to ${newStatus}`);
        } catch (error) {
            toast.error("Failed to update status");
            // Revert on failure
            setApplications(previousApplications);
            setFilteredApplications(previousApplications);
        } finally {
            setUpdatingId(null);
        }
    };

    const getResumeUrl = (resumeUrl: any) => {
        if (typeof resumeUrl === 'string') return resumeUrl;
        return resumeUrl?.url || '#';
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="p-6 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Job Applications</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                        Manage and review all job applications
                    </p>
                </div>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-gray-400">search</span>
                    </span>
                    <input
                        type="text"
                        placeholder="Search applications..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand focus:border-transparent outline-none w-full md:w-64"
                    />
                </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                                <th className="p-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Applicant</th>
                                <th className="p-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Applied For</th>
                                <th className="p-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                                <th className="p-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                                <th className="p-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Resume</th>
                                <th className="p-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                            {filteredApplications.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="p-8 text-center text-gray-500 dark:text-gray-400">
                                        No applications found.
                                    </td>
                                </tr>
                            ) : (
                                filteredApplications.map((app) => (
                                    <tr key={app.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="size-10 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-lg">
                                                    {app.applicant.firstName[0]}
                                                </div>
                                                <div>
                                                    <div className="font-medium text-gray-900 dark:text-white">
                                                        {app.applicant.firstName} {app.applicant.lastName}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="font-medium text-gray-900 dark:text-white">{app.job.title}</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">ID: {app.jobId}</div>
                                        </td>
                                        <td className="p-4">
                                            <div className="w-[140px]">
                                                <Select
                                                    value={app.status as string}
                                                    onValueChange={(value) => handleStatusUpdate(app.id, value)}
                                                    disabled={updatingId === app.id}
                                                >
                                                    <SelectTrigger className={`h-8 border-none ${statusColors[app.status as string] || "bg-gray-100 dark:bg-gray-800"} font-medium`}>
                                                        {updatingId === app.id ? (
                                                            <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                                        ) : null}
                                                        <SelectValue placeholder="Status" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {Object.values(ApplicationStatus).map((status) => (
                                                            <SelectItem key={status} value={status}>
                                                                {status}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </td>
                                        <td className="p-4 text-sm text-gray-500 dark:text-gray-400">
                                            {format(new Date(app.createdAt), "MMM d, yyyy")}
                                        </td>
                                        <td className="p-4">
                                            <a
                                                href={getResumeUrl(app.applicant.resumeUrl)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                                            >
                                                <span className="material-symbols-outlined text-lg">description</span>
                                                PDF
                                            </a>
                                        </td>
                                        <td className="p-4 text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                                        <span className="sr-only">Open menu</span>
                                                        <span className="material-symbols-outlined">more_vert</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem onClick={() => {
                                                        setSelectedApplication(app);
                                                        setIsViewOpen(true);
                                                    }}>
                                                        View Details
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        onClick={() => setApplicationToDelete(app.id)}
                                                        className="text-red-600 focus:text-red-600"
                                                    >
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* View Details Dialog */}
            <Dialog open={isViewOpen} onOpenChange={setIsViewOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Application Details</DialogTitle>
                        <DialogDescription>
                            Status: <Badge className={`ml-2 ${statusColors[selectedApplication?.status as string]}`}>{selectedApplication?.status}</Badge>
                        </DialogDescription>
                    </DialogHeader>

                    {selectedApplication && (
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500">Applicant Name</h4>
                                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                                        {selectedApplication.applicant.firstName} {selectedApplication.applicant.lastName}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500">Applied For</h4>
                                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                                        {selectedApplication.job.title}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500">Email</h4>
                                    <p className="text-base text-gray-900 dark:text-white">
                                        {selectedApplication.applicant.email}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                                    <p className="text-base text-gray-900 dark:text-white">
                                        {selectedApplication.applicant.phone || "N/A"}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500">LinkedIn</h4>
                                    {selectedApplication.applicant.linkedin ? (
                                        <a href={selectedApplication.applicant.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                                            View Profile
                                        </a>
                                    ) : <p className="text-gray-900 dark:text-white">N/A</p>}
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500">Portfolio</h4>
                                    {selectedApplication.applicant.portfolio ? (
                                        <a href={selectedApplication.applicant.portfolio} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                                            View Portfolio
                                        </a>
                                    ) : <p className="text-gray-900 dark:text-white">N/A</p>}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-medium text-gray-500 mb-2">Resume</h4>
                                <a
                                    href={getResumeUrl(selectedApplication.applicant.resumeUrl)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                                >
                                    <span className="material-symbols-outlined text-red-500">picture_as_pdf</span>
                                    <span className="text-sm font-medium">Download Resume</span>
                                </a>
                            </div>

                            {selectedApplication.coverLetter && (
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500 mb-1">Cover Letter</h4>
                                    <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                                        {selectedApplication.coverLetter}
                                    </div>
                                </div>
                            )}

                            {/* Status Update in Details View too */}
                            <div>
                                <h4 className="text-sm font-medium text-gray-500 mb-2">Update Stage</h4>
                                <div className="w-[180px]">
                                    <Select
                                        value={selectedApplication.status as string}
                                        onValueChange={(value) => {
                                            handleStatusUpdate(selectedApplication.id, value);
                                            setSelectedApplication({ ...selectedApplication, status: value as any });
                                        }}
                                        disabled={updatingId === selectedApplication.id}
                                    >
                                        <SelectTrigger className={`h-10 ${statusColors[selectedApplication.status as string] || "bg-gray-100 dark:bg-gray-800"}`}>
                                            <SelectValue placeholder="Status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Object.values(ApplicationStatus).map((status) => (
                                                <SelectItem key={status} value={status}>
                                                    {status}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation Alert */}
            <AlertDialog open={!!applicationToDelete} onOpenChange={(open) => !open && setApplicationToDelete(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the application and remove the data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700">Delete</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}