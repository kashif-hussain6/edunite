import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import SchoolModules from "@/components/sections/SchoolModules";
import Testimonials from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <SchoolModules />
      <Pricing />
      <Testimonials />
    </main>
  );
}


