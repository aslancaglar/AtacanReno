import type { Metadata } from "next";
import DevisPageClient from "./DevisPageClient";

const BASE_URL = "https://atcrenovation.com";

export const metadata: Metadata = {
  title: "Demande de Devis Gratuit — ATC Rénovation Nancy",
  description:
    "Demandez votre devis gratuit en ligne pour votre rénovation à Nancy. Réponse sous 48h, sans engagement. Peinture, isolation RGE, plâtrerie, sols, combles.",
  openGraph: {
    title: "Demande de Devis Gratuit — ATC Rénovation Nancy",
    description:
      "Demandez votre devis gratuit en ligne pour votre rénovation à Nancy. Réponse sous 48h, sans engagement.",
    url: `${BASE_URL}/devis`,
    type: "website",
    locale: "fr_FR",
    siteName: "ATC Rénovation",
    images: [
      {
        url: `${BASE_URL}/images/hero-bg.jpg`,
        width: 1200,
        height: 630,
        alt: "Devis gratuit rénovation intérieure Nancy — ATC Rénovation",
      },
    ],
  },
  alternates: {
    canonical: "/devis",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Demande de Devis Gratuit",
    url: `${BASE_URL}/devis`,
    description:
      "Formulaire de demande de devis gratuit pour vos travaux de rénovation intérieure à Nancy.",
    isPartOf: { "@type": "WebSite", name: "ATC Rénovation", url: BASE_URL },
    potentialAction: {
      "@type": "Action",
      name: "Demander un devis",
      target: `${BASE_URL}/devis`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Devis", item: `${BASE_URL}/devis` },
    ],
  },
];

export default function DevisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <DevisPageClient />
    </>
  );
}
