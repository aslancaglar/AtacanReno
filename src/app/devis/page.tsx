import type { Metadata } from "next";
import DevisPageClient from "./DevisPageClient";

const BASE_URL = "https://atcrenovation.com";

export const metadata: Metadata = {
  title: "Demande de Devis Gratuit — ATC Rénovation Nancy",
  description:
    "Demandez votre devis gratuit en ligne pour votre rénovation à Nancy. Réponse sous 48h, sans engagement. Peinture, isolation RGE, plâtrerie, sols, combles.",
  openGraph: {
    title: "Demande de Devis Gratuit — ATC Rénovation Nancy",
    description:
      "Demandez votre devis gratuit en ligne pour votre rénovation à Nancy. Réponse sous 48h, sans engagement.",
    url: `${BASE_URL}/devis`,
    type: "website",
    locale: "fr_FR",
    siteName: "ATC Rénovation",
    images: [
      {
        url: `${BASE_URL}/images/hero-bg.jpg`,
        width: 1200,
        height: 630,
        alt: "Devis gratuit rénovation intérieure Nancy — ATC Rénovation",
      },
    ],
  },
  alternates: {
    canonical: "/devis",
  },
};

export default function DevisPage() {
  return <DevisPageClient />;
}
