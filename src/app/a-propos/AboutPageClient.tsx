"use client";

import { motion } from "framer-motion";
import {
  Check,
  Shield,
  Heart,
  Users,
  Target,
  Award,
  Handshake,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import StatsSection from "@/components/home/StatsSection";
import CTASection from "@/components/home/CTASection";
import PartnersSection from "@/components/home/PartnersSection";
import { certs } from "@/data/certifications";

/* ───────────────────── Data ───────────────────── */

const values = [
  {
    icon: Shield,
    title: "Qualité sans compromis",
    description:
      "Nous utilisons exclusivement des matériaux de premier choix et appliquons des techniques éprouvées pour garantir un résultat durable et impeccable.",
  },
  {
    icon: Heart,
    title: "Passion du métier",
    description:
      "Chaque projet est une nouvelle aventure. Notre équipe met tout son cœur et son savoir-faire pour transformer vos idées en réalité.",
  },
  {
    icon: Users,
    title: "Écoute & transparence",
    description:
      "Un seul interlocuteur du début à la fin. Nous vous accompagnons à chaque étape avec des échanges clairs et un suivi personnalisé.",
  },
  {
    icon: Target,
    title: "Respect des engagements",
    description:
      "Délais tenus, budget respecté. Nous nous engageons sur un planning précis et un devis détaillé sans mauvaise surprise.",
  },
  {
    icon: Award,
    title: "Certifications reconnues",
    description:
      "Artisan certifié RGE et assuré en garantie décennale, nous répondons aux plus hauts standards de qualité et de sécurité.",
  },
  {
    icon: Handshake,
    title: "Satisfaction client",
    description:
      "Avec une note de 4.9/5 sur Google, la satisfaction de nos clients est notre meilleure récompense et notre première motivation.",
  },
];


const whyUs = [
  "Un interlocuteur unique pour tous vos travaux d'intérieur",
  "Artisan certifié RGE pour l'isolation et la rénovation énergétique",
  "Garantie décennale sur l'ensemble de nos travaux",
  "Devis gratuit et détaillé sous 48 heures",
  "Coordination de tous les corps de métier",
  "Chantier propre et respect du voisinage",
  "Suivi photo de l'avancement de vos travaux",
  "Service après-vente réactif",
];

/* ───────────────────── Components ───────────────────── */

const AboutPageClient = () => {
  return (
    <Layout>
      <PageHero
        backgroundImage="/images/about-hero-highres.png"
        breadcrumbItems={[{ label: "Accueil", href: "/" }, { label: "À propos" }]}
        eyebrow="À propos"
        title="ATC Rénovation - Notre différence est notre qualité"
        description="ATC Rénovation est votre spécialiste de la rénovation intérieure clé en main depuis plus de 20 ans. Nous intervenons à Nancy et dans toute la Meurthe-et-Moselle (54)."
      />

      {/* ─── Stats (reused from homepage) ─── */}
      <StatsSection />

      {/* ─── Our Story ─── */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <SectionHeader
                eyebrow="Notre histoire"
                title="Bien plus qu'un chantier : un engagement de qualité, de rigueur et de confiance"
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Chez <strong>ATC Rénovation,</strong> nous croyons qu'un chantier bien mené change bien plus qu'un espace — il change votre quotidien. C'est pourquoi chaque projet est abordé avec la même rigueur et la même attention au détail. On écoute, on conseille, on planifie, et on exécute — du premier coup de marteau jusqu'à la dernière finition.
                </p>
                <p>
                  <strong>20 ans d'expérience. Plus de 300 projets livrés.</strong> Appartements, maisons, locaux professionnels — chaque chantier nous a fait progresser. Si notre réputation s'est construite sans publicité, c'est parce que notre meilleur argument reste le travail accompli : des finitions soignées, un planning respecté, et une transparence totale du premier rendez-vous à la remise des clés.
                </p>
                <p>
                  <strong>Certifiés RGE Qualibat</strong>, nous intervenons également sur les travaux d'isolation et de rénovation énergétique, et nous vous accompagnons dans vos démarches MaPrimeRénov' pour optimiser votre budget.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="relative flex justify-center"
            >
              <img
                src="/images/about-highres.png"
                alt="Fondateur d'ATC Rénovation"
                className="rounded-2xl object-cover w-full max-w-md aspect-[3/4] shadow-[0px_20px_40px_rgba(52,48,38,0.06)]"
                loading="lazy"
                width={640}
                height={800}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="absolute -bottom-4 -right-4 lg:-right-6 bg-secondary text-secondary-foreground rounded-2xl px-5 py-4 shadow-lg text-center"
              >
                <span className="block text-2xl font-extrabold leading-none">
                  20+
                </span>
                <span className="block text-xs font-semibold mt-1">
                  ans d'expérience
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Certifications (images only) ─── */}
      <section className="py-10 lg:py-14 bg-surface-container-low">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.alt}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                className="flex items-center justify-center"
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="h-24 lg:h-28 w-auto object-contain rounded-xl hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  width={128}
                  height={128}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── Our Values ─── */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            eyebrow="Ce qui nous définit"
            title="Nos Valeurs"
            description="Chaque projet est guidé par des principes forts qui font la différence entre un bon travail et un travail exceptionnel."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: "easeOut",
                  }}
                  className="bg-card rounded-2xl p-6 hover:shadow-[0px_20px_40px_rgba(52,48,38,0.06)] transition-all duration-300 group border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="py-20 lg:py-28 bg-surface-container-low">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <SectionHeader
                eyebrow="Pourquoi nous choisir"
                title="L'assurance d'un travail bien fait, du premier coup."
              />
              <ul className="space-y-3 mb-8">
                {whyUs.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2 + i * 0.06,
                      ease: "easeOut",
                    }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Image collage */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="/images/service-peinture-highres.png"
                alt="Rénovation salle de bains ATC"
                className="rounded-2xl object-cover w-full aspect-[3/4] shadow-sm"
                loading="lazy"
                width={400}
                height={500}
              />
              <img
                src="/images/real-3.jpg"
                alt="Rénovation salon ATC"
                className="rounded-2xl object-cover w-full aspect-[3/4] shadow-sm mt-8"
                loading="lazy"
                width={400}
                height={500}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Partners (reused from homepage) ─── */}
      <PartnersSection />

      {/* ─── CTA (reused from homepage) ─── */}
      <CTASection />
    </Layout>
  );
};

export default AboutPageClient;
