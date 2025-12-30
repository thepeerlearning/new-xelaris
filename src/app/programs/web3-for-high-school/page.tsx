'use client';
import Layout from "@/components/layout/Layout";
import { PrestigiousPrograms } from "@/components/layout/Home/Programs";
import { WhatParentSays } from "@/components/layout/Home/WhatParentSays";
import { AIProgramHero } from "@/components/layout/Program/AIProgramHero";
import { Web3Program } from "@/components/layout/Program/Web3Program";
import { OurStudents } from "@/components/layout/Students/OurStudents";

const web3ProgramImage = "https://res.cloudinary.com/seunsanyaa/image/upload/v1766823252/or6XD584AhJWFCfXx1bfHMhY2qw.png_2_vqqqas.png";

export default function Web3ForHighSchool() {
  return (
    <Layout>

<div className="flex flex-col gap-10">
      <AIProgramHero 
        title="Web3 Program for High School Students" 
        description="Over the course of 12 to 15 weeks, each high school student receives one-on-one mentorship with a professional blockchain engineer to develop a Web3 project. They focus on smart contracts, decentralized applications, and blockchain technology, then work with personalized guidance to design and build a meaningful decentralized solution from start to finish."
        prerequisites="This program is designed for students with JavaScript or Python programming experience. If you've completed our Intermediate Program or have equivalent coding background, you're ready."
        image={web3ProgramImage}
        onApply={() => console.log("Apply for Web3 Program")}
      />

      <Web3Program />

      <PrestigiousPrograms/>
      <OurStudents/>
      <WhatParentSays/>

      </div>
    </Layout>
  );
}