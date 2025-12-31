"use client"
import Button from "@/components/ui/buttons/Button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const foundationImage =
  "https://res.cloudinary.com/seunsanyaa/image/upload/v1766823281/or6XD584AhJWFCfXx1bfHMhY2qw.png_xzuzpv.png"
const intermediateImage =
  "https://res.cloudinary.com/seunsanyaa/image/upload/v1766823256/or6XD584AhJWFCfXx1bfHMhY2qw.png_1_jd4i7h.png"
const advancedImage =
  "https://res.cloudinary.com/seunsanyaa/image/upload/v1766823252/or6XD584AhJWFCfXx1bfHMhY2qw.png_2_vqqqas.png"

interface ProgramCardProps {
  title: string
  ageRange: string
  description: string
  prerequisite: string
  image: string
  link: string
}

function ProgramCard({
  title,
  ageRange,
  description,
  prerequisite,
  image,
  link,
}: ProgramCardProps) {
  return (
    <div className="relative w-full lg:flex-1 lg:h-auto">
      {/* Outer container with shadow */}
      <div className="relative overflow-hidden rounded-2xl xl:rounded-3xl 2xl:rounded-[2.125rem] shadow-[0_0.25rem_1.25rem_0_rgba(0,0,0,0.25)] lg:h-full flex flex-col">
        {/* Outer stroke with gradient */}
        <div
          className="relative rounded-2xl xl:rounded-3xl 2xl:rounded-[2.125rem] p-px flex-1 flex flex-col"
          style={{
            backgroundImage:
              "linear-gradient(128.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 83%)",
          }}
        >
          {/* Outer card background */}
          <div className="bg-[#1b1f24] rounded-2xl xl:rounded-3xl 2xl:rounded-[2.125rem] p-1.5 xl:p-2 2xl:p-2 flex-1 flex flex-col">
            {/* Inner stroke with gradient */}
            <div
              className="relative rounded-xl xl:rounded-2xl 2xl:rounded-[1.75rem] p-px flex-1 flex flex-col"
              style={{
                backgroundImage:
                  "linear-gradient(127.53deg, rgba(255, 255, 255, 0.2) 3%, rgba(255, 255, 255, 0) 87%)",
              }}
            >
              {/* Inner card with gradient background */}
              <div className="relative rounded-xl xl:rounded-2xl 2xl:rounded-[1.75rem] bg-gradient-to-b from-[#242930] to-[#13181f] overflow-hidden flex-1 flex flex-col h-full">
                {/* Image */}
                <div className="relative w-full aspect-[370/277.75] overflow-hidden flex-shrink-0">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 px-4 sm:px-5 md:px-6 pt-6 sm:pt-7 md:pt-8 xl:pt-9 2xl:pt-[39px] pb-4 sm:pb-5 md:pb-6 flex-1">
                  {/* Heading and Description */}
                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-white text-xl sm:text-2xl md:text-2xl leading-tight tracking-tight">
                      {title}{" "}
                      <span className="font-normal text-base sm:text-lg md:text-base">
                        {ageRange}
                      </span>
                    </h3>
                    <p className="font-normal text-[#b0b0b0] text-base sm:text-lg md:text-base leading-relaxed tracking-tight">
                      {description}
                    </p>
                  </div>

                  {/* Prerequisite */}
                  <div className="py-1">
                    <p className="font-normal text-white text-base sm:text-lg md:text-base leading-relaxed tracking-tight">
                      {prerequisite}
                    </p>
                  </div>

                  {/* Learn More Link */}
                  <Link href={link} className="py-1">
                    <span className="font-normal text-[#fefc00] text-base sm:text-lg md:text-base leading-relaxed tracking-tight">
                      Learn More →
                    </span>
                  </Link>

                  {/* CTA Button - Pushed to bottom */}
                  <div className="flex mt-auto">
                    <a
                      href="https://cal.com/xelaris/trial-class"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button
                        type="colored"
                        className="!rounded-xl !px-4 sm:!px-5 md:!px-6 !py-2 sm:!py-2.5 md:!py-3 w-full sm:w-auto"
                      >
                        Book A Trial Class <ArrowRight className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Inner shadow overlay */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0.25rem_0.25rem_0.25rem_0_rgba(255,255,255,0.03),inset_-0.3125rem_-0.5625rem_0.6875rem_0_rgba(0,0,0,0.15)] rounded-xl xl:rounded-2xl 2xl:rounded-[1.75rem]" />
              </div>
            </div>
          </div>
        </div>

        {/* Outer shadow overlay */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0.0625rem_0.0625rem_0.0625rem_0_rgba(255,255,255,0.1)] rounded-2xl xl:rounded-3xl 2xl:rounded-[2.125rem]" />
      </div>
    </div>
  )
}

export function OurPrograms() {
  const programs = [
    {
      title: "Foundation |",
      ageRange: "Ages 7-10",
      description:
        "Your child learns the basics of coding through Scratch and python turtle, then chooses a path: Web/app Development, AI, or Game Development. They spend the next several months learning real tools and building working projects actual websites, games, or programs they can show off.",
      prerequisite: "Prerequisite: No coding experience required",
      image: foundationImage,
      link: "/programs/foundation",
    },
    {
      title: "Intermediate |",
      ageRange: "Ages 11-13",
      description:
        "Students go deep in their chosen path, learning professional tools like React for web, machine learning for AI, or Unity, Roblox for game development. They build 5 to 6 major projects complete applications, AI models, or published games. By the end, many can freelance or compete in hackathons.",
      prerequisite: "Prerequisite: Foundation or equivalent coding experience",
      image: intermediateImage,
      link: "/programs/intermediate",
    },
    {
      title: "Advanced |",
      ageRange: "Ages 14-18",
      description:
        "For experienced students preparing for top CS programs or careers in tech. Through personalized 1:1 mentorship with professional engineers, students work on research-quality projects in software Development, AI or Web3. Students graduate with portfolios that get them into IVY League or job offers before college.",
      prerequisite: "Prerequisite: Intermediate or advanced coding skills",
      image: advancedImage,
      link: "",
    },
  ]

  return (
    <div className="flex flex-col items-center w-full px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 2xl:px-20 py-12 sm:py-16 md:py-20 lg:pt-6 xl:pt-8 2xl:pt-10 lg:pb-16 xl:pb-24 2xl:pb-32">
      <div className="flex flex-col items-center w-full max-w-7xl xl:max-w-[90rem] 2xl:max-w-360">
        {/* Text Section */}
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 items-center w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
          {/* Heading */}
          <div className="flex flex-col items-center w-full lg:pt-6 xl:pt-8 2xl:pt-12">
            <h2 className="font-medium text-white text-3xl sm:text-4xl md:text-5xl   lg:text-6xl leading-tight tracking-tight text-center">
              Our Programs
            </h2>
          </div>

          {/* Description */}
          <div className="flex flex-col items-center justify-center max-w-2xl xl:max-w-3xl 2xl:max-w-4xl w-full lg:mt-0 pb-6">
            <p className="font-medium text-[#b0b0b0] text-base sm:text-lg md:text-lg text-center leading-relaxed tracking-tight">
              Students choose their path: Web Development, Software & AI, or
              Game Development.
              <br className="hidden md:block" />
              Then they work 1-on-1 with professional engineers to build real,
              meaningful projects.
            </p>
          </div>
        </div>

        {/* Card Stack - Mobile: Vertical, Desktop: Horizontal */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-6 2xl:gap-8 items-stretch justify-center w-full mt-6 sm:mt-7 md:mt-8 lg:mt-4 xl:mt-5 2xl:mt-6 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl lg:items-stretch">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              ageRange={program.ageRange}
              description={program.description}
              prerequisite={program.prerequisite}
              image={program.image}
              link={program.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
