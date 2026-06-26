import type { Metadata } from "next";
import AmenagementComblesPageClient from "./AmenagementComblesPageClient";

const BASE_URL = "https://atcrenovation.com";
const SLUG = "amenagement-combles";

export const metadata: Metadata = {
  title: "Aménagement des Combles à Nancy — ATC Rénovation",
  description:
    "Aménagement de combles à Nancy, clé en main : isolation, plâtrerie, électricité, sols, peinture. Chambre ou bureau sous les toits. Devis gratuit.",
  openGraph: {
    title: "Aménagement des Combles à Nancy — ATC Rénovation",
    description:
      "Aménagement de combles à Nancy, clé en main : isolation, plâtrerie, électricité, sols, peinture. Chambre ou bureau sous les toits.",
    url: `${BASE_URL}/${SLUG}`,
    type: "website",
    locale: "fr_FR",
    siteName: "ATC Rénovation",
    images: [
      {
        url: `${BASE_URL}/images/service-combles.jpg`,
        width: 1200,
        height: 630,
        alt: "Aménagement des combles à Nancy — ATC Rénovation",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/${SLUG}`,
  },
};

export default function ComblesPage() {
  return <AmenagementComblesPageClient />;
}
