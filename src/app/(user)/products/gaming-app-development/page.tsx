import { ProductLayout } from "@/components/user/products/ProductLayout";

export const metadata = {
    title: "Gaming App Development - Symbosys Technologies",
    description: "Immersive mobile gaming experiences for Android and iOS platforms with captivating gameplay and stunning visuals.",
};

export default function GamingAppDevelopmentPage() {
    return (
        <ProductLayout
            title="Gaming App Development"
            subtitle="by Symbosys"
            description="Gaming App Development is the process of creating interactive, engaging, and high-performance games for mobile platforms. Symbosys specializes in mobile game development for both Android and iOS platforms. Whether you're looking to make an iPhone game or develop an exciting Android game, our team of expert mobile game developers is equipped to turn your vision into reality."
            themeColor="#a855f7"
            gradient="from-purple-500 to-fuchsia-500"
            icon="sports_esports"
            badge="Mobile Gaming"
            ctaTitle="Level Up Your Game Ideas"
            ctaDescription="As one of the top gaming app development companies, Symbosys delivers captivating gaming experiences that engage users and keep them coming back for more."
            sections={[
                {
                    title: "Conceptualization and Planning",
                    icon: "assignment",
                    items: [
                        { subtitle: "Understanding Game Ideas", text: "We analyze your game concept, target audience, and platform preferences to create a detailed development plan." },
                        { subtitle: "Platform Strategy", text: "Helping you choose the right platform—Android, iOS, or cross-platform—to reach the widest audience." },
                        { subtitle: "Budget & Timeline", text: "Establishing a budget and timeline covering concept to launch and post-launch support." }
                    ]
                },
                {
                    title: "Game Design and Prototyping",
                    icon: "palette",
                    items: [
                        { subtitle: "Game Design Consultation", text: "Creating engaging game mechanics, storylines, and characters that resonate with your target audience." },
                        { subtitle: "Prototype Development", text: "Building a prototype showcasing key gameplay elements for visualization and adjustment." },
                        { subtitle: "UX Optimization", text: "Ensuring intuitive gameplay, smooth controls, and an enjoyable player experience." }
                    ]
                },
                {
                    title: "Game Development",
                    icon: "code",
                    items: [
                        { subtitle: "Android Development", text: "High-performance games optimized for Android with compatibility across a wide range of devices." },
                        { subtitle: "iOS Development", text: "Visually stunning and responsive games for Apple devices utilizing iOS capabilities." },
                        { subtitle: "Cross-Platform", text: "Games that run smoothly on both Android and iOS, maximizing reach and appeal." }
                    ]
                },
                {
                    title: "Advanced Features Integration",
                    icon: "widgets",
                    items: [
                        { subtitle: "In-App Purchases", text: "Integration of monetization strategies including ads, subscriptions, and premium content." },
                        { subtitle: "Social Media Integration", text: "Sharing features, leaderboards, and friend challenges for social engagement." },
                        { subtitle: "Multiplayer Features", text: "Real-time multiplayer modes and competitive gameplay elements." }
                    ]
                },
                {
                    title: "Testing and Quality Assurance",
                    icon: "bug_report",
                    items: [
                        { subtitle: "Comprehensive Testing", text: "Rigorous testing on multiple devices to ensure smooth gameplay and performance." },
                        { subtitle: "User Acceptance Testing", text: "Testing with real gamers to gather feedback and refine the experience." },
                        { subtitle: "Performance Optimization", text: "Ensuring fast load times, smooth frame rates, and minimal battery drain." }
                    ]
                },
                {
                    title: "Launch and Marketing",
                    icon: "rocket_launch",
                    items: [
                        { subtitle: "App Store Optimization", text: "Optimizing for Google Play Store and Apple App Store to improve visibility and downloads." },
                        { subtitle: "Marketing Strategy", text: "Launch strategies that promote your game to the right audience and drive downloads." },
                        { subtitle: "Analytics Integration", text: "Tracking player behavior and engagement for continuous improvement." }
                    ]
                },
                {
                    title: "Security and Fair Play",
                    icon: "security",
                    items: [
                        { subtitle: "Anti-Cheat Systems", text: "Implementing measures to ensure fair gameplay and prevent exploitation." },
                        { subtitle: "Secure Transactions", text: "Protecting in-app purchases and player data with robust security." }
                    ]
                },
                {
                    title: "Post-Launch Support",
                    icon: "support_agent",
                    items: [
                        { subtitle: "Ongoing Updates", text: "Regular updates with new content, features, and bug fixes to keep players engaged." },
                        { subtitle: "Player Feedback", text: "Responding to player feedback to evolve the game with community input." }
                    ]
                }
            ]}
        />
    );
}
