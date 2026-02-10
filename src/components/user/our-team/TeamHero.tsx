export function TeamHero({ children }: { children?: React.ReactNode }) {
    return (
        <section className="relative w-full flex flex-col items-center overflow-hidden pt-32 pb-32">
            {/* Liquid Light Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[5%] left-[10%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-linear-to-br from-brand/15 via-brand-purple/10 to-brand-blue/8 blur-3xl animate-liquid-float opacity-60 dark:opacity-40"></div>
                <div className="absolute bottom-[10%] right-[5%] w-[40vw] h-[40vw] max-w-[550px] max-h-[550px] rounded-full bg-linear-to-tl from-brand-blue/15 via-brand/8 to-brand-purple/10 blur-3xl animate-float-delayed opacity-50 dark:opacity-35"></div>
                <div className="absolute top-[45%] right-[30%] w-[18vw] h-[18vw] max-w-[250px] max-h-[250px] rounded-full bg-linear-to-r from-brand-purple/12 to-brand/8 blur-3xl animate-float opacity-40 dark:opacity-25"></div>
                {/* Sparkle dots */}
                <div className="absolute top-[25%] right-[35%] w-2.5 h-2.5 rounded-full bg-brand/30 blur-[1px] animate-float"></div>
                <div className="absolute top-[55%] left-[15%] w-2 h-2 rounded-full bg-brand-purple/40 blur-[1px] animate-float-delayed"></div>
                <div className="absolute bottom-[25%] right-[20%] w-3 h-3 rounded-full bg-brand-blue/25 blur-[1px] animate-float"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="flex flex-col items-center text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass-panel mb-8 animate-fade-in">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand/60 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand"></span>
                        </span>
                        <span className="text-sm font-semibold text-brand tracking-wide uppercase">
                            Meet Our People
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 animate-fade-in">
                        <span className="text-text-main dark:text-white">The </span>
                        <span className="bg-linear-to-r from-brand via-brand-purple to-brand-blue bg-clip-text text-transparent">
                            Brilliant Minds
                        </span>
                        <br className="hidden sm:block" />
                        <span className="text-text-main dark:text-white"> Behind Symbosys</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-text-muted dark:text-gray-400 max-w-3xl leading-relaxed mb-12 animate-fade-in">
                        A passionate team of innovators, creators, and problem-solvers united by a shared vision
                        to deliver transformative technology solutions that empower businesses across India.
                    </p>

                    {/* Stats row */}
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 animate-fade-in">
                        {[
                            { value: "50+", label: "Team Members" },
                            { value: "8+", label: "Departments" },
                            { value: "500+", label: "Projects Delivered" },
                            { value: "100%", label: "Passion Driven" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center group cursor-default">
                                <div className="text-3xl md:text-4xl font-bold bg-linear-to-br from-brand to-brand-purple bg-clip-text text-transparent group-hover:from-brand-purple group-hover:to-brand-blue transition-all duration-500">
                                    {stat.value}
                                </div>
                                <div className="text-xs text-text-muted dark:text-gray-500 font-medium mt-1 uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Injected Content (Leadership Cards) */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
}
