"use server";

import { prisma } from "@/config/prisma";
import { DepartmentSchema } from "@/validation/department";
import { Prisma } from "../../generated/prisma/client";
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
 * Create a new department with auto-generated slug
 */
export const createDepartment = async (data: DepartmentSchema) => {
  try {
    const slug = generateSlug(data.name);
    
    const department = await prisma.department.create({
      data: {
        name: data.name,
        slug,
      },
    });
    
    updateTag("all-departments");
    
    return { success: true, data: department };
  } catch (error: any) {
    if (error.code === "P2002") {
      return { success: false, error: "A department with this name or slug already exists." };
    }
    console.error("Error creating department:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Get all departments with optional search
 * Uses the latest "use cache" directive
 */
export const getAllDepartments = async (params?: {
  search?: string;
  includeCount?: boolean;
}) => {
  "use cache";
  cacheTag("all-departments");
  
  const search = params?.search;
  const includeCount = params?.includeCount;
  
  try {
    const where: Prisma.DepartmentWhereInput = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { slug: { contains: search, mode: "insensitive" } },
      ];
    }

    const departments = await prisma.department.findMany({
      where,
      orderBy: {
        name: "asc",
      },
      include: {
        _count: includeCount ? {
          select: { jobs: true, teams: true }
        } : false,
      }
    });
    
    return {
      success: true,
      data: departments,
    };
  } catch (error: any) {
    console.error("Error fetching departments:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Get a single department by ID
 */
export const getDepartmentById = async (id: number) => {
  "use cache";
  cacheTag(`department-${id}`);
  
  try {
    const department = await prisma.department.findUnique({
      where: { id },
      include: {
        _count: {
          select: { jobs: true, teams: true }
        }
      }
    });
    
    if (!department) return { success: false, error: "Department not found" };
    
    return { success: true, data: department };
  } catch (error: any) {
    console.error("Error fetching department:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Get a single department by Slug
 */
export const getDepartmentBySlug = async (slug: string) => {
  "use cache";
  cacheTag(`department-slug-${slug}`);
  
  try {
    const department = await prisma.department.findUnique({
      where: { slug },
      include: {
        _count: {
          select: { jobs: true, teams: true }
        }
      }
    });
    
    if (!department) return { success: false, error: "Department not found" };
    
    return { success: true, data: department };
  } catch (error: any) {
    console.error("Error fetching department by slug:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Update a department with optional slug regeneration
 */
export const updateDepartment = async (id: number, data: Partial<DepartmentSchema>) => {
  try {
    const updateData: any = { ...data };
    
    // If name is being updated, regenerate the slug
    if (data.name) {
      updateData.slug = generateSlug(data.name);
    }

    const department = await prisma.department.update({
      where: { id },
      data: updateData,
    });
    
    updateTag("all-departments");
    updateTag(`department-${id}`);
    updateTag(`department-slug-${department.slug}`);
    
    return { success: true, data: department };
  } catch (error: any) {
    if (error.code === "P2002") {
      return { success: false, error: "A department with this name or slug already exists." };
    }
    console.error("Error updating department:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Delete a department (Mutation)
 */
export const deleteDepartment = async (id: number) => {
  try {
    const department = await prisma.department.delete({
      where: { id },
    });
    
    updateTag("all-departments");
    updateTag(`department-${id}`);
    updateTag(`department-slug-${department.slug}`);
    
    return { success: true, data: department };
  } catch (error: any) {
    console.error("Error deleting department:", error);
    return { success: false, error: error.message };
  }
};
