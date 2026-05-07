import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

const BASE_URL = "https://atcrenovation.com";

export const metadata: Metadata = {
  title: "À Propos — ATC Rénovation | Artisan RGE à Nancy",
  description:
    "ATC Rénovation, artisan certifié RGE en rénovation intérieure à Nancy depuis plus de 20 ans. Notre histoire, nos valeurs, nos certifications.",
  openGraph: {
    title: "À Propos — ATC Rénovation | Artisan RGE à Nancy",
    description:
      "ATC Rénovation, artisan certifié RGE en rénovation intérieure à Nancy depuis plus de 20 ans.",
  },
  alternates: {
    canonical: "/a-propos",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "À Propos d'ATC Rénovation",
    url: `${BASE_URL}/a-propos`,
    description:
      "ATC Rénovation, artisan certifié RGE spécialisé en rénovation intérieure à Nancy depuis plus de 20 ans.",
    isPartOf: { "@type": "WebSite", name: "ATC Rénovation", url: BASE_URL },
    mainEntity: {
      "@type": "Organization",
      name: "ATC Rénovation",
      url: BASE_URL,
      logo: `${BASE_URL}/Logoicon.png`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "À Propos", item: `${BASE_URL}/a-propos` },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <AboutPageClient />
    </>
  );
}
