"use client";

import { useState, useEffect } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CalendarDays, X } from "lucide-react";

export default function VacationModal() {
  const companyInfo = useQuery(api.companyInfo.get);
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!companyInfo) return;

    const hasDismissed = sessionStorage.getItem("vacationModalDismissed");
    if (hasDismissed) return;

    const { vacationStartDate, vacationEndDate } = companyInfo;
    if (!vacationStartDate || !vacationEndDate) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const start = new Date(vacationStartDate);
    start.setHours(0, 0, 0, 0);

    const end = new Date(vacationEndDate);
    end.setHours(23, 59, 59, 999);

    if (today >= start && today <= end) {
      setIsOpen(true);
    }
  }, [companyInfo]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("vacationModalDismissed", "true");
  };

  if (!isMounted || !isOpen || !companyInfo) return null;

  const fmt = new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const startFormatted = companyInfo.vacationStartDate
    ? fmt.format(new Date(companyInfo.vacationStartDate))
    : "";
  const endFormatted = companyInfo.vacationEndDate
    ? fmt.format(new Date(companyInfo.vacationEndDate))
    : "";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) handleClose(); }}>
      <DialogContent className="p-0 border-0 overflow-hidden sm:max-w-md rounded-2xl shadow-2xl [&>button]:hidden">

        {/* ── Header band ── */}
        <div className="relative bg-primary px-8 pt-8 pb-10 flex flex-col items-center text-center">
          {/* Custom close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 transition-colors text-white"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Calendar icon */}
          <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mb-5 ring-4 ring-white/10">
            <CalendarDays className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-white text-2xl font-bold tracking-tight leading-tight mb-1">
            Fermeture exceptionnelle
          </h2>
          <p className="text-white/60 text-sm font-medium uppercase tracking-widest">
            ATC Rénovation
          </p>
        </div>

        {/* ── Floating date pill — bridges header and body ── */}
        <div className="flex justify-center -mt-5 z-10 relative">
          <div className="bg-secondary text-secondary-foreground text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 border border-secondary/20">
            <CalendarDays className="w-4 h-4" />
            <span>{startFormatted}</span>
            <span className="opacity-50">→</span>
            <span>{endFormatted}</span>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="px-8 pt-5 pb-8 text-center space-y-4">
          <p className="text-foreground/80 text-base leading-relaxed">
            {companyInfo.vacationMessage ||
              "L'entreprise est actuellement fermée pour congés annuels."}
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed">
            Vos demandes de devis seront traitées dès notre retour.
            Merci pour votre compréhension.
          </p>

          <button
            onClick={handleClose}
            className="mt-2 w-full bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all text-white font-semibold py-3 px-6 rounded-xl text-sm"
          >
            J&apos;ai compris
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
