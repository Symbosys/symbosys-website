import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "Construction Management Software - Symbosys Technologies",
    description: "Project planning, resource allocation, and financial tracking solutions for building and civil construction projects.",
};

export default function ConstructionManagementPage() {
    return (
        <ProductLayout
            title="Construction Management Software"
            subtitle="by Symbosys"
            description="Construction Company Management Software is a comprehensive digital solution designed by Symbosys to streamline and automate various aspects of construction project management and operations. This software integrates key functions such as project planning, resource allocation, financial tracking, and reporting into a unified platform."
            themeColor="#eab308"
            gradient="from-yellow-500 to-orange-400"
            icon="construction"
            badge="Project Management"
            ctaTitle="Build Smarter, Manage Better"
            ctaDescription="Symbosys specializes in creating Construction Company Management Software optimized for civil contractors, road constructors, and large construction firms."
            sections={[
                {
                    title: "Needs Assessment and Planning",
                    icon: "assignment",
                    items: [
                        { subtitle: "Understanding Project Requirements", text: "We analyze project management, resource planning, financial management, and compliance requirements for your construction business." },
                        { subtitle: "System Planning and Design", text: "Developing a detailed plan for modules that optimize operations and enhance construction management capabilities." },
                        { subtitle: "Budget Planning", text: "Assistance in establishing a budget covering development, implementation, and ongoing support." }
                    ]
                },
                {
                    title: "Choosing the Right Technology Stack",
                    icon: "layers",
                    items: [
                        { subtitle: "Technology Selection", text: "Recommending the best technology stack for scalability, security, and performance for construction projects." },
                        { subtitle: "Cloud Solutions", text: "Guiding the selection of cloud hosting for real-time project access from any construction site." }
                    ]
                },
                {
                    title: "Custom Software Design",
                    icon: "palette",
                    items: [
                        { subtitle: "Professional Interface", text: "Creating user-friendly interfaces for project managers, engineers, and construction workers." },
                        { subtitle: "Mobile Access", text: "Fully responsive design for managing projects on the go from tablets and mobile phones." },
                        { subtitle: "UX Optimization", text: "Intuitive navigation for complex tasks like project timelines and financial reports." }
                    ]
                },
                {
                    title: "Development of Core Modules",
                    icon: "widgets",
                    items: [
                        { subtitle: "Project Management", text: "Efficient planning, scheduling, and tracking of construction projects from house to infrastructure level." },
                        { subtitle: "Resource & Equipment Management", text: "Optimizes allocation of labor, materials, and equipment across multiple construction sites." },
                        { subtitle: "Financial Management", text: "Automates budgeting, expense tracking, and real-time financial reporting." }
                    ]
                },
                {
                    title: "Communication and Collaboration",
                    icon: "forum",
                    items: [
                        { subtitle: "Team Communication", text: "Real-time updates, notifications, and issue tracking between project managers and workers." },
                        { subtitle: "Client & Stakeholder Portal", text: "Enables clients to track project progress, receive updates, and communicate with your team." },
                        { subtitle: "Document Management", text: "Centralized storage for blueprints, permits, contracts, and safety documents." }
                    ]
                },
                {
                    title: "Automation and Workflow Optimization",
                    icon: "auto_settings",
                    items: [
                        { subtitle: "Automated Notifications", text: "Alerts for project milestones, resource shortages, and compliance deadlines." },
                        { subtitle: "Data Analytics", text: "Real-time insights into construction performance, resource utilization, and financial health." },
                        { subtitle: "Custom Workflows", text: "Automates routine tasks like material ordering, timesheet approvals, and report generation." }
                    ]
                },
                {
                    title: "Security and Compliance",
                    icon: "security",
                    items: [
                        { subtitle: "Data Security", text: "Advanced encryption and secure authentication protecting project and financial data." },
                        { subtitle: "Industry Compliance", text: "Ensuring software complies with construction regulations and safety standards." }
                    ]
                },
                {
                    title: "Post-Deployment Support",
                    icon: "support_agent",
                    items: [
                        { subtitle: "Technical Support", text: "Continuous support to ensure your construction management systems operate smoothly." },
                        { subtitle: "System Updates", text: "Regular updates with new features and industry-specific enhancements." }
                    ]
                }
            ]}
        />
    );
}
