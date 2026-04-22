import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact — ATC Rénovation | Devis Gratuit Rénovation Nancy",
  description:
    "Contactez ATC Rénovation pour un devis gratuit sous 48h. Rénovation intérieure à Nancy : peinture, isolation RGE, plâtrerie, revêtements de sols, combles. Appelez-nous ou remplissez le formulaire.",
  openGraph: {
    title: "Contact — ATC Rénovation | Devis Gratuit Rénovation Nancy",
    description:
      "Contactez ATC Rénovation pour un devis gratuit sous 48h. Rénovation intérieure à Nancy.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
