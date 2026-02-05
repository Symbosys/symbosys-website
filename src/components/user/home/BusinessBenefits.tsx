import Image from "next/image";

export function BusinessBenefits() {
    const benefits = [
        {
            title: "World Class CRM Services",
            description: "App Development, Software Development, best in class Apps",
        },
        {
            title: "Smart Source for making software",
            description: "Connect sales, service, marketing, commerce & IT services",
        },
        {
            title: "Fast Making software to value",
            description: "Ease of Design & implementation at speed with team support",
        },
        {
            title: "Better & Flexible",
            description: "Solutions for any type of business or Industry",
        },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Image */}
                <div className="relative order-2 lg:order-1">
                    <div className="absolute inset-0 bg-brand/5 rounded-4xl -rotate-3 scale-95 blur-sm"></div>
                    <div className="relative glass-card rounded-4xl p-8 overflow-hidden group">
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <Image
                                src="/home/your_businesses.webp"
                                alt="Business Benefits"
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl"></div>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="order-1 lg:order-2">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main mb-8 leading-tight">
                        Here are the benefits your businesses can <span className="text-brand">get from Symbosys.</span>
                    </h2>

                    <div className="space-y-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="shrink-0 size-8 mt-1 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                                    <span className="material-symbols-outlined text-sm">
                                        check
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-text-main mb-1">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-text-muted text-sm leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
