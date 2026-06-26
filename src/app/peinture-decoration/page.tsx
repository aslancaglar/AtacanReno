import type { Metadata } from "next";
import PeintureDecorationPageClient from "./PeintureDecorationPageClient";

const BASE_URL = "https://atcrenovation.com";
const SLUG = "peinture-decoration";

export const metadata: Metadata = {
  title: "Peinture & Décoration Intérieure à Nancy — ATC Rénovation",
  description:
    "Peintre à Nancy : peinture intérieure, papier peint, enduits décoratifs. Finitions impeccables, conseils colorimétriques. ATC Rénovation. Devis gratuit.",
  openGraph: {
    title: "Peinture & Décoration Intérieure à Nancy — ATC Rénovation",
    description:
      "Peintre à Nancy : peinture intérieure, papier peint, enduits décoratifs. Finitions impeccables, conseils colorimétriques.",
    url: `${BASE_URL}/${SLUG}`,
    type: "website",
    locale: "fr_FR",
    siteName: "ATC Rénovation",
    images: [
      {
        url: `${BASE_URL}/images/service-peinture.jpg`,
        width: 1200,
        height: 630,
        alt: "Peinture intérieure à Nancy — ATC Rénovation",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/${SLUG}`,
  },
};

export default function PeinturePage() {
  return <PeintureDecorationPageClient />;
}
