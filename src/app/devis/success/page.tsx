"use client";

import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

export default function DevisSuccessPage() {
  return (
    <Layout hideHeader hideFooter hideWhatsApp>
      <section className="py-24 lg:py-40 bg-surface-container-low min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-card rounded-3xl shadow-xl p-10 lg:p-16 text-center border border-border/50"
          >
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-extrabold mb-4">Demande reçue !</h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto mb-10">
              Merci pour votre demande de devis. Notre équipe l'étudie avec attention et vous recontactera sous 24 à 48h avec une proposition personnalisée et adaptée à vos besoins.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/">
                <Button className="btn-pill px-10 h-14 text-base font-bold bg-primary hover:bg-primary/90 text-white min-w-[200px]">
                  Retour à l'accueil
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="btn-pill px-10 h-14 text-base font-semibold min-w-[200px]">
                  Découvrir nos services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
