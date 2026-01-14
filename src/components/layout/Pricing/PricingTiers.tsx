"use client"
import Image from "next/image"

interface PricingTier {
  id: string
  sessionType: string
  price: string
  features: string[]
}

type ProgramType = "foundation" | "intermediate" | "advanced"

interface PricingTiersProps {
  selectedProgram: ProgramType
}

const checkIcon =
  "https://res.cloudinary.com/seunsanyaa/image/upload/v1766954363/Vector_7_hofwlp.png"

const pricingData: Record<ProgramType, PricingTier[]> = {
  foundation: [
    {
      id: "1",
      sessionType: "45 minutes private session once a week",
      price: "$250",
      features: [
        "Weekly 45-min 1:1 session led by a professional engineer.",
        "Personalized lessons tailored to your child`s pace and learning style.",
        "Detailed instructor session notes outlining what was covered in each session",
        "Dedicated, responsive support available 7 days a week.",
        "Easily reschedule your child`s class anytime.",
      ],
    },
    {
      id: "2",
      sessionType: "1 hour private session once a week",
      price: "$300",
      features: [
        "Weekly 1 hour 1:1 sessions led by a professional engineer.",
        "Personalized lessons tailored to your child`s pace and learning style.",
        "Detailed instructor session notes outlining what was covered in each session",
        "Dedicated, responsive support available 7 days a week.",
        "Easily reschedule your child`s class anytime.",
      ],
    },
    {
      id: "3",
      sessionType: "45 minutes private session twice a week",
      price: "$500",
      features: [
        "Twice-weekly 45-min 1:1 session led by a professional engineer.",
        "Personalized lessons tailored to your child`s pace and learning style.",
        "Detailed instructor session notes outlining what was covered in each session",
        "Dedicated, responsive support available 7 days a week.",
        "Easily reschedule your child`s class anytime.",
      ],
    },
    {
      id: "4",
      sessionType: "1 hour private session twice a week",
      price: "$600",
      features: [
        "Twice-weekly 1-hour 1:1 session led by a professional engineer.",
        "Personalized lessons tailored to your child`s pace and learning style.",
        "Detailed instructor session notes outlining what was covered in each session",
        "Dedicated, responsive support available 7 days a week.",
        "Easily reschedule your child`s class anytime.",
      ],
    },
  ],
  intermediate: [
    // {
    //   id: '1',
    //   sessionType: '45 minutes private session once a week',
    //   price: '$375',
    //   features: [
    //     'Weekly 45-min 1:1 session led by a professional engineer.',
    //     'Personalized lessons tailored to your child`s pace and learning style.',
    //     'Detailed instructor session notes outlining what was covered in each session',
    //     'Dedicated, responsive support available 7 days a week.',
    //     'Easily reschedule your child`s class anytime.',
    //   ],
    // },
    {
      id: "2",
      sessionType: "1 hour private session once a week",
      price: "$425",
      features: [
        "Weekly 1 hour 1:1 sessions led by a professional engineer.",
        "Personalized lessons tailored to your child`s pace and learning style.",
        "Detailed instructor session notes outlining what was covered in each session",
        "Dedicated, responsive support available 7 days a week.",
        "Easily reschedule your child`s class anytime.",
      ],
    },
    {
      id: "3",
      sessionType: "45 minutes private session twice a week",
      price: "$575",
      features: [
        "Twice-weekly 45-min 1:1 session led by a professional engineer.",
        "Personalized lessons tailored to your child`s pace and learning style.",
        "Detailed instructor session notes outlining what was covered in each session",
        "Dedicated, responsive support available 7 days a week.",
        "Easily reschedule your child`s class anytime.",
      ],
    },
    {
      id: "4",
      sessionType: "1 hour private session twice a week",
      price: "$725",
      features: [
        "Twice-weekly 1-hour 1:1 session led by a professional engineer.",
        "Personalized lessons tailored to your child`s pace and learning style.",
        "Detailed instructor session notes outlining what was covered in each session",
        "Dedicated, responsive support available 7 days a week.",
        "Easily reschedule your child`s class anytime.",
      ],
    },
  ],
  advanced: [
    // {
    //   id: '1',
    //   sessionType: '45 minutes private session once a week',
    //   price: '$550',
    //   features: [
    //     'Weekly 45-min 1:1 session led by a professional engineer.',
    //     'Personalized lessons tailored to your child`s pace and learning style.',
    //     'Detailed instructor session notes outlining what was covered in each session',
    //     'Dedicated, responsive support available 7 days a week.',
    //     'Easily reschedule your child`s class anytime.',
    //   ],
    // },
    {
      id: "2",
      sessionType: "1 hour private session once a week",
      price: "$650",
      features: [
        "Weekly 1 hour 1:1 sessions led by a professional engineer.",
        "Personalized lessons tailored to your child`s pace and learning style.",
        "Detailed instructor session notes outlining what was covered in each session",
        "Dedicated, responsive support available 7 days a week.",
        "Easily reschedule your child`s class anytime.",
      ],
    },
    {
      id: "3",
      sessionType: "45 minutes private session twice a week",
      price: "$850",
      features: [
        "Twice-weekly 45-min 1:1 session led by a professional engineer.",
        "Personalized lessons tailored to your child`s pace and learning style.",
        "Detailed instructor session notes outlining what was covered in each session",
        "Dedicated, responsive support available 7 days a week.",
        "Easily reschedule your child`s class anytime.",
      ],
    },
    {
      id: "4",
      sessionType: "1 hour private session twice a week",
      price: "$1000",
      features: [
        "Twice-weekly 1-hour 1:1 session led by a professional engineer.",
        "Personalized lessons tailored to your child`s pace and learning style.",
        "Detailed instructor session notes outlining what was covered in each session",
        "Dedicated, responsive support available 7 days a week.",
        "Easily reschedule your child`s class anytime.",
      ],
    },
  ],
}

export function PricingTiers({ selectedProgram }: PricingTiersProps) {
  const pricingTiers = pricingData[selectedProgram]
  return (
    <div className="flex flex-col gap-4 items-center py-10 px-4 w-full lg:px-20 lg:py-0 lg:pb-40">
      {/* Description Text - Desktop Only */}

      {/* Mobile Layout */}
      <div className="flex flex-col gap-4 items-center w-full lg:hidden">
        {pricingTiers.map((tier) => (
          <div
            key={tier.id}
            className="flex items-start justify-center overflow-hidden p-px rounded-tl-[32px] rounded-tr-[32px] rounded-bl-[20px] rounded-br-[20px] bg-gradient-to-br from-white/10 via-white/5 to-white/0 w-full max-w-md"
          >
            <div className="bg-[#1c2026] flex flex-col p-2 rounded-tl-[32px] rounded-tr-[32px] rounded-bl-[20px] rounded-br-[20px] w-full">
              {/* Price Section */}
              <div className="bg-[#12161c] flex flex-col gap-6 p-4 rounded-[24px]">
                {/* Session Type Badge */}
                <div className="flex items-center justify-center overflow-hidden p-px rounded-[24px] bg-gradient-to-br from-white via-white/10 to-white/0 w-full">
                  <div className="backdrop-blur-sm flex items-center justify-center px-3 py-1.5 rounded-[24px] shadow-[0px_4px_4px_0px_#fefc00] bg-gradient-to-br from-[#2c2e31] to-[#1e2024] w-full">
                    <p
                      className={`font-medium leading-5 text-white text-lg sm:text-xl tracking-tight text-center ${
                        selectedProgram === "foundation"
                          ? "whitespace-pre-line"
                          : "whitespace-nowrap"
                      }`}
                    >
                      {tier.sessionType}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-end">
                  <h3 className="font-bold text-white text-[32px] leading-[38.4px] tracking-tight">
                    {tier.price}
                  </h3>
                  <span className="font-normal text-[#b0b0b0] text-sm leading-[16.8px] tracking-tight pb-1.5">
                    /month
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="flex flex-col gap-3 pl-4 pr-0 pt-2 pb-8 mt-4">
                {tier.features.map((feature, index) => (
                  <div key={index} className="flex gap-2 items-start">
                    <div className="flex items-center justify-center shrink-0 w-6 h-6">
                      <Image
                        src={checkIcon}
                        alt=""
                        width={24}
                        height={24}
                        unoptimized
                      />
                    </div>
                    <p className="font-medium leading-6 text-white text-lg tracking-tight flex-1">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex items-center justify-center w-full mt-auto">
                <a
                  href="https://cal.com/xelaris/trial-class"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#fefc00] flex items-center justify-center overflow-hidden py-3 px-0 rounded-xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] w-full"
                >
                  <span className="font-medium text-[#161a20] text-lg leading-6 tracking-[-0.4px] text-center">
                    {selectedProgram === "advanced"
                      ? "Book A Trial Class →"
                      : "Enroll Now →"}
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout - 4 Cards in a Row */}
      <div className="hidden lg:flex lg:gap-4 lg:items-start lg:justify-center lg:w-full lg:max-w-[1200px]">
        {pricingTiers.map((tier) => (
          <div
            key={tier.id}
            style={{
              height: "-webkit-fill-available",
            }}
            className="flex-1 flex items-start justify-center overflow-hidden p-px rounded-tl-[32px] rounded-tr-[32px] rounded-bl-[20px] rounded-br-[20px] bg-gradient-to-br from-white/10 via-white/5 to-white/0"
          >
            <div
              style={{
                height: "-webkit-fill-available",
              }}
              className="bg-[#1c2026] flex flex-col p-2 rounded-tl-[32px] rounded-tr-[32px] rounded-bl-[20px] rounded-br-[20px] w-full"
            >
              {/* Price Section */}
              <div className="bg-[#12161c] flex flex-col gap-6 p-4 rounded-[24px]">
                {/* Session Type Badge */}
                <div className="flex items-center justify-center overflow-hidden p-px rounded-[24px] bg-gradient-to-br from-white via-white/10 to-white/0 w-full">
                  <div className="backdrop-blur-sm flex items-center justify-center px-3 py-1.5 rounded-[24px] shadow-[0px_4px_4px_0px_#fefc00] bg-gradient-to-br from-[#2c2e31] to-[#1e2024] w-full">
                    <p
                      className={`font-medium leading-5 text-white text-lg tracking-tight text-center ${
                        selectedProgram === "foundation"
                          ? "whitespace-pre-line"
                          : "whitespace-nowrap"
                      }`}
                    >
                      {tier.sessionType}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-end">
                  <h3 className="font-bold text-white text-[32px] leading-[38.4px] tracking-tight">
                    {tier.price}
                  </h3>
                  <span className="font-normal text-[#b0b0b0] text-sm leading-[16.8px] tracking-tight pb-1.5">
                    /month
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="flex flex-col gap-3 pl-4 pr-0 pt-2 pb-8 mt-4">
                {tier.features.map((feature, index) => (
                  <div key={index} className="flex gap-2 items-start">
                    <div className="flex items-center justify-center shrink-0 w-5 h-5">
                      <Image
                        src={checkIcon}
                        alt=""
                        width={24}
                        height={24}
                        unoptimized
                      />
                    </div>
                    <p className="font-medium leading-6 text-white text-lg tracking-tight flex-1">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex items-center justify-center w-full mt-auto">
                <a
                  href="https://cal.com/xelaris/trial-class"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#fefc00] flex items-center justify-center overflow-hidden py-3 px-0 rounded-xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] w-full"
                >
                  <span className="font-medium text-[#161a20] text-lg leading-6 tracking-[-0.4px] text-center">
                    {selectedProgram === "advanced"
                      ? "Book A Trial Class →"
                      : "Enroll Now →"}
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
