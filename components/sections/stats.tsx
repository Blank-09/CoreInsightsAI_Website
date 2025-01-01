"use client";

import { motion } from "framer-motion";
import { Award, Users, Building, Globe } from "lucide-react";

const stats = [
  {
    id: "01",
    label: "Years Experience",
    value: "7+",
    icon: Award,
    description: "Delivering data-driven solutions",
  },
  {
    id: "02",
    label: "Qualified Experts",
    value: "5+",
    icon: Users,
    description: "Industry leading professionals",
  },
  {
    id: "03",
    label: "Happy Clients",
    value: "5+",
    icon: Building,
    description: "Across various industries",
  },
  {
    id: "04",
    label: "International Partners",
    value: "2+",
    icon: Globe,
    description: "Global reach and expertise",
  },
];

export function StatsSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-primary-foreground/10 p-8"
            >
              <div className="space-y-4">
                <span className="text-xl font-light opacity-60">
                  [{stat.id}]
                </span>
                <stat.icon className="h-8 w-8" />
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold">{stat.value}</h3>
                  <p className="text-xl font-semibold">{stat.label}</p>
                  <p className="text-sm opacity-80">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
