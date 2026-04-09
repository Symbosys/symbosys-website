import { Metadata } from "next";

export const businessConsultancyMetadata: Metadata = {
  title: "Symbosys – Leading Software Development Company in India",
  description:
    "Symbosys is a trusted software development company in India offering business consultancy, custom software, IT solutions, and digital growth services.",
  alternates: {
    canonical: "https://www.symbosys.com/Business-Consultancy.php",
  },
};

export const businessConsultancyJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Symbosys",
  url: "https://symbosys.com/Business-Consultancy.php",
  logo: "https://symbosys.com/img/newlog.png",
  description:
    "Symbosys offers professional business consultancy services in Ranchi that help companies optimize strategy, improve performance, and grow revenue with expert guidance.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Harmu Housing Colony, Ranchi",
    addressLocality: "Ranchi",
    addressRegion: "Jharkhand",
    postalCode: "834002",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  priceRange: "₹₹",
  founder: {
    "@type": "Person",
    name: "Abhishek Shahdeo",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "17:30",
    },
  ],
  service: [
    {
      "@type": "Service",
      name: "Business Consultancy",
      description:
        "Expert business consultancy services including strategic planning, business growth support and management consulting.",
      url: "https://symbosys.com/Business-Consultancy.php",
    },
    {
      "@type": "Service",
      name: "Digital Transformation Consulting",
      description:
        "Consulting to help businesses transform digitally with technology solutions and process optimization.",
    },
  ],
  sameAs: [
    "https://www.facebook.com/symbosystech",
    "https://www.instagram.com/symbosys/",
    "https://x.com/SymbosysTech",
  ],
};
