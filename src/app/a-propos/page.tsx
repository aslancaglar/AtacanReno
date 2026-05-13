import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

const BASE_URL = "https://atcrenovation.com";

export const metadata: Metadata = {
  title: "À Propos — ATC Rénovation | Artisan RGE à Nancy",
  description:
    "ATC Rénovation, artisan certifié RGE en rénovation intérieure à Nancy depuis plus de 20 ans. Notre histoire, nos valeurs, nos certifications.",
  openGraph: {
    title: "À Propos — ATC Rénovation | Artisan RGE à Nancy",
    description:
      "ATC Rénovation, artisan certifié RGE en rénovation intérieure à Nancy depuis plus de 20 ans.",
    url: `${BASE_URL}/a-propos`,
    type: "website",
    locale: "fr_FR",
    siteName: "ATC Rénovation",
    images: [
      {
        url: `${BASE_URL}/images/hero-bg.jpg`,
        width: 1200,
        height: 630,
        alt: "ATC Rénovation — Artisan RGE rénovation intérieure Nancy",
      },
    ],
  },
  alternates: {
    canonical: "/a-propos",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
