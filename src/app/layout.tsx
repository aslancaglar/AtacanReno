import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import { unstable_cache } from "next/cache";
import { getFunctionName } from "convex/server";
import { convexToJson } from "convex/values";
import type { Preloaded } from "convex/react";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import { fetchQuery } from "convex/nextjs";
import { api } from "../../convex/_generated/api";
import { RGPDNotification } from "@/components/RGPDNotification";

// Revalidate static pages hourly so company-info edits propagate.
export const revalidate = 3600;

// preloadQuery() forces a `cache: "no-store"` fetch, which opts the entire
// route tree into dynamic rendering (uncacheable pages -> worse crawl budget).
// We wrap the fetch in unstable_cache so the no-store call is isolated and the
// pages stay statically generated, while still shipping the data in the SSR
// HTML. usePreloadedQuery() subscribes to live updates on the client anyway.
const getPreloadedCompanyInfo = unstable_cache(
  async (): Promise<Preloaded<typeof api.companyInfo.get>> => {
    const value = await fetchQuery(api.companyInfo.get);
    return {
      _name: getFunctionName(api.companyInfo.get),
      _argsJSON: convexToJson({}),
      _valueJSON: convexToJson(value),
    } as Preloaded<typeof api.companyInfo.get>;
  },
  ["company-info-preloaded"],
  { revalidate: 3600, tags: ["company-info"] }
);

const getRawCompanyInfo = unstable_cache(
  async () => {
    return await fetchQuery(api.companyInfo.get);
  },
  ["company-info-raw"],
  { revalidate: 3600, tags: ["company-info"] }
);

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
  const preloadedCompanyInfo = await getPreloadedCompanyInfo();
  const companyInfo = await getRawCompanyInfo();

  const defaultInfo = {
    email: "contact@atcrenovation.com",
    phone: "06 29 04 72 72",
    address: "123 Rue de Nancy, 54630 Flavigny-sur-Moselle",
  };

  const email = companyInfo?.email || defaultInfo.email;
  const phone = companyInfo?.phone || defaultInfo.phone;
  const address = companyInfo?.address || defaultInfo.address;

  // Split address for geo coordinates and address formatting
  const addressParts = address.split(",");
  const streetAddress = addressParts[0]?.trim() || "123 Rue de Nancy";
  const localityAndPostal = addressParts[1]?.trim() || "54630 Flavigny-sur-Moselle";
  const postalCodeMatch = localityAndPostal.match(/\d{5}/);
  const postalCode = postalCodeMatch ? postalCodeMatch[0] : "54630";
  const addressLocality = localityAndPostal.replace(/\d{5}/, "").trim() || "Flavigny-sur-Moselle";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "ATC Rénovation",
    "image": "https://atcrenovation.com/images/hero-bg.jpg",
    "@id": "https://atcrenovation.com/#organization",
    "url": "https://atcrenovation.com",
    "telephone": phone,
    "email": email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": streetAddress,
      "addressLocality": addressLocality,
      "postalCode": postalCode,
      "addressRegion": "Grand Est",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.5695,
      "longitude": 6.1866
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "sameAs": [
      "https://maps.app.goo.gl/RwbnhGRwfampRRGS8"
    ],
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Nancy" },
      { "@type": "AdministrativeArea", "name": "Vandœuvre-lès-Nancy" },
      { "@type": "AdministrativeArea", "name": "Laxou" },
      { "@type": "AdministrativeArea", "name": "Villers-lès-Nancy" },
      { "@type": "AdministrativeArea", "name": "Meurthe-et-Moselle" }
    ]
  };

  return (
    <html lang="fr" className={manrope.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href={process.env.NEXT_PUBLIC_CONVEX_URL} />
        <link rel="preconnect" href={process.env.NEXT_PUBLIC_CONVEX_URL} crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
