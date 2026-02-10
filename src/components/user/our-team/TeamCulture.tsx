export function TeamCulture() {
    const highlights = [
        {
            stat: "4.9/5",
            label: "Employee Satisfaction",
            icon: "sentiment_very_satisfied",
            description: "Our team consistently rates Symbosys as an exceptional workplace.",
        },
        {
            stat: "95%",
            label: "Retention Rate",
            icon: "loyalty",
            description: "People join Symbosys and choose to stay — that speaks volumes.",
        },
        {
            stat: "2x",
            label: "Growth in 2 Years",
            icon: "trending_up",
            description: "Our team has doubled as demand for our solutions continues to grow.",
        },
        {
            stat: "100%",
            label: "Team Collaboration",
            icon: "handshake",
            description: "Every project is a collective effort — no silos, no barriers.",
        },
    ];

    return (
        <section className="relative w-full mb-32 overflow-hidden">
            {/* Full-width gradient band */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-brand/2 to-transparent dark:via-brand/5"></div>
            </div>

            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-6">
                        <span className="material-symbols-outlined text-brand-blue text-sm">
                            insights
                        </span>
                        <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                            Team Metrics
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-text-main dark:text-white mb-6 leading-tight">
                        Numbers That{" "}
                        <span className="bg-linear-to-r from-brand-blue via-brand to-brand-purple bg-clip-text text-transparent">
                            Speak Volumes
                        </span>
                    </h2>
                    <p className="text-text-muted dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Behind every great product is a team that loves what they do — and it shows in the numbers.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="relative glass-card rounded-3xl p-8 group hover:-translate-y-2 transition-all duration-500 overflow-hidden text-center"
                        >
                            {/* Liquid hover glow */}
                            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-brand/8 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            {/* Icon */}
                            <div className="relative mx-auto size-14 rounded-2xl bg-linear-to-br from-brand/10 to-brand-purple/5 dark:from-brand/15 dark:to-brand-purple/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                                <span className="material-symbols-outlined text-brand text-3xl">
                                    {item.icon}
                                </span>
                            </div>

                            {/* Stat */}
                            <div className="relative text-3xl md:text-4xl font-bold bg-linear-to-br from-brand to-brand-purple bg-clip-text text-transparent mb-2">
                                {item.stat}
                            </div>
                            <h3 className="relative text-sm font-bold text-text-main dark:text-white mb-3 uppercase tracking-wide">
                                {item.label}
                            </h3>
                            <p className="relative text-text-muted dark:text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-linear-to-r from-transparent via-brand/0 to-transparent group-hover:via-brand/30 transition-all duration-700"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
