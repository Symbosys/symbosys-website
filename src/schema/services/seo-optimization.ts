export const seoServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Optimization Services",
  url: "https://www.symbosys.com/service/seo-optimization",
  description:
    "Symbosys provides professional SEO optimization services including on-page SEO, technical SEO, keyword research, local SEO and ranking improvement solutions.",
  provider: {
    "@type": "Organization",
    name: "Symbosys",
    url: "https://www.symbosys.com/",
    logo: "https://www.symbosys.com/company/newlog.webp",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91- 7992202650",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["en", "Hindi"],
  },
  sameAs: [
    "https://www.facebook.com/symbosystech",
    "https://x.com/SymbosysTech",
    "https://www.instagram.com/symbosys/",
    "https://www.youtube.com/@Symbosys",
    "https://symbosys.com/",
  ],
  areaServed: "India",
  serviceType: "SEO Services",
};

export const seoBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.symbosys.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "SEO Optimization",
      item: "https://www.symbosys.com/service/seo-optimization",
    },
  ],
};

export const seoFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What SEO services does Symbosys provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Symbosys provides on-page SEO, off-page SEO, technical SEO and local SEO services.",
      },
    },
  ],
};
