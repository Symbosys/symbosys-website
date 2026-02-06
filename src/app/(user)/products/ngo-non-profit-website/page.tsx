import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "NGO & Non-Profit Website Development - Symbosys Technologies",
    description: "Specialized digital platforms designed to communicate mission, goals, and impact of NGOs and non-profits, optimized for donor engagement and volunteer management.",
};

export default function NGONonProfitWebsitePage() {
    return (
        <ProductLayout
            title="NGO & Non-Profit Website"
            subtitle="by Symbosys"
            description="NGO and non-profit websites are specialized digital platforms designed by Symbosys to effectively communicate the mission, goals, and impact of non-governmental organizations (NGOs) and non-profits. Symbosys specializes in creating custom NGO and non-profit websites that are optimized for donor engagement, volunteer management, and transparency."
            themeColor="#10b981"
            gradient="from-emerald-500 to-green-400"
            icon="volunteer_activism"
            badge="Non-Profit Solutions"
            ctaTitle="Ready to Make an Impact?"
            ctaDescription="Let Symbosys create a powerful NGO or non-profit website that connects with donors and drives meaningful change."
            sections={[
                {
                    title: "Planning and Mission Alignment",
                    icon: "assignment",
                    content: "Symbosys begins by understanding your organization's mission, goals, and target audience. This ensures the website reflects your values and effectively communicates your cause. We collaborate with you to develop a content strategy that highlights your organization's work, impact stories, and key initiatives."
                },
                {
                    title: "CMS and Technology Stack",
                    icon: "layers",
                    items: [
                        { subtitle: "Platform Selection", text: "We recommend the best CMS like WordPress or Joomla for ease of use, scalability, and donation management." },
                        { subtitle: "Hosting Solutions", text: "Reliable hosting that ensures security and handled high traffic during campaigns." },
                        { subtitle: "Domain Registration", text: "Memorable domain names that reflect your mission and are optimized for search engines." }
                    ]
                },
                {
                    title: "Custom Design & UX",
                    icon: "palette",
                    items: [
                        { subtitle: "Design Consultation", text: "Creating a visually appealing design that inspires trust and engagement." },
                        { subtitle: "Responsive Web Design", text: "Optimal experience across all devices, including mobile and tablet." },
                        { subtitle: "UX Optimization", text: "Seamless navigation making it easy to learn, donate, or get involved." }
                    ]
                },
                {
                    title: "Content & Management",
                    icon: "article",
                    items: [
                        { subtitle: "Mission-Driven Content", text: "High-quality, compelling content that tells your story and encourages action." },
                        { subtitle: "Content Organization", text: "Clear sections for About Us, Programs, Impact Stories, and Donate." },
                        { subtitle: "CMS Integration", text: "Easy updates to keep your website current with your organization's activities." }
                    ]
                },
                {
                    title: "SEO and Compliance",
                    icon: "search",
                    items: [
                        { subtitle: "SEO Strategy", text: "Improving search engine visibility to attract more supporters." },
                        { subtitle: "Legal Compliance", text: "Essential legal pages including Privacy Policy and GDPR compliance." }
                    ]
                },
                {
                    title: "QA and Support",
                    icon: "verified",
                    items: [
                        { subtitle: "Quality Assurance", text: "Rigorous testing of donation systems and sign-up forms." },
                        { subtitle: "Ongoing Support", text: "Continuous support and performance analytics for continuous improvement." }
                    ]
                }
            ]}
        />
    );
}
