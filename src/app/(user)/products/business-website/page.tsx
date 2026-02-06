import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "Business Website Development - Symbosys Technologies",
    description: "Professional digital platforms to represent your brand, showcase products/services, and engage with potential clients.",
};

export default function BusinessWebsitePage() {
    return (
        <ProductLayout
            title="Business Website"
            subtitle="by Symbosys"
            description="Business websites are professional digital platforms designed by Symbosys to represent a company's brand, showcase its products or services, and engage with potential clients. We create custom solutions that drive results."
            themeColor="#4f46e5"
            gradient="from-indigo-600 to-blue-500"
            icon="store"
            badge="Business Solutions"
            ctaTitle="Ready to Grow Your Business?"
            ctaDescription="Let Symbosys create a professional business website that represents your brand and converts visitors."
            sections={[
                {
                    title: "Planning and Strategy",
                    icon: "assignment",
                    content: "Symbosys begins by understanding your business goals, target audience, and content requirements. We create comprehensive content strategies that drive traffic and engage visitors effectively."
                },
                {
                    title: "CMS and Hosting",
                    icon: "layers",
                    items: [
                        { subtitle: "Platform Selection", text: "We recommend suitable CMS like WordPress, Joomla, or Drupal based on your business needs." },
                        { subtitle: "Hosting Solutions", text: "Selecting reliable hosting providers for performance, security, and scalability." }
                    ]
                },
                {
                    title: "Custom Website Design",
                    icon: "palette",
                    items: [
                        { subtitle: "Visual Identity", text: "Visually appealing designs that reflect your brand identity and professional values." },
                        { subtitle: "Responsive Design", text: "Fully responsive websites that work perfectly on all screen sizes." },
                        { subtitle: "UX Optimization", text: "Intuitive navigation making it easy for clients to find what they need." }
                    ]
                },
                {
                    title: "SEO and Content",
                    icon: "search",
                    items: [
                        { subtitle: "SEO Strategy", text: "Keyword research and on-page optimization for better search visibility." },
                        { subtitle: "Content Creation", text: "Optimized content designed to attract and retain your target audience." }
                    ]
                },
                {
                    title: "Legal and Quality",
                    icon: "gavel",
                    items: [
                        { subtitle: "Legal Compliance", text: "Essential legal pages including Privacy Policy and Terms and Conditions." },
                        { subtitle: "Quality Assurance", text: "Thorough testing to ensure a bug-free experience for your clients." }
                    ]
                },
                {
                    title: "Launch & Support",
                    icon: "rocket_launch",
                    items: [
                        { subtitle: "Smooth Deployment", text: "Careful migration and launch to the live server." },
                        { subtitle: "Ongoing Support", text: "Continuous technical support and updates for your business growth." }
                    ]
                }
            ]}
        />
    );
}
