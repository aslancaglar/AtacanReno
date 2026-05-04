import { Button } from "@/components/ui/button";
import { Star, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] md:min-h-[75vh] lg:min-h-[70vh] xl:min-h-[65vh] max-h-[900px] flex items-end md:items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Rénovation intérieure — ATC Rénovation Nancy"
          fill
          priority
          fetchPriority="high"
          quality={75}
          sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative container mx-auto px-4 lg:px-8 pb-14 md:pb-32 lg:pb-32 pt-28 md:pt-32 lg:pt-40">
        <div className="max-w-2xl">
          <h1
            className="hero-fade-in text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-white"
            style={{ animationDelay: "0s" }}
          >
            Votre spécialiste en rénovation intérieure à Nancy
          </h1>
          <p
            className="hero-fade-in text-white/80 text-lg mb-8 max-w-lg leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Appartement, maison ou local professionnel : confiez vos travaux à une équipe d'experts forts de 20 ans d'expérience.
          </p>
          <div
            className="hero-fade-in flex flex-wrap gap-3 mb-8"
            style={{ animationDelay: "0.4s" }}
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
          </div>
          {/* Trust badges — CSS-only avatars (no external requests) */}
          <div
            className="hero-fade-in flex items-center gap-3"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex -space-x-2">
              {[
                { initials: "SL", bg: "bg-blue-500" },
                { initials: "JP", bg: "bg-emerald-500" },
                { initials: "MD", bg: "bg-amber-500" },
                { initials: "TR", bg: "bg-rose-500" },
              ].map((avatar, i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-white ${avatar.bg} flex items-center justify-center`}>
                  <span className="text-[10px] font-bold text-white leading-none">{avatar.initials}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-secondary text-secondary" aria-hidden="true" />
              ))}
            </div>
            <a href="https://maps.app.goo.gl/RwbnhGRwfampRRGS8" target="_blank" rel="noopener noreferrer" className="text-white/70 text-sm hover:text-white transition-colors inline-flex items-center gap-1">
              4.9/5 Avis Google <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
