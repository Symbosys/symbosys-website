export const metadata = {
    title: "Business Consultancy - Symbosys Technologies",
    description:
        "Symbosys offers comprehensive business consultancy services including trademark registration, ISO certification, company registration, and strategic business guidance.",
};

export default function BusinessConsultancyPage() {
    return (
        <div className="bg-surface text-text-main font-sans antialiased selection:bg-brand/20 selection:text-brand relative overflow-x-hidden min-h-screen">
            {/* Liquid Light Immersive Background Canvas */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[15%] -left-[10%] w-[70vw] h-[70vw] bg-linear-to-br from-slate-400/15 via-gray-400/10 to-zinc-400/15 rounded-full blur-3xl light-orb" />
                <div className="absolute -bottom-[15%] -right-[10%] w-[60vw] h-[60vw] bg-linear-to-tl from-zinc-400/12 via-slate-400/10 to-gray-400/15 rounded-full blur-3xl light-orb-slow" />
                <div className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] bg-linear-to-r from-gray-400/10 via-transparent to-slate-400/10 rounded-full blur-3xl ripple-light" />
                <div className="absolute inset-0 aurora-bg opacity-30" />
                <div className="absolute inset-0 bg-white/30 backdrop-blur-xs" />
            </div>

            <main className="relative z-10 pt-32 pb-20">
                {/* Hero Section */}
                <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-700 via-gray-700 to-zinc-700 min-h-[400px]">
                        <div className="absolute inset-0 aurora-bg opacity-50" />
                        <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-white/20 blur-3xl light-pulse-orb" />
                        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full bg-slate-300/30 blur-2xl light-orb" />

                        <div className="relative z-10 p-8 md:p-16 flex flex-col justify-center min-h-[400px]">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 w-fit mb-6">
                                <span className="material-symbols-outlined text-white">handshake</span>
                                <span className="text-sm font-semibold text-white uppercase tracking-widest">Business Consultancy</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-liquid-glow max-w-3xl">
                                Business Consultancy by Symbosys
                            </h1>
                            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                                Symbosys offers top-tier business consultancy services, helping businesses protect their brand identity, achieve compliance, and improve operational quality.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content Section */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Introduction */}
                    <div className="glass-card rounded-3xl p-8 md:p-12 mb-12">
                        <p className="text-lg text-text-muted leading-relaxed">
                            We are committed to ensuring that your trademarks are legally safeguarded and your business meets international standards through ISO certifications. Our comprehensive business consultancy services cover everything from trademark registration to strategic business guidance, helping you navigate complex regulatory requirements with ease.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-8 text-center">
                            Our <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-600 via-gray-600 to-zinc-600">Consultancy Services</span>
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: "verified", title: "Trademark Registration", desc: "Secure your brand's unique identity with our comprehensive trademark registration services across all categories." },
                                { icon: "workspace_premium", title: "ISO Certification", desc: "Achieve international quality standards with our ISO certification guidance for quality, environment, and security management." },
                                { icon: "business_center", title: "Company Registration", desc: "Get your business legally registered with our end-to-end company registration services for all business types." },
                                { icon: "receipt_long", title: "Tax & Compliance", desc: "Stay compliant with all tax regulations through our expert income tax e-filing and GST registration services." },
                                { icon: "analytics", title: "Strategic Planning", desc: "Develop robust business strategies with our expert consultation to achieve your growth objectives." },
                                { icon: "support_agent", title: "Ongoing Support", desc: "Receive continuous guidance and support for all your business compliance and legal requirements." }
                            ].map((service, index) => (
                                <div key={index} className="group relative">
                                    <div className="absolute -inset-2 bg-linear-to-r from-slate-500/20 via-gray-500/15 to-zinc-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative glass-card rounded-2xl p-6 h-full">
                                        <div className="w-14 h-14 rounded-xl bg-linear-to-br from-slate-600 to-gray-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-2xl text-white">{service.icon}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-text-main mb-3">{service.title}</h3>
                                        <p className="text-text-muted text-sm leading-relaxed">{service.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Our Approach */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-8 text-center">
                            Our Approach to <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-600 via-gray-600 to-zinc-600">Success</span>
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: "groups", title: "Expert Consultation", desc: "Our team of legal and certification specialists provides personalized guidance throughout every process." },
                                { icon: "speed", title: "Streamlined Processes", desc: "We leverage cutting-edge technology to facilitate efficient filings and certifications, minimizing delays." },
                                { icon: "loop", title: "Ongoing Support", desc: "Our commitment goes beyond initial services. We provide continuous assistance to ensure your business stays compliant." }
                            ].map((item, index) => (
                                <div key={index} className="glass-card rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-300">
                                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-slate-600 to-gray-600 flex items-center justify-center mx-auto mb-4">
                                        <span className="material-symbols-outlined text-3xl text-white">{item.icon}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-text-main mb-2">{item.title}</h3>
                                    <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="relative overflow-hidden rounded-3xl mb-16">
                        <div className="absolute inset-0 bg-linear-to-br from-slate-700 via-gray-700 to-zinc-700">
                            <div className="absolute inset-0 aurora-bg opacity-40" />
                            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl light-orb" />
                            <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-slate-300/20 blur-3xl light-orb-slow" />
                        </div>
                        <div className="relative z-10 p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center text-liquid-glow">
                                Why Partner with Symbosys?
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { icon: "school", title: "Expert Knowledge", desc: "Deep expertise in regulatory compliance and business law." },
                                    { icon: "schedule", title: "Time Efficiency", desc: "Streamlined processes that save you valuable time." },
                                    { icon: "attach_money", title: "Cost Effective", desc: "Affordable services without compromising on quality." },
                                    { icon: "thumb_up", title: "Proven Results", desc: "Track record of successful client outcomes." }
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
                        <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-4">
                            Get Started with Symbosys Today
                        </h2>
                        <p className="text-text-muted mb-8 max-w-2xl mx-auto">
                            Whether you're looking for trademark protection, ISO certification, or comprehensive business consultancy, Symbosys is your trusted partner. We simplify complex processes and help your business achieve compliance effortlessly.
                        </p>
                        <button className="px-8 py-4 rounded-full bg-linear-to-r from-slate-700 via-gray-700 to-slate-700 text-white font-bold shadow-xl shadow-slate-500/30 hover:shadow-2xl hover:shadow-gray-500/40 hover:scale-105 transition-all duration-300 light-shimmer">
                            Schedule Consultation
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
