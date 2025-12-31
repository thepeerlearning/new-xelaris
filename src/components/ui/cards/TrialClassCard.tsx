import { ArrowRight } from "lucide-react"
import Button from "../buttons/Button"

interface TrialClassCardProps {
  image: string
  title: string
  ageRange: string
  description: string
  prerequisite: string
  titleSize?: "small" | "large" // 'small' for Foundation (20px), 'large' for Intermediate/Advanced (24px)
  onLearnMore?: () => void
  onBookTrial?: () => void
}

export const TrialClassCard = ({
  image,
  title,
  ageRange,
  description,
  prerequisite,
  titleSize = "large",
  onLearnMore,
  onBookTrial,
}: TrialClassCardProps) => {
  return (
    <div className="relative w-full">
      {/* Outer container with shadow */}
      <div className="relative overflow-hidden rounded-[2.125rem] shadow-[0_0.25rem_1.25rem_0_rgba(0,0,0,0.25)]">
        {/* Outer stroke with gradient */}
        <div
          className="relative rounded-[2.125rem] p-px"
          style={{
            backgroundImage:
              "linear-gradient(130deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 83%)",
          }}
        >
          {/* Outer card background */}
          <div className="bg-[#1b1f24] rounded-[2.125rem] p-2">
            {/* Inner stroke with gradient */}
            <div
              className="relative rounded-[1.75rem] p-px"
              style={{
                backgroundImage:
                  "linear-gradient(128deg, rgba(255, 255, 255, 0.2) 3%, rgba(255, 255, 255, 0) 87%)",
              }}
            >
              {/* Inner card with gradient background */}
              <div className="relative rounded-[1.75rem] bg-gradient-to-b from-[#242930] to-[#13181f] overflow-hidden">
                {/* Image */}
                <div className="h-[17.73rem] overflow-hidden relative w-full">
                  <img
                    alt={title}
                    className="absolute inset-0 max-w-none object-cover object-center pointer-events-none size-full"
                    src={image}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 items-start justify-center pb-4 pt-0 px-4 w-full">
                  {/* Heading and Description */}
                  <div className="flex flex-col gap-[0.44rem] items-start pb-0 pt-[1.9375rem] px-0 w-full">
                    {/* Title */}
                    <div className="flex flex-col items-start justify-center min-w-[19.125rem]">
                      <h3
                        className={`font-bold text-white leading-6 tracking-[-0.025rem] whitespace-nowrap ${
                          titleSize === "small" ? "text-xl" : "text-2xl"
                        }`}
                      >
                        <span>{title} | </span>
                        <span className="font-normal text-lg">{ageRange}</span>
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="flex flex-col items-start justify-center h-[10.75rem]">
                      <p className="font-normal text-[#b0b0b0] text-lg leading-5 tracking-[-0.025rem] whitespace-pre-wrap">
                        {description}
                      </p>
                    </div>
                  </div>

                  {/* Prerequisite */}
                  <div className="flex flex-col items-start overflow-hidden pt-1 px-0 pb-0">
                    <p className="font-normal text-white text-sm leading-5 tracking-[-0.025rem] whitespace-pre-wrap">
                      {prerequisite}
                    </p>
                  </div>

                  {/* Learn More Link */}
                  <div className="flex flex-col items-start overflow-hidden pb-[0.3125rem] pt-2 px-0">
                    <button
                      onClick={onLearnMore}
                      className="flex items-center gap-1 font-normal text-[#fefc00] text-lg leading-5 tracking-[-0.025rem] whitespace-nowrap hover:opacity-80 transition-opacity"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Book Trial Button */}
                  <div className="flex items-center  relative w-full">
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

                {/* Inner shadow overlay */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0.25rem_0.25rem_0.25rem_0_rgba(255,255,255,0.03),inset_-0.3125rem_-0.5625rem_0.6875rem_0_rgba(0,0,0,0.15)] rounded-[1.75rem]" />
              </div>
            </div>
          </div>
        </div>

        {/* Outer shadow overlay */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0.0625rem_0.0625rem_0.0625rem_0_rgba(255,255,255,0.1)] rounded-[2.125rem]" />
      </div>
    </div>
  )
}
