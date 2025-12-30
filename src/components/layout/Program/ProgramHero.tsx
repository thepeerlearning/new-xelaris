'use client';
import Button from "@/components/ui/Button";
import { InfoButtons } from "@/components/ui/buttons/InfoButton";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProgramHeroProps {
  title: string;
  description: string;
  image: string;
  onBookTrial: () => void;
  onSignUp: () => void;
}

export function ProgramHero({ title, description, image }: ProgramHeroProps) {
  // Split description into two paragraphs at "Once students complete"
  const descriptionParts = description.split('Once students complete');
  const firstParagraph = descriptionParts[0].trim();
  const secondParagraph = descriptionParts[1] ? `Once students complete${descriptionParts[1]}` : '';

  return (
    <div className="flex flex-col items-start w-full pt-4 md:pt-8 lg:pt-10 px-4 lg:px-20  ">
      {/* Mobile Layout */}
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 items-center justify-center  pb-8 sm:pb-10 w-full lg:hidden">
        <div className="flex flex-col items-start pb-0 pt-8 sm:pt-12 md:pt-16 px-0 w-full">
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 items-start w-full">
            {/* Heading and Description */}
            <div className="flex flex-col gap-2 sm:gap-3 items-start justify-center w-full">
              <div className="flex flex-col items-start w-full">
                <h2 className="flex flex-col font-medium justify-center leading-tight text-white text-3xl sm:text-4xl md:text-5xl tracking-tight">
                  <span>{title}</span>
                </h2>

                <div className="py-3 sm:py-4">
                  <InfoButtons/>
                </div>
              </div>
              <div className="flex flex-col font-normal items-start leading-relaxed w-full mt-2">
                <p className="leading-relaxed text-gray-400 text-base sm:text-lg mb-4">
                  {description}
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 items-center justify-center w-full md:w-3/4">
              <a 
                href="https://cal.com/xelaris/trial-class"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full "
              >
                <Button 
                  type="colored" 
                  className="w-full md:w-auto !rounded-xl"
                >
                  Book A Trial Class <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <Link href="/auth/signup" className="w-full md:w-auto">
              <Button 
                type="uncolored" 
                className="w-full md:w-auto !rounded-xl"
              >    
                Sign up
              </Button>
              </Link>
            </div>
            <div className="flex flex-col items-start overflow-hidden w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-lg w-full">
                <div className="h-auto w-full bg-slate-800 rounded-lg aspect-video flex items-center justify-center">
                <div className="aspect-[4/3] xl:aspect-[5/4] 2xl:aspect-[3/2] relative rounded-lg xl:rounded-xl 2xl:rounded-2xl w-full overflow-hidden">
                <Image 
                  src={image} 
                  alt={title}
                  fill
                  className="object-cover object-center rounded-lg xl:rounded-xl 2xl:rounded-2xl"
                  unoptimized
                />
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:pb-16 xl:pb-24 lg:px-4 xl:px-8 2xl:px-16 lg:pt-6 xl:pt-8 2xl:pt-10 lg:w-full">
        <div className="flex gap-4 xl:gap-6 2xl:gap-8 items-center justify-between w-full ">
          {/* Left Text Stack */}
          <div className="flex flex-col flex-1 max-w-md xl:max-w-lg 2xl:max-w-xl pt-6 xl:pt-8 2xl:pt-12">
            {/* Title and Badges */}
            <div className="flex flex-col items-start mb-8 xl:mb-12 2xl:mb-16">
              <h1 className="font-medium text-white text-3xl sm:text-4xl md:text-6xl     2xl:text-6xl leading-tight xl:leading-tight 2xl:leading-tight tracking-tight xl:tracking-tight 2xl:tracking-tighter mb-4 xl:mb-6">
                {title.split(' ').map((word, idx) => (
                  <span key={idx} className={idx > 0 ? 'block' : ''}>
                    {word}
                    {idx === 0 && <br />}
                  </span>
                ))}
              </h1>
              
              {/* Badges */}
              <div 
                className="flex gap-2 xl:gap-2.5 2xl:gap-3 items-center justify-center overflow-hidden p-1 xl:p-1.5 rounded-lg xl:rounded-xl border border-white/20"
                style={{
                  backgroundImage: 'linear-gradient(118.13deg, rgba(255, 255, 255, 0.1) 74%, rgba(255, 255, 255, 0.02) 100%)'
                }}
              >
                <div className="bg-[rgba(136,136,136,0.5)] flex items-center justify-center overflow-hidden px-2 xl:px-2.5 2xl:px-3 py-1 xl:py-1.5 rounded-md xl:rounded-lg">
                  <span className="font-normal text-white text-sm md:text-base 2xl:text-lg leading-tight tracking-tight whitespace-nowrap">
                    Ages 7-10
                  </span>
                </div>
                <div className="bg-[rgba(136,136,136,0.5)] flex items-center justify-center overflow-hidden px-2 xl:px-2.5 2xl:px-3 py-1 xl:py-1.5 rounded-md xl:rounded-lg">
                  <span className="font-normal text-white text-sm md:text-base 2xl:text-lg leading-tight tracking-tight whitespace-nowrap">
                    Online 1:1
                  </span>
                </div>
                <div className="bg-[rgba(136,136,136,0.5)] flex items-center justify-center overflow-hidden px-2 xl:px-2.5 2xl:px-3 py-1 xl:py-1.5 rounded-md xl:rounded-lg">
                  <span className="font-normal text-white text-sm md:text-base 2xl:text-lg leading-tight tracking-tight whitespace-nowrap">
                    Self-Paced
                  </span>
                </div>
              </div>
            </div>

            {/* Description and CTAs */}
            <div className="flex flex-col items-start w-full">
              <div className="flex flex-col font-normal items-start text-[#b0b0b0] text-lg xl:text-lg 2xl:text-xl leading-relaxed xl:leading-relaxed tracking-tight w-full mb-6 xl:mb-8">
                <p className="mb-0 whitespace-pre-wrap">
                  {firstParagraph}
                </p>
                {secondParagraph && (
                  <p className="whitespace-pre-wrap">
                    {secondParagraph}
                  </p>
                )}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex gap-3 xl:gap-4 2xl:gap-5 items-center flex-wrap">
                <a 
                  href="https://cal.com/xelaris/trial-class"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#fefc00] flex items-center justify-center overflow-hidden px-4 xl:px-6 2xl:px-8 py-2 xl:py-2.5 2xl:py-3 rounded-lg xl:rounded-xl 2xl:rounded-2xl shadow-[inset_2px_2px_8px_0px_rgba(255,255,255,0.25),inset_-2px_-2px_7px_0px_rgba(0,0,0,0.15)]">
                    <span className="font-medium text-[#161a20] text-sm md:text-base 2xl:text-lg text-center tracking-tight leading-normal whitespace-nowrap">
                      Book A Trial Class →
                    </span>
                  </button>
                </a>
                <Link href="/auth/signup">
                <button className="flex items-center justify-center overflow-hidden px-4 xl:px-6 2xl:px-8 py-2 xl:py-2.5 2xl:py-3 rounded-lg xl:rounded-xl 2xl:rounded-2xl border border-white">
                  <span className="font-medium text-white text-sm md:text-base 2xl:text-lg text-center tracking-tight leading-normal whitespace-nowrap">
                    Sign up
                  </span>
                </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="flex-1 max-w-md xl:max-w-lg 2xl:max-w-xl">
            <div className="bg-[#15161d] flex flex-col items-center p-1 xl:p-1.5 2xl:p-2 rounded-xl xl:rounded-2xl 2xl:rounded-3xl border border-[#2b2b2b]">
              <div className="aspect-[4/3] xl:aspect-[5/4] 2xl:aspect-[3/2] relative rounded-lg xl:rounded-xl 2xl:rounded-2xl w-full overflow-hidden">
                <Image 
                  src={image} 
                  alt={title}
                  fill
                  className="object-cover object-center rounded-lg xl:rounded-xl 2xl:rounded-2xl"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

