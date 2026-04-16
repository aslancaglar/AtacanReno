"use client";

import dynamic from "next/dynamic";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import AboutPreview from "@/components/home/AboutPreview";

const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"));
const RealisationsPreview = dynamic(() => import("@/components/home/RealisationsPreview"));
const TestimonialsSection = dynamic(() => import("@/components/home/TestimonialsSection"));
const CTASection = dynamic(() => import("@/components/home/CTASection"));
const PartnersSection = dynamic(() => import("@/components/home/PartnersSection"));

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
