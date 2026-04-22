import Image from "next/image";

export const metadata = {
    title: "Elite Mobile App Development | Android & iOS Solutions | Symbosys",
    description:
        "Symbosys delivers high-performance, custom mobile applications for Android and iOS. Transform your business with user-centric apps engineered for scale.",
};

export default function MobileAppDevelopmentPage() {
    return (
        <div className="bg-surface text-text-main font-sans antialiased selection:bg-brand/20 selection:text-brand relative overflow-x-hidden min-h-screen dark:text-white transition-colors duration-300">
            {/* Liquid Light Immersive Background Canvas */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[15%] -left-[10%] w-[70vw] h-[70vw] bg-linear-to-br from-cyan-400/15 via-blue-400/10 to-violet-400/15 rounded-full blur-3xl light-orb" />
                <div className="absolute -bottom-[15%] -right-[10%] w-[60vw] h-[60vw] bg-linear-to-tl from-violet-400/12 via-cyan-400/10 to-blue-400/15 rounded-full blur-3xl light-orb-slow" />
                <div className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] bg-linear-to-r from-blue-400/10 via-transparent to-cyan-400/10 rounded-full blur-3xl ripple-light" />
                <div className="absolute inset-0 aurora-bg opacity-30" />
                <div className="absolute inset-0 bg-white/30 dark:bg-black/60 backdrop-blur-xl" />
            </div>

            <main className="relative z-10 pt-32 pb-20">
                {/* Hero Section with Background Image */}
                <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="relative overflow-hidden rounded-3xl min-h-[400px]">
                        {/* Background Image */}
                        <Image
                            src="/services/mobilebc.webp"
                            alt="Mobile App Development"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-r from-cyan-900/90 via-blue-900/80 to-transparent" />

                        {/* Content */}
                        <div className="relative z-10 p-8 md:p-16 flex flex-col justify-center min-h-[400px]">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 w-fit mb-6">
                                <span className="material-symbols-outlined text-white">phone_iphone</span>
                                <span className="text-sm font-semibold text-white uppercase tracking-widest">Mobile Development</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-liquid-glow max-w-3xl">
                                Scalable Mobile Applications for Android & iOS
                            </h1>
                            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                                Symbosys is a premier app development powerhouse, engineering high-performance mobile solutions that connect brands with their audiences on every device.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content Section */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Introduction */}
                    <div className="glass-card rounded-3xl p-8 md:p-12 mb-12">
                        <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed mb-4">
                            Our mobile development services are engineered to accelerate your business growth. We help startups and enterprises alike transform visionary ideas into functional, market-ready mobile products.
                        </p>
                        <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed">
                            By uniting elite engineering with intuitive design, we build custom applications that resonate with users. Whether you're targeting productivity, m-commerce, social networking, or high-end gaming, our apps are built for speed, security, and scalability.
                        </p>
                    </div>

                    {/* Why Mobile App Development */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-8 text-center">
                            Empowering Business in the <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 via-blue-500 to-violet-500">Mobile-First Era</span>
                        </h2>
                        <div className="glass-card rounded-3xl p-8 md:p-12">
                            <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6">
                                Mobile devices have officially overtaken desktops as the primary medium for digital engagement. Today, your mobile presence isn't just an extension of your brand—it's the primary touchpoint for your customers.
                            </p>
                            <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6">
                                With over 80% of users preferring native apps for their speed and reliability, traditional web-only strategies are no longer enough. To capture the modern market, you need a high-impact mobile platform that lives in your customer's pocket.
                            </p>
                            <p className="text-text-muted dark:text-gray-300 leading-relaxed">
                                Symbosys bridges the gap between your business and the mobile landscape. We design impactful, high-conversion applications that drive engagement and secure your place in the competitive digital race.
                            </p>
                        </div>
                    </div>

                    {/* Android Development Focus Areas */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-8 text-center">
                            Our Android Application <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 via-blue-500 to-violet-500">Development Focus Areas</span>
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: "build", title: "Custom App Engineering" },
                                { icon: "sports_esports", title: "Immersive Gaming Solutions" },
                                { icon: "movie", title: "Multimedia & Entertainment Apps" },
                                { icon: "business", title: "Enterprise Mobility Platforms" },
                                { icon: "sync", title: "Continuous Maintenance & Scaling" },
                                { icon: "verified", title: "Rigorous Quality Assurance" }
                            ].map((item, index) => (
                                <div key={index} className="group relative">
                                    <div className="absolute -inset-2 bg-linear-to-r from-cyan-500/20 via-blue-500/15 to-violet-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative glass-card rounded-2xl p-6 flex items-center gap-4 h-full hover:-translate-y-1 transition-transform duration-300">
                                        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500 to-blue-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-xl text-white">{item.icon}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-text-main dark:text-white">{item.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-8 text-center">
                            Features We Provide in Our <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 via-blue-500 to-violet-500">App Development Services</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { icon: "devices", title: "User-Centric Responsive Design", desc: "We architect fluid interfaces that adapt perfectly to every screen size, ensuring an effortless and engaging experience for every user." },
                                { icon: "cloud", title: "Cloud-Native Architecture", desc: "Our apps leverage cloud-based backend systems to minimize local storage usage and ensure real-time data synchronization." },
                                { icon: "settings_remote", title: "IoT & Remote Connectivity", desc: "We integrate cutting-edge IoT protocols, enabling your mobile app to control hardware and smart devices with precision." },
                                { icon: "share", title: "Seamless Social Ecosystems", desc: "Extend your brand's reach by integrating comprehensive social sharing and community features directly into your app." },
                                { icon: "payments", title: "Secure Payment Systems", desc: "We engineer high-speed payment gateways for e-commerce, providing your customers with a frictionless cashless experience." }
                            ].map((item, index) => (
                                <div key={index} className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500 to-blue-500 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-xl text-white">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-text-main mb-2 dark:text-white">{item.title}</h3>
                                            <p className="text-text-muted text-sm leading-relaxed dark:text-gray-300">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="relative overflow-hidden rounded-3xl mb-16">
                        <div className="absolute inset-0 bg-linear-to-br from-cyan-600 via-blue-600 to-violet-600">
                            <div className="absolute inset-0 aurora-bg opacity-40" />
                            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl light-orb" />
                            <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-cyan-300/20 blur-3xl light-orb-slow" />
                        </div>
                        <div className="relative z-10 p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center text-liquid-glow">
                                Key Benefits of Our Mobile App Development Services
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { icon: "savings", text: "Cost-optimized development without compromising technical excellence." },
                                    { icon: "star", text: "Feature-rich premium apps tailored to your specific business logic." },
                                    { icon: "support_agent", text: "Proactive technical support to ensure 100% app uptime." },
                                    { icon: "update", text: "Strategic lifecycle updates for a consistently modern user experience." },
                                    { icon: "groups", text: "Direct developer collaboration to ensure every requirement is met." }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors flex items-center gap-4">
                                        <span className="material-symbols-outlined text-2xl text-white">{item.icon}</span>
                                        <p className="text-white font-medium">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center glass-card rounded-3xl p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white mb-4">
                            Transform Your Idea into a Mobile Reality
                        </h2>
                        <p className="text-text-muted mb-8 max-w-2xl mx-auto dark:text-gray-300">
                            From bespoke Android and iOS engineering to ongoing maintenance and optimization, we provide the full-spectrum support your mobile project needs to succeed.
                        </p>
                        <button className="px-8 py-4 rounded-full bg-linear-to-r from-cyan-600 via-blue-600 to-cyan-600 text-white font-bold shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 light-shimmer">
                            Start Your App Project
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
