import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import { preloadQuery, fetchQuery } from "convex/nextjs";
import { api } from "../../convex/_generated/api";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [preloadedCompanyInfo, companyInfo, visibleReviews] = await Promise.all([
    preloadQuery(api.companyInfo.get),
    fetchQuery(api.companyInfo.get),
    fetchQuery(api.reviews.list, { onlyVisible: true }),
  ]);

  const avgRating =
    visibleReviews.length > 0
      ? (visibleReviews.reduce((sum, r) => sum + r.rating, 0) / visibleReviews.length).toFixed(1)
      : null;

  const structuredData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "ATC Rénovation",
    description: companyInfo.description ?? "Spécialiste en rénovation intérieure à Nancy depuis 10 ans. Salle de bains, cuisine, peinture, isolation RGE certifié.",
    url: "https://atc-renovation.fr",
    telephone: companyInfo.phone,
    email: companyInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address,
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
    areaServed: [
      { "@type": "City", name: "Nancy" },
      { "@type": "City", name: "Vandoeuvre-lès-Nancy" },
      { "@type": "City", name: "Laxou" },
      { "@type": "City", name: "Villers-lès-Nancy" },
      { "@type": "City", name: "Essey-lès-Nancy" },
      { "@type": "City", name: "Maxéville" },
      { "@type": "AdministrativeArea", name: "Grand Nancy" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    priceRange: "€€",
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

  if (avgRating && visibleReviews.length > 0) {
    structuredData.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: avgRating,
      reviewCount: String(visibleReviews.length),
    };
  }

  return (
    <html lang="fr" className={manrope.variable}>
      <head>
        <link rel="preconnect" href="https://i.pravatar.cc" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body suppressHydrationWarning>
        <ConvexClientProvider preloadedCompanyInfo={preloadedCompanyInfo}>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
