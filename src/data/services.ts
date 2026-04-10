import { Bath, ChefHat, Paintbrush, Layers, Home, Thermometer, ArrowUpFromDot, Wrench, DoorOpen, Zap, Building2 } from "lucide-react";

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  icon: any;
  shortDescription: string;
  description: string;
  prestations: string[];
  highlights?: string[];
}

export const services: ServiceData[] = [
  {
    slug: "platrerie-faux-plafonds",
    title: "Plâtrerie, Cloisons & Faux Plafonds",
    shortTitle: "Plâtrerie",
    icon: Wrench,
    shortDescription: "Cloisons, faux plafonds, isolation phonique — structurez vos espaces.",
    description: "La plâtrerie est la base d'un intérieur réussi. Nous réalisons toutes les interventions de plâtrerie sèche, des cloisons aux faux plafonds, en passant par l'isolation phonique et les enduits de finition.",
    prestations: [
      "Cloisons en Placoplatre",
      "Faux plafonds (placo, dalles, lambris)",
      "Isolation phonique des cloisons",
      "Enduits et rebouchages",
    ],
  },
  {
    slug: "isolation-renovation-energetique",
    title: "Isolation & Rénovation Énergétique (RGE)",
    shortTitle: "Isolation RGE",
    icon: Thermometer,
    shortDescription: "Isolation certifiée RGE — bénéficiez des aides MaPrimeRénov' et réduisez vos factures.",
    description: "En tant qu'artisan certifié RGE, nous vous accompagnons dans vos travaux d'isolation pour améliorer le confort thermique de votre logement tout en réduisant vos factures d'énergie. Nous vous aidons également à monter vos dossiers d'aides financières.",
    prestations: [
      "Isolation des combles (ouate de cellulose, laine de verre, fibre de bois)",
      "Isolation des murs par l'intérieur (ITI)",
      "Isolation des planchers bas",
      "Accompagnement aux aides d'État (MaPrimeRénov', TVA 5,5%, CEE)",
    ],
    highlights: [
      "Certification RGE",
      "Jusqu'à 80% d'aides pour les ménages modestes",
      "Jusqu'à 40 000 € HT en parcours accompagné",
    ],
  },
  {
    slug: "peinture-decoration",
    title: "Peinture & Décoration",
    shortTitle: "Peinture",
    icon: Paintbrush,
    shortDescription: "Peinture intérieure, enduits décoratifs, papier peint — sublimez vos murs.",
    description: "La peinture est l'un des moyens les plus efficaces de transformer un intérieur. Nos peintres expérimentés maîtrisent toutes les techniques, de la peinture classique aux finitions décoratives les plus raffinées.",
    prestations: [
      "Peinture intérieure (matte, satinée, brillante, velours)",
      "Béton ciré et enduits décoratifs",
      "Pose de papier peint",
      "Revêtements muraux décoratifs",
      "Préparation des supports",
      "Conseil colorimétrique",
    ],
  },
  {
    slug: "revetements-sols-murs",
    title: "Revêtements de Sols & Murs",
    shortTitle: "Sols & Murs",
    icon: Layers,
    shortDescription: "Carrelage, parquet, sols souples — des revêtements posés dans les règles de l'art.",
    description: "Le choix du revêtement est déterminant pour l'ambiance et la durabilité de votre intérieur. Nous posons tous types de revêtements avec une préparation soignée des supports pour un résultat impeccable et durable.",
    prestations: [
      "Pose de carrelage et faïence",
      "Pose de parquet (massif, stratifié, contrecollé)",
      "Pose de moquette",
      "Ragréage et préparation des supports",
      "Carrelage grand format",
      "Sol PVC clipsable",
      "Revêtement mural en pierre naturelle",
    ],
  },
  {
    slug: "renovation-chambre-salon",
    title: "Rénovation de Chambre & Salon",
    shortTitle: "Chambre & Salon",
    icon: Home,
    shortDescription: "Modernisez vos pièces de vie avec des finitions soignées et un aménagement sur mesure.",
    description: "Donnez un nouveau souffle à vos espaces de vie. Que ce soit pour une chambre cosy ou un salon contemporain, nous intervenons sur la peinture, les sols, les cloisons et les rangements pour créer l'intérieur qui vous ressemble.",
    prestations: [
      "Peinture et décoration murale",
      "Pose de revêtements de sol",
      "Création de cloisons",
      "Rangements sur mesure",
      "Faux plafonds et éclairage",
      "Décoration et finitions",
    ],
  },
  {
    slug: "renovation-complete-appartement",
    title: "Rénovation Complète d'Appartement",
    shortTitle: "Appartement Complet",
    icon: Building2,
    shortDescription: "Prise en charge de A à Z de votre projet de rénovation, tous corps de métier réunis.",
    description: "Confiez-nous la rénovation intégrale de votre appartement. Un seul interlocuteur, tous les corps de métier coordonnés, un résultat clé en main. Idéal pour les investisseurs et propriétaires souhaitant une transformation complète.",
    prestations: [
      "Diagnostic et conseil personnalisé",
      "Coordination de tous les corps de métier",
      "Plomberie et électricité",
      "Revêtements sols et murs",
      "Menuiserie intérieure",
      "Peinture et finitions complètes",
    ],
  },
  {
    slug: "menuiserie-amenagement",
    title: "Installation de Portes Intérieures",
    shortTitle: "Portes",
    icon: DoorOpen,
    shortDescription: "Blocs-portes, portes à galandage et systèmes fin de chantier — structurez vos circulations.",
    description: "Nous assurons la pose de tous types de portes intérieures avec une précision artisanale. De la porte classique au système à galandage plus technique, nous garantissons une installation parfaite pour un confort acoustique et visuel optimal.",
    prestations: [
      "Pose de blocs-portes",
      "Portes à galandage",
      "Portes fin de chantier",
      "Réglages et finitions",
    ],
  },
  {
    slug: "amenagement-combles",
    title: "Aménagement des Combles",
    shortTitle: "Combles",
    icon: ArrowUpFromDot,
    shortDescription: "Transformez vos combles en espace de vie : chambre, bureau, salle de bain.",
    description: "L'aménagement des combles est l'une des solutions les plus rentables pour gagner de l'espace habitable. Nous réalisons des aménagements clé en main incluant isolation, plâtrerie, électricité, sols et peinture.",
    prestations: [
      "Aménagement clé en main (isolation, plâtrerie, électricité, sols, peinture)",
      "Création de salle de bain dans les combles",
      "Création de chambre ou bureau sous les toits",
      "Surélévation",
      "Velux / fenêtre de toit",
      "Escalier d'accès",
    ],
  },
];

export const serviceImages: Record<string, string> = {
  "renovation-chambre-salon": "/images/service-salon.jpg",
  "renovation-complete-appartement": "/images/service-appart.jpg",
  "peinture-decoration": "/images/service-peinture.jpg",
  "revetements-sols-murs": "/images/service-sols.jpg",
  "menuiserie-amenagement": "/images/service-menuiserie.jpg",
  "platrerie-faux-plafonds": "/images/service-platrerie.jpg",
  "isolation-renovation-energetique": "/images/service-isolation.jpg",
  "amenagement-combles": "/images/service-combles.jpg",
};

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
