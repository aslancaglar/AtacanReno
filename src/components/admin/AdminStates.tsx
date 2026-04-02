import React from "react";
import { Loader2, FolderOpen } from "lucide-react";

interface AdminEmptyStateProps {
  message?: string;
}

export function AdminEmptyState({ message = "Aucun élément pour le moment." }: AdminEmptyStateProps) {
  return (
    <div className="bg-white border border-border rounded-2xl p-12 text-center shadow-sm flex flex-col items-center justify-center">
      <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4">
        <FolderOpen className="w-6 h-6 text-muted-foreground" />
      </div>
      <p className="text-nav font-semibold text-base mb-1">C'est un peu vide ici</p>
      <p className="text-muted-foreground text-sm">{message}</p>
    </div>
  );
}

export function AdminLoadingState() {
  return (
    <div className="p-16 flex flex-col items-center justify-center">
      <Loader2 className="w-8 h-8 animate-spin text-primary/40 mb-4" />
      <p className="text-muted-foreground text-sm font-medium">Chargement des données...</p>
    </div>
  );
}
