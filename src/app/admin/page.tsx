"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";
import { useState } from "react";
import {
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  Home,
  Calendar,
  UserPlus,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { statusLabels, statusStyles } from "@/data/devisStatus";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const statusColumns = [
  { key: "nouveau", label: "Nouveau", statusColor: "bg-blue-50 text-blue-600 border-blue-200" },
  { key: "qualifie", label: "Qualifié", statusColor: "bg-violet-50 text-violet-600 border-violet-200" },
  { key: "envoye", label: "Envoyé", statusColor: "bg-amber-50 text-amber-600 border-amber-200" },
  { key: "accepte", label: "Accepté", statusColor: "bg-emerald-50 text-emerald-600 border-emerald-200" },
  { key: "refuse", label: "Refusé", statusColor: "bg-red-50 text-red-600 border-red-200" },
];

export default function AdminDashboard() {
  const stats = useQuery(api.devis.getStats);
  const recentDevis = useQuery(api.devis.listRecent, { limit: 5 });
  const updateStatus = useMutation(api.devis.updateStatus);
  const createClient = useMutation(api.clients.create);

  const [viewId, setViewId] = useState<Id<"devis"> | null>(null);
  const viewedDevis = recentDevis?.find((d) => d._id === viewId) ?? null;

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

  const statCards = [
    {
      label: "Total demandes",
      value: stats?.total ?? "—",
      icon: FileText,
      color: "bg-blue-50 border-blue-100",
      iconColor: "text-blue-500 bg-blue-100",
    },
    {
      label: "Nouveaux",
      value: stats?.nouveau ?? "—",
      icon: AlertCircle,
      color: "bg-amber-50 border-amber-100",
      iconColor: "text-amber-500 bg-amber-100",
    },
    {
      label: "Envoyés",
      value: stats?.envoye ?? "—",
      icon: Clock,
      color: "bg-amber-50 border-amber-100",
      iconColor: "text-amber-500 bg-amber-100",
    },
    {
      label: "Acceptés",
      value: stats?.accepte ?? "—",
      icon: CheckCircle,
      color: "bg-emerald-50 border-emerald-100",
      iconColor: "text-emerald-500 bg-emerald-100",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-nav">Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Vue d&apos;ensemble de votre activité
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className={`${card.color} border rounded-2xl p-5`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                  {card.label}
                </span>
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${card.iconColor}`}>
                  <Icon className="w-4.5 h-4.5" />
                </div>
              </div>
              <span className="text-3xl font-extrabold text-nav">
                {card.value}
              </span>
            </div>
          );
        })}
      </div>

      {/* Recent Devis */}
      <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="text-base font-bold text-nav">Dernières demandes</h2>
          <Link
            href="/admin/devis"
            className="text-xs font-semibold text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
          >
            Voir tout <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {!recentDevis ? (
          <div className="p-8 text-center text-muted-foreground text-sm">
            Chargement...
          </div>
        ) : recentDevis.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground text-sm">
            Aucune demande de devis pour le moment.
          </div>
        ) : (
          <>
            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-muted-foreground text-xs uppercase tracking-wider">
                    <th className="text-left px-6 py-3 font-semibold">Date</th>
                    <th className="text-left px-6 py-3 font-semibold">Client</th>
                    <th className="text-left px-6 py-3 font-semibold">Service</th>
                    <th className="text-left px-6 py-3 font-semibold">Ville</th>
                    <th className="text-left px-6 py-3 font-semibold">Statut</th>
                    <th className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {recentDevis.map((d) => (
                    <tr key={d._id} className="hover:bg-muted/30 transition-colors cursor-pointer" onClick={() => setViewId(d._id)}>
                      <td className="px-6 py-3.5 text-muted-foreground whitespace-nowrap">
                        {new Date(d.createdAt).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" })}
                      </td>
                      <td className="px-6 py-3.5 text-nav font-medium">{d.name}</td>
                      <td className="px-6 py-3.5 text-muted-foreground">{d.serviceSlug}</td>
                      <td className="px-6 py-3.5 text-muted-foreground">{d.city || "—"}</td>
                      <td className="px-6 py-3.5">
                        <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyles[d.status] ?? "bg-muted text-muted-foreground"}`}>
                          {statusLabels[d.status] ?? d.status}
                        </span>
                      </td>
                      <td className="px-6 py-3.5 text-right">
                        <span className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
                          Détails
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden divide-y divide-border">
              {recentDevis.map((d) => (
                <button key={d._id} onClick={() => setViewId(d._id)} className="flex items-center justify-between gap-3 px-4 py-3.5 hover:bg-muted/30 transition-colors w-full text-left">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-nav truncate">{d.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{d.serviceSlug}{d.city ? ` · ${d.city}` : ""}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-[11px] font-semibold ${statusStyles[d.status] ?? "bg-muted text-muted-foreground"}`}>
                      {statusLabels[d.status] ?? d.status}
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      {new Date(d.createdAt).toLocaleDateString("fr-FR", { day: "2-digit", month: "short" })}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>

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
                  {statusColumns.map((col) => (
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
                  <a href={`mailto:${viewedDevis.email}`} className="flex items-center gap-2.5 text-sm text-nav hover:text-primary transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                    {viewedDevis.email}
                  </a>
                  <a href={`tel:${viewedDevis.phone}`} className="flex items-center gap-2.5 text-sm text-nav hover:text-primary transition-colors">
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
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
