export const ecommerceProductSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://www.symbosys.com/products/e-commerce#software",
  name: "Symbosys E-Commerce Software",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://www.symbosys.com/products/e-commerce",
  description:
    "Symbosys E-Commerce Software helps businesses build and manage secure, scalable online stores with product management, order processing, payment integration, inventory management, and customer-friendly shopping experiences.",
  publisher: {
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
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
};
