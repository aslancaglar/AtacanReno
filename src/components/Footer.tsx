"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { usePreloadedQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { usePreloadedCompanyInfo } from "@/app/ConvexClientProvider";

const Footer = () => {
  const preloadedInfo = usePreloadedCompanyInfo();
  const companyInfo = usePreloadedQuery(preloadedInfo!);

  return (
    <footer className="bg-nav text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary-foreground">ATC Rénovation</h3>
            <p className="text-sm text-primary-foreground/60 leading-relaxed whitespace-pre-line">
              {companyInfo?.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground">Navigation</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><Link href="/" className="hover:text-secondary transition-colors">Accueil</Link></li>
              <li><Link href="/a-propos" className="hover:text-secondary transition-colors">À Propos</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors">Services</Link></li>
              <li><Link href="/realisations" className="hover:text-secondary transition-colors">Réalisations</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground">Nos Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="hover:text-secondary transition-colors">
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-secondary" />
                <span>{companyInfo?.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-secondary" />
                <a href={`tel:${companyInfo?.phone}`} className="hover:text-secondary transition-colors">
                  {companyInfo?.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-secondary" />
                <a href={`mailto:${companyInfo?.email}`} className="hover:text-secondary transition-colors">
                  {companyInfo?.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} ATC Rénovation Intérieure. Tous droits réservés.</p>
          <div className="flex gap-4">
            <span>Mentions légales</span>
            <span>Politique de confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
