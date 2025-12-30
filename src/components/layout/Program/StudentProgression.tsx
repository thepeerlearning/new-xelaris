'use client';

export function StudentProgression() {
  return (
    <div className="flex flex-col gap-4 items-center w-full mt-6">
      <div className="bg-[#05141b] border border-white/20 flex flex-col gap-4 items-center py-4 px-3 rounded-[2.125rem] w-full">
        {/* Header Section */}
        <div className="flex flex-col gap-4 items-center w-full pt-4">
          <div className="flex flex-col items-center w-full">
            <h2 className="font-bold text-white text-2xl leading-6 tracking-tight whitespace-pre-wrap text-center">
              How Students Progress
              <br />
              Through Foundation
            </h2>
          </div>

          {/* Progression Guideline */}
          <div className="flex flex-col gap-2 items-center w-full pt-6">
            <p className="font-medium text-white text-xl leading-5 text-center">
              Progression Guideline
            </p>
            <p className="font-normal text-[#b0b0b0] text-lg leading-6 tracking-tight text-center whitespace-pre-wrap">
              To make promotion objective and transparent, we use{' '}
              <span className="text-[#fefc00] underline decoration-solid underline-offset-2">
                competency rubric
              </span>{' '}
              across five domains. Student must demonstrate growth in each domain to move from one level to another.
            </p>
          </div>

          {/* Passing Threshold */}
          <div className="flex flex-col gap-2 items-center w-full pt-6">
            <p className="font-medium text-white text-xl leading-5 text-center">
              Passing Threshold
            </p>
            <p className="font-normal text-[#b0b0b0] text-lg leading-6 tracking-tight text-center whitespace-pre-wrap">
              A student must meet at least 4 out of 6{' '}
              <span className="text-[#fefc00] underline decoration-solid underline-offset-2">
                domain expectations
              </span>{' '}
              and show clear improvement in any two remaining areas to the next level
            </p>
          </div>
        </div>

        {/* Mastery Requirements */}
        <div className="flex flex-col gap-2 items-start w-full mt-4">
          <div className="bg-white/10 flex items-start p-4 rounded-xl w-full">
            <div className="flex flex-col items-start w-full">
              <h3 className="font-semibold text-white text-lg leading-7">
                Mastery Requirements:
              </h3>
            </div>
          </div>
          <ul className="list-disc text-[#b0b0b0] text-lg leading-6 ml-6 space-y-2 pt-4">
            <li>85% completion of lesson activities in each module</li>
            <li>Successful completion of all capstone projects</li>
            <li>Demonstration of core concepts in final projects</li>
            <li>Ability to explain their code and decision-making</li>
          </ul>
        </div>

        {/* Project Evaluation Criteria */}
        <div className="flex flex-col gap-2 items-start w-full mt-4">
          <div className="bg-white/10 flex items-start p-4 rounded-xl w-full">
            <div className="flex flex-col items-start w-full">
              <h3 className="font-semibold text-white text-lg leading-7">
                Project Evaluation Criteria:
              </h3>
            </div>
          </div>
          <ul className="list-disc text-[#b0b0b0] text-lg leading-6 ml-6 space-y-2 pt-4">
            <li>Functionality (30%): Does the project work as intended?</li>
            <li>Concept Application (25%): Are key concepts correctly used?</li>
            <li>Creativity (20%): Does the project show personal creativity?</li>
            <li>Code Organization (15%): Is the code clean and understandable?</li>
            <li>Presentation (10%): Can the student explain their work?</li>
          </ul>
        </div>

        {/* Recognition & Certificates */}
        <div className="flex flex-col gap-2 items-start w-full mt-4">
          <div className="bg-white/10 flex items-start p-4 rounded-xl w-full">
            <div className="flex flex-col items-start w-full">
              <h3 className="font-semibold text-white text-lg leading-7">
                Recognition & Certificates:
              </h3>
            </div>
          </div>
          <ul className="list-disc text-[#b0b0b0] text-lg leading-6 ml-6 space-y-2 pt-4">
            <li>Module completion certificates (3 total)</li>
            <li>Foundation Program completion certificate</li>
            <li>Portfolio of 6+ completed projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

