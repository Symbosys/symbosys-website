import z from "zod";

export const JobType = {
  FULL_TIME: "FULL_TIME",
  PART_TIME: "PART_TIME",
  CONTRACT: "CONTRACT",
  FREELANCE: "FREELANCE",
  INTERNSHIP: "INTERNSHIP",
  REMOTE: "REMOTE",
} as const;

export const JobStatus = {
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
  ARCHIVED: "ARCHIVED",
  CLOSED: "CLOSED",
} as const;

export const jobSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  description: z.string().min(20, "Description must be at least 20 characters long"),
  requirements: z.string().min(20, "Requirements must be at least 20 characters long"),
  salaryRange: z.string().optional().nullable(),
  location: z.string().min(2, "Location is required"),
  departmentId: z.number().min(1, "Department is required"),
  type: z.nativeEnum(JobType),
  status: z.nativeEnum(JobStatus).default(JobStatus.DRAFT),
  featured: z.boolean().default(false),
});

export type JobSchema = z.infer<typeof jobSchema>;
