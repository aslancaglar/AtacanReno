"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import type { Id } from "../../../../convex/_generated/dataModel";
import { useState } from "react";
import { Plus, Pencil, Trash2, Eye, EyeOff, Star, UserCircle } from "lucide-react";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ImageUpload from "@/components/admin/ImageUpload";

import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminLoadingState, AdminEmptyState } from "@/components/admin/AdminStates";

interface ReviewForm { name: string; text: string; rating: number; project: string; imageUrl: string; visible: boolean; }
const emptyForm: ReviewForm = { name: "", text: "", rating: 5, project: "", imageUrl: "", visible: true };

export default function ReviewsPage() {
  const reviews = useQuery(api.reviews.list, {});
  const createReview = useMutation(api.reviews.create);
  const updateReview = useMutation(api.reviews.update);
  const toggleVisibility = useMutation(api.reviews.toggleVisibility);
  const removeReview = useMutation(api.reviews.remove);

  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<Id<"reviews"> | null>(null);
  const [form, setForm] = useState<ReviewForm>(emptyForm);
  const [deleteId, setDeleteId] = useState<Id<"reviews"> | null>(null);

  const openNew = () => { setForm(emptyForm); setEditingId(null); setFormOpen(true); };
  const openEdit = (review: NonNullable<typeof reviews>[number]) => {
    setForm({ name: review.name, text: review.text, rating: review.rating, project: review.project, imageUrl: review.imageUrl ?? "", visible: review.visible });
    setEditingId(review._id); setFormOpen(true);
  };

  const handleSave = async () => {
    const data = { name: form.name, text: form.text, rating: form.rating, project: form.project, imageUrl: form.imageUrl || undefined, visible: form.visible };
    if (editingId) await updateReview({ id: editingId, ...data });
    else await createReview(data);
    setFormOpen(false); setForm(emptyForm); setEditingId(null);
  };

  // Generate initials from name
  const getInitials = (name: string) => {
    const parts = name.split(" ");
    if (parts.length >= 2) return parts[0][0] + parts[1][0];
    return name.substring(0, 2);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <AdminHeader 
        title="Avis clients" 
        description="Gérez les témoignages affichés sur le site" 
        actionButton={
          <button onClick={openNew} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors shadow-md shadow-primary/20">
            <Plus className="w-4 h-4" /> Ajouter un avis
          </button>
        } 
      />

      {!reviews ? (
        <AdminLoadingState />
      ) : reviews.length === 0 ? (
        <AdminEmptyState message="Aucun avis pour le moment." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <div key={review._id} className={`bg-white border rounded-2xl overflow-hidden shadow-sm ${review.visible ? "border-border" : "border-border opacity-60"}`}>
              {/* Project image */}
              {review.imageUrl && (
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={review.imageUrl} alt={review.project} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  {/* Icon avatar with initials */}
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary uppercase">{getInitials(review.name)}</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-nav truncate">{review.name}</h3>
                    <p className="text-xs text-secondary font-medium">{review.project}</p>
                  </div>
                </div>

                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? "fill-secondary text-secondary" : "text-border"}`} />
                  ))}
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-3">&ldquo;{review.text}&rdquo;</p>

                {!review.visible && (
                  <span className="inline-flex px-2 py-0.5 text-[10px] font-semibold bg-muted text-muted-foreground rounded-full mb-3">Masqué</span>
                )}

                <div className="flex items-center gap-1.5 pt-3 border-t border-border">
                  <button onClick={() => toggleVisibility({ id: review._id })} className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors" title={review.visible ? "Masquer" : "Afficher"}>
                    {review.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                  <button onClick={() => openEdit(review)} className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"><Pencil className="w-4 h-4" /></button>
                  <button onClick={() => setDeleteId(review._id)} className="p-1.5 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-colors"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog open={formOpen} onOpenChange={setFormOpen}>
        <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{editingId ? "Modifier l'avis" : "Ajouter un avis"}</DialogTitle></DialogHeader>
          <div className="space-y-4 mt-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Nom du client *</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Sophie Laurent" /></div>
              <div className="space-y-2"><Label>Projet *</Label><Input value={form.project} onChange={(e) => setForm({ ...form, project: e.target.value })} placeholder="Rénovation Salle de Bains" /></div>
            </div>
            <div className="space-y-2">
              <Label>Note *</Label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button key={n} type="button" onClick={() => setForm({ ...form, rating: n })} className="p-1">
                    <Star className={`w-6 h-6 transition-colors ${n <= form.rating ? "fill-secondary text-secondary" : "text-border hover:text-muted-foreground"}`} />
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2"><Label>Témoignage *</Label><Textarea value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} rows={4} placeholder="L'avis du client..." className="resize-none" /></div>

            {/* Project image upload */}
            <div className="space-y-2">
              <Label>Photo du projet</Label>
              <ImageUpload
                value={form.imageUrl}
                onChange={(url) => setForm({ ...form, imageUrl: url })}
                label="project"
                aspectRatio="aspect-[16/9]"
              />
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="visible-review" checked={form.visible} onChange={(e) => setForm({ ...form, visible: e.target.checked })} className="rounded" />
              <Label htmlFor="visible-review">Visible sur le site</Label>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <Button variant="outline" onClick={() => setFormOpen(false)}>Annuler</Button>
              <Button onClick={handleSave} disabled={!form.name || !form.text || !form.project} className="bg-primary hover:bg-primary/90 text-white">{editingId ? "Enregistrer" : "Ajouter"}</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader><AlertDialogTitle>Supprimer cet avis ?</AlertDialogTitle><AlertDialogDescription>Cette action est irréversible.</AlertDialogDescription></AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 hover:bg-red-700 text-white" onClick={async () => { if (deleteId) { await removeReview({ id: deleteId }); setDeleteId(null); } }}>Supprimer</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
