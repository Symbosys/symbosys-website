"use client";

import { useState, useEffect } from "react";
import { Plus, Loader2, Pencil, Trash2, Briefcase, MapPin, DollarSign, ListChecks, FileText } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { createJob, updateJob, deleteJob } from "@/actions/job";
import { getAllDepartments } from "@/actions/department";
import { JobType, JobStatus } from "@/validation/job";
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

interface JobActionsProps {
    job?: any;
    mode: "create" | "edit" | "delete";
}

export function JobActions({ job, mode }: JobActionsProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [departments, setDepartments] = useState<any[]>([]);
    const router = useRouter();

    const [formData, setFormData] = useState({
        title: job?.title || "",
        description: job?.description || "",
        requirements: job?.requirements || "",
        location: job?.location || "",
        salaryRange: job?.salaryRange || "",
        departmentId: job?.departmentId ? String(job.departmentId) : "",
        type: job?.type || JobType.FULL_TIME,
        status: job?.status || JobStatus.DRAFT,
        featured: job?.featured || false,
    });

    useEffect(() => {
        if (isOpen && mode !== "delete") {
            const fetchDeps = async () => {
                const res = await getAllDepartments();
                if (res.success) setDepartments(res.data || []);
            };
            fetchDeps();
        }
    }, [isOpen, mode]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const payload: any = {
                ...formData,
                departmentId: parseInt(formData.departmentId),
            };

            let result;
            if (mode === "create") {
                result = await createJob(payload);
            } else if (mode === "edit" && job) {
                result = await updateJob(job.id, payload);
            }

            if (result?.success) {
                toast.success(`Job ${mode === "create" ? "created" : "updated"} successfully`);
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
        if (!job) return;
        setIsLoading(true);
        try {
            const result = await deleteJob(job.id);
            if (result.success) {
                toast.success("Job deleted successfully");
                setIsOpen(false);
                router.refresh();
            } else {
                toast.error(result.error || "Failed to delete job");
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
                        <AlertDialogTitle>Delete Job</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to delete <span className="font-semibold text-gray-900 dark:text-gray-100">"{job?.title}"</span>?
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
                            {isLoading ? "Deleting..." : "Delete"}
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
                        Add Job
                    </Button>
                ) : (
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-500 transition-colors">
                        <Pencil className="size-4" />
                    </button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[650px] p-0 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
                <form onSubmit={handleSubmit} className="flex flex-col h-full max-h-[90vh]">
                    <DialogHeader className="px-6 py-4 border-b border-gray-100 dark:border-gray-800">
                        <DialogTitle className="text-xl font-bold">
                            {mode === "create" ? "Add Job Posting" : "Edit Job Detail"}
                        </DialogTitle>
                        <DialogDescription>
                            Enter the job details below. Fields with * are required.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="title" className="font-bold">Job Title *</Label>
                                <Input
                                    id="title"
                                    placeholder="e.g. Frontend Developer"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="location" className="font-bold">Location *</Label>
                                <Input
                                    id="location"
                                    placeholder="e.g. Remote"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    required
                                    className="rounded-xl"
                                    disabled={isLoading}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="type" className="font-bold">Job Type</Label>
                                <Select
                                    value={formData.type}
                                    onValueChange={(val) => setFormData({ ...formData, type: val as any })}
                                >
                                    <SelectTrigger className="rounded-xl">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Object.keys(JobType).map((type) => (
                                            <SelectItem key={type} value={type}>
                                                {type.replace("_", " ")}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="salary" className="font-bold">Salary Range</Label>
                                <Input
                                    id="salary"
                                    placeholder="e.g. £50k - £70k"
                                    value={formData.salaryRange}
                                    onChange={(e) => setFormData({ ...formData, salaryRange: e.target.value })}
                                    className="rounded-xl"
                                    disabled={isLoading}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description" className="font-bold text-gray-700 dark:text-gray-300">Description *</Label>
                            <Textarea
                                id="description"
                                placeholder="..."
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                required
                                className="rounded-xl min-h-[120px]"
                                disabled={isLoading}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="requirements" className="font-bold text-gray-700 dark:text-gray-300">Requirements *</Label>
                            <Textarea
                                id="requirements"
                                placeholder="..."
                                value={formData.requirements}
                                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                                required
                                className="rounded-xl min-h-[120px]"
                                disabled={isLoading}
                            />
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
                            <div className="flex items-center justify-between flex-1">
                                <div className="space-y-0.5">
                                    <p className="text-sm font-bold">Featured Listing</p>
                                    <p className="text-xs text-gray-500">Show on careers page</p>
                                </div>
                                <Switch
                                    checked={formData.featured}
                                    onCheckedChange={(val) => setFormData({ ...formData, featured: val })}
                                />
                            </div>
                            <div className="space-y-2 flex-1">
                                <Label className="text-xs font-bold">Publication Status</Label>
                                <Select
                                    value={formData.status}
                                    onValueChange={(val) => setFormData({ ...formData, status: val as any })}
                                >
                                    <SelectTrigger className="rounded-xl border-gray-200 dark:border-gray-800">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Object.keys(JobStatus).map((status) => (
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
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <Loader2 className="size-4 animate-spin mr-2" />
                            ) : null}
                            {mode === "create" ? "Create Job" : "Save Changes"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
