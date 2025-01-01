"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    id: "financial",
    label: "Financial Services",
    title: "Predictive Analytics in Banking",
    description:
      "How a leading bank leveraged our AI solutions to reduce fraud by 60% and improve customer satisfaction.",
    metrics: [
      { label: "Fraud Reduction", value: "60%" },
      { label: "Cost Savings", value: "$2M+" },
      { label: "Processing Time", value: "-45%" },
    ],
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1024",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    title: "Patient Care Optimization",
    description:
      "Implementing machine learning models to improve patient diagnosis accuracy and treatment recommendations.",
    metrics: [
      { label: "Diagnosis Accuracy", value: "+35%" },
      { label: "Patient Satisfaction", value: "92%" },
      { label: "Time Saved", value: "4hrs/day" },
    ],
    image:
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1024",
  },
  {
    id: "retail",
    label: "Retail",
    title: "Inventory Management Revolution",
    description:
      "Smart inventory prediction system that reduced stockouts by 40% and improved supply chain efficiency.",
    metrics: [
      { label: "Stock Accuracy", value: "98%" },
      { label: "Revenue Increase", value: "25%" },
      { label: "Waste Reduction", value: "30%" },
    ],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1024",
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-24 bg-secondary/30">
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
              SUCCESS
              <span className="block">STORIES</span>
            </h2>
            <p className="text-2xl text-muted-foreground">
              Real results from real clients
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl glass-card"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-sm font-medium text-primary">
                      {useCase.label}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {useCase.metrics.map((metric, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="text-2xl font-bold text-primary">
                          {metric.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button size="lg" className="gap-2">
              View All Case Studies
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
