"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Check,
  CheckCircle2,
  Phone,
  Home,
  Building2,
  Store,
  Send,
  ClipboardList,
  User,
  FileSearch,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/data/services";

const TOTAL_STEPS = 4;

const stepsMeta = [
  { number: 1, label: "Projet", icon: ClipboardList },
  { number: 2, label: "Détails", icon: FileSearch },
  { number: 3, label: "Coordonnées", icon: User },
  { number: 4, label: "Récapitulatif", icon: Sparkles },
];

const propertyTypes = [
  { value: "appartement", label: "Appartement", icon: Building2 },
  { value: "maison", label: "Maison", icon: Home },
  { value: "local", label: "Local commercial", icon: Store },
];

const budgetRanges = [
  "Moins de 5 000 €",
  "5 000 € – 10 000 €",
  "10 000 € – 20 000 €",
  "20 000 € – 40 000 €",
  "40 000 € – 70 000 €",
  "Plus de 70 000 €",
  "Je ne sais pas encore",
];

const timelineOptions = [
  "Dès que possible",
  "Dans 1 à 2 mois",
  "Dans 3 à 6 mois",
  "Dans plus de 6 mois",
  "Pas encore décidé",
];

const referralSources = [
  "Bouche à oreille",
  "Recherche Google",
  "Réseaux sociaux",
  "Recommandation d'un artisan",
  "Publicité",
  "Autre",
];

interface FormData {
  serviceSlug: string;
  propertyType: string;
  surface: string;
  budget: string;
  timeline: string;
  description: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  referral: string;
}

const initialFormData: FormData = {
  serviceSlug: "",
  propertyType: "",
  surface: "",
  budget: "",
  timeline: "",
  description: "",
  name: "",
  email: "",
  phone: "",
  city: "",
  referral: "",
};

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -80 : 80, opacity: 0 }),
};

const DevisPageClient = () => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateField(e.target.name as keyof FormData, e.target.value);
  };

  const canProceed = (): boolean => {
    switch (step) {
      case 1: return formData.serviceSlug !== "" && formData.propertyType !== "";
      case 2: return true;
      case 3: return formData.name !== "" && formData.email !== "" && formData.phone !== "";
      case 4: return true;
      default: return false;
    }
  };

  const goNext = () => { if (step < TOTAL_STEPS && canProceed()) { setDirection(1); setStep((s) => s + 1); } };
  const goPrev = () => { if (step > 1) { setDirection(-1); setStep((s) => s - 1); } };

  const createDevis = useMutation(api.devis.create);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await createDevis({
        serviceSlug: formData.serviceSlug,
        propertyType: formData.propertyType,
        surface: formData.surface || undefined,
        budget: formData.budget || undefined,
        timeline: formData.timeline || undefined,
        description: formData.description || undefined,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city || undefined,
        referral: formData.referral || undefined,
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting devis:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedService = services.find((s) => s.slug === formData.serviceSlug);
  const selectedProperty = propertyTypes.find((p) => p.value === formData.propertyType);

  return (
    <Layout>
        {/* ─── Hero ─── */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/hero-bg-2.jpg" alt="Demande de devis ATC Rénovation" className="w-full h-full object-cover" width={1920} height={800} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/30" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Demande de devis" }]} />
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-4">
              Demande de devis gratuit
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Décrivez votre projet en quelques étapes et recevez un devis personnalisé sous 48h. Gratuit et sans engagement.
            </motion.p>
          </div>
        </section>

        {/* ─── Form Section ─── */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">

            {isSubmitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-card rounded-2xl shadow-lg p-10 lg:p-16 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-extrabold mb-3">Demande envoyée !</h2>
                <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8">
                  Merci pour votre demande de devis. Notre équipe l&apos;étudie et vous recontactera sous 24 à 48h avec une proposition personnalisée.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/"><Button variant="outline" className="btn-pill px-8 font-semibold">Retour à l&apos;accueil</Button></Link>
                  <a href="tel:+33124636789"><Button className="btn-pill bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8"><Phone className="w-4 h-4 mr-2" />Nous appeler</Button></a>
                </div>
              </motion.div>
            ) : (
              <>
                {/* ── Progress Bar ── */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} className="mb-10">
                  <div className="flex items-center justify-between mb-6">
                    {stepsMeta.map((s, i) => {
                      const Icon = s.icon;
                      const isActive = step === s.number;
                      const isCompleted = step > s.number;
                      return (
                        <div key={s.number} className="flex items-center flex-1">
                          <div className="flex flex-col items-center gap-2 flex-shrink-0">
                            <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${isCompleted ? "bg-primary text-white" : isActive ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-surface-container-highest text-muted-foreground"}`}>
                              {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                            </div>
                            <span className={`text-xs font-semibold hidden sm:block transition-colors ${isActive || isCompleted ? "text-nav" : "text-muted-foreground"}`}>{s.label}</span>
                          </div>
                          {i < stepsMeta.length - 1 && (
                            <div className="flex-1 mx-3 h-0.5 rounded-full bg-surface-container-highest relative overflow-hidden">
                              <motion.div className="absolute inset-y-0 left-0 bg-primary rounded-full" initial={false} animate={{ width: isCompleted ? "100%" : "0%" }} transition={{ duration: 0.4, ease: "easeOut" }} />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-sm text-muted-foreground text-center">Étape {step} sur {TOTAL_STEPS}</p>
                </motion.div>

                {/* ── Step Content ── */}
                <div className="bg-card rounded-2xl shadow-lg p-8 lg:p-12 min-h-[480px] flex flex-col">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div key={step} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35, ease: "easeOut" }} className="flex-1">

                      {/* STEP 1 */}
                      {step === 1 && (
                        <div>
                          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-3 block">Étape 1</span>
                          <h2 className="text-2xl lg:text-3xl font-extrabold mb-2">Quel est votre projet ?</h2>
                          <p className="text-muted-foreground leading-relaxed mb-8">Sélectionnez le type de travaux et le type de bien concerné.</p>

                          <div className="mb-8">
                            <Label className="text-sm font-bold mb-3 block">Type de travaux <span className="text-red-500">*</span></Label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                              {services.map((service) => {
                                const Icon = service.icon;
                                const isSelected = formData.serviceSlug === service.slug;
                                return (
                                  <button key={service.slug} type="button" onClick={() => updateField("serviceSlug", service.slug)} className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-200 text-center ${isSelected ? "border-primary bg-primary/5 shadow-md" : "border-border hover:border-primary/30 hover:bg-muted/50"}`}>
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isSelected ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
                                      <Icon className="w-5 h-5" />
                                    </div>
                                    <span className={`text-xs font-semibold leading-tight ${isSelected ? "text-primary" : "text-nav"}`}>{service.shortTitle}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          <div>
                            <Label className="text-sm font-bold mb-3 block">Type de bien <span className="text-red-500">*</span></Label>
                            <div className="grid grid-cols-3 gap-3">
                              {propertyTypes.map((pt) => {
                                const Icon = pt.icon;
                                const isSelected = formData.propertyType === pt.value;
                                return (
                                  <button key={pt.value} type="button" onClick={() => updateField("propertyType", pt.value)} className={`flex flex-col items-center gap-2 p-5 rounded-2xl border-2 transition-all duration-200 ${isSelected ? "border-primary bg-primary/5 shadow-md" : "border-border hover:border-primary/30 hover:bg-muted/50"}`}>
                                    <Icon className={`w-6 h-6 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                                    <span className={`text-sm font-semibold ${isSelected ? "text-primary" : "text-nav"}`}>{pt.label}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* STEP 2 */}
                      {step === 2 && (
                        <div>
                          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-3 block">Étape 2</span>
                          <h2 className="text-2xl lg:text-3xl font-extrabold mb-2">Détails du projet</h2>
                          <p className="text-muted-foreground leading-relaxed mb-8">Précisez les caractéristiques de votre projet pour un devis plus précis.</p>

                          <div className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <Label htmlFor="surface">Surface approximative (m²)</Label>
                                <Input id="surface" name="surface" type="text" placeholder="Ex : 25 m²" value={formData.surface} onChange={handleInputChange} className="rounded-xl h-12" />
                              </div>
                              <div className="space-y-2">
                                <Label>Budget estimé</Label>
                                <Select value={formData.budget} onValueChange={(v) => updateField("budget", v)}>
                                  <SelectTrigger className="rounded-xl h-12"><SelectValue placeholder="Sélectionnez une fourchette" /></SelectTrigger>
                                  <SelectContent>{budgetRanges.map((b) => (<SelectItem key={b} value={b}>{b}</SelectItem>))}</SelectContent>
                                </Select>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label>Délai souhaité</Label>
                              <Select value={formData.timeline} onValueChange={(v) => updateField("timeline", v)}>
                                <SelectTrigger className="rounded-xl h-12"><SelectValue placeholder="Quand souhaitez-vous commencer ?" /></SelectTrigger>
                                <SelectContent>{timelineOptions.map((t) => (<SelectItem key={t} value={t}>{t}</SelectItem>))}</SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="description">Description du projet</Label>
                              <Textarea id="description" name="description" placeholder="Décrivez votre projet : état actuel, travaux souhaités, contraintes particulières, inspirations..." rows={5} value={formData.description} onChange={handleInputChange} className="rounded-xl resize-none" />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* STEP 3 */}
                      {step === 3 && (
                        <div>
                          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-3 block">Étape 3</span>
                          <h2 className="text-2xl lg:text-3xl font-extrabold mb-2">Vos coordonnées</h2>
                          <p className="text-muted-foreground leading-relaxed mb-8">Pour que nous puissions vous recontacter avec votre devis personnalisé.</p>

                          <div className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <Label htmlFor="name">Nom complet <span className="text-red-500">*</span></Label>
                                <Input id="name" name="name" placeholder="Jean Dupont" required value={formData.name} onChange={handleInputChange} className="rounded-xl h-12" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                                <Input id="email" name="email" type="email" placeholder="jean@exemple.fr" required value={formData.email} onChange={handleInputChange} className="rounded-xl h-12" />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <Label htmlFor="phone">Téléphone <span className="text-red-500">*</span></Label>
                                <Input id="phone" name="phone" type="tel" placeholder="06 12 34 56 78" required value={formData.phone} onChange={handleInputChange} className="rounded-xl h-12" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="city">Ville</Label>
                                <Input id="city" name="city" placeholder="Nancy" value={formData.city} onChange={handleInputChange} className="rounded-xl h-12" />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label>Comment nous avez-vous connu ?</Label>
                              <Select value={formData.referral} onValueChange={(v) => updateField("referral", v)}>
                                <SelectTrigger className="rounded-xl h-12"><SelectValue placeholder="Sélectionnez une option" /></SelectTrigger>
                                <SelectContent>{referralSources.map((r) => (<SelectItem key={r} value={r}>{r}</SelectItem>))}</SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* STEP 4 */}
                      {step === 4 && (
                        <div>
                          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-3 block">Étape 4</span>
                          <h2 className="text-2xl lg:text-3xl font-extrabold mb-2">Récapitulatif</h2>
                          <p className="text-muted-foreground leading-relaxed mb-8">Vérifiez les informations avant d&apos;envoyer votre demande.</p>

                          <div className="space-y-6">
                            <div className="bg-surface-container-low rounded-2xl p-6">
                              <h3 className="text-sm font-bold uppercase tracking-wider text-secondary mb-4">Votre projet</h3>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="text-muted-foreground block mb-0.5">Type de travaux</span>
                                  <span className="font-semibold text-nav">{selectedService?.title || "—"}</span>
                                </div>
                                <div>
                                  <span className="text-muted-foreground block mb-0.5">Type de bien</span>
                                  <span className="font-semibold text-nav">{selectedProperty?.label || "—"}</span>
                                </div>
                              </div>
                            </div>

                            <div className="bg-surface-container-low rounded-2xl p-6">
                              <h3 className="text-sm font-bold uppercase tracking-wider text-secondary mb-4">Détails</h3>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                                <div>
                                  <span className="text-muted-foreground block mb-0.5">Surface</span>
                                  <span className="font-semibold text-nav">{formData.surface || "Non précisé"}</span>
                                </div>
                                <div>
                                  <span className="text-muted-foreground block mb-0.5">Budget</span>
                                  <span className="font-semibold text-nav">{formData.budget || "Non précisé"}</span>
                                </div>
                                <div>
                                  <span className="text-muted-foreground block mb-0.5">Délai</span>
                                  <span className="font-semibold text-nav">{formData.timeline || "Non précisé"}</span>
                                </div>
                              </div>
                              {formData.description && (
                                <div className="mt-4 text-sm">
                                  <span className="text-muted-foreground block mb-0.5">Description</span>
                                  <p className="font-medium text-nav leading-relaxed">{formData.description}</p>
                                </div>
                              )}
                            </div>

                            <div className="bg-surface-container-low rounded-2xl p-6">
                              <h3 className="text-sm font-bold uppercase tracking-wider text-secondary mb-4">Coordonnées</h3>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="text-muted-foreground block mb-0.5">Nom</span>
                                  <span className="font-semibold text-nav">{formData.name}</span>
                                </div>
                                <div>
                                  <span className="text-muted-foreground block mb-0.5">Email</span>
                                  <span className="font-semibold text-nav">{formData.email}</span>
                                </div>
                                <div>
                                  <span className="text-muted-foreground block mb-0.5">Téléphone</span>
                                  <span className="font-semibold text-nav">{formData.phone}</span>
                                </div>
                                {formData.city && (
                                  <div>
                                    <span className="text-muted-foreground block mb-0.5">Ville</span>
                                    <span className="font-semibold text-nav">{formData.city}</span>
                                  </div>
                                )}
                              </div>
                            </div>

                            <p className="text-xs text-muted-foreground leading-relaxed">
                              En envoyant cette demande, vous acceptez d&apos;être recontacté par ATC Rénovation concernant votre projet. Vos données sont traitées de manière confidentielle et ne seront jamais partagées avec des tiers.
                            </p>
                          </div>
                        </div>
                      )}

                    </motion.div>
                  </AnimatePresence>

                  {/* ── Navigation Buttons ── */}
                  <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
                    {step > 1 ? (
                      <Button type="button" variant="outline" onClick={goPrev} className="btn-pill px-6 font-semibold">
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        Précédent
                      </Button>
                    ) : (
                      <div />
                    )}

                    {step < TOTAL_STEPS ? (
                      <Button type="button" onClick={goNext} disabled={!canProceed()} className="btn-pill bg-primary hover:bg-primary/90 text-white font-semibold px-8">
                        Suivant
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    ) : (
                      <Button type="button" onClick={handleSubmit} disabled={isSubmitting} className="btn-pill bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 h-12 text-base">
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Envoi en cours...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            Envoyer ma demande
                          </span>
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}

          </div>
        </section>
    </Layout>
  );
};

export default DevisPageClient;
