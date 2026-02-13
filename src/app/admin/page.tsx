import { DashboardStats } from "@/components/admin/DashboardStats";

export default function AdminDashboardPage() {
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
                {/* ... existing header buttons ... */}
                <div className="flex items-center gap-3">
                    <button className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-xs font-medium text-text-main dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">calendar_today</span>
                        Last 30 Days
                    </button>
                    <button className="px-3 py-1.5 bg-brand text-white rounded-lg text-xs font-medium shadow-lg shadow-brand/25 hover:bg-brand-dark transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">add</span>
                        Create New
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
                <DashboardStats
                    title="Total Enquiries"
                    value="1,245"
                    icon="mail"
                    trend={{ value: 12, isPositive: true }}
                    color="blue"
                />
                <DashboardStats
                    title="Active Jobs"
                    value="18"
                    icon="work"
                    trend={{ value: 2, isPositive: true }}
                    color="emerald"
                />
                <DashboardStats
                    title="Applications"
                    value="342"
                    icon="description"
                    trend={{ value: 5, isPositive: false }}
                    color="purple"
                />
                <DashboardStats
                    title="Departments"
                    value="8"
                    icon="domain"
                    color="orange"
                />
            </div>

            {/* Recent Activity / Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
                {/* Main Chart / Table Area */}
                <div className="lg:col-span-2 h-full">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden h-full flex flex-col">
                        <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between shrink-0">
                            <h2 className="text-base font-bold text-text-main dark:text-white">Recent Enquiries</h2>
                            <button className="text-xs text-brand font-medium hover:underline">View All</button>
                        </div>
                        <div className="p-4 overflow-y-auto custom-scrollbar flex-1">
                            <div className="space-y-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-xs">
                                                JD
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-semibold text-text-main dark:text-white">John Doe</h4>
                                                <p className="text-[10px] text-text-muted dark:text-gray-400">Project Inquiry • 2h ago</p>
                                            </div>
                                        </div>
                                        <span className="material-symbols-outlined text-gray-400 group-hover:text-brand transition-colors text-lg">
                                            chevron_right
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Side Panel / Notifications */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm h-full flex flex-col">
                    <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-800 shrink-0">
                        <h2 className="text-base font-bold text-text-main dark:text-white">Quick Actions</h2>
                    </div>
                    <div className="p-4 grid grid-cols-2 gap-3 overflow-y-auto flex-1 content-start">
                        <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-brand/5 hover:text-brand transition-all border border-transparent hover:border-brand/20 group h-24">
                            <span className="material-symbols-outlined text-xl text-gray-400 group-hover:text-brand">post_add</span>
                            <span className="text-[10px] font-semibold text-text-muted dark:text-gray-400 group-hover:text-brand">Post Job</span>
                        </button>
                        <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-blue-500/5 hover:text-blue-500 transition-all border border-transparent hover:border-blue-500/20 group h-24">
                            <span className="material-symbols-outlined text-xl text-gray-400 group-hover:text-blue-500">person_add</span>
                            <span className="text-[10px] font-semibold text-text-muted dark:text-gray-400 group-hover:text-blue-500">Add Member</span>
                        </button>
                        <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-purple-500/5 hover:text-purple-500 transition-all border border-transparent hover:border-purple-500/20 group h-24">
                            <span className="material-symbols-outlined text-xl text-gray-400 group-hover:text-purple-500">domain_add</span>
                            <span className="text-[10px] font-semibold text-text-muted dark:text-gray-400 group-hover:text-purple-500">Add Dept</span>
                        </button>
                        <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-orange-500/5 hover:text-orange-500 transition-all border border-transparent hover:border-orange-500/20 group h-24">
                            <span className="material-symbols-outlined text-xl text-gray-400 group-hover:text-orange-500">settings</span>
                            <span className="text-[10px] font-semibold text-text-muted dark:text-gray-400 group-hover:text-orange-500">Settings</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
