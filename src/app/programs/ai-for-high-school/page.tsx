'use client';
import { PrestigiousPrograms } from "@/components/layout/Home/Programs";
import { WhatParentSays } from "@/components/layout/Home/WhatParentSays";
import Layout from "@/components/layout/Layout";
import { AIProgram } from "@/components/layout/Program/AIProgram";
import { AIProgramHero } from "@/components/layout/Program/AIProgramHero";
import { OurStudents } from "@/components/layout/Students/OurStudents";

const aiProgramImage = "https://res.cloudinary.com/seunsanyaa/image/upload/v1766824096/or6XD584AhJWFCfXx1bfHMhY2qw.png_3_oczn3k.png";

export default function AiForHighSchool() {
  return (
    <Layout>
          <div className="flex flex-col gap-10">

      <AIProgramHero 
        title="AI Program for High School Students" 
        description="Over the course of 12 to 15 weeks, each high school student receives one-on-one mentorship with a professional engineer to develop an AI project in an area they care about. They focus on computer vision, natural language processing, or machine learning, then work with personalized guidance to design and build a meaningful solution from start to finish."
        prerequisites="This program is designed for students with Python programming experience. If you've completed our Intermediate Program or have equivalent coding background, you're ready."
        image={aiProgramImage}
        onApply={() => console.log("Apply for AI Program")}
      />

      <AIProgram />

      <PrestigiousPrograms/>
      <OurStudents/>
      <WhatParentSays/>
      </div>
    </Layout>
  );
}