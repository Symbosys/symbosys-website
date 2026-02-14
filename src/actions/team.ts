"use server";

import { prisma } from "@/config/prisma";
import { TeamSchema } from "@/validation/team";
import { cacheTag, updateTag } from "next/cache";
import { uploadToCloudinary, deleteFromCloudinary } from "@/config/cloudinary";

/**
 * Server action to upload a file to Cloudinary
 */
export const uploadFile = async (base64Data: string) => {
  try {
    const result = await uploadToCloudinary(base64Data);
    return { success: true, data: result };
  } catch (error: any) {
    console.error("Upload action error:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Get all team members without pagination
 */
export const getAllTeamMembers = async () => {
  "use cache";
  cacheTag("all-team");

  try {
    const members = await prisma.team.findMany({
      include: {
        department: {
          select: { name: true }
        }
      },
      orderBy: { createdAt: "desc" }
    });

    return { success: true, data: members };
  } catch (error: any) {
    console.error("Error fetching team members:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Get team member by ID
 */
export const getTeamMemberById = async (id: number) => {
  "use cache";
  cacheTag(`team-member-${id}`);

  try {
    const member = await prisma.team.findUnique({
      where: { id },
      include: {
        department: {
          select: { name: true }
        }
      }
    });

    if (!member) return { success: false, error: "Member not found" };

    return { success: true, data: member };
  } catch (error: any) {
    console.error("Error fetching team member:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Create a new team member
 */
export const createTeamMember = async (data: TeamSchema) => {
  try {
    const member = await prisma.team.create({
      data: {
        ...data,
        image: data.image as any, // Cast for Prisma JSON
      },
    });

    updateTag("all-team");
    return { success: true, data: member };
  } catch (error: any) {
    console.error("Error creating team member:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Update an existing team member
 */
export const updateTeamMember = async (id: number, data: Partial<TeamSchema>) => {
  try {
    const member = await prisma.team.update({
      where: { id },
      data: {
        ...data,
        image: data.image ? (data.image as any) : undefined,
      },
    });

    updateTag("all-team");
    updateTag(`team-member-${id}`);
    updateTag(`department-team-${member.departmentId}`);

    return { success: true, data: member };
  } catch (error: any) {
    console.error("Error updating team member:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Delete a team member
 */
export const deleteTeamMember = async (id: number) => {
  try {
    const member = await prisma.team.delete({
      where: { id },
    });

    updateTag("all-team");
    updateTag(`team-member-${id}`);
    updateTag(`department-team-${member.departmentId}`);

    return { success: true, data: member };
  } catch (error: any) {
    console.error("Error deleting team member:", error);
    return { success: false, error: error.message };
  }
};
