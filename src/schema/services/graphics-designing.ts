export const graphicsDesigningSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.symbosys.com/service/graphics-designing#service",
  name: "Graphic Designing Services",
  serviceType: "Graphic Designing",
  url: "https://www.symbosys.com/service/graphics-designing",
  description:
    "Symbosys provides professional graphic designing services including logo design, brand identity, social media creatives, brochures, business stationery, print design, and 3D visualization for businesses across India.",
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
    price: "0",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
};
