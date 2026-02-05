import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "Real Estate Management Software - Symbosys Technologies",
    description: "Property listings, tenant tracking, and CRM solutions to streamline real estate operations and financial management.",
};

export default function RealEstateManagementPage() {
    return (
        <ProductLayout
            title="Real Estate Management Software"
            subtitle="by Symbosys"
            description="Real Estate Management Software is a powerful digital tool designed by Symbosys to streamline and automate various operational, administrative, and financial processes within the real estate industry. This software integrates essential functions such as property management, tenant tracking, lease management, and financial reporting into a unified platform."
            themeColor="#0891b2"
            gradient="from-cyan-600 to-teal-500"
            icon="apartment"
            badge="Property Management"
            ctaTitle="Master Your Property Portfolio"
            ctaDescription="Symbosys specializes in creating Real Estate Management Software that is optimized for real estate businesses, offering a comprehensive solution for managing properties across multiple locations."
            sections={[
                {
                    title: "Needs Assessment and Planning",
                    icon: "assignment",
                    items: [
                        { subtitle: "Understanding Business Requirements", text: "We analyze property management needs, tenant relations, financial tracking, and reporting goals." },
                        { subtitle: "System Planning and Design", text: "Developing a detailed plan for modules that optimize operations and enhance your management capabilities." },
                        { subtitle: "Budget Planning", text: "Assistance in establishing a budget covering the entire development and maintenance cycles." }
                    ]
                },
                {
                    title: "Choosing the Right Technology Stack",
                    icon: "layers",
                    items: [
                        { subtitle: "Technology Selection", text: "Recommending the best technology stack for scalability, high security, and performance across portfolios." },
                        { subtitle: "Cloud Solutions", text: "Guiding the selection of cloud-based hosting for real-time access to property data from anywhere." }
                    ]
                },
                {
                    title: "Custom Software Design",
                    icon: "palette",
                    items: [
                        { subtitle: "Design Consultation", text: "Creating a professional interface that reflects your brand and is easy for staff and tenants to navigate." },
                        { subtitle: "Responsive Design", text: "Ensuring the software works perfectly on desktops for office staff and mobile devices for agents in the field." },
                        { subtitle: "UX Optimization", text: "Intuitive navigation for managing property listings, maintenance, and financial reports." }
                    ]
                },
                {
                    title: "Development of Core Modules",
                    icon: "widgets",
                    items: [
                        { subtitle: "Property Management", text: "Robust system for tracking, maintenance, and detailed management of residential and commercial properties." },
                        { subtitle: "Tenant & Lease Management", text: "Handles tenant profiles, digital lease agreements, rent tracking, and automated renewals." },
                        { subtitle: "Financial Accounting", text: "Automated invoicing, payment collection, expense tracking, and transparent financial reporting." }
                    ]
                },
                {
                    title: "Communication and Collaboration Tools",
                    icon: "forum",
                    items: [
                        { subtitle: "Tenant Portals", text: "Dedicated portals for tenants to pay rent, submit maintenance requests, and receive updates." },
                        { subtitle: "Staff Collaboration", text: "Tools for management teams to collaborate on tasks, share inventory, and coordinate property visits." },
                        { subtitle: "Owner Reporting", text: "Secure dashboards for property owners to view performance and financial summaries." }
                    ]
                },
                {
                    title: "Automation and Workflow Optimization",
                    icon: "auto_settings",
                    items: [
                        { subtitle: "Automated Notifications", text: "Alerts for rent due dates, lease expirations, and scheduled maintenance tasks." },
                        { subtitle: "Lease Renewals", text: "Automated workflows for generating and tracking lease renewal documents and agreements." },
                        { subtitle: "Data Analytics", text: "Real-time insights into occupancy, ROI, and financial performance across properties." }
                    ]
                },
                {
                    title: "Security and Data Protection",
                    icon: "security",
                    items: [
                        { subtitle: "Data Security", text: "Advanced encryption and role-based permissions protecting sensitive tenant data and financial records." },
                        { subtitle: "Compliance", text: "Ensuring the software follows real estate data standards and privacy regulations." }
                    ]
                },
                {
                    title: "Post-Deployment Support",
                    icon: "support_agent",
                    items: [
                        { subtitle: "Ongoing Technical Support", text: "Continuous support to ensure your property management operations are always online." },
                        { subtitle: "System Updates", text: "Regular updates with new features and enhancements to keep your business at the cutting edge." }
                    ]
                }
            ]}
        />
    );
}
