"use client";

import { motion } from "framer-motion";
import { Check, Building2 } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/home/CTASection";
import Image from "next/image";

/* ───────────────────── Data ───────────────────── */

const title = "Rénovation Complète d'Appartement";
const shortTitle = "Appartement Complet";
const seoTitle = "Rénovation Complète d'Appartement à Nancy";
const imageUrl = "/images/service-appart.jpg";
const shortDescription = "Prise en charge de A à Z de votre projet de rénovation, tous corps de métier réunis.";
const description =
  "La rénovation complète d'appartement est notre cœur de métier à Nancy. Que vous soyez propriétaire occupant en quête d'un cadre de vie modernisé, investisseur préparant une mise en location, ou primo-accédant ayant acheté un bien à rafraîchir, ATC Rénovation prend en charge l'intégralité du projet en clé en main : un seul interlocuteur, tous les corps de métier coordonnés, un planning maîtrisé. Notre démarche commence par une visite technique approfondie. Nous relevons les contraintes (configuration, structure porteuse, réseaux existants, règlement de copropriété), évaluons l'état des installations électriques et de plomberie selon les normes NF C 15-100 actuelles, et discutons avec vous de l'usage futur de chaque pièce. À partir de là, nous établissons un projet complet : plans, calepinages, choix des matériaux, planning et budget détaillé sous 48h. La coordination des corps de métier est la clé d'un chantier réussi. Démolition, plomberie, électricité, plâtrerie, menuiserie, revêtements de sols, faïence, peinture : chacun de ces métiers doit intervenir au bon moment, dans le bon ordre, sans ralentir les autres. Nous gérons le séquencement complet et ne libérons un poste qu'une fois la finition validée. Vous recevez un planning hebdomadaire et une visite de suivi tous les 7 à 10 jours. Notre rénovation clé en main inclut systématiquement : la dépose des éléments existants, la mise aux normes électriques (tableau, prises, interrupteurs, éclairages), la rénovation complète de la salle de bains et de la cuisine si nécessaire, le remplacement des sols, le rafraîchissement total des peintures et la pose de menuiseries intérieures neuves. À la livraison, l'appartement est nettoyé, les déchets évacués et chaque détail vérifié avec vous lors d'une réception finale.";
const prestations = [
  "Diagnostic et conseil personnalisé",
  "Coordination de tous les corps de métier",
  "Plomberie et électricité",
  "Revêtements sols et murs",
  "Menuiserie intérieure",
  "Peinture et finitions complètes",
];

/* ───────────────────── Component ───────────────────── */

const RenovationCompleteAppartementPageClient = () => (
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
              <Building2 className="w-6 h-6 text-secondary" />
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
                <Building2 className="w-6 h-6 mx-auto mb-1" />
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

export default RenovationCompleteAppartementPageClient;
