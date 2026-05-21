export const domainHostingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Domain & Hosting Services",
  url: "https://www.symbosys.com/service/domain-hosting",
  logo: "https://www.symbosys.com/company/newlog.webp",
  description:
    "Symbosys provides reliable domain registration, web hosting, business email hosting, cloud hosting, SSL security, and website deployment solutions across India.",
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
  serviceType: "Domain Registration & Web Hosting",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hosting & Domain Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Domain Registration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Hosting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud Hosting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SSL Certificate",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Email Hosting",
        },
      },
    ],
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7992202650",
    contactType: "customer support",
    availableLanguage: ["English", "Hindi"],
  },
};
