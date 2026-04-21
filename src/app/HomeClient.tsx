"use client";

import dynamic from "next/dynamic";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";


// Below-the-fold sections — lazy loaded with lightweight loading skeletons
const SectionSkeleton = () => (
  <div className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="h-8 w-64 bg-muted rounded-lg mb-4 animate-pulse" />
      <div className="h-4 w-96 bg-muted rounded mb-12 animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-72 bg-muted rounded-2xl animate-pulse" />
        ))}
      </div>
    </div>
  </div>
);

const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"), {
  loading: () => <SectionSkeleton />,
});
const AboutPreview = dynamic(() => import("@/components/home/AboutPreview"), {
  loading: () => <SectionSkeleton />,
});
const RealisationsPreview = dynamic(() => import("@/components/home/RealisationsPreview"), {
  loading: () => <SectionSkeleton />,
});
const TestimonialsSection = dynamic(() => import("@/components/home/TestimonialsSection"), {
  loading: () => <SectionSkeleton />,
});
const CTASection = dynamic(() => import("@/components/home/CTASection"), {
  loading: () => (
    <div className="bg-primary py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <div className="h-10 w-80 bg-white/10 rounded-lg mx-auto mb-4 animate-pulse" />
        <div className="h-4 w-96 bg-white/10 rounded mx-auto mb-8 animate-pulse" />
        <div className="h-12 w-48 bg-white/10 rounded-full mx-auto animate-pulse" />
      </div>
    </div>
  ),
});
const PartnersSection = dynamic(() => import("@/components/home/PartnersSection"), {
  loading: () => (
    <div className="py-10 lg:py-14">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="h-8 w-48 bg-muted rounded-lg mb-12 animate-pulse" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-24 bg-muted rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  ),
});

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
