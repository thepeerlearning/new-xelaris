"use client"
import Button from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const desktopImage =
  "https://res.cloudinary.com/seunsanyaa/image/upload/v1766823260/main_ggu6py.png"

export function Started() {
  return (
    <div className="flex flex-col items-center w-full px-4 md:px-20 py-5 pt-20 lg:pt-[8rem] max-w-360 mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-4 items-center justify-center w-full max-w-[1200px]">
        {/* Left Text Stack */}
        <div className="flex flex-col items-start w-full lg:flex-1 lg:h-[720px] lg:relative">
          {/* Text Content */}
          <div className="flex flex-col gap-10 lg:gap-0 w-full">
            {/* Heading and Description */}
            <div className="flex flex-col gap-2 items-start justify-center w-full lg:max-w-[519px]">
              {/* Heading */}
              <div className="flex flex-col items-start w-full lg:pt-[46px]">
                <h2 className="flex flex-col font-medium justify-center leading-10 text-white text-3xl md:text-5xl     2xl:text-6xl tracking-tight  lg:leading-[66px] lg:tracking-[-2px] lg:whitespace-nowrap">
                  <span>Why We Started</span>
                  <span>Xelaris</span>
                </h2>
              </div>

              {/* Description */}
              <div className="flex flex-col font-normal items-start w-full mt-2 lg:mt-[31px] lg:max-w-[515px]">
                <p className="leading-5 text-[#b0b0b0] text-lg lg:text-[18px] lg:leading-[22px] mb-4">
                  We saw a disconnect in how kids were learning tech skills.
                  Most coding programs teach students to replicate pre-built
                  projects and follow instructions, led by instructors
                  who&apos;ve never shipped code to production. Pre-built
                  curriculums where everyone makes the same thing. Students
                  complete courses, earn certificates, and graduate without ever
                  building something real.
                </p>
                <p className="leading-5 text-[#b0b0b0] text-lg lg:text-[18px] lg:leading-[22px] mb-4">
                  So we built what we wished existed: true 1-on-1 mentorship
                  with engineers who work in the industry. No cohorts. No fixed
                  curriculum. Just a student with an idea working with an
                  engineer.
                </p>
                <p className="leading-5 text-[#b0b0b0] text-lg lg:text-[18px] lg:leading-[22px]">
                  All programs are developed and taught exclusively by a{" "}
                  <span className="text-[#fefc00] underline">team</span> of
                  professional engineers.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-[14.35px] lg:items-center justify-start w-fit lg:w-auto lg:absolute lg:top-[579px] lg:left-[0.34px]">
              <a
                href="https://cal.com/xelaris/trial-class"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  type="colored"
                  className="w-full lg:w-auto !rounded-xl lg:!px-12 lg:!py-3"
                >
                  Book A Trial Class <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              {/* <Link href="/auth/signup">
                  <Button 
                    type="uncolored" 
                    className="w-full lg:w-auto !rounded-xl lg:!px-12 lg:!py-[10px]"
                  >    
                    Sign up
                  </Button>
                </Link> */}
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex flex-col items-start overflow-hidden w-full   md:w-[292px] lg:w-[392px] xl:w-[592px] lg:h-[514px] h-80  lg:shrink-0">
          <div className="flex flex-col items-center justify-center overflow-hidden rounded-lg md:rounded-[10px] lg:rounded-[20px] w-full h-full bg-[#15161d] p-1 border border-[#2b2b2b]">
            <div className="relative w-full h-full rounded-lg md:rounded-[8px] lg:rounded-[16px] overflow-hidden">
              <Image
                src={desktopImage}
                alt="Teacher mentoring student"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
