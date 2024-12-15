"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MessageSquare, User } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Contact"
          subtitle="Get in touch"
        />

        <div className="max-w-2xl mx-auto mt-12">
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  {...register("name")}
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background hover:border-ring focus:border-ring focus:ring-1 focus:ring-ring transition-colors"
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Your Email"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background hover:border-ring focus:border-ring focus:ring-1 focus:ring-ring transition-colors"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-muted-foreground" size={20} />
                <textarea
                  {...register("message")}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background hover:border-ring focus:border-ring focus:ring-1 focus:ring-ring transition-colors"
                />
              </div>
              {errors.message && (
                <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              className="w-full py-3 px-6 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
              disabled={isSubmitting}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}