export const videoAnimationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Video Animation Services",
  name: "Video Animation Services by Symbosys",
  url: "https://www.symbosys.com/service/video-animation",
  description:
    "Symbosys provides professional video animation services including 2D animation, 3D animation, motion graphics, explainer videos, VFX, storyboard creation, and creative visual solutions for businesses across India.",
  provider: {
    "@type": "Organization",
    name: "Symbosys",
    url: "https://www.symbosys.com/",
    logo: "https://www.symbosys.com/company/newlog.webp",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7992202650",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://www.facebook.com/symbosystech",
      "https://x.com/SymbosysTech",
      "https://www.instagram.com/symbosys/",
      "https://www.youtube.com/@Symbosys",
      "https://www.symbosys.com/",
    ],
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  serviceOutput: [
    "2D Animation",
    "3D Animation",
    "Explainer Videos",
    "Motion Graphics",
    "Visual Effects",
    "Storyboard Design",
  ],
  offers: {
    "@type": "Offer",
    url: "https://www.symbosys.com/service/video-animation",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
};
