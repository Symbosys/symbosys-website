"use server";

import { prisma } from "@/config/prisma";
import { ApplicationSchema } from "@/validation/application";
import { uploadToCloudinary } from "@/config/cloudinary";
import { cacheTag, updateTag } from "next/cache";

/**
 * Upload resume to Cloudinary and create application
 */
export const applyForJob = async (data: ApplicationSchema) => {
    try {
        // 1. Validate file type and size
        // Base64 header: data:application/pdf;base64,...
        const isPDF = data.resume.startsWith("data:application/pdf;base64,");
        if (!isPDF) {
            return { success: false, error: "Only PDF files are allowed." };
        }

        const sizeInBytes = (data.resume.length * 3) / 4;
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (sizeInBytes > maxSize) {
            return { success: false, error: "File size exceeds 5MB limit." };
        }

        // 2. Pre-check: If applicant exists, did they already apply?
        // This saves a Cloudinary upload if not needed.
        const existingApplicant = await prisma.applicant.findUnique({
            where: { email: data.email },
        });

        if (existingApplicant) {
            const existingApplication = await prisma.application.findFirst({
                where: {
                    jobId: data.jobId,
                    applicantId: existingApplicant.id,
                },
            });

            if (existingApplication) {
                return { success: false, error: "You have already applied for this job." };
            }
        }

        // 3. Upload resume to Cloudinary
        const uploadResult = await uploadToCloudinary(data.resume);

        // 4. Upsert Applicant (Create or Update with new resume)
        const applicant = await prisma.applicant.upsert({
            where: { email: data.email },
            update: {
                firstName: data.firstName,
                lastName: data.lastName,
                phone: data.phone || null,
                linkedin: data.linkedin || null,
                portfolio: data.portfolio || null,
                resumeUrl: uploadResult as any, // Update latest resume
            },
            create: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email, // Unique field
                phone: data.phone || null,
                linkedin: data.linkedin || null,
                portfolio: data.portfolio || null,
                resumeUrl: uploadResult as any,
            },
        });

        // 5. Create Application
        const application = await prisma.application.create({
            data: {
                jobId: data.jobId,
                applicantId: applicant.id,
                coverLetter: data.coverLetter || null,
                status: "NEW",
            },
        });
        
        // 6. Revalidate caches
        updateTag(`job-applications-${data.jobId}`);
        updateTag("dashboard-stats"); 
        updateTag("all-applications"); // Add this tag

        return { success: true, data: application };
    } catch (error: any) {
        console.error("Error applying for job:", error);
        return { success: false, error: error.message };
    }
};

/**
 * Get all applications for a specific job (No pagination)
 */
export const getJobApplications = async (jobId: number) => {
    "use cache";
    cacheTag(`job-applications-${jobId}`);

    try {
        const applications = await prisma.application.findMany({
            where: { jobId },
            include: {
                applicant: true,
                job: {
                    select: { title: true }
                }
            },
            orderBy: { createdAt: "desc" },
        });

        return { success: true, data: applications };
    } catch (error: any) {
        console.error("Error fetching job applications:", error);
        return { success: false, error: error.message };
    }
};

/**
 * Get ALL applications (for admin view)
 */
export const getAllApplications = async () => {
    "use cache";
    cacheTag("all-applications");

    try {
        const applications = await prisma.application.findMany({
            include: {
                applicant: true,
                job: {
                    select: { title: true }
                }
            },
            orderBy: { createdAt: "desc" },
        });

        return { success: true, data: applications };
    } catch (error: any) {
        console.error("Error fetching all applications:", error);
        return { success: false, error: error.message };
    }
};

/**
 * Get application by ID
 */
export const getApplicationById = async (id: number) => {
    "use cache";
    cacheTag(`application-${id}`);

    try {
        const application = await prisma.application.findUnique({
            where: { id },
            include: {
                applicant: true,
                job: true,
            },
        });

        if (!application) return { success: false, error: "Application not found" };

        return { success: true, data: application };
    } catch (error: any) {
        console.error("Error fetching application:", error);
        return { success: false, error: error.message };
    }
};

/**
 * Delete an application
 */
export const deleteApplication = async (id: number) => {
    try {
        const application = await prisma.application.delete({
            where: { id },
        });

        updateTag(`job-applications-${application.jobId}`);
        updateTag(`application-${id}`);
        updateTag("dashboard-stats");
        updateTag("all-applications"); // Add this tag

        return { success: true, data: application };
    } catch (error: any) {
        console.error("Error deleting application:", error);
        return { success: false, error: error.message };
    }
};

/**
 * Update application status
 */
export const updateApplicationStatus = async (id: number, status: string) => {
    try {
        const application = await prisma.application.update({
            where: { id },
            data: { 
                status: status as any // Prisma will validate enum
            },
        });

        updateTag(`job-applications-${application.jobId}`);
        updateTag(`application-${id}`);
        updateTag("dashboard-stats");
        updateTag("all-applications");

        return { success: true, data: application };
    } catch (error: any) {
        console.error("Error updating application status:", error);
        return { success: false, error: error.message };
    }
};
