"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, ClipboardList, Calculator, Hammer, ThumbsUp } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/home/CTASection";
import RealisationsPreview from "@/components/home/RealisationsPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { services, serviceImages, getServiceBySlug } from "@/data/services";

const processSteps = [
  {
    icon: ClipboardList,
    title: "Diagnostic",
    description: "Visite sur site, prise de mesures et analyse de vos besoins pour définir le projet idéal.",
  },
  {
    icon: Calculator,
    title: "Devis détaillé",
    description: "Un devis transparent et complet sous 48h, sans surprise ni frais cachés.",
  },
  {
    icon: Hammer,
    title: "Réalisation",
    description: "Nos artisans qualifiés réalisent les travaux dans le respect des délais et du budget.",
  },
  {
    icon: ThumbsUp,
    title: "Livraison",
    description: "Réception des travaux avec vous, vérification de chaque détail et nettoyage du chantier.",
  },
];


interface ServiceDetailClientProps {
  slug: string;
}

const ServiceDetailClient = ({ slug }: ServiceDetailClientProps) => {
  const service = getServiceBySlug(slug);

  if (!service) return null;

  const Icon = service.icon;
  const imageUrl = serviceImages[service.slug] || "/images/hero-bg.jpg";

  // Get related services (exclude current, pick 3)
  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <Layout>
        {/* ─── Page Hero ─── */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={imageUrl}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
          </div>
          <div className="relative container mx-auto px-4 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Accueil", href: "/" },
                { label: "Services", href: "/services" },
                { label: service.shortTitle },
              ]}
              className="mb-8"
            />

            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-3 mb-5"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
                  {service.shortTitle}
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-white"
              >
                {service.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="text-white/80 text-lg leading-relaxed max-w-lg"
              >
                {service.shortDescription}
              </motion.p>
            </div>
          </div>
        </section>

        {/* ─── Description Section ─── */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
                  Notre expertise
                </span>
                <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-6">
                  {service.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                  {service.description}
                </p>

                {/* Highlights badges */}
                {service.highlights && service.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {service.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-flex items-center gap-1.5 bg-secondary/10 text-secondary-foreground text-xs font-semibold px-3 py-1.5 rounded-full border border-secondary/20"
                      >
                        <Icon className="w-3 h-3 text-secondary" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              >
                <div className="relative">
                  <img
                    src={imageUrl}
                    alt={service.title}
                    className="rounded-2xl object-cover w-full aspect-[4/3] shadow-[0px_20px_40px_rgba(52,48,38,0.06)]"
                    loading="lazy"
                    width={640}
                    height={480}
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    className="absolute -bottom-4 -right-4 lg:-right-6 bg-primary text-primary-foreground rounded-2xl px-5 py-4 shadow-lg text-center"
                  >
                    <Icon className="w-6 h-6 mx-auto mb-1" />
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/60">
                      Spécialiste
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Prestations Section ─── */}
        <section className="py-20 lg:py-28 bg-surface-container-low">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
                Ce que nous faisons
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Nos prestations
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Chaque prestation est réalisée par nos artisans qualifiés avec des matériaux de premier choix.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.prestations.map((prestation, j) => (
                <motion.div
                  key={prestation}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: j * 0.08,
                    ease: "easeOut",
                  }}
                  className="bg-card rounded-2xl p-6 hover:shadow-[0px_20px_40px_rgba(52,48,38,0.06)] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mb-4">
                    <Check className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="text-base font-bold text-nav mb-2">{prestation}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Notre Approche Section ─── */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
                Comment ça marche
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Notre approche
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Un processus simple et transparent pour votre projet de {service.shortTitle.toLowerCase()}.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, j) => {
                const StepIcon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: j * 0.1,
                      ease: "easeOut",
                    }}
                    className="relative text-center"
                  >
                    {/* Step number */}
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <StepIcon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-secondary text-secondary-foreground text-xs font-bold mb-3">
                      {j + 1}
                    </span>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Connector line (hidden on last item and mobile) */}
                    {j < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px] bg-border" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Réalisations (Homepage Component) ─── */}
        <div className="bg-surface-container-low">
          <RealisationsPreview />
        </div>

        {/* ─── Témoignages (Homepage Component) ─── */}
        <div className="[&>section]:bg-transparent">
          <TestimonialsSection />
        </div>

        {/* ─── Related Services ─── */}
        <section className="py-20 lg:py-28 bg-surface-container-low">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
                Découvrir aussi
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Nos autres services
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((related, j) => {
                const RelatedIcon = related.icon;
                return (
                  <motion.div
                    key={related.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: j * 0.08, ease: "easeOut" }}
                  >
                    <Link
                      href={`/services/${related.slug}`}
                      className="group bg-card rounded-2xl overflow-hidden hover:shadow-[0px_20px_40px_rgba(52,48,38,0.06)] transition-all duration-300 h-full block"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={serviceImages[related.slug]}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          width={640}
                          height={512}
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                          <RelatedIcon className="w-5 h-5 text-primary shrink-0" />
                          {related.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {related.shortDescription}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                          En savoir plus
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* View all services link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="text-center mt-12"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                Voir tous nos services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <CTASection />
    </Layout>
  );
};

export default ServiceDetailClient;
