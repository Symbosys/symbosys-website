import { z } from "zod";

export const applicationSchema = z.object({
  jobId: z.number().positive("Job ID is required"),
  firstName: z.string().min(2, "First Name must be at least 2 characters"),
  lastName: z.string().min(2, "Last Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters").optional().or(z.literal("")),
  linkedin: z.string().url("Invalid LinkedIn URL").optional().or(z.literal("")),
  portfolio: z.string().url("Invalid Portfolio URL").optional().or(z.literal("")),
  coverLetter: z.string().optional(),
  resume: z.string().min(1, "Resume file is required"), // Base64 string expected
});

export type ApplicationSchema = z.infer<typeof applicationSchema>;
