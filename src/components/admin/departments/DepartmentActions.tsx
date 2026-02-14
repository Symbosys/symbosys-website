"use client";

import { useState } from "react";
import { Plus, Loader2, Pencil, Trash2, Building2 } from "lucide-react";
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
import { createDepartment, updateDepartment, deleteDepartment } from "@/actions/department";
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

interface DepartmentActionsProps {
    department?: {
        id: number;
        name: string;
        slug: string;
    };
    mode: "create" | "edit" | "delete";
}

export function DepartmentActions({ department, mode }: DepartmentActionsProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState(department?.name || "");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            let result;
            if (mode === "create") {
                result = await createDepartment({ name });
            } else if (mode === "edit" && department) {
                result = await updateDepartment(department.id, { name });
            }

            if (result?.success) {
                toast.success(`Department ${mode === "create" ? "created" : "updated"} successfully`);
                setIsOpen(false);
                if (mode === "create") setName("");
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
        if (!department) return;
        setIsLoading(true);
        try {
            const result = await deleteDepartment(department.id);
            if (result.success) {
                toast.success("Department deleted successfully");
                setIsOpen(false);
                router.refresh();
            } else {
                toast.error(result.error || "Failed to delete department");
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
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete Department</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to delete the <span className="font-bold text-gray-950 dark:text-white">"{department?.name}"</span> department? This will also affect associated jobs and teams.
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
                        Add Department
                    </Button>
                ) : (
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-500 transition-colors">
                        <Pencil className="size-4" />
                    </button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] rounded-2xl">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <div className="size-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                            <Building2 className="size-6" />
                        </div>
                        <DialogTitle className="text-xl font-bold">
                            {mode === "create" ? "Create Department" : "Edit Department"}
                        </DialogTitle>
                        <DialogDescription>
                            {mode === "create"
                                ? "Add a new department to categorize your team and jobs."
                                : "Update the department name. The slug will be auto-regenerated."}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name" className="text-left font-bold text-gray-700 dark:text-gray-300">
                                Department Name
                            </Label>
                            <Input
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="e.g. Software Engineering"
                                className="rounded-xl border-gray-200 focus:border-brand focus:ring-brand"
                                required
                                disabled={isLoading}
                            />
                        </div>
                    </div>
                    <DialogFooter>
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
                            className="bg-brand hover:bg-brand-dark text-white font-bold rounded-xl shadow-lg shadow-brand/20"
                            disabled={isLoading || !name.trim()}
                        >
                            {isLoading ? (
                                <div className="flex items-center gap-2">
                                    <Loader2 className="size-4 animate-spin" />
                                    Saving...
                                </div>
                            ) : (
                                mode === "create" ? "Create Department" : "Save Changes"
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
