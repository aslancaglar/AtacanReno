import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import { preloadQuery } from "convex/nextjs";
import { api } from "../../convex/_generated/api";
import { RGPDNotification } from "@/components/RGPDNotification";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atcrenovation.com"),
  title: "ATC Rénovation — Rénovation Intérieure à Nancy | Artisan RGE",
  description:
    "ATC Rénovation, artisan RGE à Nancy depuis 20 ans : peinture, isolation, plâtrerie, sols, aménagement de combles. Devis gratuit sous 48h.",
  authors: [{ name: "ATC Rénovation" }],
  icons: {
    icon: [
      { url: "/icon1.png", type: "image/png" },
      { url: "/icon0.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://atcrenovation.com",
    siteName: "ATC Rénovation",
    title: "ATC Rénovation — Rénovation Intérieure à Nancy | Artisan RGE",
    description:
      "ATC Rénovation, artisan RGE à Nancy depuis 20 ans : peinture, isolation, plâtrerie, sols, aménagement de combles. Devis gratuit sous 48h.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "ATC Rénovation — Spécialiste en rénovation intérieure à Nancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATC Rénovation — Rénovation Intérieure à Nancy | Artisan RGE",
    description:
      "ATC Rénovation, artisan RGE à Nancy depuis 20 ans : peinture, isolation, plâtrerie, sols, aménagement de combles. Devis gratuit sous 48h.",
    images: ["/images/hero-bg.jpg"],
  },
  other: {
    "geo.region": "FR-54",
    "geo.placename": "Nancy",
    "apple-mobile-web-app-title": "ATC Rénovation",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const preloadedCompanyInfo = await preloadQuery(api.companyInfo.get);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "ATC Rénovation",
    description: "Spécialiste en rénovation intérieure à Nancy depuis plus de 20 ans. Peinture, isolation RGE, plâtrerie, revêtements de sols, aménagement de combles.",
    logo: "https://atcrenovation.com/Logoicon.png",
    image: "https://atcrenovation.com/Logoicon.png",
    url: "https://atcrenovation.com",
    telephone: "+33629047272",
    email: "atacanch@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Flavigny-sur-Moselle",
      addressRegion: "Grand Est",
      postalCode: "54630",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.5749693291545,
      longitude: 6.183951325162242,
    },
    areaServed: [
      { "@type": "City", name: "Nancy" },
      { "@type": "City", name: "Flavigny-sur-Moselle" },
      { "@type": "City", name: "Vandœuvre-lès-Nancy" },
      { "@type": "City", name: "Lunéville" },
      { "@type": "City", name: "Toul" },
      { "@type": "City", name: "Longwy" },
      { "@type": "City", name: "Villers-lès-Nancy" },
      { "@type": "City", name: "Pont-à-Mousson" },
      { "@type": "City", name: "Saint-Max" },
      { "@type": "City", name: "Villerupt" },
      { "@type": "City", name: "Essey-lès-Nancy" },
      { "@type": "City", name: "Malzéville" },
      { "@type": "City", name: "Dombasle-sur-Meurthe" },
      { "@type": "City", name: "Jarville-la-Malgrange" },
      { "@type": "City", name: "Mont-Saint-Martin" },
      { "@type": "City", name: "Tomblaine" },
      { "@type": "City", name: "Saint-Nicolas-de-Port" },
      { "@type": "City", name: "Val de Briey" },
      { "@type": "City", name: "Jarny" },
      { "@type": "AdministrativeArea", name: "Grand Nancy" },
      { "@type": "AdministrativeArea", name: "Meurthe-et-Moselle" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "19:00",
      },
    ],
    priceRange: "€",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de rénovation",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plâtrerie, Cloisons & Faux Plafonds" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Isolation & Rénovation Énergétique RGE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Peinture & Décoration Intérieure" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Revêtements de Sols & Murs" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rénovation Chambre & Salon" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rénovation Complète d'Appartement" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Menuiserie & Aménagement Intérieur" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aménagement des Combles" } },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "29",
    },
  };

  return (
    <html lang="fr" className={manrope.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://precise-walrus-432.eu-west-1.convex.cloud" />
        <link rel="preconnect" href="https://precise-walrus-432.eu-west-1.convex.cloud" crossOrigin="anonymous" />
        <script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          suppressHydrationWarning
        />
        {/* Google Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16621131174"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-16621131174');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning>
        <ConvexClientProvider preloadedCompanyInfo={preloadedCompanyInfo}>
          {children}
          <RGPDNotification />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
