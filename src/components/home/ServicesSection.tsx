 "use client";

import { ArrowRight } from "lucide-react";
import { services, serviceImages } from "@/data/services";
import { motion } from "framer-motion";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-surface-container-low">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Nos Services Spécialisés</h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Découvrez notre gamme complète de services de rénovation intérieure, adaptés à chaque besoin spécifique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group bg-card rounded-2xl overflow-hidden hover:shadow-[0px_20px_40px_rgba(52,48,38,0.06)] transition-all duration-300 h-full block"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={serviceImages[service.slug]}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={640}
                    height={512}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    <service.icon className="w-5 h-5 text-primary shrink-0" />
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
