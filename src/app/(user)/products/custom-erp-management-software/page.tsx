import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "Custom ERP Management Software - Symbosys Technologies",
    description: "Tailored enterprise resource planning solutions to optimize workflows, enhance productivity, and provide real-time business insights.",
};

export default function CustomERPManagementPage() {
    return (
        <ProductLayout
            title="Custom ERP Management Software"
            subtitle="by Symbosys"
            description="ERP Software (Enterprise Resource Planning) is an integrated management system designed to streamline and automate various business processes across departments, including finance, HR, supply chain, and operations. Symbosys specializes in custom ERP software development that meets the unique needs of businesses."
            themeColor="#4b2bee"
            gradient="from-brand to-indigo-500"
            icon="settings_suggest"
            badge="Enterprise Solutions"
            ctaTitle="Transform Your Business Operations"
            ctaDescription="Our custom ERP systems are designed to optimize workflows, enhance productivity, and provide real-time insights, making us the best ERP software development company for businesses."
            sections={[
                {
                    title: "Needs Assessment and Planning",
                    icon: "assignment",
                    items: [
                        { subtitle: "Understanding Business Requirements", text: "We analyze your operational workflows, data management, and reporting needs to create a tailored ERP solution." },
                        { subtitle: "System Planning and Design", text: "Developing a detailed plan for modules and integrations that will optimize business processes." },
                        { subtitle: "Budget Planning", text: "Assistance in establishing a budget covering all aspects of custom ERP development and support." }
                    ]
                },
                {
                    title: "Choosing the Right Technology Stack",
                    icon: "layers",
                    items: [
                        { subtitle: "Technology Selection", text: "Recommending the best technology stack for scalability, security, and performance across all business functions." },
                        { subtitle: "Integration Architecture", text: "Designing seamless integration with existing systems and third-party applications." }
                    ]
                },
                {
                    title: "Custom Software Design",
                    icon: "palette",
                    items: [
                        { subtitle: "Enterprise Interface", text: "Creating professional interfaces that are intuitive for all departments and user levels." },
                        { subtitle: "Responsive Design", text: "Ensuring the ERP works perfectly on all devices for maximum accessibility." },
                        { subtitle: "UX Optimization", text: "Streamlined navigation for complex enterprise workflows and data management." }
                    ]
                },
                {
                    title: "Development of Core ERP Modules",
                    icon: "widgets",
                    items: [
                        { subtitle: "Financial Management", text: "Automates accounting, budgeting, and financial reporting with real-time insights." },
                        { subtitle: "Supply Chain Management", text: "Optimizes procurement, inventory management, and logistics operations." },
                        { subtitle: "Human Resources Management", text: "Streamlines employee management, payroll processing, and performance tracking." }
                    ]
                },
                {
                    title: "Communication and CRM Integration",
                    icon: "forum",
                    items: [
                        { subtitle: "Team Communication", text: "Seamless communication across departments with real-time updates and collaboration platforms." },
                        { subtitle: "Customer Relationship Management", text: "Integrated CRM tools for managing customer interactions, sales, and service delivery." },
                        { subtitle: "Supplier Communication", text: "Efficient communication with suppliers for smooth transactions and relationship management." }
                    ]
                },
                {
                    title: "Automation and Workflow Optimization",
                    icon: "auto_settings",
                    items: [
                        { subtitle: "Process Automation", text: "Automates approval workflows, notifications, and repetitive tasks across departments." },
                        { subtitle: "Business Intelligence", text: "Real-time dashboards and analytics for data-driven decision making." },
                        { subtitle: "Custom Workflows", text: "Tailored workflows that match your unique business processes and requirements." }
                    ]
                },
                {
                    title: "Security and Compliance",
                    icon: "security",
                    items: [
                        { subtitle: "Enterprise Security", text: "Advanced encryption, multi-factor authentication, and role-based access control." },
                        { subtitle: "Regulatory Compliance", text: "Ensuring the ERP complies with industry regulations and data protection standards." }
                    ]
                },
                {
                    title: "Post-Deployment Support",
                    icon: "support_agent",
                    items: [
                        { subtitle: "Technical Support", text: "Continuous support to ensure your ERP system operates at peak efficiency." },
                        { subtitle: "System Evolution", text: "Regular updates and module additions as your business grows and evolves." }
                    ]
                }
            ]}
        />
    );
}
