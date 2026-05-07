"use client";

import { motion } from "framer-motion";
import { Check, Thermometer } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/home/CTASection";
import Image from "next/image";

/* ───────────────────── Data ───────────────────── */

const title = "Isolation & Rénovation Énergétique (RGE)";
const shortTitle = "Isolation RGE";
const seoTitle = "Isolation Thermique & Rénovation Énergétique à Nancy (RGE)";
const imageUrl = "/images/service-isolation.jpg";
const shortDescription = "Isolation certifiée RGE : bénéficiez des aides MaPrimeRénov' et réduisez vos factures.";
const description =
  "L'isolation est l'investissement le plus rentable d'une rénovation : elle réduit immédiatement vos factures de chauffage, améliore le confort été comme hiver, et augmente la valeur patrimoniale de votre bien. ATC Rénovation est artisan certifié RGE Qualibat à Nancy, ce qui vous permet de bénéficier de toutes les aides publiques en vigueur : MaPrimeRénov', Coup de Pouce Économies d'Énergie, éco-PTZ, TVA réduite à 5,5 %. Nous réalisons trois grandes familles de travaux. L'isolation des combles perdus, en soufflage de ouate de cellulose ou en pose de rouleaux de laine de verre, est la priorité absolue : jusqu'à 30 % des déperditions thermiques d'un logement passent par la toiture. L'isolation des murs par l'intérieur (ITI), avec doublage en plaques de plâtre sur isolant fibre de bois, polystyrène ou laine de roche, traite les ponts thermiques sans modifier l'aspect extérieur du bâtiment. L'isolation des planchers bas, sur vide sanitaire ou sur cave, supprime la sensation de sol froid et complète l'enveloppe thermique. Pour les ménages aux revenus modestes ou très modestes, le cumul des aides peut atteindre 80 % du montant des travaux, voire 90 % en parcours accompagné MaPrimeRénov' avec audit énergétique. Nous montons les dossiers d'aides à votre place : devis conforme aux exigences ANAH, justificatifs RGE, attestation de fin de travaux. Vous n'avez qu'à signer. Chaque projet démarre par une visite-diagnostic gratuite à Nancy ou dans le Grand Nancy : nous identifions les déperditions, dimensionnons l'isolant en fonction de la performance visée (R minimum 7 m².K/W en combles), et présentons un devis transparent avec le détail des aides récupérables.";
const prestations = [
  "Isolation des combles (ouate de cellulose, laine de verre, fibre de bois)",
  "Isolation des murs par l'intérieur (ITI)",
  "Isolation des planchers bas",
];
const highlights = [
  "Certification RGE",
  "Jusqu'à 80% d'aides pour les ménages modestes",
  "Jusqu'à 40 000 € HT en parcours accompagné",
];

/* ───────────────────── Component ───────────────────── */

const IsolationRenovationEnergetiquePageClient = () => (
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
              <Thermometer className="w-6 h-6 text-secondary" />
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
            <div className="flex flex-wrap gap-2 mt-6">
              {highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="inline-flex items-center gap-1.5 bg-secondary/10 text-secondary-foreground text-xs font-semibold px-3 py-1.5 rounded-full border border-secondary/20"
                >
                  <Thermometer className="w-3 h-3 text-secondary" />
                  {highlight}
                </span>
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
                <Thermometer className="w-6 h-6 mx-auto mb-1" />
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

export default IsolationRenovationEnergetiquePageClient;
