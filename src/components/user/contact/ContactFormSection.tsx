"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createEnquiry } from "@/actions/enquiry";
import { enquirySchema, EnquirySchema } from "@/validation/enquiry";
import { toast } from "sonner";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactFormSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<EnquirySchema>({
        resolver: zodResolver(enquirySchema),
    });

    const onSubmit = async (data: EnquirySchema) => {
        setIsSubmitting(true);
        try {
            const result = await createEnquiry(data);
            if (result.success) {
                toast.success("Enquiry sent successfully!");
                reset();
                setIsSubmitted(true);
            } else {
                toast.error(result.error || "Something went wrong");
            }
        } catch (error) {
            toast.error("Failed to send enquiry");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
                {/* Left: Contact Info */}
                <div>
                    <h2 className="text-3xl font-bold text-text-main dark:text-white mb-6">
                        Get In <span className="text-brand">Touch</span>
                    </h2>
                    <p className="text-text-muted dark:text-gray-400 text-lg mb-12 leading-relaxed">
                        Fill out the form and our team will get back to you within 24 hours.
                        We are excited to hear from you.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-6 group">
                            <div className="size-14 rounded-2xl bg-brand/5 dark:bg-brand/10 flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined text-3xl">
                                    location_on
                                </span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-text-main dark:text-white mb-1">
                                    Our Office
                                </h3>
                                <p className="text-text-muted dark:text-gray-400 text-lg">
                                    Harmu, Ranchi, Jharkhand, India
                                </p>
                                <a
                                    href="https://www.google.com/maps/dir//Symbosys+-+Software+Company+in+Ranchi"
                                    target="_blank"
                                    className="text-brand font-semibold text-sm mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all"
                                >
                                    View on Map
                                    <span className="material-symbols-outlined text-sm">
                                        arrow_forward
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="size-14 rounded-2xl bg-brand/5 dark:bg-brand/10 flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined text-3xl">call</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-text-main dark:text-white mb-1">Phone</h3>
                                <p className="text-text-muted dark:text-gray-400 text-lg">+91 9122010150</p>
                                <a
                                    href="tel:+919122010150"
                                    className="text-brand font-semibold text-sm mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all"
                                >
                                    Call Now
                                    <span className="material-symbols-outlined text-sm">
                                        arrow_forward
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="size-14 rounded-2xl bg-brand/5 dark:bg-brand/10 flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined text-3xl">mail</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-text-main dark:text-white mb-1">Email</h3>
                                <p className="text-text-muted dark:text-gray-400 text-lg">support@symbosys.com</p>
                                <a
                                    href="mailto:support@symbosys.com"
                                    className="text-brand font-semibold text-sm mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all"
                                >
                                    Send Email
                                    <span className="material-symbols-outlined text-sm">
                                        arrow_forward
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="glass-card p-8 rounded-4xl relative overflow-hidden flex flex-col justify-center min-h-[500px]">
                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-bl-full -z-10"></div>

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
                                    Message Received!
                                </h2>
                                <p className="text-lg text-text-muted dark:text-gray-400 text-center max-w-sm">
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
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Map */}
            <div className="w-full h-[450px] rounded-3xl overflow-hidden glass-card relative group">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207.16811214141615!2d85.31134976011984!3d23.357395597807912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5d0fb3d9fc771b%3A0x97d1957c5216c0c2!2sSymbosys%20-%20Software%20Company%20in%20Ranchi!5e1!3m2!1sen!2sin!4v1769756556338!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
            </div>
        </section>
    );
}

