"use client";
 
import { motion } from "framer-motion";
import { Check, Home } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/home/CTASection";
import Image from "next/image";
 
/* ───────────────────── Data ───────────────────── */
 
const title = "Rénovation de Chambre & Salon";
const shortTitle = "Chambre & Salon";
const seoTitle = "Rénovation de Chambre & Salon à Nancy";
const imageUrl = "/images/service-salon.jpg";
const shortDescription = "Acoustique, lumière, rangements et finitions : à Nancy, nous repensons vos chambres et salons de A à Z, en coordonnant peinture, sols, cloisons et éclairage pour un espace qui vous ressemble.";
const description = `**Une chambre ou un salon rénové, c'est un espace repensé pour mieux vivre.** Chez **ATC Rénovation**, nous prenons en charge la transformation complète de vos pièces de vie à **Nancy** avec une approche sur mesure.
 
**Confort Acoustique et Lumineux**
 
Pour vos chambres, nous privilégions le calme et la sérénité. Nous installons des **doublages phoniques**, des faux plafonds avec éclairage LED variable et des parquets chaleureux. Nous concevons également des **rangements intégrés** et des dressings sur mesure pour libérer l'espace.
 
**Espaces de Vie Ouverts et Modernes**
 
Dans le salon, l'objectif est de créer du volume et de la lumière. Nous réalisons l'ouverture de cloisons, la pose de sols fluides et la création de **bibliothèques sur mesure**. Notre équipe coordonne tous les corps d'état (peinture, électricité, sol) pour vous garantir un résultat harmonieux.
 
**Un Accompagnement de A à Z**
 
De la conception aux finitions, nous sommes votre interlocuteur unique. Un chantier de rénovation de pièce de vie dure généralement **2 à 3 semaines**. Nous nous engageons sur un planning précis et une propreté exemplaire tout au long des travaux.`;
 
const prestations = [
  "Peinture & Décoration murale",
  "Pose de parquets & Sols",
  "Rangements & Dressings sur mesure",
  "Éclairage & Faux plafonds",
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
 
const RenovationChambreSalonPageClient = () => (
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
              <Home className="w-6 h-6 text-secondary" />
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
              <div className="float-right w-full lg:w-1/2 lg:ml-10 mb-10 lg:mb-6">
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
                    className="absolute left-2 sm:-left-4 bottom-2 sm:-bottom-4 bg-primary text-primary-foreground rounded-2xl px-4 py-3 shadow-lg text-center"
                  >
                    <Home className="w-5 h-5 mx-auto mb-1 text-white" />
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
 
export default RenovationChambreSalonPageClient;
