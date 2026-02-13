"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const ROTATING_WORDS = ["Websites", "Apps", "Software", "Brands", "Solutions"];

export function Hero() {
    const [wordIndex, setWordIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
                setIsAnimating(false);
            }, 400);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-8 relative">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4b2bee06_1px,transparent_1px),linear-gradient(to_bottom,#4b2bee06_1px,transparent_1px)] bg-size-[48px_48px] dark:bg-[linear-gradient(to_right,#4b2bee10_1px,transparent_1px),linear-gradient(to_bottom,#4b2bee10_1px,transparent_1px)]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 dark:bg-brand/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
                {/* Left Content */}
                <div className="flex-1 flex flex-col items-start text-left max-w-2xl">
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/70 dark:bg-white/5 border border-brand/10 dark:border-white/10 shadow-sm backdrop-blur-md mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-semibold text-text-muted dark:text-gray-400 tracking-wide">
                            Trusted by 120+ businesses across India
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-bold tracking-tight text-text-main dark:text-white mb-6 leading-[1.1]">
                        We Build Premium{" "}
                        <br className="hidden sm:block" />
                        <span className="relative inline-block overflow-hidden h-[1.15em] align-bottom">
                            <span
                                className={`inline-block text-transparent bg-clip-text bg-linear-to-r from-brand via-brand-purple to-brand-blue transition-all duration-400 ${isAnimating
                                    ? "translate-y-full opacity-0"
                                    : "translate-y-0 opacity-100"
                                    }`}
                            >
                                {ROTATING_WORDS[wordIndex]}
                            </span>
                        </span>
                        <br className="hidden sm:block" />
                        <span className="text-text-main dark:text-white">
                            That Drive Growth
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-base md:text-lg text-text-muted dark:text-gray-400 max-w-lg mb-10 leading-relaxed">
                        From enterprise software to stunning websites, we craft digital
                        experiences that convert visitors into customers and ideas into
                        profitable businesses.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <Link
                            href="/contact"
                            className="group h-13 px-8 rounded-full bg-brand text-white font-semibold text-sm shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2.5"
                        >
                            Start Your Project
                            <span className="material-symbols-outlined text-lg group-hover:translate-x-0.5 transition-transform">
                                arrow_forward
                            </span>
                        </Link>
                        <Link
                            href="/about"
                            className="h-13 px-8 rounded-full bg-white/60 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 text-text-main dark:text-white font-semibold text-sm border border-gray-200/80 dark:border-white/10 hover:border-brand/20 dark:hover:border-brand/30 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            Learn More
                        </Link>
                    </div>

                </div>

                {/* Right Visual — Service Cards Grid */}
                <div className="flex-1 w-full max-w-md lg:max-w-lg relative">
                    {/* Soft glow behind cards */}
                    <div className="absolute -inset-8 bg-linear-to-br from-brand/8 via-brand-purple/5 to-brand-blue/8 dark:from-brand/15 dark:via-brand-purple/10 dark:to-brand-blue/15 rounded-[3rem] blur-2xl -z-10"></div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Card 1 — Primary Highlight */}
                        <div className="col-span-2 group glass-card rounded-2xl p-6 flex items-center gap-5 cursor-default">
                            <div className="shrink-0 size-14 rounded-2xl bg-linear-to-br from-brand to-brand-purple flex items-center justify-center shadow-lg shadow-brand/20 group-hover:scale-105 transition-transform duration-300">
                                <span className="material-symbols-outlined text-white text-2xl">
                                    code
                                </span>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-text-main dark:text-white mb-0.5">
                                    Software Development
                                </h3>
                                <p className="text-xs text-text-muted dark:text-gray-400 leading-relaxed">
                                    Custom ERP, CRM & enterprise solutions tailored to your workflow.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group glass-card rounded-2xl p-5 flex flex-col gap-3 cursor-default">
                            <div className="size-11 rounded-xl bg-linear-to-br from-brand-blue to-cyan-400 flex items-center justify-center shadow-md shadow-brand-blue/20 group-hover:scale-105 transition-transform duration-300">
                                <span className="material-symbols-outlined text-white text-xl">
                                    web
                                </span>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-text-main dark:text-white mb-0.5">
                                    Web Design
                                </h3>
                                <p className="text-[11px] text-text-muted dark:text-gray-400 leading-relaxed">
                                    Stunning, fast websites that convert.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group glass-card rounded-2xl p-5 flex flex-col gap-3 cursor-default">
                            <div className="size-11 rounded-xl bg-linear-to-br from-brand-purple to-pink-400 flex items-center justify-center shadow-md shadow-brand-purple/20 group-hover:scale-105 transition-transform duration-300">
                                <span className="material-symbols-outlined text-white text-xl">
                                    phone_iphone
                                </span>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-text-main dark:text-white mb-0.5">
                                    Mobile Apps
                                </h3>
                                <p className="text-[11px] text-text-muted dark:text-gray-400 leading-relaxed">
                                    iOS & Android apps users love.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="group glass-card rounded-2xl p-5 flex flex-col gap-3 cursor-default">
                            <div className="size-11 rounded-xl bg-linear-to-br from-emerald-500 to-teal-400 flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
                                <span className="material-symbols-outlined text-white text-xl">
                                    campaign
                                </span>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-text-main dark:text-white mb-0.5">
                                    Digital Marketing
                                </h3>
                                <p className="text-[11px] text-text-muted dark:text-gray-400 leading-relaxed">
                                    SEO, SEM & social that drives leads.
                                </p>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="group glass-card rounded-2xl p-5 flex flex-col gap-3 cursor-default">
                            <div className="size-11 rounded-xl bg-linear-to-br from-amber-500 to-orange-400 flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
                                <span className="material-symbols-outlined text-white text-xl">
                                    palette
                                </span>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-text-main dark:text-white mb-0.5">
                                    Graphic Design
                                </h3>
                                <p className="text-[11px] text-text-muted dark:text-gray-400 leading-relaxed">
                                    Brand identity that stands out.
                                </p>
                            </div>
                        </div>

                        {/* Card 6 — Full width bottom */}
                        <div className="col-span-2 group glass-card rounded-2xl p-5 flex items-center gap-5 cursor-default">
                            <div className="shrink-0 size-11 rounded-xl bg-linear-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform duration-300">
                                <span className="material-symbols-outlined text-white text-xl">
                                    verified
                                </span>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-text-main dark:text-white mb-0.5">
                                    Company Registration & Compliance
                                </h3>
                                <p className="text-[11px] text-text-muted dark:text-gray-400 leading-relaxed">
                                    GST, Trademark, ISO — all under one roof.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Integrated Stats Section */}
            <div className="mt-20 pt-10 border-t border-gray-200/60 dark:border-white/5">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        {
                            value: "99",
                            suffix: "%",
                            label: "Customer Satisfaction",
                            icon: "sentiment_very_satisfied",
                        },
                        {
                            value: "25",
                            suffix: "K+",
                            label: "Successful Businesses",
                            icon: "business",
                        },
                        {
                            value: "120",
                            suffix: "+",
                            label: "Global Clients",
                            icon: "public",
                        },
                        {
                            value: "4.9",
                            suffix: "/5",
                            label: "Client Ratings",
                            icon: "star",
                        },
                    ].map((stat, index) => (
                        <div key={index} className="flex flex-col items-center sm:items-start text-center sm:text-left group cursor-default">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="material-symbols-outlined text-3xl text-brand group-hover:scale-110 transition-transform duration-300">
                                    {stat.icon}
                                </span>
                                <div className="flex items-baseline">
                                    <span className="text-3xl md:text-4xl font-bold text-text-main dark:text-white">
                                        {stat.value}
                                    </span>
                                    <span className="text-xl md:text-2xl font-bold text-brand ml-1">
                                        {stat.suffix}
                                    </span>
                                </div>
                            </div>
                            <p className="text-xs md:text-sm text-text-muted dark:text-gray-400 font-medium pl-1">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
