import type { Metadata } from "next";
import DevisSuccessClient from "./DevisSuccessClient";

export const metadata: Metadata = {
  title: "Demande reçue — ATC Rénovation",
  robots: {
    index: false,
    follow: true,
  },
};

export default function DevisSuccessPage() {
  return <DevisSuccessClient />;
}
