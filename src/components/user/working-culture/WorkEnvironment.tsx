
export function WorkEnvironment() {
    const features = [
        {
            title: "Modern Workspace",
            description: "Ergonomic designs & inspiring zones.",
            icon: "desk",
            color: "text-brand",
            bg: "bg-brand/10",
        },
        {
            title: "Flexible Hours",
            description: "Work when you are most productive.",
            icon: "schedule",
            color: "text-brand-purple",
            bg: "bg-brand-purple/10",
        },
        {
            title: "Remote Friendly",
            description: "Connect from anywhere in the world.",
            icon: "public",
            color: "text-brand-blue",
            bg: "bg-brand-blue/10",
        },
        {
            title: "Open Door Policy",
            description: "Zero hierarchy, 100% transparency.",
            icon: "meeting_room",
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
        },
    ];

    return (
        <section className="relative w-full mb-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16 space-y-4">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-surface dark:bg-white/5 border border-brand/10 shadow-lg shadow-brand/5 backdrop-blur-sm mb-4">
                    <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
                    <span className="text-xs font-bold text-brand uppercase tracking-widest">
                        The Headquarters
                    </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-text-main dark:text-white tracking-tight">
                    Where <span className="text-transparent bg-clip-text bg-linear-to-r from-brand via-brand-purple to-brand-blue">Magic Happens</span>
                </h2>
                <p className="text-lg text-text-muted dark:text-gray-400 max-w-2xl mx-auto">
                    A workspace designed to inspire. We've built an environment where creativity flows as freely as the coffee.
                </p>
            </div>

            {/* Main Visual Container */}
            <div className="relative w-full rounded-[3rem] overflow-hidden bg-surface dark:bg-gray-900 shadow-2xl shadow-brand/20 border border-white/20 dark:border-white/5 group h-[600px] lg:h-[700px] transition-all duration-700 hover:shadow-brand-purple/20">

                {/* 1. The HERO IMAGE Layer */}
                {/* User: Place your company image here using the <Image /> component or a background image */}
                <div className="absolute inset-0 w-full h-full transition-transform duration-1000 group-hover:scale-105">
                    {/* Placeholder Gradient/Pattern if no image is present */}
                    <div className="absolute inset-0 bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
                        {/* Grid Pattern */}
                        <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[20px_20px]"></div>

                        {/* Placeholder Content - Remove this when real image is added */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-text-muted dark:text-gray-600">
                            <span className="material-symbols-outlined text-[120px] mb-6 opacity-20">apartment</span>
                            <h3 className="text-3xl font-bold opacity-30 uppercase tracking-widest">Office Image</h3>
                            <p className="opacity-30">1920 x 1080 Recommended</p>
                        </div>
                    </div>

                    {/* Placeholder for actual image code: */}
                    {/* <Image 
                         src="/images/office-hero.jpg" 
                         alt="Symbosys HQ" 
                         fill 
                         className="object-cover" 
                         priority
                    /> */}
                </div>

                {/* 2. Cinematic Overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 z-10"></div>
                <div className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent opacity-50 z-10"></div>

                {/* 3. Floating Content Elements */}

                {/* Top Right: Location Badge */}
                <div className="absolute top-8 right-8 z-20">
                    <div className="glass-card px-6 py-3 rounded-full flex items-center gap-3 backdrop-blur-xl border-white/10 shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-white font-bold tracking-wide text-sm">Ranchi, Jharkhand</span>
                        <span className="material-symbols-outlined text-white/50 text-lg">location_on</span>
                    </div>
                </div>

                {/* Bottom: Feature Cards Grid (Floating) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12 z-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="glass-card p-6 rounded-2xl border-white/10 bg-black/40 hover:bg-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 group/card text-left"
                            >
                                <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform duration-300`}>
                                    <span className={`material-symbols-outlined text-2xl ${feature.color}`}>
                                        {feature.icon}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover/card:text-brand transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-300 leading-relaxed opacity-80">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Center Text (Optional - fades out on hover or stays) */}
                <div className="absolute top-1/2 left-8 lg:left-12 -translate-y-1/2 z-20 max-w-xl pointer-events-none hidden lg:block">
                    <h3 className="text-5xl lg:text-7xl font-black text-white leading-[0.9] mb-4 opacity-100 group-hover:opacity-20 transition-opacity duration-700">
                        DESIGNED<br />
                        <span className="text-brand-stroke">FOR</span><br />
                        PEOPLE.
                    </h3>
                </div>
            </div>

            {/* Bottom Glow Effect */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-brand/20 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
        </section>
    );
}
