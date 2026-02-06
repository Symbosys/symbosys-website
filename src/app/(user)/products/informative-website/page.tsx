import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "Informative Website Development - Symbosys Technologies",
    description: "Professional landing pages and informative websites that tell your brand story and engage your audience.",
};

export default function InformativeWebsitePage() {
    return (
        <ProductLayout
            title="Informative Website"
            subtitle="by Symbosys"
            description="Informative websites are beautiful landing pages and digital platforms designed by Symbosys to tell your brand story and provide essential information to your audience. We create high-impact websites that build credibility."
            themeColor="#7c3aed"
            gradient="from-violet-600 to-purple-500"
            icon="info"
            badge="Brand Storytelling"
            ctaTitle="Tell Your Story to the World"
            ctaDescription="Let Symbosys create a professional informative website that communicates your message effectively."
            sections={[
                {
                    title: "Planning and Discovery",
                    icon: "assignment",
                    content: "We start by understanding your brand values, mission, and the key information you want to convey. Our team defines the target audience to ensure the content resonates with your visitors."
                },
                {
                    title: "Custom Design",
                    icon: "palette",
                    items: [
                        { subtitle: "Visual Excellence", text: "Stunning designs that capture your brand's essence and create a lasting impression." },
                        { subtitle: "User Journey", text: "Designing clear paths for users to find information and engage with your brand." }
                    ]
                },
                {
                    title: "Content Strategy",
                    icon: "article",
                    items: [
                        { subtitle: "Storytelling", text: "Compelling copy and visuals that narrate your brand's journey and achievements." },
                        { subtitle: "Information Architecture", text: "Logical organization of content for easy navigation and readability." }
                    ]
                },
                {
                    title: "SEO and Visibility",
                    icon: "search",
                    items: [
                        { subtitle: "Search Optimization", text: "On-page SEO to ensure your brand is easily discoverable by potential clients." },
                        { subtitle: "Performance", text: "Fast loading speeds and optimized images for a smooth visitor experience." }
                    ]
                }
            ]}
        />
    );
}
