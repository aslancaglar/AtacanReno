import type { Metadata } from "next";
import RenovationCompleteAppartementPageClient from "./RenovationCompleteAppartementPageClient";

const BASE_URL = "https://atcrenovation.com";
const SLUG = "renovation-complete-appartement";

export const metadata: Metadata = {
  title: "Rénovation Complète d'Appartement à Nancy — ATC Rénovation",
  description:
    "Rénovation complète d'appartement à Nancy, clé en main : tous corps de métier. Plomberie, électricité, peinture, sols. ATC Rénovation. Devis gratuit.",
  openGraph: {
    title: "Rénovation Complète d'Appartement à Nancy — ATC Rénovation",
    description:
      "Rénovation complète d'appartement à Nancy, clé en main : tous corps de métier. Plomberie, électricité, peinture, sols.",
    url: `${BASE_URL}/services/${SLUG}`,
    type: "website",
    locale: "fr_FR",
    siteName: "ATC Rénovation",
    images: [
      {
        url: `${BASE_URL}/images/service-appart.jpg`,
        width: 1200,
        height: 630,
        alt: "Rénovation complète d'appartement à Nancy — ATC Rénovation",
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
    name: "Rénovation Complète d'Appartement à Nancy",
    description:
      "Rénovation complète d'appartement à Nancy, clé en main : tous corps de métier. Plomberie, électricité, peinture, sols.",
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
      { "@type": "ListItem", position: 3, name: "Appartement Complet", item: `${BASE_URL}/services/${SLUG}` },
    ],
  },
];

export default function AppartementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <RenovationCompleteAppartementPageClient />
    </>
  );
}
