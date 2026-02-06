import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "E-Commerce Website Development - Symbosys Technologies",
    description: "Build robust, secure, and scalable e-commerce platforms with Symbosys. From planning to launch, we deliver custom online store solutions.",
};

export default function EcommerceProductPage() {
    return (
        <ProductLayout
            title="E-Commerce Website"
            subtitle="by Symbosys"
            description="An E-Commerce website is a specialized online platform designed by Symbosys, a leading provider of custom e-commerce website development services. Our e-commerce websites enable businesses to sell products and services online, providing a secure and user-friendly experience for customers. With features like responsive design, integrated payment gateways, and SEO optimization, Symbosys ensures your e-commerce platform meets your business needs and drives sales."
            themeColor="#3b82f6"
            gradient="from-blue-500 to-cyan-400"
            icon="shopping_cart"
            badge="E-Commerce Solutions"
            ctaTitle="Ready to Start Selling Online?"
            ctaDescription="With features like responsive design, integrated payment gateways, and SEO optimization, Symbosys ensures your e-commerce platform meets your business needs and drives sales."
            sections={[
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
            ]}
        />
    );
}

