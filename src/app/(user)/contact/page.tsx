import { ContactHero, ContactFormSection } from "@/components/user/contact";

export const metadata = {
    title: "Contact Us - Symbosys Technologies",
    description:
        "Get in touch with Symbosys Software Services Pvt. Ltd. Contact us for project inquiries, careers, or any other questions.",
};

export default function ContactPage() {
    return (
        <div className="bg-surface text-text-main font-sans antialiased selection:bg-brand/20 selection:text-brand relative overflow-x-hidden min-h-screen">
            {/* Immersive Background Canvas (Consistent with other pages) */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Main Primary Orb */}
                <div className="absolute -top-[10%] -left-[5%] w-[60vw] h-[60vw] bg-brand/10 rounded-full blur-3xl animate-float"></div>
                {/* Secondary Blue Orb */}
                <div className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] bg-brand-blue/10 rounded-full blur-3xl animate-float-delayed"></div>
                {/* Accent Purple Orb */}
                <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-brand-purple/10 rounded-full blur-3xl animate-float"></div>
                {/* White overlay */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-xs"></div>
            </div>

            <main className="relative z-10">
                <ContactHero />
                <ContactFormSection />
            </main>
        </div>
    );
}
