import Image from "next/image";
import { seoOptimizationMetadata } from "@/seo/services/SEO-Optimization";

export const metadata = seoOptimizationMetadata;

export default function SEOOptimizationPage() {
    const benefits = [
        {
            icon: "trending_up",
            title: "Dominate Top Rankings",
            description: "Statistically, 60% of clicks go to the top three search results. We don't just aim for page one; we aim for the summit. Our precision-engineered SEO tactics are designed to put your brand in that elite top-tier spot."
        },
        {
            icon: "person_add",
            title: "Exponential Traffic & ROI",
            description: "Ranking for high-intent keywords isn't just about traffic—it's about the right traffic. We target the search terms that drive high-value conversions, turning searchers into loyal customers."
        },
        {
            icon: "storefront",
            title: "Local Market Authority",
            description: "With the rise of mobile search, local visibility is everything. We optimize your presence for Ranchi-specific queries, ensuring that when local customers are ready to buy, your business is the first one they see."
        },
        {
            icon: "emoji_events",
            title: "Outpace the Competition",
            description: "Google's algorithms are constantly evolving, and so are we. We proactively refine your strategy to ensure you don't just reach the top—you stay there, leaving your competitors in the rearview mirror."
        },
        {
            icon: "visibility",
            title: "Instant Brand Recognition",
            description: "Through a strategic mix of high-quality content and targeted ads, we build a brand presence that is both familiar and trusted by your potential customers."
        },
        {
            icon: "handshake",
            title: "Built-In Customer Trust",
            description: "Searchers trust Google. By consistently appearing at the top of organic results, your brand inherits that trust, fostering long-term loyalty and lowering your cost per acquisition."
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
                                Data-Driven SEO and Digital Marketing Mastery
                            </h1>
                            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                                Scale your brand's digital authority in Ranchi and beyond. We combine technical SEO with creative marketing to place your business where your customers are searching.
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
                                Dominate the <span className="text-transparent bg-clip-text bg-linear-to-r from-green-500 via-emerald-500 to-teal-500">Digital Landscape</span>
                            </h2>
                            <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed mb-6">
                                Ready to turn search results into sales? In the competitive Ranchi market, visibility isn't just an advantage—it's a necessity. We specialize in digital and social marketing strategies that do more than just get clicks; they build empires.
                            </p>
                            <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed">
                                The digital world moves fast. To stay ahead, your business needs more than a basic website. It needs a high-performance growth engine. From technical SEO audits to viral social campaigns, we engineer the pathways that lead customers directly to you.
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
                            Fueling Growth in the <span className="text-transparent bg-clip-text bg-linear-to-r from-green-500 via-emerald-500 to-teal-500">Digital Age</span>
                        </h2>
                        <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
                            Digital marketing is your roadmap to sustainable success. By blending Search Engine Optimization (SEO) with performance-based advertising like PPC, we create a multi-channel presence that captures attention and converts it into revenue. It's about being in the right place, at the right time, with the right message.
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
                                    { icon: "public", title: "Global Scalability", desc: "Take your business from local Ranchi roots to a global audience with an optimized digital footprint." },
                                    { icon: "savings", title: "High-Impact ROI", desc: "SEO provides one of the highest returns on investment by targeting active customer intent." },
                                    { icon: "schedule", title: "Uninterrupted Presence", desc: "Your optimized website works for you 24/7, capturing leads while you sleep." },
                                    { icon: "insights", title: "Transparent Analytics", desc: "We provide clear, actionable insights into your performance so you can see your investment grow." }
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
                            Ready to Own the Search Results?
                        </h2>
                        <p className="text-text-muted mb-8 max-w-2xl mx-auto dark:text-gray-300">
                            Stop losing customers to your competitors. Partner with Ranchi's SEO experts to audit your presence and start your journey to the top of the search results today.
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
