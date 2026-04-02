import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "ATC Rénovation — Rénovation Intérieure à Nancy | Artisan RGE",
  description:
    "ATC Rénovation, spécialiste en rénovation intérieure à Nancy depuis 10 ans. Salle de bains, cuisine, peinture, isolation RGE. Devis gratuit, artisan certifié.",
  authors: [{ name: "ATC Rénovation" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://atc-renovation.fr",
    siteName: "ATC Rénovation",
    title: "ATC Rénovation — Rénovation Intérieure à Nancy | Artisan RGE",
    description:
      "ATC Rénovation, spécialiste en rénovation intérieure à Nancy depuis 10 ans. Salle de bains, cuisine, peinture, isolation RGE. Devis gratuit, artisan certifié.",
    images: [
      {
        url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7376ca57-f0f3-48b0-835d-0ea92127fb8a/id-preview-ec315f8c--fcdfaf25-f28f-4301-acf9-5a46a237e444.lovable.app-1775030363078.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATC Rénovation — Rénovation Intérieure à Nancy | Artisan RGE",
    description:
      "ATC Rénovation, spécialiste en rénovation intérieure à Nancy depuis 10 ans. Salle de bains, cuisine, peinture, isolation RGE. Devis gratuit, artisan certifié.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7376ca57-f0f3-48b0-835d-0ea92127fb8a/id-preview-ec315f8c--fcdfaf25-f28f-4301-acf9-5a46a237e444.lovable.app-1775030363078.png",
    ],
  },
  alternates: {
    canonical: "https://atc-renovation.fr",
  },
  other: {
    "geo.region": "FR-54",
    "geo.placename": "Nancy",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "ATC Rénovation",
  description:
    "Spécialiste en rénovation intérieure à Nancy depuis 10 ans. Salle de bains, cuisine, peinture, isolation RGE certifié.",
  url: "https://atc-renovation.fr",
  telephone: "+33XXXXXXXXX",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nancy",
    addressRegion: "Grand Est",
    postalCode: "54000",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.6921,
    longitude: 6.1844,
  },
  areaServed: {
    "@type": "City",
    name: "Nancy",
  },
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "50",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de rénovation",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rénovation de Salle de Bains" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rénovation de Cuisine" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Peinture & Décoration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Isolation & Rénovation Énergétique RGE" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aménagement des Combles" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rénovation Complète d'Appartement" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={manrope.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
