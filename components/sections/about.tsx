"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter">
                WHO
                <span className="block">WE ARE</span>
              </h2>
              <p className="text-2xl text-muted-foreground">
                Transforming data into actionable insights for businesses
                worldwide
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                At CoreInsightsAI, we believe in the power of data to transform
                businesses and drive innovation. Our team of experts combines
                deep industry knowledge with cutting-edge technology to deliver
                solutions that matter.
              </p>
              <p>
                We're committed to helping organizations navigate the
                complexities of data analytics and artificial intelligence,
                making advanced technology accessible and actionable for
                businesses of all sizes.
              </p>
            </div>
            <Button size="lg" className="gap-2">
              Learn More About Us
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Reduced size by wrapping in a div with w-[70%] (30% reduction) */}
            <div className="mx-auto w-[80%] aspect-square overflow-hidden rounded-2xl bg-secondary">
              <div className="relative h-full">
                <Image
                  src="./team-collaboration.png"
                  alt="Data Stewards"
                  fill
                  className="object-cover"
                />
                {/* Removed gradient overlay and text overlay */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
