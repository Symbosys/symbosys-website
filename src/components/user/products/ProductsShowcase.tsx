import Link from "next/link";

// Helper function to generate product page URLs
function getProductLink(productName: string): string {
    const productLinks: Record<string, string> = {
        "E-commerce Website": "/products/e-commerce",
        "Informative Website": "/products/informative-website",
        "Blogs & News Website": "/products/blogs-news-website",
        "NGO & Non-profit Websites": "/products/ngo-non-profit-website",
        "Educational Websites": "/products/educational-website",
        "Social Media Websites": "/products/social-media-website",
        "Business Website": "/products/business-website",
        "Personal Websites": "/products/personal-website",
        "School Management Software": "/products/school-management-software",
        "College Management Software": "/products/college-management-software",
        "Hospital Management Software": "/products/hospital-management-software",
        "Hotel Management Software": "/products/hotel-management-software",
        "Restaurant Management Software": "/products/restaurant-management-software",
        "Library Management Software": "/products/library-management-software",
        "Real Estate Management Software": "/products/real-estate-management-software",
        "Transport Management Software": "/products/transport-management-software",
        "Inventory Management Software": "/products/inventory-management-software",
        "Construction Management Software": "/products/construction-management-software",
        "Custom ERP Management Software": "/products/custom-erp-management-software",
        "Gaming App Development": "/products/gaming-app-development",
        "Social Media App Development": "/products/social-media-app-development",
        "E-Commerce App Development": "/products/e-commerce-app-development",
        "Dating App Development": "/products/dating-app-development",
        "Fitness App Development": "/products/fitness-app-development",
        "Entertainment App Development": "/products/entertainment-app-development",
        "Finance App Development": "/products/finance-app-development",
        "Business App Development": "/products/business-app-development",
    };
    return productLinks[productName] || "#";
}

export function ProductsShowcase() {
    const products = [
        // Web Development - 8 products with unique colors
        { name: "E-commerce Website", icon: "shopping_cart", description: "Feature-rich online stores with secure payment integration", gradient: "from-blue-500 to-cyan-400", color: "#3b82f6" },
        { name: "Informative Website", icon: "info", description: "Beautiful landing pages that tell your brand story", gradient: "from-violet-600 to-purple-500", color: "#7c3aed" },
        { name: "Blogs & News Website", icon: "article", description: "Dynamic content platforms with easy publishing tools", gradient: "from-fuchsia-500 to-pink-500", color: "#d946ef" },
        { name: "NGO & Non-profit Websites", icon: "volunteer_activism", description: "Impactful digital presence for your cause", gradient: "from-emerald-500 to-green-400", color: "#10b981" },
        { name: "Educational Websites", icon: "school", description: "Interactive learning portals and LMS platforms", gradient: "from-amber-500 to-yellow-400", color: "#f59e0b" },
        { name: "Social Media Websites", icon: "share", description: "Community-driven platforms with social features", gradient: "from-rose-500 to-red-400", color: "#f43f5e" },
        { name: "Business Website", icon: "store", description: "Professional corporate websites that convert", gradient: "from-indigo-600 to-blue-500", color: "#4f46e5" },
        { name: "Personal Websites", icon: "person", description: "Stunning portfolios that showcase your work", gradient: "from-teal-500 to-cyan-400", color: "#14b8a6" },
        // Management Software - 11 products with unique colors
        { name: "School Management Software", icon: "school", description: "Complete academic administration solution", gradient: "from-purple-600 to-violet-500", color: "#9333ea" },
        { name: "College Management Software", icon: "account_balance", description: "Enterprise-grade university management", gradient: "from-sky-500 to-blue-400", color: "#0ea5e9" },
        { name: "Hospital Management Software", icon: "local_hospital", description: "Healthcare workflow & patient management", gradient: "from-red-600 to-rose-500", color: "#dc2626" },
        { name: "Hotel Management Software", icon: "hotel", description: "Streamline bookings & guest experiences", gradient: "from-orange-500 to-amber-400", color: "#f97316" },
        { name: "Restaurant Management Software", icon: "restaurant", description: "POS, inventory & order management", gradient: "from-pink-600 to-rose-500", color: "#db2777" },
        { name: "Library Management Software", icon: "local_library", description: "Digital cataloging & lending systems", gradient: "from-green-600 to-emerald-500", color: "#16a34a" },
        { name: "Real Estate Management Software", icon: "apartment", description: "Property listings & CRM solutions", gradient: "from-cyan-600 to-teal-500", color: "#0891b2" },
        { name: "Transport Management Software", icon: "directions_bus", description: "Fleet tracking & logistics optimization", gradient: "from-slate-600 to-gray-500", color: "#475569" },
        { name: "Inventory Management Software", icon: "inventory_2", description: "Real-time stock & warehouse control", gradient: "from-lime-500 to-green-400", color: "#84cc16" },
        { name: "Construction Management Software", icon: "construction", description: "Project planning & resource allocation", gradient: "from-yellow-500 to-orange-400", color: "#eab308" },
        { name: "Custom ERP Management Software", icon: "settings_suggest", description: "Tailored enterprise resource planning", gradient: "from-brand to-indigo-500", color: "#4b2bee" },
        // App Development - 8 products with unique colors (ALL DIFFERENT from above)
        { name: "Gaming App Development", icon: "sports_esports", description: "Immersive mobile gaming experiences", gradient: "from-purple-500 to-fuchsia-500", color: "#a855f7" },
        { name: "Social Media App Development", icon: "groups", description: "Connect communities with modern apps", gradient: "from-blue-600 to-sky-500", color: "#2563eb" },
        { name: "E-Commerce App Development", icon: "shopping_bag", description: "Mobile-first shopping experiences", gradient: "from-teal-600 to-green-500", color: "#0d9488" },
        { name: "Dating App Development", icon: "favorite", description: "Meaningful connections, modern design", gradient: "from-red-500 to-pink-500", color: "#ef4444" },
        { name: "Fitness App Development", icon: "fitness_center", description: "Health tracking & workout apps", gradient: "from-orange-600 to-yellow-500", color: "#ea580c" },
        { name: "Entertainment App Development", icon: "movie", description: "Streaming & media applications", gradient: "from-rose-600 to-red-500", color: "#e11d48" },
        { name: "Finance App Development", icon: "payments", description: "Secure fintech & banking solutions", gradient: "from-emerald-600 to-cyan-500", color: "#059669" },
        { name: "Business App Development", icon: "business_center", description: "Enterprise productivity tools", gradient: "from-indigo-500 to-purple-500", color: "#6366f1" },
    ];


    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 pt-32">
            {/* Hero Header with enhanced design */}
            <div className="text-center mb-24 relative">
                {/* Decorative elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative">
                    <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand/10 text-brand text-sm font-bold mb-8 border border-brand/20 shadow-lg shadow-brand/5">
                        <span className="material-symbols-outlined text-base animate-pulse">auto_awesome</span>
                        Digital Excellence
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-text-main mb-10 leading-[1.1] tracking-tight">
                        Crafting Digital
                        <br />
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-brand via-brand-blue to-brand-purple animate-gradient bg-size-[200%_auto]">
                            Masterpieces
                        </span>
                    </h1>
                    <p className="text-text-muted text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
                        From stunning websites to powerful enterprise software and
                        innovative mobile apps — we bring your digital vision to life.
                    </p>
                </div>
            </div>

            {/* Enhanced Stats Row */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-24">
                {[
                    { value: "27+", label: "Solutions", icon: "widgets", color: "from-brand to-brand-blue" },
                    { value: "500+", label: "Projects Delivered", icon: "rocket_launch", color: "from-emerald-500 to-teal-500" },
                    { value: "99%", label: "Client Satisfaction", icon: "sentiment_very_satisfied", color: "from-amber-500 to-orange-500" },
                ].map((stat, idx) => (
                    <div key={idx} className="group relative bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 min-w-[180px]">
                        <div className={`size-12 rounded-2xl bg-linear-to-br ${stat.color} flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                            <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
                        </div>
                        <div className="text-4xl md:text-5xl font-bold text-text-main mb-1">{stat.value}</div>
                        <div className="text-text-muted text-sm font-medium">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Section Divider */}
            <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-brand/20 to-transparent"></div>
                <span className="text-text-muted font-medium text-sm tracking-wide uppercase">Our Solutions</span>
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-brand/20 to-transparent"></div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {products.map((product, idx) => (
                    <Link
                        key={idx}
                        href={getProductLink(product.name)}
                        style={{ '--theme-color': product.color } as React.CSSProperties}
                        className="group relative bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 hover:bg-white hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-200 transition-all duration-300 cursor-pointer block"
                    >
                        {/* Icon */}
                        <div className={`size-12 rounded-xl bg-linear-to-br ${product.gradient} flex items-center justify-center text-white shadow-lg mb-5 group-hover:scale-105 transition-transform duration-300`}>
                            <span className="material-symbols-outlined text-2xl">{product.icon}</span>
                        </div>

                        {/* Content */}
                        <h3 className="font-bold text-text-main text-lg mb-2 group-hover:text-(--theme-color) transition-colors duration-300 leading-snug">
                            {product.name}
                        </h3>
                        <p className="text-text-muted text-sm leading-relaxed line-clamp-2 mb-5">
                            {product.description}
                        </p>

                        {/* Arrow Indicator */}
                        <div className="flex items-center gap-2 text-(--theme-color)">
                            <span className="text-sm font-semibold">Learn more</span>
                            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Enhanced Bottom CTA */}
            <div className="mt-32 relative">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-linear-to-r from-brand/5 via-brand-blue/5 to-brand-purple/5 rounded-4xl blur-2xl"></div>

                <div className="relative glass-card flex flex-col lg:flex-row items-center gap-8 lg:gap-16 p-10 lg:p-16 rounded-4xl border border-white/50 overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute -top-40 -left-40 size-80 bg-brand/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -right-40 size-80 bg-brand-blue/10 rounded-full blur-3xl"></div>

                    <div className="relative text-center lg:text-left flex-1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 text-brand text-xs font-bold mb-4">
                            <span className="material-symbols-outlined text-sm">handshake</span>
                            Let&apos;s Collaborate
                        </div>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main mb-4 leading-tight">
                            Can&apos;t find what you need?
                        </h3>
                        <p className="text-text-muted text-lg max-w-lg">
                            We build custom solutions tailored to your unique requirements. Let&apos;s discuss your vision.
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="group relative overflow-hidden shrink-0 px-10 py-5 bg-text-main text-white font-bold rounded-full shadow-2xl hover:shadow-brand/30 hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                        <span className="relative z-10 flex items-center gap-3 text-lg">
                            Get Custom Quote
                            <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </span>
                        <div className="absolute inset-0 bg-linear-to-r from-brand to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
