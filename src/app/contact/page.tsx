import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

const BASE_URL = "https://atcrenovation.com";

export const metadata: Metadata = {
  title: "Contact — ATC Rénovation | Devis Gratuit Rénovation Nancy",
  description:
    "Contactez ATC Rénovation à Nancy pour un devis gratuit sous 48h. Travaux de peinture, isolation RGE, plâtrerie, sols et aménagement de combles.",
  openGraph: {
    title: "Contact — ATC Rénovation | Devis Gratuit Rénovation Nancy",
    description:
      "Contactez ATC Rénovation à Nancy : devis gratuit sous 48h pour vos travaux de rénovation intérieure.",
    url: `${BASE_URL}/contact`,
    type: "website",
    locale: "fr_FR",
    siteName: "ATC Rénovation",
    images: [
      {
        url: `${BASE_URL}/images/hero-bg.jpg`,
        width: 1200,
        height: 630,
        alt: "Contactez ATC Rénovation à Nancy — Devis gratuit",
      },
    ],
  },
  alternates: {
    canonical: "/contact",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact ATC Rénovation",
    url: `${BASE_URL}/contact`,
    description:
      "Contactez ATC Rénovation à Nancy pour un devis gratuit sous 48h.",
    isPartOf: { "@type": "WebSite", name: "ATC Rénovation", url: BASE_URL },
    mainEntity: {
      "@type": "Organization",
      name: "ATC Rénovation",
      url: BASE_URL,
      telephone: "+33 6 12 34 56 78",
      email: "atacanch@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Rue de Nancy",
        addressLocality: "Flavigny-sur-Moselle",
        postalCode: "54630",
        addressCountry: "FR",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${BASE_URL}/contact` },
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ContactPageClient />
    </>
  );
}
