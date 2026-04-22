export function WhyChooseUs() {
    const features = [
        {
            title: "Technical Proficiency",
            description:
                "Our multidisciplinary engineering collective brings decades of experience in architecting and deploying high-scale software ecosystems for global enterprises.",
            icon: "workspace_premium",
        },
        {
            title: "Precision-Tailored Architectures",
            description:
                "We specialize in engineering bespoke digital frameworks meticulously calibrated to align with your specific operational objectives and growth strategies.",
            icon: "dashboard_customize",
        },
        {
            title: "Radical Client Commitment",
            description:
                "We maintain a relentless focus on partner success, integrating your strategic goals into our core development philosophy to ensure every delivery transcends expectations.",
            icon: "favorite",
        },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                {/* Left Content */}
                <div className="lg:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-bold text-text-main dark:text-white mb-6 leading-tight">
                        What Defines the <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-brand to-brand-blue">
                            Symbosys Advantage?
                        </span>
                    </h2>
                    <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed mb-8">
                        In a saturated digital marketplace, we differentiate our services
                        through a relentless pursuit of engineering excellence, disruptive
                        innovation, and measurable client impact. We don&apos;t just deliver
                        code; we architect transformative business legacies.
                    </p>

                    <button className="group h-12 px-6 rounded-full border border-brand/20 dark:border-white/10 bg-brand/5 dark:bg-gray-800/10 text-brand font-bold hover:bg-brand hover:text-white transition-all duration-300 flex items-center gap-2">
                        Learn More
                        <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                            arrow_forward
                        </span>
                    </button>
                </div>

                {/* Right Feature List */}
                <div className="lg:w-1/2 flex flex-col gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass-card p-6 rounded-2xl flex items-start gap-5 hover:-translate-x-2 transition-transform duration-300 group cursor-default"
                        >
                            <div className="shrink-0 size-12 rounded-xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-brand mt-1 group-hover:bg-brand group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-2xl">
                                    {feature.icon}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-text-muted dark:text-gray-400 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
