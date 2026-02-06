import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "Social Media Website Development - Symbosys Technologies",
    description: "Interactive digital platforms to facilitate communication, content sharing, and community building.",
};

export default function SocialMediaWebsitePage() {
    return (
        <ProductLayout
            title="Social Media Website"
            subtitle="by Symbosys"
            description="Social media websites are interactive digital platforms designed by Symbosys to facilitate communication, content sharing, and community building among users. We create social experiences that connect people."
            themeColor="#f43f5e"
            gradient="from-rose-500 to-red-400"
            icon="share"
            badge="Social Networking"
            ctaTitle="Ready to Build Your Community?"
            ctaDescription="Let Symbosys create a powerful social platform that connects people and encourages sharing."
            sections={[
                {
                    title: "Planning & Strategy",
                    icon: "assignment",
                    content: "Symbosys begins by understanding your vision for the social media platform, including your target audience and community building goals. We develop strategies that encourage user participation and content creation."
                },
                {
                    title: "Technology Stack",
                    icon: "code",
                    items: [
                        { subtitle: "Scalable Architecture", text: "Recommending technology stacks that support scalability, security, and real-time interactions." },
                        { subtitle: "Backend & Database", text: "Robust systems for managing large volumes of user data and real-time social feeds." }
                    ]
                },
                {
                    title: "Custom Design",
                    icon: "palette",
                    items: [
                        { subtitle: "Social UX", text: "User-friendly designs that prioritize engagement and ease of communication." },
                        { subtitle: "Responsive Interaction", text: "Optimized social experiences across all devices, ensuring constant connectivity." }
                    ]
                },
                {
                    title: "Profile & Content",
                    icon: "person",
                    items: [
                        { subtitle: "Personalization", text: "Tools for users to create and personlize profiles while managing privacy." },
                        { subtitle: "Content Sharing", text: "Supporting text, images, videos, and links for rich community engagement." }
                    ]
                },
                {
                    title: "Social Features",
                    icon: "group",
                    items: [
                        { subtitle: "Connectivity", text: "Integrated friend systems, following mechanisms, and discovery tools." },
                        { subtitle: "Communication", text: "Direct messaging, group chats, and comment systems for meaningful interactions." }
                    ]
                }
            ]}
        />
    );
}
