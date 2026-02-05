export function CareerHero() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 mb-24 text-center relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand/5 rounded-full blur-[100px] -z-10"></div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-brand/20 backdrop-blur-md mb-8 animate-fade-in shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-brand">
                    We are hiring
                </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-text-main mb-8 tracking-tighter leading-tight">
                Build the <span className="text-transparent bg-clip-text bg-linear-to-r from-brand to-brand-blue">Future</span> <br />
                With Us
            </h1>

            <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed font-light mb-12">
                Join a team of visionaries, creators, and problem solvers.
                At Symbosys, your work impacts millions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#openings" className="px-8 py-4 rounded-full bg-brand text-white font-bold text-lg shadow-lg shadow-brand/20 hover:bg-brand-blue hover:scale-105 transition-all duration-300">
                    View Open Roles
                </a>
            </div>
        </section>
    )
}
