import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "Finance App Development - Symbosys Technologies",
    description: "Secure fintech and banking solutions with loan lending, budgeting, and investment management features for Android and iOS.",
};

export default function FinanceAppDevelopmentPage() {
    return (
        <ProductLayout
            title="Finance App Development"
            subtitle="by Symbosys"
            description="Finance App Development is a specialized service offered by Symbosys, a leading financial app development company, dedicated to creating secure, efficient, and user-friendly apps that meet the evolving needs of the financial sector. Whether you're looking to develop a loan lending app, a budgeting tool, or a comprehensive financial management platform, Symbosys delivers high-performance mobile apps for both Android and iOS platforms."
            themeColor="#059669"
            gradient="from-emerald-600 to-cyan-500"
            icon="payments"
            badge="Fintech Solutions"
            ctaTitle="Empower Financial Freedom"
            ctaDescription="As expert financial app developers, we offer end-to-end financial mobile app development services that ensure a seamless and secure user experience."
            sections={[
                {
                    title: "Needs Assessment and Planning",
                    icon: "assignment",
                    items: [
                        { subtitle: "Understanding App Requirements", text: "We analyze your vision, target audience, key features, and security protocols to tailor the finance app development to your business goals." },
                        { subtitle: "System Planning and Design", text: "Developing a detailed plan for features, functionalities, and integrations that make your app stand out in the competitive financial market." },
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
                    title: "Custom Finance App Design",
                    icon: "palette",
                    items: [
                        { subtitle: "UI/UX Design", text: "Creating visually appealing interfaces that simplify complex financial tasks for users." },
                        { subtitle: "Responsive Design", text: "Optimal experience on all devices including smartphones, tablets, and desktops." },
                        { subtitle: "UX Optimization", text: "Intuitive navigation for managing finances, applying for loans, and tracking expenses." }
                    ]
                },
                {
                    title: "Core Finance Features",
                    icon: "account_balance",
                    items: [
                        { subtitle: "Budgeting & Expense Tracking", text: "Comprehensive tools to help users monitor and manage their finances effectively." },
                        { subtitle: "Loan Lending Features", text: "Capabilities for users to apply for loans, track loan status, and make payments securely." },
                        { subtitle: "Investment & Portfolio Management", text: "Advanced tracking and management tools for investments and real-time financial performance monitoring." }
                    ]
                },
                {
                    title: "Financial Tools Integration",
                    icon: "trending_up",
                    items: [
                        { subtitle: "Personalized Financial Advice", text: "AI-powered tools offering recommendations based on user behavior and financial goals." },
                        { subtitle: "Multi-Account Management", text: "Link and manage multiple accounts with a unified view of financial activities across institutions." },
                        { subtitle: "Alerts & Notifications", text: "Automated alerts for account activity, payment reminders, and financial updates." }
                    ]
                },
                {
                    title: "Automation & Analytics",
                    icon: "analytics",
                    items: [
                        { subtitle: "Automated Notifications", text: "Alerts for bill payments, loan due dates, and account balances to keep users engaged." },
                        { subtitle: "Data Analytics", text: "Real-time insights into spending patterns and financial trends for data-driven decisions." },
                        { subtitle: "Custom Workflows", text: "Automation of transaction categorization, budget updates, and loan application processing." }
                    ]
                },
                {
                    title: "Security & Compliance",
                    icon: "security",
                    items: [
                        { subtitle: "Bank-Grade Security", text: "Advanced encryption, secure authentication, and compliance with financial regulations including GDPR and PCI-DSS." },
                        { subtitle: "Industry Compliance", text: "Ensuring the app complies with regulations and standards, safeguarding user privacy and data integrity." }
                    ]
                },
                {
                    title: "Post-Launch Support",
                    icon: "support_agent",
                    items: [
                        { subtitle: "24/7 Technical Support", text: "Continuous support to address issues, provide updates, and ensure smooth operation." },
                        { subtitle: "System Updates", text: "Regular updates with new features, security patches, and performance improvements." }
                    ]
                }
            ]}
        />
    );
}
