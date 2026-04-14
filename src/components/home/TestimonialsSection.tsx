"use client";

import { Star, Quote, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Button } from "@/components/ui/button";

import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext,
  type CarouselApi 
} from "@/components/ui/carousel";
import React from 'react';

import SectionHeader from "@/components/SectionHeader";

// Fallback data if Convex is not yet connected or has no reviews
const fallbackTestimonials = [
  {
    name: "Sophie Laurent",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    text: "Nous avons confié à ATC Rénovation la rénovation complète de notre salle de bains. Le résultat est spectaculaire : douche à l'italienne en mosaïque, double vasque sur mesure, et une finition irréprochable. L'équipe a respecté chaque détail de notre vision tout en apportant des conseils précieux. Un chantier propre, des délais tenus, un budget respecté. Nous recommandons sans hésiter !",
    rating: 5,
    project: "Rénovation Salle de Bains",
    imageUrl: "/images/real-1.jpg",
  },
  {
    name: "Jean-Pierre Morel",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "ATC Rénovation a pris en charge la rénovation intégrale de notre appartement T4 à Vandoeuvre. Tout a été refait : sols, murs, cuisine, salle de bains, électricité. Le suivi de chantier était exemplaire avec un seul interlocuteur du début à la fin. Le rapport qualité-prix est excellent et le résultat dépasse largement ce que nous imaginions. Merci à toute l'équipe pour ce travail remarquable.",
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
    text: "Isolation des combles réalisée par ATC Rénovation dans le cadre de MaPrimeRénov'. Dossier d'aides monté par leurs soins, travaux propres et rapides. On sent vraiment la différence de confort thermique cet hiver. Entreprise certifiée RGE, sérieuse et compétente.",
    rating: 5,
    project: "Isolation Combles RGE",
    imageUrl: "/images/real-4.jpg",
  },
  {
    name: "Isabelle Martin",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    text: "ATC Rénovation a refait toute la peinture de notre salon et posé un magnifique papier peint panoramique. Le travail de préparation des murs était minutieux et le rendu final est sublime. Les conseils en colorimétrie nous ont beaucoup aidés à faire les bons choix.",
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
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>();

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

  // Auto-slide logic
  React.useEffect(() => {
    if (!carouselApi) return;
    
    const interval = setInterval(() => {
      carouselApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselApi]);

  return (
    <section className="py-20 lg:py-28 bg-surface-container-low overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          eyebrow="Témoignages"
          title="Ce que disent nos clients"
          description="La satisfaction de nos clients est notre meilleure carte de visite. Découvrez leurs retours d'expérience."
        />

        <div className="relative group/carousel">
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 pl-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                    className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full border border-border/50"
                  >
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-primary uppercase">
                            {t.name.split(" ").map((n: string) => n[0]).join("").substring(0, 2)}
                          </span>
                        </div>
                        <div>
                          <span className="text-sm font-bold text-nav block">{t.name}</span>
                          <span className="text-xs text-secondary font-medium">{t.project}</span>
                        </div>
                      </div>

                      <div className="flex gap-1 mb-3">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                        ))}
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow italic">
                        &ldquo;{t.text}&rdquo;
                      </p>

                      {t.imageUrl && (
                        <div className="aspect-[16/9] overflow-hidden rounded-xl mt-auto">
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
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="hidden lg:block">
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover/carousel:opacity-100 transition-opacity" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 opacity-0 group-hover/carousel:opacity-100 transition-opacity" />
            </div>
          </Carousel>
        </div>

        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a 
              href="https://maps.app.goo.gl/RwbnhGRwfampRRGS8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="outline" className="btn-pill border-primary/20 hover:border-primary/40 hover:bg-primary/5 text-nav px-8 py-6 text-base font-semibold transition-all group">
                Lire tous les avis sur Google
                <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
