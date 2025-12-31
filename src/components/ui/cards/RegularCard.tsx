interface RegularCardProps {
  title: string
  description: string
}

export const RegularCard = ({ title, description }: RegularCardProps) => {
  return (
    <div className="relative w-full">
      {/* Outer container with shadow */}
      <div className="relative overflow-hidden rounded-[2.125rem] shadow-[0_0.25rem_1.25rem_0_rgba(0,0,0,0.25)]">
        {/* Outer stroke with gradient */}
        <div
          className="relative rounded-[2.125rem] p-px"
          style={{
            backgroundImage:
              "linear-gradient(155.31deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 83%)",
          }}
        >
          {/* Outer card background */}
          <div className="bg-[#1b1f24] rounded-[2.125rem] p-2">
            {/* Inner stroke with gradient */}
            <div
              className="relative rounded-[1.75rem] p-px h-63"
              style={{
                backgroundImage:
                  "linear-gradient(155.12deg, rgba(255, 255, 255, 0.2) 3%, rgba(255, 255, 255, 0) 87%)",
              }}
            >
              {/* Inner card with gradient background */}
              <div className="relative h-full rounded-[1.75rem] bg-linear-to-b from-[#242930] to-[#13181f] pt-4.5 overflow-hidden">
                {/* Content */}
                <div className="flex flex-col gap-[0.44rem] h-full justify-center pb-4 px-4">
                  {/* Heading */}
                  <div className="flex flex-col items-start justify-center min-w-[19.125rem]">
                    <h3 className="font-bold text-[#eaee13] text-2xl leading-6 tracking-[-0.025rem]  whitespace-pre-wrap">
                      {title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="flex flex-col items-start justify-center pt-4">
                    <p className="font-normal text-[#b0b0b0] text-lg leading-5 tracking-[-0.025rem]  whitespace-pre-wrap">
                      {description}
                    </p>
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
