"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import type { Id } from "../../../../convex/_generated/dataModel";
import { useState } from "react";
import {
  Trash2,
  Eye,
  Search,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  Home,
  Calendar,
  X,
  UserPlus,
} from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminLoadingState, AdminEmptyState } from "@/components/admin/AdminStates";
import { statusLabels } from "@/data/devisStatus";

const columns = [
  {
    key: "nouveau",
    label: "Nouveau",
    color: "bg-blue-500",
    cardAccent: "border-l-blue-500",
    badge: "bg-blue-50 text-blue-600",
    statusColor: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    key: "qualifie",
    label: "Qualifié",
    color: "bg-violet-500",
    cardAccent: "border-l-violet-500",
    badge: "bg-violet-50 text-violet-600",
    statusColor: "bg-violet-50 text-violet-600 border-violet-200",
  },
  {
    key: "envoye",
    label: "Envoyé",
    color: "bg-amber-500",
    cardAccent: "border-l-amber-500",
    badge: "bg-amber-50 text-amber-600",
    statusColor: "bg-amber-50 text-amber-600 border-amber-200",
  },
  {
    key: "accepte",
    label: "Accepté",
    color: "bg-emerald-500",
    cardAccent: "border-l-emerald-500",
    badge: "bg-emerald-50 text-emerald-600",
    statusColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
  {
    key: "refuse",
    label: "Refusé",
    color: "bg-red-500",
    cardAccent: "border-l-red-500",
    badge: "bg-red-50 text-red-600",
    statusColor: "bg-red-50 text-red-600 border-red-200",
  },
];

export default function DevisListPage() {
  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState<Id<"devis"> | null>(null);
  const [viewId, setViewId] = useState<Id<"devis"> | null>(null);
  const [draggedId, setDraggedId] = useState<Id<"devis"> | null>(null);
  const [dragOverColumn, setDragOverColumn] = useState<string | null>(null);

  const allDevis = useQuery(api.devis.list, {});
  const updateStatus = useMutation(api.devis.updateStatus);
  const removeDevis = useMutation(api.devis.remove);
  const createClient = useMutation(api.clients.create);

  const filtered = allDevis?.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.email.toLowerCase().includes(search.toLowerCase()) ||
      d.serviceSlug.toLowerCase().includes(search.toLowerCase()) ||
      (d.city ?? "").toLowerCase().includes(search.toLowerCase())
  );

  const viewedDevis = filtered?.find((d) => d._id === viewId) ?? null;

  const getColumnItems = (status: string) =>
    filtered?.filter((d) => d.status === status) ?? [];

  const handleDragStart = (e: React.DragEvent, id: Id<"devis">) => {
    setDraggedId(id);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDragOver = (e: React.DragEvent, columnKey: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDragOverColumn(columnKey);
  };

  const handleDragLeave = () => {
    setDragOverColumn(null);
  };

  const handleDrop = async (e: React.DragEvent, newStatus: string) => {
    e.preventDefault();
    setDragOverColumn(null);
    const id = e.dataTransfer.getData("text/plain") as Id<"devis">;
    const item = filtered?.find((d) => d._id === id);
    if (item && item.status !== newStatus) {
      await updateStatus({ id, status: newStatus });
    }
    setDraggedId(null);
  };

  const handleDragEnd = () => {
    setDraggedId(null);
    setDragOverColumn(null);
  };

  const handleAddClient = async () => {
    if (!viewedDevis) return;
    await createClient({
      name: viewedDevis.name,
      email: viewedDevis.email,
      phone: viewedDevis.phone,
      city: viewedDevis.city,
      notes: `Ajouté depuis la demande de devis: ${viewedDevis.serviceSlug}`,
    });
    alert("Client ajouté !");
  };

  return (
    <div className="max-w-full mx-auto space-y-6">
      <AdminHeader
        title="Demandes de devis"
        description="Glissez-déposez les cartes pour changer le statut"
      />

      {/* Search */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Rechercher par nom, email, service, ville..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-border rounded-xl pl-9 pr-4 py-2 text-sm text-nav placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40"
          />
        </div>
        <div className="text-xs text-muted-foreground">
          {filtered?.length ?? 0} demande{(filtered?.length ?? 0) > 1 ? "s" : ""}
        </div>
      </div>

      {/* Kanban Board */}
      {!filtered ? (
        <AdminLoadingState />
      ) : filtered.length === 0 && !search ? (
        <AdminEmptyState message="Aucune demande de devis reçue." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
          {columns.map((col) => {
            const items = getColumnItems(col.key);
            const isOver = dragOverColumn === col.key;

            return (
              <div
                key={col.key}
                onDragOver={(e) => handleDragOver(e, col.key)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, col.key)}
                className={`rounded-2xl transition-colors duration-200 ${
                  isOver
                    ? "bg-primary/5 ring-2 ring-primary/20"
                    : "bg-surface-container-low/50"
                }`}
              >
                {/* Column Header */}
                <div className="flex items-center justify-between p-4 pb-2">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-2.5 h-2.5 rounded-full ${col.color}`} />
                    <h3 className="text-sm font-bold text-nav">{col.label}</h3>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${col.badge}`}>
                    {items.length}
                  </span>
                </div>

                {/* Cards */}
                <div className="p-2 space-y-2 min-h-[120px]">
                  {items.map((d) => (
                    <div
                      key={d._id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, d._id)}
                      onDragEnd={handleDragEnd}
                      className={`bg-white rounded-xl border border-border/60 border-l-[3px] ${col.cardAccent} p-3.5 shadow-sm hover:shadow-md transition-all duration-200 cursor-grab active:cursor-grabbing group ${
                        draggedId === d._id ? "opacity-40 scale-95" : ""
                      }`}
                    >
                      {/* Card Header */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-nav truncate">{d.name}</h4>
                          <p className="text-xs text-muted-foreground truncate">{d.serviceSlug}</p>
                        </div>
                        <div className="flex items-center gap-0.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setViewId(d._id);
                            }}
                            className="p-1 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setDeleteId(d._id);
                            }}
                            className="p-1 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Card Details */}
                      <div className="space-y-1.5 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Mail className="w-3 h-3 shrink-0" />
                          <span className="truncate">{d.email}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Phone className="w-3 h-3 shrink-0" />
                          <span>{d.phone}</span>
                        </div>
                        {d.city && (
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3 h-3 shrink-0" />
                            <span>{d.city}</span>
                          </div>
                        )}
                      </div>

                      {/* Card Footer */}
                      <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-border/40">
                        <span className="text-[11px] text-muted-foreground">
                          {new Date(d.createdAt).toLocaleDateString("fr-FR", {
                            day: "2-digit",
                            month: "short",
                          })}
                        </span>
                        {d.budget && (
                          <span className="text-[11px] font-semibold text-nav">
                            {d.budget}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}

                  {items.length === 0 && (
                    <div className="flex items-center justify-center h-20 text-xs text-muted-foreground/60 border border-dashed border-border/40 rounded-xl">
                      {search ? "Aucun résultat" : "Aucune demande"}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* View Devis Modal */}
      <Dialog open={!!viewId} onOpenChange={(open) => !open && setViewId(null)}>
        <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
          {viewedDevis && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-extrabold text-nav">
                  {viewedDevis.name}
                </DialogTitle>
                <p className="text-sm text-muted-foreground">
                  Demande reçue le{" "}
                  {new Date(viewedDevis.createdAt).toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </DialogHeader>

              {/* Status */}
              <div className="mt-4">
                <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider block mb-2">
                  Statut
                </span>
                <div className="flex flex-wrap gap-2">
                  {columns.map((col) => (
                    <button
                      key={col.key}
                      onClick={() =>
                        updateStatus({ id: viewedDevis._id, status: col.key })
                      }
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                        viewedDevis.status === col.key
                          ? col.statusColor
                          : "bg-muted/50 text-muted-foreground border-border hover:bg-muted hover:text-nav"
                      }`}
                    >
                      {col.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-5 bg-surface-container-low/50 rounded-xl p-4 space-y-3">
                <h3 className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                  Coordonnées
                </h3>
                <div className="space-y-2.5">
                  <a
                    href={`mailto:${viewedDevis.email}`}
                    className="flex items-center gap-2.5 text-sm text-nav hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    {viewedDevis.email}
                  </a>
                  <a
                    href={`tel:${viewedDevis.phone}`}
                    className="flex items-center gap-2.5 text-sm text-nav hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    {viewedDevis.phone}
                  </a>
                  {viewedDevis.city && (
                    <div className="flex items-center gap-2.5 text-sm text-nav">
                      <MapPin className="w-4 h-4 text-primary" />
                      {viewedDevis.city}
                    </div>
                  )}
                  {viewedDevis.referral && (
                    <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      Source : {viewedDevis.referral}
                    </div>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="mt-4 bg-surface-container-low/50 rounded-xl p-4 space-y-3">
                <h3 className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                  Projet
                </h3>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-sm text-nav">
                    <Briefcase className="w-4 h-4 text-secondary" />
                    <span className="font-medium">{viewedDevis.serviceSlug}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-nav">
                    <Home className="w-4 h-4 text-secondary" />
                    {viewedDevis.propertyType}
                  </div>
                  {viewedDevis.surface && (
                    <div className="text-sm text-muted-foreground">
                      Surface : <span className="text-nav">{viewedDevis.surface}</span>
                    </div>
                  )}
                  {viewedDevis.budget && (
                    <div className="text-sm text-muted-foreground">
                      Budget : <span className="text-nav font-medium">{viewedDevis.budget}</span>
                    </div>
                  )}
                  {viewedDevis.timeline && (
                    <div className="text-sm text-muted-foreground">
                      Délai : <span className="text-nav">{viewedDevis.timeline}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              {viewedDevis.description && (
                <div className="mt-4 bg-surface-container-low/50 rounded-xl p-4">
                  <h3 className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-2">
                    Description du projet
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {viewedDevis.description}
                  </p>
                </div>
              )}

              {/* Actions */}
              <div className="mt-5 flex gap-2">
                <button
                  onClick={handleAddClient}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm font-semibold hover:bg-primary/20 transition-colors"
                >
                  <UserPlus className="w-4 h-4" />
                  Ajouter aux clients
                </button>
                <button
                  onClick={() => {
                    setViewId(null);
                    setDeleteId(viewedDevis._id);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 text-red-600 text-sm font-semibold hover:bg-red-100 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Supprimer
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Supprimer cette demande ?</AlertDialogTitle>
            <AlertDialogDescription>
              Cette action est irréversible. La demande de devis sera définitivement supprimée.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={async () => {
                if (deleteId) {
                  await removeDevis({ id: deleteId });
                  setDeleteId(null);
                }
              }}
            >
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
