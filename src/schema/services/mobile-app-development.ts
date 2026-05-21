export const mobileAppDevelopmentSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Mobile App Development",
  name: "Mobile App Development Services by Symbosys",
  url: "https://www.symbosys.com/service/mobile-app-development",
  description:
    "Symbosys provides professional mobile app development services including Android app development, iOS app development, cross-platform applications, UI/UX design, and custom business app solutions across India.",
  provider: {
    "@type": "SoftwareCompany",
    name: "Symbosys",
    url: "https://www.symbosys.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://www.symbosys.com/company/newlog.webp",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9122010150",
    contactType: "customer support",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://x.com/SymbosysTech",
    "https://www.facebook.com/symbosystech",
    "https://www.instagram.com/symbosys/",
    "https://www.youtube.com/@Symbosys",
  ],
  offers: {
    "@type": "Offer",
    url: "https://www.symbosys.com/service/mobile-app-development",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
};
