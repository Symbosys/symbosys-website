import Image from "next/image";
import { websiteDesigningMetadata } from "@/seo/services/Website-Designing";

export const metadata = websiteDesigningMetadata;

export default function WebsiteDesigningPage() {
    const webCategories = [
        "Enterprise E-commerce",
        "High-Scale Web Portals",
        "Editorial & Blogs",
        "Corporate Solutions",
        "LMS & Education",
        "Professional Services",
        "Portfolio Sites",
        "Digital Media",
        "Entertainment Hubs",
        "Directory Systems"
    ];

    const webSolutions = [
        "Responsive Mobile Web",
        "Bespoke Theme Engineering",
        "AI Chatbot Integration",
        "Automated Mailing Systems",
        "Secure Payment Gateways",
        "Headless CMS Integration",
        "Multilingual Support",
        "Data-Driven Web Apps"
    ];

    const services = [
        {
            icon: "code",
            title: "Strategic Web Engineering",
            description: "Coding is our craft and the backbone of every digital experience. We subject every line of code to rigorous optimization, ensuring your platform isn't just aesthetically pleasing but is a high-functioning engine that exponentially increases your brand's digital footprint."
        },
        {
            icon: "design_services",
            title: "Immersive UI/UX Design",
            description: "Modern audiences demand seamless experiences. We engineer user-centric interfaces that prioritize intuitive navigation and aesthetic delight, transforming passive visitors into loyal brand advocates through superior design logic."
        },
        {
            icon: "article",
            title: "Optimized Content Ecosystems",
            description: "A great website requires more than just code; it requires a strategic content foundation. We integrate SEO-focused architecture that empowers your marketing team to deploy high-impact content with effortless precision, driving organic growth and authority."
        }
    ];

    const whyChoose = [
        { icon: "auto_awesome", title: "SEO-Optimized Architecture", desc: "Every platform we build is engineered from the ground up to align with Google's most sophisticated search algorithms." },
        { icon: "brush", title: "Bespoke Visual Identity", desc: "We craft distinctive digital aesthetics that differentiate your brand and resonate with your target demographic." },
        { icon: "widgets", title: "Intuitive User Experience", desc: "By integrating essential UI and UX principles, we ensure your website is as functional as it is beautiful." },
        { icon: "category", title: "Cross-Industry Expertise", desc: "Our portfolio spans everything from high-scale e-commerce to complex corporate portals, proving our versatility." },
        { icon: "navigation", title: "Strategic Navigation", desc: "We architect intelligent user journeys that simplify communication and guide visitors effortlessly toward your goals." },
        { icon: "verified", title: "Uncompromising Quality", desc: "We are committed to delivering technical excellence and rigorous quality assurance in every project we undertake." }
    ];

    return (
        <div className="bg-surface text-text-main font-sans antialiased selection:bg-brand/20 selection:text-brand relative overflow-x-hidden min-h-screen dark:text-white transition-colors duration-300">
            {/* Liquid Light Immersive Background Canvas */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[15%] -left-[10%] w-[70vw] h-[70vw] bg-linear-to-br from-violet-400/15 via-blue-400/10 to-cyan-400/15 rounded-full blur-3xl light-orb" />
                <div className="absolute -bottom-[15%] -right-[10%] w-[60vw] h-[60vw] bg-linear-to-tl from-cyan-400/12 via-violet-400/10 to-blue-400/15 rounded-full blur-3xl light-orb-slow" />
                <div className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] bg-linear-to-r from-blue-400/10 via-transparent to-violet-400/10 rounded-full blur-3xl ripple-light" />
                <div className="absolute inset-0 aurora-bg opacity-30" />
                <div className="absolute inset-0 bg-white/30 dark:bg-black/60 backdrop-blur-xl" />
            </div>

            <main className="relative z-10 pt-32 pb-20">
                {/* Hero Section with Background Image */}
                <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="relative overflow-hidden rounded-3xl min-h-[400px]">
                        {/* Background Image */}
                        <Image
                            src="/services/webbc.webp"
                            alt="Website Designing & Development"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-r from-violet-900/90 via-blue-900/80 to-transparent" />

                        {/* Content */}
                        <div className="relative z-10 p-8 md:p-16 flex flex-col justify-center min-h-[400px]">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 w-fit mb-6">
                                <span className="material-symbols-outlined text-white">web</span>
                                <span className="text-sm font-semibold text-white uppercase tracking-widest">Web Development</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-liquid-glow max-w-3xl">
                                Bespoke Website Design and Strategic Development
                            </h1>
                            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                                Symbosys Technologies is Ranchi's premier digital architect, specializing in high-performance web solutions that propel modern businesses into the future.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content Section */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Introduction with Featured Image */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        <div className="glass-card rounded-3xl p-8 md:p-12">
                            <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed mb-6">
                                Our elite collective of designers and developers leverages state-of-the-art technologies to build digital platforms that are not just visually stunning, but inherently intuitive and lightning-fast. Our methodology is built on technical precision and creative audacity, ensuring your digital presence sets a new industry standard.
                            </p>
                            <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed">
                                We unite visionary design with robust engineering to bridge the gap between your brand and its audience. As Ranchi's benchmark for web excellence, we handle the full lifecycle of your project—from strategic planning and development to proactive maintenance and long-term optimization.
                            </p>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden min-h-[300px]">
                            <Image
                                src="/services/web.webp"
                                alt="Web Development Illustration"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Web Development Categories */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-8 text-center">
                            Our <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-500 via-blue-500 to-cyan-500">Web Development Categories</span>
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {webCategories.map((category, index) => (
                                <div key={index} className="glass-card rounded-xl p-4 text-center hover:-translate-y-1 transition-transform duration-300">
                                    <span className="text-text-main font-medium text-sm dark:text-white">{category}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Services Grid */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-8 text-center">
                            Our <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-500 via-blue-500 to-cyan-500">Web Development Services</span>
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <div key={index} className="group relative">
                                    <div className="absolute -inset-2 bg-linear-to-r from-violet-500/20 via-blue-500/15 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative glass-card rounded-2xl p-6 h-full">
                                        <div className="w-14 h-14 rounded-xl bg-linear-to-br from-violet-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-2xl text-white">{service.icon}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-text-main mb-3 dark:text-white">{service.title}</h3>
                                        <p className="text-text-muted text-sm leading-relaxed dark:text-gray-300">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Other Web Solutions */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-8 text-center">
                            Other Useful <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-500 via-blue-500 to-cyan-500">Web Solutions</span> We Integrate
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {webSolutions.map((solution, index) => (
                                <div key={index} className="glass-card rounded-xl p-4 flex items-center gap-3 hover:-translate-y-1 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-violet-500">check_circle</span>
                                    <span className="text-text-main font-medium text-sm dark:text-white">{solution}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="relative overflow-hidden rounded-3xl mb-16">
                        <div className="absolute inset-0 bg-linear-to-br from-violet-600 via-blue-600 to-cyan-600">
                            <div className="absolute inset-0 aurora-bg opacity-40" />
                            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl light-orb" />
                            <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-cyan-300/20 blur-3xl light-orb-slow" />
                        </div>
                        <div className="relative z-10 p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center text-liquid-glow">
                                Why Choose Our Web Design Services?
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {whyChoose.map((item, index) => (
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
                            Elevate Your Digital Presence
                        </h2>
                        <p className="text-text-muted mb-8 max-w-2xl mx-auto dark:text-gray-300">
                            We are dedicated to architecting digital platforms that prioritize your users' needs while accelerating your business growth. Let's build something extraordinary together.
                        </p>
                        <button className="px-8 py-4 rounded-full bg-linear-to-r from-violet-600 via-blue-600 to-violet-600 text-white font-bold shadow-xl shadow-violet-500/30 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 light-shimmer">
                            Start Your Project
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
