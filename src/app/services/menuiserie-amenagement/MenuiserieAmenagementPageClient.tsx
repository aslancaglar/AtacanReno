"use client";

import { motion } from "framer-motion";
import { Check, DoorOpen } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/home/CTASection";
import Image from "next/image";

/* ───────────────────── Data ───────────────────── */

const title = "Installation de Portes Intérieures";
const shortTitle = "Portes";
const seoTitle = "Installation de Portes Intérieures à Nancy";
const imageUrl = "/images/service-menuiserie.jpg";
const shortDescription = "Blocs-portes et systèmes fin de chantier : structurez vos circulations.";
const description =
  "La porte intérieure est un élément trop souvent négligé en rénovation, alors qu'elle structure les circulations, isole acoustiquement les pièces et donne le ton décoratif d'un logement. ATC Rénovation pose tous types de portes intérieures à Nancy avec une précision artisanale : blocs-portes complets, portes fin de chantier, portes coulissantes en applique ou à galandage. Le choix d'une porte dépend de plusieurs paramètres techniques. La hauteur sous plafond et la largeur du passage déterminent la dimension du bloc. L'épaisseur de la cloison conditionne le type de huisserie (à recouvrement, à fourrure, ou à compensation). Le sens d'ouverture (poussant droite ou gauche) doit respecter la circulation et l'aménagement intérieur. Nous prenons toutes ces mesures lors de la visite technique et présentons les options compatibles avec votre configuration. Nous proposons une large gamme de finitions : portes prépeintes prêtes à peindre, portes laquées (blanc, RAL au choix), portes plaquées chêne, hêtre ou noyer, portes vitrées à un ou plusieurs carreaux, portes pleines acoustiques renforcées (jusqu'à 32 dB d'affaiblissement). Pour les espaces contraints, les portes coulissantes à galandage permettent de récupérer 90 cm utiles dans la pièce, sans gêner l'aménagement mural. La qualité de pose se mesure aux réglages : alignement parfait du dormant, jeu régulier de 3 à 4 mm sur tout le pourtour de la porte, pose des paumelles et de la serrure sans frottement, ajustement de la béquille à hauteur normalisée (105 cm). Nous traitons aussi la finition : caches de paumelles, butées de porte, joints d'isolation acoustique, bas de porte automatiques pour limiter les courants d'air. Pose en 1 à 2 jours par appartement.";
const prestations = [
  "Pose de blocs-portes",
  "Portes fin de chantier",
  "Réglages et finitions",
];

/* ───────────────────── Component ───────────────────── */

const MenuiserieAmenagementPageClient = () => (
  <Layout>
    {/* ─── Page Hero ─── */}
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          priority
          fetchPriority="high"
          quality={75}
          sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
      </div>
      <div className="relative container mx-auto px-4 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Services", href: "/services" },
            { label: shortTitle },
          ]}
          className="mb-8"
        />
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 1, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
              <DoorOpen className="w-6 h-6 text-secondary" />
            </div>
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
              {shortTitle}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 1, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-white"
          >
            {seoTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-white/80 text-lg leading-relaxed max-w-lg"
          >
            {shortDescription}
          </motion.p>
        </div>
      </div>
    </section>

    {/* ─── Description Section ─── */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
              Notre expertise
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-6">{title}</h2>
            <div className="space-y-6">
              {description.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed text-base whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <div className="relative">
              <Image
                src={imageUrl}
                alt={title}
                width={640}
                height={480}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-2xl object-cover w-full aspect-[4/3] shadow-[0px_20px_40px_rgba(52,48,38,0.06)]"
              />
              <motion.div
                initial={{ opacity: 1, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="absolute -bottom-4 -right-4 lg:-right-6 bg-primary text-primary-foreground rounded-2xl px-5 py-4 shadow-lg text-center"
              >
                <DoorOpen className="w-6 h-6 mx-auto mb-1" />
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/60">
                  Spécialiste
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ─── Prestations Section ─── */}
    <section className="py-20 lg:py-28 bg-surface-container-low">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 1, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
            Ce que nous faisons
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Nos prestations</h2>
          <p className="text-muted-foreground max-w-2xl lg:max-w-none mx-auto leading-relaxed">
            Chaque prestation est réalisée par nos artisans qualifiés avec des matériaux de premier choix.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prestations.map((prestation, j) => (
            <motion.div
              key={prestation}
              initial={{ opacity: 1, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: j * 0.08, ease: "easeOut" }}
              className="bg-card rounded-2xl p-6 hover:shadow-[0px_20px_40px_rgba(52,48,38,0.06)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mb-4">
                <Check className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-base font-bold text-nav mb-2">{prestation}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ─── CTA ─── */}
    <CTASection />
  </Layout>
);

export default MenuiserieAmenagementPageClient;
