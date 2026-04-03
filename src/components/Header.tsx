"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { services } from "@/data/services";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

const navLinks = [
  { label: "Accueil", to: "/", isPage: true },
  { label: "À Propos", to: "/a-propos", isPage: true },
  { label: "Services", to: "/services", isPage: true, hasMega: true },
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
  const companyInfo = useQuery(api.companyInfo.get);

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
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 lg:px-8 py-4">
        <div className={`flex items-center justify-between rounded-full px-6 py-5 lg:py-3 transition-all duration-300 bg-primary overflow-hidden ${scrolled ? "shadow-lg" : "lg:bg-transparent"}`}>
          <Link href="/" className="flex items-center shrink-0">
            <span className="text-lg font-bold tracking-tight text-white">ATC Rénovation</span>
          </Link>

          <nav className="hidden lg:flex items-center bg-primary rounded-full px-1.5 py-1.5 gap-0.5">
            {navLinks.map((link) => {
              if (link.hasMega) {
                return (
                  <div key={link.to} className="relative" onMouseEnter={handleMegaEnter} onMouseLeave={handleMegaLeave}>
                    <Link
                      href={link.to}
                      className="text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 flex items-center gap-1 text-white/80 hover:text-white hover:bg-white/10"
                    >
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`} />
                    </Link>
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

          <div className="hidden lg:flex items-center gap-6">
            <a href={companyInfo?.phone ? `tel:${companyInfo.phone.replace(/\s+/g, '')}` : "tel:+33124636789"} className="flex items-center gap-2 text-white/90 hover:text-white transition-colors group">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold tracking-wide">{companyInfo?.phone || "+33 1 24 63 67 89"}</span>
            </a>

            <Link
              href="/devis"
              className="inline-flex items-center justify-center bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm font-bold rounded-full px-7 py-3 transition-colors"
            >
              Demande de devis
            </Link>
          </div>

          <div className="flex items-center gap-4 lg:hidden ml-auto mr-4">
            <a href={companyInfo?.phone ? `tel:${companyInfo.phone.replace(/\s+/g, '')}` : "tel:+33124636789"} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/90 hover:text-white hover:bg-white/20 transition-colors" aria-label="Appeler">
              <Phone className="w-4.5 h-4.5" />
            </a>
          </div>

          <button className="lg:hidden text-nav" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {megaOpen && (
        <div className="hidden lg:block absolute left-0 right-0 top-full z-50" onMouseEnter={handleMegaEnter} onMouseLeave={handleMegaLeave}>
          <div className="container mx-auto px-4 lg:px-8 pt-2">
            <div className="bg-card rounded-2xl shadow-2xl border border-border p-6 animate-fade-in">
              <div className="grid grid-cols-3 gap-2">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={() => setMegaOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted transition-colors group text-left"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-4.5 h-4.5 text-primary" />
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
      )}

      {mobileOpen && (
        <div className="lg:hidden mx-4 mt-2 bg-card/95 backdrop-blur-xl rounded-2xl shadow-lg">
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
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="mt-1 ml-2 flex flex-col gap-0.5">
                        {services.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }}
                              className="flex items-center gap-2.5 py-2 px-3 rounded-lg text-sm text-nav hover:bg-muted transition-colors text-left"
                            >
                              <Icon className="w-4 h-4 text-primary" />
                              {service.shortTitle}
                            </Link>
                          );
                        })}
                      </div>
                    )}
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
            <Link href="/devis" onClick={() => setMobileOpen(false)} className="mt-2 block">
              <span className="inline-flex items-center justify-center bg-secondary text-secondary-foreground text-sm font-bold rounded-full px-5 py-2.5 w-full text-center">
                Demande de devis
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
