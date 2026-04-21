/** Cycles through aspect ratios for the Pinterest/masonry effect. */
export const aspectClasses = [
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[2/3]",
  "aspect-[5/6]",
  "aspect-[3/5]",
] as const;

export interface ProjectData {
  title: string;
  location: string;
  category: string;
  description: string;
  image: string;
  beforeImage?: string;
}

/**
 * Fallback portfolio data used when the Convex DB is empty or not yet connected.
 * Shared between the homepage RealisationsPreview (limited to 6) and the
 * full /realisations page.
 */
export const fallbackProjects: ProjectData[] = [
  {
    title: "Suite Parentale de Luxe",
    location: "Nancy Centre",
    category: "Salles de bain",
    description:
      "Rénovation complète avec douche à l'italienne en mosaïque, double vasque sur mesure et finitions haut de gamme.",
    image: "/images/real-2.jpg",
  },
  {
    title: "Rénovation Complète T4",
    location: "Vandoeuvre-lès-Nancy",
    category: "Appartements",
    description:
      "Transformation intégrale d'un T4 : sols, murs, cuisine, salle de bains, électricité — un résultat clé en main.",
    image: "/images/real-3.jpg",
  },
  {
    title: "Loft Parisien Contemporain",
    location: "Nancy Vieille Ville",
    category: "Salons",
    description:
      "Création d'un espace ouvert et lumineux avec verrière intérieure, parquet massif et peinture décorative.",
    image: "/images/real-3.jpg",
  },
  {
    title: "Rénovation Design Épuré",
    location: "Laxou",
    category: "Salons",
    description:
      "Salon modernisé avec enduit décoratif, éclairage encastré et mobilier sur mesure pour un rendu épuré.",
    image: "/images/real-4.jpg",
  },
  {
    title: "Cuisine Ouverte Sur Mesure",
    location: "Nancy Centre",
    category: "Cuisines",
    description:
      "Cuisine ouverte avec îlot central en quartz, crédence en carreaux de ciment et rangements optimisés.",
    image: "/images/real-5.jpg",
  },
  {
    title: "Harmonie et Lumière",
    location: "Essey-lès-Nancy",
    category: "Cuisines",
    description:
      "Rénovation cuisine avec plan de travail en bois massif, façades laquées et éclairage LED intégré.",
    image: "/images/real-6.jpg",
  },
  {
    title: "Salle de Bains PMR",
    location: "Tomblaine",
    category: "Salles de bain",
    description:
      "Aménagement accessible avec douche de plain-pied, barres d'appui et revêtements antidérapants.",
    image: "/images/service-sdb.jpg",
  },
  {
    title: "Appartement Investisseur",
    location: "Nancy Stanislas",
    category: "Appartements",
    description:
      "Rénovation complète pour mise en location : optimisation des espaces, finitions soignées et budget maîtrisé.",
    image: "/images/service-appart.jpg",
  },
  {
    title: "Salon Cosy Contemporain",
    location: "Villers-lès-Nancy",
    category: "Salons",
    description:
      "Transformation d'un salon vieillissant en espace chaleureux avec papier peint panoramique et parquet contrecollé.",
    image: "/images/service-salon.jpg",
  },
];
