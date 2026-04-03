"use client";

import { Button } from "@/components/ui/button";
import { Star, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const heroImages = [
  "/images/hero-bg.jpg",
  "/images/hero-bg-2.jpg",
  "/images/hero-bg-3.jpg",
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-[85vh] md:min-h-[90vh] flex items-end md:items-center overflow-hidden">
      {/* Background slideshow */}
      {heroImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Rénovation intérieure — ATC Rénovation Nancy ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />

      <div className="relative container mx-auto px-4 lg:px-8 pb-16 lg:pb-24 pt-20 sm:pt-24 lg:pt-32">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-white"
          >
            Votre spécialiste en rénovation intérieure à Nancy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-white/80 text-lg mb-8 max-w-lg leading-relaxed"
          >
            Appartement, maison ou local professionnel : confiez vos travaux à une équipe d'experts forts de 10 ans d'expérience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <Link href="/devis">
              <Button className="btn-pill bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-base font-bold">
                Demande de devis
              </Button>
            </Link>
            <Link href="/realisations">
              <Button variant="outline" className="btn-pill border-white text-white bg-white/10 hover:bg-white/20 px-8 py-6 text-base font-semibold">
                Nos Réalisations
              </Button>
            </Link>
          </motion.div>
          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              {[
                "https://i.pravatar.cc/40?img=12",
                "https://i.pravatar.cc/40?img=25",
                "https://i.pravatar.cc/40?img=32",
                "https://i.pravatar.cc/40?img=47",
              ].map((src, i) => (
                <div key={i} className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image src={src} alt="Client satisfait" fill className="object-cover" sizes="32px" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
            </div>
            <a href="https://g.page/r/atacan-renovation" target="_blank" rel="noopener noreferrer" className="text-white/70 text-sm hover:text-white transition-colors inline-flex items-center gap-1">
              4.9/5 Avis Google <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
