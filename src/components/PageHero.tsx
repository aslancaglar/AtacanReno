"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Breadcrumb from "./Breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  backgroundImage: string;
  breadcrumbItems: BreadcrumbItem[];
  children?: React.ReactNode;
  className?: string;
  imagePosition?: string;
}

const PageHero = ({
  eyebrow,
  title,
  description,
  backgroundImage,
  breadcrumbItems,
  children,
  className = "",
  imagePosition = "object-center",
}: PageHeroProps) => {
  return (
    <section className={`relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className={`object-cover ${imagePosition}`}
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          <Breadcrumb items={breadcrumbItems} className="mb-8" />
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block"
            >
              {eyebrow}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-white"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-white/80 text-lg leading-relaxed max-w-lg"
            >
              {description}
            </motion.p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
