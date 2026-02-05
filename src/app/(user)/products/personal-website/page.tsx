import Link from "next/link";

export const metadata = {
    title: "Personal Website Development - Symbosys Technologies",
    description: "Customized digital platforms to showcase your personal brand, skills, achievements, and portfolio.",
};

export default function PersonalWebsitePage() {
    return (
        <div className="bg-surface text-text-main font-sans antialiased relative overflow-x-hidden min-h-screen">
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-cyan-50/30"></div>
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-teal-200/30 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-200/30 rounded-full blur-[100px] animate-pulse"></div>
            </div>

            <main className="relative z-10">
                <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold mb-8 border border-teal-200/50 shadow-lg shadow-teal-100/50">
                            <span className="size-2 rounded-full bg-teal-500 animate-pulse"></span>
                            Personal Branding
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-main mb-8 leading-[1.1]">
                            Personal Website
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-400">by Symbosys</span>
                        </h1>
                        <p className="text-text-muted text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12">
                            Personal websites are customized digital platforms designed by Symbosys to showcase an individual&apos;s personal brand, skills, achievements, and portfolio.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-400 text-white font-bold rounded-2xl shadow-xl shadow-teal-500/25 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                Start Your Project
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-xl shadow-teal-100/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                            <div className="size-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-2xl">person</span>
                            </div>
                            <h2 className="text-2xl font-bold text-text-main group-hover:text-teal-600 transition-colors mb-4">Personal Branding Strategy</h2>
                            <p className="text-text-muted text-sm leading-relaxed">Symbosys begins by understanding your personal objectives, target audience, and key elements you want to highlight. We develop a personal branding strategy that communicates your strengths and achievements.</p>
                        </div>
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-xl shadow-teal-100/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                            <div className="size-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-2xl">dns</span>
                            </div>
                            <h2 className="text-2xl font-bold text-text-main group-hover:text-teal-600 transition-colors mb-4">Platform & Technology</h2>
                            <p className="text-text-muted text-sm leading-relaxed">We recommend the most suitable CMS like WordPress, Joomla, or Drupal based on your needs. Symbosys helps select reliable hosting for performance and security.</p>
                        </div>
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-xl shadow-teal-100/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                            <div className="size-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-2xl">palette</span>
                            </div>
                            <h2 className="text-2xl font-bold text-text-main group-hover:text-teal-600 transition-colors mb-4">Custom Website Design</h2>
                            <p className="text-text-muted text-sm leading-relaxed">We create visually appealing and user-friendly designs that reflect your brand identity. Symbosys ensures your website is fully responsive across all devices with seamless navigation.</p>
                        </div>
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-xl shadow-teal-100/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                            <div className="size-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-2xl">share</span>
                            </div>
                            <h2 className="text-2xl font-bold text-text-main group-hover:text-teal-600 transition-colors mb-4">Online Identity & Networking</h2>
                            <p className="text-text-muted text-sm leading-relaxed">We implement contact forms, call-to-action buttons, social media integration, testimonials, and blog features that encourage visitors to connect and engage with you.</p>
                        </div>
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-xl shadow-teal-100/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                            <div className="size-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-2xl">search</span>
                            </div>
                            <h2 className="text-2xl font-bold text-text-main group-hover:text-teal-600 transition-colors mb-4">SEO and Content</h2>
                            <p className="text-text-muted text-sm leading-relaxed">Symbosys develops comprehensive SEO strategy including keyword research and on-page optimization. All content is optimized for better search engine visibility.</p>
                        </div>
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-xl shadow-teal-100/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                            <div className="size-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                            </div>
                            <h2 className="text-2xl font-bold text-text-main group-hover:text-teal-600 transition-colors mb-4">Launch & Support</h2>
                            <p className="text-text-muted text-sm leading-relaxed">Comprehensive pre-launch review, deployment to live server, and continuous support with performance analytics for ongoing improvement.</p>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative bg-gradient-to-br from-teal-500 to-cyan-400 rounded-3xl p-10 md:p-16 text-center text-white overflow-hidden">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="relative">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Brand?</h2>
                                <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">Let Symbosys create a stunning personal website.</p>
                                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                    Get Free Quote
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
