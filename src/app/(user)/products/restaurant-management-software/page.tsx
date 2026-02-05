import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "Restaurant Management Software - Symbosys Technologies",
    description: "POS, inventory, and order management solutions to streamline restaurant operations and improve customer satisfaction.",
};

export default function RestaurantManagementPage() {
    return (
        <ProductLayout
            title="Restaurant Management Software"
            subtitle="by Symbosys"
            description="Restaurant Management Software is a specialized digital solution designed by Symbosys to streamline and automate various operational, administrative, and customer service processes within restaurants and food service establishments. This software integrates key functions such as table management, order processing, billing, and inventory management into a unified platform."
            themeColor="#db2777"
            gradient="from-pink-600 to-rose-500"
            icon="restaurant"
            badge="F&B Management"
            ctaTitle="Elevate Your Restaurant's Efficiency"
            ctaDescription="Symbosys specializes in developing custom Restaurant Management Software that is optimized for restaurant operations, table management, and order processing."
            sections={[
                {
                    title: "Needs Assessment and Planning",
                    icon: "assignment",
                    items: [
                        { subtitle: "Understanding Restaurant Requirements", text: "We analyze table management, order processing, kitchen operations, and customer service needs to tailor the software." },
                        { subtitle: "System Planning and Design", text: "Developing a detailed plan for modules that optimize kitchen-to-table operations and enhance customer satisfaction." },
                        { subtitle: "Budget Planning", text: "Assistance in establishing a budget covering the entire development, implementation, and support lifecycle." }
                    ]
                },
                {
                    title: "Choosing the Right Technology Stack",
                    icon: "layers",
                    items: [
                        { subtitle: "Technology Selection", text: "Recommending the best technology stack for real-time order processing, security, and high performance." },
                        { subtitle: "Hosting Solutions", text: "Guiding the selection of reliable hosting for low-latency customer and staff interactions." }
                    ]
                },
                {
                    title: "Custom Software Design",
                    icon: "palette",
                    items: [
                        { subtitle: "User-Friendly Design", text: "Creating interfaces that are easy for waitstaff, kitchen staff, and managers to use during peak hours." },
                        { subtitle: "Responsive Design", text: "Ensuring the system works perfectly on POS terminals, tablets, and mobile devices." },
                        { subtitle: "UX Optimization", text: "Creating intuitive navigation for everything from table reservations to quick billing." }
                    ]
                },
                {
                    title: "Development of Core Modules",
                    icon: "widgets",
                    items: [
                        { subtitle: "Table & Order Management", text: "Real-time tracking of table status and seamless order routing to the kitchen." },
                        { subtitle: "POS & Billing", text: "Integrated Point of Sale system with multiple payment options and automated receipt generation." },
                        { subtitle: "Inventory Management", text: "Track raw materials and stock levels in real-time to reduce waste and optimize ordering." }
                    ]
                },
                {
                    title: "Engagement and Collaboration Tools",
                    icon: "forum",
                    items: [
                        { subtitle: "Customer Communication", text: "Order confirmations, status updates, and digital menus for better customer engagement." },
                        { subtitle: "Staff Collaboration", text: "Tools for team coordination on orders and schedule management for improved efficiency." },
                        { subtitle: "Feedback & Reviews", text: "Direct tools for collecting customer feedback to maintain high quality of service." }
                    ]
                },
                {
                    title: "Automation and Workflow Optimization",
                    icon: "auto_settings",
                    items: [
                        { subtitle: "Automated Notifications", text: "Alerts for reservation confirmations, order status, and digital loyalty programs." },
                        { subtitle: "Kitchen Display Systems", text: "Digital order displays in the kitchen to eliminate paperwork and reduce errors." },
                        { subtitle: "Custom Workflows", text: "Automates routine tasks such as inventory updates and end-of-day financial reconciliation." }
                    ]
                },
                {
                    title: "Security and Data Protection",
                    icon: "security",
                    items: [
                        { subtitle: "Safe Transactions", text: "Equipped with secure payment processing and data encryption for business and customer data." },
                        { subtitle: "Compliance", text: "Ensuring the software complies with financial and hospitality industry standards." }
                    ]
                },
                {
                    title: "Post-Deployment Support",
                    icon: "support_agent",
                    items: [
                        { subtitle: "Ongoing Technical Support", text: "Continuous technical support to ensure your restaurant never stops serving." },
                        { subtitle: "System Enhancements", text: "Regular updates with new features and performance improvements to keep you competitive." }
                    ]
                }
            ]}
        />
    );
}
