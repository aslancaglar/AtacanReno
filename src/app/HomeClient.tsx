"use client";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesSection from "@/components/home/ServicesSection";
import RealisationsPreview from "@/components/home/RealisationsPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PartnersSection from "@/components/home/PartnersSection";
import CTASection from "@/components/home/CTASection";

const HomeClient = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <Layout>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <ServicesSection />
      <RealisationsPreview />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
    </Layout>
  </TooltipProvider>
);

export default HomeClient;
