'use client';

export function AboutHero() {
  return (
    <div className="flex flex-col items-center justify-center px-4 pb-10 pt-16 w-full lg:px-20 lg:pt-[8rem] lg:pb-16">
      <div className="flex flex-col items-center w-full max-w-[1200px]">
        {/* Heading */}
        <div className="flex flex-col items-center w-full mb-4 lg:mb-[27px]">
          <h1 className="font-medium text-white text-4xl text-center leading-9 tracking-tight lg:text-[60px] lg:leading-[66px] lg:tracking-[-2px] whitespace-nowrap">
            Meet Our Team
          </h1>
        </div>

        {/* Description */}
        <div className="flex flex-col items-center justify-center max-w-3xl lg:max-w-[818px] w-full">
          <p className="font-normal leading-5 text-center text-[#b0b0b0] text-lg lg:text-[18px] lg:leading-[27px]">
            We&apos;re the mentors we wish we had, educators and engineers committed to creating engaging and meaningful learning experiences for kids and teens. We&apos;ve been where our students want to go, and we know how to guide them there.
          </p>
        </div>
      </div>
    </div>
  );
}

