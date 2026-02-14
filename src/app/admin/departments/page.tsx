import { getAllDepartments } from "@/actions/department";
import { DepartmentActions } from "@/components/admin/departments/DepartmentActions";
import {
    Building2,
    Briefcase,
    Users,
    Search,
    Inbox
} from "lucide-react";
import { notFound } from "next/navigation";

interface PageProps {
    searchParams: Promise<{
        search?: string;
    }>;
}

export default async function DepartmentsPage({ searchParams }: PageProps) {
    const resolvedSearchParams = await searchParams;
    const search = resolvedSearchParams.search;

    const { data, success, error } = await getAllDepartments({
        search,
        includeCount: true
    });

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-12">
                <div className="size-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-4">
                    <Inbox className="size-8" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Failed to load departments</h1>
                <p className="text-gray-500 dark:text-gray-400 max-w-md">{error}</p>
            </div>
        );
    }

    const departments = data || [];

    return (
        <div className="space-y-8 h-full flex flex-col">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 shrink-0">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">
                        Departments
                    </h1>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-widest">
                        Structure your organization
                    </p>
                </div>
                <DepartmentActions mode="create" />
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 shrink-0">
                <div className="bg-white dark:bg-gray-900/40 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center gap-4">
                        <div className="size-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                            <Building2 className="size-6" />
                        </div>
                        <div>
                            <p className="text-2xl font-black text-gray-900 dark:text-white">{departments.length}</p>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Departments</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-900/40 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center gap-4">
                        <div className="size-12 rounded-xl bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center">
                            <Briefcase className="size-6" />
                        </div>
                        <div>
                            <p className="text-2xl font-black text-gray-900 dark:text-white">
                                {departments.reduce((acc: number, dept: any) => acc + (dept._count?.jobs || 0), 0)}
                            </p>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Active Jobs</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-900/40 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center gap-4">
                        <div className="size-12 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                            <Users className="size-6" />
                        </div>
                        <div>
                            <p className="text-2xl font-black text-gray-900 dark:text-white">
                                {departments.reduce((acc: number, dept: any) => acc + (dept._count?.teams || 0), 0)}
                            </p>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Team Members</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* List Section */}
            <div className="flex-1 min-h-0 bg-white dark:bg-gray-900/40 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
                <div className="overflow-x-auto custom-scrollbar flex-1">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50/50 dark:bg-gray-800/50 sticky top-0 z-10 backdrop-blur-md">
                            <tr>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-800">Department Name</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-800">Slug</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-800">Jobs</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-800">Team Size</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-800 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-gray-800/50">
                            {departments.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-8 py-20 text-center">
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="size-16 rounded-full bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                                                <Inbox className="size-8 text-gray-300" />
                                            </div>
                                            <div>
                                                <p className="text-lg font-bold text-gray-900 dark:text-white">No Departments Found</p>
                                                <p className="text-sm text-gray-500">Get started by creating your first department.</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                departments.map((dept: any) => (
                                    <tr key={dept.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors group">
                                        <td className="px-8 py-5 whitespace-nowrap">
                                            <div className="flex items-center gap-4">
                                                <div className="size-10 rounded-xl bg-brand/5 text-brand flex items-center justify-center font-bold text-base transition-transform group-hover:scale-110">
                                                    {dept.name.charAt(0).toUpperCase()}
                                                </div>
                                                <span className="font-bold text-gray-900 dark:text-white text-base">{dept.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 whitespace-nowrap">
                                            <code className="text-[11px] font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-600 dark:text-gray-400">
                                                {dept.slug}
                                            </code>
                                        </td>
                                        <td className="px-8 py-5 whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                <Briefcase className="size-3.5 text-gray-400" />
                                                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                                                    {dept._count?.jobs || 0}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                <Users className="size-3.5 text-gray-400" />
                                                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                                                    {dept._count?.teams || 0}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 whitespace-nowrap text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <DepartmentActions department={dept} mode="edit" />
                                                <DepartmentActions department={dept} mode="delete" />
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
    );
}