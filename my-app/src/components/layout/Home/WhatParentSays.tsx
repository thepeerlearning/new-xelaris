'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

interface Testimonial {
  id: string;
  firstName: string;
  lastName: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    firstName: 'KATERYNA',
    lastName: 'Goncharov',
    image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1766824583/f532a862057955a00327410cf2e728d009c74b48_wbl4me.png',
    quote: "My experience with my son's experience \nat Xelaris! As a parent, I find the organization \nto be impeccable, making everything \neasy and straightforward. My 11-year-old \nis absolutely engaged and progressing \nremarkably with his coding skills.",
  },
  {
    id: '2',
    firstName: 'ALICE',
    lastName: 'Richardson',
    image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1766824584/c20522e647fdefa17222d7ba52f436bf217c4be8_go9wab.jpg',
    quote: "My child has been learning to code at Xelaris and the progress is amazing. The mentors are patient and knowledgeable, and my daughter loves every session.",
  },
  {
    id: '3',
    firstName: 'MARIO DE',
    lastName: 'Barros',
    image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1766824565/68ec954d7480a2ce512b8b490cbede3d787878c0_mz7pqb.png',
    quote: "Xelaris has transformed my son's interest in gaming into a passion for building games. The personalized approach is exactly what he needed.",
  },
  {
    id: '4',
    firstName: 'MOHAMMED',
    lastName: 'Gwandu',
    image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1766824556/455e78b605f6e488ff8181c70f8ca4645ec6365d_ypbxny.jpg',
    quote: "As a parent, seeing my child build real projects is incredible. Xelaris makes coding accessible and fun while maintaining high standards.",
  },
];

export function WhatParentSays() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number>(0); // Default to first card (index 0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    // Initialize selected index after mount
    const initIndex = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    requestAnimationFrame(initIndex);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:pt-6 xl:pt-8 2xl:pt-10 lg:pb-16 xl:pb-24 2xl:pb-32 w-full">
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8 2xl:gap-10 items-center w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-4 sm:px-6 md:px-8 lg:px-4 xl:px-8 2xl:px-0">
        {/* Header Section */}
        <div className="flex flex-col gap-0 items-center w-full">
          <div className="flex flex-col gap-2 sm:gap-4 md:gap-5 items-center justify-center w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
            {/* Title */}
            <div className="flex flex-col items-center w-full lg:pt-0">
              <h2 className="font-medium text-white text-3xl md:text-5xl   lg:text-6xl leading-tight text-center tracking-tight">
                What Parents Say
              </h2>
            </div>

            {/* Description */}
            <div className="flex flex-col items-center justify-center max-w-sm md:max-w-md lg:max-w-full w-full">
              <p className="font-medium leading-relaxed text-[#b0b0b0] text-base sm:text-lg md:text-lg text-center tracking-tight">
                Real feedback from parents whose children have learned to code, and built projects they&apos;re proud of
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="flex lg:hidden flex-col items-start w-full overflow-hidden">
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-5 md:gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_auto] min-w-0 w-80 sm:w-96 md:w-[28rem] aspect-[4/5] rounded-lg relative overflow-hidden"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.firstName} ${testimonial.lastName}`}
                      fill
                      className="object-cover object-center"
                      unoptimized
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 rounded-lg"
                    style={{
                      backgroundImage:
                        'linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0) 100%)',
                    }}
                  />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-4 sm:p-5 md:p-6 pb-10 sm:pb-12 md:pb-14 pt-4 sm:pt-5 md:pt-6">
                    {/* Name Section */}
                    <div className="flex flex-col items-start pb-3 sm:pb-4">
                      <div className="flex flex-col items-start w-full">
                        <h3 className="font-bold text-white text-lg sm:text-xl md:text-2xl leading-tight tracking-wide uppercase w-full">
                          {testimonial.firstName}
                        </h3>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <p className="font-bold text-white text-xs sm:text-sm leading-normal w-full">
                          {testimonial.lastName}
                        </p>
                      </div>
                    </div>

                    {/* Quote Section */}
                    <div className="flex items-end w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="font-extralight text-white text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-wrap w-full">
                          {testimonial.quote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout - Static 4 Cards */}
        <div className="hidden lg:flex items-start justify-between w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl gap-3 xl:gap-4 2xl:gap-5 h-[500px] xl:h-[550px] 2xl:h-[635px]">
          {testimonials.map((testimonial, index) => {
            const isOpen = hoveredIndex === index;
            return (
              <div
                key={testimonial.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(0)}
                className={`relative h-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen
                    ? 'flex-[1.8] xl:flex-[1.85] 2xl:flex-[1.9]'
                    : 'flex-1'
                }`}
              >
              <Image
                src={testimonial.image}
                alt={`${testimonial.firstName} ${testimonial.lastName}`}
                fill
                className="object-cover"
                unoptimized
              />
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                    backgroundImage: isOpen
                      ? 'linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0) 100%)'
                      : 'linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 25%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)',
                }}
              />
                
                {/* Open State - Full Content */}
                {isOpen && (
                  <div className="absolute bottom-6 xl:bottom-8 2xl:bottom-10 left-4 xl:left-6 2xl:left-8 right-4 xl:right-6 2xl:right-8 flex flex-col gap-3 xl:gap-4 2xl:gap-5 transition-opacity duration-300">
                    <div className="flex flex-col">
                      <h3 className="font-bold text-white text-2xl xl:text-3xl 2xl:text-4xl leading-tight tracking-[0.15rem] xl:tracking-[0.2rem] 2xl:tracking-[0.25rem] uppercase">
                        {testimonial.firstName}
                      </h3>
                      <p className="font-bold text-white text-lg xl:text-lg 2xl:text-xl leading-normal">
                        {testimonial.lastName}
                      </p>
                    </div>
                    <p className="font-light text-white text-sm xl:text-base 2xl:text-lg leading-relaxed whitespace-pre-wrap">
                      {testimonial.quote}
                    </p>
                  </div>
                )}

                {/* Closed State - Rotated Text */}
                {!isOpen && (
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center transition-opacity duration-300">
                <div className="transform -rotate-90 whitespace-nowrap origin-center">
                  <div className="flex flex-col items-start text-left">
                    <h3 className="font-bold text-white text-2xl xl:text-3xl 2xl:text-4xl leading-tight tracking-[0.15rem] xl:tracking-[0.2rem] 2xl:tracking-[0.25rem] uppercase text-left">
                      {testimonial.firstName}
                    </h3>
                    <p className="font-normal text-white text-lg xl:text-xl 2xl:text-2xl leading-normal text-left">
                      {testimonial.lastName}
                    </p>
                  </div>
                </div>
              </div>
                )}
            </div>
            );
          })}
        </div>

        {/* Navigation - Mobile: Dots, Desktop: Arrows + Dots */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 w-full">
          {/* Left Arrow - Desktop Only */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="hidden lg:flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-white" />
          </button>

          {/* Dots */}
          <div className="backdrop-blur-sm bg-black/20 flex items-center justify-center overflow-hidden rounded-full lg:rounded-none lg:bg-transparent lg:backdrop-blur-none px-2 sm:px-2.5 md:px-3 lg:px-0 py-2 sm:py-2.5 md:py-3 lg:py-0 gap-1.5 sm:gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className="flex items-center justify-center"
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <div
                  className={`rounded-full shrink-0 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 transition-colors ${
                    selectedIndex === index
                      ? 'bg-[#fefc00]'
                      : 'bg-white opacity-50 lg:border lg:border-white'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right Arrow - Desktop Only */}
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="hidden lg:flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}