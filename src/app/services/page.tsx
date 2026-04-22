import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Nos Services — ATC Rénovation | Rénovation Intérieure à Nancy",
  description:
    "Découvrez tous nos services de rénovation intérieure à Nancy : peinture, isolation RGE, plâtrerie et faux plafonds, revêtements de sols, aménagement de combles, menuiserie et plus encore. Devis gratuit.",
  openGraph: {
    title: "Nos Services — ATC Rénovation | Rénovation Intérieure à Nancy",
    description:
      "Découvrez tous nos services de rénovation intérieure à Nancy : peinture, isolation RGE, plâtrerie, revêtements de sols, aménagement de combles et plus encore.",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
