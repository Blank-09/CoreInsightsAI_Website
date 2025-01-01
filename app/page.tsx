import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { IndustriesSection } from "@/components/sections/industries";
import { StatsSection } from "@/components/sections/stats";
import { AboutSection } from "@/components/sections/about";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";
import { BlogSection } from "@/components/sections/blog";
import { UseCasesSection } from "@/components/sections/use-cases";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <UseCasesSection />
      <StatsSection />
      <AboutSection />
      <BlogSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}