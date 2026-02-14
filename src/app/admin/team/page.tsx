import { getAllTeamMembers } from "@/actions/team";
import { getAllDepartments } from "@/actions/department";
import { TeamActions } from "@/components/admin/team/TeamActions";
import { TeamFilters } from "@/components/admin/team/TeamFilters";
import {
    Users,
    ShieldCheck,
    Briefcase,
    Inbox,
    Star
} from "lucide-react";
import { TeamMemberStatus } from "@/validation/team";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface PageProps {
    searchParams: Promise<{
        search?: string;
        status?: string;
        departmentId?: string;
    }>;
}

export default async function TeamPage({ searchParams }: PageProps) {
    const resolvedParams = await searchParams;
    const search = resolvedParams.search?.toLowerCase();
    const status = resolvedParams.status;
    const departmentId = resolvedParams.departmentId;

    const { data, success } = await getAllTeamMembers();
    const departmentsRes = await getAllDepartments();
    const departments = departmentsRes.success && departmentsRes.data ? departmentsRes.data : [];

    let members = data || [];

    // Simple manual filtering since no pagination is required
    if (search) {
        members = members.filter(m => m.name.toLowerCase().includes(search));
    }
    if (status && status !== 'all') {
        members = members.filter(m => m.status === status);
    }
    if (departmentId && departmentId !== 'all') {
        members = members.filter(m => m.departmentId === parseInt(departmentId));
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black tracking-tight text-gray-950 dark:text-white">
                        Team Management
                    </h1>
                    <p className="text-sm text-gray-500 font-medium dark:text-gray-400">
                        Manage your company members and their roles.
                    </p>
                </div>
                <TeamActions mode="create" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                    { label: "Total Members", value: data?.length || 0, icon: Users, color: "text-brand" },
                    { label: "Active Nodes", value: data?.filter(m => m.status === TeamMemberStatus.ACTIVE).length || 0, icon: ShieldCheck, color: "text-green-600" },
                    { label: "Clusters", value: departments.length, icon: Briefcase, color: "text-blue-600" },
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

            {/* Main Container */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
                <TeamFilters departments={departments as any} />

                {/* Grid View for Team (More visual than table) */}
                <div className="p-6">
                    {members.length === 0 ? (
                        <div className="py-20 text-center">
                            <div className="flex flex-col items-center gap-2">
                                <Inbox className="size-8 text-gray-300" />
                                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">No team members found</p>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {members.map((member: any) => (
                                <div key={member.id} className="group relative bg-gray-50/50 dark:bg-gray-800/20 rounded-[2rem] border border-gray-100 dark:border-gray-800 p-6 transition-all hover:bg-white dark:hover:bg-gray-900 hover:shadow-xl hover:border-brand/20">
                                    <div className="flex flex-col items-center text-center space-y-4">
                                        {/* Avatar */}
                                        <div className="relative size-24 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg group-hover:scale-105 transition-transform">
                                            <Image
                                                src={member.image.url}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Info */}
                                        <div className="space-y-1">
                                            <h3 className="font-black text-lg text-gray-900 dark:text-white tracking-tight leading-tight">
                                                {member.name}
                                            </h3>
                                            <p className="text-[10px] font-black text-brand uppercase tracking-[0.2em]">
                                                {member.department.name}
                                            </p>
                                        </div>

                                        {/* Status Badge */}
                                        <div className={cn(
                                            "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest",
                                            member.status === TeamMemberStatus.ACTIVE ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-500" : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                                        )}>
                                            <div className={cn("size-1 rounded-full", member.status === TeamMemberStatus.ACTIVE ? "bg-green-600" : "bg-gray-500")} />
                                            {member.status}
                                        </div>
                                    </div>

                                    {/* Quick Actions */}
                                    <div className="absolute top-4 right-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <TeamActions member={member} mode="edit" />
                                        <TeamActions member={member} mode="delete" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer Count */}
                <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/40">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        Total Capacity: {members.length} Identitites Indexed
                    </p>
                </div>
            </div>
        </div>
    );
}