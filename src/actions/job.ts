"use server";

import { prisma } from "@/config/prisma";
import { JobSchema } from "@/validation/job";
import { JobStatus, JobType, Prisma } from "../../generated/prisma/client";
import { cacheTag, updateTag } from "next/cache";

/**
 * Helper to generate a URL-friendly slug
 */
const generateSlug = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

/**
 * Create a new job with auto-generated slug
 */
export const createJob = async (data: JobSchema) => {
  try {
    const baseSlug = generateSlug(data.title);
    const uniqueId = Math.random().toString(36).substring(2, 7);
    const slug = `${baseSlug}-${uniqueId}`;

    const job = await prisma.job.create({
      data: {
        ...data,
        slug,
      },
    });

    updateTag("all-jobs");
    updateTag(`department-jobs-${data.departmentId}`);
    updateTag("dashboard-stats");
    return { success: true, data: job };
  } catch (error: any) {
    console.error("Error creating job:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Get all jobs with filtering and pagination
 */
export const getAllJobs = async (params: {
  page?: number;
  limit?: number;
  search?: string;
  departmentId?: number;
  type?: JobType;
  status?: JobStatus;
}) => {
  "use cache";
  cacheTag("all-jobs");

  const { page = 1, limit = 10, search, departmentId, type, status } = params;

  try {
    const where: Prisma.JobWhereInput = {};

    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { location: { contains: search, mode: "insensitive" } },
      ];
    }

    if (departmentId) where.departmentId = departmentId;
    if (type) where.type = type;
    if (status) where.status = status;

    const jobs = await prisma.job.findMany({
      where,
      orderBy: { createdAt: "desc" },
      include: {
        department: {
          select: { name: true }
        },
        _count: {
          select: { applications: true }
        }
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    const total = await prisma.job.count({ where });

    return {
      success: true,
      data: jobs,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch (error: any) {
    console.error("Error fetching jobs:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Get a single job by ID
 */
export const getJobById = async (id: number) => {
  "use cache";
  cacheTag(`job-${id}`);

  try {
    const job = await prisma.job.findUnique({
      where: { id },
      include: {
        department: true,
      }
    });

    if (!job) return { success: false, error: "Job not found" };

    return { success: true, data: job };
  } catch (error: any) {
    console.error("Error fetching job:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Update a job
 */
export const updateJob = async (id: number, data: Partial<JobSchema>) => {
  try {
    const updateData: any = { ...data };
    
    // If title changes, regenerate slug but keep it unique
    if (data.title) {
        const baseSlug = generateSlug(data.title);
        const uniqueId = Math.random().toString(36).substring(2, 7);
        updateData.slug = `${baseSlug}-${uniqueId}`;
    }

    const job = await prisma.job.update({
      where: { id },
      data: updateData,
    });

    updateTag("all-jobs");
    updateTag(`job-${id}`);
    updateTag(`department-jobs-${job.departmentId}`);

    return { success: true, data: job };
  } catch (error: any) {
    console.error("Error updating job:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Delete a job
 */
export const deleteJob = async (id: number) => {
  try {
    const job = await prisma.job.delete({
      where: { id },
    });

    updateTag("all-jobs");
    updateTag(`job-${id}`);
    updateTag(`department-jobs-${job.departmentId}`);

    return { success: true, data: job };
  } catch (error: any) {
    console.error("Error deleting job:", error);
    return { success: false, error: error.message };
  }
};
