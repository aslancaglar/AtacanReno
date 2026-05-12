import type { Metadata } from "next";
import IsolationRenovationEnergetiquePageClient from "./IsolationRenovationEnergetiquePageClient";

const BASE_URL = "https://atcrenovation.com";
const SLUG = "isolation-renovation-energetique";

export const metadata: Metadata = {
  title: "Isolation Thermique & Rénovation Énergétique à Nancy (RGE) — ATC Rénovation",
  description:
    "Isolation certifiée RGE à Nancy : combles, murs, planchers. Éligible MaPrimeRénov', jusqu'à 80% d'aides. ATC Rénovation, artisan qualifié. Devis gratuit.",
  openGraph: {
    title: "Isolation Thermique & Rénovation Énergétique à Nancy (RGE) — ATC Rénovation",
    description:
      "Isolation certifiée RGE à Nancy : combles, murs, planchers. Éligible MaPrimeRénov', jusqu'à 80% d'aides.",
    url: `${BASE_URL}/services/${SLUG}`,
    type: "website",
    locale: "fr_FR",
    siteName: "ATC Rénovation",
    images: [
      {
        url: `${BASE_URL}/images/service-isolation.jpg`,
        width: 1200,
        height: 630,
        alt: "Isolation thermique RGE à Nancy — ATC Rénovation",
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
    name: "Isolation Thermique & Rénovation Énergétique à Nancy (RGE)",
    description:
      "Isolation certifiée RGE à Nancy : combles, murs, planchers. Éligible MaPrimeRénov', jusqu'à 80% d'aides.",
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
      { "@type": "ListItem", position: 3, name: "Isolation RGE", item: `${BASE_URL}/services/${SLUG}` },
    ],
  },
];

export default function IsolationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <IsolationRenovationEnergetiquePageClient />
    </>
  );
}
