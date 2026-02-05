import {
  StatsSection,
  ServicesFixedMarquee,
  ServicesIconsMarquee,
  SymbosysTechnologies,
  ExpertSoftware,
  TeamAndSpecializations,
  IndustriesSection,
  WorkProcessSection,
  WhyChooseUs,
  BoostBusiness,
  RecentProjects,
  BusinessBenefits,
  WhyChooseSymbosys,
  BuildProjectTogether,
  GetInTouch,
  ContactCTA,
  Hero,
} from "@/components/user/home";



export default function Home() {
  return (
    <div className="bg-surface text-text-main font-sans antialiased selection:bg-brand/20 selection:text-brand relative overflow-x-hidden">
      {/* Immersive Background Canvas */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Main Primary Orb */}
        <div className="absolute -top-[10%] -left-[5%] w-[60vw] h-[60vw] bg-brand/10 rounded-full blur-3xl animate-float"></div>
        {/* Secondary Blue Orb */}
        <div className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] bg-brand-blue/10 rounded-full blur-3xl animate-float-delayed"></div>
        {/* Accent Purple Orb */}
        <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-brand-purple/10 rounded-full blur-3xl animate-float"></div>
        {/* White overlay to keep it light and airy */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-xs"></div>
      </div>



      {/* Main Content Wrapper */}
      <main className="relative z-10 flex flex-col w-full min-h-screen pt-32 pb-20">
        {/* Hero Section */}
        <Hero />

        {/* 1. Stats Section */}
        <StatsSection />

        {/* 2. Services Fixed Left Marquee */}
        <ServicesFixedMarquee />

        {/* 3. Services Icons Marquee */}
        <ServicesIconsMarquee />

        {/* 4. Symbosys Technologies Section */}
        <SymbosysTechnologies />

        {/* 5. Expert Software Section */}
        <ExpertSoftware />

        {/* 6. Team & Specializations Section */}
        <TeamAndSpecializations />

        {/* 7. Industries Section */}
        <IndustriesSection />

        {/* 8. Work Process & Excellence Section */}
        <WorkProcessSection />

        {/* 9. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 10. Boost Business Section */}
        <BoostBusiness />

        {/* 11. Recent Projects Section */}
        <RecentProjects />

        {/* 12. Business Benefits Section */}
        <BusinessBenefits />

        {/* 13. Why Choose Symbosys (Icons) Section */}
        <WhyChooseSymbosys />

        {/* 15. Build Project Together Section */}
        <BuildProjectTogether />

        {/* 16. Get In Touch Section */}
        <GetInTouch />




        {/* CTA / Footer Transition */}
        <ContactCTA />


      </main>
    </div>
  );
}
