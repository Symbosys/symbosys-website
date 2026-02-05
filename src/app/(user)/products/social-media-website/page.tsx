import Link from "next/link";

export const metadata = {
    title: "Social Media Website Development - Symbosys Technologies",
    description: "Interactive digital platforms to facilitate communication, content sharing, and community building.",
};

export default function SocialMediaWebsitePage() {
    return (
        <div className="bg-surface text-text-main font-sans antialiased relative overflow-x-hidden min-h-screen">
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-red-50/30"></div>
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-rose-200/30 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-200/30 rounded-full blur-[100px] animate-pulse"></div>
            </div>

            <main className="relative z-10">
                <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose-100 text-rose-700 text-sm font-semibold mb-8 border border-rose-200/50 shadow-lg shadow-rose-100/50">
                            <span className="size-2 rounded-full bg-rose-500 animate-pulse"></span>
                            Social Networking
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-main mb-8 leading-[1.1]">
                            Social Media Website
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-red-400">by Symbosys</span>
                        </h1>
                        <p className="text-text-muted text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12">
                            Social media websites are interactive digital platforms designed by Symbosys to facilitate communication, content sharing, and community building among users.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-500 to-red-400 text-white font-bold rounded-2xl shadow-xl shadow-rose-500/25 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                Start Your Project
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-xl shadow-rose-100/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                            <div className="size-14 rounded-2xl bg-gradient-to-br from-rose-500 to-red-400 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-2xl">strategy</span>
                            </div>
                            <h2 className="text-2xl font-bold text-text-main group-hover:text-rose-600 transition-colors mb-4">Planning & Community Strategy</h2>
                            <p className="text-text-muted text-sm leading-relaxed">Symbosys begins by understanding your vision for the social media platform, including your target audience and community building goals. We develop strategies that encourage user participation and content creation.</p>
                        </div>
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-xl shadow-rose-100/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                            <div className="size-14 rounded-2xl bg-gradient-to-br from-rose-500 to-red-400 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-2xl">code</span>
                            </div>
                            <h2 className="text-2xl font-bold text-text-main group-hover:text-rose-600 transition-colors mb-4">Platform & Technology Stack</h2>
                            <p className="text-text-muted text-sm leading-relaxed">We recommend the best technology stack including backend framework, database management, and front-end technologies that support scalability, security, and real-time interactions.</p>
                        </div>
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-xl shadow-rose-100/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                            <div className="size-14 rounded-2xl bg-gradient-to-br from-rose-500 to-red-400 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-2xl">palette</span>
                            </div>
                            <h2 className="text-2xl font-bold text-text-main group-hover:text-rose-600 transition-colors mb-4">Custom Website Design</h2>
                            <p className="text-text-muted text-sm leading-relaxed">Our design team creates visually appealing, user-friendly website designs that reflect your brand&apos;s identity and enhance user engagement across all devices.</p>
                        </div>
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-xl shadow-rose-100/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                            <div className="size-14 rounded-2xl bg-gradient-to-br from-rose-500 to-red-400 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-2xl">person</span>
                            </div>
                            <h2 className="text-2xl font-bold text-text-main group-hover:text-rose-600 transition-colors mb-4">User Profile & Content</h2>
                            <p className="text-text-muted text-sm leading-relaxed">Symbosys designs user-friendly profile creation tools allowing users to personalize profiles, manage privacy, and share various types of content including text, images, videos, and links.</p>
                        </div>
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-xl shadow-rose-100/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                            <div className="size-14 rounded-2xl bg-gradient-to-br from-rose-500 to-red-400 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-2xl">group</span>
                            </div>
                            <h2 className="text-2xl font-bold text-text-main group-hover:text-rose-600 transition-colors mb-4">Social Networking Features</h2>
                            <p className="text-text-muted text-sm leading-relaxed">We integrate friend and follower systems, direct messaging, group chats, and comment systems that facilitate communication and strengthen community bonds.</p>
                        </div>
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-xl shadow-rose-100/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                            <div className="size-14 rounded-2xl bg-gradient-to-br from-rose-500 to-red-400 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                            </div>
                            <h2 className="text-2xl font-bold text-text-main group-hover:text-rose-600 transition-colors mb-4">Launch & Support</h2>
                            <p className="text-text-muted text-sm leading-relaxed">Comprehensive pre-launch review, deployment to live server, and continuous support with performance analysis for ongoing improvement.</p>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative bg-gradient-to-br from-rose-500 to-red-400 rounded-3xl p-10 md:p-16 text-center text-white overflow-hidden">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="relative">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Community?</h2>
                                <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">Let Symbosys create a powerful social platform.</p>
                                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rose-600 font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
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
