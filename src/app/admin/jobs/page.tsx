import { getAllJobs } from "@/actions/job";
import { getAllDepartments } from "@/actions/department";
import { JobActions } from "@/components/admin/jobs/JobActions";
import { JobFilters } from "@/components/admin/jobs/JobFilters";
import {
    Briefcase,
    MapPin,
    Users,
    TrendingUp,
    Inbox,
    Star,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PageProps {
    searchParams: Promise<{
        page?: string;
        search?: string;
        status?: string;
        departmentId?: string;
        type?: string;
    }>;
}

export default async function JobsPage({ searchParams }: PageProps) {
    const resolvedParams = await searchParams;
    const page = parseInt(resolvedParams.page || "1");
    const search = resolvedParams.search;
    const status = resolvedParams.status && resolvedParams.status !== "all" ? resolvedParams.status : undefined;
    const departmentId = resolvedParams.departmentId && resolvedParams.departmentId !== "all" ? parseInt(resolvedParams.departmentId) : undefined;
    const type = resolvedParams.type && resolvedParams.type !== "all" ? resolvedParams.type : undefined;

    // Fetch jobs with all filters
    const { data, success, error, pagination } = await getAllJobs({
        page,
        limit: 10,
        search,
        status: status as any,
        departmentId,
        type: type as any
    });

    // Fetch departments for the filter dropdown
    const departmentsRes = await getAllDepartments();
    const departments = departmentsRes.success && departmentsRes.data ? departmentsRes.data : [];

    const jobs = data || [];

    // Helper to build pagination URL
    const getPaginationUrl = (newPage: number) => {
        const params = new URLSearchParams();
        if (search) params.set("search", search);
        if (status) params.set("status", status);
        if (resolvedParams.departmentId) params.set("departmentId", resolvedParams.departmentId);
        if (type) params.set("type", type);
        params.set("page", String(newPage));
        return `/admin/jobs?${params.toString()}`;
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black tracking-tight text-gray-950 dark:text-white">
                        Job Management
                    </h1>
                    <p className="text-sm text-gray-500 font-medium dark:text-gray-400">
                        Manage your job postings and track applications.
                    </p>
                </div>
                <JobActions mode="create" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {[
                    { label: "Total Jobs", value: pagination?.total || 0, icon: Briefcase, color: "text-brand" },
                    { label: "Published", value: jobs.filter(j => j.status === 'PUBLISHED').length, icon: TrendingUp, color: "text-green-600" },
                    { label: "Applications", value: jobs.reduce((acc, j) => acc + (j._count?.applications || 0), 0), icon: Users, color: "text-blue-600" },
                    { label: "Featured", value: jobs.filter(j => j.featured).length, icon: Star, color: "text-amber-500" },
                ].map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <div className={cn("size-8 rounded-lg flex items-center justify-center bg-gray-50 dark:bg-gray-800", stat.color)}>
                                <stat.icon className="size-4" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</span>
                        </div>
                        <p className="text-2xl font-black text-gray-900 dark:text-white">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Table Container */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
                {/* Filters Component */}
                <JobFilters departments={departments as any} />

                {/* Table */}
                <div className="overflow-x-auto min-h-[400px]">
                    <table className="w-full text-left whitespace-nowrap">
                        <thead className="bg-gray-50/50 dark:bg-gray-800/50">
                            <tr>
                                <th className="px-6 py-4 text-[11px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-800">Title</th>
                                <th className="px-6 py-4 text-[11px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-800">Department</th>
                                <th className="px-6 py-4 text-[11px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-800">Type</th>
                                <th className="px-6 py-4 text-[11px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-800 text-center">Applications</th>
                                <th className="px-6 py-4 text-[11px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-800">Status</th>
                                <th className="px-6 py-4 text-[11px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-800 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-gray-800/50">
                            {jobs.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-20 text-center">
                                        <div className="flex flex-col items-center gap-2">
                                            <Inbox className="size-8 text-gray-300" />
                                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">No jobs found</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                jobs.map((job: any) => (
                                    <tr key={job.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className={cn(
                                                    "size-8 rounded-lg flex items-center justify-center",
                                                    job.featured ? "bg-amber-100 text-amber-600" : "bg-brand/10 text-brand"
                                                )}>
                                                    {job.featured ? <Star className="size-4" /> : <Briefcase className="size-4" />}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-gray-900 dark:text-white">{job.title}</span>
                                                    <span className="text-[10px] font-medium text-gray-400 flex items-center gap-1">
                                                        <MapPin className="size-2.5" />
                                                        {job.location}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                                {job.department.name}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                                                {job.type.replace("_", " ")}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-sm font-black text-gray-900 dark:text-white">
                                                {job._count?.applications || 0}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className={cn(
                                                "inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-black uppercase",
                                                job.status === 'PUBLISHED' ? "bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-500" :
                                                    job.status === 'DRAFT' ? "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400" : "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-500"
                                            )}>
                                                <div className={cn("size-1.5 rounded-full",
                                                    job.status === 'PUBLISHED' ? "bg-green-600" :
                                                        job.status === 'DRAFT' ? "bg-gray-500" : "bg-red-600"
                                                )} />
                                                {job.status}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-1">
                                                <JobActions job={job} mode="edit" />
                                                <JobActions job={job} mode="delete" />
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/30 dark:bg-gray-900/40">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        Displaying {jobs.length} of {pagination?.total || 0} Openings
                    </p>
                    <div className="flex gap-2">
                        {pagination && pagination.page > 1 ? (
                            <Link
                                href={getPaginationUrl(pagination.page - 1)}
                                className="p-2 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-600 hover:bg-white dark:hover:bg-gray-800 transition-colors"
                            >
                                <ChevronLeft className="size-4" />
                            </Link>
                        ) : (
                            <button disabled className="p-2 border border-gray-100 dark:border-gray-800 rounded-lg text-gray-300 cursor-not-allowed">
                                <ChevronLeft className="size-4" />
                            </button>
                        )}

                        {pagination && pagination.page < pagination.totalPages ? (
                            <Link
                                href={getPaginationUrl(pagination.page + 1)}
                                className="p-2 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-600 hover:bg-white dark:hover:bg-gray-800 transition-colors"
                            >
                                <ChevronRight className="size-4" />
                            </Link>
                        ) : (
                            <button disabled className="p-2 border border-gray-100 dark:border-gray-800 rounded-lg text-gray-300 cursor-not-allowed">
                                <ChevronRight className="size-4" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}