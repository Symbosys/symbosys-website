import z from "zod";

export const enquirySchema = z.object({
    name: z.string("Name is required").min(3, "Name must be at least 3 characters long"),
    email: z.string("Email is required").email("Invalid email address"),
    phone: z.string("Phone number is required").min(10, "Phone number must be at least 10 digits long"),
    subject: z.string("Subject is required").min(5, "Subject must be at least 5 characters long").max(100, "Subject must be at most 100 characters long"),
    message: z.string("Message is required").min(10, "Message must be at least 10 characters long").max(500, "Message must be at most 500 characters long"),
});

export type EnquirySchema = z.infer<typeof enquirySchema>;