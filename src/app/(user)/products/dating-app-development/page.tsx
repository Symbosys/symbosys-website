import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "Dating App Development - Symbosys Technologies",
    description: "Build meaningful connections with innovative dating app solutions featuring advanced matching algorithms and secure messaging.",
};

export default function DatingAppDevelopmentPage() {
    return (
        <ProductLayout
            title="Dating App Development"
            subtitle="by Symbosys"
            description="Dating App Development is a specialized service offered by Symbosys dedicated to helping businesses and entrepreneurs create apps that connect people, foster relationships, and enhance social interactions. Whether you're looking to build an app like Tinder, Happn, or any other popular dating platform, Symbosys is your trusted partner for high-performance, user-friendly mobile apps."
            themeColor="#ef4444"
            gradient="from-red-500 to-pink-500"
            icon="favorite"
            badge="Social Connections"
            ctaTitle="Create Meaningful Connections"
            ctaDescription="As expert dating app developers, we provide comprehensive services in dating mobile app development to deliver a seamless and engaging user experience."
            sections={[
                {
                    title: "Needs Assessment and Planning",
                    icon: "assignment",
                    items: [
                        { subtitle: "Understanding App Requirements", text: "We analyze your vision, target audience, key features, and user engagement strategies for the dating app." },
                        { subtitle: "App Planning", text: "Developing a detailed plan for features, functionalities, and integrations that make your app stand out." },
                        { subtitle: "Budget Planning", text: "Transparent budgeting covering design, development, launch, and ongoing support." }
                    ]
                },
                {
                    title: "Custom Dating App Design",
                    icon: "palette",
                    items: [
                        { subtitle: "Attractive UI/UX", text: "Creating visually appealing interfaces that encourage user engagement and rival popular apps like Tinder." },
                        { subtitle: "Responsive Design", text: "Optimal experience on smartphones, tablets, and all devices." },
                        { subtitle: "Brand Identity", text: "Design that reflects your dating platform's unique personality and appeal." }
                    ]
                },
                {
                    title: "Core Dating Features",
                    icon: "widgets",
                    items: [
                        { subtitle: "User Profiles", text: "Robust profile creation with secure authentication and customization options." },
                        { subtitle: "Matching Algorithms", text: "Sophisticated algorithms connecting users based on interests, location, and preferences." },
                        { subtitle: "Swipe Mechanics", text: "Intuitive swipe-based interaction similar to Tinder's popular feature." }
                    ]
                },
                {
                    title: "Communication Features",
                    icon: "chat",
                    items: [
                        { subtitle: "Real-Time Messaging", text: "Seamless chat features enabling users to communicate and build connections." },
                        { subtitle: "Video Calls", text: "In-app video calling for virtual dates and deeper connections." },
                        { subtitle: "Ice Breakers", text: "Prompts and conversation starters to help users initiate conversations." }
                    ]
                },
                {
                    title: "Discovery and Location",
                    icon: "location_on",
                    items: [
                        { subtitle: "Geolocation Services", text: "Location-based discovery to find matches in your vicinity like Happn." },
                        { subtitle: "Advanced Filters", text: "Comprehensive search filters for age, distance, interests, and more." },
                        { subtitle: "Events & Activities", text: "Features to discover local events and activities for real-world meetups." }
                    ]
                },
                {
                    title: "User Engagement",
                    icon: "trending_up",
                    items: [
                        { subtitle: "Social Media Integration", text: "Connect profiles with Facebook and Instagram for enhanced authenticity." },
                        { subtitle: "Push Notifications", text: "Smart notifications for matches, messages, and activity updates." },
                        { subtitle: "Premium Features", text: "Subscription options for super likes, profile boosts, and premium visibility." }
                    ]
                },
                {
                    title: "Security and Privacy",
                    icon: "security",
                    items: [
                        { subtitle: "User Verification", text: "Photo verification and identity checks for a safe dating environment." },
                        { subtitle: "Privacy Controls", text: "Comprehensive settings for blocking, reporting, and controlling visibility." }
                    ]
                },
                {
                    title: "Post-Launch Support",
                    icon: "support_agent",
                    items: [
                        { subtitle: "Technical Support", text: "Continuous support to ensure your dating app operates smoothly and safely." },
                        { subtitle: "Feature Updates", text: "Regular updates with new features based on user feedback and dating trends." }
                    ]
                }
            ]}
        />
    );
}
