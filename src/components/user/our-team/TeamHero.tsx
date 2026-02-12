
export function TeamHero({ children }: { children?: React.ReactNode }) {
    return (
        <section className="relative w-full flex flex-col items-center overflow-hidden pt-32 pb-24">
            {/* Cinematic Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-brand/20 via-surface to-surface dark:from-brand/10 dark:via-gray-950 dark:to-gray-950"></div>
                <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-brand-purple/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Content */}
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 backdrop-blur-md mb-8 animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                        </span>
                        <span className="text-xs font-bold text-brand uppercase tracking-widest">
                            We Are Symbosys
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-text-main dark:text-white mb-8 animate-fade-in-up delay-100">
                        Crafting Digital <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-brand via-brand-purple to-brand-blue">
                            Masterpieces
                        </span>
                    </h1>

                    <p className="text-xl text-text-muted dark:text-gray-400 leading-relaxed mb-12 animate-fade-in-up delay-200">
                        More than just code, we build experiences. We are a collective of dreamers, doers, and creators shaping the future of technology from the heart of India.
                    </p>

                    {/* Redesigned Stats Bar */}
                    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up delay-300">
                        {[
                            { value: "50+", label: "Team Members", icon: "groups", color: "text-brand" },
                            { value: "8+", label: "Departments", icon: "domain", color: "text-brand-purple" },
                            { value: "500+", label: "Projects Delivered", icon: "rocket_launch", color: "text-brand-blue" },
                            { value: "100%", label: "Passion Driven", icon: "favorite", color: "text-pink-500" },
                        ].map((stat, i) => (
                            <div key={i} className="glass-card p-6 rounded-2xl border-white/5 hover:border-brand/20 hover:-translate-y-1 transition-all duration-300 group">
                                <div className={`material-symbols-outlined text-4xl mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-bold text-text-main dark:text-white mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-xs font-medium text-text-muted dark:text-gray-500 uppercase tracking-widest">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Founder Section Injection Point */}
                <div className="relative animate-fade-in-up delay-500">
                    {children}
                </div>
            </div>
        </section>
    );
}
