"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "convex/react";
import SectionHeader from "@/components/SectionHeader";
import { api } from "../../../convex/_generated/api";
import BeforeAfterSlider from "./BeforeAfterSlider";
import Link from "next/link";
import { fallbackProjects, aspectClasses, type ProjectData } from "@/data/realisations";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import MasonryGrid from "@/components/MasonryGrid";

const PREVIEW_LIMIT = 6;

const RealisationsPreview = () => {
  const [activeFilter, setActiveFilter] = useState("Tout");
  const convexPortfolio = useQuery(api.portfolio.list, { onlyVisible: true });

  // Use Convex data if available and non-empty, otherwise fall back
  const allProjects: ProjectData[] =
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

  // Build categories from actual project data
  const uniqueCategories = Array.from(new Set(allProjects.map((p) => p.category)));
  const categories = ["Tout", ...uniqueCategories];

  const filtered =
    activeFilter === "Tout"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  // Limit to 6 items for the homepage preview
  const displayedProjects = filtered.slice(0, PREVIEW_LIMIT);

  return (
    <section id="realisations" className="py-20 lg:py-28" suppressHydrationWarning>
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          eyebrow="Portfolio"
          title="Nos Dernières Réalisations"
          description="Découvrez nos projets de rénovation réalisés à Nancy et ses environs. Chaque chantier reflète notre savoir-faire et notre souci du détail."
        />
        <motion.div
          initial={{ opacity: 1, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mb-12 -mt-6"
        >
          {/* Filter chips */}
          <div className="flex flex-wrap gap-2" suppressHydrationWarning>
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

        <MasonryGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={24}>
            {displayedProjects.map((project, i) => {
              const aspectClass = aspectClasses[i % aspectClasses.length];
              return (
                <motion.div
                  key={`${project.title}-${i}`}
                  initial={{ opacity: 1, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                  className="group cursor-pointer"
                >
                  <div className={`${aspectClass} rounded-2xl overflow-hidden mb-3 relative`}>
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
                      <h3 className="font-bold text-white">{project.title}</h3>
                      <p className="text-sm text-white/70">{project.location}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </MasonryGrid>

        <motion.div
          initial={{ opacity: 1, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <Link href="/realisations">
            <Button variant="outline" className="btn-pill px-8 font-semibold group">
              Voir toutes nos réalisations
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RealisationsPreview;
