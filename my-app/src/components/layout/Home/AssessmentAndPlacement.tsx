'use client';
import Link from 'next/link';

export function AssessmentAndPlacement() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full px-4 py-16 lg:px-20 lg:py-0 lg:pt-[23px] lg:pb-40">
      <div className="flex flex-col gap-4 items-center w-full max-w-[1200px] lg:flex-row lg:gap-4 lg:items-start lg:justify-center">
        {/* Mobile Header Section */}
        <div className="flex flex-col gap-4 items-center w-full lg:hidden">
          {/* Heading */}
          <div className="flex flex-col items-start max-w-[318px] h-[70px] overflow-hidden">
            <h2 className="font-medium text-white text-[2rem] leading-[2.2rem] text-center tracking-[-2px] w-full">
              Assessment<br />& Placement
            </h2>
          </div>

          {/* Description */}
          <div className="flex flex-col items-center justify-center max-w-[311px]">
            <p className="font-medium text-[#b0b0b0] text-lg leading-[1.4rem] text-center tracking-[-0.4px]">
              We want every student in the right program from day one. Here&apos;s how we make sure of that:
            </p>
          </div>
        </div>

        {/* Desktop Sticky Sidebar */}
        <div className="hidden lg:flex lg:flex-col lg:gap-10 lg:items-start lg:w-[554px] lg:shrink-0 lg:sticky lg:top-0">
          {/* Heading and Description */}
          <div className="h-[203px] overflow-hidden relative w-full">
            <div className="flex flex-col items-start max-w-[600px] min-w-[554px]">
              <h2 className="font-medium text-white text-[60px] leading-[66px] tracking-[-2px] whitespace-nowrap">
                Assessment<br />& Placement
              </h2>
            </div>
            <div className="absolute top-[157.88px] left-0 w-[472px] flex flex-col items-start justify-center">
              <p className="font-medium text-[#b0b0b0] text-lg leading-[1.4rem] tracking-[-0.4px] w-full">
                We want every student in the right program from day one. Here&apos;s how we make sure of that:
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center h-[49px]">
            <div className="flex flex-col items-start p-[2px] rounded-[18px] relative">
              <Link href="/auth/signup" className="bg-[#fefc00] flex items-center justify-center overflow-hidden px-12 py-[10px] rounded-[16px]">
                <span className="font-medium text-[#161a20] text-lg text-center tracking-[-0.4px] leading-[24px] whitespace-nowrap">
                  Book A Trial Class →
                </span>
              </Link>
              <div className="absolute border border-solid border-white inset-0 rounded-[18px] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Cards Stack */}
        <div className="flex flex-col gap-8 items-center w-full px-4 lg:px-0 lg:gap-[22px] lg:items-end">
          {/* Card 1 - Step 1 */}
          <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] shadow-[0_0.25rem_1.25rem_0_rgba(0,0,0,0.25)] w-full lg:w-[608px]">
            {/* Outer stroke with gradient */}
            <div
              className="relative rounded-[2rem] lg:rounded-[2.5rem] p-px"
              style={{
                backgroundImage: 'linear-gradient(159.12deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 60%)'
              }}
            >
              {/* Outer card background */}
              <div className="bg-[#1b1f24] rounded-[2rem] lg:rounded-[2.5rem] p-2">
                {/* Inner stroke with gradient */}
                <div
                  className="relative rounded-[1.5rem] lg:rounded-[2rem] p-px"
                  style={{
                    backgroundImage: 'linear-gradient(161.13deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 62%)'
                  }}
                >
                  {/* Inner card with gradient background */}
                  <div className="relative rounded-[1.5rem] lg:rounded-[2rem] bg-gradient-to-b from-[#242930] to-[#13181f] overflow-hidden min-w-[338px] lg:min-w-0 lg:h-[217px]">
                    {/* Content */}
                    <div className="flex flex-col gap-2 items-start pt-[15px] lg:pt-6 px-4 lg:px-6 pb-4 w-full">
                      {/* Step Label */}
                      <div className="flex flex-col items-start lg:h-[25px]">
                        <p className="font-bold text-[#fefc00] text-[0.8125rem] lg:text-[1.25rem] leading-[0.825rem] lg:leading-[1.125rem] tracking-[2px] uppercase">
                          STEP 1:
                        </p>
                      </div>

                      {/* Title */}
                      <div className="flex flex-col items-start justify-center w-full lg:w-[433.59px]">
                        <h3 className="font-bold text-white text-2xl lg:text-[2rem] leading-[1.875rem] lg:leading-[2.5rem] tracking-[-2px] w-full">
                          Book an assessment
                        </h3>
                      </div>

                      {/* Description */}
                      <div className="flex flex-col items-start opacity-70 w-full">
                        <p className="font-medium text-white text-sm lg:text-base leading-[1.1375rem] lg:leading-[1.375rem] tracking-[-0.4px] w-full">
                          No commitment, Just an honest conversation about where your child is and where they should start.
                        </p>
                      </div>
                    </div>

                    {/* Inner shadow overlay */}
                    <div className="absolute inset-0 pointer-events-none shadow-[inset_-0.3125rem_-0.5625rem_0.6875rem_0_rgba(0,0,0,0.15),inset_0.25rem_0.25rem_0.25rem_0_rgba(255,255,255,0.03)] rounded-[1.5rem] lg:rounded-[2rem]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Step 2 */}
          <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] shadow-[0_0.25rem_1.25rem_0_rgba(0,0,0,0.25)] w-full lg:w-[608px]">
            {/* Outer stroke with gradient */}
            <div
              className="relative rounded-[2rem] lg:rounded-[2.5rem] p-px"
              style={{
                backgroundImage: 'linear-gradient(158.49deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 60%)'
              }}
            >
              {/* Outer card background */}
              <div className="bg-[#1b1f24] rounded-[2rem] lg:rounded-[2.5rem] p-2">
                {/* Inner stroke with gradient */}
                <div
                  className="relative rounded-[1.5rem] lg:rounded-[2rem] p-px"
                  style={{
                    backgroundImage: 'linear-gradient(160.65deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 62%)'
                  }}
                >
                  {/* Inner card with gradient background */}
                  <div className="relative rounded-[1.5rem] lg:rounded-[2rem] bg-gradient-to-b from-[#242930] to-[#13181f] overflow-hidden min-w-[338px] lg:min-w-0 lg:h-[223px]">
                    {/* Content */}
                    <div className="flex flex-col gap-2 items-start pt-[15px] lg:pt-6 px-4 lg:px-6 pb-4 w-full">
                      {/* Step Label */}
                      <div className="flex flex-col items-start">
                        <p className="font-bold text-[#fefc00] text-[0.8125rem] lg:text-[1.25rem] leading-[0.825rem] lg:leading-[1.125rem] tracking-[2px] uppercase">
                          STEP 2:
                        </p>
                      </div>

                      {/* Title */}
                      <div className="flex flex-col items-start justify-center w-full lg:w-[433.59px]">
                        <h3 className="font-bold text-white text-2xl lg:text-[2rem] leading-[1.875rem] lg:leading-[2.5rem] tracking-[-2px] w-full">
                          We meet with your child
                        </h3>
                      </div>

                      {/* Description */}
                      <div className="flex flex-col items-start opacity-70 w-full">
                        <p className="font-medium text-white text-sm lg:text-base leading-[1.1375rem] lg:leading-[1.375rem] tracking-[-0.4px] w-full mb-0">
                          Our mentor will:
                        </p>
                        <ul className="list-disc font-medium text-white text-sm lg:text-base leading-[1.1375rem] lg:leading-[1.375rem] tracking-[-0.4px] w-full pl-[21px] lg:pl-[24px] mt-0">
                          <li className="mb-0">Review any projects or code they&apos;ve built</li>
                          <li className="mb-0">Give them a simple technical challenge to work through</li>
                          <li className="mb-0">Ask questions to understand how they think and problem-solve</li>
                          <li className="mb-0">Discuss their interests and goals</li>
                        </ul>
                      </div>
                    </div>

                    {/* Inner shadow overlay */}
                    <div className="absolute inset-0 pointer-events-none shadow-[inset_-0.3125rem_-0.5625rem_0.6875rem_0_rgba(0,0,0,0.15),inset_0.25rem_0.25rem_0.25rem_0_rgba(255,255,255,0.03)] rounded-[1.5rem] lg:rounded-[2rem]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Step 3 */}
          <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] shadow-[0_0.25rem_1.25rem_0_rgba(0,0,0,0.25)] w-full lg:w-[608px]">
            {/* Outer stroke with gradient */}
            <div
              className="relative rounded-[2rem] lg:rounded-[2.5rem] p-px"
              style={{
                backgroundImage: 'linear-gradient(159.12deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 60%)'
              }}
            >
              {/* Outer card background */}
              <div className="bg-[#1b1f24] rounded-[2rem] lg:rounded-[2.5rem] p-2">
                {/* Inner stroke with gradient */}
                <div
                  className="relative rounded-[1.5rem] lg:rounded-[2rem] p-px"
                  style={{
                    backgroundImage: 'linear-gradient(161.13deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 62%)'
                  }}
                >
                  {/* Inner card with gradient background */}
                  <div className="relative rounded-[1.5rem] lg:rounded-[2rem] bg-gradient-to-b from-[#242930] to-[#13181f] overflow-hidden min-w-[338px] lg:min-w-0 lg:h-[217px]">
                    {/* Content */}
                    <div className="flex flex-col gap-2 items-start pt-[15px] lg:pt-6 px-4 lg:px-6 pb-4 w-full">
                      {/* Step Label */}
                      <div className="flex flex-col items-start lg:h-[25px]">
                        <p className="font-bold text-[#fefc00] text-[0.8125rem] lg:text-[1.25rem] leading-[0.825rem] lg:leading-[1.125rem] tracking-[2px] uppercase">
                          STEP 3:
                        </p>
                      </div>

                      {/* Title */}
                      <div className="flex flex-col items-start justify-center w-full lg:w-[433.59px]">
                        <h3 className="font-bold text-white text-2xl lg:text-[2rem] leading-[1.875rem] lg:leading-[2.5rem] tracking-[-2px] w-full">
                          We give you a clear recommendation
                        </h3>
                      </div>

                      {/* Description */}
                      <div className="flex flex-col items-start opacity-70 w-full">
                        <p className="font-medium text-white text-sm lg:text-base leading-[1.1375rem] lg:leading-[1.375rem] tracking-[-0.4px] w-full">
                          Right there on the call. We&apos;ll tell you exactly which program is the best fit and why. If you decide to move forward, your child starts in the program.
                        </p>
                      </div>
                    </div>

                    {/* Inner shadow overlay */}
                    <div className="absolute inset-0 pointer-events-none shadow-[inset_-0.3125rem_-0.5625rem_0.6875rem_0_rgba(0,0,0,0.15),inset_0.25rem_0.25rem_0.25rem_0_rgba(255,255,255,0.03)] rounded-[1.5rem] lg:rounded-[2rem]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}