import type { Metadata } from "next";
import RealisationsPageClient from "./RealisationsPageClient";

const BASE_URL = "https://atcrenovation.com";

export const metadata: Metadata = {
  title: "Réalisations Rénovation Intérieure Nancy — ATC Rénovation",
  description:
    "Découvrez nos projets de rénovation intérieure à Nancy et environs. Avant/après, appartements, peinture, isolation : la preuve de notre savoir-faire.",
  openGraph: {
    title: "Réalisations Rénovation Intérieure Nancy — ATC Rénovation",
    description:
      "Découvrez nos projets de rénovation intérieure à Nancy et environs. Avant/après, appartements, peinture, isolation.",
  },
  alternates: {
    canonical: "/realisations",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Nos Réalisations",
    url: `${BASE_URL}/realisations`,
    description:
      "Portfolio de projets de rénovation intérieure réalisés à Nancy et ses environs.",
    isPartOf: { "@type": "WebSite", name: "ATC Rénovation", url: BASE_URL },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Réalisations", item: `${BASE_URL}/realisations` },
    ],
  },
];

export default function RealisationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <RealisationsPageClient />
    </>
  );
}
