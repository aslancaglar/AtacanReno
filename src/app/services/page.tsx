import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

const BASE_URL = "https://atcrenovation.com";

export const metadata: Metadata = {
  title: "Services de Rénovation Intérieure à Nancy — ATC Rénovation",
  description:
    "Tous nos services de rénovation intérieure à Nancy : peinture, isolation RGE, plâtrerie, revêtements de sols, combles, menuiserie. Devis gratuit sous 48h.",
  openGraph: {
    title: "Services de Rénovation Intérieure à Nancy — ATC Rénovation",
    description:
      "Tous nos services de rénovation intérieure à Nancy : peinture, isolation RGE, plâtrerie, sols, combles, menuiserie. Devis gratuit sous 48h.",
    url: `${BASE_URL}/services`,
    type: "website",
    locale: "fr_FR",
    siteName: "ATC Rénovation",
    images: [
      {
        url: `${BASE_URL}/images/hero-bg.jpg`,
        width: 1200,
        height: 630,
        alt: "Services de rénovation intérieure à Nancy — ATC Rénovation",
      },
    ],
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
