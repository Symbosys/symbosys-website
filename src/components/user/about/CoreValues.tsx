import Image from "next/image";

export function CoreValues() {
    const values = [
        {
            title: "Client-Focused Excellence",
            description:
                "Our philosophy centers on deeply understanding your unique business landscape. We specialize in engineering intuitive, user-focused products that are precisely calibrated to meet and surpass your specific requirements.",
            icon: "diversity_3",
        },
        {
            title: "Relentless Innovation",
            description:
                "We cultivate a culture of creative problem-solving, constantly exploring emerging technologies and proprietary ideas to enhance product functionality and deliver peak performance.",
            icon: "lightbulb",
        },
        {
            title: "Elite Expertise",
            description:
                "We recruit and nurture the industry's brightest talent, ensuring our clients benefit from a dedicated team that is passionate about delivering technical superiority and exceptional value.",
            icon: "workspace_premium",
        },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="text-center mb-16">
                <div className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-xs font-bold mb-4 uppercase tracking-wider">
                    Our Foundation
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-text-main dark:text-white mb-6">
                    Core <span className="text-brand">Values</span>
                </h2>
                <p className="text-text-muted dark:text-gray-400 text-lg max-w-2xl mx-auto">
                    The core doctrines that drive our technical innovation, internal culture, and client partnerships.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Image */}
                <div className="relative order-2 lg:order-1">
                    <div className="absolute inset-0 bg-brand/5 dark:bg-brand/10 rounded-4xl rotate-1 scale-95 blur-sm"></div>
                    <div className="glass-card rounded-4xl overflow-hidden sticky top-32 border border-white/10 shadow-2xl group">

                        <div className="relative w-full aspect-square">
                            <Image
                                src="/about/core-values.webp"
                                alt="Core Values"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        {/* Background blobs */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand/10 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>

                {/* List */}
                <div className="space-y-6 order-1 lg:order-2">
                    {values.map((val, index) => (
                        <div
                            key={index}
                            className="glass-panel p-8 rounded-3xl transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/5"
                        >
                            <div className="flex items-start gap-6">
                                <div className="shrink-0 size-14 rounded-2xl bg-brand/5 dark:bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-sm">
                                    <span className="material-symbols-outlined text-3xl">
                                        {val.icon}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-text-main dark:text-white mb-3 group-hover:text-brand transition-colors">
                                        {val.title}
                                    </h3>
                                    <p className="text-text-muted dark:text-gray-400 leading-relaxed">
                                        {val.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
