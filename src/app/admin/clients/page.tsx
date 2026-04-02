"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import type { Id } from "../../../../convex/_generated/dataModel";
import { useState } from "react";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminLoadingState, AdminEmptyState } from "@/components/admin/AdminStates";

interface ClientForm { name: string; email: string; phone: string; city: string; notes: string; }
const emptyForm: ClientForm = { name: "", email: "", phone: "", city: "", notes: "" };

export default function ClientsPage() {
  const clients = useQuery(api.clients.list);
  const createClient = useMutation(api.clients.create);
  const updateClient = useMutation(api.clients.update);
  const removeClient = useMutation(api.clients.remove);

  const [search, setSearch] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<Id<"clients"> | null>(null);
  const [form, setForm] = useState<ClientForm>(emptyForm);
  const [deleteId, setDeleteId] = useState<Id<"clients"> | null>(null);

  const filtered = clients?.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) ||
           c.email.toLowerCase().includes(search.toLowerCase()) ||
           (c.city ?? "").toLowerCase().includes(search.toLowerCase())
  );

  const openNew = () => { setForm(emptyForm); setEditingId(null); setFormOpen(true); };
  const openEdit = (client: NonNullable<typeof clients>[number]) => {
    setForm({ name: client.name, email: client.email, phone: client.phone, city: client.city ?? "", notes: client.notes ?? "" });
    setEditingId(client._id); setFormOpen(true);
  };

  const handleSave = async () => {
    const data = { name: form.name, email: form.email, phone: form.phone, city: form.city || undefined, notes: form.notes || undefined };
    if (editingId) await updateClient({ id: editingId, ...data });
    else await createClient(data);
    setFormOpen(false); setForm(emptyForm); setEditingId(null);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <AdminHeader 
        title="Clients" 
        description="Gérez votre base de clients" 
        actionButton={
          <button onClick={openNew} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors shadow-md shadow-primary/20">
            <Plus className="w-4 h-4" /> Ajouter un client
          </button>
        } 
      />

      <div className="relative w-full sm:w-72">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input type="text" placeholder="Rechercher..." value={search} onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white border border-border rounded-xl pl-9 pr-4 py-2 text-sm text-nav placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40" />
      </div>

      <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
        {!filtered ? (
          <AdminLoadingState />
        ) : filtered.length === 0 ? (
          <AdminEmptyState message={search ? "Aucun client ne correspond à votre recherche." : "Vous n'avez pas encore de clients."} />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground text-xs uppercase tracking-wider">
                  <th className="text-left px-6 py-3 font-semibold">Nom</th>
                  <th className="text-left px-6 py-3 font-semibold">Email</th>
                  <th className="text-left px-6 py-3 font-semibold">Téléphone</th>
                  <th className="text-left px-6 py-3 font-semibold">Ville</th>
                  <th className="text-left px-6 py-3 font-semibold">Notes</th>
                  <th className="px-6 py-3 text-right font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filtered.map((c) => (
                  <tr key={c._id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-3.5 text-nav font-medium">{c.name}</td>
                    <td className="px-6 py-3.5 text-muted-foreground">{c.email}</td>
                    <td className="px-6 py-3.5 text-muted-foreground">{c.phone}</td>
                    <td className="px-6 py-3.5 text-muted-foreground">{c.city || "—"}</td>
                    <td className="px-6 py-3.5 text-muted-foreground max-w-[200px] truncate">{c.notes || "—"}</td>
                    <td className="px-6 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => openEdit(c)} className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"><Pencil className="w-4 h-4" /></button>
                        <button onClick={() => setDeleteId(c._id)} className="p-1.5 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-colors"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Dialog open={formOpen} onOpenChange={setFormOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader><DialogTitle>{editingId ? "Modifier le client" : "Ajouter un client"}</DialogTitle></DialogHeader>
          <div className="space-y-4 mt-2">
            <div className="space-y-2">
              <Label>Nom *</Label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jean Dupont" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Email *</Label><Input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jean@email.fr" /></div>
              <div className="space-y-2"><Label>Téléphone *</Label><Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="06 12 34 56 78" /></div>
            </div>
            <div className="space-y-2"><Label>Ville</Label><Input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="Nancy" /></div>
            <div className="space-y-2"><Label>Notes</Label><Textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} rows={3} placeholder="Notes sur le client..." className="resize-none" /></div>
            <div className="flex justify-end gap-3 pt-2">
              <Button variant="outline" onClick={() => setFormOpen(false)}>Annuler</Button>
              <Button onClick={handleSave} disabled={!form.name || !form.email || !form.phone} className="bg-primary hover:bg-primary/90 text-white">{editingId ? "Enregistrer" : "Ajouter"}</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader><AlertDialogTitle>Supprimer ce client ?</AlertDialogTitle><AlertDialogDescription>Cette action est irréversible.</AlertDialogDescription></AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 hover:bg-red-700 text-white" onClick={async () => { if (deleteId) { await removeClient({ id: deleteId }); setDeleteId(null); } }}>Supprimer</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
