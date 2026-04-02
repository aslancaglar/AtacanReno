"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import {
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const statusLabels: Record<string, { label: string; color: string }> = {
  nouveau: { label: "Nouveau", color: "bg-blue-50 text-blue-600" },
  en_cours: { label: "En cours", color: "bg-amber-50 text-amber-600" },
  termine: { label: "Terminé", color: "bg-emerald-50 text-emerald-600" },
  refuse: { label: "Refusé", color: "bg-red-50 text-red-600" },
};

export default function AdminDashboard() {
  const stats = useQuery(api.devis.getStats);
  const recentDevis = useQuery(api.devis.listRecent, { limit: 5 });

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
      label: "En cours",
      value: stats?.enCours ?? "—",
      icon: Clock,
      color: "bg-purple-50 border-purple-100",
      iconColor: "text-purple-500 bg-purple-100",
    },
    {
      label: "Terminés",
      value: stats?.termine ?? "—",
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
          <div className="overflow-x-auto">
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
                {recentDevis.map((d) => {
                  const status = statusLabels[d.status] ?? {
                    label: d.status,
                    color: "bg-muted text-muted-foreground",
                  };
                  return (
                    <tr
                      key={d._id}
                      className="hover:bg-muted/30 transition-colors"
                    >
                      <td className="px-6 py-3.5 text-muted-foreground">
                        {new Date(d.createdAt).toLocaleDateString("fr-FR", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                      <td className="px-6 py-3.5 text-nav font-medium">
                        {d.name}
                      </td>
                      <td className="px-6 py-3.5 text-muted-foreground">
                        {d.serviceSlug}
                      </td>
                      <td className="px-6 py-3.5 text-muted-foreground">
                        {d.city || "—"}
                      </td>
                      <td className="px-6 py-3.5">
                        <span
                          className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${status.color}`}
                        >
                          {status.label}
                        </span>
                      </td>
                      <td className="px-6 py-3.5 text-right">
                        <Link
                          href={`/admin/devis/${d._id}`}
                          className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                        >
                          Détails
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
