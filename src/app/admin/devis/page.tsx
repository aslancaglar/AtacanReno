"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import type { Id } from "../../../../convex/_generated/dataModel";
import { useState } from "react";
import { Trash2, Eye, Search } from "lucide-react";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminLoadingState, AdminEmptyState } from "@/components/admin/AdminStates";

const statusTabs = [
  { key: undefined, label: "Tous" },
  { key: "nouveau", label: "Nouveau" },
  { key: "en_cours", label: "En cours" },
  { key: "termine", label: "Terminé" },
  { key: "refuse", label: "Refusé" },
];

const statusStyles: Record<string, string> = {
  nouveau: "bg-blue-50 text-blue-600",
  en_cours: "bg-amber-50 text-amber-600",
  termine: "bg-emerald-50 text-emerald-600",
  refuse: "bg-red-50 text-red-600",
};

const statusLabels: Record<string, string> = {
  nouveau: "Nouveau",
  en_cours: "En cours",
  termine: "Terminé",
  refuse: "Refusé",
};

export default function DevisListPage() {
  const [activeStatus, setActiveStatus] = useState<string | undefined>(undefined);
  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState<Id<"devis"> | null>(null);

  const allDevis = useQuery(api.devis.list, { status: activeStatus });
  const removeDevis = useMutation(api.devis.remove);

  const filtered = allDevis?.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.email.toLowerCase().includes(search.toLowerCase()) ||
      d.serviceSlug.toLowerCase().includes(search.toLowerCase()) ||
      (d.city ?? "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <AdminHeader 
        title="Demandes de devis" 
        description="Gérez toutes les demandes de devis reçues" 
      />

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex gap-1.5 flex-wrap">
          {statusTabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveStatus(tab.key)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                activeStatus === tab.key
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground hover:text-nav hover:bg-surface-container"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Rechercher..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-border rounded-xl pl-9 pr-4 py-2 text-sm text-nav placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
        {!filtered ? (
          <AdminLoadingState />
        ) : filtered.length === 0 ? (
          <AdminEmptyState message={search || activeStatus ? "Aucune demande ne correspond à vos filtres." : "Aucune demande de devis reçue."} />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground text-xs uppercase tracking-wider">
                  <th className="text-left px-6 py-3 font-semibold">Date</th>
                  <th className="text-left px-6 py-3 font-semibold">Client</th>
                  <th className="text-left px-6 py-3 font-semibold">Email</th>
                  <th className="text-left px-6 py-3 font-semibold">Service</th>
                  <th className="text-left px-6 py-3 font-semibold">Ville</th>
                  <th className="text-left px-6 py-3 font-semibold">Budget</th>
                  <th className="text-left px-6 py-3 font-semibold">Statut</th>
                  <th className="px-6 py-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filtered.map((d) => (
                  <tr key={d._id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-3.5 text-muted-foreground whitespace-nowrap">
                      {new Date(d.createdAt).toLocaleDateString("fr-FR", { day: "2-digit", month: "short" })}
                    </td>
                    <td className="px-6 py-3.5 text-nav font-medium">{d.name}</td>
                    <td className="px-6 py-3.5 text-muted-foreground">{d.email}</td>
                    <td className="px-6 py-3.5 text-muted-foreground">{d.serviceSlug}</td>
                    <td className="px-6 py-3.5 text-muted-foreground">{d.city || "—"}</td>
                    <td className="px-6 py-3.5 text-muted-foreground">{d.budget || "—"}</td>
                    <td className="px-6 py-3.5">
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyles[d.status] ?? "bg-muted text-muted-foreground"}`}>
                        {statusLabels[d.status] ?? d.status}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/admin/devis/${d._id}`} className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors">
                          <Eye className="w-4 h-4" />
                        </Link>
                        <button onClick={() => setDeleteId(d._id)} className="p-1.5 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Supprimer cette demande ?</AlertDialogTitle>
            <AlertDialogDescription>Cette action est irréversible. La demande de devis sera définitivement supprimée.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 hover:bg-red-700 text-white" onClick={async () => { if (deleteId) { await removeDevis({ id: deleteId }); setDeleteId(null); } }}>
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
