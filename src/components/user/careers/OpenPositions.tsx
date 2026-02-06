export function OpenPositions() {
    const jobs = [
        {
            id: "fe-senior",
            title: "Senior Frontend Developer",
            department: "Engineering",
            type: "Full-time",
            location: "Ranchi, India",
        },
        {
            id: "be-node",
            title: "Backend Developer (Node.js)",
            department: "Engineering",
            type: "Full-time",
            location: "Ranchi, India",
        },
        {
            id: "ui-ux",
            title: "UI/UX Designer",
            department: "Design",
            type: "Full-time",
            location: "Ranchi, India",
        },
        {
            id: "bde",
            title: "Business Development Executive",
            department: "Sales",
            type: "Full-time",
            location: "Ranchi, India",
        },
    ];

    return (
        <section id="openings" className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="glass-panel p-8 md:p-12 rounded-4xl">
                <h2 className="text-3xl font-bold text-text-main dark:text-white mb-12 text-center">
                    Open Positions
                </h2>

                <div className="space-y-4">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-colors border border-transparent hover:border-brand/20 group"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-text-main dark:text-white mb-2 group-hover:text-brand transition-colors">
                                    {job.title}
                                </h3>
                                <div className="flex flex-wrap gap-4 text-sm text-text-muted dark:text-gray-400">
                                    <span className="flex items-center gap-1.5 bg-white/50 dark:bg-gray-900/50 px-2 py-1 rounded-md">
                                        <span className="material-symbols-outlined text-base text-brand">
                                            domain
                                        </span>
                                        {job.department}
                                    </span>
                                    <span className="flex items-center gap-1.5 bg-white/50 dark:bg-gray-900/50 px-2 py-1 rounded-md">
                                        <span className="material-symbols-outlined text-base text-brand">
                                            schedule
                                        </span>
                                        {job.type}
                                    </span>
                                    <span className="flex items-center gap-1.5 bg-white/50 dark:bg-gray-900/50 px-2 py-1 rounded-md">
                                        <span className="material-symbols-outlined text-base text-brand">
                                            location_on
                                        </span>
                                        {job.location}
                                    </span>
                                </div>
                            </div>
                            <button className="whitespace-nowrap px-6 py-3 rounded-xl bg-text-main dark:bg-gray-100 text-white dark:text-gray-900 font-semibold hover:bg-brand dark:hover:bg-brand dark:hover:text-white transition-colors shadow-lg active:scale-95 duration-200">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center p-8 bg-brand/5 dark:bg-brand/10 rounded-3xl border border-brand/10">
                    <p className="text-text-main dark:text-white font-medium mb-4 text-lg">
                        Don&apos;t see a perfect fit?
                    </p>
                    <p className="text-text-muted dark:text-gray-400 text-sm mb-6 max-w-md mx-auto">
                        We are always looking for talented individuals to join our growing
                        team. Send your resume to us directly.
                    </p>
                    <a
                        href="mailto:support@symbosys.com"
                        className="inline-flex items-center gap-2 text-brand font-bold hover:underline bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all"
                    >
                        <span className="material-symbols-outlined">mail</span>
                        support@symbosys.com
                    </a>
                </div>
            </div>
        </section>
    );
}
