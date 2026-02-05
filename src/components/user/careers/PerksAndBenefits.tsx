export function PerksAndBenefits() {
    const perks = [
        {
            title: "Growth & Learning",
            icon: "rocket_launch",
            desc: "Continuous learning opportunities with sponsored courses and mentorship.",
        },
        {
            title: "Flexible Environment",
            icon: "laptop_chromebook",
            desc: "Work-life balance is at our core. Remote-friendly options available.",
        },
        {
            title: "Competitive Compensation",
            icon: "featured_seasonal_and_gifts",
            desc: "Industry-leading salary packages with performance-based bonuses.",
        },
        {
            title: "Health & Wellness",
            icon: "monitor_heart",
            desc: "Comprehensive health insurance for you and your family.",
        },
        {
            title: "Modern Tech Stack",
            icon: "terminal",
            desc: "Work with the latest technologies (Next.js, AI, Cloud Native).",
        },
        {
            title: "Team Retreats",
            icon: "emoji_events",
            desc: "Regular team outings, hackathons, and fun events.",
        },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-6">
                    Why <span className="text-brand">Symbosys?</span>
                </h2>
                <p className="text-text-muted text-lg max-w-2xl mx-auto">
                    We believe in taking care of our people. Here is what you can expect when you join our team.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {perks.map((perk, index) => (
                    <div
                        key={index}
                        className="glass-card p-8 rounded-3xl border border-white/40 hover:border-brand/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5"
                    >
                        <div className="size-14 rounded-2xl bg-brand/5 flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-sm">
                            <span className="material-symbols-outlined text-3xl">
                                {perk.icon}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-text-main mb-3">
                            {perk.title}
                        </h3>
                        <p className="text-text-muted leading-relaxed">
                            {perk.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
