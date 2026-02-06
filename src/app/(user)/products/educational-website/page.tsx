import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "Educational Website Development - Symbosys Technologies",
    description: "Dynamic digital platforms to deliver educational content, manage courses, and engage students.",
};

export default function EducationalWebsitePage() {
    return (
        <ProductLayout
            title="Educational Website"
            subtitle="by Symbosys"
            description="Educational websites are dynamic digital platforms designed by Symbosys to deliver educational content, manage courses, and engage students in a virtual learning environment. We build tools that empower learning."
            themeColor="#f59e0b"
            gradient="from-amber-500 to-yellow-400"
            icon="school"
            badge="E-Learning Solutions"
            ctaTitle="Ready to Transform Education?"
            ctaDescription="Let Symbosys create a powerful educational platform that enhances learning and student engagement."
            sections={[
                {
                    title: "Planning & Assessment",
                    icon: "assignment",
                    content: "Symbosys begins by understanding your institution's educational objectives, target audience, and specific requirements. We develop content strategies aligned with your curriculum for K-12, higher education, or professional training."
                },
                {
                    title: "LMS Selection",
                    icon: "layers",
                    items: [
                        { subtitle: "Technology Choice", text: "Recommending suitable LMS like Moodle, Canvas, or custom solutions for course delivery." },
                        { subtitle: "Tracking & Tools", text: "Student tracking and integrated assessment tools for measuring progress." }
                    ]
                },
                {
                    title: "Custom Design",
                    icon: "palette",
                    items: [
                        { subtitle: "Educational UX", text: "Seamless navigation designed for students and educators to access materials easily." },
                        { subtitle: "Branding", text: "Designs that reflect your educational brand and inspire a positive learning environment." }
                    ]
                },
                {
                    title: "Content & Courses",
                    icon: "video_library",
                    items: [
                        { subtitle: "Interactive Content", text: "Creation of video lectures, quizzes, and digital reading materials." },
                        { subtitle: "Module Organization", text: "Organizing courses into clear, easy-to-follow modules for better learning outcomes." }
                    ]
                },
                {
                    title: "Student Engagement",
                    icon: "groups",
                    items: [
                        { subtitle: "Collaborative Tools", text: "Integrated discussion forums, live chat, and video conferencing." },
                        { subtitle: "Mobile Learning", text: "Responsive designs that allow students to learn on any device, anytime." }
                    ]
                }
            ]}
        />
    );
}
