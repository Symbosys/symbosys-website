import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "Personal Website Development - Symbosys Technologies",
    description: "Customized digital platforms to showcase your personal brand, skills, achievements, and portfolio.",
};

export default function PersonalWebsitePage() {
    return (
        <ProductLayout
            title="Personal Website"
            subtitle="by Symbosys"
            description="Personal websites are customized digital platforms designed by Symbosys to showcase an individual's personal brand, skills, achievements, and portfolio. We bring your professional story to life with stunning design."
            themeColor="#14b8a6"
            gradient="from-teal-500 to-cyan-400"
            icon="person"
            badge="Personal Branding"
            ctaTitle="Ready to Build Your Brand?"
            ctaDescription="Let Symbosys create a stunning personal website that showcases your unique skills and achievements."
            sections={[
                {
                    title: "Personal Branding Strategy",
                    icon: "assignment",
                    content: "Symbosys begins by understanding your personal objectives, target audience, and key elements you want to highlight. We develop a personal branding strategy that communicates your strengths and achievements effectively."
                },
                {
                    title: "Platform & Technology",
                    icon: "layers",
                    items: [
                        { subtitle: "CMS Selection", text: "Recommending suitable platforms like WordPress or custom solutions for easy profile management." },
                        { subtitle: "Hosting & Domain", text: "Assistance with choosing a memorable domain and reliable hosting for your personal brand." }
                    ]
                },
                {
                    title: "Custom Website Design",
                    icon: "palette",
                    items: [
                        { subtitle: "Visual Design", text: "Creative designs that reflect your personality and professional identity." },
                        { subtitle: "Portfolio Showcase", text: "Stunning portfolio layouts to highlight your best work and projects." },
                        { subtitle: "Responsive Layout", text: "Optimal viewing experience on all devices, from mobile to desktop." }
                    ]
                },
                {
                    title: "Networking Features",
                    icon: "share",
                    items: [
                        { subtitle: "Interactivity", text: "Integrated contact forms and call-to-action buttons to encourage networking." },
                        { subtitle: "Social Integration", text: "Seamless connection to your LinkedIn and other professional social platforms." }
                    ]
                },
                {
                    title: "SEO and Content",
                    icon: "search",
                    items: [
                        { subtitle: "Personal SEO", text: "Keyword research to help people find you and your work online." },
                        { subtitle: "Content Management", text: "Easy-to-use tools for updating your resume, blog, and projects." }
                    ]
                }
            ]}
        />
    );
}
