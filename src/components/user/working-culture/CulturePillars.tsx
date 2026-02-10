export function CulturePillars() {
    const pillars = [
        {
            title: "Collaborative Spirit",
            description:
                "We believe the best solutions emerge from diverse minds working together. Open dialogue, shared ownership, and collective problem-solving define how we build extraordinary software.",
            icon: "handshake",
            gradient: "from-brand/10 to-brand-purple/5",
            hoverGradient: "from-brand to-brand-purple",
        },
        {
            title: "Innovation First",
            description:
                "Curiosity is our compass. We encourage experimentation, embrace modern technologies, and create space for bold ideas that push the boundaries of what&apos;s possible.",
            icon: "psychology",
            gradient: "from-brand-purple/10 to-brand-blue/5",
            hoverGradient: "from-brand-purple to-brand-blue",
        },
        {
            title: "Continuous Growth",
            description:
                "Learning never stops at Symbosys. From mentorship programs to sponsored certifications, we invest in every team member&apos;s journey to become the best version of themselves.",
            icon: "trending_up",
            gradient: "from-brand-blue/10 to-brand/5",
            hoverGradient: "from-brand-blue to-brand",
        },
        {
            title: "Trust & Transparency",
            description:
                "Open communication and honest feedback form the bedrock of our culture. We foster an environment where every voice matters and decisions are made with integrity.",
            icon: "verified_user",
            gradient: "from-brand/10 to-brand-blue/5",
            hoverGradient: "from-brand to-brand-blue",
        },
        {
            title: "Work-Life Harmony",
            description:
                "We respect personal time and mental well-being. Flexible schedules, remote-friendly policies, and mindful workloads ensure our people thrive both professionally and personally.",
            icon: "balance",
            gradient: "from-brand-purple/10 to-brand/5",
            hoverGradient: "from-brand-purple to-brand",
        },
        {
            title: "Client Partnership",
            description:
                "We don&apos;t just build products — we build relationships. By letting developers interact directly with clients, we create solutions rooted in real understanding and genuine empathy.",
            icon: "diversity_1",
            gradient: "from-brand-blue/10 to-brand-purple/5",
            hoverGradient: "from-brand-blue to-brand-purple",
        },
    ];

    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            {/* Section Header */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-6">
                    <span className="material-symbols-outlined text-brand text-sm">
                        auto_awesome
                    </span>
                    <span className="text-xs font-bold text-brand uppercase tracking-wider">
                        Our Pillars
                    </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-text-main dark:text-white mb-6 leading-tight">
                    Built on{" "}
                    <span className="bg-gradient-to-r from-brand via-brand-purple to-brand-blue bg-clip-text text-transparent">
                        Strong Foundations
                    </span>
                </h2>
                <p className="text-text-muted dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    Six pillars that shape how we work, grow, and create impact together every single day.
                </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {pillars.map((pillar, index) => (
                    <div
                        key={index}
                        className="relative glass-card rounded-3xl p-8 group hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                    >
                        {/* Liquid light hover glow */}
                        <div
                            className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${pillar.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                        ></div>
                        <div
                            className={`absolute -bottom-20 -left-20 w-32 h-32 rounded-full bg-gradient-to-tr ${pillar.gradient} blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700`}
                        ></div>

                        {/* Icon */}
                        <div
                            className={`relative size-16 rounded-2xl bg-gradient-to-br ${pillar.gradient} dark:from-brand/15 dark:to-brand-purple/10 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:${pillar.hoverGradient} transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-brand/10`}
                        >
                            <span className="material-symbols-outlined text-brand group-hover:text-white transition-colors duration-500 text-3xl">
                                {pillar.icon}
                            </span>
                        </div>

                        {/* Content */}
                        <h3 className="relative text-xl font-bold text-text-main dark:text-white mb-3 group-hover:text-brand transition-colors duration-300">
                            {pillar.title}
                        </h3>
                        <p className="relative text-text-muted dark:text-gray-400 leading-relaxed text-[15px]">
                            {pillar.description}
                        </p>

                        {/* Bottom accent line */}
                        <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-brand/0 to-transparent group-hover:via-brand/40 transition-all duration-700"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}
