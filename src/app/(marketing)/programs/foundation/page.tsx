'use client';
import { PrestigiousPrograms } from "@/components/layout/Home/Programs";
import { WhatParentSays } from "@/components/layout/Home/WhatParentSays";
import Layout from "@/components/layout/Layout";
import { Curriculum } from "@/components/layout/Program/Curriculum";
import { ProgramHero } from "@/components/layout/Program/ProgramHero";
import { OurStudents } from "@/components/layout/Students/OurStudents";

const foundationImage = "https://res.cloudinary.com/seunsanyaa/image/upload/v1766823281/or6XD584AhJWFCfXx1bfHMhY2qw.png_xzuzpv.png";

export default function FoundationPage() {
  return (
    <Layout>
    <div className="flex flex-col gap-10">
      <ProgramHero title="Foundation Program" description="Over 7-9 months of personalized 1-on-1 instruction with a professional engineer, students will learn the fundamentals of coding and explore three different areas of technology: animation and games, logic and problem-solving, and Python programming. Once students complete Foundation, they choose the path that interests them most: Web Development, Software & AI, 
or Game Development and spend the following months building hands-on projects and going deeper in that area. " image={foundationImage} onBookTrial={() => console.log("Book trial for Foundation")} onSignUp={() => console.log("Sign up for Foundation")} />

      <Curriculum />

      <PrestigiousPrograms/>
      <OurStudents/>
      <WhatParentSays/>
      </div>
    </Layout>
  );
}