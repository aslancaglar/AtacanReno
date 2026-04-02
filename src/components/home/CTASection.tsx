"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const CTASection = () => {
  return (
    <section id="contact" className="bg-primary py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl lg:text-4xl font-extrabold text-primary-foreground mb-4"
        >
          Prêt à transformer votre <br className="hidden sm:block" />
          espace de vie ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-primary-foreground/70 max-w-xl mx-auto mb-8 leading-relaxed"
        >
          Obtenez un devis gratuit et personnalisé pour votre projet de rénovation sous 48 heures.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <Link href="/devis">
            <Button
              className="btn-pill bg-secondary text-secondary-foreground hover:bg-secondary/90 px-10 py-6 text-base font-bold"
            >
              Demander un devis
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
