export function BoostBusiness() {
    const services = [
        {
            title: "Web Design & Development",
            description:
                "We are a creative group of designers and developers. Our fluid designs always surprise whatever device you have. Web development is our strength & high in demand.",
            icon: "web",
        },
        {
            title: "Software Development",
            description:
                "If you have a long-term business plan and want to develop software in stages to achieve a bigger goal, Brightcode would like to be your software development firm.",
            icon: "developer_board",
        },
        {
            title: "Mobile Apps Development",
            description:
                "We deliver custom Android apps with high performance and utility ranging from productivity business and mCommerce to gaming leisure and social apps.",
            icon: "smartphone",
        },
        {
            title: "Search Engine Optimization",
            description:
                "We offer you the best SEO Service in Ranchi that provides a cutting-edge technology-supported, process-oriented, latest algorithm-based approach towards the project.",
            icon: "search",
        },
        {
            title: "Graphic Designing",
            description:
                "Our innovative approaches with an integration of modern technologies give us a unique blend of power to create responsive and concise design with uniform cross-platform compatibility.",
            icon: "brush",
        },
        {
            title: "Domain & Hosting",
            description:
                "Domains serve as the digital equivalents of street addresses. Our offerings include domain management, SSL certificates, facilitating users in locating your website effortlessly.",
            icon: "dns",
        },
        {
            title: "Ecommerce Website",
            description:
                "E-commerce stands as a beacon of innovation in the retail landscape, bestowing upon consumers the power to peruse and procure goods from the comfort of their abodes.",
            icon: "shopping_cart",
        },
        {
            title: "Video & Animation",
            description:
                "The Rise of Video and Animation In the fast-paced world of digital marketing, video and animation have emerged as game-changers. Gone are the days of static ads.",
            icon: "movie",
        },
        {
            title: "Digital Marketing",
            description:
                "In today's rapidly evolving world, digital marketing serves as the cornerstone for unlocking a robust online presence for businesses striving to maintain competitiveness.",
            icon: "campaign",
        },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-6 leading-tight">
                    Symbosys services that Boost your <br />
                    <span className="text-brand">business Online & Offline</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 group cursor-default"
                    >
                        <div className="size-14 rounded-2xl bg-brand/5 flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-colors duration-300 shadow-sm">
                            <span className="material-symbols-outlined text-3xl">
                                {service.icon}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-text-main mb-3">
                            {service.title}
                        </h3>
                        <p className="text-text-muted leading-relaxed text-sm">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
