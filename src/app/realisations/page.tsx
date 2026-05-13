import type { Metadata } from "next";
import RealisationsPageClient from "./RealisationsPageClient";

const BASE_URL = "https://atcrenovation.com";

export const metadata: Metadata = {
  title: "Réalisations Rénovation Intérieure Nancy — ATC Rénovation",
  description:
    "Découvrez nos projets de rénovation intérieure à Nancy et environs. Avant/après, appartements, peinture, isolation : la preuve de notre savoir-faire.",
  openGraph: {
    title: "Réalisations Rénovation Intérieure Nancy — ATC Rénovation",
    description:
      "Découvrez nos projets de rénovation intérieure à Nancy et environs. Avant/après, appartements, peinture, isolation.",
    url: `${BASE_URL}/realisations`,
    type: "website",
    locale: "fr_FR",
    siteName: "ATC Rénovation",
    images: [
      {
        url: `${BASE_URL}/images/hero-bg.jpg`,
        width: 1200,
        height: 630,
        alt: "Réalisations de rénovation intérieure Nancy — ATC Rénovation",
      },
    ],
  },
  alternates: {
    canonical: "/realisations",
  },
};

export default function RealisationsPage() {
  return <RealisationsPageClient />;
}
