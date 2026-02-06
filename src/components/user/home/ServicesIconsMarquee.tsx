export function ServicesIconsMarquee() {
    const services = [
        { name: "Graphic Designing", icon: "palette" },
        { name: "Mobile App Development", icon: "phone_android" },
        { name: "Website Development", icon: "language" },
        { name: "Search Engine Optimization", icon: "search" },
        { name: "Software Development", icon: "code" },
        { name: "Software Training", icon: "school" },
        { name: "Domain & Hosting", icon: "dns" },
        { name: "Digital Marketing", icon: "campaign" },
    ];

    return (
        <section className="w-full mb-24 relative overflow-hidden py-12">
            {/* Section Header */}
            <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-sm font-bold mb-4">
                    What We Offer
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white">
                    Comprehensive IT Solutions
                </h2>
            </div>

            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-linear-to-r from-surface dark:from-gray-950 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-linear-to-l from-surface dark:from-gray-950 to-transparent z-20 pointer-events-none"></div>

            {/* First Row - Left to Right */}
            <div className="flex whitespace-nowrap overflow-hidden mb-6">
                <div className="flex animate-marquee" style={{ animationDuration: "50s" }}>
                    {[...services, ...services].map((service, index) => (
                        <div
                            key={`row1-${index}`}
                            className="inline-flex items-center mx-3 glass-card rounded-2xl p-5 hover:scale-105 transition-all duration-300 cursor-pointer group"
                        >
                            <div className="size-12 rounded-xl bg-linear-to-br from-brand to-brand-blue flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform shadow-lg shadow-brand/20">
                                <span className="material-symbols-outlined text-xl">
                                    {service.icon}
                                </span>
                            </div>
                            <span className="text-text-main dark:text-gray-200 font-semibold text-lg whitespace-nowrap">
                                {service.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Second Row - Right to Left (Reverse) */}
            <div className="flex whitespace-nowrap overflow-hidden">
                <div className="flex animate-marquee-reverse" style={{ animationDuration: "80s" }}>
                    {[...services.slice().reverse(), ...services.slice().reverse()].map(
                        (service, index) => (
                            <div
                                key={`row2-${index}`}
                                className="inline-flex items-center mx-3 glass-card rounded-2xl p-5 hover:scale-105 transition-all duration-300 cursor-pointer group"
                            >
                                <div className="size-12 rounded-xl bg-linear-to-br from-brand-purple to-brand-blue flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform shadow-lg shadow-brand-purple/20">
                                    <span className="material-symbols-outlined text-xl">
                                        {service.icon}
                                    </span>
                                </div>
                                <span className="text-text-main dark:text-gray-200 font-semibold text-lg whitespace-nowrap">
                                    {service.name}
                                </span>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
