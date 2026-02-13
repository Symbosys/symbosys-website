"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createEnquiry } from "@/actions/enquiry"
import { enquirySchema, EnquirySchema } from "@/validation/enquiry"
import { toast } from "sonner"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ContactCTA() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<EnquirySchema>({
        resolver: zodResolver(enquirySchema),
    })

    const onSubmit = async (data: EnquirySchema) => {
        setIsSubmitting(true)
        try {
            const result = await createEnquiry(data)
            if (result.success) {
                toast.success("Enquiry sent successfully!")
                reset()
                setIsSubmitted(true)
            } else {
                toast.error(result.error || "Something went wrong")
            }
        } catch (error) {
            toast.error("Failed to send enquiry")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="glass-panel rounded-4xl p-8 md:p-16 text-center relative overflow-hidden min-h-[600px] flex items-center justify-center">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-full h-full bg-linear-to-b from-brand/5 via-brand-blue/5 to-transparent -z-10 bg-opacity-50"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brand/50 to-transparent"></div>

                <AnimatePresence mode="wait">
                    {isSubmitted ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex flex-col items-center justify-center space-y-6 max-w-lg mx-auto"
                        >
                            <div className="size-24 rounded-full bg-green-500/10 flex items-center justify-center mb-2">
                                <span className="material-symbols-outlined text-6xl text-green-500">check_circle</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white">
                                Message Received!
                            </h2>
                            <p className="text-lg text-text-muted dark:text-gray-400">
                                Thank you for reaching out. We've received your enquiry and will be flowing back to you shortly.
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="mt-8 px-8 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-main dark:text-white font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            >
                                Send Another Message
                            </button>
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
                            <h2 className="text-3xl md:text-5xl font-bold text-text-main dark:text-white mb-4 tracking-tight">
                                Ready to <span className="text-brand">flow?</span>
                            </h2>
                            <p className="text-lg text-text-muted dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                                Let&apos;s construct a digital reality that surpasses your imagination.
                            </p>

                            <div className="max-w-2xl mx-auto text-left relative z-10">
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="name"
                                                className="text-sm font-semibold text-text-main dark:text-white ml-1"
                                            >
                                                Full Name
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                placeholder="John Doe"
                                                {...register("name")}
                                                className={`w-full rounded-2xl border-none bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm px-6 py-4 text-text-main dark:text-white placeholder:text-text-muted/60 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-brand/50 shadow-inner transition-all outline-none ${errors.name ? "ring-2 ring-red-500" : ""}`}
                                            />
                                            {errors.name && (
                                                <p className="text-red-500 text-xs ml-1">{errors.name.message}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <label
                                                htmlFor="email"
                                                className="text-sm font-semibold text-text-main dark:text-white ml-1"
                                            >
                                                Email Address
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
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
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

                                        <div className="space-y-2">
                                            <label
                                                htmlFor="subject"
                                                className="text-sm font-semibold text-text-main dark:text-white ml-1"
                                            >
                                                Subject
                                            </label>
                                            <input
                                                id="subject"
                                                type="text"
                                                placeholder="Project Inquiry"
                                                {...register("subject")}
                                                className={`w-full rounded-2xl border-none bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm px-6 py-4 text-text-main dark:text-white placeholder:text-text-muted/60 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-brand/50 shadow-inner transition-all outline-none ${errors.subject ? "ring-2 ring-red-500" : ""}`}
                                            />
                                            {errors.subject && (
                                                <p className="text-red-500 text-xs ml-1">{errors.subject.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="message"
                                            className="text-sm font-semibold text-text-main dark:text-white ml-1"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            placeholder="Tell us a bit about your project..."
                                            rows={4}
                                            {...register("message")}
                                            className={`w-full rounded-2xl border-none bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm px-6 py-4 text-text-main dark:text-white placeholder:text-text-muted/60 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-brand/50 shadow-inner transition-all outline-none resize-none ${errors.message ? "ring-2 ring-red-500" : ""}`}
                                        ></textarea>
                                        {errors.message && (
                                            <p className="text-red-500 text-xs ml-1">{errors.message.message}</p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-brand text-white font-bold rounded-2xl px-8 py-4 hover:bg-brand-blue transition-all duration-300 shadow-lg shadow-brand/20 mt-6 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                        {!isSubmitting && (
                                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                                                send
                                            </span>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Background decoration for CTA */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-linear-to-t from-brand/10 to-transparent pointer-events-none"></div>
            </div>
        </section>
    );
}
