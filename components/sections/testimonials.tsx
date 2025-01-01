"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: "01",
    quote:
      "CoreInsightsAI transformed our data analytics capabilities, leading to a 40% increase in operational efficiency.",
    author: "Sarah Chen",
    position: "CTO, TechCorp Global",
    industry: "Technology",
  },
  {
    id: "02",
    quote:
      "Their predictive maintenance solution helped us reduce downtime by 60% and save millions in operational costs.",
    author: "Michael Rodriguez",
    position: "Operations Director, ManufacturePro",
    industry: "Manufacturing",
  },
  {
    id: "03",
    quote:
      "The customer behavior analysis provided invaluable insights that drove our retail strategy to new heights.",
    author: "Emily Thompson",
    position: "Head of Analytics, RetailMax",
    industry: "Retail",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter">
              CLIENT
              <span className="block">SUCCESS</span>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-background p-8"
              >
                <div className="space-y-4">
                  <Quote className="h-8 w-8 text-primary" />
                  <p className="text-lg">{testimonial.quote}</p>
                  <div className="space-y-1">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-primary">
                      {testimonial.industry}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
