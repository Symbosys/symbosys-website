import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "Hospital Management Software - Symbosys Technologies",
    description: "Healthcare workflow and patient management solutions to streamline clinical and operational processes in hospitals.",
};

export default function HospitalManagementPage() {
    return (
        <ProductLayout
            title="Hospital Management Software"
            subtitle="by Symbosys"
            description="Hospital Management Software is a robust digital solution designed by Symbosys to streamline and automate various administrative, clinical, and operational processes within hospitals and healthcare institutions. This software integrates essential functions such as patient information management, appointment scheduling, billing, and medical record management into a unified platform."
            themeColor="#dc2626"
            gradient="from-red-600 to-rose-500"
            icon="local_hospital"
            badge="Healthcare Management"
            ctaTitle="Enhance Patient Care with Smart Solutions"
            ctaDescription="Symbosys specializes in developing custom Hospital Management Software that is optimized for healthcare administration, patient information systems, and hospital operations."
            sections={[
                {
                    title: "Needs Assessment and Planning",
                    icon: "assignment",
                    items: [
                        { subtitle: "Understanding Hospital Requirements", text: "We analyze clinical workflows, patient care processes, and compliance requirements (like HIPAA) to tailor the system to your needs." },
                        { subtitle: "System Planning and Design", text: "Developing a detailed plan for modules that optimize operations and improve patient care standards." },
                        { subtitle: "Budget Planning", text: "Assistance in establishing a budget covering the entire development and maintenance lifecycle." }
                    ]
                },
                {
                    title: "Choosing the Right Technology Stack",
                    icon: "layers",
                    items: [
                        { subtitle: "Technology Selection", text: "Recommending the best technology stack for maximum security, uptime, and performance in critical healthcare environments." },
                        { subtitle: "Hosting Solutions", text: "Guiding the selection of secure, redundant hosting for handling sensitive medical data." }
                    ]
                },
                {
                    title: "Custom Software Design",
                    icon: "palette",
                    items: [
                        { subtitle: "User-Friendly Design", text: "Creating interfaces that are easy for doctors, nurses, and staff to navigate under pressure." },
                        { subtitle: "Responsive Design", text: "Ensuring the system is accessible on desktops, tablets, and mobile phones for real-time patient monitoring." },
                        { subtitle: "UX Optimization", text: "Intuitive navigation making it easy to manage everything from patient records to billing." }
                    ]
                },
                {
                    title: "Development of Core Modules",
                    icon: "widgets",
                    items: [
                        { subtitle: "Patient Information Management", text: "Centralized database for patient history, demographics, and treatment plans." },
                        { subtitle: "Appointment Scheduling", text: "Online booking and internal schedule management to reduce wait times and improve flow." },
                        { subtitle: "Electronic Medical Records (EMR)", text: "Secure digitization of patient records for easy access by healthcare providers." }
                    ]
                },
                {
                    title: "Integration of Communication Tools",
                    icon: "forum",
                    items: [
                        { subtitle: "Patient and Staff Portals", text: "Dedicated portals for patients to view results and for staff to manage clinical tasks." },
                        { subtitle: "Doctor-Patient Communication", text: "Secure messaging, telemedicine capabilities, and automated notifications." },
                        { subtitle: "Medical Staff Collaboration", text: "Tools for healthcare teams to collaborate on patient care and share critical updates." }
                    ]
                },
                {
                    title: "Automation and Workflow Optimization",
                    icon: "auto_settings",
                    items: [
                        { subtitle: "Automated Notifications", text: "Alerts for appointment reminders, medication schedules, and critical patient updates." },
                        { subtitle: "Data Analytics and Reporting", text: "Insights into hospital operations, staff performance, and financial health." },
                        { subtitle: "Custom Clinical Workflows", text: "Automating routine tasks like patient intake and report generation." }
                    ]
                },
                {
                    title: "Security and Data Protection",
                    icon: "security",
                    items: [
                        { subtitle: "Advanced Data Security", text: "Encryption, secure authentication, and role-based access control protecting sensitive data." },
                        { subtitle: "Compliance", text: "Ensuring compliance with healthcare regulations like HIPAA and ensuring absolute data integrity." }
                    ]
                },
                {
                    title: "Post-Deployment Support",
                    icon: "support_agent",
                    items: [
                        { subtitle: "Ongoing Technical Support", text: "Continuous support to ensure 24/7 operation of critical hospital systems." },
                        { subtitle: "System Updates", text: "Regular security patches and new features to keep the system at the forefront of healthcare tech." }
                    ]
                }
            ]}
        />
    );
}
