import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "ATC Rénovation — Rénovation Intérieure à Nancy | Artisan RGE",
  description:
    "Artisan RGE à Nancy depuis plus de 20 ans. Peinture, isolation, plâtrerie, revêtements de sols, aménagement de combles. Devis gratuit sous 48h. Intervention sur Nancy et le Grand Nancy.",
  alternates: {
    canonical: "https://atcrenovation.com",
  },
  openGraph: {
    title: "ATC Rénovation — Rénovation Intérieure à Nancy | Artisan RGE",
    description:
      "Artisan RGE à Nancy depuis plus de 20 ans. Peinture, isolation, plâtrerie, revêtements de sols, aménagement de combles. Devis gratuit sous 48h.",
    url: "https://atcrenovation.com",
    type: "website",
  },
};

export default function Home() {
  return <HomeClient />;
}
