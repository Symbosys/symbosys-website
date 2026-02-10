export function WorkEnvironment() {
    const environments = [
        {
            title: "Modern Workspace",
            description:
                "Ergonomic setups, high-speed connectivity, and inspiring spaces designed for deep focus and creative flow.",
            icon: "desktop_windows",
            stats: "State-of-the-art",
        },
        {
            title: "Flexible Hours",
            description:
                "We trust our people to manage their time. Core hours with the freedom to work when you are at your creative best.",
            icon: "schedule",
            stats: "Flex-first",
        },
        {
            title: "Remote Friendly",
            description:
                "Hybrid and remote options available. We connect through culture, not cubicles. Work from where you thrive.",
            icon: "home_work",
            stats: "Hybrid Model",
        },
        {
            title: "Open Door Policy",
            description:
                "Leadership is always accessible. Ideas flow in all directions — from interns to founders, every voice is valued.",
            icon: "meeting_room",
            stats: "Zero Hierarchy",
        },
    ];

    return (
        <section className="relative w-full mb-32 overflow-hidden">
            {/* Full-width liquid light background band */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/[0.03] to-transparent dark:via-brand/[0.06]"></div>
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-br from-brand/5 to-brand-purple/3 blur-3xl"></div>
                <div className="absolute top-1/3 right-1/4 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full bg-gradient-to-tl from-brand-blue/5 to-brand/3 blur-3xl"></div>
            </div>

            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-6">
                        <span className="material-symbols-outlined text-brand text-sm">
                            apartment
                        </span>
                        <span className="text-xs font-bold text-brand uppercase tracking-wider">
                            Work Environment
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-text-main dark:text-white mb-6 leading-tight">
                        Designed for{" "}
                        <span className="bg-gradient-to-r from-brand via-brand-purple to-brand-blue bg-clip-text text-transparent">
                            Excellence
                        </span>
                    </h2>
                    <p className="text-text-muted dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        An environment that fuels productivity, supports well-being, and sparks the best work of your career.
                    </p>
                </div>

                {/* Environment Cards - 2x2 grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {environments.map((env, index) => (
                        <div
                            key={index}
                            className="relative glass-card rounded-3xl p-8 lg:p-10 group hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                        >
                            {/* Background liquid shimmer */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                            <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-brand/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6">
                                {/* Icon container with liquid border */}
                                <div className="shrink-0 size-16 rounded-2xl bg-gradient-to-br from-brand/10 to-brand-purple/5 dark:from-brand/15 dark:to-brand-purple/10 flex items-center justify-center group-hover:from-brand group-hover:to-brand-purple transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-brand/10">
                                    <span className="material-symbols-outlined text-brand group-hover:text-white transition-colors duration-500 text-3xl">
                                        {env.icon}
                                    </span>
                                </div>

                                <div className="flex-1">
                                    {/* Tag */}
                                    <span className="inline-block px-3 py-1 rounded-full bg-brand/5 dark:bg-brand/10 text-brand text-xs font-semibold mb-3">
                                        {env.stats}
                                    </span>
                                    <h3 className="text-xl font-bold text-text-main dark:text-white mb-3 group-hover:text-brand transition-colors duration-300">
                                        {env.title}
                                    </h3>
                                    <p className="text-text-muted dark:text-gray-400 leading-relaxed text-[15px]">
                                        {env.description}
                                    </p>
                                </div>
                            </div>

                            {/* Corner liquid accent */}
                            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-brand/[0.04] to-transparent rounded-tl-[40px] pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
