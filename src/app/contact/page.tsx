import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

const BASE_URL = "https://atcrenovation.com";

export const metadata: Metadata = {
  title: "Contact — ATC Rénovation | Devis Gratuit Rénovation Nancy",
  description:
    "Contactez ATC Rénovation à Nancy pour un devis gratuit sous 48h. Travaux de peinture, isolation RGE, plâtrerie, sols et aménagement de combles.",
  openGraph: {
    title: "Contact — ATC Rénovation | Devis Gratuit Rénovation Nancy",
    description:
      "Contactez ATC Rénovation à Nancy : devis gratuit sous 48h pour vos travaux de rénovation intérieure.",
    url: `${BASE_URL}/contact`,
    type: "website",
    locale: "fr_FR",
    siteName: "ATC Rénovation",
    images: [
      {
        url: `${BASE_URL}/images/hero-bg.jpg`,
        width: 1200,
        height: 630,
        alt: "Contactez ATC Rénovation à Nancy — Devis gratuit",
      },
    ],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
