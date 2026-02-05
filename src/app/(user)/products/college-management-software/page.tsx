import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "College Management Software - Symbosys Technologies",
    description: "Enterprise-grade university management solutions to streamline administrative, academic, and operational processes.",
};

export default function CollegeManagementPage() {
    return (
        <ProductLayout
            title="College Management Software"
            subtitle="by Symbosys"
            description="College Management Software is an advanced digital solution designed by Symbosys to streamline and automate various administrative, academic, and operational processes within colleges and universities. This software integrates essential functions such as student information management, course scheduling, faculty management, and financial operations into a unified platform."
            themeColor="#0ea5e9"
            gradient="from-sky-500 to-blue-400"
            icon="account_balance"
            badge="Higher Education"
            ctaTitle="Empower Your Campus Operations"
            ctaDescription="Symbosys specializes in developing custom College Management Software that is optimized for higher education administration, student information systems, and course management."
            sections={[
                {
                    title: "Needs Assessment and Planning",
                    icon: "assignment",
                    items: [
                        { subtitle: "Understanding College Requirements", text: "We analyze administrative workflows, academic tracking, and communication requirements to tailor the software to your institution's unique challenges." },
                        { subtitle: "System Planning and Design", text: "Collaboration with administration to develop a detailed plan for features, modules, and integrations." },
                        { subtitle: "Budget Planning", text: "Assistance in establishing a budget covering design, development, implementation, and ongoing support." }
                    ]
                },
                {
                    title: "Choosing the Right Technology Stack",
                    icon: "layers",
                    items: [
                        { subtitle: "Technology Selection", text: "Recommending the best technology stack for scalability, security, and reliability in a higher education environment." },
                        { subtitle: "Hosting Solutions", text: "Guiding the selection of reliable hosting capable of handling large volumes of data and user interactions." }
                    ]
                },
                {
                    title: "Custom Software Design",
                    icon: "palette",
                    items: [
                        { subtitle: "Design Consultation", text: "Creating a visually appealing and user-friendly design that reflects your college's brand identity." },
                        { subtitle: "Responsive Design", text: "Ensuring the system is fully responsive across all devices used by faculty and students." },
                        { subtitle: "UX Optimization", text: "Designing seamless navigation for complex educational workflows." }
                    ]
                },
                {
                    title: "Development of Core Modules",
                    icon: "widgets",
                    items: [
                        { subtitle: "Student Information Management", text: "Centralizes student data, academic history, and behavior records in a robust module." },
                        { subtitle: "Course and Faculty Management", text: "Streamlines scheduling, faculty assignments, and curriculum management." },
                        { subtitle: "Gradebook and Performance Tracking", text: "Simplifies grading and allows for detailed academic performance analytics." }
                    ]
                },
                {
                    title: "Integration of Communication Tools",
                    icon: "forum",
                    items: [
                        { subtitle: "Campus Communication", text: "Messaging systems, announcements, and newsletters for students and staff." },
                        { subtitle: "Student and Faculty Portals", text: "Dedicated portals for accessing grades, schedules, assignments, and research resources." },
                        { subtitle: "Collaboration Tools", text: "Enables faculty and departments to collaborate on lesson planning and resource sharing." }
                    ]
                },
                {
                    title: "Automation and Workflow Optimization",
                    icon: "auto_settings",
                    items: [
                        { subtitle: "Automated Notifications", text: "Alerts for fee deadlines, event reminders, and academic milestones." },
                        { subtitle: "Data Analytics and Reporting", text: "Real-time insights into campus operations, student performance, and financial health." },
                        { subtitle: "Custom Workflows", text: "Automates routine tasks such as enrollment, registration, and report generation." }
                    ]
                },
                {
                    title: "Security and Data Protection",
                    icon: "security",
                    items: [
                        { subtitle: "Data Security Measures", text: "Advanced security features including encryption and role-based access control." },
                        { subtitle: "Compliance", text: "Ensuring compliance with global educational regulations and data integrity standards." }
                    ]
                },
                {
                    title: "Post-Deployment Support",
                    icon: "support_agent",
                    items: [
                        { subtitle: "Ongoing Technical Support", text: "Continuous technical support to address any issues and provide updates." },
                        { subtitle: "System Updates", text: "Regular updates with new features, security patches, and performance improvements." }
                    ]
                }
            ]}
        />
    );
}
