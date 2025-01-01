"use client";

import { motion } from "framer-motion";
import { Building2, Factory, ShoppingBag, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

const industries = [
  {
    id: "01",
    title: "Finance",
    description: "Investment analytics and risk assessment solutions",
    icon: Building2,
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    id: "02",
    title: "Manufacturing",
    description: "Predictive maintenance and supply chain optimization",
    icon: Factory,
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    id: "03",
    title: "Retail",
    description: "Customer behavior analysis and inventory management",
    icon: ShoppingBag,
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    id: "04",
    title: "Logistics",
    description: "Route optimization and traffic pattern prediction",
    icon: Truck,
    className: "md:col-span-2 lg:col-span-1",
  },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-secondary/30">
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
              INDUSTRIES
              <span className="block">WE SERVE</span>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl bg-background p-8",
                  industry.className
                )}
              >
                <div className="relative space-y-4">
                  <div className="space-x-2">
                    <span className="text-2xl font-light">[{industry.id}]</span>
                    <div className="inline-flex rounded-lg bg-primary p-3">
                      <industry.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">{industry.title}</h3>
                  <p className="text-muted-foreground">
                    {industry.description}
                  </p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-colors rounded-2xl" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
