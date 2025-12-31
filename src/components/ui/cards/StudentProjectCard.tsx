import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Button from "../Button";

interface StudentProjectCardProps {
  projectImage: string;
  title: string;
  description: string;
  features: string[];
  builtBy: string;
  builtWith: string;
  onViewProject?: () => void;
}

export const StudentProjectCard = ({
  projectImage,
  title,
  description,
  features,
  builtBy,
  builtWith,
  onViewProject,
}: StudentProjectCardProps) => {
  return (
    <div className="relative w-full">
      {/* Outer container with gradient border */}
      <div className="relative overflow-hidden rounded-[2.125rem]">
        {/* Outer stroke with gradient */}
        <div
          className="relative rounded-[2.125rem]"
          style={{
            backgroundImage: "linear-gradient(108deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 56%)"
          }}
        >
          {/* Outer card background */}
          <div className="bg-[#1b1f24] rounded-[2.125rem] p-1">
            <div className="flex flex-col gap-6 items-center pb-6 pt-2 px-2 w-full">
              {/* Project Image */}
              <div className="flex items-center justify-center min-h-[25.5rem] overflow-hidden p-px relative rounded-[1.75rem] w-full">
                <Image
                  alt={title}
                  className="object-cover object-center pointer-events-none rounded-[1.75rem]"
                  src={projectImage}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                />
                <div className="absolute inset-0 pointer-events-none shadow-[inset_-0.3125rem_-0.5625rem_0.6875rem_0_rgba(0,0,0,0.15),inset_0.25rem_0.25rem_0.25rem_0_rgba(255,255,255,0.03)] rounded-[1.75rem]" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1.5 items-start px-3 py-0 w-full">
                {/* Title */}
                <div className="flex flex-col items-start relative w-full">
                  <h3 className="font-bold text-white text-xl leading-[1.55rem] tracking-[-0.015rem] whitespace-pre-wrap">
                    {title}
                  </h3>
                </div>

                {/* Description and Features */}
                <div className="flex flex-col gap-3 items-start relative w-full pt-4">
                  {/* Description */}
                  <p className="font-normal text-white text-xs leading-[1.03rem] whitespace-pre-wrap">
                    {description}
                  </p>

                  {/* Features List */}
                  <div className="flex flex-col items-start relative w-full">
                    <p className="font-normal text-white text-xs leading-[1.03rem] mb-0 whitespace-pre-wrap">
                      Users can:
                    </p>
                    <ul className="list-disc ms-[1.125rem] mt-0 space-y-0">
                      {features.map((feature, index) => (
                        <li key={index} className="font-normal text-white text-sm leading-[1.03rem] mb-0">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* View Project Button */}
                  <div className="flex  relative w-full mt-2">
                    <Button
                      type="colored"
                      onClick={onViewProject}
                      className="w-full sm:w-auto"
                    >
                      View Project <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Built By/With */}
                <div className="flex flex-col items-start relative w-full pt-4">
                  <p className="font-medium text-[#d8e100] text-sm leading-[1.3rem] tracking-[-0.01rem]">
                    <span>Built by: </span>
                    <span className="text-white">{builtBy} </span>
                    <span>| Built with: </span>
                    <span className="text-white">{builtWith}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

