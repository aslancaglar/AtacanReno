"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import CTASection from "@/components/home/CTASection";
import { services, serviceImages } from "@/data/services";

const ServicesPageClient = () => {
  return (
    <Layout>
        {/* ─── Page Hero ─── */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero-bg.jpg"
              alt="ATC Rénovation — Nos Services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
          </div>
          <div className="relative container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block"
              >
                Nos Services
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-white"
              >
                Des solutions complètes pour votre rénovation intérieure.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="text-white/80 text-lg leading-relaxed max-w-lg"
              >
                De la salle de bains à l'isolation RGE, nous maîtrisons tous les corps de métier pour transformer votre intérieur avec expertise et passion.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ─── Detailed Service Sections ─── */}
        {services.map((service, i) => {
          const Icon = service.icon;
          const isEven = i % 2 === 0;
          return (
            <section
              key={service.slug}
              id={service.slug}
              className={`py-20 lg:py-28 ${isEven ? "bg-surface-container-low" : "bg-background"}`}
            >
              <div className="container mx-auto px-4 lg:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`${!isEven ? "lg:order-2" : ""}`}
                  >
                    <div className="relative">
                      <img
                        src={serviceImages[service.slug]}
                        alt={service.title}
                        className="rounded-2xl object-cover w-full aspect-[4/3] shadow-[0px_20px_40px_rgba(52,48,38,0.06)]"
                        loading="lazy"
                        width={640}
                        height={480}
                      />
                      {/* Service number badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                        className={`absolute -bottom-4 ${isEven ? "-right-4 lg:-right-6" : "-left-4 lg:-left-6"} bg-primary text-primary-foreground rounded-2xl px-5 py-4 shadow-lg text-center`}
                      >
                        <span className="block text-2xl font-extrabold leading-none">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="block text-[10px] font-semibold mt-1 uppercase tracking-wider text-white/60">
                          Service
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                    className={`${!isEven ? "lg:order-1" : ""}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
                        {service.shortTitle}
                      </span>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-6">
                      {service.title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Prestations list */}
                    <div className="mb-8">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-nav mb-4">
                        Nos prestations
                      </h3>
                      <ul className="space-y-3">
                        {service.prestations.map((prestation, j) => (
                          <motion.li
                            key={prestation}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: 0.2 + j * 0.06,
                              ease: "easeOut",
                            }}
                            className="flex items-start gap-3 text-sm"
                          >
                            <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-secondary" />
                            </div>
                            <span className="text-muted-foreground">{prestation}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Highlights */}
                    {service.highlights && service.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-8">
                        {service.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="inline-flex items-center gap-1.5 bg-secondary/10 text-secondary-foreground text-xs font-semibold px-3 py-1.5 rounded-full border border-secondary/20"
                          >
                            <Icon className="w-3 h-3 text-secondary" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* CTA Button */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm font-bold rounded-full px-7 py-3 transition-colors group/btn"
                    >
                      En savoir plus
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}

        {/* ─── CTA (reused from homepage) ─── */}
        <CTASection />
    </Layout>
  );
};

export default ServicesPageClient;
