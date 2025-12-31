'use client';
import Layout from "@/components/layout/Layout";
import { PrestigiousPrograms } from "@/components/layout/Home/Programs";
import { WhatParentSays } from "@/components/layout/Home/WhatParentSays";
import { IntermediatePrograms } from "@/components/layout/Program/IntermediatePrograms";
import { ProgramHero } from "@/components/layout/Program/ProgramHero";
import { OurStudents } from "@/components/layout/Students/OurStudents";

const intermediateImage = "https://res.cloudinary.com/seunsanyaa/image/upload/v1766823256/or6XD584AhJWFCfXx1bfHMhY2qw.png_1_jd4i7h.png";

export default function IntermediatePage() {
  return (
    <Layout>
      <div className="flex flex-col gap-10">


      <ProgramHero 
        title="Intermediate Program" 
        description="Building on the foundation skills, students choose a specialization in Web Development, Software & AI, or Game Development. Over 7-9 months of personalized 1-on-1 instruction with a professional engineer, students will build hands-on projects and go deeper in their chosen area." 
        image={intermediateImage} 
        onBookTrial={() => console.log("Book trial for Intermediate")} 
        onSignUp={() => console.log("Sign up for Intermediate")} 
      />

      <IntermediatePrograms />

      <PrestigiousPrograms/>
      <OurStudents/>
      <WhatParentSays/>
      </div>
    </Layout>
  );
}

