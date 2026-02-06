export function Hero() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32 flex flex-col items-center text-center relative">
            {/* 3D Decorative Floating Elements */}
            <div className="absolute top-10 left-[10%] w-24 h-24 rounded-3xl bg-linear-to-br from-white/80 to-white/20 dark:from-white/10 dark:to-white/5 border border-white dark:border-white/10 shadow-xl backdrop-blur-sm animate-float-delayed -z-10 hidden lg:block opacity-60 rotate-12"></div>
            <div className="absolute bottom-20 right-[15%] w-32 h-32 rounded-full bg-linear-to-tl from-brand/10 to-brand-blue/20 dark:from-brand/20 dark:to-brand-blue/30 border border-white/50 dark:border-white/10 backdrop-blur-md animate-float -z-10 hidden lg:block opacity-70"></div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 dark:bg-gray-800/60 border border-white/60 dark:border-white/10 shadow-sm backdrop-blur-md mb-8 animate-fade-in">
                <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-brand">
                    Variant 2.0 // Refractive UI
                </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-text-main dark:text-white mb-6 leading-tight max-w-5xl text-glow">
                Architecting the <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-brand to-brand-blue">
                    Digital Future
                </span>
            </h1>

            <p className="text-lg md:text-xl text-text-muted dark:text-gray-400 max-w-2xl mb-10 leading-relaxed font-light">
                Premium IT solutions converting visitors into leads through trust and
                visual impact. Experience the refractive flow of innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
                <button className="h-14 px-8 rounded-full bg-brand text-white font-bold text-lg shadow-xl shadow-brand/30 hover:shadow-2xl hover:shadow-brand/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
                    Transform with Us
                    <span className="material-symbols-outlined">rocket_launch</span>
                </button>
                <button className="h-14 px-8 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 text-text-main dark:text-white font-semibold text-lg border border-white dark:border-white/10 shadow-sm hover:shadow-md backdrop-blur-sm transition-all duration-300 flex items-center gap-2">
                    <span className="material-symbols-outlined text-brand">
                        play_circle
                    </span>
                    Watch Showreel
                </button>
            </div>
        </section>
    );
}
