import Link from "next/link";

export function JoinCultureCTA() {
    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[3rem]">
                {/* Liquid light gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-purple to-brand-blue opacity-90"></div>

                {/* Animated liquid orbs */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-liquid-float"></div>
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float-delayed"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-float"></div>
                    {/* Sparkle dots */}
                    <div className="absolute top-[20%] right-[30%] w-2 h-2 bg-white/30 rounded-full animate-float"></div>
                    <div className="absolute bottom-[30%] left-[25%] w-3 h-3 bg-white/20 rounded-full animate-float-delayed"></div>
                    <div className="absolute top-[60%] right-[15%] w-1.5 h-1.5 bg-white/40 rounded-full animate-float"></div>
                </div>

                {/* Mesh pattern overlay */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }}></div>

                {/* Content */}
                <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 backdrop-blur-sm mb-8">
                        <span className="material-symbols-outlined text-white text-sm">
                            rocket_launch
                        </span>
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                            Be Part of Something Special
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Ready to Shape the
                        <br />
                        <span className="text-white/90">Future with Us?</span>
                    </h2>

                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                        Join a team where your ideas matter, your growth is prioritized, and your work creates real impact.
                        Your next chapter starts here.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/careers"
                            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-brand font-bold text-lg shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 hover:scale-105 transition-all duration-500 overflow-hidden"
                        >
                            {/* Hover shimmer */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            <span className="relative z-10">Explore Careers</span>
                            <span className="relative z-10 material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform duration-300">
                                arrow_forward
                            </span>
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-500"
                        >
                            <span>Get in Touch</span>
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
