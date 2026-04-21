"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, X } from "lucide-react";
import { useLegal } from "@/context/LegalContext";

export function RGPDNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const { openModal } = useLegal();

  useEffect(() => {
    const consent = localStorage.getItem("atc-rgpd-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("atc-rgpd-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="animate-slide-up fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:max-w-md lg:max-w-lg"
    >
      <div className="bg-nav/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-secondary" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-white tracking-wide">
              Protection de vos données
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic. 
              En continuant votre visite, vous acceptez notre utilisation des cookies et notre 
              <button 
                onClick={() => openModal("politique")}
                className="text-secondary hover:underline ml-1 font-medium"
              >
                politique de confidentialité
              </button>.
            </p>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-white/40 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xs font-bold py-2.5 rounded-full transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
          >
            Accepter
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white/80 text-xs font-medium rounded-full transition-colors"
          >
            Plus tard
          </button>
        </div>
      </div>
    </div>
  );
}
