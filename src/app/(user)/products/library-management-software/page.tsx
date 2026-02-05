import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "Library Management Software - Symbosys Technologies",
    description: "Digital cataloging and lending systems to streamline library operations and improve user experiences.",
};

export default function LibraryManagementPage() {
    return (
        <ProductLayout
            title="Library Management Software"
            subtitle="by Symbosys"
            description="Library Management Software is a specialized digital solution designed by Symbosys to streamline and automate various administrative and operational tasks within libraries. This software integrates key functions such as cataloging, member management, book circulation, and inventory tracking into a unified platform."
            themeColor="#16a34a"
            gradient="from-green-600 to-emerald-500"
            icon="local_library"
            badge="Resource Management"
            ctaTitle="Organize Your Knowledge Assets"
            ctaDescription="Symbosys is committed to delivering Library Management Software that is optimized for library operations, member management, and inventory control."
            sections={[
                {
                    title: "Needs Assessment and Planning",
                    icon: "assignment",
                    items: [
                        { subtitle: "Understanding Library Requirements", text: "We analyze cataloging needs, member management processes, circulation workflows, and reporting requirements." },
                        { subtitle: "System Planning and Design", text: "Developing a detailed plan for modules that optimize library operations and enhance user satisfaction." },
                        { subtitle: "Budget Planning", text: "Assistance in establishing a budget covering design, development, implementation, and ongoing support." }
                    ]
                },
                {
                    title: "Choosing the Right Technology Stack",
                    icon: "layers",
                    items: [
                        { subtitle: "Technology Selection", text: "Recommending the best technology stack for large-scale data handling, security, and performance." },
                        { subtitle: "Hosting Solutions", text: "Guiding the selection of reliable hosting for fast book searches and member interactions." }
                    ]
                },
                {
                    title: "Custom Software Design",
                    icon: "palette",
                    items: [
                        { subtitle: "Design Consultation", text: "Creating a user-friendly interface that reflects your library's brand and is easy for both staff and members to navigate." },
                        { subtitle: "Responsive Design", text: "Ensuring the software is fully responsive on desktops, tablets, and mobile phones for easy searching on-the-go." },
                        { subtitle: "UX Optimization", text: "Intuitive navigation making it easy to access everything from book searches to member accounts." }
                    ]
                },
                {
                    title: "Development of Core Modules",
                    icon: "widgets",
                    items: [
                        { subtitle: "Cataloging and Classification", text: "Efficient categorization, indexing, and retrieval of library materials (books, digital media, etc.)." },
                        { subtitle: "Member Management", text: "Handles registration, profile management, and borrowing history for a seamless user experience." },
                        { subtitle: "Circulation and Inventory", text: "Tracks borrowing, returning, and reservation of materials while managing stock levels automatically." }
                    ]
                },
                {
                    title: "Integration of Engagement Tools",
                    icon: "forum",
                    items: [
                        { subtitle: "Staff Collaboration Tools", text: "Enables library staff to collaborate on cataloging, event planning, and collection management." },
                        { subtitle: "Member Communication", text: "Automated due date reminders, new arrival alerts, and community event announcements." },
                        { subtitle: "Feedback Systems", text: "Direct tools for members to provide feedback and suggest new materials for the collection." }
                    ]
                },
                {
                    title: "Automation and Workflow Optimization",
                    icon: "auto_settings",
                    items: [
                        { subtitle: "Automated Lending", text: "Self-checkout and return systems to reduce staff workload and improve member convenience." },
                        { subtitle: "Data Analytics and Reporting", text: "Insights into library usage, member activity, and resource popularity to inform acquisitions." },
                        { subtitle: "Custom Workflow", text: "Automates routine tasks such as inventory audits and overdue fine calculations." }
                    ]
                },
                {
                    title: "Security and Data Protection",
                    icon: "security",
                    items: [
                        { subtitle: "Member Privacy", text: "Advanced security features to protect sensitive member data and borrowing history." },
                        { subtitle: "Data Integrity", text: "Ensuring the catalog and inventory data are accurate and protected against unauthorized access." }
                    ]
                },
                {
                    title: "Post-Deployment Support",
                    icon: "support_agent",
                    items: [
                        { subtitle: "Ongoing Technical Support", text: "Continuous support to ensure your library operations remain uninterrupted." },
                        { subtitle: "System Updates", text: "Regular updates with new features and digital library capabilities." }
                    ]
                }
            ]}
        />
    );
}
