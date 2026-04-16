"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import BeforeAfterSlider from "@/components/home/BeforeAfterSlider";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import { fallbackProjects, aspectClasses, type ProjectData } from "@/data/realisations";
import Image from "next/image";
import MasonryGrid from "@/components/MasonryGrid";
import StatsSection from "@/components/home/StatsSection";

const RealisationsPageClient = () => {
  const [activeFilter, setActiveFilter] = useState("Tout");
  const convexPortfolio = useQuery(api.portfolio.list, { onlyVisible: true });

  // Use Convex data if available and non-empty, otherwise fall back
  const projects: ProjectData[] =
    convexPortfolio && convexPortfolio.length > 0
      ? convexPortfolio.map((p) => ({
          title: p.title,
          location: p.location,
          category: p.category,
          description: p.description ?? "",
          image: p.imageUrl,
          beforeImage: p.beforeImageUrl,
        }))
      : fallbackProjects;

  // Build categories dynamically from project data
  const uniqueCategories = Array.from(new Set(projects.map((p) => p.category)));
  const categories = ["Tout", ...uniqueCategories];

  const filtered =
    activeFilter === "Tout"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <Layout>
        <PageHero
          backgroundImage="/images/service-salon.jpg"
          breadcrumbItems={[{ label: "Accueil", href: "/" }, { label: "Réalisations" }]}
          eyebrow="Portfolio"
          title="Nos Réalisations"
          description="Découvrez nos projets de rénovation réalisés à Nancy et ses environs. Chaque chantier reflète notre savoir-faire et notre souci du détail."
        />

        {/* ─── Stats Bar ─── */}
        <StatsSection />

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

            <MasonryGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={24}>
                {filtered.map((project, i) => {
                  const aspectClass = aspectClasses[i % aspectClasses.length];
                  return (
                    <motion.div
                      key={`${project.title}-${i}`}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.08,
                        ease: "easeOut",
                      }}
                      className="group cursor-pointer"
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
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
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
              </MasonryGrid>
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
