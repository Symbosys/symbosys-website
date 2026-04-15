import { Metadata } from "next";

export const homeMetadata: Metadata = {
  title: "Symbosys | Best software companies in India",
  description:
    "Symbosys is a leading software company in India offering web development, mobile apps, digital marketing & IT solutions for businesses.",
  keywords:
    "Looking for the best software company in India? Symbosys provides top-notch IT software services in Jharkhand.",
  icons: {
    icon: "./img/favico.ico",
  },
  verification: {
    google: "Ks_ZfkXUn4vTI5JM4umttV84X-EFLQlZGgZAtKzP_Lc",
  },
};

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareCompany",
  name: "Symbosys",
  url: "https://symbosys.com/",
  logo: "https://symbosys.com/img/newlog.png",
  description:
    "Symbosys is the best software company in India offering web development, mobile apps, ERP solutions, and digital transformation services.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ranchi, Jharkhand",
    addressLocality: "Ranchi",
    addressRegion: "Jharkhand",
    postalCode: "834002",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.facebook.com/symbosystech",
    "https://www.instagram.com/symbosys/",
    "https://x.com/SymbosysTech",
  ],
  foundingLocation: {
    "@type": "Place",
    name: "Ranchi, Jharkhand",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};
