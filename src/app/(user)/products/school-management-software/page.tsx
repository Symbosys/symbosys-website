import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "School Management Software - Symbosys Technologies",
    description: "Streamline and automate administrative and academic processes within schools with our custom School Management Software.",
};

export default function SchoolManagementPage() {
    return (
        <ProductLayout
            title="School Management Software"
            subtitle="by Symbosys"
            description="School Management Software is a powerful digital tool designed by Symbosys to streamline and automate various administrative and academic processes within schools. This software integrates key functions such as student information management, attendance tracking, gradebook management, and communication tools into a single platform, enhancing the efficiency and effectiveness of school operations."
            themeColor="#9333ea"
            gradient="from-purple-600 to-violet-500"
            icon="school"
            badge="Education Management"
            ctaTitle="Ready to Modernize Your School?"
            ctaDescription="Symbosys specializes in developing custom School Management Software that is optimized for school administration, student information management, and academic tracking."
            sections={[
                {
                    title: "Needs Assessment and Planning",
                    icon: "assignment",
                    items: [
                        { subtitle: "Understanding School Requirements", text: "Symbosys begins by understanding the specific needs of your school, including administrative workflows, academic tracking, and communication requirements." },
                        { subtitle: "System Planning and Design", text: "We collaborate with your school's administration to develop a detailed plan for the School Management Software, outlining the features, modules, and integrations." },
                        { subtitle: "Budget Planning", text: "Symbosys assists you in establishing a budget that covers all aspects of School Management Software development, from design to implementation." }
                    ]
                },
                {
                    title: "Choosing the Right Technology Stack",
                    icon: "layers",
                    items: [
                        { subtitle: "Technology Selection", text: "Symbosys recommends the best technology stack for your School Management Software, ensuring scalability, security, and reliability." },
                        { subtitle: "Hosting Solutions", text: "We guide you in selecting a reliable hosting provider that ensures your software is fast, secure, and capable of handling large volumes of data." }
                    ]
                },
                {
                    title: "Custom Software Design",
                    icon: "palette",
                    items: [
                        { subtitle: "Design Consultation", text: "We work to create a visually appealing and user-friendly design that reflects your brand identity." },
                        { subtitle: "Responsive Design", text: "Symbosys ensures your software is fully responsive across all devices." },
                        { subtitle: "UX Optimization", text: "Our UX experts design seamless navigation for staff, students, and parents." }
                    ]
                },
                {
                    title: "Development of Core Modules",
                    icon: "widgets",
                    items: [
                        { subtitle: "Student Information Management", text: "Centralizes student data, including personal details, academic history, attendance, and behavior records." },
                        { subtitle: "Attendance Tracking", text: "Allows teachers to record and monitor student attendance with automated notifications for parents." },
                        { subtitle: "Gradebook and Report Cards", text: "Simplifies the grading process, allowing teachers to input grades and generate report cards with ease." }
                    ]
                },
                {
                    title: "Integration of Communication Tools",
                    icon: "forum",
                    items: [
                        { subtitle: "Parent-Teacher Communication", text: "Facilitates seamless communication through messaging systems, announcements, and newsletters." },
                        { subtitle: "Student and Parent Portals", text: "Dedicated portals for accessing grades, schedules, assignments, and school news." },
                        { subtitle: "Teacher Collaboration Tools", text: "Enables teachers to collaborate on lesson planning and share resources." }
                    ]
                },
                {
                    title: "Automation and Workflow Optimization",
                    icon: "auto_settings",
                    items: [
                        { subtitle: "Automated Notifications", text: "Implements alerts for fee due dates, event reminders, and academic deadlines." },
                        { subtitle: "Data Analytics and Reporting", text: "Provides real-time insights into school operations, student performance, and financial health." },
                        { subtitle: "Custom Workflows", text: "Automates routine tasks such as student enrollment and report generation." }
                    ]
                },
                {
                    title: "Security and Data Protection",
                    icon: "security",
                    items: [
                        { subtitle: "Data Security Measures", text: "Equipped with data encryption, secure authentication, and role-based access control." },
                        { subtitle: "Compliance", text: "Ensures the software complies with educational regulations and standards, safeguarding student privacy." }
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
