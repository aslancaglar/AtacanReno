"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import type { Id } from "../../../../convex/_generated/dataModel";
import { useState } from "react";
import { Plus, Pencil, Trash2, Eye, EyeOff } from "lucide-react";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ImageUpload from "@/components/admin/ImageUpload";

import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminLoadingState, AdminEmptyState } from "@/components/admin/AdminStates";

interface PortfolioForm { title: string; location: string; category: string; imageUrl: string; beforeImageUrl: string; description: string; visible: boolean; }
const emptyForm: PortfolioForm = { title: "", location: "", category: "", imageUrl: "", beforeImageUrl: "", description: "", visible: true };
const categories = ["Cuisines", "Salles de bain", "Salons", "Appartements", "Combles", "Peinture", "Autre"];

export default function PortfolioPage() {
  const items = useQuery(api.portfolio.list, {});
  const createItem = useMutation(api.portfolio.create);
  const updateItem = useMutation(api.portfolio.update);
  const toggleVisibility = useMutation(api.portfolio.toggleVisibility);
  const removeItem = useMutation(api.portfolio.remove);

  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<Id<"portfolio"> | null>(null);
  const [form, setForm] = useState<PortfolioForm>(emptyForm);
  const [deleteId, setDeleteId] = useState<Id<"portfolio"> | null>(null);

  const openNew = () => { setForm(emptyForm); setEditingId(null); setFormOpen(true); };
  const openEdit = (item: NonNullable<typeof items>[number]) => {
    setForm({ title: item.title, location: item.location, category: item.category, imageUrl: item.imageUrl, beforeImageUrl: item.beforeImageUrl ?? "", description: item.description ?? "", visible: item.visible });
    setEditingId(item._id); setFormOpen(true);
  };

  const handleSave = async () => {
    const data = { title: form.title, location: form.location, category: form.category, imageUrl: form.imageUrl, beforeImageUrl: form.beforeImageUrl || undefined, description: form.description || undefined, visible: form.visible };
    if (editingId) await updateItem({ id: editingId, ...data });
    else await createItem(data);
    setFormOpen(false); setForm(emptyForm); setEditingId(null);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <AdminHeader 
        title="Portfolio" 
        description="Gérez vos réalisations affichées sur le site" 
        actionButton={
          <button onClick={openNew} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors shadow-md shadow-primary/20">
            <Plus className="w-4 h-4" /> Ajouter un projet
          </button>
        } 
      />

      {!items ? (
        <AdminLoadingState />
      ) : items.length === 0 ? (
        <AdminEmptyState message="Aucun projet dans le portfolio." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item._id} className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm group">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                {!item.visible && (
                  <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                    <span className="text-xs font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">Masqué</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-nav">{item.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{item.location} · {item.category}</p>
                <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-border">
                  <button onClick={() => toggleVisibility({ id: item._id })} className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors" title={item.visible ? "Masquer" : "Afficher"}>
                    {item.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                  <button onClick={() => openEdit(item)} className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"><Pencil className="w-4 h-4" /></button>
                  <button onClick={() => setDeleteId(item._id)} className="p-1.5 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-colors"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog open={formOpen} onOpenChange={setFormOpen}>
        <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{editingId ? "Modifier le projet" : "Ajouter un projet"}</DialogTitle></DialogHeader>
          <div className="space-y-4 mt-2">
            <div className="space-y-2"><Label>Titre *</Label><Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Suite Parentale de Luxe" /></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Lieu *</Label><Input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="Nancy Centre" /></div>
              <div className="space-y-2">
                <Label>Catégorie *</Label>
                <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v })}>
                  <SelectTrigger><SelectValue placeholder="Choisir" /></SelectTrigger>
                  <SelectContent>{categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                </Select>
              </div>
            </div>

            {/* Image uploads */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Photo après *</Label>
                <ImageUpload
                  value={form.imageUrl}
                  onChange={(url) => setForm({ ...form, imageUrl: url })}
                  label="after"
                  aspectRatio="aspect-[4/3]"
                />
              </div>
              <div className="space-y-2">
                <Label>Photo avant (optionnel)</Label>
                <ImageUpload
                  value={form.beforeImageUrl}
                  onChange={(url) => setForm({ ...form, beforeImageUrl: url })}
                  label="before"
                  aspectRatio="aspect-[4/3]"
                />
              </div>
            </div>

            <div className="space-y-2"><Label>Description</Label><Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className="resize-none" /></div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="visible" checked={form.visible} onChange={(e) => setForm({ ...form, visible: e.target.checked })} className="rounded" />
              <Label htmlFor="visible">Visible sur le site</Label>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <Button variant="outline" onClick={() => setFormOpen(false)}>Annuler</Button>
              <Button onClick={handleSave} disabled={!form.title || !form.location || !form.category || !form.imageUrl} className="bg-primary hover:bg-primary/90 text-white">{editingId ? "Enregistrer" : "Ajouter"}</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader><AlertDialogTitle>Supprimer ce projet ?</AlertDialogTitle><AlertDialogDescription>Cette action est irréversible.</AlertDialogDescription></AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 hover:bg-red-700 text-white" onClick={async () => { if (deleteId) { await removeItem({ id: deleteId }); setDeleteId(null); } }}>Supprimer</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
