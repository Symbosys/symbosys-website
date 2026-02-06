import Image from "next/image";

export const metadata = {
    title: "Graphics Designing - Symbosys Technologies",
    description:
        "Symbosys is a leading graphic design agency providing logo design, brand identity, social media graphics, print design, and 3D graphic design services.",
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
                                Graphic Designing by Symbosys
                            </h1>
                            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                                Symbosys is a leading graphic design agency providing a wide range of graphic design services tailored to meet the needs of businesses, organizations, and individuals.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content Section */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Introduction */}
                    <div className="glass-card rounded-3xl p-8 md:p-12 mb-12">
                        <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed">
                            Our team of creative designers is dedicated to delivering high-quality designs that effectively communicate your brand message and leave a lasting impression. Whether you are searching for graphic design companies near you or need the expertise of freelance graphic designers near you, Symbosys is your go-to solution for all things graphic design.
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
                                    title: "Logo Design",
                                    description: "As a premier graphic logo designer near you, we specialize in creating impactful logos that reflect your brand's identity. Our team works closely with you to develop company logo designs that are unique, memorable, and versatile."
                                },
                                {
                                    icon: "branding_watermark",
                                    title: "Brand Identity Design",
                                    description: "Beyond logo design, we offer comprehensive brand identity design services that include color schemes, typography, and visual elements to create a cohesive brand image."
                                },
                                {
                                    icon: "share",
                                    title: "Social Media Graphic Design",
                                    description: "Our social media graphic design services include creating eye-catching graphics for social media posts, banners, and ads that help you engage with your audience and promote your brand effectively."
                                },
                                {
                                    icon: "print",
                                    title: "Print Design",
                                    description: "As a full-service graphic design and printing company, we provide a wide range of print design services, including brochures, flyers, posters, business cards, and more."
                                },
                                {
                                    icon: "view_in_ar",
                                    title: "3D Graphic Design",
                                    description: "We provide 3D graphic design services for businesses looking to create immersive visual experiences. Our 3D graphic designers are skilled in creating realistic models, animations, and renderings."
                                },
                                {
                                    icon: "contact_page",
                                    title: "Business Cards Design",
                                    description: "A business card is often a client's first impression of your company. We offer graphic design business cards that are professionally designed to reflect your brand's image."
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
                                { title: "Understanding Client Needs", desc: "At Symbosys, we begin every project by thoroughly understanding our Client's needs and goals. This allows us to create designs that are not only visually appealing but also strategically aligned with your brand's objectives." },
                                { title: "Creative Collaboration", desc: "Our team believes in the power of collaboration. We work closely with our clients throughout the design process, incorporating feedback and ideas to ensure the final product exceeds expectations." },
                                { title: "Latest Design Trends", desc: "We stay current with the latest design trends and technologies to ensure our clients receive modern, innovative solutions." },
                                { title: "Attention to Detail", desc: "We believe that great design is in the details. Our team pays meticulous attention to every element of the design process, from color choices to typography." },
                                { title: "Versatility and Adaptability", desc: "Our designs are versatile and adaptable, meaning they can be used across various mediums and platforms without losing quality or impact." },
                                { title: "Ongoing Support", desc: "We offer ongoing support and are always available for revisions or updates. We aim to build long-term relationships with our clients." }
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
                                    { icon: "location_on", title: "Local Expertise", desc: "We understand the local market and can provide tailored solutions that resonate with your audience." },
                                    { icon: "apps", title: "Diverse Services", desc: "From graphic design and printing services to digital graphic design, we offer a wide range of services." },
                                    { icon: "groups", title: "Experienced Team", desc: "Our team comprises some of the best graphic designers with years of experience creating stunning visuals." },
                                    { icon: "thumb_up", title: "Client Satisfaction", desc: "We are committed to providing high-quality services that exceed client expectations." }
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
                            Ready to Elevate Your Brand?
                        </h2>
                        <p className="text-text-muted mb-8 max-w-2xl mx-auto dark:text-gray-300">
                            Whether you are looking for a graphic design business near you or need the services of a freelance graphic designer, Symbosys is here to help. Contact us today to learn more about how we can elevate your brand with our expert graphic design services.
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
