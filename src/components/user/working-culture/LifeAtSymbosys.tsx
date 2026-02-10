import Image from "next/image";

export function LifeAtSymbosys() {
    const moments = [
        {
            title: "Creative Brainstorming",
            description: "Ideas flourish in our open, judgment-free brainstorming sessions where every perspective sparks innovation.",
            icon: "lightbulb",
            span: "lg:col-span-2",
            height: "min-h-[300px] lg:min-h-[400px]",
            gradient: "from-brand/20 via-brand-purple/10 to-transparent",
            // TODO: Replace with your internal image -> image: "/images/culture/brainstorming.jpg",
            image: null,
        },
        {
            title: "Learning Together",
            description: "Regular tech talks, workshops, and knowledge-sharing sessions keep our team sharp.",
            icon: "school",
            span: "lg:col-span-1",
            height: "min-h-[300px] lg:min-h-[400px]",
            gradient: "from-brand-purple/20 via-brand-blue/10 to-transparent",
            // TODO: Replace with your internal image -> image: "/images/culture/learning.jpg",
            image: null,
        },
        {
            title: "Team Celebrations",
            description: "We celebrate wins — big and small. From project milestones to personal achievements, every success matters.",
            icon: "celebration",
            span: "lg:col-span-1",
            height: "min-h-[300px]",
            gradient: "from-brand-blue/20 via-brand/10 to-transparent",
            // TODO: Replace with your internal image -> image: "/images/culture/celebration.jpg",
            image: null,
        },
        {
            title: "Pair Programming",
            description: "Two minds, one screen. Our collaborative coding culture accelerates learning and produces cleaner code.",
            icon: "code",
            span: "lg:col-span-2",
            height: "min-h-[300px]",
            gradient: "from-brand/20 via-brand-blue/10 to-transparent",
            // TODO: Replace with your internal image -> image: "/images/culture/coding.jpg",
            image: null,
        },
        {
            title: "Wellness & Fun",
            description: "From team outings and game nights to wellness breaks — we nurture happiness alongside productivity.",
            icon: "spa",
            span: "lg:col-span-3",
            height: "min-h-[350px]",
            gradient: "from-brand-purple/20 via-brand/10 to-transparent",
            // TODO: Replace with your internal image -> image: "/images/culture/wellness.jpg",
            image: null,
        },
    ];

    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            {/* Liquid background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-linear-to-br from-brand/5 via-brand-purple/3 to-brand-blue/5 blur-3xl pointer-events-none"></div>

            {/* Section Header */}
            <div className="relative text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-6">
                    <span className="material-symbols-outlined text-brand-purple text-sm">
                        photo_camera
                    </span>
                    <span className="text-xs font-bold text-brand-purple uppercase tracking-wider">
                        Life at Symbosys
                    </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-text-main dark:text-white mb-6 leading-tight">
                    A Day in Our{" "}
                    <span className="bg-linear-to-r from-brand-purple via-brand to-brand-blue bg-clip-text text-transparent">
                        Universe
                    </span>
                </h2>
                <p className="text-text-muted dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    A glimpse into the vibrant moments that define who we are.
                </p>
            </div>

            {/* Bento Grid - Visual First */}
            <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {moments.map((moment, index) => (
                    <div
                        key={index}
                        className={`group relative glass-card rounded-3xl overflow-hidden ${moment.span} ${moment.height} transition-all duration-500 hover:shadow-2xl hover:shadow-brand/5`}
                    >
                        {/* 1. Image Layer (Primary Focus) */}
                        <div className="absolute inset-0 z-0">
                            {moment.image ? (
                                <Image
                                    src={moment.image}
                                    alt={moment.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            ) : (
                                /* Fallback Gradient Placeholder - mimics an image slot */
                                <div className={`w-full h-full bg-surface dark:bg-gray-900`}>
                                    <div className={`absolute inset-0 bg-linear-to-br ${moment.gradient} opacity-60`}></div>
                                    {/* Abstract Pattern Overlay */}
                                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[16px_16px]"></div>
                                </div>
                            )}

                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                        </div>

                        {/* 2. Content Layer */}
                        <div className="relative z-10 h-full flex flex-col justify-end p-8">
                            {/* Floating Icon Badge */}
                            <div className="absolute top-6 right-6 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                <span className="material-symbols-outlined text-2xl">
                                    {moment.icon}
                                </span>
                            </div>

                            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                                    {moment.title}
                                </h3>
                                <p className="text-gray-200 text-sm md:text-base leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[100px] transition-all duration-500 overflow-hidden">
                                    {moment.description}
                                </p>
                            </div>
                        </div>

                        {/* Interactive Shine Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700">
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:animate-shine"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
