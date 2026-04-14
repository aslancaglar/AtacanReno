"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type LegalModalType = "mentions" | "politique" | null;

interface LegalContextType {
  activeModal: LegalModalType;
  openModal: (type: LegalModalType) => void;
  closeModal: () => void;
}

const LegalContext = createContext<LegalContextType | undefined>(undefined);

export function LegalProvider({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<LegalModalType>(null);

  const openModal = (type: LegalModalType) => setActiveModal(type);
  const closeModal = () => setActiveModal(null);

  return (
    <LegalContext.Provider value={{ activeModal, openModal, closeModal }}>
      {children}
    </LegalContext.Provider>
  );
}

export function useLegal() {
  const context = useContext(LegalContext);
  if (context === undefined) {
    throw new Error("useLegal must be used within a LegalProvider");
  }
  return context;
}
