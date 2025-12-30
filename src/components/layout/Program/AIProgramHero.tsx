'use client';
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Image from 'next/image';

interface AIProgramHeroProps {
  title: string;
  description: string;
  prerequisites: string;
  image: string;
  onApply: () => void;
}

export function AIProgramHero({ title, description, prerequisites, image, onApply }: AIProgramHeroProps) {
  return (
    <div className="flex flex-col items-start w-full md:pt-10">
      {/* Mobile Layout */}
      <div className="flex flex-col gap-10 items-center justify-center px-4 pb-10 w-full lg:hidden">
        <div className="flex flex-col items-start pb-0 pt-16 px-0 w-full">
          <div className="flex flex-col gap-10 items-start w-full">
            {/* Heading and Badges */}
            <div className="flex flex-col gap-2 items-start justify-center w-full">
              <div className="flex flex-col items-start w-full">
                <h2 className="flex flex-col font-medium justify-center leading-10 text-white text-4xl tracking-tight">
                  <span>{title}</span>
                </h2>

                {/* Badges */}
                <div className="py-4">
                  <div className="flex gap-2 items-center justify-center overflow-clip p-1 rounded-[10px] bg-gradient-to-br from-white/10 via-white/10 to-white/2 border border-white/20">
                    <div className="bg-gray-500/50 flex gap-0 items-center justify-center overflow-clip px-1.5 py-0.5 rounded-md">
                      <div className="flex flex-col items-start justify-center relative shrink-0">
                        <div className="flex flex-col items-start relative shrink-0 w-full">
                          <div className="flex flex-col font-normal justify-center leading-4 relative shrink-0 text-sm text-white tracking-tight whitespace-nowrap">
                            <p className="leading-[18px]">High School Students</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-500/50 flex gap-0 items-center justify-center overflow-clip px-1.5 py-0.5 rounded-md">
                      <div className="flex flex-col items-start justify-center relative shrink-0">
                        <div className="flex flex-col items-start relative shrink-0 w-full">
                          <div className="flex flex-col font-normal justify-center leading-4 relative shrink-0 text-sm text-white tracking-tight whitespace-nowrap">
                            <p className="leading-[18px]">Online 1:1</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-500/50 flex gap-0 items-center justify-center overflow-clip px-1.5 py-0.5 rounded-md">
                      <div className="flex flex-col items-start justify-center relative shrink-0">
                        <div className="flex flex-col items-start relative shrink-0 w-full">
                          <div className="flex flex-col font-normal justify-center leading-4 relative shrink-0 text-sm text-white tracking-tight whitespace-nowrap">
                            <p className="leading-[18px]">Self-paced</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className="flex flex-col font-normal items-start leading-5 w-full mt-2">
                <p className="leading-5 text-gray-400 text-lg mb-4">
                  {description}
                </p>
                <p className="leading-5 text-gray-400 text-lg">
                  <span className="text-[#fefc00]">Prerequisites:</span>
                  <span> {prerequisites}</span>
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col gap-3 items-center justify-center w-[70%]">
              <Button 
                type="colored" 
                onClick={onApply}
                className="w-full sm:w-auto !rounded-xl"
              >
                Apply For Consideration <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Image */}
            <div className="flex flex-col items-start overflow-hidden w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-lg w-full">
                <div className="h-auto w-full bg-slate-800 rounded-lg aspect-video flex items-center justify-center relative">
                  <Image 
                    src={image} 
                    alt={title} 
                    fill 
                    className="object-cover object-center rounded-lg" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:flex-col lg:items-start lg:pb-32 lg:pl-[121px] lg:pr-[90px] lg:pt-[35px] lg:w-full">
        <div className="flex gap-4 items-center justify-center max-w-[1200px] w-[1200px]">
          {/* Left Text Stack */}
          <div className="flex flex-col w-[519px] pt-[46px]">
            {/* Title and Badges */}
            <div className="flex flex-col items-start max-w-[472px] mb-[65px]">
              <h1 className="font-medium text-white text-[60px] leading-[66px] tracking-[-2px] mb-4">
                {title}
              </h1>
              
              {/* Badges */}
              <div 
                className="flex gap-[9.99px] h-[37px] items-center justify-center overflow-hidden p-1 rounded-[10px] border border-[rgba(255,255,255,0.2)]"
                style={{
                  backgroundImage: 'linear-gradient(118.13deg, rgba(255, 255, 255, 0.1) 74%, rgba(255, 255, 255, 0.02) 100%)'
                }}
              >
                <div className="bg-[rgba(136,136,136,0.5)] flex h-[27px] items-center justify-center overflow-hidden px-[6px] py-[2px] rounded-[6px]">
                  <span className="font-normal text-white text-[18px] leading-[18px] tracking-[-0.4px] whitespace-nowrap">
                    High School Students
                  </span>
                </div>
                <div className="bg-[rgba(136,136,136,0.5)] flex h-[27px] items-center justify-center overflow-hidden px-[6px] py-[2px] rounded-[6px]">
                  <span className="font-normal text-white text-[18px] leading-[18px] tracking-[-0.4px] whitespace-nowrap">
                    Online 1:1
                  </span>
                </div>
                <div className="bg-[rgba(136,136,136,0.5)] flex h-[27px] items-center justify-center overflow-hidden px-[6px] py-[2px] rounded-[6px]">
                  <span className="font-normal text-white text-[18px] leading-[18px] tracking-[-0.4px] whitespace-nowrap">
                    Self-paced
                  </span>
                </div>
              </div>
            </div>

            {/* Description, Prerequisites and CTA */}
            <div className="flex flex-col items-start w-[515px]">
              <div className="flex flex-col font-normal items-start text-[#b0b0b0] text-[18px] leading-[25px] tracking-[-0.4px] w-full mb-4">
                <p className="whitespace-pre-wrap">
                  {description}
                </p>
              </div>

              {/* Prerequisites */}
              <div className="flex flex-col font-normal items-start text-[#b0b0b0] text-[18px] leading-[25px] tracking-[-0.4px] w-full mb-6">
                <p>
                  <span className="text-[#fefc00]">Prerequisites:</span>
                  <span> {prerequisites}</span>
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="flex items-center h-[52px]">
                <div className="bg-[rgba(34,98,225,0)] flex items-center justify-center p-[2px] rounded-[18px]">
                  <div className="bg-[#1e1f2d] flex items-center justify-center p-[2px] rounded-[18px]">
                    <button 
                      onClick={onApply}
                      className="bg-[#eaee13] flex items-center justify-center overflow-hidden px-12 py-3 rounded-[16px] shadow-[inset_2px_2px_8px_0px_rgba(255,255,255,0.25),inset_-2px_-2px_7px_0px_rgba(0,0,0,0.15)]"
                    >
                      <span className="font-medium text-[#161a20] text-lg text-center tracking-[-0.4px] leading-[24px] whitespace-nowrap">
                        Apply For Consideration →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="w-[592px]">
            <div className="bg-[#15161d] flex flex-col items-center p-1 rounded-[20px] border border-[#2b2b2b]">
              <div className="h-[506.301px] relative rounded-[16px] w-full overflow-hidden">
                <Image 
                  src={image} 
                  alt={title}
                  fill
                  className="object-cover object-center rounded-[16px]"
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

