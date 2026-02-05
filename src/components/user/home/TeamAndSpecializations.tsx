export function TeamAndSpecializations() {
    const specializations = [
        { name: "Enterprise Resource Planning", icon: "dataset_linked" },
        { name: "Supply Chain Management", icon: "precision_manufacturing" },
        { name: "Human Capital Management", icon: "person_celebrate" },
        { name: "Project Management Solution", icon: "assignment" },
        { name: "Industry Application", icon: "factory" },
    ];

    const erpFeatures = [
        "Financials",
        "Project Management",
        "Procurement",
        "Maintenance",
        "Logistics",
        "Enterprise Performance Management",
        "Risk Management and Compliance",
        "ERP Analytics",
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="flex flex-col gap-16">
                {/* Intro and Specializations */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6 leading-tight">
                            Our team of experts is dedicated to creating software solutions
                            that not only meet but <span className="text-brand">exceed your expectations.</span>
                        </h2>
                        <div className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-sm font-bold mb-8">
                            Our Specializations
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {specializations.map((spec, index) => (
                            <div
                                key={index}
                                className="glass-card p-6 rounded-2xl flex items-center gap-4 group hover:-translate-y-1 transition-all"
                            >
                                <div className="size-10 rounded-xl bg-linear-to-br from-brand to-brand-blue flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-xl">
                                        {spec.icon}
                                    </span>
                                </div>
                                <span className="text-text-main font-semibold text-sm leading-tight">
                                    {spec.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ERP Detailed Section */}
                <div className="glass-panel rounded-4xl p-8 md:p-12 relative overflow-hidden">
                    {/* Decorative background orbs specific to this inner section */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl -z-10 animate-float"></div>

                    <div className="grid lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-6">
                                <span className="material-symbols-outlined text-brand-blue text-xs">auto_awesome</span>
                                <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">AI Powered Solutions</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-text-main mb-4">
                                Enterprise Resource Planning
                            </h3>
                            <p className="text-text-muted text-lg mb-8 leading-relaxed">
                                Future-proof your business with Symbosys ERP solutions, built
                                using cutting-edge AI technologies to help you stay ahead of the
                                curve.
                            </p>
                        </div>

                        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-4 gap-x-8">
                            {erpFeatures.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 py-2 border-b border-brand/10">
                                    <span className="material-symbols-outlined text-brand text-xl">check_circle</span>
                                    <span className="text-text-main font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
