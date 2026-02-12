"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const { theme } = useTheme();

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
    }, [pathname]);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const servicesList = [
        { name: "Website Designing & Development", icon: "web", href: "/service/website-designing" },
        { name: "SEO Optimization", icon: "search", href: "/service/seo-optimization" },
        { name: "Video & Animation", icon: "movie", href: "/service/video-animation" },
        { name: "Domain & Hosting", icon: "dns", href: "/service/domain-hosting" },
        { name: "Digital Marketing", icon: "campaign", href: "/service/digital-marketing" },
        { name: "Mobile App Development", icon: "phone_iphone", href: "/service/mobile-app-development" },
        { name: "Software Development", icon: "terminal", href: "/service/software-development" },
        { name: "Company Registration and E-Filing", icon: "app_registration", href: "/service/company-registration" },
        { name: "Trade Mark and ISO Certification", icon: "verified", href: "/service/trademark-iso-certification" },
        { name: "Business Consultancy", icon: "handshake", href: "/service/business-consultancy" },
        { name: "Ecommerce", icon: "shopping_cart", href: "/service/ecommerce" },
        { name: "Graphics Designing", icon: "palette", href: "/service/graphics-designing" },
    ];

    const companyList = [
        { name: "About Us", icon: "info", href: "/about" },
        { name: "Our Products", icon: "inventory_2", href: "/products" },
        { name: "Our Teams", icon: "groups", href: "/our-teams" },
        { name: "Career", icon: "work", href: "/careers" },
        { name: "Working Culture", icon: "volunteer_activism", href: "/working-culture" },
    ];

    const navItems = [
        { name: "Home", href: "/" },
        {
            name: "Company",
            href: "/company",
            dropdown: true,
            items: companyList,
        },
        {
            name: "Services",
            href: "/services",
            dropdown: true,
            items: servicesList,
        },
        { name: "Contact", href: "/contact" },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
            {/* Main Navbar Bar */}
            <div className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl border border-white/40 dark:border-gray-700/50 rounded-full px-6 py-3 flex items-center justify-between shadow-xl dark:shadow-2xl dark:shadow-brand/5 relative z-50 transition-colors duration-300">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative h-14 w-auto group-hover:scale-105 transition-transform duration-500">
                        <Image
                            src="/company/newlog.webp"
                            alt="Symbosys Logo"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-auto h-full dark:hidden"
                            priority
                        />
                        <Image
                            src="/company/newlog-dark.webp"
                            alt="Symbosys Logo"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-auto h-full hidden dark:block"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative group/nav">
                            {item.dropdown ? (
                                <button
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1 cursor-default ${isActive(item.href)
                                        ? "bg-brand/10 text-brand font-bold shadow-sm"
                                        : "text-text-main/80 dark:text-gray-300 hover:text-brand dark:hover:text-brand hover:bg-white/50 dark:hover:bg-gray-800/50"
                                        }`}
                                >
                                    {item.name}
                                    <span className="material-symbols-outlined text-lg group-hover/nav:rotate-180 transition-transform duration-300">
                                        expand_more
                                    </span>
                                </button>
                            ) : (
                                <Link
                                    href={item.href}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 block ${isActive(item.href)
                                        ? "bg-brand/10 text-brand font-bold shadow-sm"
                                        : "text-text-main/80 dark:text-gray-300 hover:text-brand dark:hover:text-brand hover:bg-white/50 dark:hover:bg-gray-800/50"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            )}

                            {/* Desktop Dropdown Menu */}
                            {item.dropdown && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 w-[500px] z-50 pt-4">
                                    <div className="bg-white/98 dark:bg-gray-900/98 backdrop-blur-3xl border border-white/50 dark:border-gray-700/50 rounded-3xl shadow-2xl p-4 overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
                                        <div className="grid grid-cols-2 gap-2">
                                            {item.items?.map((subItem, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={subItem.href}
                                                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-brand/5 dark:hover:bg-brand/10 transition-colors group/item"
                                                >
                                                    <div className="size-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center group-hover/item:bg-brand group-hover/item:text-white transition-colors duration-300">
                                                        <span className="material-symbols-outlined text-lg">
                                                            {subItem.icon}
                                                        </span>
                                                    </div>
                                                    <span className="text-xs font-bold text-text-main dark:text-gray-200 group-hover/item:text-brand transition-colors line-clamp-1">
                                                        {subItem.name}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-2 md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-text-main dark:text-white relative z-50 hover:bg-brand/5 rounded-full transition-colors"
                    >
                        <span className="material-symbols-outlined text-2xl">
                            {isOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <div className={`fixed inset-0 top-0 left-0 w-screen h-screen bg-white/90 dark:bg-gray-950/95 backdrop-blur-3xl z-40 transition-all duration-700 ease-in-out md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
                {/* Decorative background elements */}
                <div className="absolute top-1/4 -left-20 size-64 bg-brand/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 size-64 bg-brand-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

                <div className="relative flex flex-col items-center justify-start h-full px-6 pt-32 pb-10 overflow-y-auto scrollbar-hide">
                    <div className="w-full max-w-sm flex flex-col gap-3">
                        {navItems.map((item, index) => (
                            <div key={item.name}
                                style={{
                                    transitionDelay: isOpen ? `${index * 80 + 100}ms` : '0ms',
                                    transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                                    opacity: isOpen ? 1 : 0
                                }}
                                className="transition-all duration-500 ease-out"
                            >
                                {item.dropdown ? (
                                    <div className="flex flex-col">
                                        <button
                                            onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                                            className="w-full flex items-center justify-between p-4 rounded-3xl text-2xl font-bold text-text-main dark:text-white hover:bg-brand/5 dark:hover:bg-brand/10 hover:text-brand transition-all group"
                                        >
                                            <span className="relative">
                                                {item.name}
                                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand transition-all duration-300 ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                            </span>
                                            <span className={`material-symbols-outlined text-3xl transition-transform duration-500 ${activeDropdown === item.name ? "rotate-180 text-brand" : "text-text-muted dark:text-gray-500"}`}>
                                                expand_more
                                            </span>
                                        </button>
                                        <div className={`grid transition-all duration-500 ease-in-out ${activeDropdown === item.name ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 overflow-hidden"}`}>
                                            <div className="min-h-0 bg-brand/5 dark:bg-brand/10 rounded-3xl p-3 grid grid-cols-1 gap-1 border border-brand/5 dark:border-brand/20">
                                                {item.items?.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all group/sub"
                                                    >
                                                        <div className="size-10 rounded-xl bg-white dark:bg-gray-800 shadow-sm text-brand flex items-center justify-center group-hover/sub:bg-brand group-hover/sub:text-white transition-all duration-300">
                                                            <span className="material-symbols-outlined text-xl">
                                                                {subItem.icon}
                                                            </span>
                                                        </div>
                                                        <span className="text-base font-semibold text-text-main dark:text-gray-200 group-hover/sub:text-brand transition-colors">
                                                            {subItem.name}
                                                        </span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`w-full block p-4 rounded-3xl text-2xl font-bold transition-all group ${isActive(item.href) ? "text-brand bg-brand/5 dark:bg-brand/10" : "text-text-main dark:text-white hover:bg-brand/5 dark:hover:bg-brand/10 hover:text-brand"}`}
                                    >
                                        <span className="relative">
                                            {item.name}
                                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand transition-all duration-300 ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                        </span>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </nav>
    );
}

