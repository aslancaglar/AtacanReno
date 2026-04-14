"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { legalContent } from "@/data/legal";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LegalModalsProps {
  isOpen: "mentions" | "politique" | null;
  onClose: () => void;
  companyInfo?: {
    address?: string;
    email?: string;
    phone?: string;
  };
}

export function LegalModals({ isOpen, onClose, companyInfo }: LegalModalsProps) {
  const content = isOpen === "mentions" 
    ? legalContent.mentionsLegales 
    : legalContent.politiqueConfidentialite;

  const replacePlaceholders = (text: string) => {
    return text
      .replace("[ADRESSE]", companyInfo?.address || "Nancy, France")
      .replace("[EMAIL]", companyInfo?.email || "contact@atc-renovation.fr")
      .replace("[PHONE]", companyInfo?.phone || "Non renseigné");
  };

  return (
    <Dialog open={!!isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[85vh] flex flex-col p-0 overflow-hidden border-none shadow-2xl bg-background">
        <DialogHeader className="p-8 pb-4 bg-primary text-white shrink-0">
          <DialogTitle className="text-2xl font-bold tracking-tight">
            {content?.title}
          </DialogTitle>
          <div className="h-1 w-12 bg-secondary mt-2 rounded-full" />
        </DialogHeader>

        <ScrollArea className="flex-1 p-8 pt-6 overflow-y-auto">
          <div className="space-y-8 pb-8">
            {content?.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                  <span className="w-1 h-4 bg-secondary rounded-full" />
                  {section.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {replacePlaceholders(section.content)}
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-border bg-muted/30 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-md"
          >
            Fermer
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
