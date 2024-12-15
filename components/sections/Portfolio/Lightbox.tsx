"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { portfolioImages } from "@/lib/portfolio-data";

interface LightboxProps {
  initialIndex: number;
  onClose: () => void;
}

export function Lightbox({ initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, onClose]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? portfolioImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === portfolioImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        
        <button
          className="absolute left-4 text-white hover:text-white/80 transition-colors"
          onClick={handlePrevious}
        >
          <ChevronLeft size={24} />
        </button>

        <motion.img
          key={currentIndex}
          src={portfolioImages[currentIndex].url}
          alt={portfolioImages[currentIndex].title}
          className="max-h-[90vh] max-w-[90vw] object-contain"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        />

        <button
          className="absolute right-4 text-white hover:text-white/80 transition-colors"
          onClick={handleNext}
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-4 left-0 right-0 text-center text-white">
          <h3 className="text-xl font-semibold mb-2">
            {portfolioImages[currentIndex].title}
          </h3>
          <p className="text-white/80">
            {portfolioImages[currentIndex].category}
          </p>
        </div>
      </div>
    </motion.div>
  );
}