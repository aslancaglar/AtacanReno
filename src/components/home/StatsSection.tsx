"use client";

import { Calendar, Home, Star, Clock } from "lucide-react";

const StatItem = ({
  stat,
  index,
}: {
  stat: { icon: typeof Calendar; value: string | number; suffix: string; label: string };
  index: number;
}) => {
  return (
    <div
      className="hero-fade-in flex flex-col items-center text-center px-4"
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <stat.icon className="w-5 h-5 text-secondary mb-1" />
      <span className="text-2xl lg:text-3xl font-extrabold text-white leading-none">
        {stat.value}
        <span className="text-secondary">{stat.suffix}</span>
      </span>
      <span className="text-white/60 text-[11px] font-semibold uppercase tracking-widest mt-1">
        {stat.label}
      </span>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { icon: Calendar, value: 20, suffix: "+", label: "Années d'expérience" },
    { icon: Home, value: 300, suffix: "+", label: "Projets terminés" },
    { icon: Star, value: "4.9/5", suffix: "", label: "Note moyenne sur Google" },
    { icon: Clock, value: "100%", suffix: "", label: "Délais respectés" },
  ];

  return (
    <section className="relative lg:-mt-10 -mt-6 z-10 pb-2">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className="hero-fade-in bg-primary rounded-2xl shadow-2xl px-6 py-4 lg:py-6 lg:px-10"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x lg:divide-white/20">
            {stats.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
