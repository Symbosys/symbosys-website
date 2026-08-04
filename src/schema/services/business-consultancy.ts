export const businessConsultancySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.symbosys.com/service/business-consultancy#service",
  name: "Business Consultancy Services",
  serviceType: "Business Consultancy",
  url: "https://www.symbosys.com/service/business-consultancy",
  description:
    "Symbosys provides business consultancy services in India, including trademark registration, ISO certification, company registration, tax compliance, GST registration, strategic planning, and business advisory solutions.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.symbosys.com/#organization",
    name: "Symbosys",
    url: "https://www.symbosys.com/",
    logo: "https://www.symbosys.com/company/newlog.webp",
    telephone: "+91 7992202650",
    email: "support@symbosys.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 7992202650",
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
    price: "0",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
};
