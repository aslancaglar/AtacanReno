"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { services } from "@/data/services";
import { usePreloadedQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { usePreloadedCompanyInfo } from "@/app/ConvexClientProvider";

const navLinks = [
  { label: "Accueil", to: "/", isPage: true },
  { label: "À Propos", to: "/a-propos", isPage: true },
  { label: "Services", to: "/#services", isPage: false, hasMega: true },
  { label: "Réalisations", to: "/realisations", isPage: true },
  { label: "Contact", to: "/contact", isPage: true },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const megaTimeout = useRef<ReturnType<typeof setTimeout>>();
  const pathname = usePathname();
  const preloadedInfo = usePreloadedCompanyInfo();
  // If for some reason context is null, fallback to live query, but it should be set
  const companyInfo = usePreloadedQuery(preloadedInfo!);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = (to: string) => {
    setMobileOpen(false);
    setMegaOpen(false);
    // Pure hash on current page → smooth scroll
    if (to.startsWith("#")) {
      const el = document.querySelector(to);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (to.includes("#") && to.startsWith("/")) {
      // Cross-page hash (e.g. /#services from /a-propos)
      const hash = to.split("#")[1];
      if (pathname === "/") {
        const el = document.querySelector(`#${hash}`);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = to;
      }
    }
    // Page links are handled by <Link>
  };

  const handleMegaEnter = () => {
    clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };
  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 200);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50" suppressHydrationWarning>
      <div className="container mx-auto px-4 xl:px-8 py-4" suppressHydrationWarning>
        <div className={`flex items-center justify-between rounded-full px-6 py-5 xl:py-3 transition-all duration-300 bg-primary overflow-hidden ${scrolled ? "shadow-lg" : "xl:bg-transparent"}`}>
          <Link href="/" className="flex flex-col items-start shrink-0 leading-tight group">
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-secondary transition-colors">ATC Rénovation</span>
            <span className="text-[10px] font-medium tracking-wider text-white/70 uppercase">Notre difference est notre qualité</span>
          </Link>

          <nav className="hidden xl:flex items-center bg-primary rounded-full px-1.5 py-1.5 gap-0.5">
            {navLinks.map((link) => {
              if (link.hasMega) {
                return (
                  <div key={link.to} className="relative" onMouseEnter={handleMegaEnter} onMouseLeave={handleMegaLeave}>
                    <button
                      onClick={() => setMegaOpen(!megaOpen)}
                      className="text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 flex items-center gap-1 text-white/80 hover:text-white hover:bg-white/10 outline-none"
                    >
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                    </button>
                  </div>
                );
              }
              if (link.isPage) {
                return (
                  <Link
                    key={link.to}
                    href={link.to}
                    className="text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 text-white/80 hover:text-white hover:bg-white/10 hover:scale-105"
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <button
                  key={link.to}
                  onClick={() => navigate(link.to)}
                  className="text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 text-white/80 hover:text-white hover:bg-white/10 hover:scale-105"
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="hidden xl:flex items-center gap-6">
            <a 
              href={companyInfo?.phone ? `tel:${companyInfo.phone.replace(/\s+/g, '')}` : undefined} 
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors group"
              aria-label={`Appeler le ${companyInfo?.phone || ""}`}
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Phone className="w-4 h-4" aria-hidden="true" />
              </div>
              <span className="text-sm font-semibold tracking-wide">{companyInfo?.phone}</span>
            </a>

            <Link
              href="/devis"
              className="inline-flex items-center justify-center bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm font-bold rounded-full px-7 py-3 transition-colors"
            >
              Demander un devis
            </Link>
          </div>

          <div className="flex items-center gap-3 xl:hidden ml-auto mr-2">
            <a 
              href={companyInfo?.phone ? `tel:${companyInfo.phone.replace(/\s+/g, '')}` : undefined} 
              className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              aria-label={`Appeler le ${companyInfo?.phone || ""}`}
            >
              <Phone className="w-5 h-5 text-secondary" aria-hidden="true" />
            </a>
          </div>

          <button className="xl:hidden text-nav" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}>
            {mobileOpen ? <X className="w-6 h-6 text-white" aria-hidden="true" /> : <Menu className="w-6 h-6 text-white" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div 
        className={`hidden xl:block absolute left-0 right-0 top-full z-50 transition-all duration-300 origin-top ${megaOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`} 
        onMouseEnter={handleMegaEnter} 
        onMouseLeave={handleMegaLeave}
        aria-hidden={!megaOpen}
      >
        <div className="container mx-auto px-4 xl:px-8 pt-2">
          <div className="bg-card rounded-2xl shadow-2xl border border-border p-6">
            <div className="grid grid-cols-3 gap-2">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    onClick={() => setMegaOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted transition-colors group text-left"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-4.5 h-4.5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-foreground block leading-tight">{service.shortTitle}</span>
                      <span className="text-xs text-muted-foreground leading-tight line-clamp-2 mt-0.5">{service.shortDescription}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div 
        className={`xl:hidden mx-4 mt-2 bg-card/95 backdrop-blur-xl rounded-2xl shadow-lg transition-all duration-300 overflow-hidden origin-top ${mobileOpen ? 'opacity-100 visible max-h-[1000px]' : 'opacity-0 invisible max-h-0 pointer-events-none'}`}
        aria-hidden={!mobileOpen}
      >
        <nav className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map((link) => {
            if (link.hasMega) {
              return (
                <div key={link.to}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between text-sm font-medium py-2.5 px-4 rounded-full transition-colors text-nav hover:bg-muted"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  <div className={`ml-2 flex flex-col gap-0.5 transition-all duration-300 overflow-hidden ${mobileServicesOpen ? 'mt-1 max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible pointer-events-none'}`} aria-hidden={!mobileServicesOpen}>
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.slug}
                          href={`/${service.slug}`}
                          onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }}
                          className="flex items-center gap-2.5 py-2 px-3 rounded-lg text-sm text-nav hover:bg-muted transition-colors text-left"
                        >
                          <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                          {service.shortTitle}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }
            if (link.isPage) {
              return (
                <Link
                  key={link.to}
                  href={link.to}
                  className="text-sm font-medium py-2.5 px-4 rounded-full transition-colors text-nav hover:bg-muted text-left block"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              );
            }
            return (
              <button
                key={link.to}
                onClick={() => navigate(link.to)}
                className="text-sm font-medium py-2.5 px-4 rounded-full transition-colors text-nav hover:bg-muted text-left"
              >
                {link.label}
              </button>
            );
          })}
          <a 
            href={companyInfo?.phone ? `tel:${companyInfo.phone.replace(/\s+/g, '')}` : undefined} 
            className="flex items-center justify-center gap-3 py-3 px-4 rounded-full bg-primary text-white transition-all hover:bg-primary/90 mt-1 shadow-sm"
            onClick={() => setMobileOpen(false)}
          >
            <Phone className="w-4.5 h-4.5" aria-hidden="true" />
            <span className="text-sm font-bold tracking-wide">{companyInfo?.phone}</span>
          </a>

          <Link href="/devis" onClick={() => setMobileOpen(false)} className="mt-2 block">
            <span className="inline-flex items-center justify-center bg-secondary text-secondary-foreground text-sm font-bold rounded-full px-5 py-3 w-full text-center shadow-sm">
              Demander un devis
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
