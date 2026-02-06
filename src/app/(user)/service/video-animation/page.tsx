export const metadata = {
    title: "Video & Animation Services - Symbosys Technologies",
    description:
        "Symbosys creates high-quality promotional videos and animations including explainer videos, corporate videos, product demos, 2D/3D animations, and motion graphics.",
};

export default function VideoAnimationPage() {
    return (
        <div className="bg-surface text-text-main font-sans antialiased selection:bg-brand/20 selection:text-brand relative overflow-x-hidden min-h-screen dark:text-white transition-colors duration-300">
            {/* Liquid Light Immersive Background Canvas */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[15%] -left-[10%] w-[70vw] h-[70vw] bg-linear-to-br from-rose-400/15 via-pink-400/10 to-orange-400/15 rounded-full blur-3xl light-orb" />
                <div className="absolute -bottom-[15%] -right-[10%] w-[60vw] h-[60vw] bg-linear-to-tl from-orange-400/12 via-rose-400/10 to-pink-400/15 rounded-full blur-3xl light-orb-slow" />
                <div className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] bg-linear-to-r from-pink-400/10 via-transparent to-rose-400/10 rounded-full blur-3xl ripple-light" />
                <div className="absolute inset-0 aurora-bg opacity-30" />
                <div className="absolute inset-0 bg-white/30 dark:bg-black/60 backdrop-blur-xl" />
            </div>

            <main className="relative z-10 pt-32 pb-20">
                {/* Hero Section */}
                <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-rose-600 via-pink-600 to-orange-600 min-h-[400px]">
                        <div className="absolute inset-0 aurora-bg opacity-50" />
                        <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-white/20 blur-3xl light-pulse-orb" />
                        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full bg-orange-300/30 blur-2xl light-orb" />

                        <div className="relative z-10 p-8 md:p-16 flex flex-col justify-center min-h-[400px]">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 w-fit mb-6">
                                <span className="material-symbols-outlined text-white">movie</span>
                                <span className="text-sm font-semibold text-white uppercase tracking-widest">Video & Animation</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-liquid-glow max-w-3xl">
                                Promotional Video and Animation by Symbosys
                            </h1>
                            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                                At Symbosys, we create high-quality promotional videos and animations that captivate audiences and elevate your brand.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content Section */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Introduction */}
                    <div className="glass-card rounded-3xl p-8 md:p-12 mb-12">
                        <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed">
                            Our team of creative professionals works closely with businesses to produce visually engaging content that communicates their message effectively and drives results. Whether you're looking to launch a new product, promote a service, or enhance your brand's online presence, Symbosys provides tailor-made video and animation solutions to meet your marketing needs.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-8 text-center">
                            Types of <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-500 via-pink-500 to-orange-500">Video & Animation Services</span>
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: "play_circle",
                                    title: "Explainer Videos",
                                    description: "Explainer videos are an excellent tool for simplifying complex ideas or concepts, helping your audience understand your products or services concisely and engagingly."
                                },
                                {
                                    icon: "campaign",
                                    title: "Promotional Videos",
                                    description: "Our promotional videos are designed to showcase your brand, product, or service compellingly, driving engagement and conversions for advertising campaigns."
                                },
                                {
                                    icon: "business",
                                    title: "Corporate Videos",
                                    description: "Corporate videos help you communicate your company's mission, values, and culture to potential clients, investors, and employees with professional polish."
                                },
                                {
                                    icon: "preview",
                                    title: "Product Demos",
                                    description: "Product demo videos effectively show your product in action, highlighting features, demonstrating use cases, and providing customers with clear understanding."
                                },
                                {
                                    icon: "view_in_ar",
                                    title: "2D/3D Animations",
                                    description: "Symbosys offers both 2D and 3D animation services. From dynamic character animations to intricate product simulations, we add depth and creativity to your campaigns."
                                },
                                {
                                    icon: "motion_photos_on",
                                    title: "Motion Graphics",
                                    description: "Motion graphics combine text, imagery, and sound to create visually stunning animated videos, ideal for branding, data visualization, and impactful advertisements."
                                },
                                {
                                    icon: "share",
                                    title: "Social Media Videos",
                                    description: "Short and snappy social media videos are essential for grabbing attention. Symbosys produces optimized videos for Instagram, Facebook, LinkedIn, and YouTube."
                                }
                            ].map((service, index) => (
                                <div key={index} className="group relative">
                                    <div className="absolute -inset-2 bg-linear-to-r from-rose-500/20 via-pink-500/15 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative glass-card rounded-2xl p-6 h-full">
                                        <div className="w-14 h-14 rounded-xl bg-linear-to-br from-rose-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-2xl text-white">{service.icon}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-text-main mb-3 dark:text-white">{service.title}</h3>
                                        <p className="text-text-muted text-sm leading-relaxed dark:text-gray-300">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="relative overflow-hidden rounded-3xl mb-16">
                        <div className="absolute inset-0 bg-linear-to-br from-rose-600 via-pink-600 to-orange-600">
                            <div className="absolute inset-0 aurora-bg opacity-40" />
                            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl light-orb" />
                            <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-orange-300/20 blur-3xl light-orb-slow" />
                        </div>
                        <div className="relative z-10 p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center text-liquid-glow">
                                Why Choose Symbosys?
                            </h2>
                            <p className="text-white/90 text-center max-w-3xl mx-auto mb-8 text-lg">
                                Symbosys is committed to delivering impactful video and animation content that resonates with your audience and meets your marketing objectives.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { icon: "tune", title: "Creative Customization", desc: "Every video and animation project is tailored to your brand's identity and message, ensuring the content aligns with your goals." },
                                    { icon: "high_quality", title: "High Production Quality", desc: "We utilize the latest technology and creative techniques to produce visually stunning videos and stand-out animations." },
                                    { icon: "trending_up", title: "Results-Driven", desc: "Our promotional videos and animations are designed to drive conversions, enhance engagement, and amplify your brand's visibility." }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                                        <span className="material-symbols-outlined text-3xl text-white mb-4 block">{item.icon}</span>
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
                            Get Started with Symbosys
                        </h2>
                        <p className="text-text-muted mb-8 max-w-2xl mx-auto dark:text-gray-300">
                            Whether you need explainer videos, product demos, or motion graphics, Symbosys transforms your ideas into captivating visual stories. Let us help you elevate your marketing strategy with our top-notch video and animation services.
                        </p>
                        <button className="px-8 py-4 rounded-full bg-linear-to-r from-rose-600 via-pink-600 to-rose-600 text-white font-bold shadow-xl shadow-rose-500/30 hover:shadow-2xl hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300 light-shimmer">
                            Start Creating Today
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
