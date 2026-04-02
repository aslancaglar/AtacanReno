"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import type { Id } from "../../../../../convex/_generated/dataModel";
import { useParams } from "next/navigation";
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Home, Briefcase, UserPlus } from "lucide-react";
import Link from "next/link";

const statusOptions = [
  { value: "nouveau", label: "Nouveau", color: "bg-blue-50 text-blue-600 border-blue-200" },
  { value: "en_cours", label: "En cours", color: "bg-amber-50 text-amber-600 border-amber-200" },
  { value: "termine", label: "Terminé", color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
  { value: "refuse", label: "Refusé", color: "bg-red-50 text-red-600 border-red-200" },
];

export default function DevisDetailPage() {
  const params = useParams();
  const id = params.id as Id<"devis">;
  const devis = useQuery(api.devis.getById, { id });
  const updateStatus = useMutation(api.devis.updateStatus);
  const createClient = useMutation(api.clients.create);

  if (!devis) {
    return <div className="max-w-4xl mx-auto py-12 text-center text-muted-foreground">Chargement...</div>;
  }

  const handleAddClient = async () => {
    await createClient({
      name: devis.name,
      email: devis.email,
      phone: devis.phone,
      city: devis.city,
      notes: `Ajouté depuis la demande de devis: ${devis.serviceSlug}`,
    });
    alert("Client ajouté !");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Link href="/admin/devis" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-nav transition-colors">
        <ArrowLeft className="w-4 h-4" /> Retour à la liste
      </Link>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-nav">{devis.name}</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Demande reçue le {new Date(devis.createdAt).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}
          </p>
        </div>
        <button onClick={handleAddClient} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm font-semibold hover:bg-primary/20 transition-colors">
          <UserPlus className="w-4 h-4" /> Ajouter aux clients
        </button>
      </div>

      {/* Status */}
      <div className="bg-white border border-border rounded-2xl p-5 shadow-sm">
        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider block mb-3">Statut</span>
        <div className="flex flex-wrap gap-2">
          {statusOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => updateStatus({ id, status: opt.value })}
              className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
                devis.status === opt.value
                  ? `${opt.color}`
                  : "bg-muted/50 text-muted-foreground border-border hover:bg-muted hover:text-nav"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Info cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-border rounded-2xl p-5 space-y-4 shadow-sm">
          <h2 className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Coordonnées</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary" />
              <a href={`mailto:${devis.email}`} className="text-sm text-nav hover:underline">{devis.email}</a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary" />
              <a href={`tel:${devis.phone}`} className="text-sm text-nav hover:underline">{devis.phone}</a>
            </div>
            {devis.city && (
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-nav">{devis.city}</span>
              </div>
            )}
            {devis.referral && (
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Source : {devis.referral}</span>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white border border-border rounded-2xl p-5 space-y-4 shadow-sm">
          <h2 className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Projet</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Briefcase className="w-4 h-4 text-secondary" />
              <span className="text-sm text-nav font-medium">{devis.serviceSlug}</span>
            </div>
            <div className="flex items-center gap-3">
              <Home className="w-4 h-4 text-secondary" />
              <span className="text-sm text-nav">{devis.propertyType}</span>
            </div>
            {devis.surface && <div className="text-sm text-muted-foreground">Surface : <span className="text-nav">{devis.surface}</span></div>}
            {devis.budget && <div className="text-sm text-muted-foreground">Budget : <span className="text-nav">{devis.budget}</span></div>}
            {devis.timeline && <div className="text-sm text-muted-foreground">Délai : <span className="text-nav">{devis.timeline}</span></div>}
          </div>
        </div>
      </div>

      {devis.description && (
        <div className="bg-white border border-border rounded-2xl p-5 shadow-sm">
          <h2 className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-3">Description du projet</h2>
          <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">{devis.description}</p>
        </div>
      )}
    </div>
  );
}
