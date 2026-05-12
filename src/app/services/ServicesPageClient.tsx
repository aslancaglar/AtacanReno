"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/home/CTASection";
import Image from "next/image";
import { services, serviceImages } from "@/data/services";

const ServicesPageClient = () => {
  return (
    <Layout>
        <PageHero
          backgroundImage="/images/service-appart.jpg"
          breadcrumbItems={[{ label: "Accueil", href: "/" }, { label: "Services" }]}
          eyebrow="Nos Services"
          title="Des solutions complètes pour votre rénovation intérieure."
          description="De la salle de bains à l'isolation RGE, nous maîtrisons tous les corps de métier pour transformer votre intérieur avec expertise et passion."
        />

        <section className="py-20 lg:py-28 bg-surface-container-low">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 1, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-12 max-w-3xl"
            >
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
                Choisir une prestation
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Tous nos métiers de rénovation à Nancy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Cette page sert de point d'entrée vers nos prestations. Chaque fiche détaille les méthodes, matériaux, délais et cas d'usage propres au service concerné.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 1, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      className="group bg-card rounded-2xl overflow-hidden hover:shadow-[0px_20px_40px_rgba(52,48,38,0.06)] transition-all duration-300 h-full block"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <Image
                          src={serviceImages[service.slug]}
                          alt={service.title}
                          width={640}
                          height={480}
                          quality={75}
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mb-4">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-lg font-bold text-nav mb-3 group-hover:text-primary transition-colors">
                          {service.seoTitle}
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                          {service.homeDescription}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                          Découvrir {service.linkLabel}
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── CTA (reused from homepage) ─── */}
        <CTASection />
    </Layout>
  );
};

export default ServicesPageClient;
