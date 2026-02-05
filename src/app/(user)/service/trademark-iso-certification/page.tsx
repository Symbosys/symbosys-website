export const metadata = {
    title: "Trademark & ISO Certification - Symbosys Technologies",
    description:
        "Symbosys offers trademark registration and ISO certification services to help businesses protect their brand identity and meet international quality standards.",
};

export default function TrademarkISOPage() {
    return (
        <div className="bg-surface text-text-main font-sans antialiased selection:bg-brand/20 selection:text-brand relative overflow-x-hidden min-h-screen">
            {/* Liquid Light Immersive Background Canvas */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[15%] -left-[10%] w-[70vw] h-[70vw] bg-linear-to-br from-purple-400/15 via-indigo-400/10 to-blue-400/15 rounded-full blur-3xl light-orb" />
                <div className="absolute -bottom-[15%] -right-[10%] w-[60vw] h-[60vw] bg-linear-to-tl from-blue-400/12 via-purple-400/10 to-indigo-400/15 rounded-full blur-3xl light-orb-slow" />
                <div className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] bg-linear-to-r from-indigo-400/10 via-transparent to-purple-400/10 rounded-full blur-3xl ripple-light" />
                <div className="absolute inset-0 aurora-bg opacity-30" />
                <div className="absolute inset-0 bg-white/30 backdrop-blur-xs" />
            </div>

            <main className="relative z-10 pt-32 pb-20">
                {/* Hero Section */}
                <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-purple-600 via-indigo-600 to-blue-600 min-h-[400px]">
                        <div className="absolute inset-0 aurora-bg opacity-50" />
                        <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-white/20 blur-3xl light-pulse-orb" />
                        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full bg-indigo-300/30 blur-2xl light-orb" />

                        <div className="relative z-10 p-8 md:p-16 flex flex-col justify-center min-h-[400px]">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 w-fit mb-6">
                                <span className="material-symbols-outlined text-white">verified</span>
                                <span className="text-sm font-semibold text-white uppercase tracking-widest">Trademark & ISO</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-liquid-glow max-w-3xl">
                                Trade Mark and ISO Certification by Symbosys
                            </h1>
                            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                                Symbosys offers top-tier trademark registration and ISO certification services, helping businesses protect their brand identity and improve operational quality.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content Section */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Introduction */}
                    <div className="glass-card rounded-3xl p-8 md:p-12 mb-12">
                        <p className="text-lg text-text-muted leading-relaxed">
                            We are committed to ensuring that your trademarks are legally safeguarded and your business meets international standards through ISO certifications. Trademark registration is a critical step in securing your brand's unique identity, and we simplify the entire process.
                        </p>
                    </div>

                    {/* Trademark Registration Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-8 text-center">
                            Types of <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500">Trademark Registration</span>
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: "title", title: "Wordmark Registration", desc: "Registering your brand or product name gives you exclusive rights to use it for your goods and services across India." },
                                { icon: "image", title: "Logo Mark Registration", desc: "Logo trademark registration secures your brand's visual identity, protecting your logo or symbol from unauthorized use." },
                                { icon: "badge", title: "Service Mark Registration", desc: "Service mark registration is essential for service-based businesses, offering protection for the branding of your service offerings." },
                                { icon: "workspace_premium", title: "Certification Mark", desc: "Certification marks indicate that your goods or services meet specific standards, used to certify quality, origin, or manufacturing processes." },
                                { icon: "category", title: "Shape Mark Registration", desc: "Shape mark registration protects your products' distinct shape or packaging, such as bottle designs or containers unique to your brand." },
                                { icon: "volume_up", title: "Sound Mark Registration", desc: "Sound marks safeguard unique sounds associated with your brand, such as iconic jingles or sound signatures." }
                            ].map((item, index) => (
                                <div key={index} className="group relative">
                                    <div className="absolute -inset-2 bg-linear-to-r from-purple-500/20 via-indigo-500/15 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative glass-card rounded-2xl p-6 h-full">
                                        <div className="w-14 h-14 rounded-xl bg-linear-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-2xl text-white">{item.icon}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-text-main mb-3">{item.title}</h3>
                                        <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ISO Certification Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-8 text-center">
                            Types of <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500">ISO Certification</span>
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: "verified", title: "ISO 9001", subtitle: "Quality Management", desc: "The most recognized certification globally, helps businesses improve product quality, customer satisfaction, and operational efficiency." },
                                { icon: "eco", title: "ISO 14001", subtitle: "Environmental Management", desc: "Focuses on sustainable environmental practices, ensuring your company complies with environmental regulations and reduces its impact." },
                                { icon: "security", title: "ISO 27001", subtitle: "Information Security", desc: "Protects sensitive data and ensures your business implements robust information security protocols." },
                                { icon: "restaurant", title: "ISO 22000", subtitle: "Food Safety", desc: "Ideal for food industry businesses, ensures compliance with food safety regulations and helps mitigate risks." },
                                { icon: "health_and_safety", title: "ISO 45001", subtitle: "Occupational Health & Safety", desc: "Enhances workplace safety by establishing effective health and safety management systems." },
                                { icon: "electric_bolt", title: "ISO 50001", subtitle: "Energy Management", desc: "Assists organizations in improving energy efficiency, reducing consumption, and promoting sustainability." }
                            ].map((item, index) => (
                                <div key={index} className="group relative">
                                    <div className="absolute -inset-2 bg-linear-to-r from-purple-500/20 via-indigo-500/15 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative glass-card rounded-2xl p-6 h-full">
                                        <div className="w-14 h-14 rounded-xl bg-linear-to-br from-indigo-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-2xl text-white">{item.icon}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-text-main mb-1">{item.title}</h3>
                                        <span className="text-xs font-semibold text-indigo-600 mb-3 block">{item.subtitle}</span>
                                        <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Our Approach */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-8 text-center">
                            Our Approach to <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500">Success</span>
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: "support_agent", title: "Expert Consultation", desc: "Our team of legal and certification specialists provides personalized guidance throughout the trademark registration or ISO certification process." },
                                { icon: "speed", title: "Streamlined Processes", desc: "We leverage cutting-edge technology to facilitate trademark filing efficiently and ISO certification, minimizing delays." },
                                { icon: "handshake", title: "Ongoing Support", desc: "Our commitment to our clients goes beyond registration. We provide ongoing assistance to ensure your trademarks and ISO certifications remain valid and effective." }
                            ].map((item, index) => (
                                <div key={index} className="glass-card rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-300">
                                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-purple-500 to-indigo-500 flex items-center justify-center mx-auto mb-4">
                                        <span className="material-symbols-outlined text-3xl text-white">{item.icon}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-text-main mb-2">{item.title}</h3>
                                    <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Documents Required */}
                    <div className="relative overflow-hidden rounded-3xl mb-16">
                        <div className="absolute inset-0 bg-linear-to-br from-purple-600 via-indigo-600 to-blue-600">
                            <div className="absolute inset-0 aurora-bg opacity-40" />
                            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl light-orb" />
                        </div>
                        <div className="relative z-10 p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center text-liquid-glow">
                                Documents Required
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">For Trademark Registration</h3>
                                    <div className="space-y-3">
                                        {["Applicant's Details (name, address, nationality)", "Business Registration Proof", "Logo Image (if applicable) in JPEG format", "Power of Attorney (Form TM-48)", "User Affidavit (if claiming prior use)", "Identity and Address Proof"].map((item, index) => (
                                            <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                                                <span className="material-symbols-outlined text-white">check</span>
                                                <span className="text-white/90 text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">For ISO Certification</h3>
                                    <div className="space-y-3">
                                        {["Business Registration Proof", "Proof of Address (utility bills, rental agreements)", "Management System Documentation", "Proof of Implementation (audit reports, risk assessments)", "Legal and Statutory Compliance documents"].map((item, index) => (
                                            <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                                                <span className="material-symbols-outlined text-white">check</span>
                                                <span className="text-white/90 text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center glass-card rounded-3xl p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-4">
                            Get Started with Symbosys Today
                        </h2>
                        <p className="text-text-muted mb-8 max-w-2xl mx-auto">
                            Whether you're looking to apply for trademark protection or seek ISO certification to enhance your business's credibility, Symbosys is your trusted partner. Contact us today to apply for a trademark online and elevate your business.
                        </p>
                        <button className="px-8 py-4 rounded-full bg-linear-to-r from-purple-600 via-indigo-600 to-purple-600 text-white font-bold shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300 light-shimmer">
                            Start Your Application
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
