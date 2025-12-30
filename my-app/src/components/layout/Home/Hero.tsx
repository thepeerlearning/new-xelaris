'use client';
import { Microsoft } from "@/components/assets/Microsoft";
import { Netflix } from "@/components/assets/Netflix";
import { Shopify } from "@/components/assets/Shopify";
import { SpringBoard } from "@/components/assets/SpringBoard";
import { Synthesis } from "@/components/assets/Synthesis";
import { Tesla } from "@/components/assets/Tesla";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";



export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 lg:pt-28 py-5 px-4 w-full max-w-[1440px] mx-auto">
      {/* Main Heading */}
      <div className="flex flex-col items-center w-full">
        <h1 className="font-medium text-center  text-4xl md:text-5xl lg:text-[5rem] leading-[100%] lg:leading-[6rem] lg:tracking-[-4.5px]  md:px-0 text-white">
          For Ambitious Kids <br className="block lg:hidden" /> Who <br className="hidden lg:block" /> Want to Build, <br className="block lg:hidden" /> Not Just Learn
        </h1>
      </div>

      {/* Description */}
      <div className="h-auto relative w-full max-w-[45rem] mt-6">
        <p className="font-normal leading-6 text-center w-full mx-auto px-4 text-lg md:text-lg lg:text-[19px] lg:leading-[25px] text-[#F1F5F9]">
          Professional engineers mentor students ages 7-18 in 1-on-1 sessions. <br className="hidden md:block" />They build real products (web/mobile apps, AI models, and games)
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-[14.35px] items-center justify-center mt-10 w-full px-4 max-w-[300px] lg:max-w-none mx-auto">
        <a 
          href="/auth/signup"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button 
            type="colored" 
            className="w-full lg:w-50 flex items-center gap-1 lg:!px-12 lg:!py-3"
          >
          Enroll Now  <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4" />
          </Button>
        </a>
        {/* <Link href="/auth/signup">
          <Button 
            type="uncolored" 
            className="w-full lg:w-50 lg:!px-12 lg:!py-[10px]"
          >
            Sign up
          </Button>
        </Link> */}
      </div>

      {/* Trusted By Section */}
      <div className="flex flex-col items-center pb-0 pt-8 px-4 w-full mt-8 max-w-[1152px]">
        {/* Mobile Layout */}
        <div className="flex flex-col gap-8 items-start w-full lg:hidden">
          {/* Trusted By Parents */}
          <div className="flex flex-col gap-4 items-start w-full">
            <div className="flex flex-col items-center opacity-85 w-full">
              <p className="font-medium leading-4 text-white text-xs text-center tracking-wider uppercase w-full">
                TRUSTED BY PARENTS WORKING AT
              </p>
            </div>
            <div className="flex gap-6 items-center justify-center w-full">
              <div className="h-6 w-[80%] opacity-75 flex items-center justify-center">
                <Netflix />
              </div>
              <div className="h-5 w-[80%] opacity-75 flex items-center justify-center">
                <Tesla />
              </div>

              <div className="h-5 w-[80%] opacity-75 flex items-center justify-center">
                <Shopify />
              </div>
              {/* <div className="h-6 w-[80%] opacity-75 flex items-center justify-center">
                <Microsoft />
              </div> */}
            </div>
          </div>

          {/* Founded By Section */}
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col items-center opacity-85 w-full">
              <p className="font-medium leading-4 text-white text-xs text-center tracking-wider uppercase w-full">
                FOUNDED BY FORMER TECH EDUCATORS FROM
              </p>
            </div>
            <div className="flex gap-4 items-center justify-center w-full">
              <div className="h-5 w-full flex items-center justify-center">
                <Synthesis />
              </div>
              <div className="h-4 w-full flex items-center justify-center">
                <SpringBoard />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex  items-center justify-center w-full">
          {/* Trusted By Parents */}
          <div className="flex flex-col gap-4 items-center justify-center flex-1">
            <div className="flex flex-col items-center opacity-85 w-full">
              <p className="font-medium leading-4 text-white text-xs text-center tracking-[0.6px] uppercase whitespace-nowrap">
                TRUSTED BY PARENTS WORKING AT
              </p>
            </div>
            <div className="flex gap-6 items-center justify-center w-full">
              <div className="h-6 opacity-75 flex items-center justify-center">
                <Netflix />
              </div>
              <div className="h-5  opacity-75 flex items-center justify-center">
                <Shopify />
              </div>
              <div className="h-5  opacity-75 flex items-center justify-center">
                <Tesla />
              </div>
              <div className="h-6  opacity-75 flex items-center justify-center">
                <Microsoft />
              </div>
            </div>
          </div>

          {/* Founded By Section */}
          <div className="flex flex-col gap-4 items-center justify-center flex-1">
            <div className="flex flex-col items-center opacity-85 w-full">
              <p className="font-medium leading-4 text-white text-xs text-center tracking-[0.6px] uppercase">
                FOUNDED BY FORMER TECH EDUCATORS FROM
              </p>
            </div>
            <div className="flex gap-[17px] items-center w-full max-w-[294px]">
              <div className="h-[20.245px] flex items-center justify-center">
                <Synthesis />
              </div>
              <div className="h-[21.018px] flex items-center justify-center">
                <SpringBoard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}