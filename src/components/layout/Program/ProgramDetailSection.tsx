"use client"
import Button from "@/components/ui/buttons/Button"
import { ArrowRight, Check } from "lucide-react"
import Image from "next/image"

interface CurriculumPhase {
  phase: string
  items: string[]
}

interface ProgramDetailSectionProps {
  image: string
  title: string
  ageRange: string
  description: string
  duration: string
  curriculum: CurriculumPhase[]
  projects: string[]
  prerequisites: string
  onBookTrial?: () => void
}

export function ProgramDetailSection({
  image,
  title,
  ageRange,
  description,
  duration,
  curriculum,
  projects,
  prerequisites,
}: ProgramDetailSectionProps) {
  return (
    <div className="flex flex-col items-center w-full px-4 py-8">
      <div className="flex flex-col gap-6 items-center w-full max-w-[75rem]">
        {/* Hero Image */}
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center"
            unoptimized
          />
        </div>

        {/* Program Info */}
        <div className="flex flex-col gap-4 items-start w-full">
          {/* Title and Age */}
          <div className="flex flex-col gap-2 items-start">
            <h1 className="font-bold text-white text-3xl sm:text-4xl leading-tight tracking-[-0.075rem]">
              {title}
            </h1>
            <div className="flex items-center gap-3">
              <span className="bg-[#fefc00] text-black font-medium text-sm px-3 py-1 rounded-full">
                {ageRange}
              </span>
              <span className="text-[#b0b0b0] font-medium text-sm">
                {duration}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="font-medium text-[#b0b0b0] text-lg leading-6 tracking-[-0.025rem]">
            {description}
          </p>

          {/* Prerequisites */}
          <div className="flex flex-col gap-2 items-start bg-white/5 p-4 rounded-lg w-full">
            <h3 className="font-semibold text-white text-sm">Prerequisites</h3>
            <p className="font-normal text-[#b0b0b0] text-sm leading-5">
              {prerequisites}
            </p>
          </div>
        </div>

        {/* What They'll Learn */}
        <div className="flex flex-col gap-4 items-start w-full">
          <h2 className="font-bold text-white text-2xl tracking-[-0.075rem]">
            What They&apos;ll Learn
          </h2>

          <div className="flex flex-col gap-6 w-full">
            {curriculum.map((phase, index) => (
              <div key={index} className="flex flex-col gap-3 items-start">
                <h3 className="font-semibold text-[#fefc00] text-lg">
                  {phase.phase}
                </h3>
                <div className="flex flex-col gap-2 w-full">
                  {phase.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#fefc00] shrink-0 mt-0.5" />
                      <p className="font-normal text-[#b0b0b0] text-lg leading-6">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What They'll Build */}
        <div className="flex flex-col gap-4 items-start w-full">
          <h2 className="font-bold text-white text-2xl tracking-[-0.075rem]">
            What They&apos;ll Build
          </h2>

          <div className="flex flex-col gap-2 w-full">
            {projects.map((project, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-[#fefc00] rounded-full shrink-0 mt-2" />
                <p className="font-normal text-[#b0b0b0] text-lg leading-6">
                  {project}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex items-center justify-center w-full pt-4">
          <a
            href="https://cal.com/xelaris/trial-class"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="colored" className="w-full sm:w-auto">
              Book A Trial Class <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
