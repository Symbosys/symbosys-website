export const softwareDevelopmentSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Software Development Services",
  serviceType: "Custom Software Development",
  url: "https://www.symbosys.com/service/software-development",
  description:
    "Symbosys is a Software Development Company in India delivering custom software development, ERP software, CRM software, enterprise software, and scalable business solutions.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.symbosys.com/#organization",
    name: "Symbosys",
    url: "https://www.symbosys.com/",
    logo: "https://www.symbosys.com/company/newlog.webp",
    telephone: "+91 9122010150",
    email: "support@symbosys.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 9122010150",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://www.facebook.com/symbosystech",
      "https://x.com/SymbosysTech",
      "https://www.instagram.com/symbosys/",
      "https://www.youtube.com/@Symbosys",
    ],
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
};
