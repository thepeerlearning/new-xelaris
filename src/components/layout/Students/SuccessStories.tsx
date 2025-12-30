"use client"
import Button from "@/components/ui/Button"
import { ArrowRight, X } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface SuccessStory {
  title: string
  description: string
  image: string
  videoUrl?: string
  hasVideo?: boolean
}

const imgZachMath =
  "https://res.cloudinary.com/seunsanyaa/image/upload/v1767016642/b9ea01b0a622041d935a5553077ac9ca5bdc6cca_1_j76bf0.png"
const imgFedir2024 =
  "https://res.cloudinary.com/seunsanyaa/video/upload/v1767000726/First_Video_fiqdbq.mov"
const imgZachAI =
  "https://res.cloudinary.com/seunsanyaa/video/upload/v1767000701/Second_Video_rcgegn.mov"
const imgFedir2025 =
  "https://res.cloudinary.com/seunsanyaa/video/upload/v1767000658/Third_Video_rwnmnq.mp4"
const playButtonIcon =
  "https://res.cloudinary.com/seunsanyaa/image/upload/v1766252550/Component_1_1_vndzqq.png"

export function SuccessStories() {
  const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(
    null
  )
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const stories: SuccessStory[] = [
    {
      title:
        "From 75th to 95th Percentile: How Coding Boosted Zach's Math Scores by 20%",
      description:
        "Zach's MAP math scores jumped 20% from last fall, a phenomenal leap from the 75th to the 95th percentile. His highest-scoring area is problem-solving. His parents attribute this improvement to the coding and logical thinking skills he developed in our program. The MAP test is taken biannually to benchmark students in U.S.-based schools.",
      image: imgZachMath,
      hasVideo: false,
    },
    {
      title:
        "2nd Place in Computer Science at National BETA Convention, U.S 2024",
      description:
        "Fedir placed 2nd in Computer Science at the National BETA State Convention, competing against some of the brightest students in the United States.",
      image: imgFedir2024,
      videoUrl: imgFedir2024,
      hasVideo: true,
    },
    {
      title: "Zach Built an AI Math Tool. Then Taught a Room How It Works.",
      description:
        "We're so proud of our student Zach! He did an amazing job presenting his AI project at camp, and his parents were amazed by how confident and articulate he was. As his mom said, \"We attribute his success to the support and guidance he's receiving through the program.\"",
      image: imgZachAI,
      videoUrl: imgZachAI,
      hasVideo: true,
    },
    {
      title: "Fedir Ranks 7th at 2025 National BETA Convention, U.S",
      description:
        "Fedir placed 7th in Computer Science at the National BETA State Convention, competing against some of the brightest students in the United States.",
      image: imgFedir2025,
      videoUrl: imgFedir2025,
      hasVideo: true,
    },
  ]

  const handlePlayVideo = (index: number) => {
    setPlayingVideoIndex(index)
    // Play video when opened
    setTimeout(() => {
      const video = videoRefs.current[index]
      if (video) {
        video.play().catch(console.error)
      }
    }, 100)
  }

  const handleCloseVideo = (index: number) => {
    const video = videoRefs.current[index]
    if (video) {
      video.pause()
      video.currentTime = 0
    }
    setPlayingVideoIndex(null)
  }

  useEffect(() => {
    // Pause all videos when a new one opens
    videoRefs.current.forEach((video, index) => {
      if (video && index !== playingVideoIndex) {
        video.pause()
        video.currentTime = 0
      }
    })
  }, [playingVideoIndex])

  // Close video on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && playingVideoIndex !== null) {
        handleCloseVideo(playingVideoIndex)
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [playingVideoIndex])

  return (
    <div className="flex flex-col items-center py-12 sm:py-16 md:py-20 lg:pt-6 xl:pt-8 2xl:pt-10 lg:pb-16 xl:pb-24 2xl:pb-32 w-full px-4 sm:px-6 md:px-8 lg:px-30">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-5 md:gap-20 items-start justify-center w-full max-w-7xl xl:max-w-[90rem] 2xl:max-w-360">
        {/* Mobile Header - Shown on mobile only */}
        <div className="flex lg:hidden flex-col gap-4 sm:gap-5 md:gap-6 items-center w-full">
          <div className="flex flex-col gap-3 sm:gap-4 items-center w-full">
            {/* Title */}
            <div className="flex flex-col items-center w-full">
              <h2 className="font-medium text-white text-3xl md:text-4xl leading-tight text-center tracking-tight whitespace-pre-wrap">
                Our Students{"\n"}Success Stories
              </h2>
            </div>

            {/* Description */}
            <div className="flex flex-col items-center justify-center max-w-xs sm:max-w-sm md:max-w-md w-full">
              <p className="font-medium leading-relaxed text-[#b0b0b0] text-base sm:text-lg md:text-lg text-center tracking-tight whitespace-pre-wrap">
                From winning state and national competitions to raising academic
                performance.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop: Left Sticky Sidebar */}
        <div className="hidden lg:flex flex-col gap-3 xl:gap-4 2xl:gap-5 items-start sticky top-0 w-full xl:max-w-md pt-16 xl:pt-20 2xl:pt-24">
          {/* Badge */}

          {/* Heading */}
          <div className="flex flex-col w-full">
            <h2 className="font-medium text-white sm:text-4xl  md:text-5xl lg:text-6xl leading-tight tracking-tight">
              Our Students Success Stories
            </h2>
          </div>

          {/* Description */}
          <div className="flex flex-col w-full pb-3 xl:pb-4">
            <p className="font-medium text-[#b0b0b0] text-sm xl:text-base 2xl:text-lg leading-relaxed tracking-tight">
              From winning state and national competitions to raising academic
              performance.
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="https://cal.com/xelaris/trial-class"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              type="colored"
              className="!rounded-xl !px-4 xl:!px-6 2xl:!px-8 !py-2.5 xl:!py-3 2xl:!py-3.5 w-full"
            >
              Book A Trial Class <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>

        {/* Mobile Card Stack */}
        <div className="flex lg:hidden flex-col gap-4 sm:gap-5 md:gap-6 items-center justify-center w-full">
          {stories.map((story, index) => (
            <div key={index} className="relative w-full">
              {/* Outer container with shadow */}
              <div className="relative overflow-hidden rounded-2xl shadow-[0_0.25rem_1.25rem_0_rgba(0,0,0,0.25)]">
                {/* Outer stroke with gradient */}
                <div
                  className="relative rounded-2xl p-px"
                  style={{
                    backgroundImage: `linear-gradient(${
                      130 + index * 2
                    }deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 60%)`,
                  }}
                >
                  {/* Outer card background */}
                  <div className="bg-[#1b1f24] rounded-2xl p-1.5 sm:p-2">
                    {/* Inner stroke with gradient */}
                    <div
                      className="relative rounded-xl sm:rounded-2xl p-px"
                      style={{
                        backgroundImage: `linear-gradient(${
                          131 + index * 2
                        }deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 62%)`,
                      }}
                    >
                      {/* Inner card with gradient background */}
                      <div className="relative rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#242930] to-[#13181f] overflow-hidden pb-3 sm:pb-4">
                        {/* Content */}
                        <div className="flex flex-col gap-2 sm:gap-3 items-start pt-3 sm:pt-4 px-3 sm:px-4 pb-0 w-full">
                          {/* Title */}
                          <div className="flex flex-col items-start justify-center w-full">
                            <h3 className="font-bold text-white text-xl sm:text-2xl md:text-2xl leading-tight tracking-tight whitespace-pre-wrap w-full">
                              {story.title}
                            </h3>
                          </div>

                          {/* Description */}
                          <div
                            className={`flex flex-col items-start opacity-70 w-full ${
                              !story.hasVideo
                                ? "min-h-[8rem] sm:min-h-[10rem]"
                                : ""
                            }`}
                          >
                            <p className="font-medium text-white text-base sm:text-lg md:text-base leading-relaxed tracking-tight whitespace-pre-wrap w-full">
                              {story.description}
                            </p>
                          </div>

                          {/* Image/Video Container */}
                          {!story.hasVideo ? (
                            // Full-width image for first card
                            <div className="flex flex-col items-start justify-center relative rounded-xl sm:rounded-2xl w-full mt-2 sm:mt-3">
                              <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden">
                                <Image
                                  alt={story.title}
                                  src={story.image}
                                  fill
                                  className="object-cover object-center object-top pointer-events-none rounded-xl sm:rounded-2xl"
                                  unoptimized
                                />
                              </div>
                            </div>
                          ) : (
                            // Video thumbnail for other cards
                            <div className="flex flex-col items-start overflow-hidden relative rounded-xl sm:rounded-2xl w-full sm:w-80 md:w-96 mt-2 sm:mt-3">
                              {playingVideoIndex === index ? (
                                // Video player
                                <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black">
                                  <video
                                    ref={(el) => {
                                      videoRefs.current[index] = el
                                    }}
                                    src={story.videoUrl}
                                    controls
                                    className="w-full h-full object-contain"
                                    playsInline
                                  />
                                  {/* Close button */}
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      handleCloseVideo(index)
                                    }}
                                    className="absolute top-2 right-2 z-30 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition-colors"
                                    aria-label="Close video"
                                  >
                                    <X className="w-5 h-5" />
                                  </button>
                                </div>
                              ) : (
                                // Video thumbnail with play button
                                <>
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl sm:rounded-2xl z-10 pointer-events-none" />
                                  <div
                                    className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer"
                                    onClick={() => handlePlayVideo(index)}
                                  >
                                    <video
                                      src={story.videoUrl}
                                      className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                                      preload="metadata"
                                      muted
                                      playsInline
                                    >
                                      <source src={story.videoUrl} />
                                    </video>

                                    {/* Play button overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                                      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 relative">
                                        <Image
                                          alt="Play button"
                                          src={playButtonIcon}
                                          fill
                                          className="object-contain object-center"
                                          unoptimized
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Inner shadow overlay */}
                        <div className="absolute inset-0 pointer-events-none shadow-[inset_-0.3125rem_-0.5625rem_0.6875rem_0_rgba(0,0,0,0.15),inset_0.25rem_0.25rem_0.25rem_0_rgba(255,255,255,0.03)] rounded-xl sm:rounded-2xl" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Outer shadow overlay */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0.0625rem_0.0625rem_0.0625rem_0_rgba(255,255,255,0.1)] rounded-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Right Card Stack */}
        <div className="hidden lg:flex flex-col gap-3 xl:gap-4 2xl:gap-5 items-end flex-1">
          {stories.map((story, index) => (
            <div key={index} className="relative w-full">
              {/* Outer container with shadow */}
              <div className="relative overflow-hidden rounded-2xl xl:rounded-3xl 2xl:rounded-[2.5rem] shadow-[0_0.25rem_1.25rem_0_rgba(0,0,0,0.25)]">
                {/* Outer stroke with gradient */}
                <div
                  className="relative rounded-2xl xl:rounded-3xl 2xl:rounded-[2.5rem] p-px"
                  style={{
                    backgroundImage: `linear-gradient(${
                      130 + index * 2
                    }deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 60%)`,
                  }}
                >
                  {/* Outer card background */}
                  <div className="bg-[#1b1f24] rounded-2xl xl:rounded-3xl 2xl:rounded-[2.5rem] p-1.5 xl:p-2 2xl:p-2">
                    {/* Inner stroke with gradient */}
                    <div
                      className="relative rounded-xl xl:rounded-2xl 2xl:rounded-[2rem] p-px"
                      style={{
                        backgroundImage: `linear-gradient(${
                          131 + index * 2
                        }deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 62%)`,
                      }}
                    >
                      {/* Inner card with gradient background */}
                      <div className="relative rounded-xl xl:rounded-2xl 2xl:rounded-[2rem] bg-gradient-to-b from-[#242930] to-[#13181f] overflow-hidden">
                        {/* Content */}
                        <div className="flex flex-col gap-2 xl:gap-3 2xl:gap-4 items-start pt-4 xl:pt-5 2xl:pt-6 px-4 xl:px-5 2xl:px-6 pb-0 w-full">
                          {/* Title */}
                          <div className="flex flex-col items-start justify-center w-full">
                            <h3 className="font-bold text-white text-xl xl:text-2xl 2xl:text-3xl leading-tight tracking-tight w-full">
                              {story.title}
                            </h3>
                          </div>

                          {/* Description */}
                          <div className="flex flex-col items-start opacity-70 w-full">
                            <p className="font-medium text-white text-sm xl:text-base 2xl:text-lg leading-relaxed tracking-tight w-full">
                              {story.description}
                            </p>
                          </div>
                        </div>

                        {/* Image/Video Container */}
                        <div className="flex flex-col items-start pt-4 xl:pt-5 2xl:pt-6 px-0 pb-0 w-full">
                          {!story.hasVideo ? (
                            // Full-width image for first card
                            <div className="flex flex-col items-start justify-center relative w-full px-4 xl:px-5 2xl:px-6">
                              <div className="relative w-full aspect-video xl:aspect-[4/3] 2xl:aspect-[3/2] rounded-xl xl:rounded-2xl 2xl:rounded-[2rem] overflow-hidden opacity-70">
                                <Image
                                  alt={story.title}
                                  src={story.image}
                                  fill
                                  className="object-cover object-center pointer-events-none"
                                  unoptimized
                                />
                              </div>
                            </div>
                          ) : (
                            // Video thumbnail for other cards - centered
                            <div className="flex flex-col items-center overflow-hidden relative w-full">
                              {playingVideoIndex === index ? (
                                // Video player
                                <div className="relative w-full max-w-md xl:max-w-lg 2xl:max-w-xl aspect-video xl:aspect-[4/3] 2xl:aspect-[3/2] rounded-xl xl:rounded-2xl overflow-hidden bg-black">
                                  <video
                                    ref={(el) => {
                                      videoRefs.current[index] = el
                                    }}
                                    src={story.videoUrl}
                                    controls
                                    className="w-full h-full object-contain rounded-xl xl:rounded-2xl"
                                    playsInline
                                  />
                                  {/* Close button */}
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      handleCloseVideo(index)
                                    }}
                                    className="absolute top-2 right-2 z-30 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition-colors"
                                    aria-label="Close video"
                                  >
                                    <X className="w-5 h-5" />
                                  </button>
                                </div>
                              ) : (
                                // Video thumbnail with play button
                                <>
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl xl:rounded-2xl z-10 pointer-events-none" />
                                  <div
                                    className="relative w-full max-w-md xl:max-w-lg 2xl:max-w-xl aspect-video xl:aspect-[4/3] 2xl:aspect-[3/2] rounded-xl xl:rounded-2xl overflow-hidden cursor-pointer"
                                    onClick={() => handlePlayVideo(index)}
                                  >
                                    <video
                                      src={story.videoUrl}
                                      className="w-full h-full object-cover rounded-xl xl:rounded-2xl"
                                      preload="metadata"
                                    >
                                      <source src={story.videoUrl} />
                                    </video>

                                    {/* Play button overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                                      <div className="w-12 h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 relative">
                                        <Image
                                          alt="Play button"
                                          src={playButtonIcon}
                                          fill
                                          className="object-contain object-center"
                                          unoptimized
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Inner shadow overlay */}
                        <div className="absolute inset-0 pointer-events-none shadow-[inset_-0.3125rem_-0.5625rem_0.6875rem_0_rgba(0,0,0,0.15),inset_0.25rem_0.25rem_0.25rem_0_rgba(255,255,255,0.03)] rounded-xl xl:rounded-2xl 2xl:rounded-[2rem]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Outer shadow overlay */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0.0625rem_0.0625rem_0.0625rem_0_rgba(255,255,255,0.1)] rounded-2xl xl:rounded-3xl 2xl:rounded-[2.5rem]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
