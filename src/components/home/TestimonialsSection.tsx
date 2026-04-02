"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

import { SectionHeading } from "./SectionHeading";

// Fallback data if Convex is not yet connected or has no reviews
const fallbackTestimonials = [
  {
    name: "Sophie Laurent",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    text: "Nous avons confié à Atacan la rénovation complète de notre salle de bains. Le résultat est spectaculaire : douche à l'italienne en mosaïque, double vasque sur mesure, et une finition irréprochable. L'équipe a respecté chaque détail de notre vision tout en apportant des conseils précieux. Un chantier propre, des délais tenus, un budget respecté. Nous recommandons sans hésiter !",
    rating: 5,
    project: "Rénovation Salle de Bains",
    imageUrl: "/images/real-1.jpg",
  },
  {
    name: "Jean-Pierre Morel",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "Atacan a pris en charge la rénovation intégrale de notre appartement T4 à Vandoeuvre. Tout a été refait : sols, murs, cuisine, salle de bains, électricité. Le suivi de chantier était exemplaire avec un seul interlocuteur du début à la fin. Le rapport qualité-prix est excellent et le résultat dépasse largement ce que nous imaginions. Merci à toute l'équipe pour ce travail remarquable.",
    rating: 5,
    project: "Rénovation Appartement T4",
    imageUrl: "/images/real-2.jpg",
  },
  {
    name: "Marie Dubois",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    text: "Notre vieille cuisine fermée a été transformée en un espace ouvert, moderne et lumineux. L'îlot central en quartz est magnifique, les rangements sont optimisés et la crédence en carreaux de ciment apporte un vrai cachet. L'équipe a su gérer la plomberie, l'électricité et la pose de cuisine avec une coordination parfaite. On adore cuisiner maintenant !",
    rating: 5,
    project: "Cuisine Ouverte Sur Mesure",
    imageUrl: "/images/real-3.jpg",
  },
  {
    name: "Thomas Renard",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    text: "Isolation des combles réalisée par Atacan dans le cadre de MaPrimeRénov'. Dossier d'aides monté par leurs soins, travaux propres et rapides. On sent vraiment la différence de confort thermique cet hiver. Entreprise certifiée RGE, sérieuse et compétente.",
    rating: 5,
    project: "Isolation Combles RGE",
    imageUrl: "/images/real-4.jpg",
  },
  {
    name: "Isabelle Martin",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    text: "Atacan a refait toute la peinture de notre salon et posé un magnifique papier peint panoramique. Le travail de préparation des murs était minutieux et le rendu final est sublime. Les conseils en colorimétrie nous ont beaucoup aidés à faire les bons choix.",
    rating: 5,
    project: "Peinture & Décoration",
    imageUrl: "/images/real-5.jpg",
  },
  {
    name: "François Petit",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    text: "Aménagement complet de nos combles en suite parentale avec salle d'eau. Un vrai travail d'orfèvre pour optimiser chaque centimètre sous les rampants. Pose de Velux, isolation, placo, carrelage, peinture — tout a été géré par une seule équipe. Résultat parfait.",
    rating: 5,
    project: "Aménagement Combles",
    imageUrl: "/images/real-6.jpg",
  },
];

const TestimonialsSection = () => {
  const convexReviews = useQuery(api.reviews.list, { onlyVisible: true });

  // Use convex reviews if available and non-empty, otherwise fall back to static data
  const testimonials = convexReviews && convexReviews.length > 0
    ? convexReviews.map((r) => ({
        name: r.name,
        avatarUrl: r.avatarUrl || "",
        text: r.text,
        rating: r.rating,
        project: r.project,
        imageUrl: r.imageUrl || "",
      }))
    : fallbackTestimonials;

  return (
    <section className="py-20 lg:py-28 bg-surface-container-low">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading 
          subtitle="Témoignages" 
          title="Ce que disent nos clients" 
          description="La satisfaction de nos clients est notre meilleure carte de visite. Découvrez leurs retours d'expérience." 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {t.imageUrl && (
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={t.imageUrl}
                    alt={t.project}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={640}
                    height={360}
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary uppercase">
                      {t.name.split(" ").map((n: string) => n[0]).join("").substring(0, 2)}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-nav block">{t.name}</span>
                    <span className="text-xs text-secondary font-medium">{t.project}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
