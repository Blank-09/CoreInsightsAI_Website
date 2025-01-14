"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { AnimatedText } from "@/components/ui/animated-text";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="./hero-img.png"
          alt="Data Analytics Visualization"
          fill
          className="object-cover brightness-75"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-small-white/[0.2] z-[1]" />

      {/* Content */}
      <div className="container mx-auto relative z-10 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-[800px]"
        >
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter">
              <AnimatedText
                text="INSIGHTS"
                className="text-balance leading-[0.8]"
              />
              <AnimatedText
                text="THAT KEEP"
                className="text-balance leading-[0.8]"
                block
              />
              <AnimatedText
                text="YOU AHEAD OF THE CURVE"
                className="text-balance leading-[0.8] bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/50"
                block
              />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl sm:text-2xl text-muted-foreground max-w-[600px]"
            >
              Empowering your business with data-driven solutions. Transform
              your data into actionable insights.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-12"
          >
            <Button
              size="lg"
              className="gap-2 bg-primary hover:bg-primary/90 text-lg h-14 px-8"
            >
              Get Started
              <ChevronRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group text-lg h-14 px-8"
            >
              Learn More
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
