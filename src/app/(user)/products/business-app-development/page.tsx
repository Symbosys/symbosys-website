import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "Business App Development - Symbosys Technologies",
    description: "Powerful enterprise productivity tools and custom mobile apps that drive business growth and efficiency for Android and iOS.",
};

export default function BusinessAppDevelopmentPage() {
    return (
        <ProductLayout
            title="Business App Development"
            subtitle="by Symbosys"
            description="Business App Development is a specialized service offered by Symbosys, a leading mobile software development company, dedicated to creating powerful and user-friendly mobile apps that drive business growth and efficiency. Whether you're looking to build an app for your business or need a comprehensive solution that enhances operations, Symbosys delivers high-performance mobile apps for both Android and iOS platforms."
            themeColor="#6366f1"
            gradient="from-indigo-500 to-purple-500"
            icon="business_center"
            badge="Enterprise Productivity"
            ctaTitle="Transform Your Business Operations"
            ctaDescription="As one of the top mobile app development companies, we offer end-to-end mobile application development services that ensure a seamless and engaging user experience."
            sections={[
                {
                    title: "Needs Assessment and Planning",
                    icon: "assignment",
                    items: [
                        { subtitle: "Understanding Business Needs", text: "We analyze your business needs, target audience, and objectives to tailor the app development to enhance operational efficiency." },
                        { subtitle: "App Planning and Design", text: "Developing a detailed plan for features, functionalities, and integrations that make your app stand out." },
                        { subtitle: "Budget Planning", text: "Establishing a budget covering all aspects from design and development to launch and ongoing support." }
                    ]
                },
                {
                    title: "Technology Stack Selection",
                    icon: "layers",
                    items: [
                        { subtitle: "Technology Selection", text: "Recommending the best technology stack including frameworks, databases, and APIs for scalability, security, and performance." },
                        { subtitle: "Platform Selection", text: "Guiding you to target Android, iOS, or both with seamless cross-device experience." }
                    ]
                },
                {
                    title: "Custom Business App Design",
                    icon: "palette",
                    items: [
                        { subtitle: "UI/UX Design", text: "Creating visually appealing interfaces that simplify business processes and improve productivity." },
                        { subtitle: "Responsive Design", text: "Optimal experience on all devices including smartphones, tablets, and desktops." },
                        { subtitle: "UX Optimization", text: "Intuitive navigation for accessing features, managing tasks, and interacting with your platform." }
                    ]
                },
                {
                    title: "Core Business Features",
                    icon: "task_alt",
                    items: [
                        { subtitle: "Task Management & Collaboration", text: "Comprehensive tools to help teams stay organized, manage projects, and collaborate efficiently." },
                        { subtitle: "Customer Relationship Management", text: "CRM features to manage customer interactions, track sales, and improve customer service." },
                        { subtitle: "Inventory & Order Management", text: "Systems that streamline supply chain, track orders, and manage stock levels in real time." }
                    ]
                },
                {
                    title: "Business Tools Integration",
                    icon: "integration_instructions",
                    items: [
                        { subtitle: "Analytics & Reporting", text: "Advanced analytics tools providing real-time insights into business performance and customer behavior." },
                        { subtitle: "Multi-Platform Integration", text: "Seamless integration with other platforms and tools for a cohesive digital ecosystem." },
                        { subtitle: "Notifications & Alerts", text: "Automated alerts for task reminders, order updates, and customer inquiries." }
                    ]
                },
                {
                    title: "Automation & Workflow Optimization",
                    icon: "auto_settings",
                    items: [
                        { subtitle: "Process Automation", text: "Automated notifications for payment reminders, inventory updates, and task deadlines." },
                        { subtitle: "Data Analytics", text: "Real-time insights for data-driven decisions to optimize your app's success." },
                        { subtitle: "Custom Workflows", text: "Automation of order processing, customer follow-ups, and report generation for improved efficiency." }
                    ]
                },
                {
                    title: "Security & Compliance",
                    icon: "security",
                    items: [
                        { subtitle: "Enterprise Security", text: "Advanced encryption, secure authentication, and compliance with industry regulations for sensitive business data." },
                        { subtitle: "Industry Compliance", text: "Ensuring the app complies with standards and regulations, safeguarding business and user data integrity." }
                    ]
                },
                {
                    title: "Post-Launch Support",
                    icon: "support_agent",
                    items: [
                        { subtitle: "Ongoing Technical Support", text: "Continuous support to address issues, provide updates, and ensure smooth operation." },
                        { subtitle: "System Updates", text: "Regular updates with new features, security patches, and performance improvements." }
                    ]
                }
            ]}
        />
    );
}
