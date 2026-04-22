export function WorkProcessSection() {
    const processes = [
        {
            title: "Engagement & Resource Calibration",
            description:
                "Through meticulous planning and strategic resource allocation, we ensure the optimal assignment of a dedicated engineering team to materialize your project vision.",
            icon: "calendar_month",
        },
        {
            title: "Agile & Adaptive Innovation",
            description:
                "Deploying state-of-the-art technical frameworks with a commitment to architectural excellence, we ensure rapid and performance-driven results for your enterprise.",
            icon: "rocket_launch",
        },
        {
            title: "Transparent Engineering Discourse",
            description:
                "To ensure perfect alignment and mitigate technical debt, we facilitate direct access to our senior developers, fostering deep technical communication throughout the implementation lifecycle.",
            icon: "connect_without_contact",
        },
        {
            title: "Precision-Driven Delivery Cycles",
            description:
                "Our engineering culture is built on high-fidelity delivery. We maintain 100% adherence to project milestones, ensuring your solution is deployed on schedule with absolute requirement compliance.",
            icon: "schedule",
        },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            {/* Excellence Intro */}
            <div className="glass-panel rounded-4xl p-8 md:p-12 mb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl -z-10"></div>
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="shrink-0">
                        <div className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-linear-to-br from-brand to-brand-blue">
                            8+
                        </div>
                        <div className="text-xl md:text-2xl font-bold text-text-main dark:text-white">
                            Years of Excellence
                        </div>
                    </div>
                    <div className="h-px md:h-24 w-full md:w-px bg-brand/20"></div>
                    <p className="text-lg md:text-xl text-text-muted dark:text-gray-400 leading-relaxed">
                        We are relentlessly focused on engineering high-impact results and
                        transcending client benchmarks. Our commitment to technical
                        integrity and operational excellence drives us to push the
                        boundaries of digital possibility.
                    </p>
                </div>
            </div>

            {/* Work Process Steps */}
            <div className="text-center mb-12">
                <div className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-sm font-bold mb-4">
                    Our Methodology
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white">
                    Our Strategic Workflow
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {processes.map((process, index) => (
                    <div
                        key={index}
                        className="glass-card p-8 rounded-3xl relative overflow-hidden group transition-all"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl text-brand select-none">
                            0{index + 1}
                        </div>
                        <div className="size-14 rounded-2xl bg-linear-to-br from-brand to-brand-blue flex items-center justify-center text-white mb-6 shadow-lg shadow-brand/20 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl">
                                {process.icon}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
                            {process.title}
                        </h3>
                        <p className="text-text-muted dark:text-gray-400 leading-relaxed">
                            {process.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
