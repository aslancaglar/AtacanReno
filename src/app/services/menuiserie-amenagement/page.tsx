import type { Metadata } from "next";
import MenuiserieAmenagementPageClient from "./MenuiserieAmenagementPageClient";

const BASE_URL = "https://atcrenovation.com";
const SLUG = "menuiserie-amenagement";

export const metadata: Metadata = {
  title: "Installation de Portes Intérieures à Nancy — ATC Rénovation",
  description:
    "Pose de portes intérieures à Nancy : blocs-portes, fin de chantier, réglages précis. Confort acoustique optimal. ATC Rénovation. Devis gratuit.",
  openGraph: {
    title: "Installation de Portes Intérieures à Nancy — ATC Rénovation",
    description:
      "Pose de portes intérieures à Nancy : blocs-portes, fin de chantier, réglages précis. Confort acoustique optimal.",
    url: `${BASE_URL}/services/${SLUG}`,
    type: "website",
    locale: "fr_FR",
    siteName: "ATC Rénovation",
    images: [
      {
        url: `${BASE_URL}/images/service-menuiserie.jpg`,
        width: 1200,
        height: 630,
        alt: "Menuiserie et portes intérieures à Nancy — ATC Rénovation",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/services/${SLUG}`,
  },
};

export default function PortesPage() {
  return <MenuiserieAmenagementPageClient />;
}
