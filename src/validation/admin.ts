import { z } from "zod";

export const Role = {
    ADMIN: "ADMIN",
    SUB_ADMIN: "SUB_ADMIN",
} as const;

export const AdminSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    role: z.nativeEnum(Role).default(Role.ADMIN),
});

export const UpdateAdminSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").optional(),
    email: z.string().email("Invalid email address").optional(),
    password: z.string().min(6, "Password must be at least 6 characters").optional(),
    role: z.nativeEnum(Role).optional(),
});

export const LoginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(1, "Password is required"),
});

export type AdminSchema = z.infer<typeof AdminSchema>;
export type UpdateAdminSchema = z.infer<typeof UpdateAdminSchema>;
export type LoginSchema = z.infer<typeof LoginSchema>;
