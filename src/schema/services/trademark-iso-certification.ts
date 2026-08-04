export const trademarkIsoCertificationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.symbosys.com/service/trademark-iso-certification#service",
  name: "Trademark & ISO Certification Services",
  serviceType: "Trademark Registration and ISO Certification",
  url: "https://www.symbosys.com/service/trademark-iso-certification",
  description:
    "Symbosys provides Trademark Registration and ISO Certification services in India, including Wordmark, Logo Mark, Service Mark, Certification Mark, ISO 9001, ISO 14001, ISO 27001, ISO 22000, ISO 45001, and ISO 50001 certification.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.symbosys.com/#organization",
    name: "Symbosys",
    url: "https://www.symbosys.com/",
    logo: "https://www.symbosys.com/company/newlog.webp",
    telephone: "+91 9122010150",
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
