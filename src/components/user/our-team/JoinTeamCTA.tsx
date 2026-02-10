import Link from "next/link";

export function JoinTeamCTA() {
    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[3rem]">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-purple to-brand-blue opacity-90"></div>

                {/* Animated liquid orbs */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute -top-16 -left-16 w-56 h-56 bg-white/10 rounded-full blur-3xl animate-liquid-float"></div>
                    <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/8 rounded-full blur-3xl animate-float-delayed"></div>
                    <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-white/5 rounded-full blur-3xl animate-float"></div>
                    {/* Sparkles */}
                    <div className="absolute top-[15%] right-[25%] w-2 h-2 bg-white/30 rounded-full animate-float"></div>
                    <div className="absolute bottom-[20%] left-[30%] w-3 h-3 bg-white/20 rounded-full animate-float-delayed"></div>
                </div>

                {/* Mesh overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '36px 36px',
                }}></div>

                {/* Content */}
                <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 backdrop-blur-sm mb-8">
                        <span className="material-symbols-outlined text-white text-sm">
                            group_add
                        </span>
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                            We Are Hiring
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Want to Join This
                        <br />
                        <span className="text-white/90">Amazing Team?</span>
                    </h2>

                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                        We are always looking for talented individuals who share our passion for technology and innovation.
                        Check out our open positions and start your journey with Symbosys.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/careers"
                            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-brand font-bold text-lg shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 hover:scale-105 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            <span className="relative z-10">View Open Positions</span>
                            <span className="relative z-10 material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform duration-300">
                                arrow_forward
                            </span>
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-500"
                        >
                            <span>Contact HR</span>
                            <span className="material-symbols-outlined text-xl">
                                mail
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
