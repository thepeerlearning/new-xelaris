'use client';
import { TrialClassCard } from "@/components/ui/cards/TrialClassCard";
import { useRouter } from "next/navigation";

const foundationImage = "https://res.cloudinary.com/seunsanyaa/image/upload/v1766823281/or6XD584AhJWFCfXx1bfHMhY2qw.png_xzuzpv.png";
const intermediateImage = "https://res.cloudinary.com/seunsanyaa/image/upload/v1766823256/or6XD584AhJWFCfXx1bfHMhY2qw.png_1_jd4i7h.png";
const advancedImage = "https://res.cloudinary.com/seunsanyaa/image/upload/v1766823252/or6XD584AhJWFCfXx1bfHMhY2qw.png_2_vqqqas.png";

export function OurProgram(){
    const router = useRouter();
    
    const programs = [
      {
        image: foundationImage,
        title: "Foundation",
        ageRange: "Ages 7-10",
        description: "Your child learns the basics of coding through Scratch and python turtle, then chooses a path: Web/app Development,  AI, or Game Development. They spend the next several months learning real tools and building working projects actual websites, games, or programs they can show off.",
        prerequisite: "Prerequisite: No coding experience required",
        titleSize: 'small' as const,
        path: "/programs/foundation",
      },
      {
        image: intermediateImage,
        title: "Intermediate",
        ageRange: "Ages 11-13",
        description: "Students go deep in their chosen path, learning professional tools like React for web, machine learning for AI, or Unity, Roblox for game development. They build 5 to 6 major projects complete applications, AI models, or published games. By the end, many can freelance or compete in hackathons.",
        prerequisite: "Prerequisite: Foundation or equivalent\ncoding experience",
        titleSize: 'large' as const,
        path: "/programs/intermediate",
      },
      {
        image: advancedImage,
        title: "Advanced",
        ageRange: "Ages 14-18",
        description: "For experienced students preparing for top CS programs or careers in tech. Through personalized 1:1 mentorship with professional engineers, students work on research-quality projects in software Development, AI or  Web3. Students graduate with portfolios that get them into IVY League or job offers before college.",
        prerequisite: "Prerequisite: Foundation or equivalent\ncoding experience",
        titleSize: 'large' as const,
        path: "",
      },
    ];

    return (
      <div className="flex items-start justify-center px-4 py-16 w-full">
        <div className="flex flex-[1_0_0] flex-col gap-6 items-center max-w-[75rem] w-full">
          {/* Header Section */}
          <div className="flex flex-col gap-6 items-center h-[9.0625rem] w-full">
            {/* Title */}
            <div className="flex flex-col items-center w-full">
              <h2 className="flex flex-col font-medium justify-center leading-[2.2rem] text-white text-4xl tracking-[-0.125rem] text-center whitespace-nowrap">
                Our Programs
              </h2>
            </div>

            {/* Description */}
            <div className="h-[4.875rem] max-w-[51.125rem] relative w-full">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[22.375rem]">
                <p className="font-medium leading-[1.225rem] text-[#b0b0b0] text-lg text-center tracking-[-0.025rem] whitespace-pre-wrap">
                  {`Students choose their path: Web Development, `}
                  {`Software & AI, or Game Development.  Then they work 1-on-1 with professional engineers to build real, meaningful projects.`}
                </p>
              </div>
            </div>
          </div>

          {/* Card Stack */}
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            {programs.map((program, index) => (
              <TrialClassCard
                key={index}
                image={program.image}
                title={program.title}
                ageRange={program.ageRange}
                description={program.description}
                prerequisite={program.prerequisite}
                titleSize={program.titleSize}
                onLearnMore={() => router.push(program.path)}
                onBookTrial={() => console.log(`Book trial for ${program.title}`)}
              />
            ))}
          </div>
        </div>
      </div>
    )
}