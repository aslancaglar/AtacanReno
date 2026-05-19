"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useState, useEffect } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminLoadingState } from "@/components/admin/AdminStates";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Save, XCircle } from "lucide-react";
import { toast } from "sonner";

export default function SettingsPage() {
  const companyInfo = useQuery(api.companyInfo.get);
  const updateCompanyInfo = useMutation(api.companyInfo.update);

  const [form, setForm] = useState({
    email: "",
    phone: "",
    address: "",
    workingHours: "",
    whatsappNumber: "",
    description: "",
    instagramUrl: "",
    facebookUrl: "",
    interventionZones: "",
    vacationStartDate: "",
    vacationEndDate: "",
    vacationMessage: "",
  });
  const [isSaving, setIsSaving] = useState(false);

  // Sync form state when data is loaded
  useEffect(() => {
    if (companyInfo) {
      setForm({
        email: companyInfo.email || "",
        phone: companyInfo.phone || "",
        address: companyInfo.address || "",
        workingHours: companyInfo.workingHours || "",
        whatsappNumber: companyInfo.whatsappNumber || "",
        description: companyInfo.description || "",
        instagramUrl: companyInfo.instagramUrl || "",
        facebookUrl: companyInfo.facebookUrl || "",
        interventionZones: companyInfo.interventionZones || "",
        vacationStartDate: companyInfo.vacationStartDate || "",
        vacationEndDate: companyInfo.vacationEndDate || "",
        vacationMessage: companyInfo.vacationMessage || "",
      });
    }
  }, [companyInfo]);

  const handleSave = async () => {
    try {
      setIsSaving(true);
      await updateCompanyInfo(form);
      toast.success("Informations mises à jour avec succès !");
    } catch (error) {
      toast.error("Erreur lors de la mise à jour des informations.");
    } finally {
      setIsSaving(false);
    }
  };

  if (companyInfo === undefined) {
    return <AdminLoadingState />;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <AdminHeader 
        title="Paramètres de l'entreprise" 
        description="Gérez les coordonnées et informations publiques affichées sur le site"
      />

      <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm p-6 lg:p-8">
        <div className="space-y-6">
          
          <div className="border-b border-border pb-4">
            <h3 className="text-lg font-bold text-nav">Coordonnées de contact</h3>
            <p className="text-sm text-muted-foreground">Ces informations s'afficheront dans le pied de page et sur la page de contact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Adresse Email Principale</Label>
              <Input 
                id="email" 
                value={form.email} 
                onChange={(e) => setForm({ ...form, email: e.target.value })} 
                placeholder="contact@atcrenovation.com" 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Numéro de Téléphone</Label>
              <Input 
                id="phone" 
                value={form.phone} 
                onChange={(e) => setForm({ ...form, phone: e.target.value })} 
                placeholder="06 12 34 56 78" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Adresse physique / Siège social</Label>
            <Input 
              id="address" 
              value={form.address} 
              onChange={(e) => setForm({ ...form, address: e.target.value })} 
              placeholder="54000 Nancy, France" 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="workingHours">Horaires d'ouverture</Label>
            <Textarea 
              id="workingHours" 
              value={form.workingHours} 
              onChange={(e) => setForm({ ...form, workingHours: e.target.value })} 
              placeholder="Lun – Ven : 8h00 – 18h00&#10;Sam : 9h00 – 13h00" 
              rows={2}
              className="resize-none"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Texte officiel (À propos)</Label>
            <Textarea 
              id="description" 
              value={form.description} 
              onChange={(e) => setForm({ ...form, description: e.target.value })} 
              placeholder="Spécialiste de la rénovation d'intérieur..." 
              rows={4}
              className="resize-none"
            />
            <p className="text-[11px] text-muted-foreground">Ce court texte s'affiche en bas de page sur le site public.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="interventionZones">Zones d'Intervention</Label>
            <Textarea 
              id="interventionZones" 
              value={form.interventionZones} 
              onChange={(e) => setForm({ ...form, interventionZones: e.target.value })} 
              placeholder={"Nancy (54000)\nVandœuvre-lès-Nancy\n..."} 
              rows={4}
              className="resize-none"
            />
            <p className="text-[11px] text-muted-foreground">Indiquez vos zones de déplacement (une ville ou un secteur par ligne).</p>
          </div>

          <div className="border-b border-border pt-4 pb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-nav">Congés / Fermeture Exceptionnelle</h3>
              <p className="text-sm text-muted-foreground">Configurez une période de fermeture. Un message s'affichera aux visiteurs du site.</p>
            </div>
            {(form.vacationStartDate || form.vacationEndDate) && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setForm({ ...form, vacationStartDate: "", vacationEndDate: "", vacationMessage: "" })}
                className="shrink-0 gap-1.5 text-destructive border-destructive/30 hover:bg-destructive/5 hover:text-destructive"
              >
                <XCircle className="w-4 h-4" />
                Désactiver
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="vacationStartDate">Date de début</Label>
              <Input 
                type="date"
                id="vacationStartDate" 
                value={form.vacationStartDate} 
                onChange={(e) => setForm({ ...form, vacationStartDate: e.target.value })} 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vacationEndDate">Date de fin</Label>
              <Input 
                type="date"
                id="vacationEndDate" 
                value={form.vacationEndDate} 
                onChange={(e) => setForm({ ...form, vacationEndDate: e.target.value })} 
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="vacationMessage">Message d'information</Label>
            <Textarea 
              id="vacationMessage" 
              value={form.vacationMessage} 
              onChange={(e) => setForm({ ...form, vacationMessage: e.target.value })} 
              placeholder="Ex: L'entreprise sera fermée pour congés annuels. Nous traiterons vos demandes à notre retour." 
              rows={3}
              className="resize-none"
            />
            <p className="text-[11px] text-muted-foreground">Laissez les dates vides pour désactiver le mode congés.</p>
          </div>

          <div className="border-b border-border pt-4 pb-4">
            <h3 className="text-lg font-bold text-nav">Réseaux Sociaux & Messagerie</h3>
            <p className="text-sm text-muted-foreground">Laissez vide pour masquer l'icône sur le site public.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="whatsapp">Numéro WhatsApp</Label>
              <Input 
                id="whatsapp" 
                value={form.whatsappNumber} 
                onChange={(e) => setForm({ ...form, whatsappNumber: e.target.value })} 
                placeholder="Ex: 33612345678 (sans le + et les espaces)" 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="instagram">Lien Instagram</Label>
              <Input 
                id="instagram" 
                value={form.instagramUrl} 
                onChange={(e) => setForm({ ...form, instagramUrl: e.target.value })} 
                placeholder="https://instagram.com/..." 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="facebook">Lien Facebook</Label>
              <Input 
                id="facebook" 
                value={form.facebookUrl} 
                onChange={(e) => setForm({ ...form, facebookUrl: e.target.value })} 
                placeholder="https://facebook.com/..." 
              />
            </div>
          </div>

          <div className="pt-6 flex justify-end">
            <Button 
              onClick={handleSave} 
              disabled={isSaving} 
              className="bg-primary hover:bg-primary/90 text-white min-w-[140px] gap-2 font-semibold"
            >
              <Save className="w-4 h-4" />
              {isSaving ? "Enregistrement..." : "Enregistrer"}
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
