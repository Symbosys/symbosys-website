export function BoostBusiness() {
    const services = [
        {
            title: "Web Design & Development",
            description:
                "We engineer high-fidelity, responsive digital interfaces that deliver seamless user experiences across all hardware platforms, combining aesthetic precision with technical robustness.",
            icon: "web",
        },
        {
            title: "Software Development",
            description:
                "Specializing in enterprise-grade software engineering, Symbosys serves as your long-term technology partner, translating complex business logic into scalable, modular architectures.",
            icon: "developer_board",
        },
        {
            title: "Mobile Apps Development",
            description:
                "Our team delivers high-performance native and cross-platform mobile applications, focusing on utility, security, and superior user engagement for diverse business models.",
            icon: "smartphone",
        },
        {
            title: "Search Engine Optimization",
            description:
                "We implement sophisticated, algorithm-aware SEO strategies that leverage technical optimization and process-driven methodologies to ensure your brand dominates search rankings.",
            icon: "search",
        },
        {
            title: "Graphic Designing",
            description:
                "Our design philosophy integrates modern visual aesthetics with platform-specific requirements, creating a cohesive brand identity that maintains uniformity across all touchpoints.",
            icon: "brush",
        },
        {
            title: "Domain & Hosting",
            description:
                "Managing the foundational architecture of your digital identity, we provide secure domain governance, SSL integration, and high-availability hosting for maximum uptime.",
            icon: "dns",
        },
        {
            title: "Ecommerce Website",
            description:
                "We architect high-conversion e-commerce ecosystems that redefine the retail experience through intuitive navigation, secure processing, and streamlined management.",
            icon: "shopping_cart",
        },
        {
            title: "Video & Animation",
            description:
                "In the high-velocity digital space, our cinematic video and motion graphics serve as powerful tools, transforming static concepts into dynamic and engaging visual narratives.",
            icon: "movie",
        },
        {
            title: "Digital Marketing",
            description:
                "Serving as the cornerstone of your strategy, our marketing solutions utilize data-driven insights and multi-channel campaigns to unlock robust visibility and competitive advantage.",
            icon: "campaign",
        },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-text-main dark:text-white mb-6 leading-tight">
                    Strategic Digital Ecosystems to <br />
                    <span className="text-brand">Scale Your Business Globally</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 group cursor-default"
                    >
                        <div className="size-14 rounded-2xl bg-brand/5 dark:bg-brand/10 flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-colors duration-300 shadow-sm">
                            <span className="material-symbols-outlined text-3xl">
                                {service.icon}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
                            {service.title}
                        </h3>
                        <p className="text-text-muted dark:text-gray-300 leading-relaxed text-sm">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
