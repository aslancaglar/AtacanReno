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
import StatsSection from "@/components/home/StatsSection";
import CTASection from "@/components/home/CTASection";
import PartnersSection from "@/components/home/PartnersSection";
import certMaprimerenov from "@/assets/cert-maprimerenov.jpg";
import certDecennale from "@/assets/cert-garantie-decennale.jpg";
import certRge from "@/assets/cert-rge-qualibat.jpg";

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

const timeline = [
  {
    year: "2014",
    title: "Les débuts",
    description:
      "Création d'ATC Rénovation à Nancy, fondée sur la passion de la rénovation intérieure et un savoir-faire artisanal solide.",
  },
  {
    year: "2016",
    title: "Premiers grands chantiers",
    description:
      "Réalisation de nos premières rénovations complètes d'appartements à Nancy et dans la métropole du Grand Nancy.",
  },
  {
    year: "2018",
    title: "Certification RGE",
    description:
      "Obtention de la certification RGE Qualibat, nous permettant d'accompagner nos clients dans leurs projets d'isolation et de rénovation énergétique.",
  },
  {
    year: "2020",
    title: "Développement & croissance",
    description:
      "Expansion de notre équipe et diversification de nos services pour offrir une offre complète clé en main.",
  },
  {
    year: "2024",
    title: "300+ projets réalisés",
    description:
      "Plus de 300 projets livrés avec une note moyenne de 4.9/5 sur Google. Une équipe renforcée pour des projets toujours plus ambitieux.",
  },
];

const certs = [
  { src: certRge.src, alt: "Certification RGE Qualibat", title: "RGE Qualibat" },
  { src: certDecennale.src, alt: "Garantie Décennale", title: "Garantie Décennale" },
  { src: certMaprimerenov.src, alt: "MaPrimeRénov'", title: "MaPrimeRénov'" },
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
        {/* ─── Page Hero ─── */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/about-portrait.jpg"
              alt="ATC Rénovation — Notre équipe"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
          </div>
          <div className="relative container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl">
              <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "À propos" }]} />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block"
              >
                À propos
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-white"
              >
                Une passion pour le détail, un engagement pour la qualité.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="text-white/80 text-lg leading-relaxed max-w-lg"
              >
                Depuis plus de 10 ans, nous transformons les intérieurs des
                habitations nancéiennes avec passion, expertise et un souci
                constant de la perfection.
              </motion.p>
            </div>
          </div>
        </section>

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
                <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
                  Notre histoire
                </span>
                <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-6">
                  De la passion artisanale à l'expertise reconnue
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    ATC Rénovation est née en 2014 de la volonté d'un artisan
                    passionné de proposer un service de rénovation intérieure
                    d'exception à Nancy et dans toute la métropole du Grand
                    Nancy.
                  </p>
                  <p>
                    Fort d'une expérience solide dans les différents corps de
                    métier du bâtiment — plomberie, électricité, plâtrerie,
                    peinture, carrelage — notre fondateur a constitué une équipe
                    de professionnels qualifiés partageant la même exigence de
                    qualité.
                  </p>
                  <p>
                    Aujourd'hui, avec plus de 300 projets réalisés et une note
                    de 4.9/5 sur Google, ATC Rénovation est devenu un acteur de
                    référence de la rénovation intérieure dans la région
                    nancéienne. Notre certification RGE nous permet également
                    d'accompagner nos clients dans leurs projets d'isolation et
                    de rénovation énergétique.
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
                  src="/images/about-portrait.jpg"
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
                    10+
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

        {/* ─── Timeline ─── */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-14"
            >
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
                Notre parcours
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold">
                Les étapes clés
              </h2>
            </motion.div>

            <div className="relative">
              {/* Vertical line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-px" />

              <div className="space-y-8 lg:space-y-0">
                {timeline.map((item, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.1,
                        ease: "easeOut",
                      }}
                      className={`relative lg:flex lg:items-center lg:gap-8 ${
                        isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                      }`}
                    >
                      {/* Content */}
                      <div
                        className={`lg:w-[calc(50%-2rem)] ${
                          isLeft ? "lg:text-right" : "lg:text-left"
                        }`}
                      >
                        <div className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border">
                          <span className="text-sm font-bold text-secondary">
                            {item.year}
                          </span>
                          <h3 className="text-lg font-bold mt-1 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Dot */}
                      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                      {/* Spacer for the other side */}
                      <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Our Values ─── */}
        <section className="py-20 lg:py-28 bg-surface-container-low">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-14"
            >
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
                Ce qui nous définit
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Nos Valeurs
              </h2>
              <p className="text-muted-foreground max-w-2xl leading-relaxed">
                Chaque projet est guidé par des principes forts qui font la
                différence entre un bon travail et un travail exceptionnel.
              </p>
            </motion.div>

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
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
                  Pourquoi nous choisir
                </span>
                <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-6">
                  L'assurance d'un travail bien fait, du premier coup.
                </h2>
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
                  src="/images/real-1.jpg"
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
        <div className="bg-surface-container-low">
          <PartnersSection />
        </div>

        {/* ─── CTA (reused from homepage) ─── */}
        <CTASection />
    </Layout>
  );
};

export default AboutPageClient;
