'use client';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { StudentProgression } from './StudentProgression';
export const brainIcon = "https://res.cloudinary.com/seunsanyaa/image/upload/v1766210230/Component_1_tffrig.png";

interface Lesson {
  title: string;
}

interface Module {
  id: string;
  title: string;
  overview: string;
  lessons: Lesson[];
}

const modules: Module[] = [
  {
    id: 'module-1',
    title: 'Animation and Games with Scratch',
    overview: 'This module introduces students to the fundamentals of programming through Scratch\'s block-based environment. Students learn core coding concepts by creating interactive games and animations, building a strong foundation for computational thinking while having fun bringing their creative ideas to life.',
    lessons: [
      { title: 'Lesson 1: Introduction to Programming Concepts' },
      { title: 'Lesson 2: Exploring the Coding Environment' },
      { title: 'Lesson 3: Making Things Move' },
      { title: 'Lesson 4: Telling a Story with Code' },
      { title: 'Lesson 5: Game Design Basics - Part I' },
      { title: 'Lesson 6: Game Design Basics - Part II' },
      { title: 'Lesson 7: Custom Characters and Costumes' },
      { title: 'Lesson 8: Fun with Cloning and Effects' },
      { title: 'Lesson 9: Adding Sound and Music' },
      { title: 'Lesson 10: Challenge Project - Catch the Creature' },
      { title: 'Lesson 11: Final Project - Planning and Building' },
      { title: 'Lesson 12: Final Project - Completion and Showcase' },
      { title: 'Capstone Project' },
    ],
  },
  {
    id: 'module-2',
    title: 'Logic with Scratch',
    overview: 'Building on Animation and Games, this module deepens students\' understanding of computational thinking and problem-solving. Students explore advanced Scratch concepts including variables, lists, custom blocks, and extensions while creating more sophisticated interactive projects.',
    lessons: [
      { title: 'Lesson 1: Review and Refresh' },
      { title: 'Lesson 2: Mastering Variables' },
      { title: 'Lesson 3: Introduction to Lists' },
      { title: 'Lesson 4: Custom Blocks and Functions' },
      { title: 'Lesson 5: Creative App Project – Part I' },
      { title: 'Lesson 6: Creative App Project – Part II' },
      { title: 'Lesson 7: Working with Time' },
      { title: 'Lesson 8: Sensing and Interaction' },
      { title: 'Lesson 9: Integrating Math with Coding' },
      { title: 'Lesson 10: Exploring More Extensions' },
      { title: 'Lesson 11: Final Project – Design and Build' },
      { title: 'Lesson 12: Final Project – Completion and Showcase' },
    ],
  },
  {
    id: 'module-3',
    title: 'Python Turtle Programming',
    overview: 'This module marks students\' transition from block-based to text-lgd programming. Using Python\'s Turtle graphics library, students learn to write actual code while creating drawings, patterns, animations, and interactive games.',
    lessons: [
      { title: 'Meet the Turtle – Drawing Simple Shapes' },
      { title: 'Lesson 2: Shape Parade – Drawing a Triangle and Circle' },
      { title: 'Lesson 3: Color Fun – Painting with Turtle' },
      { title: 'Lesson 4: Let\'s Loop It – Drawing a Star with Repetition' },
      { title: 'Lesson 5: Rainbow Wheel – Drawing with Color Loops' },
      { title: 'Lesson 6: TurtleBot\'s Garden – Drawing Flowers with Loops' },
      { title: 'Lesson 7: Let\'s Use Variables – Building a Shape Robot' },
      { title: 'Lesson 8: Backgrounds and Brushes – Styling the Canvas' },
      { title: 'Lesson 9: Path Patterns – Making Geometric Mazes' },
      { title: 'Lesson 10: Turtle Maze Game – A Movement Challenge' },
      { title: 'Lesson 11: Super Spirals and Random Colors' },
      { title: 'Lesson 12: Keyboard Control and Interactive Games' },
      { title: 'Capstone Project' },
    ],
  },
];

export function Curriculum() {
  const [selectedModule, setSelectedModule] = useState<string>('module-1');
  const [showAssessment, setShowAssessment] = useState<boolean>(false);
  const [expandedLessons, setExpandedLessons] = useState<Set<string>>(new Set());
  const [selectedTab, setSelectedTab] = useState<'scratch' | 'python'>('scratch');

  const currentModule = modules.find(m => m.id === selectedModule) || modules[0];
  const currentModuleIndex = modules.findIndex(m => m.id === selectedModule);
  const nextModule = currentModuleIndex < modules.length - 1 ? modules[currentModuleIndex + 1] : null;

  const toggleLesson = (lessonTitle: string) => {
    const newExpanded = new Set(expandedLessons);
    if (newExpanded.has(lessonTitle)) {
      newExpanded.delete(lessonTitle);
    } else {
      newExpanded.add(lessonTitle);
    }
    setExpandedLessons(newExpanded);
  };

  const handleNextModule = () => {
    if (nextModule) {
      setSelectedModule(nextModule.id);
      setShowAssessment(false);
    }
  };

  const handleModuleSelect = (moduleId: string) => {
    setSelectedModule(moduleId);
    setShowAssessment(false);
  };

  const handleAssessmentClick = () => {
    setShowAssessment(true);
  };

  return (
    <div className="flex flex-col items-center px-4 md:px-20 py-12 sm:py-16 md:py-20 w-full  lg:px-30  lg:py-8 xl:py-12 2xl:py-16">
      {/* Mobile Layout */}
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 items-center w-full max-w-4xl lg:hidden">
        {/* Header Section */}
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 items-center w-full">
          {/* Title */}
          <div className="flex flex-col items-center w-full">
            <h2 className="font-medium text-white text-3xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight text-center tracking-tight">
              <span>Foundation</span>
              <br />
              <span>Curriculum</span>
            </h2>
          </div>

          {/* Description */}
          <div className="flex flex-col items-center justify-center w-full">
            <p className="font-medium leading-relaxed text-[#b0b0b0] text-base sm:text-lg md:text-lg text-center tracking-tight whitespace-pre-wrap">
              This Foundation curriculum is developed by experienced developers and computer science educators who work in the field. Not only is it developed but also vetted and taught.
            </p>
          </div>
        </div>

        {/* Module List */}
        <div className="flex flex-col gap-1 sm:gap-1.5 items-center w-full max-w-sm sm:max-w-md md:max-w-lg">
          {modules.map((module, index) => (
            <button
              key={module.id}
              onClick={() => handleModuleSelect(module.id)}
              className={`flex items-center px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-lg w-full ${
                selectedModule === module.id && !showAssessment
                  ? 'bg-[#121e28] text-[#fefc00] shadow-[inset_2px_2px_2px_0px_rgba(0,0,0,0.5)]'
                  : 'bg-[#121e28] text-[#b0b0b0] hover:text-white transition-colors'
              }`}
            >
              <span className={`${selectedModule === module.id && !showAssessment ? 'font-bold' : 'font-medium'} text-xs sm:text-sm md:text-base leading-tight tracking-tight text-left w-full`}>
                Module {index + 1}: {module.title}
              </span>
            </button>
          ))}
          
          {/* Assessment & Progression */}
          <button
            onClick={handleAssessmentClick}
            className={`flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-lg w-full ${
              showAssessment
                ? 'bg-[#121e28] text-[#fefc00] shadow-[inset_2px_2px_2px_0px_rgba(0,0,0,0.5)]'
                : 'bg-[#121e28] text-[#b0b0b0] hover:text-white transition-colors'
            } shadow-[inset_2px_2px_2px_0px_rgba(0,0,0,0.5)]`}
          >
            <div className="relative w-5 h-5 sm:w-6 sm:h-6 shrink-0">
            <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.04953 2.53126L3.02953 6.46126C1.09953 7.72126 1.09953 10.5413 3.02953 11.8013L9.04953 15.7313C10.1295 16.4413 11.9095 16.4413 12.9895 15.7313L18.9795 11.8013C20.8995 10.5413 20.8995 7.73126 18.9795 6.47126L12.9895 2.54126C11.9095 1.82126 10.1295 1.82126 9.04953 2.53126Z" stroke="#B0B0B0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.62914 13.0781L4.61914 17.7681C4.61914 19.0381 5.59914 20.3981 6.79914 20.7981L9.98914 21.8581C10.5391 22.0381 11.4491 22.0381 12.0091 21.8581L15.1991 20.7981C16.3991 20.3981 17.3791 19.0381 17.3791 17.7681V13.1281" stroke="#B0B0B0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.4004 15V9" stroke="#B0B0B0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
            <span className={`${showAssessment ? 'font-bold' : 'font-medium'} text-xs sm:text-sm md:text-base leading-tight tracking-tight text-left`}>
              Assessment & Progression
            </span>
          </button>
        </div>

        {/* Show Assessment & Progression or Module Details */}
        {showAssessment ? (
          <StudentProgression />
        ) : (
          /* Module Details */
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 items-center w-full mt-4 sm:mt-6">
          <div className="bg-[#05141b] border border-white/20 flex flex-col gap-3 sm:gap-4 md:gap-5 items-center py-3 sm:py-4 md:py-5 px-3 sm:px-4 md:px-5 rounded-2xl sm:rounded-3xl w-full">
            {/* Module Title */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 items-center w-full pt-3 sm:pt-4 md:pt-5">
              <div className="flex flex-col items-center w-full">
                <h3 className="font-bold px-4 sm:px-8 md:px-12 text-white text-xl sm:text-2xl md:text-3xl leading-tight tracking-tight whitespace-pre-wrap text-center">
                  {currentModule.title}
                </h3>
              </div>

              {/* Module Overview */}
              <div className="flex flex-col gap-2 items-center w-full pt-4 sm:pt-5 md:pt-6">
                <p className="font-medium text-white text-lg sm:text-xl md:text-2xl leading-tight text-center">
                  Module Overview
                </p>
                <p className="font-normal text-[#b0b0b0] text-base sm:text-lg md:text-lg leading-relaxed tracking-tight whitespace-pre-wrap text-center">
                  {currentModule.overview}
                </p>
              </div>
            </div>

            {/* Lessons List */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 items-start w-full mt-3 sm:mt-4 md:mt-5">
              {currentModule.lessons.map((lesson, index) => {
                const isExpanded = expandedLessons.has(lesson.title);
                return (
                  <div
                    key={index}
                    className="bg-white/10 flex gap-3 sm:gap-4 md:gap-5 items-start p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl w-full hover:bg-white/15 transition-colors"
                  >
                    {/* Brain Icon */}
                    <div className="bg-white/30 flex flex-col items-start p-1.5 sm:p-2 md:p-2.5 rounded-md shrink-0">
                      <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7">
                        <Image
                          src={brainIcon}
                          alt="Brain icon"
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                    </div>

                    {/* Lesson Title */}
                    <div className="flex flex-[1_0_0] flex-col items-start min-h-0 min-w-0 relative self-stretch">
                      <div className="flex items-center justify-between relative w-full">
                        <div className="flex flex-col items-start pl-0 pr-1 sm:pr-2 py-0 relative">
                          <div className="flex flex-col font-semibold justify-center leading-tight relative text-white text-base sm:text-lg md:text-lg">
                            <p className="leading-relaxed whitespace-pre-wrap text-left">{lesson.title}</p>
                          </div>
                        </div>
                        {/* Chevron Icon */}
                        <button
                          onClick={() => toggleLesson(lesson.title)}
                          className="flex flex-col items-start relative shrink-0"
                        >
                          <div className={`relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                            <ChevronDown className="w-full h-full text-white" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Next Module Navigation */}
            {nextModule && (
              <div className="bg-[#1e2c32] flex gap-0 items-start p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl w-full mt-3 sm:mt-4 md:mt-5">
                <div className="flex flex-[1_0_0] flex-col items-start min-h-0 min-w-0 relative self-stretch">
                  <div className="flex items-center justify-between relative w-full">
                    <div className="flex flex-col items-start pl-0 py-0 relative">
                      <div className="flex items-end font-semibold justify-center leading-tight relative text-base sm:text-lg md:text-lg tracking-tight whitespace-pre-wrap">
                        <p className="leading-relaxed mb-0 text-[#b0b0b0]">
                          Proceed to Module {currentModuleIndex + 2}: {nextModule.title}
                        </p>
                        <button
                          onClick={handleNextModule}
                          className="text-left text-[#fefc00] whitespace-nowrap underline decoration-solid underline-offset-2 hover:no-underline transition-all ml-1 sm:ml-2"
                        >
                          View Next Level
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        )}
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:flex-col lg:gap-4 xl:gap-6 2xl:gap-8 lg:items-center lg:w-full">
        {/* Header */}
        <div className="flex flex-col items-center w-full pt-6 xl:pt-8 2xl:pt-12 pb-6 xl:pb-8 2xl:pb-12">
          <div className="flex flex-col items-center w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mb-3 xl:mb-4 2xl:mb-6">
            <h1 className="font-medium text-white text-3xl sm:text-4xl md:text-5xl     2xl:text-6xl leading-tight xl:leading-tight 2xl:leading-tight text-center tracking-tight xl:tracking-tight 2xl:tracking-tighter whitespace-nowrap">
              Foundation Curriculum
            </h1>
          </div>
          <div className="flex flex-col gap-0 items-center justify-center w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
            <p className="font-medium text-[#b0b0b0] text-sm md:text-base 2xl:text-lg text-center tracking-tight leading-relaxed whitespace-nowrap">
              This Foundation curriculum is developed by experienced developers and computer science
            </p>
            <p className="font-medium text-[#b0b0b0] text-sm md:text-base 2xl:text-lg text-center tracking-tight leading-relaxed max-w-2xl xl:max-w-3xl 2xl:max-w-4xl whitespace-pre-wrap">
              educators who work in the field. Not only is it developed but also vetted and taught.
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div 
          className="flex items-center justify-center overflow-hidden p-0.5 rounded-full"
          style={{
            backgroundImage: 'linear-gradient(98deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)'
          }}
        >
          <div className="bg-[#21252a] flex items-center p-1 rounded-full w-64 xl:w-80 2xl:w-96 relative">
            <div 
              className={`absolute bg-gradient-to-b from-[#f8f601] to-[#fefc00] inset-y-[9.52%] rounded-full transition-all duration-300 ease-in-out ${
                selectedTab === 'scratch' 
                  ? 'left-[1.45%] right-[48.55%]' 
                  : 'left-[48.55%] right-[1.45%]'
              }`}
              style={{ minHeight: '34px' }}
            />
            <button
              onClick={() => setSelectedTab('scratch')}
              className={`flex-1 flex items-center justify-center p-2 rounded-full relative z-10 transition-colors ${
                selectedTab === 'scratch' ? 'text-[#161a20]' : 'text-white/50'
              }`}
            >
              <span className="font-medium text-xs xl:text-sm 2md:text-base leading-tight whitespace-nowrap">
                Scratch Blocks
              </span>
            </button>
            <button
              onClick={() => setSelectedTab('python')}
              className={`flex-1 flex items-center justify-center p-2 rounded-full relative z-10 transition-colors ${
                selectedTab === 'python' ? 'text-[#161a20]' : 'text-white/50'
              }`}
            >
              <span className="font-medium text-xs xl:text-sm 2md:text-base leading-tight whitespace-nowrap">
                Python Turtle
              </span>
            </button>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="flex items-start justify-center overflow-hidden w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem]">
          <div className="flex gap-4 xl:gap-6 2xl:gap-8 items-start w-full">
            {/* Left Sidebar */}
            <div className="flex flex-col items-start pb-0 pt-4 xl:pt-6 2xl:pt-8 px-0 w-full max-w-xs xl:max-w-sm 2xl:max-w-md">
              <div className="flex flex-col gap-2 items-center overflow-hidden pb-2 pt-0 px-0 w-full">
                {modules.map((module, index) => (
                  <button
                    key={module.id}
                    onClick={() => handleModuleSelect(module.id)}
                    className={`flex justify-center items-center px-3 xl:px-4 2xl:px-5 py-3 xl:py-4 2xl:py-5 rounded-xl xl:rounded-2xl w-full shadow-[inset_-1px_-1px_1px_0px_rgba(82,89,102,0.08),inset_2px_2px_2px_0px_rgba(0,0,0,0.5)] ${
                      selectedModule === module.id && !showAssessment
                        ? 'bg-[#05141b] text-[#fefc00]'
                        : 'bg-[rgba(25,34,47,0.6)] text-[#b0b0b0]'
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex flex-col items-center w-full">
                        <p className={`${
                          selectedModule === module.id && !showAssessment ? 'font-bold' : 'font-bold'
                        } text-sm md:text-base 2xl:text-lg leading-tight tracking-tight whitespace-nowrap`}>
                          Module {index + 1}: {module.title.split(' ').slice(0, 2).join(' ')}
                          {module.title.split(' ').length > 2 && <><br />{module.title.split(' ').slice(2).join(' ')}</>}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}

                {/* Assessment & Progression Button */}
                <button
                  onClick={handleAssessmentClick}
                  className={`flex gap-2 xl:gap-2.5 2xl:gap-3 items-center px-3 xl:px-4 2xl:px-5 py-3 xl:py-4 2xl:py-5 rounded-xl xl:rounded-2xl w-full ${
                    showAssessment
                      ? 'bg-[#05141b] text-[#fefc00]'
                      : 'bg-[#111d27] text-[#b0b0b0]'
                  }`}
                >
                  <div className="overflow-hidden relative shrink-0 w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7">
                    <div className="flex items-center justify-center w-full h-full">
                      <svg className="w-full h-full" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.04953 2.53126L3.02953 6.46126C1.09953 7.72126 1.09953 10.5413 3.02953 11.8013L9.04953 15.7313C10.1295 16.4413 11.9095 16.4413 12.9895 15.7313L18.9795 11.8013C20.8995 10.5413 20.8995 7.73126 18.9795 6.47126L12.9895 2.54126C11.9095 1.82126 10.1295 1.82126 9.04953 2.53126Z" stroke="#B0B0B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4.62914 13.0781L4.61914 17.7681C4.61914 19.0381 5.59914 20.3981 6.79914 20.7981L9.98914 21.8581C10.5391 22.0381 11.4491 22.0381 12.0091 21.8581L15.1991 20.7981C16.3991 20.3981 17.3791 19.0381 17.3791 17.7681V13.1281" stroke="#B0B0B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20.4004 15V9" stroke="#B0B0B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <div className="flex flex-col items-center pt-0 px-0 w-full">
                      <p className={`${
                        showAssessment ? 'font-bold' : 'font-medium'
                      } text-sm md:text-base 2xl:text-lg text-center tracking-tight leading-tight whitespace-nowrap`}>
                        Assessment & Progression
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Content Area */}
            {showAssessment ? (
              <div className="flex flex-col gap-0 items-center px-0 py-4 xl:py-6 2xl:py-8 flex-1">
                <StudentProgression />
              </div>
            ) : (
              <div className="flex flex-col gap-0 items-center px-0 py-4 xl:py-6 2xl:py-8 flex-1">
                <div className="flex flex-col items-center overflow-hidden w-full">
                  <div 
                    className="flex items-start overflow-hidden p-px rounded-2xl xl:rounded-3xl w-full"
                    style={{
                      backgroundImage: 'linear-gradient(100.5deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 56%)'
                    }}
                  >
                    <div className="bg-[#05141b] flex-1 flex flex-col gap-4 xl:gap-6 2xl:gap-8 items-center overflow-hidden pb-0 pt-4 xl:pt-6 2xl:pt-8 px-3 xl:px-4 2xl:px-6 rounded-2xl xl:rounded-3xl">
                      {/* Module Title and Overview */}
                      <div className="flex flex-col gap-0 items-start px-4 xl:px-6 2xl:px-8 py-0 w-full">
                        <div className="flex flex-col gap-3 xl:gap-4 2xl:gap-5 items-start w-full">
                          <div className="flex flex-col items-start w-full">
                            <h2 className="font-bold leading-tight text-xl xl:text-2xl 2xl:text-3xl text-white tracking-tight w-full whitespace-pre-wrap">
                              {currentModule.title}
                            </h2>
                          </div>
                          <div className="flex flex-col items-start w-full">
                            <div className="font-normal leading-relaxed text-[#b0b0b0] w-full whitespace-pre-wrap">
                              <p className="mb-0 text-lg xl:text-lg 2xl:text-xl text-white">Module Overview</p>
                              <p className="text-sm md:text-base 2xl:text-lg">{currentModule.overview}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Lessons List */}
                      <div className="flex flex-col gap-3 xl:gap-4 2xl:gap-5 items-start w-full">
                        {currentModule.lessons.map((lesson, index) => (
                          <div
                            key={index}
                            className="bg-white/10 flex gap-3 xl:gap-4 2xl:gap-5 items-start p-3 xl:p-4 2xl:p-5 rounded-lg xl:rounded-xl 2xl:rounded-2xl w-full"
                          >
                            <div className="bg-[rgba(255,255,255,0.3)] flex flex-col items-start p-1.5 xl:p-2 2xl:p-2.5 rounded-md shrink-0">
                              <div className="relative w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7">
                                <Image
                                  src={brainIcon}
                                  alt="Lesson icon"
                                  fill
                                  className="object-contain"
                                  unoptimized
                                />
                              </div>
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-center px-0 py-1 xl:py-1.5 2xl:py-2">
                              <div className="flex flex-col items-start w-full">
                                <div className="flex gap-0 items-center justify-between w-full">
                                  <div className="flex flex-col items-start">
                                    <p className="font-semibold text-white text-sm md:text-base 2xl:text-lg leading-relaxed whitespace-nowrap">
                                      {lesson.title}
                                    </p>
                                  </div>
                                  <button
                                    onClick={() => toggleLesson(lesson.title)}
                                    className="flex flex-col items-start"
                                  >
                                    <div className={`relative w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 transition-transform duration-200 ${
                                      expandedLessons.has(lesson.title) ? 'rotate-180' : ''
                                    }`}>
                                      <ChevronDown className="w-full h-full text-white" />
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Next Module Navigation */}
                      {nextModule && (
                        <div className="bg-[#1e2c32] flex gap-0 items-center px-3 xl:px-4 2xl:px-5 py-3 xl:py-4 2xl:py-5 rounded-xl xl:rounded-2xl w-full">
                          <div className="flex flex-col items-start justify-center">
                            <div className="flex flex-col items-center pt-0 px-0 w-full">
                              <p className="font-bold text-sm md:text-base 2xl:text-lg text-center tracking-tight leading-tight whitespace-nowrap">
                                <span className="text-[#b0b0b0]">
                                  Proceed to Module {currentModuleIndex + 2}: {nextModule.title}                                                    
                                </span>
                                <button
                                  onClick={handleNextModule}
                                  className="text-[#fefc00] underline decoration-solid ml-2 hover:no-underline transition-all"
                                >
                                  View Next Level
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Bottom Spacer */}
                      <div className="flex flex-col items-start w-full">
                        <div className="bg-transparent flex items-center justify-center p-0.5 rounded-xl xl:rounded-2xl w-full">
                          <div className="bg-transparent flex-1 h-8 xl:h-12 2xl:h-16 rounded-xl xl:rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}