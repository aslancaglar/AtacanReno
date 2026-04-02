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
    slug: "renovation-salle-de-bains",
    title: "Rénovation de Salle de Bains",
    shortTitle: "Salle de Bains",
    icon: Bath,
    shortDescription: "Création et rénovation complète de votre salle de bains, de la démolition à la finition.",
    description: "Nous prenons en charge l'intégralité de votre projet de rénovation de salle de bains. De la démolition à la pose du dernier accessoire, notre équipe coordonne tous les corps de métier pour vous offrir un résultat clé en main, dans les délais et le budget convenus.",
    prestations: [
      "Démolition et évacuation",
      "Plomberie complète",
      "Pose de carrelage et faïence",
      "Installation électrique aux normes",
      "Pose de mobilier de salle de bains",
      "Peinture et finitions",
    ],
    highlights: [
      "Douche à l'italienne",
      "PMR / Accessibilité",
      "Remplacement baignoire par douche",
    ],
  },
  {
    slug: "renovation-cuisine",
    title: "Rénovation de Cuisine",
    shortTitle: "Cuisine",
    icon: ChefHat,
    shortDescription: "Conception et pose de votre cuisine sur mesure, avec tous les travaux associés.",
    description: "De la conception à la réalisation, nous transformons votre cuisine en un espace fonctionnel et esthétique. Notre approche intégrée couvre la plomberie, l'électricité, les revêtements et la pose de mobilier pour un résultat harmonieux.",
    prestations: [
      "Conception et plan sur mesure",
      "Pose de cuisine équipée",
      "Plomberie et raccordements",
      "Électricité et éclairage",
      "Pose de crédence",
      "Revêtement de sol",
    ],
    highlights: [
      "Îlot central",
      "Plan de travail sur mesure",
      "Optimisation de l'espace",
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
    shortDescription: "Carrelage, parquet, vinyle — des revêtements posés dans les règles de l'art.",
    description: "Le choix du revêtement est déterminant pour l'ambiance et la durabilité de votre intérieur. Nous posons tous types de revêtements avec une préparation soignée des supports pour un résultat impeccable et durable.",
    prestations: [
      "Pose de carrelage et faïence",
      "Pose de parquet (massif, stratifié, contrecollé)",
      "Pose de moquette et vinyle",
      "Ragréage et préparation des supports",
      "Carrelage grand format",
      "Sol PVC clipsable",
      "Revêtement mural en pierre naturelle",
    ],
  },
  {
    slug: "menuiserie-amenagement",
    title: "Menuiserie & Aménagement Intérieur",
    shortTitle: "Menuiserie",
    icon: DoorOpen,
    shortDescription: "Portes, fenêtres, dressing, verrières — aménagez votre intérieur sur mesure.",
    description: "La menuiserie intérieure structure et personnalise votre espace. De la pose de portes à la création de verrières en passant par les dressings sur mesure, nous donnons du caractère à votre intérieur.",
    prestations: [
      "Pose de portes intérieures",
      "Pose de fenêtres et volets",
      "Dressing et rangements sur mesure",
      "Cloisons et verrières intérieures",
    ],
  },
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
  "renovation-salle-de-bains": "/images/service-sdb.jpg",
  "renovation-cuisine": "/images/service-cuisine.jpg",
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
