import { DashboardStats } from "@/components/admin/DashboardStats";
import { getDashboardData } from "@/actions/dashboard";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

interface PageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function AdminDashboardPage({ searchParams }: PageProps) {
    // Await searchParams to satisfy Next.js 16 dynamic requirements
    await searchParams;
    const res = await getDashboardData();

    if (!res.success || !res.data) {
        return (
            <div className="flex flex-col items-center justify-center h-full p-10 text-center">
                <span className="material-symbols-outlined text-6xl text-red-500 mb-4">error</span>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Failed to load statistics</h1>
                <p className="text-gray-600 dark:text-gray-400">Please check your database connection.</p>
            </div>
        );
    }

    const { stats, recentEnquiries } = res.data;

    return (
        <div className="space-y-6 h-full flex flex-col">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-text-main dark:text-white">
                        Dashboard Overview
                    </h1>
                    <p className="text-sm text-text-muted dark:text-gray-400 mt-1">
                        Here's what's happening with your website today.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <button className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-xs font-medium text-text-main dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">calendar_today</span>
                        Live Reports
                    </button>
                    <Link href="/admin/jobs" className="px-3 py-1.5 bg-brand text-white rounded-lg text-xs font-medium shadow-lg shadow-brand/25 hover:bg-brand-dark transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">add</span>
                        New Job Post
                    </Link>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
                <DashboardStats
                    title="Total Enquiries"
                    value={stats.enquiries.toLocaleString()}
                    icon="mail"
                    color="blue"
                />
                <DashboardStats
                    title="Active Jobs"
                    value={stats.activeJobs.toLocaleString()}
                    icon="work"
                    color="emerald"
                />
                <DashboardStats
                    title="Active Team"
                    value={stats.activeTeam.toLocaleString()}
                    icon="group"
                    color="purple"
                />
                <DashboardStats
                    title="Departments"
                    value={stats.departments.toLocaleString()}
                    icon="domain"
                    color="orange"
                />
            </div>

            {/* Recent Activity / Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
                {/* Main Activity Area */}
                <div className="lg:col-span-2 h-full">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden h-full flex flex-col">
                        <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between shrink-0">
                            <h2 className="text-base font-bold text-text-main dark:text-white">Recent Enquiries</h2>
                            <Link href="/admin/enquiries" className="text-xs text-brand font-medium hover:underline">View All</Link>
                        </div>
                        <div className="p-4 overflow-y-auto custom-scrollbar flex-1">
                            <div className="space-y-3">
                                {recentEnquiries.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center py-10 text-gray-400">
                                        <span className="material-symbols-outlined text-4xl mb-2">inbox</span>
                                        <p className="text-sm">No new enquiries</p>
                                    </div>
                                ) : (
                                    recentEnquiries.map((enquiry) => (
                                        <Link
                                            href={`/admin/enquiries`}
                                            key={enquiry.id}
                                            className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group cursor-pointer border border-transparent hover:border-brand/10"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-xs uppercase shrink-0">
                                                    {enquiry.name.charAt(0)}
                                                </div>
                                                <div className="min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <h4 className="text-sm font-semibold text-text-main dark:text-white truncate">{enquiry.name}</h4>
                                                        {!enquiry.isRead && (
                                                            <span className="size-1.5 rounded-full bg-brand flex-shrink-0" title="Unread" />
                                                        )}
                                                    </div>
                                                    <p className="text-[10px] text-text-muted dark:text-gray-400 truncate max-w-[200px] sm:max-w-md">
                                                        {enquiry.subject} • {formatDistanceToNow(new Date(enquiry.createdAt), { addSuffix: true })}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className="material-symbols-outlined text-gray-300 group-hover:text-brand transition-colors text-lg">
                                                chevron_right
                                            </span>
                                        </Link>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Side Panel / Quick Actions */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm h-full flex flex-col">
                    <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-800 shrink-0">
                        <h2 className="text-base font-bold text-text-main dark:text-white">Quick Actions</h2>
                    </div>
                    <div className="p-4 grid grid-cols-2 gap-3 overflow-y-auto flex-1 content-start">
                        <Link href="/admin/jobs" className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-brand/5 hover:text-brand transition-all border border-transparent hover:border-brand/20 group h-24">
                            <span className="material-symbols-outlined text-xl text-gray-400 group-hover:text-brand">post_add</span>
                            <span className="text-[10px] font-semibold text-text-muted dark:text-gray-400 group-hover:text-brand">Post Job</span>
                        </Link>
                        <Link href="/admin/team" className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-blue-500/5 hover:text-blue-500 transition-all border border-transparent hover:border-blue-500/20 group h-24">
                            <span className="material-symbols-outlined text-xl text-gray-400 group-hover:text-blue-500">person_add</span>
                            <span className="text-[10px] font-semibold text-text-muted dark:text-gray-400 group-hover:text-blue-500">Add Member</span>
                        </Link>
                        <Link href="/admin/departments" className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-purple-500/5 hover:text-purple-500 transition-all border border-transparent hover:border-purple-500/20 group h-24">
                            <span className="material-symbols-outlined text-xl text-gray-400 group-hover:text-purple-500">domain_add</span>
                            <span className="text-[10px] font-semibold text-text-muted dark:text-gray-400 group-hover:text-purple-500">Add Dept</span>
                        </Link>
                        <Link href="/admin/enquiries" className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-orange-500/5 hover:text-orange-500 transition-all border border-transparent hover:border-orange-500/20 group h-24">
                            <span className="material-symbols-outlined text-xl text-gray-400 group-hover:text-orange-500">mail</span>
                            <span className="text-[10px] font-semibold text-text-muted dark:text-gray-400 group-hover:text-orange-500">Enquiries</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
