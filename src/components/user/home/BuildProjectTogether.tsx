import Image from "next/image";

export function BuildProjectTogether() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="glass-panel rounded-4xl p-8 md:p-12 relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -z-10"></div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left: Content */}
                    <div className="lg:w-1/2">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-sm font-bold mb-6">
                            Strategic Partnership
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-text-main dark:text-white mb-6 leading-tight">
                            Architecting Your <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand to-brand-blue">
                                Vision Into Reality
                            </span>
                        </h2>
                        <h3 className="text-xl font-semibold text-text-main dark:text-white mb-6">
                            Partner with our senior engineering team to transform your
                            strategic concepts into high-scale industrial assets.
                        </h3>
                        <p className="text-text-muted dark:text-gray-400 leading-relaxed mb-6">
                            At Symbosys Technologies, we view collaboration as a strategic
                            partnership. Our multidisciplinary engineering group is
                            dedicated to materializing your vision through an iterative,
                            high-fidelity development process. We work in sync with your
                            leadership to distill complex business objectives into
                            actionable technical frameworks, whether you are scaling an
                            existing system or engineering a new disruptive platform.
                        </p>
                        <p className="text-text-muted dark:text-gray-400 leading-relaxed mb-8">
                            Our veteran software architects, full-stack engineers, and
                            dedicated product managers are committed to delivering bespoke
                            digital ecosystems that transcend industrial standards. From
                            initial conceptualization to global deployment, we maintain a
                            transparent, feedback-driven lifecycle to ensure every technical
                            milestone aligns perfectly with your long-term commercial goals.
                        </p>
                        <button className="group px-8 py-4 rounded-full bg-brand text-white font-bold shadow-lg shadow-brand/20 hover:bg-brand-blue hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            Initialize Your Project
                            <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                                arrow_forward
                            </span>
                        </button>
                    </div>

                    {/* Right: Video & Workflow Image */}
                    <div className="lg:w-1/2 flex flex-col gap-8">
                        {/* Video Block */}
                        <div>
                            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 dark:border-white/10 group">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/DoNe5V0SbsE?si=featured-video"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <p className="text-center text-sm text-text-muted dark:text-gray-400 mt-4 italic">
                                Experience our engineering journey from concept to deployment
                            </p>
                        </div>

                        {/* Workflow Image Block */}
                        <div className="w-full relative mt-auto">
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-brand/5 to-transparent rounded-3xl"></div>
                            <div className="relative glass-card rounded-3xl p-6 overflow-hidden hover:scale-[1.01] transition-transform duration-500">
                                <h4 className="text-center text-lg font-bold text-text-main dark:text-white mb-4">
                                    Our Integrated Development Lifecycle
                                </h4>
                                <div className="relative w-full aspect-2/1">
                                    <Image
                                        src="/home/Project_Together.webp"
                                        alt="Project Development Lifecycle"
                                        fill
                                        className="object-contain mix-blend-multiply dark:mix-blend-screen dark:opacity-90"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
