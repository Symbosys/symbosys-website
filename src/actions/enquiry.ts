"use server";

import { prisma } from "@/config/prisma";
import { EnquirySchema } from "@/validation/enquiry";
import { Prisma } from "../../generated/prisma/client";

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
    return { success: true, data: enquiry };
  } catch (error: any) {
    console.error("Error creating enquiry:", error);
    return { success: false, error: error.message };
  }
};

export const getAllEnquiries = async (params: {
  page?: number;
  limit?: number;
  search?: string;
  isRead?: boolean;
  startDate?: string;
  endDate?: string;
}) => {
  const { page = 1, limit = 10, search, isRead, startDate, endDate } = params;
  try {
    const where: Prisma.EnquiryWhereInput = {};

    if (search) {
      where.OR = [
        { name: { contains: search } },
        { email: { contains: search } },
        { phone: { contains: search } },
      ];
    }

    if (startDate && endDate) {
      where.createdAt = {
        gte: new Date(startDate),
        lte: new Date(endDate),
      };
    }

    if (isRead !== undefined) {
      where.isRead = isRead;
    }

    const enquiries = await prisma.enquiry.findMany({
      where,
      orderBy: {
        createdAt: "desc",
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

export const getEnquiryById = async (id: number) => {
  try {
    const enquiry = await prisma.enquiry.findUnique({
      where: {
        id,
      },
    });
    return { success: true, data: enquiry };
  } catch (error: any) {
    console.error("Error fetching enquiry:", error);
    return { success: false, error: error.message };
  }
};

export const deleteEnquiry = async (id: number) => {
  try {
    const enquiry = await prisma.enquiry.delete({
      where: {
        id,
      },
    });
    return { success: true, data: enquiry };
  } catch (error: any) {
    console.error("Error deleting enquiry:", error);
    return { success: false, error: error.message };
  }
};
