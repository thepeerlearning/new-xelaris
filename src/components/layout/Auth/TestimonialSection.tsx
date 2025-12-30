'use client';
import { Microsoft } from '@/components/assets/Microsoft';
import { Netflix } from '@/components/assets/Netflix';
import { Shopify } from '@/components/assets/Shopify';
import { SpringBoard } from '@/components/assets/SpringBoard';
import { Synthesis } from '@/components/assets/Synthesis';
import { Tesla } from '@/components/assets/Tesla';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';


const testimonials = [
  {
    id: 1,
    location: 'Indonesia',
    text: "My son loves his coding classes at Xelaris. His instructor is an excellent coding teacher that always pushes him to learn more and reach his full potential! He has a very wide range of experience with many coding languages and excels in teaching all of them.",
    additionalText: "Beyond the coding skills, we've seen a huge change in his confidence and presentation skills.",
    name: 'Alice Richardson',
    image:'https://res.cloudinary.com/seunsanyaa/image/upload/v1766824597/62a14eb63abf4943fe49b673225ecdb2d1e884d5_pbubho.png',
  },
  {
    id: 2,
    location: 'Brazil',
    text: 'Sam and the team are tremendously thoughtful and caring with my kid. They support and push him to strive which is remarkable. I really thank them for the passion and dedication they put into their work.',
    additionalText: '',
    name: 'Mario De Barros',
    image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1766824575/68ec954d7480a2ce512b8b490cbede3d787878c0_xm72bm.png',
  },
  {
    id: 3,
    location: 'Canada',
    text: 'My experience with my son\'s experience at Xelaris! As a parent, I find the organization to be impeccable, making everything easy and straightforward. My 11-year-old is absolutely engaged and progressing remarkably with his coding skills.',
    additionalText: 'I can\'t say enough about Sam, my son\'s educator. The bond he has formed with him is incredible, he is engaging, supportive, and knows just how to challenge him without overwhelming him.  It\'s a perfect balance that keeps my son excited about learning..',
    name: 'Kateryna',
    image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1766824583/f532a862057955a00327410cf2e728d009c74b48_wbl4me.png',
  },
  {
    id: 4,
    location: 'Australia',
    text: 'My daughter actually looks forward to her coding classes, which is saying something because she usually hates being on the computer for school. Amelia is great and really patient with her. And I love that I get notes after every class so I know what they worked on.',
    additionalText: '',
    name: 'Mohammed',
    image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1766824556/455e78b605f6e488ff8181c70f8ca4645ec6365d_ypbxny.jpg',
  },
];

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="flex flex-col h-full w-full">
      {/* Testimonial Card */}
      <div className="flex flex-col items-start px-4 md:px-6 lg:px-7 pt-0 pb-4 md:pb-6 lg:pb-7 flex-1 max-h-[40rem]">
        <div className="flex flex-col items-start justify-center w-full h-full">
          <div className="flex flex-col items-start p-px rounded-[28px] md:rounded-[34px] w-full h-full bg-gradient-to-br from-white/20 to-white/0">
            <div className="bg-[#101317] flex flex-col items-center justify-center p-1.5 md:p-2 rounded-[28px] md:rounded-[34px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] w-full h-full">
              <div className="flex items-center justify-center p-px rounded-[24px] md:rounded-[28px] w-full h-full bg-gradient-to-br from-white/20 to-white/0">
                <div className="bg-[#242930] flex flex-col md:flex-row items-stretch rounded-[24px] md:rounded-[28px] w-full h-full shadow-[inset_-5px_-9px_11px_0px_rgba(0,0,0,0.15),inset_4px_4px_4px_0px_rgba(255,255,255,0.03)]">
                  {/* Left Content */}
                  <div className="flex flex-col gap-3 md:gap-4 justify-between items-start p-4 md:p-5 lg:p-6 rounded-[24px] md:rounded-[28px] flex-1 min-w-0">
                    <div className="flex flex-col gap-2 md:gap-3 items-start w-full">
                      {/* Location */}
                      <div className="flex flex-col items-start justify-center w-full">
                        <h3 className="font-bold text-2xl md:text-[28px] lg:text-[32px] text-white leading-tight md:leading-[30px] tracking-[-1px]">
                          {currentTestimonial.location}
                        </h3>
                      </div>

                      {/* Main Testimonial Text */}
                      <div className="flex flex-col items-start justify-center w-full">
                        <p className="font-medium text-sm md:text-base text-white leading-relaxed md:leading-[22px] tracking-[-0.4px]">
                          {currentTestimonial.text}
                        </p>
                      </div>

                      {/* Additional Text */}
                      {currentTestimonial.additionalText && (
                        <div className="flex flex-col items-start justify-center w-full">
                          <p className="font-medium text-sm md:text-base text-white leading-relaxed md:leading-[22px] tracking-[-0.4px]">
                            {currentTestimonial.additionalText}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Name */}
                    <div className="flex items-center w-full mt-2 md:mt-20">
                      <div className="flex flex-col items-start w-full">
                        <p className="font-normal text-lg md:text-xl lg:text-[22px] text-[#fefc00] leading-tight md:leading-[10.6px]">
                          {currentTestimonial.name}
                        </p>
                      </div>
                    </div>

                    {/* Navigator */}
                    <div className="flex gap-2 md:gap-2.5 h-6 items-center justify-center w-full pt-3 md:pt-4">
                      <button onClick={handlePrevious} className="flex items-center justify-center">
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </button>

                      <div className="flex gap-1.5 items-center justify-center p-1">
                        {testimonials.map((_, index) => (
                          <div key={index} className="w-2.5 h-2.5 rounded-full overflow-hidden">
                            <div
                              className={`w-full h-full rounded-full border ${
                                index === currentIndex
                                  ? 'bg-white border-[#fefc00]'
                                  : 'bg-transparent border-white'
                              }`}
                            />
                          </div>
                        ))}
                      </div>

                      <button onClick={handleNext} className="flex items-center justify-center">
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="flex items-center justify-center py-4 md:py-6 flex-shrink-0 border-t md:border-t-0 md:border-l border-[#5b5f64] md:px-4 lg:px-6">
                    <div className="flex items-center justify-center w-full md:w-auto h-[200px] md:h-full">
                      <div className="h-full w-full md:min-w-[200px] md:max-w-[220px] lg:min-w-[239px] lg:max-w-[250px] rounded-xl overflow-hidden relative">
                        <Image
                          src={currentTestimonial.image}
                          alt={currentTestimonial.name}
                          fill
                          className="object-cover rounded-xl"
                          unoptimized
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 220px, 250px"
                          priority={currentIndex === 0}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Logos Section */}
      <div className="flex flex-col items-start pb-0 pt-8 md:pt-12 lg:pt-16 px-0 w-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex gap-0 h-auto md:h-[112px] items-start max-w-full md:max-w-[1152px] w-full px-4 md:px-0">
            <div className="flex flex-col gap-3 md:gap-4 h-full items-start w-full">
              {/* Trusted By Parents */}
              <div className="flex flex-col items-center opacity-85 w-full">
                <p className="font-medium text-xs text-center text-white tracking-[0.6px] uppercase leading-4">
                  TRUSTED BY PARENTS WORKING AT
                </p>
              </div>

              {/* Company Logos */}
              <div className="flex  gap-4 md:gap-6 items-center justify-center max-w-full  w-full">
                <div className="h-[24px] md:h-[27px] opacity-75 flex items-center">
                  <Netflix />
                </div>
                <div className="h-[20px] md:h-[22px] opacity-75 flex items-center">
                  <Tesla />
                </div>
                <div className="h-[24px] md:h-[27px] opacity-75 flex items-center">
                  <Shopify />
                </div>
                <div className="h-[20px] md:h-[22px] opacity-75 flex items-center">
                  <Microsoft />
                </div>
              </div>
            </div>
          </div>

          {/* Founded By Section */}
          <div className="flex flex-col h-auto md:h-9 items-center opacity-85 w-full mt-6 md:mt-0">
            <p className="font-medium text-xs text-center text-white tracking-[0.6px] uppercase leading-4 w-full max-w-[294px] px-4 md:px-0">
              FOUNDED BY FORMER TECH EDUCATORS FROM
            </p>
          </div>

          {/* Founder Logos */}
          <div className="grid grid-cols-2 grid-rows-1 gap-4 md:gap-[17px] h-auto md:h-[22.018px] w-full max-w-[293.996px] mt-3 md:mt-0 px-4 md:px-0">
            <div className="flex items-start justify-start">
              <div className="h-[18px] md:h-[20.245px] w-[120px] md:w-[141.3px]">
                <Synthesis />
              </div>
            </div>
            <div className="flex items-start justify-end">
              <div className="h-[19px] md:h-[21.018px] w-[115px] md:w-[135.149px]">
                <SpringBoard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

