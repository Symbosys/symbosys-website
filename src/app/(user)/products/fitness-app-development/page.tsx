import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "Fitness App Development - Symbosys Technologies",
    description: "Health tracking and workout apps that empower users to achieve their fitness and wellness goals on Android and iOS.",
};

export default function FitnessAppDevelopmentPage() {
    return (
        <ProductLayout
            title="Fitness App Development"
            subtitle="by Symbosys"
            description="Fitness App Development is a specialized service offered by Symbosys dedicated to helping businesses and entrepreneurs create fitness apps that promote health, wellness, and active lifestyles. Whether you're looking to develop a gym app, a yoga app, or a comprehensive lifestyle app, Symbosys is your trusted partner for building high-performance, user-friendly mobile apps."
            themeColor="#ea580c"
            gradient="from-orange-600 to-yellow-500"
            icon="fitness_center"
            badge="Health & Wellness"
            ctaTitle="Empower Health Journeys"
            ctaDescription="As expert fitness app developers, we provide end-to-end fitness mobile app development services to deliver a seamless and engaging user experience."
            sections={[
                {
                    title: "Needs Assessment and Planning",
                    icon: "assignment",
                    items: [
                        { subtitle: "Understanding App Requirements", text: "We analyze your vision, target audience, core features, and user engagement strategies for the fitness app." },
                        { subtitle: "System Planning", text: "Developing a detailed plan for features, functionalities, and integrations that make your app stand out." },
                        { subtitle: "Budget Planning", text: "Establishing a budget covering design, development, launch, and ongoing support." }
                    ]
                },
                {
                    title: "Custom Fitness App Design",
                    icon: "palette",
                    items: [
                        { subtitle: "Motivational UI/UX", text: "Creating interfaces that inspire and motivate users to achieve their fitness goals." },
                        { subtitle: "Responsive Design", text: "Optimal experience on smartphones, tablets, and wearable devices." },
                        { subtitle: "Brand Integration", text: "Design that reflects your fitness brand's energy and identity." }
                    ]
                },
                {
                    title: "Core Fitness Features",
                    icon: "widgets",
                    items: [
                        { subtitle: "Workout Plans", text: "Customized workout plans tailored to different fitness levels and goals—strength, cardio, flexibility." },
                        { subtitle: "Progress Tracking", text: "Advanced tracking features to monitor workouts, log exercises, and analyze performance metrics." },
                        { subtitle: "Nutrition & Diet", text: "Integrated nutrition tracking and personalized diet plans for holistic health." }
                    ]
                },
                {
                    title: "Wellness and Lifestyle Tools",
                    icon: "self_improvement",
                    items: [
                        { subtitle: "Yoga & Meditation", text: "Guided sessions for mindfulness, stress relief, and mental wellness." },
                        { subtitle: "Goal Setting", text: "Features to set fitness objectives with reminders and motivational messages." },
                        { subtitle: "Gym & Trainer Access", text: "Connect users with local gyms and personal trainers with booking capabilities." }
                    ]
                },
                {
                    title: "Wearable Integration",
                    icon: "watch",
                    items: [
                        { subtitle: "Smartwatch Sync", text: "Integration with Apple Watch, Fitbit, and Android wearables for real-time data." },
                        { subtitle: "Health Metrics", text: "Heart rate monitoring, step counting, and sleep tracking from connected devices." },
                        { subtitle: "Activity Challenges", text: "Challenges and competitions to keep users engaged and motivated." }
                    ]
                },
                {
                    title: "Engagement and Analytics",
                    icon: "analytics",
                    items: [
                        { subtitle: "Push Notifications", text: "Workout reminders, progress milestones, and motivational messages." },
                        { subtitle: "Social Features", text: "Community features for sharing achievements and connecting with other fitness enthusiasts." },
                        { subtitle: "Performance Insights", text: "Real-time analytics on user behavior, engagement, and fitness progress." }
                    ]
                },
                {
                    title: "Security and Privacy",
                    icon: "security",
                    items: [
                        { subtitle: "Health Data Protection", text: "Advanced encryption protecting sensitive health and personal data." },
                        { subtitle: "Privacy Settings", text: "Comprehensive controls for users to manage their data and visibility." }
                    ]
                },
                {
                    title: "Post-Launch Support",
                    icon: "support_agent",
                    items: [
                        { subtitle: "Technical Support", text: "Continuous support to ensure your fitness app operates smoothly and effectively." },
                        { subtitle: "Content Updates", text: "Regular updates with new workouts, features, and health content." }
                    ]
                }
            ]}
        />
    );
}
