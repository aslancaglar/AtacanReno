"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode, createContext, useContext } from "react";
import { Preloaded } from "convex/react";
import { api } from "../../convex/_generated/api";

import { LegalProvider } from "@/context/LegalContext";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const CompanyInfoContext = createContext<Preloaded<typeof api.companyInfo.get> | null>(null);

export const usePreloadedCompanyInfo = () => {
  const context = useContext(CompanyInfoContext);
  if (context === undefined || context === null) {
    // Return early or handle the null case in components to prevent crashes
    return context;
  }
  return context;
};

export default function ConvexClientProvider({
  children,
  preloadedCompanyInfo,
}: {
  children: ReactNode;
  preloadedCompanyInfo: Preloaded<typeof api.companyInfo.get>;
}) {
  return (
    <ConvexProvider client={convex}>
      <CompanyInfoContext.Provider value={preloadedCompanyInfo}>
        <LegalProvider>
          {children}
        </LegalProvider>
      </CompanyInfoContext.Provider>
    </ConvexProvider>
  );
}
