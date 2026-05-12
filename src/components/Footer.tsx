import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { usePreloadedQuery } from "convex/react";
import { usePreloadedCompanyInfo } from "@/app/ConvexClientProvider";
import { LegalModals } from "./LegalModals";
import { useLegal } from "@/context/LegalContext";
import { getPhoneHref, getPublicAddress } from "@/lib/companyInfo";

const Footer = () => {
  const { activeModal, openModal, closeModal } = useLegal();
  const preloadedInfo = usePreloadedCompanyInfo();
  const companyInfo = usePreloadedQuery(preloadedInfo!);
  const publicAddress = getPublicAddress(companyInfo?.address);
  const phoneHref = getPhoneHref(companyInfo?.phone);

  return (
    <footer className="bg-nav text-primary-foreground" suppressHydrationWarning>
      <div className="container mx-auto px-4 lg:px-8 py-12" suppressHydrationWarning>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start mb-4 leading-tight">
              <h3 className="text-lg font-bold text-primary-foreground uppercase tracking-tight">ATC Rénovation</h3>
              <span className="text-[10px] font-medium tracking-wider text-primary-foreground/50 uppercase">Notre différence est notre qualité</span>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed whitespace-pre-line">
              {companyInfo?.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground">Navigation</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><Link href="/" className="hover:text-secondary transition-colors transition-transform hover:translate-x-1 block">Accueil</Link></li>
              <li><Link href="/a-propos" className="hover:text-secondary transition-colors transition-transform hover:translate-x-1 block">À Propos</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors transition-transform hover:translate-x-1 block">Services</Link></li>
              <li><Link href="/realisations" className="hover:text-secondary transition-colors transition-transform hover:translate-x-1 block">Réalisations</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors transition-transform hover:translate-x-1 block">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground">Nos Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="hover:text-secondary transition-colors transition-transform hover:translate-x-1 block">
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground">Zones d'Intervention</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              {companyInfo?.interventionZones?.split('\n').filter(Boolean).map((zone, i) => (
                <li key={i}>{zone}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-secondary" aria-hidden="true" />
                <span>{publicAddress}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-secondary" aria-hidden="true" />
                <a href={phoneHref} className="hover:text-secondary transition-colors" aria-label={`Appeler le ${companyInfo?.phone || ""}`}>
                  {companyInfo?.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-secondary" aria-hidden="true" />
                <a href={`mailto:${companyInfo?.email}`} className="hover:text-secondary transition-colors">
                  {companyInfo?.email}
                </a>
              </li>
              <li className="flex items-center gap-2 pointer-events-none">
                <span className="text-secondary font-bold text-xs shrink-0">SIRET</span>
                <span className="text-xs">{companyInfo?.siret || "82369837800028"}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} ATC Rénovation Intérieure. Tous droits réservés.</p>
          <div className="flex gap-6">
            <button 
              onClick={() => openModal("mentions")}
              className="hover:text-secondary transition-colors underline-offset-4 hover:underline"
            >
              Mentions légales
            </button>
            <button 
              onClick={() => openModal("politique")}
              className="hover:text-secondary transition-colors underline-offset-4 hover:underline"
            >
              Politique de confidentialité
            </button>
          </div>
        </div>
      </div>

      <LegalModals 
        isOpen={activeModal} 
        onClose={closeModal} 
        companyInfo={companyInfo}
      />
    </footer>
  );
};

export default Footer;
