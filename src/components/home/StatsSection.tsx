"use client";

import { Calendar, Home, Star, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

const StatItem = ({
  stat,
  index,
}: {
  stat: { icon: typeof Calendar; value: string | number; suffix: string; label: string };
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="flex flex-col items-center text-center px-4"
    >
      <stat.icon className="w-5 h-5 text-secondary mb-1" />
      <span className="text-2xl lg:text-3xl font-extrabold text-white leading-none">
        {stat.value}
        <span className="text-secondary">{stat.suffix}</span>
      </span>
      <span className="text-white/60 text-[11px] font-semibold uppercase tracking-widest mt-1">
        {stat.label}
      </span>
    </motion.div>
  );
};

const StatsSection = () => {
  const devisStats = useQuery(api.devis.getStats);

  // Use live data for "Projets terminés" if available
  const completedProjects = devisStats?.termine ?? 300;

  const stats = [
    { icon: Calendar, value: 10, suffix: "+", label: "Années d'expérience" },
    { icon: Home, value: completedProjects, suffix: "+", label: "Projets terminés" },
    { icon: Star, value: "4.9/5", suffix: "", label: "Note moyenne sur Google" },
    { icon: Clock, value: "100%", suffix: "", label: "Délais respectés" },
  ];

  return (
    <section className="relative -mt-10 z-10 pb-2">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-primary rounded-2xl shadow-2xl px-6 py-5 lg:py-6 lg:px-10"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x lg:divide-white/20">
            {stats.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
