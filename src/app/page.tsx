import { AcceleratorPrograms } from "@/components/layout/Home/AcceleratorPrograms";
import { Hero } from "@/components/layout/Home/Hero";
import { OurPrograms } from "@/components/layout/Home/OurPrograms";
import { PrestigiousPrograms } from "@/components/layout/Home/Programs";
import { Started } from "@/components/layout/Home/Started";
import { WhatParentSays } from "@/components/layout/Home/WhatParentSays";
import Layout from "@/components/layout/Layout";
import { OurStudents } from "@/components/layout/Students/OurStudents";
import { SuccessStories } from "@/components/layout/Students/SuccessStories";
import { Preview } from "@/components/layout/video/Preview";

export default function Home() {
  return (
    <Layout>
      <Hero />

      <div className="flex flex-col gap-10">


      <Started />
      <PrestigiousPrograms/>
      <OurPrograms/>
      <AcceleratorPrograms/>
      <OurStudents/>
      <WhatParentSays/>
      <SuccessStories/>
      </div>
  
    </Layout>
  );
}
