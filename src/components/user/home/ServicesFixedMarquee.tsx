export function ServicesFixedMarquee() {
    const services = [
        "Website Designing and Development",
        "Mobile App Development",
        "School Management",
        "Hotel Management Software",
        "SEO",
        "SEM",
        "Digital Marketing",
        "Graphic Designing",
        "Company Registration",
        "GST",
        "E-Filing",
        "ERP",
        "CRM",
    ];

    return (
        <section className="w-full mb-24 relative">
            <div className="flex flex-col lg:flex-row items-stretch">
                {/* Fixed Left Section - Hidden on Mobile */}
                <div className="hidden lg:flex w-80 shrink-0 items-center justify-center bg-linear-to-r from-brand to-brand-blue p-8 rounded-r-4xl shadow-2xl shadow-brand/20 z-10">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-white tracking-tight">
                            Our Services
                        </h2>
                    </div>
                </div>

                {/* Mobile Header - Visible only on Mobile */}
                <div className="lg:hidden w-full mb-4 px-4">
                    <div className="glass-panel rounded-2xl p-6 text-center shadow-sm">
                        <h2 className="text-2xl font-bold text-text-main">Our Services</h2>
                    </div>
                </div>

                {/* Marquee Section */}
                <div className="flex-1 overflow-hidden py-8 lg:py-12 relative group">
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-surface to-transparent z-10 pointer-events-none lg:hidden"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-surface to-transparent z-10 pointer-events-none"></div>

                    {/* UPDATED SPEED HERE */}
                    <div className="flex whitespace-nowrap animate-marquee [animation-duration:10s] lg:[animation-duration:17s] hover:[animation-play-state:paused]">
                        {[...services, ...services].map((service, index) => (
                            <div
                                key={index}
                                className="inline-flex items-center mx-4 px-6 py-3 glass-card rounded-full hover:scale-105 transition-transform cursor-pointer"
                            >
                                <span className="text-brand mr-2">✦</span>
                                <span className="text-text-main font-medium">{service}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}