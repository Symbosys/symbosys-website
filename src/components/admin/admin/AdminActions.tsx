"use client";

import { useState, useEffect } from "react";
import { Plus, Loader2, Pencil, Trash2, Shield, User, Mail, Lock, X } from "lucide-react";
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
import { createAdmin, updateAdmin, deleteAdmin } from "@/actions/admin";
import { Role } from "@/validation/admin";
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
import { cn } from "@/lib/utils";

interface AdminActionsProps {
    admin?: any;
    mode: "create" | "edit" | "delete";
}

export function AdminActions({ admin, mode }: AdminActionsProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: admin?.name || "",
        email: admin?.email || "",
        password: "",
        role: admin?.role || Role.ADMIN,
    });

    useEffect(() => {
        if (isOpen) {
            if (mode === "create") {
                setFormData({
                    name: "",
                    email: "",
                    password: "",
                    role: Role.ADMIN,
                });
            } else if (mode === "edit" && admin) {
                setFormData({
                    name: admin.name || "",
                    email: admin.email || "",
                    password: "", // Don't pre-fill password
                    role: admin.role || Role.ADMIN,
                });
            }
        }
    }, [isOpen, mode, admin]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            let result;
            if (mode === "create") {
                result = await createAdmin(formData);
            } else if (mode === "edit" && admin) {
                // Remove password from payload if it's empty
                const { password, ...updates } = formData;
                const payload = formData.password ? formData : updates;
                result = await updateAdmin(admin.id, payload as any);
            }

            if (result?.success) {
                toast.success(`Admin ${mode === "create" ? "created" : "updated"} successfully`);
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
        if (!admin) return;
        setIsLoading(true);
        try {
            const result = await deleteAdmin(admin.id);
            if (result.success) {
                toast.success("Admin removed successfully");
                setIsOpen(false);
                router.refresh();
            } else {
                toast.error(result.error || "Failed to remove admin");
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
                        <AlertDialogTitle>Revoke Admin Access</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to remove <span className="font-semibold text-gray-900 dark:text-gray-100">"{admin?.name}"</span>?
                            This action cannot be undone and they will lose all console access.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={isLoading}>Cancel System</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={(e) => {
                                e.preventDefault();
                                handleDelete();
                            }}
                            className="bg-red-600 hover:bg-red-700 text-white"
                            disabled={isLoading}
                        >
                            {isLoading ? "Revoking..." : "Revoke Access"}
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
                        Create Admin
                    </Button>
                ) : (
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-500 transition-colors">
                        <Pencil className="size-4" />
                    </button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] p-0 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <DialogHeader className="px-6 py-4 border-b border-gray-100 dark:border-gray-800">
                        <DialogTitle className="text-xl font-bold">
                            {mode === "create" ? "Provision New Admin" : "Modify Admin Credentials"}
                        </DialogTitle>
                        <DialogDescription>
                            Ensure high security standards during this operation.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="p-6 space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-gray-400">Full Name</Label>
                            <div className="relative group">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400 group-focus-within:text-brand transition-colors" />
                                <Input
                                    id="name"
                                    placeholder="e.g. Administrator Zero"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="h-11 pl-10 rounded-xl bg-gray-50 dark:bg-gray-900 border-transparent focus:border-brand/30 transition-all"
                                    disabled={isLoading}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-gray-400">Email Address</Label>
                            <div className="relative group">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400 group-focus-within:text-brand transition-colors" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="admin@symbosys.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="h-11 pl-10 rounded-xl bg-gray-50 dark:bg-gray-900 border-transparent focus:border-brand/30 transition-all"
                                    disabled={isLoading}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-xs font-black uppercase tracking-widest text-gray-400">
                                {mode === "create" ? "Primary Password" : "New Password (Optional)"}
                            </Label>
                            <div className="relative group">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400 group-focus-within:text-brand transition-colors" />
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder={mode === "create" ? "••••••••" : "Leave blank to keep current"}
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    required={mode === "create"}
                                    className="h-11 pl-10 rounded-xl bg-gray-50 dark:bg-gray-900 border-transparent focus:border-brand/30 transition-all"
                                    disabled={isLoading}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Access Tier</Label>
                            <Select
                                value={formData.role}
                                onValueChange={(val) => setFormData({ ...formData, role: val as any })}
                            >
                                <SelectTrigger className="h-11 rounded-xl bg-gray-50 dark:bg-gray-900 border-transparent focus:ring-brand/30">
                                    <div className="flex items-center gap-2">
                                        <Shield className="size-4 text-brand" />
                                        <SelectValue />
                                    </div>
                                </SelectTrigger>
                                <SelectContent className="rounded-xl">
                                    {Object.keys(Role).map((role) => (
                                        <SelectItem key={role} value={role} className="rounded-lg">
                                            {role.replace('_', ' ')}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <DialogFooter className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-950/40">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsOpen(false)}
                            className="rounded-xl font-bold border-gray-200"
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
                            {mode === "create" ? "Initialize Admin" : "Sync Changes"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
