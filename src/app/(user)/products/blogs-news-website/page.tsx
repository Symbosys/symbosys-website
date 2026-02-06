import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "Blogs & News Website Development - Symbosys Technologies",
    description: "Dynamic digital platforms designed to publish and disseminate timely content, articles, and news updates with CMS, SEO optimization, and responsive design.",
};

export default function BlogsNewsWebsitePage() {
    return (
        <ProductLayout
            title="Blogs & News Website"
            subtitle="by Symbosys"
            description="Blogs and news websites are dynamic digital platforms designed by Symbosys to publish and disseminate timely content, articles, and news updates. These websites are tailored to enhance reader engagement with features such as CMS, SEO optimization, and responsive design."
            themeColor="#d946ef"
            gradient="from-fuchsia-500 to-pink-500"
            icon="article"
            badge="Content Publishing"
            ctaTitle="Ready to Start Publishing?"
            ctaDescription="Let Symbosys create a stunning blog or news platform that engages readers and drives traffic."
            sections={[
                {
                    title: "Planning and Strategy",
                    icon: "strategy",
                    items: [
                        { subtitle: "Understanding Your Content Needs", text: "Symbosys begins by understanding your goals for the blog or news website, including target audience, content type, and frequency of updates." },
                        { subtitle: "Content Strategy Development", text: "We collaborate to create a comprehensive content strategy that drives traffic and engages readers." },
                        { subtitle: "Budget Planning", text: "Symbosys helps establish a budget covering all aspects of website development, from setup to ongoing content management." }
                    ]
                },
                {
                    title: "Choosing the Right CMS and Hosting",
                    icon: "dns",
                    items: [
                        { subtitle: "Platform Selection", text: "We recommend the most suitable CMS like WordPress, Joomla, or Drupal based on your needs." },
                        { subtitle: "Hosting Solutions", text: "Symbosys helps in selecting a reliable hosting provider that ensures performance and security during peak traffic times." },
                        { subtitle: "Domain Name and Setup", text: "We assist in choosing a domain name and configure hosting for optimal performance." }
                    ]
                },
                {
                    title: "Custom Website Design",
                    icon: "palette",
                    items: [
                        { subtitle: "Design Consultation", text: "We work to create a visually appealing and user-friendly design that reflects your brand identity." },
                        { subtitle: "Responsive Design", text: "Symbosys ensures your website is fully responsive across all devices." },
                        { subtitle: "UX Optimization", text: "Our UX experts design seamless navigation for readers to explore articles easily." }
                    ]
                },
                {
                    title: "SEO and Content Optimization",
                    icon: "search",
                    items: [
                        { subtitle: "SEO Strategy", text: "Symbosys develops a comprehensive SEO strategy including keyword research and on-page optimization." },
                        { subtitle: "Content Optimization", text: "All posts and articles are optimized for better search engine visibility." }
                    ]
                },
                {
                    title: "Website Launch and Support",
                    icon: "rocket_launch",
                    items: [
                        { subtitle: "Pre-Launch Review", text: "A comprehensive review to ensure the website is fully optimized before the launch." },
                        { subtitle: "Go Live", text: "We launch the website to the live server and ensure everything runs smoothly." },
                        { subtitle: "Maintenance & Support", text: "Post-launch, Symbosys offers continued support, maintenance, and updates." }
                    ]
                }
            ]}
        />
    );
}
