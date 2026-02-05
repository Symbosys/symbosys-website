import Link from "next/link";

export const metadata = {
    title: "Blogs & News Website Development - Symbosys Technologies",
    description: "Dynamic digital platforms designed to publish and disseminate timely content, articles, and news updates with CMS, SEO optimization, and responsive design.",
};

export default function BlogsNewsWebsitePage() {
    // Theme color: #d946ef (fuchsia-500) - gradient: from-fuchsia-500 to-pink-500

    return (
        <div className="bg-surface text-text-main font-sans antialiased relative overflow-x-hidden min-h-screen">
            {/* Liquid Light Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-50 via-white to-pink-50/30"></div>
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-200/30 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-pink-200/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-fuchsia-100/20 to-pink-100/20 rounded-full blur-[150px]"></div>
            </div>

            <main className="relative z-10">
                {/* Hero Section */}
                <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-fuchsia-100 text-fuchsia-700 text-sm font-semibold mb-8 border border-fuchsia-200/50 shadow-lg shadow-fuchsia-100/50">
                            <span className="size-2 rounded-full bg-fuchsia-500 animate-pulse"></span>
                            Content Publishing
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-main mb-8 leading-[1.1]">
                            Blogs & News Website
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-pink-500">
                                by Symbosys
                            </span>
                        </h1>

                        <p className="text-text-muted text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12">
                            Blogs and news websites are dynamic digital platforms designed by Symbosys to publish and disseminate timely content, articles, and news updates. These websites are tailored to enhance reader engagement with features such as CMS, SEO optimization, and responsive design.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white font-bold rounded-2xl shadow-xl shadow-fuchsia-500/25 hover:shadow-2xl hover:shadow-fuchsia-500/30 hover:-translate-y-1 transition-all duration-300"
                            >
                                Start Your Project
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                            <Link
                                href="/products"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-text-main font-bold rounded-2xl border border-fuchsia-200 hover:border-fuchsia-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                View All Products
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Content Grid */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                        {/* Planning and Strategy */}
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-xl shadow-fuchsia-100/20 hover:shadow-2xl hover:shadow-fuchsia-200/30 hover:-translate-y-1 transition-all duration-500">
                            <div className="size-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-2xl">strategy</span>
                            </div>
                            <h2 className="text-2xl font-bold text-text-main group-hover:text-fuchsia-600 transition-colors mb-4">Planning and Strategy</h2>
                            <div className="space-y-3 text-text-muted text-sm leading-relaxed">
                                <p><strong className="text-text-main">Understanding Your Content Needs:</strong> Symbosys begins by understanding your goals for the blog or news website, including target audience, content type, and frequency of updates.</p>
                                <p><strong className="text-text-main">Content Strategy Development:</strong> We collaborate to create a comprehensive content strategy that drives traffic and engages readers.</p>
                                <p><strong className="text-text-main">Budget Planning:</strong> Symbosys helps establish a budget covering all aspects of website development, from setup to ongoing content management.</p>
                            </div>
                        </div>

                        {/* CMS and Hosting */}
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-xl shadow-fuchsia-100/20 hover:shadow-2xl hover:shadow-fuchsia-200/30 hover:-translate-y-1 transition-all duration-500">
                            <div className="size-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-2xl">dns</span>
                            </div>
                            <h2 className="text-2xl font-bold text-text-main group-hover:text-fuchsia-600 transition-colors mb-4">Choosing the Right CMS and Hosting</h2>
                            <div className="space-y-3 text-text-muted text-sm leading-relaxed">
                                <p><strong className="text-text-main">Platform Selection:</strong> We recommend the most suitable CMS like WordPress, Joomla, or Drupal based on your needs.</p>
                                <p><strong className="text-text-main">Hosting Solutions:</strong> Symbosys helps in selecting a reliable hosting provider that ensures performance and security during peak traffic times.</p>
                                <p><strong className="text-text-main">Domain Name and Setup:</strong> We assist in choosing a domain name and configure hosting for optimal performance.</p>
                            </div>
                        </div>

                        {/* Custom Website Design */}
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-xl shadow-fuchsia-100/20 hover:shadow-2xl hover:shadow-fuchsia-200/30 hover:-translate-y-1 transition-all duration-500">
                            <div className="size-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-2xl">palette</span>
                            </div>
                            <h2 className="text-2xl font-bold text-text-main group-hover:text-fuchsia-600 transition-colors mb-4">Custom Website Design</h2>
                            <div className="space-y-3 text-text-muted text-sm leading-relaxed">
                                <p><strong className="text-text-main">Design Consultation:</strong> We work to create a visually appealing and user-friendly design that reflects your brand identity.</p>
                                <p><strong className="text-text-main">Responsive Design:</strong> Symbosys ensures your website is fully responsive across all devices.</p>
                                <p><strong className="text-text-main">UX Optimization:</strong> Our UX experts design seamless navigation for readers to explore articles easily.</p>
                            </div>
                        </div>

                        {/* SEO and Content */}
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-xl shadow-fuchsia-100/20 hover:shadow-2xl hover:shadow-fuchsia-200/30 hover:-translate-y-1 transition-all duration-500">
                            <div className="size-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-2xl">search</span>
                            </div>
                            <h2 className="text-2xl font-bold text-text-main group-hover:text-fuchsia-600 transition-colors mb-4">SEO and Content Optimization</h2>
                            <div className="space-y-3 text-text-muted text-sm leading-relaxed">
                                <p><strong className="text-text-main">SEO Strategy:</strong> Symbosys develops a comprehensive SEO strategy including keyword research and on-page optimization.</p>
                                <p><strong className="text-text-main">Content Optimization:</strong> All posts and articles are optimized for better search engine visibility.</p>
                            </div>
                        </div>

                        {/* Website Launch */}
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-xl shadow-fuchsia-100/20 hover:shadow-2xl hover:shadow-fuchsia-200/30 hover:-translate-y-1 transition-all duration-500 md:col-span-2">
                            <div className="size-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                            </div>
                            <h2 className="text-2xl font-bold text-text-main group-hover:text-fuchsia-600 transition-colors mb-4">Website Launch and Post-Launch Support</h2>
                            <div className="grid md:grid-cols-3 gap-4 text-text-muted text-sm leading-relaxed">
                                <div className="bg-fuchsia-50/50 rounded-2xl p-5 border border-fuchsia-100">
                                    <h3 className="font-bold text-text-main mb-2">Pre-Launch Review</h3>
                                    <p>A comprehensive review to ensure the website is fully optimized before the launch.</p>
                                </div>
                                <div className="bg-fuchsia-50/50 rounded-2xl p-5 border border-fuchsia-100">
                                    <h3 className="font-bold text-text-main mb-2">Go Live</h3>
                                    <p>We launch the website to the live server and ensure everything runs smoothly.</p>
                                </div>
                                <div className="bg-fuchsia-50/50 rounded-2xl p-5 border border-fuchsia-100">
                                    <h3 className="font-bold text-text-main mb-2">Maintenance & Support</h3>
                                    <p>Post-launch, Symbosys offers continued support, maintenance, and updates.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-3xl p-10 md:p-16 text-center text-white overflow-hidden">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                            <div className="relative">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Publishing?</h2>
                                <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
                                    Let Symbosys create a stunning blog or news platform that engages readers and drives traffic.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-fuchsia-600 font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                                >
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
