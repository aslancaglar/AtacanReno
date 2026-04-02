import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import ServiceDetailClient from "./ServiceDetailClient";

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
    title: `${service.title} — ATC Rénovation | Nancy`,
    description: `${service.shortDescription} ATC Rénovation, artisan certifié RGE à Nancy. Devis gratuit sous 48h.`,
    openGraph: {
      title: `${service.title} — ATC Rénovation | Nancy`,
      description: service.shortDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient slug={slug} />;
}
