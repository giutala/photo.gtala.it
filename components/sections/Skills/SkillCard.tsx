"use client";

import { motion } from "framer-motion";
import { Camera, Image, Video, Settings, Users, Lightbulb } from "lucide-react";

const icons = {
  camera: Camera,
  image: Image,
  video: Video,
  settings: Settings,
  users: Users,
  lightbulb: Lightbulb,
};

interface SkillCardProps {
  title: string;
  description: string;
  icon: keyof typeof icons;
  index: number;
}

export default function SkillCard({ title, description, icon, index }: SkillCardProps) {
  const Icon = icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-card p-6 rounded-lg shadow-lg"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.2 + index * 0.1 }}
        viewport={{ once: true }}
        className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4"
      >
        <Icon className="w-6 h-6 text-primary" />
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}