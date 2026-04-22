export function WhyChooseSymbosys() {
    const reasons = [
        {
            title: "Agile Innovation",
            description:
                "We deliver disruptive digital solutions through a quality-centric engineering approach, ensuring high-velocity deployment without compromising on architectural integrity. Our frameworks are designed to optimize organizational workflows and catalyze business success.",
            icon: "rocket_launch",
        },
        {
            title: "Measurable Impact",
            description:
                "Our bespoke software ecosystems have triggered profound operational transformations for our global clientele. We are recognized for our ability to translate complex technical challenges into tangible, performance-driven results.",
            icon: "insights",
        },
        {
            title: "Elite Engineering Culture",
            description:
                "Our extensive portfolio reflects a relentless dedication to technical excellence. Having architected critical systems for high-scale organizations, we maintain a sterling reputation for delivering quality-standard industrial services.",
            icon: "groups",
        },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="glass-panel rounded-4xl p-8 md:p-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-text-main dark:text-white">
                        Defining the Standards of <br />
                        <span className="text-brand text-transparent bg-clip-text bg-linear-to-r from-brand to-brand-blue">
                            Digital Transformation
                        </span>
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
