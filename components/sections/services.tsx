"use client";

import { motion } from "framer-motion";
import { BarChart3, Brain, LineChart } from "lucide-react";
import { AnimatedText, ParallaxText } from "@/components/ui/animated-text";

const services = [
  {
    id: "01",
    title: "Advanced Analytics",
    description: "Interactive dashboards and real-time KPI tracking systems",
    icon: BarChart3,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: "02",
    title: "Machine Learning",
    description: "Predictive analytics and statistical modeling solutions",
    icon: Brain,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: "03",
    title: "Data Visualization",
    description: "Transform complex data into clear, actionable insights",
    icon: LineChart,
    gradient: "from-blue-500 to-cyan-500",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-small-white/[0.2] -z-[1]" />
      <div className="container mx-auto">
        <ParallaxText className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter">
              <AnimatedText text="WHAT WE'RE" className="text-balance" />
              <AnimatedText text="GOOD AT" className="text-balance" block />
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl glass-card p-8"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                />
                <div className="relative space-y-4">
                  <div className="space-x-2">
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 0.6, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="text-2xl font-light"
                    >
                      [{service.id}]
                    </motion.span>
                    <div
                      className={`inline-flex rounded-lg bg-gradient-to-br ${service.gradient} p-3`}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl font-bold"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-muted-foreground "
                  >
                    {service.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </ParallaxText>
      </div>
    </section>
  );
}
