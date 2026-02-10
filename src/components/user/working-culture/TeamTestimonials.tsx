export function TeamTestimonials() {
    const testimonials = [
        {
            name: "Ankit Sharma",
            role: "Senior Full-Stack Developer",
            quote: "Symbosys is more than a workplace — it&apos;s a family. The mentorship I received here transformed me from a junior developer into a confident lead. The trust they place in you is unmatched.",
            initials: "AS",
            gradient: "from-brand to-brand-purple",
        },
        {
            name: "Priya Kumari",
            role: "UI/UX Designer",
            quote: "The creative freedom I enjoy here is incredible. Every project is an opportunity to push design boundaries while knowing your team has your back. The culture truly values craftsmanship.",
            initials: "PK",
            gradient: "from-brand-purple to-brand-blue",
        },
        {
            name: "Rahul Verma",
            role: "Mobile App Developer",
            quote: "From hackathons to team retreats, every day brings something new. The work-life balance and growth opportunities make Symbosys a place where I see myself building a long career.",
            initials: "RV",
            gradient: "from-brand-blue to-brand",
        },
    ];

    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 overflow-hidden">
            {/* Background liquid lights */}
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Section Header */}
            <div className="relative text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-6">
                    <span className="material-symbols-outlined text-brand text-sm">
                        format_quote
                    </span>
                    <span className="text-xs font-bold text-brand uppercase tracking-wider">
                        Voices of Symbosys
                    </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-text-main dark:text-white mb-6 leading-tight">
                    What Our{" "}
                    <span className="bg-gradient-to-r from-brand via-brand-purple to-brand-blue bg-clip-text text-transparent">
                        Team Says
                    </span>
                </h2>
                <p className="text-text-muted dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    Genuine stories from the people who make Symbosys extraordinary every single day.
                </p>
            </div>

            {/* Testimonial Cards */}
            <div className="relative grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="relative glass-card rounded-3xl p-8 group hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col"
                    >
                        {/* Liquid glow on hover */}
                        <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full bg-brand/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-brand-purple/10 blur-3xl opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>

                        {/* Quote icon */}
                        <div className="relative mb-6">
                            <span className="material-symbols-outlined text-brand/20 dark:text-brand/30 text-5xl">
                                format_quote
                            </span>
                        </div>

                        {/* Quote text */}
                        <p className="relative text-text-muted dark:text-gray-300 leading-relaxed mb-8 flex-1 italic text-[15px]">
                            &ldquo;{testimonial.quote}&rdquo;
                        </p>

                        {/* Author info */}
                        <div className="relative flex items-center gap-4 pt-6 border-t border-brand/10 dark:border-white/5">
                            {/* Avatar with gradient ring */}
                            <div className={`relative size-12 rounded-full bg-gradient-to-br ${testimonial.gradient} p-[2px] shadow-lg shadow-brand/10`}>
                                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                                    <span className="text-sm font-bold bg-gradient-to-br from-brand to-brand-purple bg-clip-text text-transparent">
                                        {testimonial.initials}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-text-main dark:text-white text-sm">
                                    {testimonial.name}
                                </h4>
                                <p className="text-text-muted dark:text-gray-400 text-xs">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
