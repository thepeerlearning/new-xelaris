'use client';
import Layout from "@/components/layout/Layout";
import { AcceleratorPrograms } from "@/components/layout/Pricing/AcceleratorPrograms";
import { PricingFAQ } from "@/components/layout/Pricing/PricingFAQ";
import { PricingHero } from "@/components/layout/Pricing/PricingHero";
import { PricingTiers } from "@/components/layout/Pricing/PricingTiers";
import { useState } from 'react';

type ProgramTab = 'foundation' | 'intermediate' | 'advanced';

export default function Pricing() {
  const [selectedProgram, setSelectedProgram] = useState<ProgramTab>('foundation');

  return (
    <Layout>
      <PricingHero 
        selectedProgram={selectedProgram}
        onProgramChange={setSelectedProgram}
      />
      <PricingTiers selectedProgram={selectedProgram} />
      {selectedProgram === 'foundation' && <AcceleratorPrograms />}
      <PricingFAQ />
    </Layout>
  );
}