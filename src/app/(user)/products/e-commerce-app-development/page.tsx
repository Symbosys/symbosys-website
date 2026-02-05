import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "E-Commerce App Development - Symbosys Technologies",
    description: "Mobile-first shopping experiences with secure payments, real-time tracking, and seamless user experience for Android and iOS.",
};

export default function ECommerceAppDevelopmentPage() {
    return (
        <ProductLayout
            title="E-Commerce App Development"
            subtitle="by Symbosys"
            description="E-Commerce App Development is a specialized service offered by Symbosys dedicated to helping businesses create e-commerce apps that drive sales, enhance customer engagement, and streamline shopping experiences. Whether you're looking to build an e-commerce app like Amazon, Flipkart, Ajio, or OLX, Symbosys delivers high-performance, scalable mobile apps for both Android and iOS platforms."
            themeColor="#0d9488"
            gradient="from-teal-600 to-green-500"
            icon="shopping_bag"
            badge="Mobile Commerce"
            ctaTitle="Transform Your Online Store"
            ctaDescription="As expert e-commerce app developers, we provide comprehensive services in shopping app development to deliver a seamless and engaging user experience."
            sections={[
                {
                    title: "Needs Assessment and Planning",
                    icon: "assignment",
                    items: [
                        { subtitle: "Understanding Business Requirements", text: "We analyze your target market, product offerings, and unique selling propositions to tailor the app development." },
                        { subtitle: "System Planning", text: "Developing a detailed plan for features, functionalities, and integrations that make your app stand out." },
                        { subtitle: "Budget Planning", text: "Transparent budgeting covering design, development, launch, and ongoing support." }
                    ]
                },
                {
                    title: "Custom E-Commerce Design",
                    icon: "palette",
                    items: [
                        { subtitle: "Brand-Aligned Interface", text: "Creating visually appealing interfaces that reflect your brand and enhance engagement." },
                        { subtitle: "Responsive Design", text: "Optimal experience on smartphones, tablets, and desktops." },
                        { subtitle: "UX Optimization", text: "Intuitive navigation for easy browsing, cart management, and checkout." }
                    ]
                },
                {
                    title: "Core E-Commerce Features",
                    icon: "widgets",
                    items: [
                        { subtitle: "Product Catalog", text: "Comprehensive catalog with advanced search and filtering options for easy product discovery." },
                        { subtitle: "Shopping Cart & Checkout", text: "Secure, user-friendly cart and checkout process for smooth transactions." },
                        { subtitle: "Payment Gateway Integration", text: "Multiple payment options including cards, net banking, UPI, and digital wallets." }
                    ]
                },
                {
                    title: "Order and Delivery Management",
                    icon: "local_shipping",
                    items: [
                        { subtitle: "Real-Time Tracking", text: "Order tracking with live updates similar to Swiggy, Zomato, and delivery apps." },
                        { subtitle: "Inventory Sync", text: "Real-time inventory management preventing overselling and stockouts." },
                        { subtitle: "Delivery Integration", text: "Integration with shipping partners for seamless fulfillment." }
                    ]
                },
                {
                    title: "Customer Engagement Tools",
                    icon: "forum",
                    items: [
                        { subtitle: "Social Media Integration", text: "Product sharing and social login for increased reach and engagement." },
                        { subtitle: "Live Chat Support", text: "Instant customer support and query resolution within the app." },
                        { subtitle: "Reviews & Ratings", text: "Customer feedback system building trust and improving products." }
                    ]
                },
                {
                    title: "Marketing and Analytics",
                    icon: "analytics",
                    items: [
                        { subtitle: "Push Notifications", text: "Targeted notifications for promotions, cart abandonment, and personalized offers." },
                        { subtitle: "Analytics Dashboard", text: "Real-time insights into user behavior, sales performance, and inventory." },
                        { subtitle: "Loyalty Programs", text: "Rewards and loyalty features to increase customer retention." }
                    ]
                },
                {
                    title: "Security and Compliance",
                    icon: "security",
                    items: [
                        { subtitle: "Secure Transactions", text: "PCI-DSS compliant payment processing protecting customer financial data." },
                        { subtitle: "Data Protection", text: "Advanced encryption and secure authentication for all user data." }
                    ]
                },
                {
                    title: "Post-Launch Support",
                    icon: "support_agent",
                    items: [
                        { subtitle: "Technical Support", text: "Continuous support to ensure your e-commerce platform operates smoothly." },
                        { subtitle: "Feature Updates", text: "Regular updates with new features, security patches, and performance improvements." }
                    ]
                }
            ]}
        />
    );
}
