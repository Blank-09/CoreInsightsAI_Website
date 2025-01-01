"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  block?: boolean;
}

export function AnimatedText({ text, className = "", block = false }: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0, x: -100 },
    visible: (i = 1) => ({
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.08,
        delayChildren: 0.02 * i 
      },
    }),
  };

  const child = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`${className} ${block ? "block" : "inline-block"}`}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-3"
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

export function ParallaxText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}