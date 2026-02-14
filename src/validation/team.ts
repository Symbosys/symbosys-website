import { z } from "zod";

export const TeamMemberStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

export const TeamSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  departmentId: z.number().min(1, "Department is required"),
  status: z.nativeEnum(TeamMemberStatus).default(TeamMemberStatus.ACTIVE),
  image: z.object({
    url: z.string().url("Invalid image URL"),
    public_id: z.string().min(1, "Public ID is required"),
  })
});

export type TeamSchema = z.infer<typeof TeamSchema>;
