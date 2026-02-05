import Link from "next/link";

export const metadata = {
    title: "NGO & Non-Profit Website Development - Symbosys Technologies",
    description: "Specialized digital platforms designed to communicate mission, goals, and impact of NGOs and non-profits, optimized for donor engagement and volunteer management.",
};

export default function NGONonProfitWebsitePage() {
    // Theme color: #10b981 (emerald-500) - gradient: from-emerald-500 to-green-400

    return (
        <div className="bg-surface text-text-main font-sans antialiased relative overflow-x-hidden min-h-screen">
            {/* Liquid Light Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-green-50/30"></div>
                <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-emerald-200/30 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-green-200/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-100/20 to-green-100/20 rounded-full blur-[150px]"></div>
            </div>

            <main className="relative z-10">
                {/* Hero Section */}
                <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-8 border border-emerald-200/50 shadow-lg shadow-emerald-100/50">
                            <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Non-Profit Solutions
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-main mb-8 leading-[1.1]">
                            NGO & Non-Profit Website
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-green-400">
                                by Symbosys
                            </span>
                        </h1>

                        <p className="text-text-muted text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12">
                            NGO and non-profit websites are specialized digital platforms designed by Symbosys to effectively communicate the mission, goals, and impact of non-governmental organizations (NGOs) and non-profits. These websites are crafted to inspire action, whether through donations, volunteer sign-ups, or raising awareness about a cause. Symbosys specializes in creating custom NGO and non-profit websites that are optimized for donor engagement, volunteer management, and transparency, ensuring your organization can connect with its audience and drive meaningful change.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-400 text-white font-bold rounded-2xl shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/30 hover:-translate-y-1 transition-all duration-300"
                            >
                                Start Your Project
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                            <Link
                                href="/products"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-text-main font-bold rounded-2xl border border-emerald-200 hover:border-emerald-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                View All Products
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto space-y-6">
                        {/* Planning and Mission */}
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/80 shadow-xl shadow-emerald-100/20 hover:shadow-2xl hover:shadow-emerald-200/30 hover:-translate-y-1 transition-all duration-500">
                            <div className="flex items-start gap-5">
                                <div className="size-14 shrink-0 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-2xl">volunteer_activism</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-text-main group-hover:text-emerald-600 transition-colors mb-4">Planning and Mission Alignment</h2>
                                    <p className="text-text-muted leading-relaxed"><strong className="text-text-main">Understanding Your Mission:</strong> Symbosys begins by understanding your organization&apos;s mission, goals, and target audience. This ensures the website reflects your values and effectively communicates your cause. Content Strategy Development: We collaborate with you to develop a content strategy that highlights your organization&apos;s work, impact stories, and key initiatives to engage and inform your audience.</p>
                                </div>
                            </div>
                        </div>

                        {/* CMS Selection */}
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/80 shadow-xl shadow-emerald-100/20 hover:shadow-2xl hover:shadow-emerald-200/30 hover:-translate-y-1 transition-all duration-500">
                            <div className="flex items-start gap-5">
                                <div className="size-14 shrink-0 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-2xl">layers</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-text-main group-hover:text-emerald-600 transition-colors mb-4">Choosing the Right Content Management System (CMS)</h2>
                                    <div className="space-y-3 text-text-muted leading-relaxed">
                                        <p><strong className="text-text-main">Platform Selection:</strong> Symbosys recommends the best content management system (CMS), such as WordPress or Joomla, that offers ease of use, scalability, and the ability to manage donations and volunteer sign-ups.</p>
                                        <p><strong className="text-text-main">Hosting Solutions:</strong> We guide you in selecting a reliable hosting provider that ensures your NGO or non-profit website is secure, fast, and capable of handling high volumes of traffic during campaigns or fundraising drives.</p>
                                        <p><strong className="text-text-main">Domain Name Registration:</strong> Symbosys assists in choosing and registering a memorable domain name, reflects your organization&apos;s mission, and is optimized for search engines.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Custom Design */}
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/80 shadow-xl shadow-emerald-100/20 hover:shadow-2xl hover:shadow-emerald-200/30 hover:-translate-y-1 transition-all duration-500">
                            <div className="flex items-start gap-5">
                                <div className="size-14 shrink-0 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-2xl">palette</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-text-main group-hover:text-emerald-600 transition-colors mb-4">Custom Website Design</h2>
                                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                                        <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100">
                                            <h3 className="font-bold text-text-main mb-2">Design Consultation</h3>
                                            <p className="text-text-muted text-sm">Our design team works with you to create a visually appealing and user-friendly website design that reflects your organization&apos;s identity and inspires trust and engagement.</p>
                                        </div>
                                        <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100">
                                            <h3 className="font-bold text-text-main mb-2">Responsive Design</h3>
                                            <p className="text-text-muted text-sm">Symbosys ensures your NGO or non-profit website is fully responsive, providing an optimal experience for users on all devices, including mobile and tablet.</p>
                                        </div>
                                        <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100">
                                            <h3 className="font-bold text-text-main mb-2">UX Optimization</h3>
                                            <p className="text-text-muted text-sm">We prioritize user experience (UX) design to create a seamless and intuitive navigation, making it easy for visitors to learn about your cause, donate, or get involved.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Creation */}
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/80 shadow-xl shadow-emerald-100/20 hover:shadow-2xl hover:shadow-emerald-200/30 hover:-translate-y-1 transition-all duration-500">
                            <div className="flex items-start gap-5">
                                <div className="size-14 shrink-0 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-2xl">article</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-text-main group-hover:text-emerald-600 transition-colors mb-4">Content Creation and Management</h2>
                                    <div className="space-y-4">
                                        <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100">
                                            <h3 className="font-bold text-text-main mb-2">Mission-Driven Content Development</h3>
                                            <p className="text-text-muted text-sm">Symbosys helps you create high-quality, compelling content that tells your organization&apos;s story, highlights your impact, and encourages action from visitors.</p>
                                        </div>
                                        <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100">
                                            <h3 className="font-bold text-text-main mb-2">Content Organization</h3>
                                            <p className="text-text-muted text-sm">We structure your content into clear sections such as About Us, Programs, Impact Stories, Get Involved, and Donate, ensuring that users can easily find the information they need.</p>
                                        </div>
                                        <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100">
                                            <h3 className="font-bold text-text-main mb-2">CMS Integration</h3>
                                            <p className="text-text-muted text-sm">Symbosys integrates a content management system that allows you to easily update and manage your content, ensuring your website stays current with your organization&apos;s activities and news.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SEO */}
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/80 shadow-xl shadow-emerald-100/20 hover:shadow-2xl hover:shadow-emerald-200/30 hover:-translate-y-1 transition-all duration-500">
                            <div className="flex items-start gap-5">
                                <div className="size-14 shrink-0 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-2xl">search</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-text-main group-hover:text-emerald-600 transition-colors mb-4">SEO and Content Optimization</h2>
                                    <p className="text-text-muted leading-relaxed"><strong className="text-text-main">SEO Strategy:</strong> Symbosys develops a comprehensive SEO strategy for your NGO or non-profit website, including keyword research, on-page optimization, and content marketing, to improve your search engine visibility and attract more supporters. <strong className="text-text-main">Content Optimization:</strong> We ensure all content is optimized with relevant keywords, meta tags, and descriptions, enhancing the visibility of your mission and programs in search engine results.</p>
                                </div>
                            </div>
                        </div>

                        {/* Legal & QA */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-xl shadow-emerald-100/20 hover:shadow-2xl hover:shadow-emerald-200/30 hover:-translate-y-1 transition-all duration-500">
                                <div className="size-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-2xl">gavel</span>
                                </div>
                                <h2 className="text-xl font-bold text-text-main group-hover:text-emerald-600 transition-colors mb-3">Legal Compliance</h2>
                                <p className="text-text-muted text-sm leading-relaxed">Symbosys creates essential legal pages such as Privacy Policy, Terms and Conditions, and Donation Refund Policy to ensure your NGO or non-profit website complies with relevant laws and regulations. GDPR Compliance: For organizations operating in the EU, we ensure your website complies with GDPR, safeguarding donor and volunteer data and meeting legal obligations.</p>
                            </div>

                            <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-xl shadow-emerald-100/20 hover:shadow-2xl hover:shadow-emerald-200/30 hover:-translate-y-1 transition-all duration-500">
                                <div className="size-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-2xl">verified</span>
                                </div>
                                <h2 className="text-xl font-bold text-text-main group-hover:text-emerald-600 transition-colors mb-3">Quality Assurance</h2>
                                <p className="text-text-muted text-sm leading-relaxed">Symbosys rigorously tests all features of your NGO or non-profit website, including donation systems, volunteer sign-up forms, and content management tools, to ensure everything works seamlessly.</p>
                            </div>
                        </div>

                        {/* Support */}
                        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/80 shadow-xl shadow-emerald-100/20 hover:shadow-2xl hover:shadow-emerald-200/30 hover:-translate-y-1 transition-all duration-500">
                            <div className="flex items-start gap-5">
                                <div className="size-14 shrink-0 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-2xl">support_agent</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-text-main group-hover:text-emerald-600 transition-colors mb-4">Post-Launch Support and Maintenance</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100">
                                            <h3 className="font-bold text-text-main mb-2">Ongoing Support</h3>
                                            <p className="text-text-muted text-sm">Symbosys offers continuous support to address any technical issues, update content, and ensure your NGO or non-profit website operates smoothly.</p>
                                        </div>
                                        <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100">
                                            <h3 className="font-bold text-text-main mb-2">Performance Analytics</h3>
                                            <p className="text-text-muted text-sm">We set up advanced analytics tools to track user behavior, donation performance, and overall website effectiveness, providing you with actionable insights for continuous improvement.</p>
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
                        <div className="relative bg-gradient-to-br from-emerald-500 to-green-400 rounded-3xl p-10 md:p-16 text-center text-white overflow-hidden">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                            <div className="relative">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make an Impact?</h2>
                                <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
                                    Let Symbosys create a powerful NGO or non-profit website that connects with donors and drives meaningful change.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
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
