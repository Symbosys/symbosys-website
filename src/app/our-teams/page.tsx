import {
    TeamHero,
    Leadership,
    TeamGrid,
    TeamCulture,
    JoinTeamCTA,
} from "@/components/user/our-team";
import { ContactCTA } from "@/components/user/home";

export const metadata = {
    title: "Our Team - Symbosys Technologies",
    description:
        "Meet the brilliant minds behind Symbosys Software Services. Our talented team of developers, designers, marketers, and leaders drives innovation across every project.",
};

export default function OurTeamPage() {
    return (
        <div className="bg-surface dark:bg-gray-950 text-text-main dark:text-gray-100 font-sans antialiased selection:bg-brand/20 selection:text-brand dark:selection:bg-brand/40 relative overflow-x-hidden min-h-screen transition-colors duration-300">
            {/* Immersive Background Canvas */}
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

            <main className="relative z-10">
                {/* 1. Hero Section + Leadership */}
                <TeamHero>
                    <Leadership />
                </TeamHero>

                {/* 3. Full Team Grid by Department */}
                <TeamGrid />

                {/* 4. Team Culture Metrics */}
                <TeamCulture />

                {/* 5. Join Team CTA */}
                <JoinTeamCTA />

                {/* 6. Contact CTA (shared) */}
                <ContactCTA />
            </main>
        </div>
    );
}
