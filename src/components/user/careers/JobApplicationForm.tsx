"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applyForJob } from "@/actions/application";
import { applicationSchema, ApplicationSchema } from "@/validation/application";
import { toast } from "sonner";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface JobApplicationFormProps {
    jobId: number;
    jobTitle: string;
}

export function JobApplicationForm({ jobId, jobTitle }: JobApplicationFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<ApplicationSchema>({
        resolver: zodResolver(applicationSchema),
        defaultValues: {
            jobId: jobId,
        }
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                toast.error("File size exceeds 5MB limit");
                if (fileInputRef.current) fileInputRef.current.value = "";
                return;
            }
            if (file.type !== "application/pdf") {
                toast.error("Only PDF files are allowed");
                if (fileInputRef.current) fileInputRef.current.value = "";
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setValue("resume", base64String, { shouldValidate: true });
            };
            reader.readAsDataURL(file);
        }
    };

    const onSubmit = async (data: ApplicationSchema) => {
        setIsSubmitting(true);
        try {
            const result = await applyForJob(data);
            if (result.success) {
                toast.success("Application submitted successfully!");
                reset({ jobId: jobId }); // Keep jobId
                if (fileInputRef.current) fileInputRef.current.value = "";
                setIsSubmitted(true);
            } else {
                toast.error(result.error || "Something went wrong");
            }
        } catch (error) {
            toast.error("Failed to submit application");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full">
            <AnimatePresence mode="wait">
                {isSubmitted ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex flex-col items-center justify-center space-y-6 w-full py-12"
                    >
                        <div className="size-24 rounded-full bg-green-500/10 flex items-center justify-center mb-2">
                            <span className="material-symbols-outlined text-6xl text-green-500">check_circle</span>
                        </div>
                        <h2 className="text-3xl font-bold text-text-main dark:text-white text-center">
                            Application Received!
                        </h2>
                        <p className="text-lg text-text-muted dark:text-gray-400 text-center max-w-sm">
                            Thank you for applying to the <span className="text-brand font-semibold">{jobTitle}</span> position. We will review your resume and flood back to you shortly.
                        </p>
                        
                    </motion.div>
                ) : (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            {/* Hidden Job ID */}
                            <input type="hidden" {...register("jobId", { valueAsNumber: true })} />

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="firstName"
                                        className="text-sm font-semibold text-text-main dark:text-white ml-1"
                                    >
                                        First Name *
                                    </label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        placeholder="John"
                                        {...register("firstName")}
                                        className={`w-full rounded-2xl border-none bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm px-6 py-4 text-text-main dark:text-white placeholder:text-text-muted/60 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-brand/50 shadow-inner transition-all outline-none ${errors.firstName ? "ring-2 ring-red-500" : ""}`}
                                    />
                                    {errors.firstName && (
                                        <p className="text-red-500 text-xs ml-1">{errors.firstName.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="lastName"
                                        className="text-sm font-semibold text-text-main dark:text-white ml-1"
                                    >
                                        Last Name *
                                    </label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        placeholder="Doe"
                                        {...register("lastName")}
                                        className={`w-full rounded-2xl border-none bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm px-6 py-4 text-text-main dark:text-white placeholder:text-text-muted/60 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-brand/50 shadow-inner transition-all outline-none ${errors.lastName ? "ring-2 ring-red-500" : ""}`}
                                    />
                                    {errors.lastName && (
                                        <p className="text-red-500 text-xs ml-1">{errors.lastName.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-semibold text-text-main dark:text-white ml-1"
                                    >
                                        Email Address *
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        {...register("email")}
                                        className={`w-full rounded-2xl border-none bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm px-6 py-4 text-text-main dark:text-white placeholder:text-text-muted/60 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-brand/50 shadow-inner transition-all outline-none ${errors.email ? "ring-2 ring-red-500" : ""}`}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs ml-1">{errors.email.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="phone"
                                        className="text-sm font-semibold text-text-main dark:text-white ml-1"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        type="text"
                                        placeholder="+1 234 567 890"
                                        {...register("phone")}
                                        className={`w-full rounded-2xl border-none bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm px-6 py-4 text-text-main dark:text-white placeholder:text-text-muted/60 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-brand/50 shadow-inner transition-all outline-none ${errors.phone ? "ring-2 ring-red-500" : ""}`}
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-xs ml-1">{errors.phone.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="linkedin"
                                        className="text-sm font-semibold text-text-main dark:text-white ml-1"
                                    >
                                        LinkedIn URL
                                    </label>
                                    <input
                                        id="linkedin"
                                        type="text"
                                        placeholder="https://linkedin.com/in/..."
                                        {...register("linkedin")}
                                        className={`w-full rounded-2xl border-none bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm px-6 py-4 text-text-main dark:text-white placeholder:text-text-muted/60 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-brand/50 shadow-inner transition-all outline-none ${errors.linkedin ? "ring-2 ring-red-500" : ""}`}
                                    />
                                    {errors.linkedin && (
                                        <p className="text-red-500 text-xs ml-1">{errors.linkedin.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="portfolio"
                                        className="text-sm font-semibold text-text-main dark:text-white ml-1"
                                    >
                                        Portfolio URL
                                    </label>
                                    <input
                                        id="portfolio"
                                        type="text"
                                        placeholder="https://john.design"
                                        {...register("portfolio")}
                                        className={`w-full rounded-2xl border-none bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm px-6 py-4 text-text-main dark:text-white placeholder:text-text-muted/60 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-brand/50 shadow-inner transition-all outline-none ${errors.portfolio ? "ring-2 ring-red-500" : ""}`}
                                    />
                                    {errors.portfolio && (
                                        <p className="text-red-500 text-xs ml-1">{errors.portfolio.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="resume"
                                    className="text-sm font-semibold text-text-main dark:text-white ml-1"
                                >
                                    Resume (PDF only, max 5MB) *
                                </label>
                                <div className="relative">
                                    <input
                                        id="resume-upload"
                                        type="file"
                                        accept="application/pdf"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        className={`w-full rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 bg-white/40 dark:bg-gray-800/40 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all px-6 py-8 flex flex-col items-center justify-center gap-2 cursor-pointer ${errors.resume ? "border-red-500 ring-1 ring-red-500" : "hover:border-brand/50 hover:ring-2 hover:ring-brand/20"}`}
                                    >
                                        <span className="material-symbols-outlined text-4xl text-brand">upload_file</span>
                                        <span className="text-sm font-medium text-text-main dark:text-white">Click to upload your resume</span>
                                        <span className="text-xs text-text-muted dark:text-gray-500">PDF, max 5MB</span>
                                    </button>
                                </div>
                                {/* Hidden input to register resume field for validation error placement */}
                                <input type="hidden" {...register("resume")} />

                                {errors.resume && (
                                    <p className="text-red-500 text-xs ml-1">{errors.resume.message}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="coverLetter"
                                    className="text-sm font-semibold text-text-main dark:text-white ml-1"
                                >
                                    Cover Letter
                                </label>
                                <textarea
                                    id="coverLetter"
                                    placeholder="Tell us why you're a great fit..."
                                    rows={4}
                                    {...register("coverLetter")}
                                    className={`w-full rounded-2xl border-none bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm px-6 py-4 text-text-main dark:text-white placeholder:text-text-muted/60 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-brand/50 shadow-inner transition-all outline-none resize-none ${errors.coverLetter ? "ring-2 ring-red-500" : ""}`}
                                ></textarea>
                                {errors.coverLetter && (
                                    <p className="text-red-500 text-xs ml-1">{errors.coverLetter.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-brand text-white font-bold rounded-2xl px-8 py-4 hover:bg-brand-blue transition-all duration-300 shadow-lg shadow-brand/20 mt-6 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                            >
                                {isSubmitting ? "Submitting Application..." : "Submit Application"}
                                {!isSubmitting && (
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                                        send
                                    </span>
                                )}
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
