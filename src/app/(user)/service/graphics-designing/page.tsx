import Image from "next/image";

export const metadata = {
    title: "Creative Graphic Design & Brand Identity | Symbosys Technologies",
    description:
        "Symbosys is a premier creative agency delivering high-impact logo design, brand identity, and 3D visuals. Elevate your brand with our elite design solutions.",
};

export default function GraphicsDesigningPage() {
    return (
        <div className="bg-surface text-text-main font-sans antialiased selection:bg-brand/20 selection:text-brand relative overflow-x-hidden min-h-screen dark:text-white transition-colors duration-300">
            {/* Liquid Light Immersive Background Canvas */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[15%] -left-[10%] w-[70vw] h-[70vw] bg-linear-to-br from-violet-400/15 via-fuchsia-400/10 to-cyan-400/15 rounded-full blur-3xl light-orb" />
                <div className="absolute -bottom-[15%] -right-[10%] w-[60vw] h-[60vw] bg-linear-to-tl from-cyan-400/12 via-violet-400/10 to-pink-400/15 rounded-full blur-3xl light-orb-slow" />
                <div className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] bg-linear-to-r from-fuchsia-400/10 via-transparent to-violet-400/10 rounded-full blur-3xl ripple-light" />
                <div className="absolute inset-0 aurora-bg opacity-30" />
                <div className="absolute inset-0 bg-white/30 dark:bg-black/60 backdrop-blur-xl" />
            </div>

            <main className="relative z-10 pt-32 pb-20">
                {/* Hero Section with Background Image */}
                <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="relative overflow-hidden rounded-3xl min-h-[400px]">
                        {/* Background Image */}
                        <Image
                            src="/services/graphicbc.webp"
                            alt="Graphics Designing"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-r from-violet-900/90 via-fuchsia-900/80 to-transparent" />

                        {/* Content */}
                        <div className="relative z-10 p-8 md:p-16 flex flex-col justify-center min-h-[400px]">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 w-fit mb-6">
                                <span className="material-symbols-outlined text-white">palette</span>
                                <span className="text-sm font-semibold text-white uppercase tracking-widest">Graphics Design</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-liquid-glow max-w-3xl">
                                Visual Storytelling and Creative Brand Design
                            </h1>
                            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                                Symbosys is a world-class creative agency delivering bespoke graphic design solutions that capture attention and amplify your brand's unique narrative.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content Section */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Introduction */}
                    <div className="glass-card rounded-3xl p-8 md:p-12 mb-12">
                        <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed">
                            Our elite team of designers is dedicated to crafting high-fidelity visuals that communicate your brand's essence with clarity and impact. From conceptualizing modern identities to engineering immersive 3D experiences, Symbosys is your ultimate partner for high-performance creative design.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-8 text-center">
                            Types of <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-500 via-fuchsia-500 to-cyan-500">Graphic Design Services</span> We Offer
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: "linked_services",
                                    title: "Signature Logo Design",
                                    description: "We engineer high-impact logos that serve as the cornerstone of your brand identity. Our designers specialize in creating unique, scalable, and memorable marks that resonate with your target audience."
                                },
                                {
                                    icon: "branding_watermark",
                                    title: "Comprehensive Brand Identity",
                                    description: "Beyond the logo, we architect complete visual ecosystems—including curated color palettes and refined typography—to ensure your brand maintains a cohesive and professional presence."
                                },
                                {
                                    icon: "share",
                                    title: "High-Engagement Social Media Design",
                                    description: "We craft visually stunning assets for social platforms that drive engagement and amplify your digital reach through creative storytelling and aesthetic precision."
                                },
                                {
                                    icon: "print",
                                    title: "Professional Print & Collateral",
                                    description: "As a full-spectrum design and production partner, we deliver high-quality print solutions for brochures, posters, and corporate stationery that leave a lasting physical impression."
                                },
                                {
                                    icon: "view_in_ar",
                                    title: "Immersive 3D Visualization",
                                    description: "We push the boundaries of design with sophisticated 3D models and animations, providing businesses with immersive visual assets that bring complex concepts to life."
                                },
                                {
                                    icon: "contact_page",
                                    title: "Bespoke Business Stationery",
                                    description: "We design professional business cards and stationery that reflect your brand's sophistication, ensuring every physical touchpoint reinforces your professional integrity."
                                }
                            ].map((service, index) => (
                                <div key={index} className="group relative">
                                    <div className="absolute -inset-2 bg-linear-to-r from-violet-500/20 via-fuchsia-500/15 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative glass-card rounded-2xl p-6 h-full">
                                        <div className="w-14 h-14 rounded-xl bg-linear-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                            Strategies <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-500 via-fuchsia-500 to-cyan-500">We Follow</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: "Strategic Goal Alignment", desc: "Every project begins with a deep dive into your business objectives. We ensure our creative output is perfectly calibrated to drive your specific goals and market success." },
                                { title: "Collaborative Synergy", desc: "We believe in transparent, iterative design. Our team works in lockstep with yours, integrating feedback to ensure the final product is a perfect reflection of your vision." },
                                { title: "Contemporary Design Logic", desc: "We stay at the forefront of global design trends and emerging technologies, providing your brand with innovative solutions that remain relevant and forward-thinking." },
                                { title: "Meticulous Aesthetic Detail", desc: "Great design lives in the details. From pixel-perfect spacing to intentional typography choices, we maintain the highest standards of aesthetic precision." },
                                { title: "Multi-Platform Adaptability", desc: "Our designs are engineered for versatility, maintaining their impact and quality across every digital and physical medium your brand occupies." },
                                { title: "Persistent Creative Partnership", desc: "We don't just deliver files; we build relationships. We provide ongoing support and revisions to ensure your brand evolves seamlessly as your business grows." }
                            ].map((item, index) => (
                                <div key={index} className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-linear-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shrink-0">
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
                        <div className="absolute inset-0 bg-linear-to-br from-violet-600 via-fuchsia-600 to-cyan-600">
                            <div className="absolute inset-0 aurora-bg opacity-40" />
                            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl light-orb" />
                            <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-cyan-300/20 blur-3xl light-orb-slow" />
                        </div>
                        <div className="relative z-10 p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center text-liquid-glow">
                                Why Choose Symbosys?
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { icon: "location_on", title: "Strategic Market Insight", desc: "We leverage local and global market trends to provide design solutions that resonate deeply with your specific audience." },
                                    { icon: "apps", title: "End-to-End Creative Ecosystem", desc: "From initial sketches to final print production, we provide a unified ecosystem for all your creative and visual needs." },
                                    { icon: "groups", title: "Elite Design Collective", desc: "Our team features veteran creatives who are passionate about pushing the boundaries of visual communication." },
                                    { icon: "thumb_up", title: "Commitment to Excellence", desc: "We are dedicated to delivering high-fidelity design solutions that consistently exceed expectations and drive growth." }
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
                            Elevate Your Visual Identity
                        </h2>
                        <p className="text-text-muted mb-8 max-w-2xl mx-auto dark:text-gray-300">
                            Whether you're looking for a complete brand overhaul or specialized creative assets, Symbosys has the expertise to transform your vision into an iconic brand. Let's create something extraordinary together.
                        </p>
                        <button className="px-8 py-4 rounded-full bg-linear-to-r from-violet-600 via-fuchsia-600 to-violet-600 text-white font-bold shadow-xl shadow-violet-500/30 hover:shadow-2xl hover:shadow-fuchsia-500/40 hover:scale-105 transition-all duration-300 light-shimmer">
                            Get Started Today
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
