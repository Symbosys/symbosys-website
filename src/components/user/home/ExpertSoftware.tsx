import Image from "next/image";

export function ExpertSoftware() {
    const offerings = [
        { name: "ERP Systems", icon: "inventory_2" },
        { name: "CRM Software", icon: "groups" },
        { name: "School Management Systems", icon: "school" },
        { name: "Hotel Management Software", icon: "hotel" },
        { name: "Custom Software Development", icon: "terminal" },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Content */}
                <div>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-bold mb-6">
                        Expert Solutions
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main mb-4 leading-tight">
                        Elevating your digital presence with{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-purple to-brand-blue">
                            Expert Software Services
                        </span>
                    </h2>

                    <p className="text-text-muted text-lg leading-relaxed mb-6">
                        Transform Your Business with Expert Software Solutions. Our advanced
                        software solutions are designed to streamline operations and improve
                        customer service for businesses to thrive. Utilizing our technology,
                        companies can achieve unparalleled service quality and significant
                        growth, strengthening their market leadership.
                    </p>

                    <p className="text-text-main font-semibold mb-4">
                        Discover our suite of highly interactive and customer-engaging
                        software offerings:
                    </p>

                    {/* Offerings List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {offerings.map((offering, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/60 hover:border-brand-purple/30 hover:bg-white/70 transition-all group cursor-pointer"
                            >
                                <div className="size-10 rounded-lg bg-linear-to-br from-brand-purple to-brand-blue flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-md">
                                    <span className="material-symbols-outlined text-lg">
                                        {offering.icon}
                                    </span>
                                </div>
                                <span className="text-text-main font-medium text-sm">
                                    {offering.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    <p className="text-text-muted text-base mb-6 italic">
                        Join us at Symbosys, where every solution is a testament to our
                        commitment to your success.
                    </p>

                    <button className="group h-14 px-8 rounded-full bg-linear-to-r from-brand-purple to-brand-blue text-white font-bold text-lg shadow-xl shadow-brand-purple/30 hover:shadow-2xl hover:shadow-brand-purple/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
                        Read More
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                            arrow_forward
                        </span>
                    </button>
                </div>

                {/* Right: Image */}
                <div className="relative">
                    <div className="absolute inset-0 bg-brand-purple/5 rounded-4xl -rotate-3 scale-95 blur-sm"></div>
                    <div className="relative glass-card rounded-4xl p-8 overflow-hidden group">
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <Image
                                src="/home/ExpertSoftware.webp"
                                alt="Expert Software Solutions"
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-purple/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
