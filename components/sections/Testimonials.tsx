"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { testimonials } from "@/lib/testimonials-data";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Testimonials"
          subtitle="What clients are saying"
        />

        <div className="relative max-w-4xl mx-auto mt-12">
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-background rounded-full shadow-lg hover:bg-muted transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="overflow-hidden px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-lg p-8 shadow-lg"
              >
                <Quote className="text-primary mb-6" size={48} />
                <p className="text-lg mb-6 text-card-foreground">
                  {testimonials[currentIndex].quote}
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-background rounded-full shadow-lg hover:bg-muted transition-colors z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}