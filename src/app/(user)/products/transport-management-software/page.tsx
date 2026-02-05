import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "Transport Management Software - Symbosys Technologies",
    description: "Fleet tracking, route optimization, and logistics solutions to streamline transport operations and improve efficiency.",
};

export default function TransportManagementPage() {
    return (
        <ProductLayout
            title="Transport Management Software"
            subtitle="by Symbosys"
            description="Transport Management Software is a comprehensive digital solution designed by Symbosys to streamline and automate various operational, administrative, and logistical processes within the transport services business. This software integrates key functions such as route planning, fleet management, shipment tracking, and financial reporting into a unified platform."
            themeColor="#475569"
            gradient="from-slate-600 to-gray-500"
            icon="directions_bus"
            badge="Logistics Management"
            ctaTitle="Optimize Your Transport Network"
            ctaDescription="Symbosys specializes in creating Transport Management Software optimized for logistic companies, transport networks, and fleet operators."
            sections={[
                {
                    title: "Needs Assessment and Planning",
                    icon: "assignment",
                    items: [
                        { subtitle: "Understanding Business Requirements", text: "We analyze fleet management needs, route optimization goals, cargo tracking, and financial management requirements." },
                        { subtitle: "System Planning and Design", text: "Developing a detailed plan for modules that optimize operations across road, air, and water transport sectors." },
                        { subtitle: "Budget Planning", text: "Assistance in establishing a budget covering the entire development and implementation cycle." }
                    ]
                },
                {
                    title: "Choosing the Right Technology Stack",
                    icon: "layers",
                    items: [
                        { subtitle: "Technology Selection", text: "Recommending the best technology stack for real-time tracking, security, and high performance." },
                        { subtitle: "Fleet Connectivity", text: "Guiding the selection of hosting and integration tools for real-time GPS and vehicle data handling." }
                    ]
                },
                {
                    title: "Custom Software Design",
                    icon: "palette",
                    items: [
                        { subtitle: "Professional Interface", text: "Creating a user-friendly interface that reflects your transport brand and is easy for dispatchers and managers to use." },
                        { subtitle: "Mobile Access", text: "Ensuring the system is fully responsive for drivers and field staff to access on mobile devices." },
                        { subtitle: "UX Optimization", text: "Designing intuitive navigation for complex tasks like route planning and shipment tracking." }
                    ]
                },
                {
                    title: "Development of Core Modules",
                    icon: "widgets",
                    items: [
                        { subtitle: "Fleet Management", text: "Efficient tracking, maintenance scheduling, and management of vehicles across various transport sectors." },
                        { subtitle: "Route & Shipment Planning", text: "Optimizing delivery routes to reduce fuel consumption and ensure timely deliveries." },
                        { subtitle: "Shipment Tracking", text: "Real-time updates on cargo status for both logistic companies and their customers." }
                    ]
                },
                {
                    title: "Communication and Collaboration",
                    icon: "forum",
                    items: [
                        { subtitle: "Driver & Dispatcher Tools", text: "Seamless communication tools for real-time updates, notifications, and emergency alerts." },
                        { subtitle: "Customer Tracking Portal", text: "Enables customers to track shipments, receive updates, and communicate with support teams." },
                        { subtitle: "Team Management", text: "Enables management teams to collaborate on routes, share resources, and monitor performance." }
                    ]
                },
                {
                    title: "Automation and Workflow Optimization",
                    icon: "auto_settings",
                    items: [
                        { subtitle: "Automated Notifications", text: "Alerts for shipment status changes, maintenance reminders, and route deviations." },
                        { subtitle: "Custom Workflows", text: "Automates routine tasks such as route planning, cargo tracking, and financial reconciliations." },
                        { subtitle: "Data Analytics", text: "Insights into vehicle performance, shipment accuracy, and operational financial health." }
                    ]
                },
                {
                    title: "Security and Data Protection",
                    icon: "security",
                    items: [
                        { subtitle: "Business Data Security", text: "Advanced encryption and secure authentication protecting sensitive transport and logistics data." },
                        { subtitle: "Operational Integrity", text: "Ensuring compliance with industry standards and safeguarding operations from unauthorized access." }
                    ]
                },
                {
                    title: "Post-Deployment Support",
                    icon: "support_agent",
                    items: [
                        { subtitle: "Technical Support", text: "Continuous technical support to ensure your transport network never stops moving." },
                        { subtitle: "System Enhancements", text: "Regular updates with latest technology trends in transport and logistics sectors." }
                    ]
                }
            ]}
        />
    );
}
