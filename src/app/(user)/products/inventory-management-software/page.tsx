import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "Inventory Management Software - Symbosys Technologies",
    description: "Real-time stock and warehouse control solutions to streamline inventory operations and optimize supply chain management.",
};

export default function InventoryManagementPage() {
    return (
        <ProductLayout
            title="Inventory Management Software"
            subtitle="by Symbosys"
            description="Inventory Management Software is a robust digital solution designed by Symbosys to streamline and automate various aspects of inventory control and warehouse operations. This software integrates key functions such as stock tracking, order management, warehouse management, and reporting into a unified platform, enhancing the efficiency and accuracy of managing your inventory."
            themeColor="#84cc16"
            gradient="from-lime-500 to-green-400"
            icon="inventory_2"
            badge="Warehouse Management"
            ctaTitle="Take Control of Your Inventory"
            ctaDescription="Symbosys specializes in creating Inventory Management Software optimized for businesses of all sizes, providing comprehensive solutions for inventory monitoring systems, warehouse management, and manufacturing inventory management systems."
            sections={[
                {
                    title: "Needs Assessment and Planning",
                    icon: "assignment",
                    items: [
                        { subtitle: "Understanding Business Requirements", text: "We analyze stock management, order processing, warehouse operations, and reporting requirements to tailor the software to your needs." },
                        { subtitle: "System Planning and Design", text: "Developing a detailed plan for modules that optimize operations and enhance your inventory control capabilities." },
                        { subtitle: "Budget Planning", text: "Assistance in establishing a budget covering all aspects of development, implementation, and ongoing support." }
                    ]
                },
                {
                    title: "Choosing the Right Technology Stack",
                    icon: "layers",
                    items: [
                        { subtitle: "Technology Selection", text: "Recommending the best technology stack for scalability, security, and high performance in inventory operations." },
                        { subtitle: "Hosting Solutions", text: "Guiding the selection of reliable hosting for fast, secure data handling across multiple warehouses." }
                    ]
                },
                {
                    title: "Custom Software Design",
                    icon: "palette",
                    items: [
                        { subtitle: "User-Friendly Interface", text: "Creating interfaces that are easy for staff, managers, and warehouse operators to navigate." },
                        { subtitle: "Responsive Design", text: "Ensuring the software works perfectly on desktops, tablets, and mobile devices for warehouse floor operations." },
                        { subtitle: "UX Optimization", text: "Intuitive navigation for managing stock levels, orders, and warehouse operations." }
                    ]
                },
                {
                    title: "Development of Core Modules",
                    icon: "widgets",
                    items: [
                        { subtitle: "Stock Management", text: "Efficient tracking, updating, and real-time monitoring of stock levels across multiple locations." },
                        { subtitle: "Warehouse Management System", text: "Optimizes inventory storage, picking, packing, and shipping operations." },
                        { subtitle: "Inventory Monitoring", text: "Real-time visibility into inventory levels with automated low stock alerts." }
                    ]
                },
                {
                    title: "Communication and Collaboration",
                    icon: "forum",
                    items: [
                        { subtitle: "Supplier Communication Tools", text: "Seamless communication for order confirmations, delivery schedules, and issue resolution." },
                        { subtitle: "Staff Collaboration", text: "Tools for warehouse staff and managers to collaborate on tasks and manage schedules." },
                        { subtitle: "Order Tracking", text: "Real-time tracking of incoming and outgoing shipments for complete visibility." }
                    ]
                },
                {
                    title: "Automation and Workflow Optimization",
                    icon: "auto_settings",
                    items: [
                        { subtitle: "Automated Alerts", text: "Notifications for reorder points, shipment arrivals, and stock discrepancies." },
                        { subtitle: "Data Analytics", text: "Real-time insights into inventory performance, stock levels, and order accuracy." },
                        { subtitle: "Custom Workflows", text: "Automates routine tasks such as stock replenishment, order processing, and inventory audits." }
                    ]
                },
                {
                    title: "Security and Compliance",
                    icon: "security",
                    items: [
                        { subtitle: "Data Security", text: "Advanced encryption and role-based access control protecting sensitive inventory data." },
                        { subtitle: "Industry Compliance", text: "Ensuring the software complies with industry regulations and data integrity standards." }
                    ]
                },
                {
                    title: "Post-Deployment Support",
                    icon: "support_agent",
                    items: [
                        { subtitle: "Technical Support", text: "Continuous support to ensure your inventory operations run smoothly." },
                        { subtitle: "System Updates", text: "Regular updates with new features and performance improvements." }
                    ]
                }
            ]}
        />
    );
}
