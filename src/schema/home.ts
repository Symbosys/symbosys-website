export const homeSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareCompany",
  "name": "Symbosys Software Company",
  "url": "https://www.symbosys.com/",
  "logo": "https://www.symbosys.com/company/newlog.webp",
  "description": "Symbosys is a software and digital transformation company providing web development, SEO, software development, app development, digital marketing, and IT solutions across India.",
  "areaServed": "India",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Manoram, Basant Vihar Rd Number 1/B, Harmu Housing Colony, Harmu, Ranchi, Jharkhand 834002",
    "addressLocality": "Ranchi",
    "addressRegion": "Jharkhand",
    "postalCode": "834001",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "7992202650",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["en", "Hindi"]
  },
  "sameAs": [
    "https://www.facebook.com/symbosystech",
    "https://x.com/SymbosysTech",
    "https://www.instagram.com/symbosys/",
    "https://www.youtube.com/@Symbosys",
    "https://symbosys.com/"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "IT Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Marketing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Software Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "App Development"
        }
      }
    ]
  }
};
