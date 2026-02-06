export function WhyChooseSymbosys() {
    const reasons = [
        {
            title: "Fast and Innovative",
            description:
                "We provide innovative solutions and take a quality-centric approach to deliver result-oriented business solutions promptly. Our services not only enhance workflow processes but also guarantee success for your businesses.",
            icon: "rocket_launch",
        },
        {
            title: "Client Satisfaction",
            description:
                "With our innovative software solutions, we’ve driven significant transformations in our customers’ businesses, earning widespread recognition for delivering satisfactory results.",
            icon: "computer",
        },
        {
            title: "Enthusiastic Team",
            description:
                "Our rich portfolio speaks volumes about our enthusiasm and dedication to every project we undertake. Having completed numerous projects for large employee-based organizations, we’ve garnered remarkable recognition for our commitment to quality-standard services.",
            icon: "groups",
        },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="glass-panel rounded-4xl p-8 md:p-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-text-main dark:text-white">
                        Why Choose <span className="text-brand">Symbosys</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="size-20 rounded-full bg-white dark:bg-gray-800 shadow-xl flex items-center justify-center text-brand mb-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                                <span className="material-symbols-outlined text-4xl">
                                    {reason.icon}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-text-main dark:text-white mb-4">
                                {reason.title}
                            </h3>
                            <p className="text-text-muted dark:text-gray-400 leading-relaxed text-sm">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
