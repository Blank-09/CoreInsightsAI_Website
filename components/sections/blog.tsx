"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    id: 1,
    title: "The Future of AI in Business Analytics",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing business decision-making processes.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1024",
    category: "Artificial Intelligence",
    readTime: "5 min read",
    date: "Mar 15, 2024",
  },
  {
    id: 2,
    title: "Mastering Data Visualization",
    excerpt:
      "Best practices for creating impactful data visualizations that tell compelling stories.",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1024",
    category: "Data Visualization",
    readTime: "4 min read",
    date: "Mar 12, 2024",
  },
  {
    id: 3,
    title: "Machine Learning in Practice",
    excerpt:
      "Real-world applications of machine learning models in business environments.",
    image:
      "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=1024",
    category: "Machine Learning",
    readTime: "6 min read",
    date: "Mar 10, 2024",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-background">
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
              LATEST
              <span className="block">INSIGHTS</span>
            </h2>
            <p className="text-2xl text-muted-foreground">
              Stay updated with our latest thoughts and discoveries
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-background"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <span className="text-sm text-primary">
                      {blog.category}
                    </span>
                    <h3 className="text-2xl font-bold">{blog.title}</h3>
                    <p className="text-muted-foreground">{blog.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      {blog.date} · {blog.readTime}
                    </div>
                    <Button variant="ghost" size="sm" className="gap-2">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
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
