"use client"
import Button from "@/components/ui/buttons/Button"
import { StudentProjectCard } from "@/components/ui/cards/StudentProjectCard"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

// Project images
const projectImages: Record<string, string> = {
  "Mortgage Calculator":
    "https://res.cloudinary.com/seunsanyaa/image/upload/v1767043085/internal-wrap_vdynwu.png",
  "OneKind Donation":
    "https://res.cloudinary.com/seunsanyaa/image/upload/v1767043210/233bc5665235ca3ff1c33e4bde6f4c27aeb88300_h5pgqi.png",
  "Weather App":
    "https://res.cloudinary.com/seunsanyaa/image/upload/v1767043854/7576c96a8c5bd2fc66cf4e4c19981c302c7631b1_dzsmna.jpg",
  "Word Scramble":
    "https://res.cloudinary.com/seunsanyaa/image/upload/v1767043499/aab13495ca22ef0b4b978eaf1ad97d9a8eb63a87_rtj342.png",
  "Animal Quiz":
    "https://res.cloudinary.com/seunsanyaa/image/upload/v1767043920/internal-wrap_1_f9hg6n.png",
  "Virus Rules":
    "https://res.cloudinary.com/seunsanyaa/image/upload/v1767043862/8d5c660ca7f8127a647bb1d4305703f5205e20d2_kxp35u.png",
}

export function OurStudents() {
  const [selectedProject, setSelectedProject] = useState("Mortgage Calculator")

  // Project data - in a real app, this would come from an API
  const projectData: Record<
    string,
    {
      title: string
      description: string
      features: string[]
      builtBy: string
      builtWith: string
      url?: string
    }
  > = {
    "Mortgage Calculator": {
      title: "Mortgage Calculator",
      description:
        "I design this mortgage calculator project for practicing working with forms, client-side validation, and updating the Document Object Model (DOM).",
      features: [
        "Enter mortgage details and view the monthly and total repayment amounts after submitting the form",
        "See validation messages when required fields are incomplete",
        "Complete the entire form using only their keyboard",
      ],
      builtBy: "Chloé, 14 yrs old",
      builtWith: "HTML, CSS, JavaScript",
      url: "https://xelaris-mortgage-calculator.vercel.app/",
    },
    "OneKind Donation": {
      title: "OneKind Donation",
      description:
        "I designed this donation platform to simulate a real-world experience as my project. The goal was to build a fully functional interface that handles form interactions, validates user inputs, and integrates with a payment system. Working on this helped me practice a lot of important front-end skills: Form Handling & State Management, Client-Side Validation, and Payment Flow Logic.",
      features: [
        "Pick a donation type and choose a preset amount or type their own",
        "Decide between monthly or one-time donations",
        "See validation messages when a field is missing",
        "Clean transition to checkout page with payment-ready data",
      ],
      builtBy: "Maya, 15 years old",
      builtWith: "React",
      url: "https://onekind-donations.vercel.app/",
    },
    "Weather App": {
      title: "Weather App",
      description:
        "I built this weather app to practice building something real people could actually use. The goal was to create a working interface that shows weather information and updates based on what the user searches for. Working on this helped me practice getting data from APIs and managing state.",
      features: [
        "Search for any city and see current temperature and conditions",
        "View weather forecasts for the next few days",
        "Save favorite locations for quick access",
      ],
      builtBy: "Zach, 12 years old",
      builtWith: "HTML, CSS, JavaScript",
    },
    "Word Scramble": {
      title: "Word Scramble",
      description:
        "I built this word game to practice JavaScript and figure out how to handle user input. You basically unscramble letters to find the hidden word before you run out of tries. Building this taught me how to manage multiple pieces of game state, handle user input smoothly, and create win/lose logic—all skills I can use for more complex projects.",
      features: [
        "Auto-moving inputs: cursor automatically jumps to the next box",
        "Game tracks tries and wrong letters, resets after 6 mistakes",
        "Word scrambling function with random word selection",
        "Two reset options: new word or retry same word",
      ],
      builtBy: "William, 14 years old",
      builtWith: "HTML, CSS, JavaScript",
      url: "https://xelaris-word-scramble.vercel.app/",
    },
    "Animal Quiz": {
      title: "Animal Quiz",
      description:
        "I made this game because I love animals, and I want other kids to learn about animals too. When you start, you can pick an animal group, like dogs, cats, birds, or fish. Each one has different questions. Every question shows four pictures, and you have to pick the right animal. I hope you have fun playing my game!",
      features: [
        "Pick an animal group (dogs, cats, birds, or fish)",
        "Answer questions by selecting from four picture options",
        "Try again if you get a question wrong",
        "See your score at the end and play again to beat it",
      ],
      builtBy: "Alexa, 13 years old",
      builtWith: "HTML, CSS, JavaScript",
      url: "https://xelaris-animal-quiz.vercel.app/",
    },
    "Virus Rules": {
      title: "Virus Rules",
      description:
        "The problem I am solving is that many people get sick without knowing the cause of their symptoms, like wheezing. VirusRule helps users learn about viruses, vaccines, and virologists through fun games and quizzes. I created VirusRule because I believe learning about health should be enjoyable and easy. When we make learning fun, we can help people take control of their health.",
      features: [
        "Learn about viruses, vaccines, and virologists",
        "Play fun games and quizzes about health topics",
        "Understand symptoms and their causes",
        "Make learning about health enjoyable and easy",
      ],
      builtBy: "Zoja, 12 years old",
      builtWith: "HTML, CSS, JavaScript",
      url: "https://www.virusrule.com/",
    },
  }

  const projectList = [
    "Mortgage Calculator",
    "OneKind Donation",
    "Word Scramble",
    "Animal Quiz",
    "Weather App",
    "Virus Rules",
  ]

  const currentProject =
    projectData[selectedProject] || projectData["Mortgage Calculator"]
  const currentProjectImage =
    projectImages[selectedProject] || projectImages["Mortgage Calculator"]

  return (
    <div className="flex flex-col items-center w-full py-12 sm:py-16 md:py-0 l lg:pb-16 xl:pb-24 2xl:pb-32 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-30 2xl:px-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-start w-full max-w-7xl xl:max-w-[90rem] 2xl:max-w-360 gap-4 sm:gap-5 md:gap-6 lg:gap-0">
        {/* Header Section - Mobile Only */}
        <div className="flex lg:hidden flex-col gap-2 sm:gap-3 md:gap-4 items-center w-full">
          {/* Title */}
          <div className="flex flex-col items-center w-full">
            <h2 className="font-bold text-white text-3xl md:text-5xl  leading-tight text-center tracking-tight">
              See What Our Students Built
            </h2>
          </div>

          {/* Description */}
          <div className="flex flex-col items-center justify-center w-full">
            <p className="font-medium leading-relaxed text-[#b0b0b0] text-base sm:text-lg md:text-lg text-center tracking-tight">
              Every project here is built and owned by our students, guided by
              expert mentors and developed at a professional level.{" "}
              <br className="hidden md:block" />
              Each new student creates something equally ambitious, driven
              entirely by their own passion.
            </p>
          </div>
        </div>

        {/* Mobile: Project Navigation Buttons */}
        <div className="flex lg:hidden flex-col items-center justify-center overflow-hidden py-4 sm:py-5 md:py-6 w-full">
          <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2 items-center w-full">
            {/* First row - Mortgage Calculator */}
            <div className="flex justify-center w-full">
              <button
                onClick={() => setSelectedProject("Mortgage Calculator")}
                className={`flex items-center justify-center px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-lg w-full max-w-sm sm:max-w-md md:max-w-lg ${
                  selectedProject === "Mortgage Calculator"
                    ? "bg-[#141a25] text-[#fefc00] shadow-[inset_0.125rem_0.125rem_0.125rem_0_rgba(0,0,0,0.5)]"
                    : "bg-[#1a1f28] text-[#b0b0b0] hover:text-white hover:bg-[#1f252f] transition-colors"
                }`}
              >
                <span className="font-medium text-base sm:text-lg md:text-lg leading-tight tracking-tight whitespace-nowrap">
                  Mortgage Calculator
                </span>
              </button>
            </div>

            {/* Second row - Two buttons */}
            <div className="flex items-center justify-center w-full gap-1 sm:gap-1.5 md:gap-2">
              <button
                onClick={() => setSelectedProject("OneKind Donation")}
                className={`flex items-center justify-center px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg flex-1 ${
                  selectedProject === "OneKind Donation"
                    ? "bg-[#141a25] text-[#fefc00] shadow-[inset_0.125rem_0.125rem_0.125rem_0_rgba(0,0,0,0.5)]"
                    : "bg-[#1a1f28] text-[#b0b0b0] hover:text-white hover:bg-[#1f252f] transition-colors"
                }`}
              >
                <span className="font-medium text-xs sm:text-sm md:text-base leading-tight tracking-tight whitespace-nowrap">
                  OneKind Donation
                </span>
              </button>
              <button
                onClick={() => setSelectedProject("Weather App")}
                className={`flex items-center justify-center px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg flex-1 ${
                  selectedProject === "Weather App"
                    ? "bg-[#141a25] text-[#fefc00] shadow-[inset_0.125rem_0.125rem_0.125rem_0_rgba(0,0,0,0.5)]"
                    : "bg-[#1a1f28] text-[#b0b0b0] hover:text-white hover:bg-[#1f252f] transition-colors"
                }`}
              >
                <span className="font-medium text-xs sm:text-sm md:text-base leading-tight tracking-tight whitespace-nowrap">
                  Weather App
                </span>
              </button>
            </div>

            {/* Third row - Three buttons */}
            <div className="flex items-center justify-center w-full gap-1 sm:gap-1.5 md:gap-2">
              <button
                onClick={() => setSelectedProject("Word Scramble")}
                className={`flex items-center justify-center px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg flex-1 ${
                  selectedProject === "Word Scramble"
                    ? "bg-[#141a25] text-[#fefc00] shadow-[inset_0.125rem_0.125rem_0.125rem_0_rgba(0,0,0,0.5)]"
                    : "bg-[#1a1f28] text-[#b0b0b0] hover:text-white hover:bg-[#1f252f] transition-colors"
                }`}
              >
                <span className="font-medium text-xs sm:text-sm md:text-base leading-tight tracking-tight whitespace-nowrap">
                  Word Scramble
                </span>
              </button>
              <button
                onClick={() => setSelectedProject("Animal Quiz")}
                className={`flex items-center justify-center px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg flex-1 ${
                  selectedProject === "Animal Quiz"
                    ? "bg-[#141a25] text-[#fefc00] shadow-[inset_0.125rem_0.125rem_0.125rem_0_rgba(0,0,0,0.5)]"
                    : "bg-[#1a1f28] text-[#b0b0b0] hover:text-white hover:bg-[#1f252f] transition-colors"
                }`}
              >
                <span className="font-medium text-xs sm:text-sm md:text-base leading-tight tracking-tight whitespace-nowrap">
                  Animal Quiz
                </span>
              </button>
              <button
                onClick={() => setSelectedProject("Virus Rules")}
                className={`flex items-center justify-center px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg flex-1 ${
                  selectedProject === "Virus Rules"
                    ? "bg-[#141a25] text-[#fefc00] shadow-[inset_0.125rem_0.125rem_0.125rem_0_rgba(0,0,0,0.5)]"
                    : "bg-[#1a1f28] text-[#b0b0b0] hover:text-white hover:bg-[#1f252f] transition-colors"
                }`}
              >
                <span className="font-medium text-xs sm:text-sm md:text-base leading-tight tracking-tight whitespace-nowrap">
                  Virus Rules
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop: Complete Section with Header */}
        <div className="hidden lg:flex flex-col items-center w-full gap-4 xl:gap-6 2xl:gap-8">
          {/* Header Section - Desktop */}
          <div className="flex flex-col items-center w-full pt-6 xl:pt-8 2xl:pt-12">
            {/* Title */}
            <h2 className="font-medium text-white text-3xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight text-center tracking-tight xl:tracking-tight 2xl:tracking-tighter whitespace-nowrap">
              See What Our Students Have Built
            </h2>

            {/* Description */}
            <p className="font-medium text-[#b0b0b0] text-sm xl:text-base 2xl:text-lg leading-relaxed text-center tracking-tight mt-4 xl:mt-5 2xl:mt-6 max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
              Every project here is built and owned by our students, guided by
              expert mentors and developed at a professional level.
              <br className="hidden md:block" />
              Each new student creates something equally ambitious, driven
              entirely by their own passion.
            </p>
          </div>

          {/* Desktop: Side by Side Layout */}
          <div className="flex items-start gap-20 w-full justify-between">
            {/* Left Sidebar */}
            <div className="flex flex-col pt-4 xl:pt-6 2xl:pt-8 w-full max-w-xs xl:max-w-sm 2xl:max-w-md">
              {/* Project Navigation Buttons */}
              <div className="flex flex-col gap-1 items-start overflow-hidden pb-2 w-full">
                {projectList.map((project) => (
                  <button
                    key={project}
                    onClick={() => setSelectedProject(project)}
                    className={`flex items-center px-3 xl:px-4 2xl:px-5 py-3 xl:py-4 2xl:py-5 rounded-xl xl:rounded-2xl w-full ${
                      selectedProject === project
                        ? "bg-[#191c22] text-[#fefc00] shadow-[inset_-1px_-1px_1px_0px_rgba(82,89,102,0.08),inset_2px_2px_2px_0px_rgba(0,0,0,0.5)]"
                        : "text-[#b0b0b0] hover:text-white transition-colors"
                    }`}
                  >
                    <span className="font-medium text-sm xl:text-base 2xl:text-lg leading-tight tracking-tight">
                      {project}
                    </span>
                  </button>
                ))}
              </div>

              {/* Book A Trial Class Button */}
              <div className="bg-[#1a1e24] flex flex-col items-center justify-end p-2 xl:p-3 2xl:p-4 rounded-xl xl:rounded-2xl 2xl:rounded-3xl shadow-[0_0.25rem_1.25rem_0_rgba(0,0,0,0.25)] border border-black w-full mt-auto">
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
            </div>

            {/* Right Project Card */}
            <div className="flex flex-col items-center flex-1">
              <StudentProjectCard
                projectImage={currentProjectImage}
                title={currentProject.title}
                description={currentProject.description}
                features={currentProject.features}
                builtBy={currentProject.builtBy}
                builtWith={currentProject.builtWith}
                onViewProject={() => {
                  if (currentProject.url) {
                    window.open(
                      currentProject.url,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Mobile: Project Card */}
        <div className="flex lg:hidden flex-col items-center pb-4 sm:pb-5 md:pb-6 w-full">
          <StudentProjectCard
            projectImage={currentProjectImage}
            title={currentProject.title}
            description={currentProject.description}
            features={currentProject.features}
            builtBy={currentProject.builtBy}
            builtWith={currentProject.builtWith}
            onViewProject={() => {
              if (currentProject.url) {
                window.open(currentProject.url, "_blank", "noopener,noreferrer")
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}
