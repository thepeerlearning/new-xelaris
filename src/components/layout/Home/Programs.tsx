"use client"
import { RegularCard } from "@/components/ui/cards/RegularCard"

export function PrestigiousPrograms() {
  const cards = [
    {
      title: "Work With Engineers\nWho Actually Ship",
      description:
        "Your child is mentored by engineers who build software daily. Not career educators, but practitioners who've architected systems, debugged at scale, and shipped products to real users. They bring experience you can't get from a textbook.",
    },
    {
      title: "Build Products That Matter, Not Tutorials",
      description:
        "Students graduate with portfolios of live software: working apps, AI models solving actual problems, games people play. Not certificates. Not badges. Real projects they can demo to anyone or use for college applications.",
    },
    {
      title: "1-on-1 Mentorship,\nTailored to Your Child",
      description:
        "No cohorts. No fixed curriculum. Every student works directly with their an engineer on projects they actually care about or problems they want to solve, moving at their own pace. We adapt to your child's schedule, learning style, and goals.",
    },
  ]

  return (
    <div className="flex flex-col items-center w-full px-4 md:px-20  py-5 max-w-360 mx-auto ">
      {/* Text Section */}
      <div className="flex flex-col gap-4 items-center w-full max-w-[1200px]">
        {/* Heading */}
        <div className="flex flex-col items-center w-full lg:pt-[46px]">
          <h2 className="flex flex-col  lg:block font-medium justify-center leading-10  md:leading-12 lg:leading-[66px] text-white text-3xl md:text-5xl lg:text-6xl tracking-[-0.125rem] md:tracking-[-1px] lg:tracking-[-2px] text-center">
            <span>What makes us one </span>
            <span>of the prestigious </span>
            <span>programs out there?</span>
          </h2>
        </div>

        {/* Description */}
        <div className="flex flex-col items-center justify-center px-16 lg:px-40  max-w-[51.125rem] w-full lg:mt-[9px]">
          <p className="font-medium leading-[1.4rem] lg:leading-[22.4px] text-[#b0b0b0] text-lg lg:text-[16px] text-center tracking-[-0.025rem] lg:tracking-[-0.4px]">
            Our students don&apos;t just learn to code, they ship real products,
            and work with professional engineers who&apos;ve built at scale
          </p>
        </div>
      </div>

      {/* Card Stack - Mobile: Vertical, Desktop: Horizontal */}
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-4 items-center lg:items-stretch justify-center w-full mt-9 ">
        {cards.map((card, index) => (
          <RegularCard
            key={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  )
}
