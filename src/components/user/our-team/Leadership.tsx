import Image from "next/image";

export function Leadership() {
    const founder = {
        name: "Abhishek Shahdeo",
        role: "Founder & CEO",
        quote: "We don't just write code; we architect the digital future of businesses.",
        skills: ["Since 2013", "Tech Visionary", "Award Winner", "Thought Leader"],
        socials: { linkedin: "#" }
    };

    return (
        <section className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <div className="relative glass-card rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
                <div className="flex flex-col md:flex-row items-stretch min-h-[400px]">

                    {/* Merged Image Section */}
                    <div className="md:w-1/3 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden border-b md:border-b-0 md:border-r border-gray-100 dark:border-white/5">
                        <Image
                            src="/team/admin.webp"
                            alt={founder.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Clean Content Section */}
                    <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-[10px] font-bold uppercase tracking-wider mb-4 w-fit">
                            The Visionary
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-bold text-text-main dark:text-white mb-1">
                            {founder.name}
                        </h2>
                        <p className="text-brand font-semibold text-sm uppercase tracking-wide mb-6">
                            {founder.role}
                        </p>

                        <div className="relative mb-8 pl-4 border-l-2 border-brand/30">
                            <p className="text-xl lg:text-2xl font-serif italic text-text-main dark:text-gray-200 leading-relaxed">
                                "{founder.quote}"
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-gray-100 dark:border-white/5">
                            <div className="flex flex-wrap gap-2 mr-auto">
                                {founder.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-white/5 text-[11px] font-medium text-text-muted dark:text-gray-400 border border-transparent hover:border-brand/20 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={founder.socials.linkedin}
                                className="inline-flex items-center gap-2 text-xs font-bold text-brand hover:text-brand-blue transition-colors group"
                            >
                                LinkedIn
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
