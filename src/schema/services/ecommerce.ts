export const ecommerceServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.symbosys.com/service/ecommerce#service",
  name: "E-Commerce Website Development Services",
  serviceType: "E-Commerce Website Development",
  url: "https://www.symbosys.com/service/ecommerce",
  description:
    "Symbosys provides e-commerce website development, MLM software, and CMS solutions for businesses in India, delivering secure, scalable, and high-performance digital platforms.",
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
    priceCurrency: "INR",
    price: "0",
    availability: "https://schema.org/InStock",
  },
};
