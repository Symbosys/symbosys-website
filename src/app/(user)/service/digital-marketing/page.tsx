import Image from "next/image";

export const metadata = {
    title: "Digital Marketing - Symbosys Technologies",
    description:
        "Symbosys offers comprehensive digital marketing services to amplify your online presence and expand your reach to potential customers in Ranchi, Jharkhand.",
};

export default function DigitalMarketingPage() {
    const services = [
        { icon: "search", title: "Search Engine Optimization", desc: "Optimize your website to rank higher on search engines" },
        { icon: "ads_click", title: "Pay-Per-Click Advertising", desc: "Drive targeted traffic with strategic PPC campaigns" },
        { icon: "share", title: "Social Media Marketing", desc: "Build your brand presence across social platforms" },
        { icon: "mail", title: "Email Marketing", desc: "Nurture leads with personalized email campaigns" },
        { icon: "edit_note", title: "Content Marketing", desc: "Create valuable content that attracts and converts" },
        { icon: "analytics", title: "Analytics & Reporting", desc: "Track and measure your marketing performance" }
    ];

    return (
        <div className="bg-surface text-text-main font-sans antialiased selection:bg-brand/20 selection:text-brand relative overflow-x-hidden min-h-screen dark:text-white transition-colors duration-300">
            {/* Liquid Light Immersive Background Canvas */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[15%] -left-[10%] w-[70vw] h-[70vw] bg-linear-to-br from-orange-400/15 via-red-400/10 to-pink-400/15 rounded-full blur-3xl light-orb" />
                <div className="absolute -bottom-[15%] -right-[10%] w-[60vw] h-[60vw] bg-linear-to-tl from-pink-400/12 via-orange-400/10 to-red-400/15 rounded-full blur-3xl light-orb-slow" />
                <div className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] bg-linear-to-r from-red-400/10 via-transparent to-orange-400/10 rounded-full blur-3xl ripple-light" />
                <div className="absolute inset-0 aurora-bg opacity-30" />
                <div className="absolute inset-0 bg-white/30 dark:bg-black/60 backdrop-blur-xl" />
            </div>

            <main className="relative z-10 pt-32 pb-20">
                {/* Hero Section with Background Image */}
                <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="relative overflow-hidden rounded-3xl min-h-[400px]">
                        {/* Background Image */}
                        <Image
                            src="/services/digital_marketing.webp"
                            alt="Digital Marketing"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-r from-orange-900/90 via-red-900/80 to-transparent" />

                        {/* Content */}
                        <div className="relative z-10 p-8 md:p-16 flex flex-col justify-center min-h-[400px]">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 w-fit mb-6">
                                <span className="material-symbols-outlined text-white">campaign</span>
                                <span className="text-sm font-semibold text-white uppercase tracking-widest">Digital Marketing</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-liquid-glow max-w-3xl">
                                Social Marketing & Digital Marketing
                            </h1>
                            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                                Amplify your online presence and expand your reach to potential customers in Ranchi, Jharkhand with our dynamic digital and social media marketing solutions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content Section */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Introduction */}
                    <div className="glass-card rounded-3xl p-8 md:p-12 mb-16">
                        <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed mb-6">
                            Are you seeking to amplify your online presence and expand your reach to potential customers in Ranchi, Jharkhand? Look no further than the dynamic realm of digital and social media marketing! In today's rapidly evolving world, establishing a robust online presence is indispensable for businesses striving to maintain competitiveness.
                        </p>
                        <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed">
                            From the intricacies of SEO to the efficacy of paid promotions, we delve into the strategies of digital marketing that can propel your business growth in Ranchi. Let's embark on a journey to unravel the myriad possibilities that lie ahead!
                        </p>
                    </div>

                    {/* Digital Marketing Section */}
                    <div className="glass-card rounded-3xl p-8 md:p-12 mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-6 text-center dark:text-white">
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-red-500 to-pink-500">Digital Marketing</span> - The Cornerstone of Success
                        </h2>
                        <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto mb-6">
                            Digital marketing serves as the cornerstone for unlocking success in the digital era. With a strategic approach, businesses can forge connections with their target audience and drive conversions to unprecedented heights. From the intricacies of search engine optimization (SEO) to the dynamics of pay-per-click (PPC) advertising, there exists a plethora of avenues to elevate your brand's visibility online.
                        </p>
                        <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
                            In Ranchi, Jharkhand, harnessing the potential of digital marketing can catapult your business to unprecedented heights. By optimizing your website to align with search engine algorithms, you can augment visibility and attract a surge of organic traffic. Engaging in meticulously crafted paid advertising endeavours enables you to extend your reach to a broader audience and effectively generate leads.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-8 text-center">
                            Our <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-red-500 to-pink-500">Marketing Services</span>
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <div key={index} className="group relative">
                                    <div className="absolute -inset-2 bg-linear-to-r from-orange-500/20 via-red-500/15 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative glass-card rounded-2xl p-6 h-full">
                                        <div className="w-14 h-14 rounded-xl bg-linear-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-2xl text-white">{service.icon}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-text-main mb-3 dark:text-white">{service.title}</h3>
                                        <p className="text-text-muted text-sm leading-relaxed dark:text-gray-300">{service.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Digital Marketing */}
                    <div className="relative overflow-hidden rounded-3xl mb-16">
                        <div className="absolute inset-0 bg-linear-to-br from-orange-600 via-red-600 to-pink-600">
                            <div className="absolute inset-0 aurora-bg opacity-40" />
                            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl light-orb" />
                            <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-orange-300/20 blur-3xl light-orb-slow" />
                        </div>
                        <div className="relative z-10 p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center text-liquid-glow">
                                Why Digital Marketing Matters
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { icon: "public", title: "Global Reach", desc: "Connect with customers worldwide" },
                                    { icon: "target", title: "Targeted Audience", desc: "Reach the right people at the right time" },
                                    { icon: "insights", title: "Measurable Results", desc: "Track every aspect of your campaigns" },
                                    { icon: "savings", title: "Cost Effective", desc: "Better ROI than traditional marketing" }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors text-center">
                                        <span className="material-symbols-outlined text-4xl text-white mb-4 block">{item.icon}</span>
                                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-white/80 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center glass-card rounded-3xl p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white mb-4">
                            Ready to Grow Your Business?
                        </h2>
                        <p className="text-text-muted mb-8 max-w-2xl mx-auto dark:text-gray-300">
                            Let Symbosys help you harness the power of digital marketing to catapult your business to unprecedented heights. Contact us today for a free consultation.
                        </p>
                        <button className="px-8 py-4 rounded-full bg-linear-to-r from-orange-600 via-red-600 to-orange-600 text-white font-bold shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-red-500/40 hover:scale-105 transition-all duration-300 light-shimmer">
                            Get Free Consultation
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
