"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Partenaire 1", logo: "https://placehold.co/200x80/f5f5f5/999?text=Partenaire+1" },
  { name: "Partenaire 2", logo: "https://placehold.co/200x80/f5f5f5/999?text=Partenaire+2" },
  { name: "Partenaire 3", logo: "https://placehold.co/200x80/f5f5f5/999?text=Partenaire+3" },
  { name: "Partenaire 4", logo: "https://placehold.co/200x80/f5f5f5/999?text=Partenaire+4" },
  { name: "Partenaire 5", logo: "https://placehold.co/200x80/f5f5f5/999?text=Partenaire+5" },
  { name: "Partenaire 6", logo: "https://placehold.co/200x80/f5f5f5/999?text=Partenaire+6" },
];

const PartnersSection = () => {
  return (
    <section className="py-10 lg:py-14">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
            Confiance
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold">Nos Partenaires</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              className="flex items-center justify-center p-4 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
                width={200}
                height={80}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
