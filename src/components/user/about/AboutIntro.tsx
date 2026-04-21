import Image from "next/image";

export function AboutIntro() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 pt-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-6">
                        <span className="material-symbols-outlined text-brand text-sm">
                            info
                        </span>
                        <span className="text-xs font-bold text-brand uppercase tracking-wider">
                            Our Origin Story
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-text-main dark:text-white mb-6 leading-tight">
                        About Symbosys Software
                    </h1>
                    <div className="space-y-4 text-text-muted dark:text-gray-400 text-lg leading-relaxed">
                        <p>
                            Symbosys Software Service Pvt. Ltd. stands as a premier IT powerhouse in Ranchi, empowering over 500+ clients across Jharkhand and India. Our elite team of veteran designers and developers is dedicated to transforming complex challenges into streamlined digital excellence, consistently delivering high-impact results on schedule.
                        </p>
                        <p>
                            To truly capture your business perspective, we facilitate direct collaboration between our technical experts and our clients. This transparent partnership allows us to build solutions that are perfectly aligned with your goals, anchored in a foundation of quality service and mutual trust.
                        </p>
                        <p>
                            We specialize in helping businesses navigate the digital age through innovation. Whether through custom enterprise software, mobile applications, or high-conversion websites, we engineer responsive platforms that optimize operations and give our clients a decisive edge in their respective industries.
                        </p>
                    </div>
                </div>

                {/* Image */}
                <div className="relative order-1 lg:order-2">
                    <div className="absolute inset-0 bg-brand/5 dark:bg-brand/10 rounded-4xl -rotate-3 scale-95 blur-sm"></div>
                    <div className="relative glass-card rounded-4xl overflow-hidden group border border-white/10 shadow-2xl">
                        <div className="relative w-full aspect-square md:aspect-4/3 lg:aspect-square">
                            <Image
                                src="/about/aboutnew.webp"
                                alt="About Symbosys Team"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                priority
                            />
                        </div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
