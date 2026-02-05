export function RecentProjects() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-sm font-bold mb-4">
                        Our Project
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-text-main">
                        Our Recently Completed <span className="text-brand">Projects</span>
                    </h2>
                </div>
                <button className="hidden md:flex group px-6 py-3 rounded-full border border-brand/20 bg-white/50 hover:bg-brand hover:text-white transition-all items-center gap-2 font-semibold">
                    View All Projects
                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                        arrow_forward
                    </span>
                </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                    <div
                        key={item}
                        className="group glass-card rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Project Image Placeholder */}
                        <div className="h-64 w-full bg-gray-200 relative overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-br from-brand/5 to-brand-blue/10 group-hover:scale-110 transition-transform duration-500"></div>
                            {/* Overlay content */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-sm">
                                <span className="px-6 py-2 bg-white rounded-full text-brand font-bold text-sm">
                                    View Case Study
                                </span>
                            </div>
                        </div>

                        {/* Project Details */}
                        <div className="p-6">
                            <div className="text-xs font-bold text-brand mb-2 uppercase tracking-wide">
                                Development
                            </div>
                            <h3 className="text-xl font-bold text-text-main mb-2 group-hover:text-brand transition-colors">
                                Project Name {item}
                            </h3>
                            <p className="text-text-muted text-sm line-clamp-2">
                                A brief description of the project and the value it delivered to the client.
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="md:hidden mt-8 text-center">
                <button className="px-6 py-3 rounded-full border border-brand/20 bg-white/50 hover:bg-brand hover:text-white transition-all inline-flex items-center gap-2 font-semibold">
                    View All Projects
                    <span className="material-symbols-outlined text-lg">
                        arrow_forward
                    </span>
                </button>
            </div>
        </section>
    );
}
