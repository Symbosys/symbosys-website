export function GrowthJourney() {
    const journeySteps = [
        {
            step: "01",
            title: "Onboarding & Mentorship",
            description:
                "From day one, you are paired with an experienced mentor who guides you through our processes, codebase, and culture. We ensure a smooth, supportive start.",
            icon: "emoji_people",
            color: "brand",
        },
        {
            step: "02",
            title: "Skill Development",
            description:
                "Access to sponsored certifications, online courses, and hands-on workshops. We invest in your learning because your growth is our growth.",
            icon: "auto_stories",
            color: "brand-purple",
        },
        {
            step: "03",
            title: "Real-World Impact",
            description:
                "Work on meaningful projects for 500+ clients across industries. Your code shapes businesses and creates tangible impact in the real world.",
            icon: "public",
            color: "brand-blue",
        },
        {
            step: "04",
            title: "Leadership & Beyond",
            description:
                "Clear career pathways from developer to tech lead to architect. We nurture leaders from within and celebrate every milestone on your journey.",
            icon: "military_tech",
            color: "brand",
        },
    ];

    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            {/* Section Header */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-6">
                    <span className="material-symbols-outlined text-brand-blue text-sm">
                        route
                    </span>
                    <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                        Growth Path
                    </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-text-main dark:text-white mb-6 leading-tight">
                    Your Journey of{" "}
                    <span className="bg-gradient-to-r from-brand-blue via-brand to-brand-purple bg-clip-text text-transparent">
                        Growth
                    </span>
                </h2>
                <p className="text-text-muted dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    A clear, supportive path from first day to leadership — we walk with you every step of the way.
                </p>
            </div>

            {/* Timeline */}
            <div className="relative">
                {/* Vertical liquid line - desktop */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
                    <div className="w-full h-full bg-gradient-to-b from-brand/30 via-brand-purple/30 to-brand-blue/30 rounded-full"></div>
                    {/* Animated liquid glow on the line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-brand/60 to-transparent rounded-full animate-liquid-float"></div>
                </div>

                <div className="space-y-8 lg:space-y-0">
                    {journeySteps.map((step, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                } ${index > 0 ? "lg:mt-[-40px]" : ""} mb-8 lg:mb-16`}
                        >
                            {/* Content Card */}
                            <div className={`w-full lg:w-[45%] ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                                <div className="glass-card rounded-3xl p-8 group hover:-translate-y-1 transition-all duration-500 overflow-hidden relative">
                                    {/* Liquid glow on hover */}
                                    <div className={`absolute -top-16 ${index % 2 === 0 ? "-right-16" : "-left-16"} w-32 h-32 rounded-full bg-${step.color}/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                                    <div className="relative z-10 flex items-start gap-5">
                                        {/* Step number */}
                                        <div className="shrink-0 text-5xl font-bold bg-gradient-to-br from-brand/20 to-brand-purple/10 bg-clip-text text-transparent select-none">
                                            {step.step}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-text-main dark:text-white mb-3 group-hover:text-brand transition-colors duration-300">
                                                {step.title}
                                            </h3>
                                            <p className="text-text-muted dark:text-gray-400 leading-relaxed text-[15px]">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Center Node */}
                            <div className="hidden lg:flex shrink-0 w-[10%] justify-center relative z-10">
                                <div className="size-14 rounded-2xl bg-gradient-to-br from-brand/10 to-brand-purple/10 dark:from-brand/15 dark:to-brand-purple/15 border border-brand/20 dark:border-brand/30 flex items-center justify-center shadow-lg shadow-brand/5 hover:scale-110 transition-transform duration-500">
                                    <span className="material-symbols-outlined text-brand text-2xl">
                                        {step.icon}
                                    </span>
                                </div>
                            </div>

                            {/* Spacer */}
                            <div className="hidden lg:block w-[45%]"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
