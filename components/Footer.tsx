"use client";

import { motion } from "framer-motion";
import { ArrowUp, Instagram, Facebook, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.button
            onClick={scrollToTop}
            className="mb-8 p-3 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            whileHover={{ y: -2 }}
          >
            <ArrowUp size={24} />
          </motion.button>

          <div className="flex space-x-6 mb-8">
            {[
              { icon: Instagram, href: "#" },
              { icon: Facebook, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Mail, href: "#" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="p-3 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                whileHover={{ y: -2 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Your Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}