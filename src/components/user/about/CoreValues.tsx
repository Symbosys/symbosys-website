import Image from "next/image";

export function CoreValues() {
    const values = [
        {
            title: "Client-Centric Approach",
            description:
                "Our top priority is understanding our clients' unique business perspectives. As a certified software development company, we are committed to designing products that are not only tailored to meet specific requirements but are also intuitive and user-friendly.",
            icon: "diversity_3",
        },
        {
            title: "Innovation",
            description:
                "We foster creativity and innovation, continually developing new ideas that enhance product functionality and drive optimal performance.",
            icon: "lightbulb",
        },
        {
            title: "Top Talent",
            description:
                "We believe in attracting, supporting, and retaining top talent, ensuring that we consistently deliver exceptional value to our clients through the expertise and dedication of our team.",
            icon: "workspace_premium",
        },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="text-center mb-16">
                <div className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-sm font-bold mb-4">
                    Principles
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-6">
                    Core <span className="text-brand">Values</span>
                </h2>
                <p className="text-text-muted text-lg max-w-2xl mx-auto">
                    The principles that guide our culture, innovation, and client relationships.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Image */}
                <div className="relative order-2 lg:order-1">
                    <div className="absolute inset-0 bg-brand/5 rounded-4xl rotate-1 scale-95 blur-sm"></div>
                    <div className="glass-card rounded-4xl p-8 sticky top-32">
                        <div className="relative w-full aspect-square">
                            <Image
                                src="/about/core-values.webp"
                                alt="Core Values"
                                fill
                                className="object-contain"
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
                            className="glass-panel p-8 rounded-3xl border border-white/40 hover:border-brand/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/5"
                        >
                            <div className="flex items-start gap-6">
                                <div className="shrink-0 size-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-sm">
                                    <span className="material-symbols-outlined text-3xl">
                                        {val.icon}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-brand transition-colors">
                                        {val.title}
                                    </h3>
                                    <p className="text-text-muted leading-relaxed">
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
