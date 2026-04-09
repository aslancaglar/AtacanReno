"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import BeforeAfterSlider from "@/components/home/BeforeAfterSlider";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

/* ───────────────────── Data ───────────────────── */

const categories = ["Tout", "Salles de bain", "Cuisines", "Salons", "Appartements"];

const projects = [
  {
    title: "Suite Parentale de Luxe",
    location: "Nancy Centre",
    category: "Salles de bain",
    description: "Rénovation complète avec douche à l'italienne en mosaïque, double vasque sur mesure et finitions haut de gamme.",
    image: "/images/real-1.jpg",
    beforeImage: "/images/before-1.jpg",
  },
  {
    title: "Rénovation Complète T4",
    location: "Vandoeuvre-lès-Nancy",
    category: "Appartements",
    description: "Transformation intégrale d'un T4 : sols, murs, cuisine, salle de bains, électricité — un résultat clé en main.",
    image: "/images/real-2.jpg",
    beforeImage: "/images/before-2.jpg",
  },
  {
    title: "Loft Parisien Contemporain",
    location: "Nancy Vieille Ville",
    category: "Salons",
    description: "Création d'un espace ouvert et lumineux avec verrière intérieure, parquet massif et peinture décorative.",
    image: "/images/real-3.jpg",
  },
  {
    title: "Rénovation Design Épuré",
    location: "Laxou",
    category: "Salons",
    description: "Salon modernisé avec enduit décoratif, éclairage encastré et mobilier sur mesure pour un rendu épuré.",
    image: "/images/real-4.jpg",
    beforeImage: "/images/before-4.jpg",
  },
  {
    title: "Cuisine Ouverte Sur Mesure",
    location: "Nancy Centre",
    category: "Cuisines",
    description: "Cuisine ouverte avec îlot central en quartz, crédence en carreaux de ciment et rangements optimisés.",
    image: "/images/real-5.jpg",
  },
  {
    title: "Harmonie et Lumière",
    location: "Essey-lès-Nancy",
    category: "Cuisines",
    description: "Rénovation cuisine avec plan de travail en bois massif, façades laquées et éclairage LED intégré.",
    image: "/images/real-6.jpg",
  },
  {
    title: "Salle de Bains PMR",
    location: "Tomblaine",
    category: "Salles de bain",
    description: "Aménagement accessible avec douche de plain-pied, barres d'appui et revêtements antidérapants.",
    image: "/images/service-sdb.jpg",
  },
  {
    title: "Appartement Investisseur",
    location: "Nancy Stanislas",
    category: "Appartements",
    description: "Rénovation complète pour mise en location : optimisation des espaces, finitions soignées et budget maîtrisé.",
    image: "/images/service-appart.jpg",
  },
  {
    title: "Salon Cosy Contemporain",
    location: "Villers-lès-Nancy",
    category: "Salons",
    description: "Transformation d'un salon vieillissant en espace chaleureux avec papier peint panoramique et parquet contrecollé.",
    image: "/images/service-salon.jpg",
  },
];

/* ───────────────────── Stats ───────────────────── */

const stats = [
  { value: "300+", label: "Projets réalisés" },
  { value: "4.9/5", label: "Note Google" },
  { value: "10+", label: "Ans d'expérience" },
  { value: "100%", label: "Clients satisfaits" },
];

/* ───────────────────── Component ───────────────────── */

const RealisationsPageClient = () => {
  const [activeFilter, setActiveFilter] = useState("Tout");

  const filtered =
    activeFilter === "Tout"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <Layout>
        <PageHero
          backgroundImage="/images/real-3.jpg"
          breadcrumbItems={[{ label: "Accueil", href: "/" }, { label: "Réalisations" }]}
          eyebrow="Portfolio"
          title="Nos Réalisations"
          description="Découvrez nos projets de rénovation réalisés à Nancy et ses environs. Chaque chantier reflète notre savoir-faire et notre souci du détail."
        />

        {/* ─── Stats Bar ─── */}
        <section className="relative z-10 -mt-10">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-primary rounded-2xl shadow-2xl px-6 py-8 lg:py-6"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x divide-white/20">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                    className="text-center"
                  >
                    <span className="text-2xl lg:text-3xl font-extrabold text-white block">
                      {stat.value}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60 mt-1 block">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Portfolio Gallery ─── */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeader
              eyebrow="Nos projets"
              title="Avant / Après & Travaux Récents"
              description="Filtrez par catégorie pour explorer nos rénovations de salles de bains, cuisines, salons et appartements complets."
              className="mb-12"
            >
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === cat
                        ? "bg-primary text-primary-foreground"
                        : "bg-surface-container-highest text-muted-foreground hover:bg-surface-container"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </SectionHeader>

            {/* Masonry grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((project, i) => {
                  const heights = [
                    "aspect-[3/4]",
                    "aspect-square",
                    "aspect-[4/5]",
                    "aspect-[2/3]",
                    "aspect-[5/6]",
                    "aspect-[3/5]",
                  ];
                  const aspectClass = heights[i % heights.length];
                  return (
                    <motion.div
                      key={project.title}
                      layout
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.08,
                        ease: "easeOut",
                      }}
                      className="group cursor-pointer break-inside-avoid"
                    >
                      <div
                        className={`${aspectClass} rounded-2xl overflow-hidden mb-3 relative`}
                      >
                        {project.beforeImage ? (
                          <BeforeAfterSlider
                            beforeImage={project.beforeImage}
                            afterImage={project.image}
                            alt={project.title}
                            className="w-full h-full"
                          />
                        ) : (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            width={640}
                            height={800}
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="text-xs text-secondary font-semibold uppercase tracking-wider mb-1">
                            {project.category}
                          </div>
                          <h3 className="font-bold text-white">
                            {project.title}
                          </h3>
                          <p className="text-sm text-white/70">
                            {project.location}
                          </p>
                        </div>
                      </div>
                      {/* Description below card */}
                      <p className="text-sm text-muted-foreground leading-relaxed px-1">
                        {project.description}
                      </p>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ─── Témoignages ─── */}
        <TestimonialsSection />

        {/* ─── CTA ─── */}
        <CTASection />
    </Layout>
  );
};

export default RealisationsPageClient;
