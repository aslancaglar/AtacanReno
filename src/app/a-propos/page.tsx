import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "À Propos — ATC Rénovation | Artisan RGE à Nancy",
  description:
    "Découvrez ATC Rénovation, votre artisan certifié RGE spécialisé en rénovation intérieure à Nancy depuis plus de 10 ans. Notre histoire, nos valeurs, nos certifications.",
  openGraph: {
    title: "À Propos — ATC Rénovation | Artisan RGE à Nancy",
    description:
      "Découvrez ATC Rénovation, votre artisan certifié RGE spécialisé en rénovation intérieure à Nancy depuis plus de 10 ans.",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
