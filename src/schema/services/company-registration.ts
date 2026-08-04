export const companyRegistrationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.symbosys.com/service/company-registration#service",
  name: "Company Registration Services",
  serviceType: "Company Registration",
  url: "https://www.symbosys.com/service/company-registration",
  description:
    "Symbosys provides company registration services in India, including Private Limited Company, LLP, OPC, Startup Registration, GST Registration, and business compliance solutions.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.symbosys.com/#organization",
    name: "Symbosys",
    url: "https://www.symbosys.com/",
    logo: "https://www.symbosys.com/company/newlog.webp",
    telephone: "+91 7992202650",
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
    availability: "https://schema.org/InStock",
    priceCurrency: "INR",
    price: "0",
  },
};
