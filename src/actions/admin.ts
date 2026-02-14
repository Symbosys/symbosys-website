"use server";

import { prisma } from "@/config/prisma";
import { AdminSchema, UpdateAdminSchema, LoginSchema } from "@/validation/admin";
import bcrypt from "bcryptjs";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { cacheTag, updateTag } from "next/cache";

/**
 * Get all administrators
 */
export const getAllAdmins = async () => {
    "use cache";
    cacheTag("all-admins");

    try {
        const admins = await prisma.admin.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true,
            },
            orderBy: { createdAt: "desc" },
        });

        return { success: true, data: admins };
    } catch (error: any) {
        console.error("Error fetching admins:", error);
        return { success: false, error: error.message };
    }
};

/**
 * Create a new administrator
 */
export const createAdmin = async (data: AdminSchema) => {
    try {
        const validatedFields = AdminSchema.safeParse(data);

        if (!validatedFields.success) {
            return { success: false, error: "Invalid fields" };
        }

        const { email, password, name, role } = validatedFields.data;

        // Check if email already exists
        const existingAdmin = await prisma.admin.findUnique({
            where: { email },
        });

        if (existingAdmin) {
            return { success: false, error: "Email already in use" };
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const admin = await prisma.admin.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role,
            },
        });

        updateTag("all-admins");
        return { success: true, data: { id: admin.id, name: admin.name, email: admin.email } };
    } catch (error: any) {
        console.error("Error creating admin:", error);
        return { success: false, error: error.message };
    }
};

/**
 * Update an administrator
 */
export const updateAdmin = async (id: number, data: UpdateAdminSchema) => {
    try {
        const validatedFields = UpdateAdminSchema.safeParse(data);

        if (!validatedFields.success) {
            return { success: false, error: "Invalid fields" };
        }

        const updates: any = { ...validatedFields.data };

        // Hash password if it's being updated
        if (updates.password) {
            updates.password = await bcrypt.hash(updates.password, 10);
        }

        const admin = await prisma.admin.update({
            where: { id },
            data: updates,
        });

        updateTag("all-admins");
        return { success: true, data: { id: admin.id, name: admin.name, email: admin.email } };
    } catch (error: any) {
        console.error("Error updating admin:", error);
        return { success: false, error: error.message };
    }
};

/**
 * Delete an administrator
 */
export const deleteAdmin = async (id: number) => {
    try {
        // Prevent deleting the last admin if necessary, but for now just delete
        await prisma.admin.delete({
            where: { id },
        });

        updateTag("all-admins");
        return { success: true };
    } catch (error: any) {
        console.error("Error deleting admin:", error);
        return { success: false, error: error.message };
    }
};

/**
 * Authenticate an administrator
 */
export const login = async (data: LoginSchema) => {
    const validatedFields = LoginSchema.safeParse(data);

    if (!validatedFields.success) {
        return { success: false, error: "Invalid credentials" };
    }

    const { email, password } = validatedFields.data;

    try {
        await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        return { success: true };
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { success: false, error: "Invalid credentials" };
                default:
                    return { success: false, error: "Something went wrong" };
            }
        }

        throw error; // Re-throw if it's not an AuthError
    }
};

/**
 * Log out
 */
export const logout = async () => {
    await signOut();
};
