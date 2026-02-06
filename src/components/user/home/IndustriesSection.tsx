export function IndustriesSection() {
    const industries = [
        { name: "Education & Institutions", icon: "school" },
        { name: "Restaurant", icon: "restaurant" },
        { name: "Constructions", icon: "construction" },
        { name: "Beverages", icon: "local_bar" },
        { name: "Colleges & University", icon: "account_balance" },
        { name: "Transportation", icon: "local_shipping" },
        { name: "Astrology", icon: "auto_awesome" },
        { name: "Automotive", icon: "directions_car" },
        { name: "Tour & Travel", icon: "flight" },
        { name: "Health", icon: "medical_services" },
        { name: "Agriculture", icon: "agriculture" },
        { name: "Banking & Financial", icon: "payments" },
        { name: "Hotel", icon: "hotel" },
        { name: "Hospitality", icon: "room_service" },
        { name: "Foods & Spices", icon: "lunch_dining" },
        { name: "Solar Enterprises", icon: "solar_power" },
        { name: "IT Services", icon: "devices" },
        { name: "Gaming", icon: "sports_esports" },
        { name: "Fashion & Wear", icon: "checkroom" },
        { name: "Jewellery", icon: "diamond" },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-text-main dark:text-white mb-6 leading-tight max-w-4xl mx-auto">
                    We offer managed IT services that are tailored to meet the{" "}
                    <span className="text-brand">unique needs of your industry</span>
                </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {industries.map((industry, index) => (
                    <div
                        key={index}
                        className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 group cursor-default"
                    >
                        <div className="size-12 rounded-full bg-brand/5 dark:bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                            <span className="material-symbols-outlined text-2xl">
                                {industry.icon}
                            </span>
                        </div>
                        <span className="text-text-main dark:text-gray-300 font-medium text-center text-sm">
                            {industry.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
