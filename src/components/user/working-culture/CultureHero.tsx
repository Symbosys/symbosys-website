export function CultureHero({ children }: { children?: React.ReactNode }) {
    return (
        <section className="relative w-full flex flex-col items-center overflow-hidden pt-32 pb-32">
            {/* Liquid Light Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Primary liquid orb - large, slow float */}
                <div className="absolute top-[10%] left-[15%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-linear-to-br from-brand/20 via-brand-purple/15 to-brand-blue/10 blur-3xl animate-liquid-float opacity-70 dark:opacity-50"></div>
                {/* Secondary liquid orb */}
                <div className="absolute bottom-[5%] right-[10%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full bg-linear-to-tl from-brand-blue/20 via-brand/10 to-brand-purple/15 blur-3xl animate-float-delayed opacity-60 dark:opacity-40"></div>
                {/* Tertiary accent orb */}
                <div className="absolute top-[50%] right-[25%] w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] rounded-full bg-linear-to-r from-brand-purple/15 to-brand/10 blur-3xl animate-float opacity-50 dark:opacity-30"></div>
                {/* Tiny sparkle orbs */}
                <div className="absolute top-[20%] right-[40%] w-3 h-3 rounded-full bg-brand/40 blur-sm animate-float"></div>
                <div className="absolute top-[60%] left-[20%] w-2 h-2 rounded-full bg-brand-purple/50 blur-sm animate-float-delayed"></div>
                <div className="absolute bottom-[30%] right-[15%] w-4 h-4 rounded-full bg-brand-blue/30 blur-sm animate-float"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="flex flex-col items-center text-center">
                    {/* Floating badge */}
                    <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass-panel mb-8 animate-fade-in">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand/60 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand"></span>
                        </span>
                        <span className="text-sm font-semibold text-brand tracking-wide uppercase">
                            Our Culture
                        </span>
                    </div>

                    {/* Main headline with liquid gradient text */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 animate-fade-in">
                        <span className="text-text-main dark:text-white">Where </span>
                        <span className="bg-linear-to-r from-brand via-brand-purple to-brand-blue bg-clip-text text-transparent">
                            Innovation
                        </span>
                        <br className="hidden sm:block" />
                        <span className="text-text-main dark:text-white"> Meets </span>
                        <span className="bg-linear-to-r from-brand-purple via-brand to-brand-blue bg-clip-text text-transparent">
                            Inspiration
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-text-muted dark:text-gray-400 max-w-3xl leading-relaxed mb-12 animate-fade-in">
                        At Symbosys, we cultivate an environment where creativity flows freely,
                        collaboration sparks brilliance, and every team member&apos;s growth illuminates
                        the path to extraordinary outcomes.
                    </p>

                    {/* Floating stat pills */}
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 animate-fade-in">
                        {[
                            { value: "500+", label: "Happy Clients", icon: "groups" },
                            { value: "50+", label: "Team Members", icon: "diversity_3" },
                            { value: "100%", label: "Passion Driven", icon: "favorite" },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="glass-card rounded-2xl px-6 py-4 flex items-center gap-4 group hover:scale-105 transition-all duration-500 cursor-default"
                            >
                                <div className="size-11 rounded-xl bg-linear-to-br from-brand/10 to-brand-purple/10 dark:from-brand/20 dark:to-brand-purple/20 flex items-center justify-center group-hover:from-brand group-hover:to-brand-purple transition-all duration-500">
                                    <span className="material-symbols-outlined text-brand group-hover:text-white transition-colors duration-500 text-2xl">
                                        {stat.icon}
                                    </span>
                                </div>
                                <div className="text-left">
                                    <div className="text-xl font-bold text-text-main dark:text-white">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-text-muted dark:text-gray-400 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Injected Content (Our Philosophy) */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
}
