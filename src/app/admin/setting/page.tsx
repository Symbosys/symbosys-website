import { getAllAdmins } from "@/actions/admin";
import { auth } from "@/auth";
import { AdminActions } from "@/components/admin/admin/AdminActions";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
    Inbox,
    Key,
    Mail,
    MoreHorizontal,
    Settings,
    Shield,
    ShieldAlert,
    ShieldCheck,
    User
} from "lucide-react";

export default async function SettingPage() {
    const session = await auth();
    const { data, success } = await getAllAdmins();
    const admins = data || [];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-black tracking-tight text-gray-950 dark:text-white flex items-center gap-2">
                    <Settings className="size-6 text-brand" />
                    System Settings
                </h1>
                <p className="text-sm text-gray-500 font-medium dark:text-gray-400 mt-1">
                    Manage administrative access, security protocols, and system configuration.
                </p>
            </div>

            {/* Admin Management Section */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="size-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                            <Key className="size-4 text-gray-600 dark:text-gray-400" />
                        </div>
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Access Management</h2>
                    </div>
                    <AdminActions mode="create" />
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="size-8 rounded-lg flex items-center justify-center bg-brand/10 text-brand">
                                <ShieldCheck className="size-4" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Total Admins</span>
                        </div>
                        <p className="text-2xl font-black text-gray-900 dark:text-white">{admins.length}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="size-8 rounded-lg flex items-center justify-center bg-blue-500/10 text-blue-500">
                                <Shield className="size-4" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Root Access</span>
                        </div>
                        <p className="text-2xl font-black text-gray-900 dark:text-white">
                            {admins.filter(a => a.role === 'ADMIN').length}
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="size-8 rounded-lg flex items-center justify-center bg-purple-500/10 text-purple-500">
                                <ShieldAlert className="size-4" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Restricted Nodes</span>
                        </div>
                        <p className="text-2xl font-black text-gray-900 dark:text-white">
                            {admins.filter(a => a.role === 'SUB_ADMIN').length}
                        </p>
                    </div>
                </div>

                {/* Admins Table */}
                <div className="bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-transparent">
                                    <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Security Identity</th>
                                    <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Access Level</th>
                                    <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center leading-none">Provisioned Date</th>
                                    <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right leading-none">Operations</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 dark:divide-gray-800/50">
                                {admins.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="py-20 text-center">
                                            <div className="flex flex-col items-center gap-2">
                                                <Inbox className="size-8 text-gray-300" />
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">No Security Nodes Detected</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    admins.map((admin) => (
                                        <tr key={admin.id} className="group hover:bg-gray-50/50 dark:hover:bg-gray-800/20 transition-colors">
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-4">
                                                    <div className="size-11 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 group-hover:bg-brand group-hover:text-white transition-all shadow-sm border border-transparent group-hover:border-brand/20">
                                                        <User className="size-5" />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <div className="flex items-center gap-2">
                                                            <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                                                                {admin.name}
                                                            </h4>
                                                            {session?.user?.id === String(admin.id) && (
                                                                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-500 text-[8px] font-black uppercase tracking-widest">Me</span>
                                                            )}
                                                        </div>
                                                        <div className="flex items-center gap-1.5 mt-1">
                                                            <Mail className="size-3 text-gray-400" />
                                                            <p className="text-[11px] text-gray-500 font-medium truncate">
                                                                {admin.email}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className={cn(
                                                    "inline-flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border transition-colors",
                                                    admin.role === 'ADMIN'
                                                        ? "bg-brand/5 text-brand border-brand/20"
                                                        : "bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-500 border-purple-500/10"
                                                )}>
                                                    <Shield className="size-3" />
                                                    {admin.role.replace('_', ' ')}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-center">
                                                <div className="inline-flex flex-col items-center">
                                                    <span className="text-xs text-gray-600 dark:text-gray-400 font-bold">{format(new Date(admin.createdAt), "dd MMM, yyyy")}</span>
                                                    <span className="text-[9px] text-gray-400 font-black uppercase tracking-tighter tabular-nums">{format(new Date(admin.createdAt), "hh:mm aa")}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <div className="flex items-center justify-end gap-1">
                                                    <AdminActions admin={admin} mode="edit" />
                                                    {session?.user?.id !== String(admin.id) && (
                                                        <AdminActions admin={admin} mode="delete" />
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* System Info Footer */}
            <div className="pt-8 border-t border-gray-100 dark:border-gray-800">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    Secure Administration Core Online • v1.4.2
                </p>
            </div>
        </div>
    );
}