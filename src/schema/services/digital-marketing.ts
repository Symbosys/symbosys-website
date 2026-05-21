export const digitalMarketingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Digital Marketing Services",
  name: "Digital Marketing Services by Symbosys",
  url: "https://www.symbosys.com/service/digital-marketing",
  description:
    "Symbosys provides professional digital marketing services including SEO, social media marketing, Google Ads, content marketing, branding, and online business growth solutions across India.",
  provider: {
    "@type": "Organization",
    name: "Symbosys",
    url: "https://www.symbosys.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://www.symbosys.com/company/newlog.webp",
    },
    sameAs: [
      "https://x.com/SymbosysTech",
      "https://www.facebook.com/symbosystech",
      "https://www.instagram.com/symbosys/",
      "https://www.youtube.com/@Symbosys",
    ],
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91- 7992202650",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["en", "Hindi"],
  },
  offers: {
    "@type": "Offer",
    url: "https://www.symbosys.com/service/digital-marketing",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Solutions",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "SEO Services",
      },
      {
        "@type": "OfferCatalog",
        name: "Social Media Marketing",
      },
      {
        "@type": "OfferCatalog",
        name: "Google Ads Management",
      },
      {
        "@type": "OfferCatalog",
        name: "Content Marketing",
      },
      {
        "@type": "OfferCatalog",
        name: "Brand Promotion",
      },
    ],
  },
};
