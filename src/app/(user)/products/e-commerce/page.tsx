import Link from "next/link";

export const metadata = {
    title: "E-Commerce Website Development - Symbosys Technologies",
    description: "Build robust, secure, and scalable e-commerce platforms with Symbosys. From planning to launch, we deliver custom online store solutions.",
};

export default function EcommerceProductPage() {
    // Theme color matching the E-commerce card: #3b82f6 (blue-500)
    const themeColor = "#3b82f6";
    const gradient = "from-blue-500 to-cyan-400";

    const sections = [
        {
            title: "Planning and Consultation",
            icon: "assignment",
            content: "Understanding Your Business Needs: Symbosys conducts an in-depth analysis of your business to understand your target market, specific e-commerce requirements, and the competitive landscape. This ensures we create a custom e-commerce solution that aligns with your goals. Setting E-Commerce Goals: We work with you to define clear objectives for your e-commerce website, such as increasing online sales, enhancing customer engagement, and expanding market reach. Budget Planning: Symbosys helps you outline a budget that includes all aspects of e-commerce website development, from initial design to ongoing maintenance."
        },
        {
            title: "Choosing the Right E-Commerce Platform",
            icon: "layers",
            items: [
                { subtitle: "Platform Selection", text: "Symbosys recommends the best e-commerce platform for your needs, whether it's Shopify, WooCommerce, Magento, or a custom-built e-commerce website. We consider factors like scalability, security, and ease of use." },
                { subtitle: "Hosting Solutions", text: "We guide you in selecting a reliable hosting provider that ensures your e-commerce website is fast, secure, and capable of handling high-traffic volumes." }
            ]
        },
        {
            title: "Domain Name and Hosting Setup",
            icon: "dns",
            items: [
                { subtitle: "Domain Name Registration", text: "Symbosys assists in choosing and registering a domain name that is memorable, brand-aligned, and optimized for search engines." },
                { subtitle: "Hosting Configuration", text: "We set up your hosting environment, ensuring it is tailored to the technical requirements of your chosen e-commerce platform and offers robust performance and security." }
            ]
        },
        {
            title: "Custom Website Design",
            icon: "palette",
            items: [
                { subtitle: "Design Consultation", text: "Our expert design team creates a visually appealing and user-friendly e-commerce website design that reflects your brand and enhances the customer experience." },
                { subtitle: "Responsive Design", text: "Symbosys ensures your e-commerce website is fully responsive, providing an optimal shopping experience on all devices, including mobile and tablet." },
                { subtitle: "UX Optimization", text: "We prioritize user experience (UX) design to create a seamless and intuitive shopping journey, increasing conversion rates and customer satisfaction." }
            ]
        },
        {
            title: "Payment Gateway Integration",
            icon: "payments",
            items: [
                { subtitle: "Secure Payment Gateways", text: "Symbosys integrates trusted payment gateways such as PayPal, Stripe, and regional options, ensuring secure and smooth transactions on your e-commerce website." },
                { subtitle: "SSL Certification", text: "We protect your website with SSL certification, enhancing security and building trust with customers by ensuring their data is safe." }
            ]
        },
        {
            title: "Shipping and Logistics Setup",
            icon: "local_shipping",
            items: [
                { subtitle: "Shipping Configuration", text: "Symbosys configures your shipping settings, including real-time rate calculations, carrier options, and delivery times, to provide your customers with transparent and reliable shipping information" }
            ]
        },
        {
            title: "Search Engine Optimization (SEO)",
            icon: "search",
            items: [
                { subtitle: "SEO Strategy", text: "Symbosys develops a comprehensive SEO strategy for your e-commerce website, including keyword research, on-page optimization, and content marketing, to improve your search engine rankings and drive organic traffic." },
                { subtitle: "Content Marketing", text: "We enhance your website's visibility by creating engaging content such as blogs and product descriptions, which are optimized for relevant keywords and designed to attract and retain customers." }
            ]
        },
        {
            title: "Website Launch",
            icon: "rocket_launch",
            items: [
                { subtitle: "Pre-Launch Review", text: "Symbosys conducts a comprehensive pre-launch review to ensure your e-commerce website is fully optimized and ready for public launch." },
                { subtitle: "Go Live", text: "We deploy your e-commerce website to the live server, making it accessible to customers worldwide, and monitor its performance closely during the initial launch phase." }
            ]
        }
    ];

    return (
        <div className="bg-surface text-text-main font-sans antialiased relative overflow-x-hidden min-h-screen">
            {/* Subtle Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-linear-to-b from-blue-50/50 via-white to-white"></div>
            </div>

            <main className="relative z-10">
                {/* Hero Section */}
                <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-8 border border-blue-100">
                            <span className="material-symbols-outlined text-lg">shopping_cart</span>
                            E-Commerce Solutions
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main mb-8 leading-tight">
                            E-Commerce Website
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
                                by Symbosys
                            </span>
                        </h1>

                        {/* Intro Paragraph - EXACT content from MD */}
                        <p className="text-text-muted text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12">
                            An E-Commerce website is a specialized online platform designed by Symbosys, a leading provider of custom e-commerce website development services. Our e-commerce websites enable businesses to sell products and services online, providing a secure and user-friendly experience for customers. With features like responsive design, integrated payment gateways, and SEO optimization, Symbosys ensures your e-commerce platform meets your business needs and drives sales.
                        </p>

                        {/* CTA */}
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Start Your Project
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            {sections.map((section, idx) => (
                                <div
                                    key={idx}
                                    className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1 transition-all duration-300"
                                >
                                    {/* Header */}
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className={`size-12 shrink-0 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                                            <span className="material-symbols-outlined text-2xl">{section.icon}</span>
                                        </div>
                                        <h2 className="text-xl font-bold text-text-main group-hover:text-blue-600 transition-colors duration-300 pt-2">
                                            {section.title}
                                        </h2>
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-5 pl-16">
                                        {section.content ? (
                                            <p className="text-text-muted text-sm leading-relaxed">
                                                {section.content}
                                            </p>
                                        ) : (
                                            section.items?.map((item, i) => (
                                                <div key={i}>
                                                    <h3 className="font-semibold text-text-main mb-1.5 text-base">
                                                        {item.subtitle}
                                                    </h3>
                                                    <p className="text-text-muted text-sm leading-relaxed">
                                                        {item.text}
                                                    </p>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl p-10 md:p-14 text-center text-white overflow-hidden">
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                            <div className="relative">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Ready to Start Selling Online?
                                </h2>
                                <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
                                    With features like responsive design, integrated payment gateways, and SEO optimization, Symbosys ensures your e-commerce platform meets your business needs and drives sales.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                                    >
                                        Get Free Quote
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </Link>
                                    <Link
                                        href="/products"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white font-bold rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300"
                                    >
                                        View All Products
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
