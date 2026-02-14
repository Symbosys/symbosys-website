"use server";

import { prisma } from "@/config/prisma";
import { EnquirySchema } from "@/validation/enquiry";
import { Prisma } from "../../generated/prisma/client";
import { cacheTag, updateTag } from "next/cache";

/**
 * Create a new enquiry
 */
export const createEnquiry = async (data: EnquirySchema) => {
  try {
    const enquiry = await prisma.enquiry.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      },
    });
    
    // Trigger update for the list
    updateTag("all-enquiries");
    
    return { success: true, data: enquiry };
  } catch (error: any) {
    console.error("Error creating enquiry:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Get all enquiries with filtering and pagination
 * Uses the latest "use cache" directive
 */
export const getAllEnquiries = async (params: {
  page?: number;
  limit?: number;
  search?: string;
  isRead?: boolean;
  startDate?: string;
  endDate?: string;
}) => {
  "use cache";
  cacheTag("all-enquiries");
  
  const { page = 1, limit = 10, search, isRead, startDate, endDate } = params;
  
  try {
    const where: Prisma.EnquiryWhereInput = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
        { phone: { contains: search, mode: "insensitive" } },
      ];
    }

    if (startDate || endDate) {
      where.createdAt = {};
      if (startDate) where.createdAt.gte = new Date(startDate);
      if (endDate) where.createdAt.lte = new Date(endDate);
    }

    if (isRead !== undefined) {
      where.isRead = isRead;
    }

    const enquiries = await prisma.enquiry.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        isRead: true,
        createdAt: true,
        updatedAt: true,
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    const total = await prisma.enquiry.count({ where });
    
    return {
      success: true,
      data: enquiries,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch (error: any) {
    console.error("Error fetching enquiries:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Get a single enquiry by ID
 */
export const getEnquiryById = async (id: number) => {
  "use cache";
  cacheTag(`enquiry-${id}`);
  
  try {
    const enquiry = await prisma.enquiry.findUnique({
      where: { id },
    });
    
    if (!enquiry) return { success: false, error: "Enquiry not found" };
    
    return { success: true, data: enquiry };
  } catch (error: any) {
    console.error("Error fetching enquiry:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Mark an enquiry as read (Mutation)
 */
export const markAsRead = async (id: number) => {
  try {
    await prisma.enquiry.update({
      where: { id },
      data: { isRead: true },
    });
    
    // Revalidate the caches
    updateTag("all-enquiries");
    updateTag(`enquiry-${id}`);
    
    return { success: true };
  } catch (error: any) {
    console.error("Error marking enquiry as read:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Delete an enquiry (Mutation)
 */
export const deleteEnquiry = async (id: number) => {
  try {
    const enquiry = await prisma.enquiry.delete({
      where: { id },
    });
    
    updateTag("all-enquiries");
    
    return { success: true, data: enquiry };
  } catch (error: any) {
    console.error("Error deleting enquiry:", error);
    return { success: false, error: error.message };
  }
};
