import {
    CultureHero,
    OurPhilosophy,
    CulturePillars,
    LifeAtSymbosys,
    GrowthJourney,
    WorkEnvironment,
    TeamTestimonials,
    JoinCultureCTA,
} from "@/components/user/working-culture";
import { ContactCTA } from "@/components/user/home";

export const metadata = {
    title: "Working Culture - Symbosys Technologies",
    description:
        "Discover the vibrant working culture at Symbosys Software Services. We foster innovation, collaboration, and continuous growth in a people-first environment.",
};

export default function WorkingCulturePage() {
    return (
        <div className="bg-surface dark:bg-gray-950 text-text-main dark:text-gray-100 font-sans antialiased selection:bg-brand/20 selection:text-brand dark:selection:bg-brand/40 relative overflow-x-hidden min-h-screen transition-colors duration-300">
            {/* Immersive Background Canvas (Consistent with site) */}
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
                {/* 1. Hero Section */}
                {/* 1. Hero Section + Our Philosophy */}
                <CultureHero>
                    <OurPhilosophy />
                </CultureHero>

                {/* 3. Culture Pillars */}
                <CulturePillars />

                {/* 4. Life at Symbosys - Bento Grid */}
                <LifeAtSymbosys />

                {/* 5. Work Environment */}
                <WorkEnvironment />

                {/* 6. Growth Journey Timeline */}
                <GrowthJourney />

                {/* 7. Team Testimonials */}
                <TeamTestimonials />

                {/* 8. Join Our Culture CTA */}
                <JoinCultureCTA />

                {/* 9. Contact CTA (shared) */}
                <ContactCTA />
            </main>
        </div>
    );
}
