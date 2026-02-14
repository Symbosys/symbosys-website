"use server";

import { prisma } from "@/config/prisma";
import { cacheTag } from "next/cache";

export const getDashboardData = async () => {
    "use cache";
    cacheTag("dashboard-stats");

    try {
        const [
            enquiriesCount,
            activeJobsCount,
            applicationsCount,
            departmentsCount,
            recentEnquiries,
            teamCount
        ] = await Promise.all([
            prisma.enquiry.count(),
            prisma.job.count({ where: { status: "PUBLISHED" } }),
            prisma.application.count(),
            prisma.department.count(),
            prisma.enquiry.findMany({
                take: 5,
                orderBy: { createdAt: "desc" },
                select: {
                    id: true,
                    name: true,
                    subject: true,
                    createdAt: true,
                    isRead: true
                }
            }),
            prisma.team.count({ where: { status: "ACTIVE" } })
        ]);

        return {
            success: true,
            data: {
                stats: {
                    enquiries: enquiriesCount,
                    activeJobs: activeJobsCount,
                    applications: applicationsCount,
                    departments: departmentsCount,
                    activeTeam: teamCount
                },
                recentEnquiries
            }
        };
    } catch (error: any) {
        console.error("Dashboard data error:", error);
        return { success: false, error: error.message };
    }
};
