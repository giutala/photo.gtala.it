"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import SkillCard from "./SkillCard";

const skills = [
  {
    title: "Portrait Photography",
    description: "Capturing personalities and emotions in stunning portraits",
    icon: "camera",
  },
  {
    title: "Photo Editing",
    description: "Professional retouching and color grading",
    icon: "image",
  },
  {
    title: "Videography",
    description: "Creating compelling visual stories through video",
    icon: "video",
  },
  {
    title: "Technical Expertise",
    description: "Mastery of professional camera equipment and lighting",
    icon: "settings",
  },
  {
    title: "Client Relations",
    description: "Building lasting relationships with clients",
    icon: "users",
  },
  {
    title: "Creative Direction",
    description: "Innovative concepts and artistic vision",
    icon: "lightbulb",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="What I bring to every project"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              description={skill.description}
              icon={skill.icon as any}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}