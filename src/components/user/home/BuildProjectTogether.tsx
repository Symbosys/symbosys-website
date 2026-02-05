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
                            Collaboration
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-6 leading-tight">
                            Let&apos;s Build Your <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand to-brand-blue">
                                Project Together
                            </span>
                        </h2>
                        <h3 className="text-xl font-semibold text-text-main mb-6">
                            Collaborate with our team of experts to bring your vision to life.
                        </h3>
                        <p className="text-text-muted leading-relaxed mb-6">
                            At Symbosys Technologies, we believe in the power of
                            collaboration. Our team of experts is dedicated to bringing your
                            vision to life by working closely with you to understand your
                            unique needs and business objectives. Whether you have a clear
                            vision or need guidance in shaping your ideas, we&apos;re here to
                            help.
                        </p>
                        <p className="text-text-muted leading-relaxed mb-8">
                            Our experienced software developers, website developers, graphic
                            designers and project managers are committed to delivering custom
                            solutions that not only meet but exceed your expectations. From
                            ideation to development and deployment, we&apos;ll be with you
                            every step of the way, ensuring your project&apos;s success. We
                            value your input and will continuously incorporate your feedback
                            to ensure the final product aligns perfectly with your goals.
                        </p>
                        <button className="group px-8 py-4 rounded-full bg-brand text-white font-bold shadow-lg shadow-brand/20 hover:bg-brand-blue hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            Start Your Project
                            <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                                arrow_forward
                            </span>
                        </button>
                    </div>

                    {/* Right: Video & Workflow Image */}
                    <div className="lg:w-1/2 flex flex-col gap-8">
                        {/* Video Block */}
                        <div>
                            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 group">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/DoNe5V0SbsE?si=featured-video"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <p className="text-center text-sm text-text-muted mt-4 italic">
                                Watch how we bring ideas to reality
                            </p>
                        </div>

                        {/* Workflow Image Block */}
                        <div className="w-full relative mt-auto">
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-brand/5 to-transparent rounded-3xl"></div>
                            <div className="relative glass-card rounded-3xl p-6 overflow-hidden hover:scale-[1.01] transition-transform duration-500">
                                <h4 className="text-center text-lg font-bold text-text-main mb-4">
                                    Our Collaborative Workflow
                                </h4>
                                <div className="relative w-full aspect-2/1">
                                    <Image
                                        src="/home/Project_Together.webp"
                                        alt="Project Development Lifecycle"
                                        fill
                                        className="object-contain"
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
