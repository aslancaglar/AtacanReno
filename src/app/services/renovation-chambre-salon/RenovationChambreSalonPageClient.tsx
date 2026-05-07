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
const shortDescription = "Modernisez vos pièces de vie avec des finitions soignées et un aménagement sur mesure.";
const description =
  "Une chambre ou un salon rénové, c'est plus qu'une pièce repeinte : c'est un espace repensé pour mieux vivre, mieux dormir, mieux recevoir. ATC Rénovation prend en charge la rénovation complète de vos pièces de vie à Nancy avec une approche sur mesure : nous écoutons votre quotidien, vos contraintes, vos envies, puis nous proposons un projet cohérent qui assemble tous les corps de métier nécessaires. Pour une chambre, nous traitons en priorité l'acoustique et la lumière. Cela peut signifier un doublage phonique sur la cloison mitoyenne, un faux plafond avec spots LED encastrés à intensité variable, un parquet contrecollé chêne pour la chaleur visuelle, et une peinture mate dans des teintes apaisantes. Nous concevons aussi des rangements intégrés : têtes de lit avec niches, dressing sur mesure derrière des portes coulissantes, qui gagnent de la place sans alourdir l'espace. Pour un salon, l'enjeu est différent : créer un volume généreux, lumineux, qui structure la circulation et met en valeur le mobilier. Nous abattons les cloisons non porteuses pour ouvrir la cuisine, posons des sols à grande lame qui fluidifient la perception, créons des niches lumineuses ou des bibliothèques sur mesure, installons des éclairages multipoints (général, d'accentuation, d'ambiance) qui transforment radicalement l'atmosphère selon les moments de la journée. Notre intervention couvre la peinture, les sols, les cloisons, les faux plafonds, l'éclairage, les rangements sur mesure et la décoration finale. Nous coordonnons l'ensemble pour vous éviter de gérer plusieurs artisans, et nous tenons les délais grâce à un planning précis communiqué dès la signature du devis. Nos chantiers chambre ou salon durent en moyenne 2 à 3 semaines selon l'ampleur des travaux.";
const prestations = [
  "Peinture et décoration murale",
  "Pose de revêtements de sol",
  "Création de cloisons",
  "Rangements sur mesure",
  "Faux plafonds et éclairage",
  "Décoration et finitions",
];

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
                <Home className="w-6 h-6 mx-auto mb-1" />
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

export default RenovationChambreSalonPageClient;
