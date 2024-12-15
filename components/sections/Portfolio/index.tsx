"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import { ImageGrid } from "./ImageGrid";
import { Lightbox } from "./Lightbox";
import { SectionTitle } from "@/components/ui/section-title";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Portfolio"
          subtitle="Explore my latest work"
        />
        
        <ImageGrid onImageClick={setSelectedImage} />
        
        {selectedImage !== null && (
          <Lightbox
            initialIndex={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </section>
  );
}