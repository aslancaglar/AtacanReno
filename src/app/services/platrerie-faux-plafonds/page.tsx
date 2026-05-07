import type { Metadata } from "next";
import PlatrerieFauxPlafondsPageClient from "./PlatrerieFauxPlafondsPageClient";

const BASE_URL = "https://atcrenovation.com";
const SLUG = "platrerie-faux-plafonds";

export const metadata: Metadata = {
  title: "Artisan Plaquiste à Nancy | Plâtrerie & Faux Plafonds 54 — ATC Rénovation",
  description:
    "ATC Rénovation, votre artisan plaquiste à Nancy. Cloisons sur mesure, faux plafonds design, isolation phonique et enduits de finition en Meurthe-et-Moselle (54).",
  openGraph: {
    title: "Artisan Plaquiste à Nancy | Plâtrerie & Faux Plafonds 54 — ATC Rénovation",
    description:
      "ATC Rénovation, votre artisan plaquiste à Nancy. Cloisons sur mesure, faux plafonds design, isolation phonique et enduits de finition en Meurthe-et-Moselle (54).",
    url: `${BASE_URL}/services/${SLUG}`,
    type: "website",
    locale: "fr_FR",
    siteName: "ATC Rénovation",
  },
  alternates: {
    canonical: `${BASE_URL}/services/${SLUG}`,
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Artisan Plaquiste à Nancy | Plâtrerie & Faux Plafonds 54",
    description:
      "ATC Rénovation, votre artisan plaquiste à Nancy. Cloisons sur mesure, faux plafonds design, isolation phonique et enduits de finition en Meurthe-et-Moselle (54).",
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
      { "@type": "ListItem", position: 3, name: "Plâtrerie", item: `${BASE_URL}/services/${SLUG}` },
    ],
  },
];

export default function PlâtrerieePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PlatrerieFauxPlafondsPageClient />
    </>
  );
}
