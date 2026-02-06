export const metadata = {
    title: "Domain & Hosting Services - Symbosys Technologies",
    description:
        "Symbosys offers comprehensive domain and hosting services including shared hosting, VPS, dedicated servers, cloud hosting, and WordPress hosting.",
};

export default function DomainHostingPage() {
    return (
        <div className="bg-surface text-text-main font-sans antialiased selection:bg-brand/20 selection:text-brand relative overflow-x-hidden min-h-screen dark:text-white transition-colors duration-300">
            {/* Liquid Light Immersive Background Canvas */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[15%] -left-[10%] w-[70vw] h-[70vw] bg-linear-to-br from-blue-400/15 via-indigo-400/10 to-violet-400/15 rounded-full blur-3xl light-orb" />
                <div className="absolute -bottom-[15%] -right-[10%] w-[60vw] h-[60vw] bg-linear-to-tl from-violet-400/12 via-blue-400/10 to-indigo-400/15 rounded-full blur-3xl light-orb-slow" />
                <div className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] bg-linear-to-r from-indigo-400/10 via-transparent to-blue-400/10 rounded-full blur-3xl ripple-light" />
                <div className="absolute inset-0 aurora-bg opacity-30" />
                <div className="absolute inset-0 bg-white/30 dark:bg-black/60 backdrop-blur-xl" />
            </div>

            <main className="relative z-10 pt-32 pb-20">
                {/* Hero Section */}
                <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 via-indigo-600 to-violet-600 min-h-[400px]">
                        <div className="absolute inset-0 aurora-bg opacity-50" />
                        <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-white/20 blur-3xl light-pulse-orb" />
                        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full bg-blue-300/30 blur-2xl light-orb" />

                        <div className="relative z-10 p-8 md:p-16 flex flex-col justify-center min-h-[400px]">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 w-fit mb-6">
                                <span className="material-symbols-outlined text-white">dns</span>
                                <span className="text-sm font-semibold text-white uppercase tracking-widest">Domain & Hosting</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-liquid-glow max-w-3xl">
                                Domain and Hosting Services by Symbosys
                            </h1>
                            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                                Symbosys offers a comprehensive range of domain and hosting services to help businesses establish a solid online presence.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content Section */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Introduction */}
                    <div className="glass-card rounded-3xl p-8 md:p-12 mb-12">
                        <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed">
                            As a leading domain and hosting provider, we understand the importance of having reliable and secure web hosting and a memorable domain name to build your brand and attract visitors. Whether you're looking to buy a domain and hosting for the first time or switch to a better service, Symbosys provides top-notch solutions tailored to your needs.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-8 text-center">
                            Types of <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-indigo-500 to-violet-500">Domain & Hosting Services</span>
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: "domain",
                                    title: "Domain Name Registration",
                                    description: "At Symbosys, we make it easy to buy domain and hosting in one place. Our domain registration services cover many domain extensions, including .com, .net, and .org."
                                },
                                {
                                    icon: "group",
                                    title: "Shared Hosting",
                                    description: "Our cheap domain and hosting packages are perfect for small businesses and personal websites. Shared hosting allows multiple websites to share the same server resources."
                                },
                                {
                                    icon: "storage",
                                    title: "VPS Hosting",
                                    description: "We offer Virtual Private Server (VPS) hosting for businesses needing more control and flexibility. VPS hosting provides dedicated server resources for complex applications."
                                },
                                {
                                    icon: "memory",
                                    title: "Dedicated Hosting",
                                    description: "For businesses with high-traffic websites that require maximum performance and security, we provide dedicated hosting solutions with complete control over a physical server."
                                },
                                {
                                    icon: "cloud",
                                    title: "Cloud Hosting",
                                    description: "Our cloud hosting services are designed for scalability and reliability. Cloud hosting uses a network of servers to host your website, ensuring high availability."
                                },
                                {
                                    icon: "language",
                                    title: "WordPress Hosting",
                                    description: "We offer specialized WordPress hosting optimized for speed, security, and reliability with pre-installed WordPress, automatic updates, and advanced security features."
                                }
                            ].map((service, index) => (
                                <div key={index} className="group relative">
                                    <div className="absolute -inset-2 bg-linear-to-r from-blue-500/20 via-indigo-500/15 to-violet-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative glass-card rounded-2xl p-6 h-full">
                                        <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-2xl text-white">{service.icon}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-text-main mb-3 dark:text-white">{service.title}</h3>
                                        <p className="text-text-muted text-sm leading-relaxed dark:text-gray-300">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Strategies Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-8 text-center">
                            Strategies <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-indigo-500 to-violet-500">We Follow</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: "Customer-Centric Approach", desc: "At Symbosys, our customers come first. We work closely with our clients to understand their needs and provide tailored domain and hosting solutions that align with their business goals." },
                                { title: "Competitive Pricing", desc: "We understand the importance of affordability, especially for startups and small businesses. That's why we offer cheap domain and hosting packages that maintain quality with no hidden fees." },
                                { title: "Reliable and Secure Hosting", desc: "Reliability and security are at the core of our hosting services. We use state-of-the-art servers and security measures to ensure your website is always up and running." },
                                { title: "Scalability and Flexibility", desc: "As your business grows, so do your hosting needs. Our hosting services are designed to scale with your company, allowing you to upgrade your hosting plan as needed." },
                                { title: "Excellent Customer Support", desc: "Our dedicated support team is available to help you with any hosting-related issues, ensuring your online presence is never compromised." },
                                { title: "SEO-Optimized Hosting", desc: "We understand the importance of SEO in digital marketing. Our hosting solutions are optimized for speed and performance, critical factors in search engine rankings." }
                            ].map((item, index) => (
                                <div key={index} className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-indigo-500 flex items-center justify-center shrink-0">
                                            <span className="text-white font-bold text-sm">{index + 1}</span>
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

                    {/* Why Choose Us */}
                    <div className="relative overflow-hidden rounded-3xl mb-16">
                        <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-indigo-600 to-violet-600">
                            <div className="absolute inset-0 aurora-bg opacity-40" />
                            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl light-orb" />
                            <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-blue-300/20 blur-3xl light-orb-slow" />
                        </div>
                        <div className="relative z-10 p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center text-liquid-glow">
                                Why Choose Symbosys?
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { icon: "verified", title: "Best Provider", desc: "Symbosys is known as the best domain and hosting provider offering reliable and affordable solutions to businesses of all sizes." },
                                    { icon: "location_on", title: "Local Presence", desc: "With a strong presence in Ranchi, we are recognized as the best hosting service in the region." },
                                    { icon: "apps", title: "Comprehensive Solutions", desc: "From domain name registration to website hosting, we offer a full range of services to meet all your online needs." },
                                    { icon: "thumb_up", title: "Customer Satisfaction", desc: "Our commitment to customer satisfaction is evident in our excellent customer support and reliable hosting solutions." }
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
                            Ready to Get Online?
                        </h2>
                        <p className="text-text-muted mb-8 max-w-2xl mx-auto dark:text-gray-300">
                            Partner with Symbosys for all your domain and hosting needs and experience the best reliability, security, and performance. Contact us today to learn more about our services.
                        </p>
                        <button className="px-8 py-4 rounded-full bg-linear-to-r from-blue-600 via-indigo-600 to-blue-600 text-white font-bold shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300 light-shimmer">
                            Get Started Today
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
