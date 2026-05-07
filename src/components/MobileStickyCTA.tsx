"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const MobileStickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 left-0 right-0 z-[60] flex justify-center px-4 xl:hidden"
        >
          <Link
            href="/devis"
            className="inline-flex items-center justify-center bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base font-bold rounded-full px-10 py-4 transition-all shadow-2xl active:scale-95 border border-white/20 backdrop-blur-sm"
          >
            Demander un devis
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileStickyCTA;
