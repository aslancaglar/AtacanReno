import type { Metadata } from "next";
import PeintureDecorationPageClient from "./PeintureDecorationPageClient";

const BASE_URL = "https://atcrenovation.com";
const SLUG = "peinture-decoration";

export const metadata: Metadata = {
  title: "Peinture & Décoration Intérieure à Nancy — ATC Rénovation",
  description:
    "Peintre à Nancy : peinture intérieure, papier peint, enduits décoratifs. Finitions impeccables, conseils colorimétriques. ATC Rénovation. Devis gratuit.",
  openGraph: {
    title: "Peinture & Décoration Intérieure à Nancy — ATC Rénovation",
    description:
      "Peintre à Nancy : peinture intérieure, papier peint, enduits décoratifs. Finitions impeccables, conseils colorimétriques.",
    url: `${BASE_URL}/services/${SLUG}`,
    type: "website",
    locale: "fr_FR",
    siteName: "ATC Rénovation",
    images: [
      {
        url: `${BASE_URL}/images/service-peinture.jpg`,
        width: 1200,
        height: 630,
        alt: "Peinture intérieure à Nancy — ATC Rénovation",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/services/${SLUG}`,
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Peinture & Décoration Intérieure à Nancy",
    description:
      "Peintre à Nancy : peinture intérieure, papier peint, enduits décoratifs. Finitions impeccables, conseils colorimétriques.",
    url: `${BASE_URL}/services/${SLUG}`,
    provider: {
      "@type": "LocalBusiness",
      name: "ATC Rénovation",
      url: BASE_URL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nancy",
        addressRegion: "Grand Est",
        postalCode: "54000",
        addressCountry: "FR",
      },
    },
    areaServed: [
      { "@type": "City", name: "Nancy" },
      { "@type": "AdministrativeArea", name: "Meurthe-et-Moselle" },
    ],
    offers: {
      "@type": "Offer",
      description: "Devis gratuit sous 48h",
      price: "0",
      priceCurrency: "EUR",
      url: `${BASE_URL}/devis`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Peinture", item: `${BASE_URL}/services/${SLUG}` },
    ],
  },
];

export default function PeinturePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PeintureDecorationPageClient />
    </>
  );
}
