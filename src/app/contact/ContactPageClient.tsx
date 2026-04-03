"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  FileText,
  HardHat,
  CalendarCheck,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const getContactInfo = (companyDetails: any) => [
  {
    icon: MapPin,
    label: "Adresse",
    value: companyDetails?.address || "371 Avenue des Champs Elysées\nNancy, 54000",
    href: companyDetails?.address ? `https://maps.google.com/?q=${encodeURIComponent(companyDetails.address)}` : "https://maps.google.com/?q=371+Avenue+des+Champs+Elysées+Nancy+54000",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: companyDetails?.phone || "+33 1 24 63 67 89",
    href: companyDetails?.phone ? `tel:${companyDetails.phone.replace(/\s+/g, '')}` : "tel:+33124636789",
  },
  {
    icon: Mail,
    label: "Email",
    value: companyDetails?.email || "contact@atacan-renovation.fr",
    href: companyDetails?.email ? `mailto:${companyDetails.email}` : "mailto:contact@atacan-renovation.fr",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun – Ven : 8h00 – 18h00\nSam : 9h00 – 13h00", // Hardcoded for now unless added to DB mapped settings
    href: undefined,
  },
];

const processSteps = [
  {
    icon: MessageSquare,
    title: "Prise de contact",
    description: "Appelez-nous ou envoyez-nous un email. Nous vous répondons sous 24h.",
  },
  {
    icon: CalendarCheck,
    title: "Visite sur site",
    description: "Un technicien se déplace gratuitement pour évaluer votre projet.",
  },
  {
    icon: FileText,
    title: "Devis détaillé",
    description: "Recevez un devis transparent et complet sous 48h, sans engagement.",
  },
  {
    icon: HardHat,
    title: "Début des travaux",
    description: "Nos artisans qualifiés réalisent vos travaux dans les délais convenus.",
  },
];

const faqs = [
  {
    question: "Le devis est-il gratuit ?",
    answer:
      "Oui, le devis est entièrement gratuit et sans engagement. Nous nous déplaçons chez vous pour évaluer votre projet et vous remettons un devis détaillé sous 48h.",
  },
  {
    question: "Quelle est votre zone d'intervention ?",
    answer:
      "Nous intervenons à Nancy et dans toute la métropole du Grand Nancy : Vandoeuvre-lès-Nancy, Laxou, Villers-lès-Nancy, Essey-lès-Nancy, Maxéville, et les communes environnantes dans un rayon de 30 km.",
  },
  {
    question: "Quels sont vos délais d'intervention ?",
    answer:
      "Les délais varient selon l'ampleur du projet. Pour une salle de bains, comptez 2 à 3 semaines. Pour une rénovation complète d'appartement, 6 à 10 semaines. Nous vous communiquons un planning précis dès le devis.",
  },
  {
    question: "Êtes-vous certifié RGE ?",
    answer:
      "Oui, nous sommes certifiés RGE (Reconnu Garant de l'Environnement) et Qualibat. Cela vous permet de bénéficier des aides de l'État comme MaPrimeRénov' pour vos travaux d'isolation.",
  },
  {
    question: "Proposez-vous un accompagnement pour les aides financières ?",
    answer:
      "Absolument. Nous vous accompagnons dans le montage de vos dossiers MaPrimeRénov', CEE et autres aides disponibles. Nous vous indiquons les montants auxquels vous pouvez prétendre dès le devis.",
  },
  {
    question: "Quelles garanties offrez-vous ?",
    answer:
      "Tous nos travaux sont couverts par la garantie décennale et l'assurance responsabilité civile professionnelle. Vous bénéficiez également d'une garantie de parfait achèvement d'un an.",
  },
];

const ContactPageClient = () => {
  const companyInfoFromDb = useQuery(api.companyInfo.get);
  const contactInfo = getContactInfo(companyInfoFromDb);

  return (
    <Layout>
        {/* ─── Hero ─── */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero-bg-3.jpg"
              alt="Contact ATC Rénovation"
              className="w-full h-full object-cover"
              width={1920}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/30" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Contact" }]} />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-4"
            >
              Contactez-nous
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-lg text-white/80 max-w-2xl leading-relaxed"
            >
              Parlons de votre projet de rénovation. Devis gratuit sous 48h,
              sans engagement.
            </motion.p>
          </div>
        </section>

        {/* ─── Contact Info + Map ─── */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-14"
            >
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
                Coordonnées
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Nos informations de contact
              </h2>
              <p className="text-muted-foreground max-w-2xl leading-relaxed">
                N&apos;hésitez pas à nous contacter par téléphone ou par email.
                Nous vous répondons sous 24h.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* ── Info Cards ── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon;
                  const content = (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.08,
                        ease: "easeOut",
                      }}
                      className="flex items-start gap-4 p-6 bg-card rounded-2xl hover:shadow-[0px_20px_40px_rgba(52,48,38,0.06)] transition-shadow duration-300 h-full"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-secondary uppercase tracking-wider block mb-1">
                          {item.label}
                        </span>
                        <span className="text-sm text-nav font-medium whitespace-pre-line leading-relaxed">
                          {item.value}
                        </span>
                      </div>
                    </motion.div>
                  );

                  return item.href ? (
                    <a
                      key={i}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={i}>{content}</div>
                  );
                })}
              </div>

              {/* ── Map ── */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                className="rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[400px] bg-surface-container-low"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.5!2d6.1834!3d48.6921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDQxJzMxLjYiTiA2wrAxMScwMC4yIkU!5e0!3m2!1sfr!2sfr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ATC Rénovation — Nancy"
                  className="w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Process Steps ─── */}
        <section className="py-20 lg:py-28 bg-surface-container-low">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-14"
            >
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
                Comment ça marche
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                De votre demande à la réalisation
              </h2>
              <p className="text-muted-foreground max-w-2xl leading-relaxed">
                Un processus simple et transparent pour concrétiser votre projet
                de rénovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.1,
                      ease: "easeOut",
                    }}
                    className="relative bg-card rounded-2xl p-6 hover:shadow-[0px_20px_40px_rgba(52,48,38,0.06)] transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-4xl font-extrabold text-primary/10">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
                  FAQ
                </span>
                <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                  Questions fréquentes
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Retrouvez les réponses aux questions les plus courantes sur
                  nos services et notre fonctionnement.
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Besoin d&apos;une réponse rapide ?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Appelez-nous directement, notre équipe est disponible du
                    lundi au vendredi de 8h à 18h.
                  </p>
                  <a
                    href={companyInfoFromDb?.phone ? `tel:${companyInfoFromDb.phone.replace(/\s+/g, '')}` : "tel:+33124636789"}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    {companyInfoFromDb?.phone || "+33 1 24 63 67 89"}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              >
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="bg-card rounded-2xl border-none px-6 shadow-sm"
                    >
                      <AccordionTrigger className="text-left font-bold hover:no-underline py-5 text-nav">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="bg-primary py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
                Prêt à transformer votre intérieur ?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
                Obtenez un devis gratuit et personnalisé sous 48h. Sans
                engagement, sans surprise.
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              >
                <a href={companyInfoFromDb?.phone ? `tel:${companyInfoFromDb.phone.replace(/\s+/g, '')}` : "tel:+33124636789"}>
                  <Button className="btn-pill bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-10 h-14 text-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Appelez-nous maintenant
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
    </Layout>
  );
};

export default ContactPageClient;
