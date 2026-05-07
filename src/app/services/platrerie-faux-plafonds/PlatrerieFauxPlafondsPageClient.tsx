"use client";

import { motion } from "framer-motion";
import { Check, Wrench } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/home/CTASection";
import Image from "next/image";

/* ───────────────────── Data ───────────────────── */

const title = "Plâtrerie, Cloisons & Faux Plafonds";
const shortTitle = "Plâtrerie";
const seoTitle = "Plâtrerie, Cloisons & Faux Plafonds à Nancy";
const imageUrl = "/images/service-platrerie.jpg";
const shortDescription = "Cloisons, faux plafonds, isolation phonique : structurez vos espaces.";
const description = `**La plâtrerie constitue le socle indispensable de toute rénovation intérieure réussie.** Implantée à **Nancy**, **ATC Rénovation** met son savoir-faire au service des particuliers et professionnels de **Meurthe-et-Moselle** pour transformer durablement leur habitat. De la **cloison sur mesure** au **faux plafond design**, nous réalisons l'ensemble des travaux de **plâtrerie sèche** dans tout le **département 54**.

**Votre Artisan Plaquiste à Nancy et ses Environs**

Spécialistes de la **plâtrerie sèche**, nous intervenons à **Nancy**, Vandœuvre-lès-Nancy, Laxou, Maxéville, Villers-lès-Nancy, Tomblaine, Jarville-la-Malgrange, Essey-lès-Nancy, Saint-Max et dans toute la **Meurthe-et-Moselle**. Notre équipe maîtrise les techniques modernes de pose de plaques de plâtre (**BA13**, hydrofuges, ignifuges, phoniques) pour répondre à toutes les contraintes de votre habitat lorrain.

Que vous rénoviez une **maison de ville à Nancy**, un **appartement dans le centre historique** ou une **construction récente en périphérie**, nous adaptons nos méthodes à la nature de votre support et à vos exigences.

**Cloisons sur Mesure pour Repenser Vos Espaces**

Créer une nouvelle pièce, séparer un espace ouvert ou aménager un dressing : les **cloisons** sont l'outil idéal pour redessiner votre intérieur sans gros œuvre. Nous concevons des **cloisons sur mesure**, droites ou courbes, avec ou sans ouverture, en tenant compte de vos contraintes techniques (passage de gaines, prises électriques, plomberie).

Chaque cloison alliera **solidité**, **esthétique** et **performance acoustique**. Nous proposons également des **cloisons amovibles** ou **semi-vitrées** pour les bureaux et espaces professionnels du **Grand Nancy**.

**Faux Plafonds : Esthétique et Performance**

Le **faux plafond** est devenu un élément incontournable de la rénovation moderne à **Nancy**. Il permet de masquer les imperfections, dissimuler les gaines techniques, intégrer un **éclairage LED encastré** et améliorer l'**isolation thermique et phonique** de votre logement.

Nous réalisons tous types de **faux plafonds** : plafonds tendus, plafonds suspendus en plaques de plâtre, plafonds décoratifs avec retombées, corniches lumineuses ou plafonds acoustiques.

**Isolation Phonique : Le Confort au Quotidien**

Les nuisances sonores affectent directement votre qualité de vie, particulièrement en milieu urbain. Nous intégrons systématiquement des solutions d'**isolation phonique performantes** : laine de roche haute densité, plaques phoniques spécifiques, désolidarisation des structures, conformes aux normes acoustiques en vigueur.

**Enduits de Finition : La Touche Finale**

La qualité d'une plâtrerie se mesure à la finesse de ses finitions. Nos **plaquistes** appliquent des enduits de qualité professionnelle pour obtenir des surfaces parfaitement lisses, prêtes à être peintes ou décorées.

**Pourquoi Choisir ATC Rénovation à Nancy ?**

Artisan local implanté en **Meurthe-et-Moselle**, nous garantissons : **engagement qualité**, **respect des délais**, **propreté du chantier**, **matériaux certifiés** et **conseils personnalisés**. Nos artisans qualifiés respectent les **normes DTU** en vigueur pour un travail durable.

Vous avez un projet de **plâtrerie à Nancy** ou en **Meurthe-et-Moselle** ? Contactez **ATC Rénovation** pour un devis gratuit et personnalisé.`;

const prestations = [
  "Cloisons sur mesure (droites ou courbes)",
  "Faux plafonds (tendus, suspendus, décoratifs)",
  "Isolation phonique haute performance",
  "Enduits de finition lisses",
];

/* ───────────────────── Helper ───────────────────── */

const renderWithBold = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-nav font-bold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

/* ───────────────────── Component ───────────────────── */

const PlatrerieFauxPlafondsPageClient = () => (
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
              <Wrench className="w-6 h-6 text-secondary" />
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
            className="text-white/80 text-base leading-relaxed max-w-lg"
          >
            {shortDescription}
          </motion.p>
        </div>
      </div>
    </section>

    {/* ─── Description Section ─── */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
              Notre expertise
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-8">{title}</h2>

            <div className="relative">
              {/* Floated Image for text wrap */}
              <div className="float-left w-full lg:w-1/2 lg:mr-10 mb-10 lg:mb-6">
                <div className="relative">
                  <Image
                    src={imageUrl}
                    alt={title}
                    width={800}
                    height={600}
                    priority
                    className="rounded-3xl object-cover w-full aspect-[4/3] shadow-[0px_20px_40px_rgba(52,48,38,0.1)]"
                  />
                  <motion.div
                    initial={{ opacity: 1, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    className="absolute right-2 sm:-right-4 bottom-2 sm:-bottom-4 bg-primary text-primary-foreground rounded-2xl px-4 py-3 shadow-lg text-center"
                  >
                    <Wrench className="w-5 h-5 mx-auto mb-1 text-white" />
                    <span className="block text-[8px] font-semibold uppercase tracking-wider text-white/60">
                      Spécialiste
                    </span>
                  </motion.div>
                </div>
              </div>

              <div className="space-y-6">
                {description.split("\n\n").map((paragraph, index) => {
                  const isHeading =
                    paragraph.startsWith("**") &&
                    paragraph.endsWith("**") &&
                    !paragraph.includes(".") &&
                    paragraph.length < 100;

                  if (isHeading) {
                    return (
                      <h3
                        key={index}
                        className="text-2xl font-bold text-nav mt-12 mb-6 first:mt-0 flex items-center gap-3 clear-none"
                      >
                        <span className="w-8 h-[2px] bg-secondary rounded-full" />
                        {paragraph.replace(/\*\*/g, "")}
                      </h3>
                    );
                  }
                  return (
                    <p
                      key={index}
                      className="text-muted-foreground leading-relaxed text-base whitespace-pre-line"
                    >
                      {renderWithBold(paragraph)}
                    </p>
                  );
                })}
              </div>
              <div className="clear-both" />
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
          <p className="text-muted-foreground text-base max-w-2xl lg:max-w-none mx-auto leading-relaxed">
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
              className="bg-card rounded-2xl p-8 hover:shadow-[0px_20px_40px_rgba(52,48,38,0.06)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mb-6">
                <Check className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-base font-bold text-nav leading-snug">{prestation}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ─── CTA ─── */}
    <CTASection />
  </Layout>
);

export default PlatrerieFauxPlafondsPageClient;
