"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MENU_ITEMS = [
    { name: "Dashboard", icon: "dashboard", href: "/admin" },
    { name: "Enquiries", icon: "mail", href: "/admin/enquiries" },
    { name: "Departments", icon: "domain", href: "/admin/departments" },
    { name: "Team", icon: "groups", href: "/admin/team" },
    { name: "Jobs", icon: "work", href: "/admin/jobs" },
    { name: "Job Applications", icon: "description", href: "/admin/applications" },
];

export function AdminSidebar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Mobile Menu Toggle */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg text-text-main dark:text-white"
            >
                <span className="material-symbols-outlined text-2xl">
                    {isMobileMenuOpen ? "close" : "menu"}
                </span>
            </button>

            {/* Backdrop for mobile */}
            {isMobileMenuOpen && (
                <div
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                />
            )}

            {/* Sidebar Container */}
            <aside
                className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-40 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Logo Area */}
                    <div className="h-20 flex items-center px-8 border-b border-gray-100 dark:border-gray-800">
                        <span className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-brand to-brand-blue">
                            Symbosys<span className="text-text-main dark:text-white">Admin</span>
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
                        {MENU_ITEMS.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${isActive
                                            ? "bg-brand/10 text-brand font-semibold"
                                            : "text-text-muted dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-text-main dark:hover:text-white"
                                        }`}
                                >
                                    {isActive && (
                                        <div className="absolute left-0 w-1 h-8 bg-brand rounded-r-full" />
                                    )}
                                    <span
                                        className={`material-symbols-outlined text-xl transition-colors ${isActive ? "text-brand" : "group-hover:text-text-main dark:group-hover:text-white"
                                            }`}
                                    >
                                        {item.icon}
                                    </span>
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* User Profile / Footer */}
                    <div className="p-4 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-white/5">
                            <div className="size-10 rounded-full bg-brand/20 flex items-center justify-center text-brand font-bold">
                                A
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-text-main dark:text-white truncate">
                                    Admin User
                                </p>
                                <p className="text-xs text-text-muted dark:text-gray-400 truncate">
                                    admin@symbosys.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
