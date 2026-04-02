import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Nos Services — ATC Rénovation | Rénovation Intérieure à Nancy",
  description:
    "Découvrez tous nos services de rénovation intérieure à Nancy : salle de bains, cuisine, peinture, isolation RGE, aménagement de combles, menuiserie et plus encore. Devis gratuit.",
  openGraph: {
    title: "Nos Services — ATC Rénovation | Rénovation Intérieure à Nancy",
    description:
      "Découvrez tous nos services de rénovation intérieure à Nancy : salle de bains, cuisine, peinture, isolation RGE, aménagement de combles et plus encore.",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
