"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  icon?: LucideIcon;
  className?: string;
  children?: React.ReactNode;
}

const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "left",
  icon: Icon,
  className = "",
  children,
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-14 ${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      {Icon && (
        <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 ${align === "center" ? "mx-auto" : ""}`}>
          <Icon className="w-6 h-6 text-primary" />
        </div>
      )}
      <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
        {eyebrow}
      </span>
      <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className={`text-muted-foreground leading-relaxed ${align === "center" ? "mx-auto" : ""} max-w-2xl lg:max-w-none`}>
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
};

export default SectionHeader;
