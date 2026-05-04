import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import ServiceDetailClient from "./ServiceDetailClient";

const BASE_URL = "https://atcrenovation.com";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service introuvable — ATC Rénovation",
    };
  }

  return {
    title: `${service.seoTitle} — ATC Rénovation`,
    description: service.metaDescription,
    openGraph: {
      title: `${service.seoTitle} — ATC Rénovation`,
      description: service.metaDescription,
      url: `${BASE_URL}/services/${slug}`,
      type: "website",
      locale: "fr_FR",
      siteName: "ATC Rénovation",
    },
    alternates: {
      canonical: `${BASE_URL}/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.seoTitle,
    description: service.metaDescription,
    url: `${BASE_URL}/services/${slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: "ATC Rénovation",
      url: BASE_URL,
      telephone: "+33 6 12 34 56 78",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nancy",
        addressRegion: "Grand Est",
        postalCode: "54000",
        addressCountry: "FR",
      },
    },
    areaServed: [
      { "@type": "City", name: "Nancy" },
      { "@type": "AdministrativeArea", name: "Grand Nancy" },
      { "@type": "City", name: "Vandoeuvre-lès-Nancy" },
      { "@type": "City", name: "Laxou" },
    ],
    offers: {
      "@type": "Offer",
      description: "Devis gratuit sous 48h",
      price: "0",
      priceCurrency: "EUR",
      url: `${BASE_URL}/devis`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServiceDetailClient slug={slug} />
    </>
  );
}
