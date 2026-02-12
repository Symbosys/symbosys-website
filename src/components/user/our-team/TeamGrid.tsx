
export function TeamGrid() {
    const team = [
        {
            name: "Rahul Verma",
            role: "Lead Full-Stack Developer",
            image: null, // Placeholder
            color: "from-blue-500 to-cyan-500",
            socials: { linkedin: "#", twitter: "#" }
        },
        {
            name: "Priya Tiwari",
            role: "Senior UI/UX Designer",
            image: null,
            color: "from-purple-500 to-pink-500",
            socials: { linkedin: "#", dribbble: "#" }
        },
        {
            name: "Ankit Sharma",
            role: "Backend Architect",
            image: null,
            color: "from-emerald-500 to-teal-500",
            socials: { linkedin: "#", github: "#" }
        },
        {
            name: "Sneha Gupta",
            role: "Product Manager",
            image: null,
            color: "from-orange-500 to-red-500",
            socials: { linkedin: "#", twitter: "#" }
        }
    ];

    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            {/* Header */}
            <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-surface dark:bg-white/5 border border-brand/10 shadow-lg shadow-brand/5 backdrop-blur-sm mb-6">
                    <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
                    <span className="text-xs font-bold text-brand uppercase tracking-widest">
                        Meet The Squad
                    </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-text-main dark:text-white tracking-tight mb-6">
                    The <span className="text-transparent bg-clip-text bg-linear-to-r from-brand via-brand-purple to-brand-blue">Innovators</span>
                </h2>
                <p className="text-lg text-text-muted dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    A small group of visionaries, builders, and creators who are defining the future of digital experiences.
                </p>
            </div>

            {/* Team Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                    <div
                        key={index}
                        className="group relative h-[450px] rounded-[2rem] overflow-hidden bg-surface dark:bg-gray-900 shadow-xl shadow-brand/5 border border-white/10"
                    >
                        {/* 1. Image Layer */}
                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                            {/* Placeholder Gradient if no image */}
                            <div className={`w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center`}>
                                <div className={`absolute inset-0 bg-linear-to-br ${member.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                                <div className="text-center opacity-30 group-hover:opacity-0 transition-opacity duration-300">
                                    <span className="material-symbols-outlined text-6xl mb-2">person</span>
                                    <p className="text-xs font-bold uppercase tracking-widest">Image</p>
                                </div>
                            </div>
                            {/* Image Component would go here:
                            <Image 
                                src={member.image} 
                                alt={member.name}
                                fill
                                className="object-cover"
                            /> */}
                        </div>

                        {/* 2. Gradient Overlay (Always visible but stronger at bottom) */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                        {/* 3. Content Layer (Hidden initially, slides up on hover) */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8">

                            {/* Static Info (Always slightly visible or moves) */}
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                                    {member.name}
                                </h3>
                                <div className="h-0.5 w-12 bg-white/30 mb-3 group-hover:w-full group-hover:bg-brand transition-all duration-500"></div>
                                <p className="text-brand-purple font-bold text-sm uppercase tracking-wider mb-4 opacity-90">
                                    {member.role}
                                </p>
                            </div>

                            {/* Hidden Actions / Socials */}
                            <div className="flex items-center gap-4 opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                <button className="size-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-brand hover:text-white transition-colors text-white">
                                    <span className="material-symbols-outlined text-sm">mail</span>
                                </button>
                                <button className="size-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-colors text-white">
                                    <span className="material-symbols-outlined text-sm">link</span>
                                </button>
                            </div>
                        </div>

                        {/* Hover Shine Effect */}
                        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:animate-shine"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
