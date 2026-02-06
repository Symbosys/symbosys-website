export function WhyChooseUs() {
    const features = [
        {
            title: "Expertise and Experience",
            description:
                "Our team of software experts has extensive experience in developing and implementing software solutions for businesses of all sizes.",
            icon: "workspace_premium",
        },
        {
            title: "Customized Solutions",
            description:
                "We understand that every business is unique, and therefore, we offer customized software solutions tailored to meet your specific requirements.",
            icon: "dashboard_customize",
        },
        {
            title: "Customer-centric Approach",
            description:
                "We take a customer-centric approach to our work, putting our clients' needs and satisfaction at the forefront of everything we do.",
            icon: "favorite",
        },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                {/* Left Content */}
                <div className="lg:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-bold text-text-main dark:text-white mb-6 leading-tight">
                        What makes Symbosys <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-brand to-brand-blue">
                            Standout From the Crowd?
                        </span>
                    </h2>
                    <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed mb-8">
                        In a digital world filled with options, we distinguish ourselves
                        through unwavering commitment to quality, innovation, and client
                        success. We don&apos;t just build software; we build legacies.
                    </p>

                    <button className="group h-12 px-6 rounded-full border border-brand/20 dark:border-white/10 bg-brand/5 dark:bg-gray-800/10 text-brand font-bold hover:bg-brand hover:text-white transition-all duration-300 flex items-center gap-2">
                        Discover More
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
