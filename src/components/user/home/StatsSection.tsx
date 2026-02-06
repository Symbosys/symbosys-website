export function StatsSection() {
    const stats = [
        {
            value: "99",
            suffix: "%",
            label: "Success in getting happy customers",
            icon: "sentiment_very_satisfied",
        },
        {
            value: "25",
            suffix: "K+",
            label: "Thousands of successful business",
            icon: "business",
        },
        {
            value: "120",
            suffix: "+",
            label: "Total clients who love HighTech",
            icon: "favorite",
        },
        {
            value: "5",
            suffix: "★",
            label: "Stars reviews given by satisfied clients",
            icon: "star",
        },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <div className="glass-panel rounded-4xl p-8 md:p-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center group cursor-default"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="size-14 rounded-2xl bg-linear-to-br from-brand to-brand-blue flex items-center justify-center text-white shadow-lg shadow-brand/20 group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-2xl">
                                        {stat.icon}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-baseline justify-center gap-1 mb-2">
                                <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-brand to-brand-blue">
                                    {stat.value}
                                </span>
                                <span className="text-2xl md:text-3xl font-bold text-brand">
                                    {stat.suffix}
                                </span>
                            </div>
                            <p className="text-sm md:text-base text-text-muted dark:text-gray-400 font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
