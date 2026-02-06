import Image from "next/image";

export const metadata = {
    title: "SEO Optimization - Symbosys Technologies",
    description:
        "Symbosys offers comprehensive SEO optimization services to help your business rank on top search engine pages and increase traffic and conversions.",
};

export default function SEOOptimizationPage() {
    const benefits = [
        {
            icon: "trending_up",
            title: "Top Rank in Search Engine Pages",
            description: "Around 60% of the users using google search query visit only the first three results of the Google page and ignore the rest. With a result-driven SEO strategy, we will help you to rank on the top three results of search engine pages."
        },
        {
            icon: "person_add",
            title: "Increase Traffic and Conversion",
            description: "Getting top rank in search engine pages with the most searched keywords ultimately brings a large flow of traffic and conversion for your website."
        },
        {
            icon: "storefront",
            title: "Bring Revenue for Local Business",
            description: "Most of the businesses are searched from mobile devices and most of them are local visitors. Local visitors are more likely to get convert and bring revenue for your business. With a Local SEO strategy, we will help you to discover your business in local searches as well."
        },
        {
            icon: "emoji_events",
            title: "Beat Competitors",
            description: "SEO rankings never remain constant unless you are not working on SEO strategies regularly. We keep an eye on the latest and ongoing google algorithm to keep you stay ahead of your competitor."
        },
        {
            icon: "visibility",
            title: "Improves Business Recognition",
            description: "With paid ads and a quality content approach we can make your business popular among your potential customers."
        },
        {
            icon: "handshake",
            title: "Build Trustworthy Customers",
            description: "Continuing SEO strategies for a long period of time also helps to build trustworthy customers as customers only search those sites which they find more often on search."
        }
    ];

    return (
        <div className="bg-surface text-text-main font-sans antialiased selection:bg-brand/20 selection:text-brand relative overflow-x-hidden min-h-screen dark:text-white transition-colors duration-300">
            {/* Liquid Light Immersive Background Canvas */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[15%] -left-[10%] w-[70vw] h-[70vw] bg-linear-to-br from-green-400/15 via-emerald-400/10 to-teal-400/15 rounded-full blur-3xl light-orb" />
                <div className="absolute -bottom-[15%] -right-[10%] w-[60vw] h-[60vw] bg-linear-to-tl from-teal-400/12 via-green-400/10 to-emerald-400/15 rounded-full blur-3xl light-orb-slow" />
                <div className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] bg-linear-to-r from-emerald-400/10 via-transparent to-green-400/10 rounded-full blur-3xl ripple-light" />
                <div className="absolute inset-0 aurora-bg opacity-30" />
                <div className="absolute inset-0 bg-white/30 dark:bg-black/60 backdrop-blur-xl" />
            </div>

            <main className="relative z-10 pt-32 pb-20">
                {/* Hero Section with Background Image */}
                <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="relative overflow-hidden rounded-3xl min-h-[400px]">
                        {/* Background Image */}
                        <Image
                            src="/services/seobc.webp"
                            alt="SEO Optimization"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-r from-green-900/90 via-emerald-900/80 to-transparent" />

                        {/* Content */}
                        <div className="relative z-10 p-8 md:p-16 flex flex-col justify-center min-h-[400px]">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 w-fit mb-6">
                                <span className="material-symbols-outlined text-white">search</span>
                                <span className="text-sm font-semibold text-white uppercase tracking-widest">SEO Optimization</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-liquid-glow max-w-3xl">
                                Social Marketing & Digital Marketing
                            </h1>
                            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                                Amplify your online presence and expand your reach to potential customers in Ranchi, Jharkhand with our comprehensive SEO and digital marketing strategies.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content Section */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Introduction with Featured Image */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
                        <div className="glass-card rounded-3xl p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-6 dark:text-white">
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-green-500 via-emerald-500 to-teal-500">Digital Marketing</span> Excellence
                            </h2>
                            <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed mb-6">
                                Are you seeking to amplify your online presence and expand your reach to potential customers in Ranchi, Jharkhand? Look no further than the dynamic realm of digital and social media marketing!
                            </p>
                            <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed">
                                In today's rapidly evolving world, establishing a robust online presence is indispensable for businesses striving to maintain competitiveness. From the intricacies of SEO to the efficacy of paid promotions, we delve into the strategies that can propel your business growth.
                            </p>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden bg-white/50 backdrop-blur-sm p-6 flex items-center justify-center min-h-[350px]">
                            <Image
                                src="/services/seos.webp"
                                alt="SEO Strategy Illustration"
                                width={500}
                                height={350}
                                className="object-contain max-w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Digital Marketing Description */}
                    <div className="glass-card rounded-3xl p-8 md:p-12 mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-6 text-center dark:text-white">
                            What is <span className="text-transparent bg-clip-text bg-linear-to-r from-green-500 via-emerald-500 to-teal-500">Digital Marketing</span>?
                        </h2>
                        <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
                            Digital marketing serves as the cornerstone for unlocking success in the digital era. With a strategic approach, businesses can forge connections with their target audience and drive conversions to unprecedented heights. From the intricacies of search engine optimization (SEO) to the dynamics of pay-per-click (PPC) advertising, there exists a plethora of avenues to elevate your brand's visibility online.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-4 text-center">
                            Key Benefits of Our <span className="text-transparent bg-clip-text bg-linear-to-r from-green-500 via-emerald-500 to-teal-500">SEO Strategies</span>
                        </h2>
                        <p className="text-text-muted text-center mb-8 max-w-3xl mx-auto dark:text-gray-300">
                            Here are the key benefits you can expect from your business after implementing SEO strategies with Symbosys
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="group relative">
                                    <div className="absolute -inset-2 bg-linear-to-r from-green-500/20 via-emerald-500/15 to-teal-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative glass-card rounded-2xl p-6 h-full">
                                        <div className="w-14 h-14 rounded-xl bg-linear-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-2xl text-white">{benefit.icon}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-text-main mb-3 dark:text-white">{benefit.title}</h3>
                                        <p className="text-text-muted text-sm leading-relaxed dark:text-gray-300">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why SEO Matters */}
                    <div className="relative overflow-hidden rounded-3xl mb-16">
                        <div className="absolute inset-0 bg-linear-to-br from-green-600 via-emerald-600 to-teal-600">
                            <div className="absolute inset-0 aurora-bg opacity-40" />
                            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl light-orb" />
                            <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-emerald-300/20 blur-3xl light-orb-slow" />
                        </div>
                        <div className="relative z-10 p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center text-liquid-glow">
                                Why SEO Matters for Your Business
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { icon: "public", title: "Global Reach", desc: "Reach customers worldwide with optimized online presence" },
                                    { icon: "savings", title: "Cost Effective", desc: "Get more ROI compared to traditional marketing" },
                                    { icon: "schedule", title: "24/7 Visibility", desc: "Your business stays visible around the clock" },
                                    { icon: "insights", title: "Measurable Results", desc: "Track and analyze your marketing performance" }
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
                            Ready to Rank Higher?
                        </h2>
                        <p className="text-text-muted mb-8 max-w-2xl mx-auto dark:text-gray-300">
                            Let Symbosys boost your search engine rankings and drive more organic traffic to your website. Contact us today for a free SEO audit.
                        </p>
                        <button className="px-8 py-4 rounded-full bg-linear-to-r from-green-600 via-emerald-600 to-green-600 text-white font-bold shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300 light-shimmer">
                            Get Free SEO Audit
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
