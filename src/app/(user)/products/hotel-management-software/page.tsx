import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "Hotel Management Software - Symbosys Technologies",
    description: "Streamline bookings and guest experiences with our comprehensive hotel management and reservation systems.",
};

export default function HotelManagementPage() {
    return (
        <ProductLayout
            title="Hotel Management Software"
            subtitle="by Symbosys"
            description="Hotel Management Software is a comprehensive digital solution designed by Symbosys to streamline and automate various operational, administrative, and guest management processes within hotels and hospitality businesses. This software integrates essential functions such as reservation management, front desk operations, billing, and guest services into a unified platform."
            themeColor="#f97316"
            gradient="from-orange-500 to-amber-400"
            icon="hotel"
            badge="Hospitality Management"
            ctaTitle="Revolutionize Your Guest Experience"
            ctaDescription="Symbosys specializes in developing custom Hotel Management Software optimized for hotel operations, guest management, and reservation systems."
            sections={[
                {
                    title: "Needs Assessment and Planning",
                    icon: "assignment",
                    items: [
                        { subtitle: "Understanding Hotel Requirements", text: "We analyze front desk operations, room management, guest services, and reservation processes to tailor the software to your needs." },
                        { subtitle: "System Planning and Design", text: "Developing a detailed plan for modules that optimize operations and enhance guest satisfaction." },
                        { subtitle: "Budget Planning", text: "Assistance in establishing a budget covering the entire development and maintenance lifecycle." }
                    ]
                },
                {
                    title: "Choosing the Right Technology Stack",
                    icon: "layers",
                    items: [
                        { subtitle: "Technology Selection", text: "Recommending the best technology stack for scalability, security, and high performance in the hospitality industry." },
                        { subtitle: "Hosting Solutions", text: "Guiding the selection of reliable hosting for fast, secure guest interactions." }
                    ]
                },
                {
                    title: "Custom Software Design",
                    icon: "palette",
                    items: [
                        { subtitle: "Design Consultation", text: "Creating a user-friendly interface that reflects your hotel's branding and is easy for both staff and guests to navigate." },
                        { subtitle: "Responsive Design", text: "Ensuring the software works perfectly on desktops, tablets, and mobile phones." },
                        { subtitle: "UX Optimization", text: "Creating intuitive navigation for seamless reservation and billing management." }
                    ]
                },
                {
                    title: "Development of Core Modules",
                    icon: "widgets",
                    items: [
                        { subtitle: "Reservation Management", text: "Robust system for online bookings, room availability, check-ins, and check-outs." },
                        { subtitle: "Front Desk Operations", text: "Managing guest check-ins, room assignments, and special requests efficiently." },
                        { subtitle: "Billing and Invoicing", text: "Automated billing and payment management for accuracy and transparency." }
                    ]
                },
                {
                    title: "Integration of Guest Tools",
                    icon: "forum",
                    items: [
                        { subtitle: "Guest Communication", text: "Messaging systems, notifications, and service requests for seamless guest support." },
                        { subtitle: "Staff Collaboration", text: "Tools for team coordination, resource sharing, and schedule management." },
                        { subtitle: "Guest Feedback", text: "Direct tools for collecting and managing guest reviews to maintain high service standards." }
                    ]
                },
                {
                    title: "Automation and Workflow Optimization",
                    icon: "auto_settings",
                    items: [
                        { subtitle: "Automated Notifications", text: "Alerts for booking confirmations, check-in reminders, and special offers." },
                        { subtitle: "Data Analytics and Reporting", text: "Insights into occupancy rates, revenue, and guest satisfaction metrics." },
                        { subtitle: "Custom Workflows", text: "Automates routine tasks such as room status updates and financial reporting." }
                    ]
                },
                {
                    title: "Security and Data Protection",
                    icon: "security",
                    items: [
                        { subtitle: "Data Security Measures", text: "Equipped with encryption and role-based access control protecting guest personal and payment data." },
                        { subtitle: "Data Integrity", text: "Ensuring safeguarding of information and operational continuity." }
                    ]
                },
                {
                    title: "Post-Deployment Support",
                    icon: "support_agent",
                    items: [
                        { subtitle: "Ongoing Technical Support", text: "Continuous support to ensure your hotel operates smoothly around the clock." },
                        { subtitle: "System Updates", text: "Regular updates with new features and performance enhancements." }
                    ]
                }
            ]}
        />
    );
}
