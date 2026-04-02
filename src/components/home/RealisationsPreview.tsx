"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "convex/react";
import { SectionHeading } from "./SectionHeading";
import { api } from "../../../convex/_generated/api";
import BeforeAfterSlider from "./BeforeAfterSlider";
import Link from "next/link";

const defaultCategories = ["Tout", "Cuisines", "Salles de bain", "Salons"];

// Fallback data when Convex is not yet connected or empty
const fallbackProjects = [
  { title: "Suite Parentale de Luxe", location: "Nancy Centre", category: "Salles de bain", imageUrl: "/images/real-1.jpg", beforeImageUrl: "/images/before-1.jpg" },
  { title: "Rénovation Complète T4", location: "Vandoeuvre-lès-Nancy", category: "Salons", imageUrl: "/images/real-2.jpg", beforeImageUrl: "/images/before-2.jpg" },
  { title: "Loft Parisien Contemporain", location: "Nancy Vieille Ville", category: "Salons", imageUrl: "/images/real-3.jpg" },
  { title: "Renovation Design Epuré", location: "Laxou", category: "Salons", imageUrl: "/images/real-4.jpg", beforeImageUrl: "/images/before-4.jpg" },
  { title: "Concept Loft Central", location: "Nancy Centre", category: "Cuisines", imageUrl: "/images/real-5.jpg" },
  { title: "Harmonie et Lumière", location: "Essey-lès-Nancy", category: "Cuisines", imageUrl: "/images/real-6.jpg" },
];

const RealisationsPreview = () => {
  const [activeFilter, setActiveFilter] = useState("Tout");
  const convexPortfolio = useQuery(api.portfolio.list, { onlyVisible: true });

  // Use Convex data if available and non-empty, otherwise fall back
  const projects = convexPortfolio && convexPortfolio.length > 0
    ? convexPortfolio.map((p) => ({
        title: p.title,
        location: p.location,
        category: p.category,
        imageUrl: p.imageUrl,
        beforeImageUrl: p.beforeImageUrl,
      }))
    : fallbackProjects;

  // Build categories from actual project data
  const uniqueCategories = Array.from(new Set(projects.map((p) => p.category)));
  const categories = ["Tout", ...uniqueCategories];

  const filtered = activeFilter === "Tout"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="realisations" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading 
          subtitle="Portfolio" 
          title="Nos Dernières Réalisations" 
          description="Découvrez nos projets de rénovation réalisés à Nancy et ses environs. Chaque chantier reflète notre savoir-faire et notre souci du détail." 
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mb-12 -mt-6"
        >
          {/* Filter chips */}
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
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const heights = ["aspect-[3/4]", "aspect-square", "aspect-[4/5]", "aspect-[2/3]", "aspect-[5/6]", "aspect-[3/5]"];
              const aspectClass = heights[i % heights.length];
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                  className="group cursor-pointer break-inside-avoid"
                >
                  <div className={`${aspectClass} rounded-2xl overflow-hidden mb-3 relative`}>
                    {project.beforeImageUrl ? (
                      <BeforeAfterSlider
                        beforeImage={project.beforeImageUrl}
                        afterImage={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full"
                      />
                    ) : (
                      <img
                        src={project.imageUrl}
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
                      <h3 className="font-bold text-white">{project.title}</h3>
                      <p className="text-sm text-white/70">{project.location}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <Link href="/realisations">
            <Button variant="outline" className="btn-pill px-8 font-semibold">
              Voir toutes nos réalisations
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RealisationsPreview;
