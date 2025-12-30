import Layout from "@/components/layout/Layout";
import { AcceleratorPrograms } from "@/components/layout/Home/AcceleratorPrograms";
import { AssessmentAndPlacement } from "@/components/layout/Home/AssessmentAndPlacement";
import { OurPrograms } from "@/components/layout/Home/OurPrograms";
import { OurStudents } from "@/components/layout/Students/OurStudents";

export default function ProgramsPage() {
  return (
    <Layout>
                <div className="flex flex-col gap-10">

      <OurPrograms />

      <AcceleratorPrograms/>
      <AssessmentAndPlacement/>
      {/* <PrestigiousPrograms /> */}
      <OurStudents />
      </div>
    </Layout>
  );
}