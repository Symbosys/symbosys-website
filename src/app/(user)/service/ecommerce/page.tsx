import Image from "next/image";

export const metadata = {
    title: "E-Commerce / MLM / CMS - Symbosys Technologies",
    description:
        "Symbosys offers comprehensive E-commerce, MLM, and CMS solutions to help you establish and grow your online business with ease.",
};

export default function EcommercePage() {
    const ecommerceFeatures = [
        { icon: "public", title: "Global Reach", desc: "Peddle your wares to patrons across the globe with effortless ease" },
        { icon: "home", title: "Shop from Home", desc: "Customers can peruse and procure goods from the comfort of their abodes" },
        { icon: "inventory_2", title: "Product Diversity", desc: "Offer a plethora of options hitherto unseen in traditional stores" },
        { icon: "payments", title: "Flexible Pricing", desc: "Complete flexibility concerning pricing and product offerings" }
    ];

    const mlmFeatures = [
        { icon: "group_add", title: "Network Building", desc: "Cultivate a robust network of recruits for passive income" },
        { icon: "attach_money", title: "Commission Earning", desc: "Accrue commissions through direct sales and recruitment" },
        { icon: "trending_up", title: "Residual Earnings", desc: "Bask in residual earnings over time" },
        { icon: "groups", title: "Team Growth", desc: "Empower individuals through hierarchical lineage" }
    ];

    const cmsFeatures = [
        { icon: "edit", title: "Content Updates", desc: "Seamlessly update your website content" },
        { icon: "inventory", title: "Product Management", desc: "Efficiently manage products and services" },
        { icon: "analytics", title: "Sales Tracking", desc: "Track and analyze sales performance" },
        { icon: "speed", title: "Website Optimization", desc: "Optimize your website for better performance" }
    ];

    return (
        <div className="bg-surface text-text-main font-sans antialiased selection:bg-brand/20 selection:text-brand relative overflow-x-hidden min-h-screen">
            {/* Liquid Light Immersive Background Canvas */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[15%] -left-[10%] w-[70vw] h-[70vw] bg-linear-to-br from-amber-400/15 via-orange-400/10 to-yellow-400/15 rounded-full blur-3xl light-orb" />
                <div className="absolute -bottom-[15%] -right-[10%] w-[60vw] h-[60vw] bg-linear-to-tl from-yellow-400/12 via-amber-400/10 to-orange-400/15 rounded-full blur-3xl light-orb-slow" />
                <div className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] bg-linear-to-r from-orange-400/10 via-transparent to-amber-400/10 rounded-full blur-3xl ripple-light" />
                <div className="absolute inset-0 aurora-bg opacity-30" />
                <div className="absolute inset-0 bg-white/30 backdrop-blur-xs" />
            </div>

            <main className="relative z-10 pt-32 pb-20">
                {/* Hero Section with Background Image */}
                <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="relative overflow-hidden rounded-3xl min-h-[400px]">
                        {/* Background Image */}
                        <Image
                            src="/services/ecomm.webp"
                            alt="E-Commerce Solutions"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-r from-amber-900/90 via-orange-900/80 to-transparent" />

                        {/* Content */}
                        <div className="relative z-10 p-8 md:p-16 flex flex-col justify-center min-h-[400px]">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 w-fit mb-6">
                                <span className="material-symbols-outlined text-white">shopping_cart</span>
                                <span className="text-sm font-semibold text-white uppercase tracking-widest">E-Commerce / MLM / CMS</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-liquid-glow max-w-3xl">
                                E-Commerce / MLM / CMS Solutions
                            </h1>
                            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                                Whether your aspirations lean towards establishing an e-commerce empire, delving into multi-level marketing ventures, or crafting your content management system, there's a world of opportunity awaiting you.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content Section */}
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Introduction */}
                    <div className="glass-card rounded-3xl p-8 md:p-12 mb-16">
                        <p className="text-lg text-text-muted leading-relaxed text-center max-w-4xl mx-auto">
                            Are you contemplating entering the realm of online business but feeling overwhelmed by the options? Fear not, for you've stumbled upon the perfect guide! In this comprehensive discourse, we'll unravel the intricacies of E-commerce, MLM, and CMS.
                        </p>
                    </div>

                    {/* E-Commerce Section */}
                    <div className="mb-16">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 via-orange-500 to-yellow-500">E-Commerce</span>
                            </h2>
                            <p className="text-text-muted max-w-4xl mx-auto">
                                E-commerce stands as a beacon of innovation in the retail landscape, bestowing upon consumers the power to peruse and procure goods from the comfort of their abodes. With a mere few clicks, the coveted items can be whisked to their doorsteps!
                            </p>
                        </div>
                        <div className="glass-card rounded-3xl p-8 md:p-12 mb-8">
                            <p className="text-lg text-text-muted leading-relaxed text-center">
                                The allure of online shopping lies in its unparalleled convenience and accessibility, catering to the needs of time-strapped individuals yearning to evade the throngs of bustling stores. A quintessential advantage of E-commerce lies in its global reach – enterprises can now peddle their wares to patrons across the globe with effortless ease. This erases geographical constraints, unfurling new vistas of growth and expansion.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {ecommerceFeatures.map((feature, index) => (
                                <div key={index} className="group relative">
                                    <div className="absolute -inset-2 bg-linear-to-r from-amber-500/20 via-orange-500/15 to-yellow-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative glass-card rounded-2xl p-6 h-full text-center">
                                        <div className="w-14 h-14 rounded-xl bg-linear-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-2xl text-white">{feature.icon}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-text-main mb-2">{feature.title}</h3>
                                        <p className="text-text-muted text-sm">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* MLM Section */}
                    <div className="relative overflow-hidden rounded-3xl mb-16">
                        <div className="absolute inset-0 bg-linear-to-br from-amber-600 via-orange-600 to-yellow-600">
                            <div className="absolute inset-0 aurora-bg opacity-40" />
                            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl light-orb" />
                            <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-amber-300/20 blur-3xl light-orb-slow" />
                        </div>
                        <div className="relative z-10 p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center text-liquid-glow">
                                MLM (Multi-Level Marketing)
                            </h2>
                            <p className="text-white/90 text-center max-w-4xl mx-auto mb-8">
                                Multi-level marketing epitomizes a business paradigm reliant on a network of distributors to propel a company's sales trajectory skyward. This marketing modality empowers individuals to amass income through direct sales and the recruitment of newfangled distributors into their hierarchical lineage.
                            </p>
                            <p className="text-white/80 text-center max-w-4xl mx-auto mb-8">
                                MLM entities often proffer products or services that distributors can peddle to accrue commissions. However, the crux of MLM's allure lies in its potential to yield passive income streams. By cultivating a robust network of recruits who in turn vend products or enlist additional participants, individuals can bask in residual earnings over time.
                            </p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {mlmFeatures.map((feature, index) => (
                                    <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors text-center">
                                        <span className="material-symbols-outlined text-3xl text-white mb-4 block">{feature.icon}</span>
                                        <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                        <p className="text-white/80 text-sm">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CMS Section */}
                    <div className="mb-16">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 via-orange-500 to-yellow-500">CMS</span> (Content Management System)
                            </h2>
                            <p className="text-text-muted max-w-4xl mx-auto">
                                In the realm of efficacious online business management, a stalwart Content Management System (CMS) emerges as an indispensable asset. Whether presiding over an E-commerce emporium or navigating the labyrinthine avenues of MLM enterprises, a robust CMS can streamline operations and elevate user experience to unprecedented echelons.
                            </p>
                        </div>
                        <div className="glass-card rounded-3xl p-8 md:p-12 mb-8">
                            <p className="text-lg text-text-muted leading-relaxed text-center">
                                With the apt CMS at one's disposal, content updates, product/service management, sales performance tracking, and website optimization become a seamless affair.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {cmsFeatures.map((feature, index) => (
                                <div key={index} className="group relative">
                                    <div className="absolute -inset-2 bg-linear-to-r from-amber-500/20 via-orange-500/15 to-yellow-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative glass-card rounded-2xl p-6 h-full text-center">
                                        <div className="w-14 h-14 rounded-xl bg-linear-to-br from-orange-500 to-yellow-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-2xl text-white">{feature.icon}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-text-main mb-2">{feature.title}</h3>
                                        <p className="text-text-muted text-sm">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center glass-card rounded-3xl p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-4">
                            Ready to Start Your Online Business?
                        </h2>
                        <p className="text-text-muted mb-8 max-w-2xl mx-auto">
                            Let Symbosys help you build your E-commerce empire, MLM network, or CMS solution. Contact us today to get started on your journey to online success.
                        </p>
                        <button className="px-8 py-4 rounded-full bg-linear-to-r from-amber-600 via-orange-600 to-amber-600 text-white font-bold shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 light-shimmer">
                            Start Your Online Business
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
