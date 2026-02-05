import Link from "next/link";

export const metadata = {
    title: "Informative Website Development - Symbosys Technologies",
    description: "Create custom informative websites optimized for SEO, mobile-friendly, and designed to effectively communicate your brand message.",
};

export default function InformativeWebsitePage() {
    // Theme color: #7c3aed (violet-600) - gradient: from-violet-600 to-purple-500

    return (
        <div className="bg-surface text-text-main font-sans antialiased relative overflow-x-hidden min-h-screen">
            {/* Liquid Light Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-purple-50/30"></div>
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-200/30 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-100/20 to-purple-100/20 rounded-full blur-[150px]"></div>
            </div>

            <main className="relative z-10">
                {/* Hero Section */}
                <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold mb-8 border border-violet-200/50 shadow-lg shadow-violet-100/50">
                            <span className="size-2 rounded-full bg-violet-500 animate-pulse"></span>
                            Informative Solutions
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-main mb-8 leading-[1.1]">
                            Informative Website
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-500">
                                by Symbosys
                            </span>
                        </h1>

                        <p className="text-text-muted text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12">
                            An informative website is a digital platform designed by Symbosys to provide users with valuable content, resources, and information on specific topics or industries. These websites are tailored to enhance user experience by delivering clear, well-organized, and easily accessible information. Symbosys specializes in creating custom informative websites that are optimized for SEO, mobile-friendly, and designed to effectively communicate your brand message.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-violet-600 to-purple-500 text-white font-bold rounded-2xl shadow-xl shadow-violet-500/25 hover:shadow-2xl hover:shadow-violet-500/30 hover:-translate-y-1 transition-all duration-300"
                            >
                                Start Your Project
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                            <Link
                                href="/products"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-text-main font-bold rounded-2xl border border-violet-200 hover:border-violet-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                View All Products
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto space-y-6">
                        {/* Understanding Your Objectives */}
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/80 shadow-xl shadow-violet-100/20 hover:shadow-2xl hover:shadow-violet-200/30 hover:-translate-y-1 transition-all duration-500">
                            <div className="flex items-start gap-5 mb-6">
                                <div className="size-14 shrink-0 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-2xl">lightbulb</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-text-main group-hover:text-violet-600 transition-colors">Understanding Your Objectives</h2>
                                    <p className="text-text-muted mt-3 leading-relaxed">Symbosys begins by understanding your goals for the informative website, whether it&apos;s to educate visitors, promote services, or share industry knowledge. We analyze your target audience to ensure the content and design are aligned with their needs.</p>
                                </div>
                            </div>
                        </div>

                        {/* Content Strategy */}
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/80 shadow-xl shadow-violet-100/20 hover:shadow-2xl hover:shadow-violet-200/30 hover:-translate-y-1 transition-all duration-500">
                            <div className="flex items-start gap-5 mb-6">
                                <div className="size-14 shrink-0 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-2xl">edit_note</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-text-main group-hover:text-violet-600 transition-colors">Content Strategy Development</h2>
                                    <p className="text-text-muted mt-3 leading-relaxed">We collaborate with you to develop a comprehensive content strategy, determining the types of content (articles, blogs, videos, etc.) that will be featured on your site.</p>
                                </div>
                            </div>
                        </div>

                        {/* Budget Planning */}
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/80 shadow-xl shadow-violet-100/20 hover:shadow-2xl hover:shadow-violet-200/30 hover:-translate-y-1 transition-all duration-500">
                            <div className="flex items-start gap-5 mb-6">
                                <div className="size-14 shrink-0 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-text-main group-hover:text-violet-600 transition-colors">Budget Planning</h2>
                                    <p className="text-text-muted mt-3 leading-relaxed">Symbosys helps you outline a budget that includes the development, design, content creation, and ongoing maintenance of your informative website.</p>
                                </div>
                            </div>
                        </div>

                        {/* CMS Selection */}
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/80 shadow-xl shadow-violet-100/20 hover:shadow-2xl hover:shadow-violet-200/30 hover:-translate-y-1 transition-all duration-500">
                            <div className="flex items-start gap-5">
                                <div className="size-14 shrink-0 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-2xl">layers</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-text-main group-hover:text-violet-600 transition-colors mb-4">Choosing the Right Content Management System (CMS)</h2>
                                    <div className="space-y-4">
                                        <div className="bg-violet-50/50 rounded-2xl p-5 border border-violet-100">
                                            <h3 className="font-bold text-text-main mb-2">Platform Selection</h3>
                                            <p className="text-text-muted text-sm leading-relaxed">Based on your needs, Symbosys recommends the best content management system (CMS), such as WordPress, Joomla, or Drupal, that offers ease of use, scalability, and SEO capabilities.</p>
                                        </div>
                                        <div className="bg-violet-50/50 rounded-2xl p-5 border border-violet-100">
                                            <h3 className="font-bold text-text-main mb-2">Hosting Solutions</h3>
                                            <p className="text-text-muted text-sm leading-relaxed">We guide you in selecting a reliable hosting provider that ensures your informative website is fast, secure, and capable of handling high-traffic volumes.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Domain & Hosting */}
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/80 shadow-xl shadow-violet-100/20 hover:shadow-2xl hover:shadow-violet-200/30 hover:-translate-y-1 transition-all duration-500">
                            <div className="flex items-start gap-5">
                                <div className="size-14 shrink-0 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-2xl">dns</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-text-main group-hover:text-violet-600 transition-colors mb-4">Domain Name and Hosting Setup</h2>
                                    <div className="space-y-4">
                                        <div className="bg-violet-50/50 rounded-2xl p-5 border border-violet-100">
                                            <h3 className="font-bold text-text-main mb-2">Domain Name Registration</h3>
                                            <p className="text-text-muted text-sm leading-relaxed">Symbosys assists in choosing and registering a domain name that is memorable, brand-aligned, and optimized for search engines.</p>
                                        </div>
                                        <div className="bg-violet-50/50 rounded-2xl p-5 border border-violet-100">
                                            <h3 className="font-bold text-text-main mb-2">Hosting Configuration</h3>
                                            <p className="text-text-muted text-sm leading-relaxed">Symbosys assists in choosing and registering a domain name that is memorable, brand-aligned, and optimized for search engines.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Custom Design */}
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/80 shadow-xl shadow-violet-100/20 hover:shadow-2xl hover:shadow-violet-200/30 hover:-translate-y-1 transition-all duration-500">
                            <div className="flex items-start gap-5">
                                <div className="size-14 shrink-0 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-2xl">palette</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-text-main group-hover:text-violet-600 transition-colors mb-4">Custom Website Design</h2>
                                    <div className="space-y-4">
                                        <div className="bg-violet-50/50 rounded-2xl p-5 border border-violet-100">
                                            <h3 className="font-bold text-text-main mb-2">Design Consultation</h3>
                                            <p className="text-text-muted text-sm leading-relaxed">Our expert design team creates a visually appealing and user-friendly website design that reflects your brand and enhances the user experience.</p>
                                        </div>
                                        <div className="bg-violet-50/50 rounded-2xl p-5 border border-violet-100">
                                            <h3 className="font-bold text-text-main mb-2">Responsive Design</h3>
                                            <p className="text-text-muted text-sm leading-relaxed">Symbosys ensures your informative website is fully responsive, providing an optimal experience on all devices, including mobile and tablet.</p>
                                        </div>
                                        <div className="bg-violet-50/50 rounded-2xl p-5 border border-violet-100">
                                            <h3 className="font-bold text-text-main mb-2">UX Optimization</h3>
                                            <p className="text-text-muted text-sm leading-relaxed">We prioritize user experience (UX) design to create a seamless and intuitive browsing experience, making it easy for visitors to find and engage with your content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Creation */}
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/80 shadow-xl shadow-violet-100/20 hover:shadow-2xl hover:shadow-violet-200/30 hover:-translate-y-1 transition-all duration-500">
                            <div className="flex items-start gap-5">
                                <div className="size-14 shrink-0 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-2xl">article</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-text-main group-hover:text-violet-600 transition-colors mb-4">Content Creation and Management</h2>
                                    <div className="space-y-4">
                                        <div className="bg-violet-50/50 rounded-2xl p-5 border border-violet-100">
                                            <h3 className="font-bold text-text-main mb-2">Content Development</h3>
                                            <p className="text-text-muted text-sm leading-relaxed">Symbosys helps you create high-quality, SEO-optimized content that informs, educates, and engages your audience. This includes articles, blogs, videos, infographics, and other media types. Content Organization: We structure your content into clear categories and sections, improving navigation and ensuring that users can easily find the information they need.</p>
                                        </div>
                                        <div className="bg-violet-50/50 rounded-2xl p-5 border border-violet-100">
                                            <h3 className="font-bold text-text-main mb-2">CMS Integration</h3>
                                            <p className="text-text-muted text-sm leading-relaxed">Symbosys integrates a content management system that allows you to easily update and manage your content, ensuring your website remains fresh and relevant.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SEO */}
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/80 shadow-xl shadow-violet-100/20 hover:shadow-2xl hover:shadow-violet-200/30 hover:-translate-y-1 transition-all duration-500">
                            <div className="flex items-start gap-5">
                                <div className="size-14 shrink-0 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-2xl">search</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-text-main group-hover:text-violet-600 transition-colors mb-4">SEO and Content Optimization</h2>
                                    <div className="space-y-4">
                                        <div className="bg-violet-50/50 rounded-2xl p-5 border border-violet-100">
                                            <h3 className="font-bold text-text-main mb-2">SEO Strategy</h3>
                                            <p className="text-text-muted text-sm leading-relaxed">Symbosys develops a comprehensive SEO strategy for your informative website, including keyword research, on-page optimization, and content marketing, to improve your search engine rankings and drive organic traffic.</p>
                                        </div>
                                        <div className="bg-violet-50/50 rounded-2xl p-5 border border-violet-100">
                                            <h3 className="font-bold text-text-main mb-2">Content Optimization</h3>
                                            <p className="text-text-muted text-sm leading-relaxed">We ensure all content is optimized with relevant keywords, meta tags, and descriptions, enhancing the visibility of your website in search engine results.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Legal Compliance */}
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/80 shadow-xl shadow-violet-100/20 hover:shadow-2xl hover:shadow-violet-200/30 hover:-translate-y-1 transition-all duration-500">
                            <div className="flex items-start gap-5">
                                <div className="size-14 shrink-0 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-2xl">gavel</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-text-main group-hover:text-violet-600 transition-colors mb-4">Legal Compliance and Documentation</h2>
                                    <div className="space-y-4">
                                        <div className="bg-violet-50/50 rounded-2xl p-5 border border-violet-100">
                                            <h3 className="font-bold text-text-main mb-2">Legal Pages Setup</h3>
                                            <p className="text-text-muted text-sm leading-relaxed">Symbosys creates essential legal pages such as Privacy Policy and Terms and Conditions to ensure your informative website complies with relevant laws and regulations.</p>
                                        </div>
                                        <div className="bg-violet-50/50 rounded-2xl p-5 border border-violet-100">
                                            <h3 className="font-bold text-text-main mb-2">GDPR Compliance</h3>
                                            <p className="text-text-muted text-sm leading-relaxed">For businesses operating in the EU, we ensure your website complies with GDPR, safeguarding user data and meeting legal obligations.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quality Assurance */}
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/80 shadow-xl shadow-violet-100/20 hover:shadow-2xl hover:shadow-violet-200/30 hover:-translate-y-1 transition-all duration-500">
                            <div className="flex items-start gap-5">
                                <div className="size-14 shrink-0 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-2xl">verified</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-text-main group-hover:text-violet-600 transition-colors mb-4">Quality Assurance and Testing</h2>
                                    <div className="space-y-4">
                                        <div className="bg-violet-50/50 rounded-2xl p-5 border border-violet-100">
                                            <h3 className="font-bold text-text-main mb-2">Functionality Testing</h3>
                                            <p className="text-text-muted text-sm leading-relaxed">Symbosys rigorously tests all features of your informative website to ensure everything works seamlessly, including navigation, forms, and content management tools.</p>
                                        </div>
                                        <div className="bg-violet-50/50 rounded-2xl p-5 border border-violet-100">
                                            <h3 className="font-bold text-text-main mb-2">User Experience Testing</h3>
                                            <p className="text-text-muted text-sm leading-relaxed">We conduct usability tests to gather feedback and identify any issues, ensuring your visitors have a smooth and enjoyable browsing experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Website Launch */}
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/80 shadow-xl shadow-violet-100/20 hover:shadow-2xl hover:shadow-violet-200/30 hover:-translate-y-1 transition-all duration-500">
                            <div className="flex items-start gap-5">
                                <div className="size-14 shrink-0 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-text-main group-hover:text-violet-600 transition-colors mb-4">Website Launch</h2>
                                    <div className="space-y-4">
                                        <div className="bg-violet-50/50 rounded-2xl p-5 border border-violet-100">
                                            <h3 className="font-bold text-text-main mb-2">Pre-Launch Review</h3>
                                            <p className="text-text-muted text-sm leading-relaxed">Symbosys conducts a comprehensive pre-launch review to ensure your informative website is fully optimized and ready for public launch.</p>
                                        </div>
                                        <div className="bg-violet-50/50 rounded-2xl p-5 border border-violet-100">
                                            <h3 className="font-bold text-text-main mb-2">Go Live</h3>
                                            <p className="text-text-muted text-sm leading-relaxed">We deploy your informative website to the live server, making it accessible to visitors worldwide, and closely monitor its performance during the initial launch phase.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative bg-gradient-to-br from-violet-600 to-purple-500 rounded-3xl p-10 md:p-16 text-center text-white overflow-hidden">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                            <div className="relative">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Share Your Knowledge?</h2>
                                <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
                                    Let Symbosys create a stunning informative website that educates, engages, and converts your visitors.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-600 font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                                    >
                                        Get Free Quote
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
