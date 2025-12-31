"use client"
import Button from "@/components/ui/buttons/Button"
import Image from "next/image"
import Link from "next/link"

const aiImage =
  "https://res.cloudinary.com/seunsanyaa/image/upload/v1766824096/or6XD584AhJWFCfXx1bfHMhY2qw.png_3_oczn3k.png"
const web3Image =
  "https://res.cloudinary.com/seunsanyaa/image/upload/v1766823252/or6XD584AhJWFCfXx1bfHMhY2qw.png_2_vqqqas.png"

interface AcceleratorCardProps {
  title: string
  description: string
  image: string
  link: string
}

function AcceleratorCard({
  title,
  description,
  image,
  link,
}: AcceleratorCardProps) {
  return (
    <div className="relative w-full lg:flex-1 lg:max-w-md xl:max-w-lg 2xl:max-w-xl">
      {/* Outer container with shadow */}
      <div className="relative overflow-hidden rounded-2xl xl:rounded-3xl 2xl:rounded-[2.125rem] shadow-[0_0.25rem_1.25rem_0_rgba(0,0,0,0.25)]">
        {/* Outer stroke with gradient */}
        <div
          className="relative rounded-2xl xl:rounded-3xl 2xl:rounded-[2.125rem] p-px"
          style={{
            backgroundImage:
              "linear-gradient(138.24deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 83%)",
          }}
        >
          {/* Outer card background */}
          <div className="bg-[#1b1f24] rounded-2xl xl:rounded-3xl 2xl:rounded-[2.125rem] p-1.5 xl:p-2 2xl:p-2">
            {/* Inner stroke with gradient */}
            <div
              className="relative rounded-xl xl:rounded-2xl 2xl:rounded-[1.75rem] p-px"
              style={{
                backgroundImage:
                  "linear-gradient(137.13deg, rgba(255, 255, 255, 0.2) 3%, rgba(255, 255, 255, 0) 87%)",
              }}
            >
              {/* Inner card with gradient background */}
              <div className="relative rounded-xl xl:rounded-2xl 2xl:rounded-[1.75rem] bg-gradient-to-b from-[#242930] to-[#13181f] overflow-hidden">
                {/* Image */}
                <div className="relative w-full aspect-[370/277.75] overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 px-4 sm:px-5 md:px-6 pt-4 sm:pt-5 md:pt-6 xl:pt-7 2xl:pt-[29px] pb-4 sm:pb-5 md:pb-6">
                  {/* Heading and Description */}
                  <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                    <h3 className="font-bold text-white text-xl sm:text-2xl md:text-2xl leading-tight tracking-tight">
                      {title}
                    </h3>
                    <p className="font-normal text-[#b0b0b0] text-base sm:text-lg md:text-base leading-relaxed tracking-tight">
                      {description}
                    </p>
                  </div>

                  {/* Learn More Link */}
                  <Link href={link} className="py-1">
                    <span className="font-normal text-[#fefc00] text-base sm:text-lg md:text-base leading-relaxed tracking-tight">
                      Learn More →
                    </span>
                  </Link>

                  {/* CTA Button */}
                  <div className="flex">
                    <Button
                      type="colored"
                      onClick={() => console.log("Apply for", title)}
                      className="!rounded-xl !px-4 sm:!px-5 md:!px-6 !py-2 sm:!py-2.5 md:!py-3 w-full sm:w-auto"
                    >
                      Apply For Consideration→
                    </Button>
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

export function AcceleratorPrograms() {
  const programs = [
    {
      title: "AI Accelerator",
      description:
        "12 to 15 weeks AI program for High school students Students learn machine learning fundamentals, build an original research project with a mentor, and write a paper they can submit to science fairs or feature in college applications.",
      image: aiImage,
      link: "/programs/ai-for-high-school",
    },
    {
      title: "Beginner Web3",
      description:
        "13 to 15 weeks Web3 beginner program for High school students to build and deploy real smart contracts, launch decentralized apps, and understand blockchain architecture. Perfect for students interested in crypto, Web3 startups, or cutting-edge tech.",
      image: web3Image,
      link: "/programs/web3-for-high-school",
    },
  ]

  return (
    <div className="flex flex-col items-center w-full py-12 sm:py-16 md:py-20 lg:pt-6 xl:pt-8 2xl:pt-10 lg:pb-16 xl:pb-24 2xl:pb-32 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 2xl:px-20">
      <div className="flex flex-col items-center w-full max-w-7xl xl:max-w-[90rem] 2xl:max-w-360">
        {/* Text Section */}
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 items-center w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
          {/* Heading */}
          <div className="flex flex-col items-center w-full lg:pt-6 xl:pt-8 2xl:pt-12">
            <h2 className="flex flex-col lg:block font-medium text-white text-3xl md:text-5xl     lg:text-6xl leading-tight tracking-tight text-center">
              <span>Accelerator Programs For </span>
              <br className="hidden md:block" />
              <span>High School Students</span>
            </h2>
          </div>

          {/* Description */}
          <div className="flex flex-col items-center justify-center max-w-2xl w-full pb-6">
            <p className="font-medium text-[#b0b0b0] text-base sm:text-lg md:text-lg text-center leading-relaxed tracking-tight">
              Intensive programs designed for high school students who want to
              build standout projects for college applications, or early career
              opportunities.
            </p>
          </div>
        </div>

        {/* Card Stack - Mobile: Vertical, Desktop: Horizontal */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-6 2xl:gap-8 items-stretch justify-center w-full mt-6 sm:mt-7 md:mt-8 lg:mt-4 xl:mt-5 2xl:mt-6 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
          {programs.map((program, index) => (
            <AcceleratorCard
              key={index}
              title={program.title}
              description={program.description}
              image={program.image}
              link={program.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
