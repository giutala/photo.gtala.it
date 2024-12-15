"use client";

import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import { portfolioImages } from "@/lib/portfolio-data";

interface ImageGridProps {
  onImageClick: (index: number) => void;
}

export function ImageGrid({ onImageClick }: ImageGridProps) {
  const breakpointColumns = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="flex -ml-4 w-auto"
      columnClassName="pl-4 bg-clip-padding"
    >
      {portfolioImages.map((image, index) => (
        <motion.div
          key={image.id}
          className="mb-4 relative group cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onClick={() => onImageClick(index)}
        >
          <div className="relative overflow-hidden">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                <p className="text-sm text-white/80">{image.category}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </Masonry>
  );
}