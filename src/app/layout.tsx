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

  return (
    <html lang="fr" className={manrope.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://precise-walrus-432.eu-west-1.convex.cloud" />
        <link rel="preconnect" href="https://precise-walrus-432.eu-west-1.convex.cloud" crossOrigin="anonymous" />
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
