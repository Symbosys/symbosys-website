import {
    AboutIntro,
    MissionAndVision,
    CoreValues,
} from "@/components/user/about";
import { ContactCTA } from "@/components/user/home";

export const metadata = {
    title: "About Us - Symbosys Technologies",
    description:
        "Learn about Symbosys Software Services Pvt. Ltd., our mission to deliver top-notch IT solutions, and our vision for the digital future.",
};

export default function AboutPage() {
    return (
        <div className="bg-surface dark:bg-gray-950 text-text-main dark:text-gray-100 font-sans antialiased selection:bg-brand/20 selection:text-brand dark:selection:bg-brand/40 relative overflow-x-hidden min-h-screen transition-colors duration-300">
            {/* Immersive Background Canvas (Consistent with Home) */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Main Primary Orb */}
                <div className="absolute -top-[10%] -left-[5%] w-[60vw] h-[60vw] bg-brand/10 dark:bg-brand/15 rounded-full blur-3xl animate-float"></div>
                {/* Secondary Blue Orb */}
                <div className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] bg-brand-blue/10 dark:bg-brand-blue/15 rounded-full blur-3xl animate-float-delayed"></div>
                {/* Accent Purple Orb */}
                <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-brand-purple/10 dark:bg-brand-purple/15 rounded-full blur-3xl animate-float"></div>
                {/* White/Dark overlay */}
                <div className="absolute inset-0 bg-white/20 dark:bg-gray-950/50 backdrop-blur-xs"></div>
            </div>

            <main className="relative z-10 pt-10">
                <AboutIntro />
                <MissionAndVision />
                <CoreValues />

                <ContactCTA />
            </main>
        </div>
    );
}