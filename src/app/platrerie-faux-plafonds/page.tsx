import type { Metadata } from "next";
import PlatrerieFauxPlafondsPageClient from "./PlatrerieFauxPlafondsPageClient";

const BASE_URL = "https://atcrenovation.com";
const SLUG = "platrerie-faux-plafonds";

export const metadata: Metadata = {
  title: "Artisan Plaquiste à Nancy | Plâtrerie & Faux Plafonds 54 — ATC Rénovation",
  description:
    "ATC Rénovation, votre artisan plaquiste à Nancy. Cloisons sur mesure, faux plafonds design, isolation phonique et enduits de finition en Meurthe-et-Moselle (54).",
  openGraph: {
    title: "Artisan Plaquiste à Nancy | Plâtrerie & Faux Plafonds 54 — ATC Rénovation",
    description:
      "ATC Rénovation, votre artisan plaquiste à Nancy. Cloisons sur mesure, faux plafonds design, isolation phonique et enduits de finition en Meurthe-et-Moselle (54).",
    url: `${BASE_URL}/${SLUG}`,
    type: "website",
    locale: "fr_FR",
    siteName: "ATC Rénovation",
    images: [
      {
        url: `${BASE_URL}/images/service-platrerie.jpg`,
        width: 1200,
        height: 630,
        alt: "Plâtrerie et faux plafonds à Nancy — ATC Rénovation",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/${SLUG}`,
  },
};

export default function PlâtrerieePage() {
  return <PlatrerieFauxPlafondsPageClient />;
}
