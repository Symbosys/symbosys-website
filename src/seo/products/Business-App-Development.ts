import { Metadata } from "next";

export const businessAppDevelopmentMetadata: Metadata = {
  title: "Symbosys | Business App Development Company in India",
  description:
    "Symbosys is a leading business app development and software development company in India, delivering scalable, secure, and innovative digital solutions.",
  alternates: {
    canonical: "https://www.symbosys.com/products/business-app-development",
  },
};

export const businessAppDevelopmentJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://symbosys.com/products/business-app-development",
  name: "Business App Development | Symbosys - Best Software Company in Ranchi",
  description:
    "Symbosys offers professional business app development services to build scalable, user-friendly mobile & web applications to automate and grow your business.",
  publisher: {
    "@type": "Organization",
    name: "Symbosys",
    url: "https://symbosys.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://symbosys.com/images/logo.png",
    },
  },
  mainEntity: {
    "@type": "Service",
    name: "Business App Development",
    description:
      "Custom business app development services including Android, iOS, and web apps for business automation, inventory, sales, CRM, ERP and operational workflows.",
    provider: {
      "@type": "Organization",
      name: "Symbosys",
      url: "https://symbosys.com/",
    },
    category: "Mobile & Web App Development",
    serviceType: [
      "Custom Business App Development",
      "Enterprise Mobile Application",
      "Web Application Development",
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://symbosys.com/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://symbosys.com/products/business-app-development",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Business App Development",
        "item": "https://symbosys.com/products/business-app-development",
      },
    ],
  },
};
