"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "Isover", logo: "/images/Partenaires/IsoverLogo.jpg" },
  { name: "Knauf", logo: "/images/Partenaires/KnaufLogo.jpg" },
  { name: "Moselle Türen", logo: "/images/Partenaires/MoselleTurenLogo.jpg" },
  { name: "Litt", logo: "/images/Partenaires/littLogo.jpg" },
  { name: "Semin", logo: "/images/Partenaires/seminLogo.jpg" },
];

const PartnersSection = () => {
  return (
    <section className="py-10 lg:py-14">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 1, y: 12 }}
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
              initial={{ opacity: 1, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              className="flex items-center justify-center p-4 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={96}
                height={96}
                sizes="96px"
                className="w-24 h-24 object-contain transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
