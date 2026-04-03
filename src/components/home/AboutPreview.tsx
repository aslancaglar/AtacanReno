"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import certMaprimerenov from "@/assets/cert-maprimerenov.jpg";
import certDecennale from "@/assets/cert-garantie-decennale.jpg";
import certRge from "@/assets/cert-rge-qualibat.jpg";

const certs = [
  { src: certRge.src, alt: "Certification RGE Qualibat" },
  { src: certDecennale.src, alt: "Garantie Décennale" },
  { src: certMaprimerenov.src, alt: "MaPrimeRénov'" },
];

const AboutPreview = () => {
  return (
    <section id="a-propos" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(380px,520px)_minmax(0,1fr)] gap-8 lg:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center lg:justify-start relative"
          >
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-[0px_20px_40px_rgba(52,48,38,0.06)]">
              <Image
                src="/images/about-portrait.jpg"
                alt="Fondateur d'Atacan Rénovation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 520px"
              />
            </div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="absolute -bottom-4 -right-4 lg:-right-6 bg-secondary text-secondary-foreground rounded-2xl px-5 py-4 shadow-lg text-center"
            >
              <span className="block text-2xl font-extrabold leading-none">10+</span>
              <span className="block text-xs font-semibold mt-1">ans d'expérience</span>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
              À propos de nous
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-6">
              Une passion pour le détail, un engagement pour la qualité.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depuis 10 ans, Atacan Rénovation Intérieure vous accompagne dans la transformation de vos espaces de vie. Nous croyons que chaque intérieur a le potentiel de devenir extraordinaire.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Spécialistes du « clé en main », nous coordonnons l'ensemble des corps de métier pour réaliser vos projets de A à Z. De la rénovation complète de votre appartement à la création de votre salle de bains ou cuisine, en passant par la peinture, les revêtements de sols, la menuiserie, l'électricité ou encore l'aménagement de vos combles : nous transformons vos rêves en réalité, avec soin et passion.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Un interlocuteur unique pour tous vos travaux d'intérieur",
                "10 ans d'expertise sur le bassin nancéien",
                "Respect strict des délais et de votre budget",
                "Garantie décennale et isolation thermique certifiée RGE",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  className="flex items-center gap-3 text-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0" aria-hidden="true">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
            {/* Certification logos */}
            <div className="flex items-center gap-6 flex-wrap">
              {certs.map((c, i) => (
                <motion.div
                  key={c.alt}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                  className="relative h-24 w-24 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={c.src}
                    alt={c.alt}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
