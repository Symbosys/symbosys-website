import Image from "next/image";

export const metadata = {
    title: "Website Designing & Development - Symbosys Technologies",
    description:
        "Symbosys is a leading website designing company in Ranchi offering top-class website designing services for various types of businesses.",
};

export default function WebsiteDesigningPage() {
    const webCategories = [
        "E-commerce Websites",
        "Web Portals",
        "Blogging Websites",
        "Informational Websites",
        "Educational Websites",
        "Business Websites",
        "Personal Websites",
        "Media Websites",
        "Entertainment Websites",
        "Directory Websites"
    ];

    const webSolutions = [
        "Mobile web Development",
        "Custom Theme Integration",
        "Chatbots",
        "Mailing System",
        "Payment Gateway Integration",
        "Web Content Management",
        "Multilanguage Support",
        "Database Driven Web Application Development"
    ];

    const services = [
        {
            icon: "code",
            title: "Web Programming",
            description: "Programming or coding is the main and base practice for every developer for creating webpages. We take every project to rigorous testing to ensure that website doesn't look only impressive but also producing the best functionality. This eventually helps to improve your brand visibility to a larger extent."
        },
        {
            icon: "design_services",
            title: "UI/UX Design",
            description: "Users only engaged on those websites which have a good interface and are easy to navigate. In order to give your website a user-friendly interface that is usable, useful, and desirable, we offer UI/UX design."
        },
        {
            icon: "article",
            title: "Content Management",
            description: "Not every developer is aware of SEO and content management that are significantly important for achieving your business goal. We offer SEO-friendly web designs that allow the content management team to plot the right type of content on every webpage."
        }
    ];

    const whyChoose = [
        { icon: "auto_awesome", title: "Sophisticated Web Design", desc: "The websites are sophisticatedly designed based on the SEO guidelines defined by Google." },
        { icon: "brush", title: "Unique Appearance", desc: "We provide a unique appearance to your website that will make your company stand out from other competitors." },
        { icon: "widgets", title: "Special Elements", desc: "Enriched with all the necessary UI and UX elements, your website becomes appealing and extremely intuitive." },
        { icon: "category", title: "Varied Designs", desc: "From real estate to ecommerce, we have designed for customers from all fields." },
        { icon: "navigation", title: "Easy Navigation", desc: "Specially designed to improve the quality of visitor communication with easy to understand navigational pathways." },
        { icon: "verified", title: "Utmost Quality", desc: "We assure nothing but the best results to our clients for their demands, along with the utmost quality." }
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
                                Website Designing and Development
                            </h1>
                            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                                Symbosys Software Service Pvt. Ltd in Ranchi is the main name in the field of offering top-class Website Designing Services for various types of businesses.
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
                                We have an exceptionally skilled group of designers and developers who utilize current innovation to make your website unique, interactive, and highly responsive. Our system is novel and immaculate from other web designing companies. Our experts are continuously striving to ensure that your aspirations and expectations are met.
                            </p>
                            <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed">
                                We put talented and creative minds on your site that assembles your business with your clients. Being a leading Website Designing Company in Ranchi, we not only offer our Website Designing and Development service for different businesses but also take care of its maintenance over a specified time horizon.
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
                            Ready to Build Your Website?
                        </h2>
                        <p className="text-text-muted mb-8 max-w-2xl mx-auto dark:text-gray-300">
                            We are centered around designing a site that works for your clients and for the development of your business too. Contact us today to get started!
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
