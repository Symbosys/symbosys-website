import Link from "next/link";

interface Section {
    title: string;
    icon: string;
    content?: string;
    items?: { subtitle: string; text: string }[];
}

interface ProductLayoutProps {
    title: string;
    subtitle: string;
    description: string;
    themeColor: string;
    gradient: string;
    icon: string;
    badge: string;
    sections: Section[];
    ctaTitle: string;
    ctaDescription: string;
}

export function ProductLayout({
    title,
    subtitle,
    description,
    themeColor,
    gradient,
    icon,
    badge,
    sections,
    ctaTitle,
    ctaDescription,
}: ProductLayoutProps) {
    return (
        <div className="bg-surface dark:bg-gray-950 text-text-main dark:text-gray-100 font-sans antialiased selection:bg-brand/20 selection:text-brand dark:selection:bg-brand/40 relative overflow-x-hidden min-h-screen transition-colors duration-300">
            {/* Liquid Light Background - Animated Gradient Orbs */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Primary flowing orb */}
                <div
                    className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-[0.15] dark:opacity-[0.2]"
                    style={{
                        background: `radial-gradient(circle, ${themeColor} 0%, transparent 70%)`,
                        top: '-20%',
                        right: '-10%',
                        animation: 'liquid-float 20s ease-in-out infinite'
                    }}
                />
                {/* Secondary flowing orb */}
                <div
                    className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-[0.12] dark:opacity-[0.18]"
                    style={{
                        background: `radial-gradient(circle, ${themeColor} 0%, transparent 70%)`,
                        bottom: '-15%',
                        left: '-5%',
                        animation: 'liquid-float 25s ease-in-out infinite reverse'
                    }}
                />
                {/* Tertiary accent orb */}
                <div
                    className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-[0.08] dark:opacity-[0.12]"
                    style={{
                        background: `linear-gradient(135deg, ${themeColor}, transparent)`,
                        top: '40%',
                        left: '60%',
                        animation: 'liquid-float 15s ease-in-out infinite'
                    }}
                />
                {/* Aurora Flow overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                    style={{
                        background: `linear-gradient(135deg, #7C8CFF 0%, #B77CFF 45%, #FF8CCF 100%)`
                    }}
                />
                {/* Base overlay for readability */}
                <div className="absolute inset-0 bg-linear-to-b from-white/95 via-white/90 to-white/95 dark:from-gray-950/95 dark:via-gray-950/90 dark:to-gray-950/95" />
            </div>


            <main className="relative z-10">
                {/* Hero Section with Liquid Light Effect */}
                <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
                    {/* Hero-specific glow */}
                    <div
                        className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[100px] opacity-[0.2] dark:opacity-[0.3] pointer-events-none"
                        style={{ background: themeColor }}
                    />

                    <div className="max-w-5xl mx-auto text-center relative">
                        {/* Glassmorphic Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 backdrop-blur-md border shadow-lg"
                            style={{
                                backgroundColor: `${themeColor}15`,
                                color: themeColor,
                                borderColor: `${themeColor}30`,
                                boxShadow: `0 4px 24px -2px ${themeColor}20`
                            }}
                        >
                            <span className="material-symbols-outlined text-lg">{icon}</span>
                            {badge}
                        </div>

                        {/* Title with enhanced gradient */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main dark:text-white mb-8 leading-tight">
                            {title}
                            <span
                                className={`block bg-clip-text text-transparent bg-linear-to-r ${gradient} drop-shadow-sm`}
                            >
                                {subtitle}
                            </span>
                        </h1>

                        {/* Intro Paragraph */}
                        <p className="text-text-muted dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12">
                            {description}
                        </p>

                        {/* Enhanced CTA with liquid light glow */}
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 active:scale-95 relative overflow-hidden"
                            style={{
                                background: `linear-gradient(135deg, ${themeColor} 0%, ${themeColor}dd 100%)`,
                                boxShadow: `0 20px 40px -10px ${themeColor}50, 0 0 60px -15px ${themeColor}40`
                            }}
                        >
                            {/* Liquid shine effect */}
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            <span className="relative">Start Your Project</span>
                            <span className="material-symbols-outlined relative group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>
                </section>

                {/* Content Sections with Glassmorphism */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            {sections.map((section, idx) => (
                                <div
                                    key={idx}
                                    className="group relative glass-card rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                >
                                    {/* Hover glow effect */}
                                    <div
                                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                        style={{
                                            boxShadow: `0 0 40px -10px ${themeColor}30`
                                        }}
                                    />

                                    {/* Header */}
                                    <div className="flex items-start gap-4 mb-6 relative">
                                        <div
                                            className={`size-14 shrink-0 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                                            style={{
                                                boxShadow: `0 10px 30px -5px ${themeColor}40`
                                            }}
                                        >
                                            <span className="material-symbols-outlined text-2xl">{section.icon}</span>
                                        </div>
                                        <h2
                                            className="text-xl font-bold text-text-main dark:text-white transition-colors duration-300 pt-3 group-hover:text-(--hover-color)"
                                            style={{ ['--hover-color' as string]: themeColor }}
                                        >
                                            {section.title}
                                        </h2>
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-5 pl-[72px] relative">
                                        {section.content ? (
                                            <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">
                                                {section.content}
                                            </p>
                                        ) : (
                                            section.items?.map((item, i) => (
                                                <div key={i} className="group/item">
                                                    <h3 className="font-semibold text-text-main dark:text-white mb-1.5 text-base group-hover/item:text-(--theme) transition-colors" style={{ ['--theme' as string]: themeColor }}>
                                                        {item.subtitle}
                                                    </h3>
                                                    <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">
                                                        {item.text}
                                                    </p>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bottom CTA with Liquid Light Effect */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div
                            className={`relative rounded-3xl p-10 md:p-14 text-center text-white overflow-hidden bg-linear-to-br ${gradient}`}
                            style={{
                                boxShadow: `0 30px 60px -15px ${themeColor}40`
                            }}
                        >
                            {/* Liquid Light decoration orbs */}
                            <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" />
                            <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" style={{ animation: 'liquid-float 10s ease-in-out infinite' }} />
                            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

                            {/* Glass overlay */}
                            <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-white/5" />

                            <div className="relative">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
                                    {ctaTitle}
                                </h2>
                                <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
                                    {ctaDescription}
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link
                                        href="/contact"
                                        className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                                        style={{ color: themeColor }}
                                    >
                                        {/* Shine effect */}
                                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                                        <span className="relative">Get Free Quote</span>
                                        <span className="material-symbols-outlined relative group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </Link>
                                    <Link
                                        href="/products"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl border border-white/40 hover:bg-white/30 hover:border-white/60 transition-all duration-300"
                                    >
                                        View All Products
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
