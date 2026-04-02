"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description: string;
}

export function SectionHeading({ subtitle, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-14"
    >
      <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
        {subtitle}
      </span>
      <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-nav leading-tight">
        {title}
      </h2>
      <p className="text-muted-foreground max-w-2xl leading-relaxed text-[15px]">
        {description}
      </p>
    </motion.div>
  );
}
