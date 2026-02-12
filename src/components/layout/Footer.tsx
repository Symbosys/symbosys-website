"use client";

import { FooterBackgroundGradient, TextHoverEffect } from "@/components/layout/footer/hover-footer";
import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter,
    Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
    // Footer link data
    // Footer link data
    const footerLinks = [
        {
            title: "Company",
            links: [
                { label: "About Us", href: "/about" },
                { label: "Our Products", href: "/products" },
                { label: "Our Teams", href: "/our-teams" },
                { label: "Careers", href: "/careers" },
                { label: "Working Culture", href: "/working-culture" },
            ],
        },
        {
            title: "Helpful Links",
            links: [
                { label: "Terms & Conditions", href: "/terms-conditions" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "FAQs", href: "/faqs" },
                { label: "Support", href: "/support" },
                { label: "Contact", href: "/contact" },
            ],
        },
    ];

    // Contact info data
    const contactInfo = [
        {
            icon: <Mail size={18} className="text-[#3ca2fa]" />,
            text: "support@symbosys.com",
            href: "mailto:support@symbosys.com",
        },
        {
            icon: <Phone size={18} className="text-[#3ca2fa]" />,
            text: "+91 9122010150",
            href: "tel:+919122010150",
        },
        {
            icon: <MapPin size={22} className="text-[#3ca2fa] shrink-0" />,
            text: "F/192, Harmu Housing Colony, Delatoli, Ranchi, Jharkhand 834002",
        },
    ];

    // Social media icons
    const socialLinks = [
        { icon: <Facebook size={20} />, label: "Facebook", href: "https://www.facebook.com/symbosystech/" },
        { icon: <Twitter size={20} />, label: "Twitter", href: "https://x.com/SymbosysTech" },
        { icon: <Instagram size={20} />, label: "Instagram", href: "https://www.instagram.com/symbosys/" },
        { icon: <Youtube size={20} />, label: "Youtube", href: "https://www.youtube.com/@Symbosys" },
        { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://in.linkedin.com/company/symbosys" },
    ];

    return (
        <footer className="bg-[#0F0F11]/10 relative h-fit rounded-3xl overflow-hidden m-8">
            <div className="max-w-7xl mx-auto p-14 z-40 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
                    {/* Brand section */}
                    <div className="flex flex-col space-y-4">
                        <div className="relative h-14 w-auto transition-transform duration-500 hover:scale-105">
                            <Image
                                src="/company/newlog.webp"
                                alt="Symbosys Logo"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-auto h-full dark:hidden"
                            />
                            <Image
                                src="/company/newlog-dark.webp"
                                alt="Symbosys Logo"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-auto h-full hidden dark:block"
                            />
                        </div>
                        <p className="text-sm leading-relaxed">
                            Innovating Beyond Imagination. We transform ideas into reality through cutting-edge technology and digital excellence.
                        </p>
                    </div>

                    {/* Footer link sections */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-white text-lg font-semibold mb-6">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label} className="relative">
                                        <Link
                                            href={link.href}
                                            className="hover:text-[#3ca2fa] transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact section */}
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-6">
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            {contactInfo.map((item, i) => (
                                <li key={i} className="flex items-center space-x-3">
                                    {item.icon}
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            className="hover:text-[#3ca2fa] transition-colors"
                                        >
                                            {item.text}
                                        </a>
                                    ) : (
                                        <span className="hover:text-[#3ca2fa] transition-colors">
                                            {item.text}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <hr className="border-t border-gray-700 my-8" />

                {/* Footer bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
                    {/* Social icons */}
                    <div className="flex space-x-6 text-gray-400">
                        {socialLinks.map(({ icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                aria-label={label}
                                className="hover:text-[#3ca2fa] transition-colors"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-center md:text-left">
                        &copy; {new Date().getFullYear()} Symbosys. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Text hover effect */}
            <div className="lg:flex hidden h-120 -mt-30 -mb-30 p-40">
                <TextHoverEffect text="Symbosys" className="z-50" />
            </div>

            <FooterBackgroundGradient />
        </footer>
    );
}
