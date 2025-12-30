'use client';
import { AboutHero } from "@/components/layout/About/AboutHero";
import { TeamGrid } from "@/components/layout/About/TeamGrid";
import { Footer } from "@/components/layout/Footer/Footer";
import { Nav } from "@/components/nav";

export default function About() {
  return (
    <div className="min-h-screen   ">
      <Nav />
      <AboutHero />
      <TeamGrid />
      <Footer />
    </div>
  );
}