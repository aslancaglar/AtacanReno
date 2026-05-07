import type { ComponentType } from "react";
import { Paintbrush, Layers, Home, Thermometer, ArrowUpFromDot, Wrench, DoorOpen, Building2 } from "lucide-react";

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  seoTitle: string;
  metaDescription: string;
  icon: ComponentType<{ className?: string }>;
  homeDescription: string;
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
    seoTitle: "Plâtrerie, Cloisons & Faux Plafonds à Nancy",
    metaDescription: "ATC Rénovation, votre artisan plaquiste à Nancy. Cloisons sur mesure, faux plafonds design, isolation phonique et enduits de finition en Meurthe-et-Moselle (54).",
    icon: Wrench,
    homeDescription: "Cloisons, faux plafonds, isolation phonique : structurez vos espaces.",
    shortDescription: "La plâtrerie est l'étape clé qui structure, isole et embellit votre habitat. Cloisons sur mesure, faux plafonds design, isolation phonique performante : autant de prestations qui demandent précision, expérience et matériaux de qualité. ATC Rénovation, votre artisan plaquiste local, vous accompagne à chaque étape de votre projet — de la conception à la finition — pour créer des espaces à la hauteur de vos attentes. Découvrez nos services de plâtrerie sèche pensés pour conjuguer esthétique, confort et durabilité.",
    description: "ATC Rénovation, votre artisan plaquiste local, vous accompagne à chaque étape de votre projet — de la conception à la finition — pour créer des espaces à la hauteur de vos attentes. Découvrez nos services de plâtrerie sèche pensés pour conjuguer esthétique, confort et durabilité.",
    prestations: [
      "Cloisons sur mesure (droites ou courbes)",
      "Faux plafonds (tendus, suspendus, décoratifs)",
      "Isolation phonique haute performance",
      "Enduits de finition lisses",
    ],
  },
  {
    slug: "isolation-renovation-energetique",
    title: "Isolation & Rénovation Énergétique (RGE)",
    shortTitle: "Isolation RGE",
    seoTitle: "Isolation Thermique & Rénovation Énergétique à Nancy (RGE)",
    metaDescription: "Isolation certifiée RGE à Nancy : combles, murs, planchers. Éligible MaPrimeRénov', jusqu'à 80% d'aides. ATC Rénovation, artisan qualifié. Devis gratuit.",
    icon: Thermometer,
    homeDescription: "Isolation certifiée RGE : bénéficiez des aides MaPrimeRénov' et réduisez vos factures.",
    shortDescription: "Isolation certifiée RGE : bénéficiez des aides MaPrimeRénov' et réduisez vos factures.",
    description: "L'isolation est l'investissement le plus rentable d'une rénovation : elle réduit immédiatement vos factures de chauffage, améliore le confort été comme hiver, et augmente la valeur patrimoniale de votre bien. ATC Rénovation est artisan certifié RGE Qualibat à Nancy, ce qui vous permet de bénéficier de toutes les aides publiques en vigueur : MaPrimeRénov', Coup de Pouce Économies d'Énergie, éco-PTZ, TVA réduite à 5,5 %. Nous réalisons trois grandes familles de travaux. L'isolation des combles perdus, en soufflage de ouate de cellulose ou en pose de rouleaux de laine de verre, est la priorité absolue : jusqu'à 30 % des déperditions thermiques d'un logement passent par la toiture. L'isolation des murs par l'intérieur (ITI), avec doublage en plaques de plâtre sur isolant fibre de bois, polystyrène ou laine de roche, traite les ponts thermiques sans modifier l'aspect extérieur du bâtiment. L'isolation des planchers bas, sur vide sanitaire ou sur cave, supprime la sensation de sol froid et complète l'enveloppe thermique. Pour les ménages aux revenus modestes ou très modestes, le cumul des aides peut atteindre 80 % du montant des travaux, voire 90 % en parcours accompagné MaPrimeRénov' avec audit énergétique. Nous montons les dossiers d'aides à votre place : devis conforme aux exigences ANAH, justificatifs RGE, attestation de fin de travaux. Vous n'avez qu'à signer. Chaque projet démarre par une visite-diagnostic gratuite à Nancy ou dans le Grand Nancy : nous identifions les déperditions, dimensionnons l'isolant en fonction de la performance visée (R minimum 7 m².K/W en combles), et présentons un devis transparent avec le détail des aides récupérables.",
    prestations: [
      "Isolation des combles (ouate de cellulose, laine de verre, fibre de bois)",
      "Isolation des murs par l'intérieur (ITI)",
      "Isolation des planchers bas",
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
    seoTitle: "Peinture & Décoration Intérieure à Nancy",
    metaDescription: "Peintre à Nancy : peinture intérieure, papier peint, enduits décoratifs. Finitions impeccables, conseils colorimétriques. ATC Rénovation. Devis gratuit.",
    icon: Paintbrush,
    homeDescription: "Peinture intérieure, enduits décoratifs, papier peint : sublimez vos murs.",
    shortDescription: "Peinture intérieure, enduits décoratifs, papier peint : sublimez vos murs.",
    description: "La peinture est le geste qui révèle le caractère d'un intérieur. Bien posée, elle donne profondeur, lumière et harmonie ; mal exécutée, elle laisse des reprises visibles, des cloques, des bavures qui sautent aux yeux dans toute pièce. Nos peintres expérimentés interviennent à Nancy sur tous les supports : neufs, rénovés, abîmés, anciens enduits chaulés ou supports techniques. La phase de préparation représente 70 % de la qualité finale. Nous prenons le temps de poncer, reboucher, dégraisser et appliquer une sous-couche adaptée au support et au futur revêtement. Cette rigueur explique la durabilité de nos finitions et l'absence de défauts à long terme. Côté revêtements, nous maîtrisons toute la palette : peinture acrylique mate, satinée, brillante ou velours, peinture glycéro pour les boiseries et menuiseries, peintures techniques (anti-humidité, antifongiques pour salles de bains, lessivables pour cuisines). La pose de papier peint, qu'il soit intissé, expansé, panoramique ou peint à la main, demande une préparation muraliste précise — nous l'assurons. Nous proposons aussi des enduits décoratifs : béton ciré, tadelakt, stuc à la chaux, qui apportent une texture unique sur un mur ou une crédence. Le conseil colorimétrique est inclus dans toute prestation. Choisir une couleur, c'est anticiper la lumière de la pièce, l'orientation, la taille, le mobilier existant et l'effet recherché — apaisant, énergisant, élégant. Nous vous présentons des palettes RAL, NCS ou marques spécifiques (Farrow & Ball, Tollens, Ressource), réalisons des essais sur mur, et vous accompagnons jusqu'au choix final. Peintures à faible COV, chantier propre du début à la fin.",
    prestations: [
      "Peinture intérieure (matte, satinée, brillante, velours)",
      "Pose de papier peint",
      "Préparation des supports",
      "Conseil colorimétrique",
    ],
  },
  {
    slug: "revetements-sols-murs",
    title: "Revêtements de Sols & Murs",
    shortTitle: "Sols & Murs",
    seoTitle: "Revêtements de Sols & Murs à Nancy",
    metaDescription: "Pose de carrelage, parquet et sols souples à Nancy. Faïence, grand format, ragréage. ATC Rénovation, artisan qualifié RGE. Devis gratuit sous 48h.",
    icon: Layers,
    homeDescription: "Carrelage, parquet, sols souples : des revêtements posés dans les règles de l'art.",
    shortDescription: "Carrelage, parquet, sols souples : des revêtements posés dans les règles de l'art.",
    description: "Le sol, c'est ce qu'on regarde, ce qu'on touche, ce qu'on entend marcher. C'est aussi le revêtement qui s'use le plus, et donc celui qu'il faut poser avec le plus de soin. ATC Rénovation à Nancy pose tous types de revêtements de sols et de murs avec une exigence artisanale et une préparation des supports irréprochable. La préparation est l'étape qui distingue une pose durable d'une pose qui se voit dès la deuxième année. Nous réalisons les ragréages auto-lissants ou auto-nivelants en fonction du désaffleurement, traitons les fissures, posons les sous-couches phoniques quand le règlement de copropriété l'exige, et vérifions la planéité au cordeau et au laser avant chaque pose. Côté carrelage, nous posons grès cérame, faïence, mosaïque, pierre naturelle, en pose droite, diagonale, à joints fins, à joints décalés ou en chevrons. Nous maîtrisons les carrelages grand format (jusqu'à 120 × 120 cm) qui demandent un double encollage et un calepinage précis pour limiter la coupe. Les joints sont réalisés en mortier classique, en époxy résistant aux taches pour les cuisines, ou en silicone pour les angles et les jonctions sanitaires. Pour les sols stratifiés, parquets contrecollés et parquets massifs, nous sélectionnons l'épaisseur, l'essence (chêne, frêne, châtaignier), et le mode de pose (clipsée, collée pleine ou en bain de colle) en fonction de la configuration de la pièce et du chauffage au sol éventuel. Les sols souples PVC, lino ou clipsable type Quick-Step rigide complètent notre gamme pour les budgets contraints ou les locaux à fort passage. Pose garantie selon les DTU en vigueur.",
    prestations: [
      "Pose de carrelage et faïence",
      "Pose de parquet (massif, stratifié, contrecollé)",
      "Ragréage et préparation des supports",
      "Carrelage grand format",
      "Sol PVC clipsable",
    ],
  },
  {
    slug: "renovation-chambre-salon",
    title: "Rénovation de Chambre & Salon",
    shortTitle: "Chambre & Salon",
    seoTitle: "Rénovation de Chambre & Salon à Nancy",
    metaDescription: "Rénovation chambre et salon à Nancy : peinture, sols, cloisons, faux plafonds. Aménagement sur mesure, finitions soignées. ATC Rénovation. Devis gratuit.",
    icon: Home,
    homeDescription: "Modernisez vos pièces de vie avec des finitions soignées et un aménagement sur mesure.",
    shortDescription: "Modernisez vos pièces de vie avec des finitions soignées et un aménagement sur mesure.",
    description: "Une chambre ou un salon rénové, c'est plus qu'une pièce repeinte : c'est un espace repensé pour mieux vivre, mieux dormir, mieux recevoir. ATC Rénovation prend en charge la rénovation complète de vos pièces de vie à Nancy avec une approche sur mesure : nous écoutons votre quotidien, vos contraintes, vos envies, puis nous proposons un projet cohérent qui assemble tous les corps de métier nécessaires. Pour une chambre, nous traitons en priorité l'acoustique et la lumière. Cela peut signifier un doublage phonique sur la cloison mitoyenne, un faux plafond avec spots LED encastrés à intensité variable, un parquet contrecollé chêne pour la chaleur visuelle, et une peinture mate dans des teintes apaisantes. Nous concevons aussi des rangements intégrés : têtes de lit avec niches, dressing sur mesure derrière des portes coulissantes, qui gagnent de la place sans alourdir l'espace. Pour un salon, l'enjeu est différent : créer un volume généreux, lumineux, qui structure la circulation et met en valeur le mobilier. Nous abattons les cloisons non porteuses pour ouvrir la cuisine, posons des sols à grande lame qui fluidifient la perception, créons des niches lumineuses ou des bibliothèques sur mesure, installons des éclairages multipoints (général, d'accentuation, d'ambiance) qui transforment radicalement l'atmosphère selon les moments de la journée. Notre intervention couvre la peinture, les sols, les cloisons, les faux plafonds, l'éclairage, les rangements sur mesure et la décoration finale. Nous coordonnons l'ensemble pour vous éviter de gérer plusieurs artisans, et nous tenons les délais grâce à un planning précis communiqué dès la signature du devis. Nos chantiers chambre ou salon durent en moyenne 2 à 3 semaines selon l'ampleur des travaux.",
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
    seoTitle: "Rénovation Complète d'Appartement à Nancy",
    metaDescription: "Rénovation complète d'appartement à Nancy, clé en main : tous corps de métier. Plomberie, électricité, peinture, sols. ATC Rénovation. Devis gratuit.",
    icon: Building2,
    homeDescription: "Prise en charge de A à Z de votre projet de rénovation, tous corps de métier réunis.",
    shortDescription: "Prise en charge de A à Z de votre projet de rénovation, tous corps de métier réunis.",
    description: "La rénovation complète d'appartement est notre cœur de métier à Nancy. Que vous soyez propriétaire occupant en quête d'un cadre de vie modernisé, investisseur préparant une mise en location, ou primo-accédant ayant acheté un bien à rafraîchir, ATC Rénovation prend en charge l'intégralité du projet en clé en main : un seul interlocuteur, tous les corps de métier coordonnés, un planning maîtrisé. Notre démarche commence par une visite technique approfondie. Nous relevons les contraintes (configuration, structure porteuse, réseaux existants, règlement de copropriété), évaluons l'état des installations électriques et de plomberie selon les normes NF C 15-100 actuelles, et discutons avec vous de l'usage futur de chaque pièce. À partir de là, nous établissons un projet complet : plans, calepinages, choix des matériaux, planning et budget détaillé sous 48h. La coordination des corps de métier est la clé d'un chantier réussi. Démolition, plomberie, électricité, plâtrerie, menuiserie, revêtements de sols, faïence, peinture : chacun de ces métiers doit intervenir au bon moment, dans le bon ordre, sans ralentir les autres. Nous gérons le séquencement complet et ne libérons un poste qu'une fois la finition validée. Vous recevez un planning hebdomadaire et une visite de suivi tous les 7 à 10 jours. Notre rénovation clé en main inclut systématiquement : la dépose des éléments existants, la mise aux normes électriques (tableau, prises, interrupteurs, éclairages), la rénovation complète de la salle de bains et de la cuisine si nécessaire, le remplacement des sols, le rafraîchissement total des peintures et la pose de menuiseries intérieures neuves. À la livraison, l'appartement est nettoyé, les déchets évacués et chaque détail vérifié avec vous lors d'une réception finale.",
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
    seoTitle: "Installation de Portes Intérieures à Nancy",
    metaDescription: "Pose de portes intérieures à Nancy : blocs-portes, fin de chantier, réglages précis. Confort acoustique optimal. ATC Rénovation. Devis gratuit.",
    icon: DoorOpen,
    homeDescription: "Blocs-portes et systèmes fin de chantier : structurez vos circulations.",
    shortDescription: "Blocs-portes et systèmes fin de chantier : structurez vos circulations.",
    description: "La porte intérieure est un élément trop souvent négligé en rénovation, alors qu'elle structure les circulations, isole acoustiquement les pièces et donne le ton décoratif d'un logement. ATC Rénovation pose tous types de portes intérieures à Nancy avec une précision artisanale : blocs-portes complets, portes fin de chantier, portes coulissantes en applique ou à galandage. Le choix d'une porte dépend de plusieurs paramètres techniques. La hauteur sous plafond et la largeur du passage déterminent la dimension du bloc. L'épaisseur de la cloison conditionne le type de huisserie (à recouvrement, à fourrure, ou à compensation). Le sens d'ouverture (poussant droite ou gauche) doit respecter la circulation et l'aménagement intérieur. Nous prenons toutes ces mesures lors de la visite technique et présentons les options compatibles avec votre configuration. Nous proposons une large gamme de finitions : portes prépeintes prêtes à peindre, portes laquées (blanc, RAL au choix), portes plaquées chêne, hêtre ou noyer, portes vitrées à un ou plusieurs carreaux, portes pleines acoustiques renforcées (jusqu'à 32 dB d'affaiblissement). Pour les espaces contraints, les portes coulissantes à galandage permettent de récupérer 90 cm utiles dans la pièce, sans gêner l'aménagement mural. La qualité de pose se mesure aux réglages : alignement parfait du dormant, jeu régulier de 3 à 4 mm sur tout le pourtour de la porte, pose des paumelles et de la serrure sans frottement, ajustement de la béquille à hauteur normalisée (105 cm). Nous traitons aussi la finition : caches de paumelles, butées de porte, joints d'isolation acoustique, bas de porte automatiques pour limiter les courants d'air. Pose en 1 à 2 jours par appartement.",
    prestations: [
      "Pose de blocs-portes",
      "Portes fin de chantier",
      "Réglages et finitions",
    ],
  },
  {
    slug: "amenagement-combles",
    title: "Aménagement des Combles",
    shortTitle: "Combles",
    seoTitle: "Aménagement des Combles à Nancy",
    metaDescription: "Aménagement de combles à Nancy, clé en main : isolation, plâtrerie, électricité, sols, peinture. Chambre ou bureau sous les toits. Devis gratuit.",
    icon: ArrowUpFromDot,
    homeDescription: "Transformez vos combles en espace de vie : chambre et bureau.",
    shortDescription: "Transformez vos combles en espace de vie : chambre et bureau.",
    description: "L'aménagement des combles est l'une des solutions les plus rentables pour gagner de la surface habitable sans déménager ni faire d'extension. À Nancy et dans le Grand Est, beaucoup de maisons des années 1960 à 1990 disposent de combles parfaitement aménageables sous toiture en pente. ATC Rénovation transforme ces volumes inexploités en pièces de vie complètes : suite parentale, bureau, salle de jeux, chambre d'amis ou studio indépendant. Le projet démarre par un diagnostic technique. Nous vérifions la hauteur sous faîtage (1m80 minimum sur 60 % de la surface au sol pour un confort optimal), l'état de la charpente (fermettes industrielles ou tradition), la pente de la toiture (35° et plus permettent un aménagement sans grande perte d'espace), et l'accessibilité (escalier existant ou à créer). Nous étudions aussi la déclaration préalable ou le permis de construire selon la surface créée et l'augmentation d'emprise éventuelle. L'aménagement clé en main couvre tous les lots : isolation de la sous-toiture en laine de bois ou laine minérale haute densité (R supérieur à 6 m².K/W), pose de pare-vapeur et frein-vapeur, plâtrerie complète sur ossature métallique avec rampants et faux plafonds, pose de fenêtres de toit type Velux ou Fakro avec habillage extérieur étanche, installation électrique aux normes (tableau secondaire si nécessaire), revêtements de sols (parquet, stratifié ou moquette selon usage), peinture finition. Si la pièce inclut une salle d'eau ou un coin cuisine, nous intégrons aussi la plomberie et l'évacuation EU/EV. Le chantier dure en moyenne 4 à 8 semaines selon la surface (20 à 60 m²) et la complexité, avec un seul interlocuteur, un planning précis et des matériaux conformes à la réglementation thermique en vigueur.",
    prestations: [
      "Aménagement clé en main (isolation, plâtrerie, électricité, sols, peinture)",
      "Création de chambre ou bureau sous les toits",
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
