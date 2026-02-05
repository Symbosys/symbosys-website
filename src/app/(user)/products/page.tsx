import { ProductsShowcase } from "@/components/user/products";
import { ContactCTA } from "@/components/user/home";

export const metadata = {
    title: "Our Products - Symbosys Technologies",
    description:
        "Explore our wide range of digital products including websites, management software, and mobile applications developed by Symbosys Technologies.",
};

export default function ProductsPage() {
    return (
        <div className="bg-surface text-text-main font-sans antialiased selection:bg-brand/20 selection:text-brand relative overflow-x-hidden min-h-screen">
            {/* Immersive Background Canvas (Consistent with Home & About) */}
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

            <main className="relative z-10 pt-10">
                <ProductsShowcase />

                {/* <ContactCTA /> */}
            </main>
        </div>
    );
}
