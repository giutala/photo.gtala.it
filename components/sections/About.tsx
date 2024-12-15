"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Camera } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="About Me"
          subtitle="The story behind the lens"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80"
                alt="Photographer"
                className="rounded-lg shadow-xl"
              />
              <motion.div
                className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Camera size={32} />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Capturing Life's Beautiful Moments
            </h3>
            <p className="text-muted-foreground mb-6">
              With over a decade of experience in photography, I've developed a
              passion for capturing the essence of life's most precious moments.
              My journey began with a simple point-and-shoot camera and has
              evolved into a professional career that allows me to tell stories
              through my lens.
            </p>
            <p className="text-muted-foreground mb-8">
              I specialize in portrait, landscape, and event photography, bringing
              a unique perspective to each shot. My work has been featured in
              various publications and exhibitions around the world.
            </p>

            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="p-3 bg-background rounded-full hover:bg-muted transition-colors"
                whileHover={{ y: -2 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="p-3 bg-background rounded-full hover:bg-muted transition-colors"
                whileHover={{ y: -2 }}
              >
                <Facebook size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}