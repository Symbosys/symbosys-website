import Link from "next/link";
import Image from "next/image";

interface ServiceSection {
    title?: string;
    description?: string;
    icon?: string;
    type: 'grid' | 'list' | 'featured' | 'why-choose';
    items?: any[];
    columns?: 2 | 3 | 4 | 5;
}

interface ServiceLayoutProps {
    title: string;
    subtitle: string;
    description: string;
    badge: string;
    badgeIcon: string;
    themeColor: string;
    themeGradient: string;
    heroImage?: string;
    sections: ServiceSection[];
    ctaTitle: string;
    ctaDescription: string;
}

export function ServiceLayout({
    title,
    subtitle,
    description,
    badge,
    badgeIcon,
    themeColor,
    themeGradient,
    heroImage,
    sections,
    ctaTitle,
    ctaDescription
}: ServiceLayoutProps) {
    return (
        <div className="bg-white dark:bg-gray-950 text-text-main dark:text-gray-100 font-sans antialiased selection:bg-brand/20 selection:text-brand dark:selection:bg-brand/40 relative overflow-x-hidden min-h-screen transition-colors duration-300">
            {/* Liquid Light Background - Animated Gradient Orbs */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Primary flowing orb */}
                <div
                    className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-[0.1] dark:opacity-[0.15]"
                    style={{
                        background: `radial-gradient(circle, ${themeColor} 0%, transparent 70%)`,
                        top: '-20%',
                        right: '-10%',
                        animation: 'liquid-float 20s ease-in-out infinite'
                    }}
                />
                {/* Secondary flowing orb */}
                <div
                    className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-[0.08] dark:opacity-[0.12]"
                    style={{
                        background: `radial-gradient(circle, ${themeColor} 0%, transparent 70%)`,
                        bottom: '-15%',
                        left: '-5%',
                        animation: 'liquid-float 25s ease-in-out infinite reverse'
                    }}
                />

                {/* Base overlay for readability */}
                <div className="absolute inset-0 bg-linear-to-b from-white/90 via-white/80 to-white/90 dark:from-gray-950/95 dark:via-gray-950/90 dark:to-gray-950/95" />
            </div>

            <main className="relative z-10">
                {/* Hero Section with Liquid Light Effect */}
                <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative overflow-hidden rounded-[2.5rem] min-h-[500px] group">
                            {/* Hero Background with Parallax effect */}
                            <div className="absolute inset-0 z-0">
                                {heroImage ? (
                                    <Image
                                        src={heroImage}
                                        alt={title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        priority
                                    />
                                ) : (
                                    <div className={`w-full h-full bg-linear-to-br ${themeGradient}`} />
                                )}
                                {/* Complex Gradient Overlays */}
                                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent dark:from-black/90 dark:via-black/60 dark:to-transparent" />
                                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

                                {/* Interactive Light Trace */}
                                <div className="absolute inset-0 opacity-30 mix-blend-overlay aurora-bg" />
                            </div>

                            {/* Hero Content */}
                            <div className="relative z-10 p-8 md:p-16 lg:p-24 flex flex-col justify-center min-h-[500px]">
                                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 w-fit mb-8 animate-fade-in shadow-2xl">
                                    <span className="material-symbols-outlined text-white text-lg">{badgeIcon}</span>
                                    <span className="text-xs font-bold text-white uppercase tracking-[0.2em]">{badge}</span>
                                </div>

                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-[0.9]">
                                    {title} <br />
                                    <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white/80 to-white/60">
                                        {subtitle}
                                    </span>
                                </h1>

                                <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-10 font-medium">
                                    {description}
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="#explore"
                                        className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-opacity-90 transition-all hover:scale-105 active:scale-95 shadow-xl"
                                    >
                                        Explore Services
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div id="explore" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-32">
                    {sections.map((section, idx) => (
                        <section key={idx} className="relative">
                            {section.title && (
                                <div className="flex flex-col items-center text-center mb-16">
                                    <h2 className="text-4xl md:text-5xl font-extrabold text-text-main dark:text-white mb-4 tracking-tight">
                                        {section.title}
                                    </h2>
                                    <div
                                        className="h-1.5 w-24 rounded-full"
                                        style={{ backgroundColor: themeColor }}
                                    />
                                </div>
                            )}

                            {section.type === 'featured' && section.items && (
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div className="space-y-6">
                                        {section.items.map((item, i) => (
                                            <p key={i} className="text-xl text-text-muted dark:text-gray-300 leading-relaxed font-medium">
                                                {typeof item === 'string' ? item : item.description}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="relative aspect-video rounded-3xl overflow-hidden glass-card p-2 group">
                                        <div className="absolute inset-0 bg-linear-to-br opacity-10 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: themeColor }} />
                                        <div className="w-full h-full rounded-2xl bg-white/50 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center">
                                            <span className="material-symbols-outlined text-8xl opacity-20" style={{ color: themeColor }}>
                                                {badgeIcon}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {section.type === 'grid' && section.items && (
                                <div className={`grid gap-8 ${section.columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : section.columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
                                    {section.items.map((item, i) => (
                                        <div key={i} className="group relative">
                                            <div
                                                className="absolute -inset-1 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                                style={{ backgroundColor: themeColor }}
                                            />
                                            <div className="relative h-full glass-card p-8 rounded-[2rem] border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10">
                                                <div
                                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500"
                                                    style={{ background: `linear-gradient(135deg, ${themeColor}, ${themeColor}CC)` }}
                                                >
                                                    <span className="material-symbols-outlined text-white text-3xl">
                                                        {typeof item === 'object' ? item.icon : 'star'}
                                                    </span>
                                                </div>
                                                <h3 className="text-2xl font-bold text-text-main dark:text-white mb-4 group-hover:text-glow transition-all">
                                                    {typeof item === 'object' ? item.title : ''}
                                                </h3>
                                                <p className="text-text-muted dark:text-gray-400 leading-relaxed font-medium">
                                                    {typeof item === 'object' ? item.description : item}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {section.type === 'why-choose' && section.items && (
                                <div className="relative overflow-hidden rounded-[3rem] p-1 md:p-1.5 group">
                                    <div className={`absolute inset-0 bg-linear-to-br ${themeGradient} opacity-90`} />
                                    <div className="absolute inset-0 aurora-bg opacity-30 animate-spin-slow" />

                                    <div className="relative z-10 bg-white/10 dark:bg-black/20 backdrop-blur-3xl rounded-[2.8rem] p-12 md:p-20">
                                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                                            {section.items.map((item, i) => (
                                                <div key={i} className="text-center group/item">
                                                    <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mx-auto mb-8 group-hover/item:scale-110 transition-transform duration-500 shadow-2xl">
                                                        <span className="material-symbols-outlined text-white text-4xl">
                                                            {typeof item === 'object' ? item.icon : 'done_all'}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                                                        {typeof item === 'object' ? item.title : ''}
                                                    </h3>
                                                    <p className="text-white/80 font-medium leading-relaxed">
                                                        {typeof item === 'object' ? item.desc : item}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </section>
                    ))}
                </div>

                {/* Massive CTA Section */}
                <section className="pb-32 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto relative group">
                        <div
                            className="absolute -inset-1 blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700 rounded-[3rem]"
                            style={{ backgroundColor: themeColor }}
                        />
                        <div className="relative glass-card rounded-[3rem] p-12 md:p-24 overflow-hidden border-black/5 dark:border-white/5">
                            {/* Animated background trace */}
                            <div className="absolute inset-0 opacity-5 mix-blend-overlay animate-pulse" style={{ backgroundColor: themeColor }} />

                            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
                                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-text-main dark:text-white mb-8 tracking-tighter leading-none">
                                    {ctaTitle}
                                </h2>
                                <p className="text-xl md:text-2xl text-text-muted dark:text-gray-400 mb-12 font-medium leading-relaxed">
                                    {ctaDescription}
                                </p>
                                <Link
                                    href="/contact"
                                    className="px-12 py-6 rounded-full bg-text-main dark:bg-white text-white dark:text-black font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl group/btn overflow-hidden relative"
                                >
                                    <span className="relative z-10">Start Your Project Now</span>
                                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>

    );
}
