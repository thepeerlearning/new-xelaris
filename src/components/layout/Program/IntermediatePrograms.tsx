'use client';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const brainIcon = "https://res.cloudinary.com/seunsanyaa/image/upload/v1766210230/Component_1_tffrig.png";

interface Lesson {
  title: string;
}

interface Module {
  id: string;
  title: string;
  overview: string;
  lessons: Lesson[];
}

interface ProgramPath {
  id: string;
  name: string;
  description: string;
  modules: Module[];
}

const programPaths: ProgramPath[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
    description: '',
    modules: [
      {
        id: 'js-module-0',
        title: 'Introduction',
        overview: 'This introductory sprint is designed to welcome students to the world of JavaScript programming. Students will learn the fundamental concepts of what JavaScript is, how to set up their development environment, and write their first programs. This sprint focuses on hands-on experience with basic JavaScript syntax and debugging techniques, culminating in a simple interactive web page.',
        lessons: [
          { title: 'Setting Up Your Development Environment' },
          { title: 'Introduction to JavaScript & Basic Commands' },
          { title: 'Basic Debugging Techniques' },
          { title: 'JavaScript in the Browser' },
          { title: 'Capstone Project' },
        ],
      },
      {
        id: 'js-module-1',
        title: 'JavaScript Basics',
        overview: 'This module forms the bedrock of JavaScript knowledge, covering all the fundamental concepts that students will build upon throughout the course. Students will learn about variables, data types, operators, control structures, functions, and basic data structures. The emphasis is on understanding how JavaScript works at its core and developing good programming habits from the beginning.',
        lessons: [
          { title: 'Variables & Data Types' },
          { title: 'Operators & Expressions' },
          { title: 'Strings & String Manipulation' },
          { title: 'Numbers & Math Operations' },
          { title: 'Booleans & Conditional Statements' },
          { title: 'Arrays & Array Methods' },
          { title: 'Objects & Object Methods' },
          { title: 'Functions & Scope' },
          { title: 'Capstone Project' },
        ],
      },
      {
        id: 'js-module-2',
        title: 'DOM Manipulation & Events Handling',
        overview: 'This module focuses on making web pages interactive by manipulating the Document Object Model (DOM) and handling user events. Students will learn how to select, create, and modify HTML elements dynamically, respond to user interactions, and store data in the browser. This module bridges the gap between static web pages and dynamic web applications.',
        lessons: [
          { title: 'DOM Basics & Selection' },
          { title: 'DOM Manipulation & Styling' },
          { title: 'Events & Event Handling' },
          { title: 'Forms & Form Validation' },
          { title: 'Event Delegation & Dynamic Content' },
          { title: 'Browser Storage' },
          { title: 'Timers & Intervals' },
          { title: 'Introduction to Web APIs' },
          { title: 'Capstone Project' },
        ],
      },
      {
        id: 'js-module-3',
        title: 'Intermediate JavaScript',
        overview: 'This module delves deeper into JavaScript\'s more advanced features and modern programming paradigms. Students will learn about asynchronous programming, modern ES6+ features, modules, testing, and regular expressions. This module prepares students for writing more complex and maintainable JavaScript code.',
        lessons: [
          { title: 'Advanced Functions & Callbacks' },
          { title: 'Asynchronous JavaScript' },
          { title: 'Working with APIs' },
          { title: 'Error Handling & Debugging' },
          { title: 'Regular Expressions' },
          { title: 'Modern JavaScript Features (ES6+)' },
          { title: 'Modules & Module Systems' },
          { title: 'Testing Fundamentals' },
          { title: 'Capstone Project' },
        ],
      },
      {
        id: 'js-module-4',
        title: 'Advanced JavaScript & Web Development',
        overview: 'This module covers advanced JavaScript concepts and web development techniques that are essential for building modern web applications. Students will learn about object-oriented programming, functional programming, design patterns, performance optimization, and security considerations. The module also introduces popular JavaScript frameworks.',
        lessons: [
          { title: 'Object-Oriented JavaScript' },
          { title: 'Functional Programming Concepts' },
          { title: 'Advanced DOM & Browser APIs' },
          { title: 'Data Structures & Algorithms' },
          { title: 'Design Patterns' },
          { title: 'Performance Optimization' },
          { title: 'Security Considerations' },
          { title: 'Introduction to Frameworks' },
          { title: 'Capstone Project' },
        ],
      },
      {
        id: 'js-module-5',
        title: 'Building Real-World Applications',
        overview: 'This module focuses on applying all learned concepts to build complete, real-world web applications. Students will work on projects that integrate multiple concepts, learn about project structure, code organization, and best practices for building scalable applications.',
        lessons: [
          { title: 'Project Architecture & Planning' },
          { title: 'Building Interactive UIs' },
          { title: 'State Management' },
          { title: 'API Integration' },
          { title: 'Code Organization & Best Practices' },
          { title: 'Version Control & Collaboration' },
          { title: 'Deployment & Hosting' },
          { title: 'Project Presentation' },
          { title: 'Capstone Project' },
        ],
      },
      {
        id: 'js-module-6',
        title: 'Specialization & Final Project',
        overview: 'The final module allows students to specialize in an area of JavaScript development that aligns with their interests and career goals. Students will choose a specialization track, plan and execute a complex project, and prepare a professional portfolio piece. This module emphasizes independent learning, project management, and professional presentation skills.',
        lessons: [
          { title: 'Choosing a Specialization' },
          { title: 'Project Planning & Architecture' },
          { title: 'Implementation Phase 1' },
          { title: 'Implementation Phase 2' },
          { title: 'Testing, Deployment & Documentation' },
          { title: 'Project Showcase & Portfolio' },
          { title: 'Final Capstone: Specialized Portfolio Project' },
        ],
      },
    ],
  },
  {
    id: 'python',
    name: 'Python',
    description: '',
    modules: [
      {
        id: 'py-module-0',
        title: 'Introduction',
        overview: 'This introductory sprint is designed to welcome students to the world of Python programming. Students will learn the fundamental concepts of what Python is, how to set up their development environment, and write their first programs. This sprint focuses on hands-on experience with basic Python syntax and debugging techniques, culminating in a simple interactive program.',
        lessons: [
          { title: 'Setting Up Your Programming Environment' },
          { title: 'Introduction to Python & Basic Commands' },
          { title: 'Your First Python Programs' },
          { title: 'Basic Debugging Techniques' },
          { title: 'Capstone Project' },
        ],
      },
      {
        id: 'py-module-1',
        title: 'Python Foundations',
        overview: 'This module forms the bedrock of Python knowledge, covering all the fundamental concepts that students will build upon throughout the course. Students will learn about variables, data types, operators, control structures, functions, and basic error handling. The emphasis is on understanding how Python works at its core and developing good programming habits from the beginning.',
        lessons: [
          { title: 'Introduction to Python & Basic Commands' },
          { title: 'Variables & Data Types' },
          { title: 'Numbers & Simple Math' },
          { title: 'Strings & Text Manipulation' },
          { title: 'User Input & Simple Programs' },
          { title: 'Booleans & Conditional Statements' },
          { title: 'Loops and Repetition' },
          { title: 'Functions' },
          { title: 'Basic Error Handling' },
          { title: 'Capstone Project' },
        ],
      },
      {
        id: 'py-module-2',
        title: 'Working with Data',
        overview: 'This module focuses on Python\'s powerful data manipulation capabilities. Students will learn how to work with Python\'s primary data structures (lists, dictionaries, sets, tuples), handle file operations, and perform basic data analysis and visualization. This module bridges the gap between basic programming and practical data processing applications.',
        lessons: [
          { title: 'Lists & Collections' },
          { title: 'Dictionaries & Key-Value Pairs' },
          { title: 'Sets & Tuples' },
          { title: 'Reading & Writing Files' },
          { title: 'Working with CSV Files' },
          { title: 'Working with JSON Data' },
          { title: 'Simple Data Visualization' },
          { title: 'Basic Data Analysis' },
          { title: 'Introduction to APIs' },
          { title: 'Simple Web Scraping' },
          { title: 'Capstone Project' },
        ],
      },
      {
        id: 'py-module-3',
        title: 'Problem Solving with Python',
        overview: 'This module delves into algorithmic thinking and problem-solving strategies using Python. Students will learn how to approach complex problems systematically, implement various algorithms, and analyze their efficiency. This module develops critical thinking skills and prepares students for tackling more complex programming challenges.',
        lessons: [
          { title: 'Advanced List Operations' },
          { title: 'Dictionary Techniques' },
          { title: 'Algorithmic Thinking' },
          { title: 'Searching & Sorting Basics' },
          { title: 'Sets & Tuple Operations' },
          { title: 'Recursion Concepts' },
          { title: 'Memory & Performance Considerations' },
          { title: 'Introduction to Time & Space Complexity' },
          { title: 'Basic Testing' },
          { title: 'Capstone Project' },
        ],
      },
      {
        id: 'py-module-4',
        title: 'Building Applications',
        overview: 'This module focuses on applying Python skills to build practical applications. Students will learn web development fundamentals, GUI programming, and application deployment. This module bridges the gap between programming knowledge and real-world application development, preparing students to create complete, functional software.',
        lessons: [
          { title: 'Introduction to Web Concepts' },
          { title: 'Simple Web Pages with HTML & CSS' },
          { title: 'Basic Flask Applications' },
          { title: 'Working with Forms' },
          { title: 'Simple Database Projects' },
          { title: 'User Authentication Basics' },
          { title: 'Building a Complete Web App' },
          { title: 'Introduction to Deployment' },
          { title: 'GUI & Game Development with PyGame' },
          { title: 'Simple Web Scraping' },
          { title: 'Capstone Project' },
        ],
      },
      {
        id: 'py-module-5',
        title: 'Object-Oriented Programming',
        overview: 'This module introduces students to object-oriented programming (OOP) concepts and how they are implemented in Python. Students will learn how to design and implement classes, work with inheritance and polymorphism, and apply design patterns. This module teaches students to write more organized, reusable, and maintainable code.',
        lessons: [
          { title: 'OOP Concepts & Principles' },
          { title: 'Classes & Objects' },
          { title: 'Inheritance & Polymorphism' },
          { title: 'Encapsulation & Property Decorators' },
          { title: 'Special Methods & Operator Overloading' },
          { title: 'Design Patterns Introduction' },
          { title: 'Advanced Class Features' },
          { title: 'Custom Exceptions' },
          { title: 'Unit Testing & Test-Driven Development' },
          { title: 'Introduction to CI/CD Concepts' },
          { title: 'Capstone Project:' },
        ],
      },
      {
        id: 'py-module-6',
        title: 'Specialization & Final Project',
        overview: 'In the final module, students select a specialization track that aligns with their interests and career goals. Each track involves building a comprehensive capstone project that demonstrates mastery of Python and the chosen specialization area.',
        lessons: [
          { title: 'Web Development Specialization' },
          { title: 'Data Science & Analytics Specialization' },
          { title: 'Artificial Intelligence & Machine Learning Specialization' },
          { title: 'Game Development Specialization' },
          { title: 'Automation & Scripting Specialization' },
          { title: 'Capstone Project:' },
        ],
      },
    ],
  },
  {
    id: 'game-development',
    name: 'Game Development',
    description: '',
    modules: [
      {
        id: 'game-module-0',
        title: 'Introduction',
        overview: 'This introductory sprint gets students creating immediately. Within the first week, students will have built and published their first Roblox game; a simple but complete obby (obstacle course). This sprint focuses on building confidence, learning Roblox Studio basics, and understanding the game creation workflow.',
        lessons: [
          { title: 'Setting Up Roblox Studio' },
          { title: 'Building Your First Obby' },
          { title: 'Making It Challenging' },
          { title: 'Publishing Your Game' },
          { title: 'Capstone Project' },
        ],
      },
      {
        id: 'game-module-1',
        title: 'Roblox Studio Fundamentals',
        overview: 'This module dives deeper into Roblox Studio\'s building capabilities. Students learn to create detailed environments, use advanced tools, import models, work with terrain, and implement basic game settings. By the end, students can build complete, visually appealing game worlds without scripting.',
        lessons: [
          { title: 'Advanced Building Techniques' },
          { title: 'Unions, Negations & Complex Shapes' },
          { title: 'Working with Models & Assets' },
          { title: 'Terrain & Natural Environments' },
          { title: 'Lighting & Atmosphere' },
          { title: 'Sound Effects & Music' },
          { title: 'Basic UI Design' },
          { title: 'Capstone Project' },
        ],
      },
      {
        id: 'game-module-2',
        title: 'Scripting with Lua',
        overview: 'This is where games come alive! Students learn Lua programming specifically for Roblox. Starting with simple scripts that change colors or move objects, students progressively build to creating interactive game mechanics. By the end, students can script doors, collect systems, teleporters, and simple enemies.',
        lessons: [
          { title: 'Introduction to Scripting' },
          { title: 'Variables & Data Types' },
          { title: 'Properties & Changing Objects' },
          { title: 'Functions & Organization' },
          { title: 'Events & User Interaction' },
          { title: 'Conditional Statements' },
          { title: 'Loops & Repetition' },
          { title: 'Working with Players' },
          { title: 'Basic Game Mechanics Part 1' },
          { title: 'Basic Game Mechanics Part 2' },
          { title: 'Capstone Project' },
        ],
      },
      {
        id: 'game-module-3',
        title: 'Advanced Game Mechanics',
        overview: 'Students level up their scripting skills, learning advanced mechanics that make games engaging and professional. Topics include advanced player systems, complex game loops, data persistence, multiplayer mechanics, and animation. Students also learn game balance and player experience optimization.',
        lessons: [
          { title: 'Client-Server Model' },
          { title: 'Remote Events & Functions' },
          { title: 'DataStore & Saving Player Data' },
          { title: 'Advanced UI & Menus' },
          { title: 'Tweening & Animation' },
          { title: 'Inventory & Shop Systems' },
          { title: 'Game States & Loops' },
          { title: 'Multiplayer Mechanics' },
          { title: 'Optimization & Performance' },
          { title: 'Capstone Project' },
        ],
      },
      {
        id: 'game-module-4',
        title: 'Professional Game Design',
        overview: 'This module focuses on what makes games fun, engaging, and successful. Students learn game design theory, player psychology, economy design, progression systems, and analytics. They also learn to gather and implement feedback, iterate on designs, and polish games to professional standards.',
        lessons: [
          { title: 'Game Design Fundamentals' },
          { title: 'Player Psychology & Engagement' },
          { title: 'Economy Design' },
          { title: 'Progression Systems' },
          { title: 'Onboarding & Tutorials' },
          { title: 'Game Polish & Juice' },
          { title: 'Analytics & Metrics' },
          { title: 'Game Marketing Basics' },
          { title: 'Professional Game Development Pipeline' },
          { title: 'Capstone Project' },
        ],
      },
      {
        id: 'game-module-5',
        title: 'Monetization & Publishing',
        overview: 'Students learn the business side of game development. This module covers Robux monetization strategies, DevEx requirements, game marketing, growing a player base, and maintaining a successful game. Students also learn about the Roblox Developer community and career opportunities',
        lessons: [
          { title: 'Understanding Robux & Monetization' },
          { title: 'Game Passes & Developer Products' },
          { title: 'Premium Payouts' },
          { title: 'Growing Your Player Base' },
          { title: 'DevEx & Professional Development' },
          { title: 'The Roblox Developer Ecosystem' },
          { title: 'Capstone Project' },
        ],
      },
    ],
  },
];

export function IntermediatePrograms() {
  const [selectedPath, setSelectedPath] = useState<string>('javascript');
  const [selectedModule, setSelectedModule] = useState<string>('js-module-0');
  const [expandedLessons, setExpandedLessons] = useState<Set<string>>(new Set());

  const currentPath = programPaths.find(p => p.id === selectedPath) || programPaths[0];
  const currentModule = currentPath.modules.find(m => m.id === selectedModule) || currentPath.modules[0];
  const currentModuleIndex = currentPath.modules.findIndex(m => m.id === selectedModule);
  const nextModule = currentModuleIndex < currentPath.modules.length - 1 ? currentPath.modules[currentModuleIndex + 1] : null;

  const handlePathChange = (pathId: string) => {
    setSelectedPath(pathId);
    const newPath = programPaths.find(p => p.id === pathId);
    if (newPath && newPath.modules.length > 0) {
      setSelectedModule(newPath.modules[0].id);
    }
    setExpandedLessons(new Set());
  };

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
      setExpandedLessons(new Set());
    }
  };

  return (
    <div className="flex flex-col items-center px-4 md:px-20 py-12 sm:py-16 md:py-20 w-full lg:px-30 lg:py-8 xl:py-12 2xl:py-16">
      {/* Mobile Layout */}
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 items-center w-full max-w-4xl lg:hidden">
        {/* Header Section */}
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 items-center w-full">
          {/* Title */}
          <div className="flex flex-col items-center w-full">
            <h2 className="font-medium text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight text-center tracking-tight">
              <span>Intermediate</span>
              <br />
              <span>Curriculum</span>
            </h2>
          </div>

          {/* Description */}
          <div className="flex flex-col items-center justify-center w-full">
            <p className="font-medium leading-relaxed text-[#b0b0b0] text-base sm:text-lg md:text-lg text-center tracking-tight whitespace-pre-wrap">
              This Intermediate curriculum is developed by experienced developers and computer science educators who work in the field. Not only is it developed but also vetted and taught.
            </p>
          </div>
        </div>

        {/* Program Path Tabs */}
        <div className="flex flex-col gap-1 sm:gap-1.5 items-center w-full max-w-sm sm:max-w-md md:max-w-lg">
          {programPaths.map((path) => (
            <button
              key={path.id}
              onClick={() => handlePathChange(path.id)}
              className={`flex items-center px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-lg w-full ${
                selectedPath === path.id
                  ? 'bg-[#121e28] text-[#fefc00] shadow-[inset_2px_2px_2px_0px_rgba(0,0,0,0.5)]'
                  : 'bg-[#121e28] text-[#b0b0b0] hover:text-white transition-colors'
              }`}
            >
              <span className={`${selectedPath === path.id ? 'font-bold' : 'font-medium'} text-xs sm:text-sm md:text-base leading-tight tracking-tight text-left w-full`}>
                {path.name}
              </span>
            </button>
          ))}
        </div>

        {/* Module Details - Module List is Hidden */}
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 items-center w-full mt-4 sm:mt-6">
          <div className="bg-[#05141b] border border-white/20 flex flex-col gap-3 sm:gap-4 md:gap-5 items-center py-3 sm:py-4 md:py-5 px-3 sm:px-4 md:px-5 rounded-2xl sm:rounded-3xl w-full">
            {/* Module Title */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 items-center w-full pt-3 sm:pt-4 md:pt-5">
              <div className="flex flex-col items-center w-full">
                <h3 className="font-bold px-4 sm:px-8 md:px-12 text-white text-xl sm:text-2xl md:text-3xl leading-tight tracking-tight whitespace-pre-wrap text-center">
                  {currentModuleIndex === 0 ? 'Module 0: ' : `Module ${currentModuleIndex}: `}{currentModule.title}
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
            {currentModuleIndex === currentPath.modules.length - 1 ? (
              <div className="bg-[#1e2c32] flex gap-0 items-start p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl w-full mt-3 sm:mt-4 md:mt-5">
                <div className="flex flex-[1_0_0] flex-col items-start min-h-0 min-w-0 relative self-stretch">
                  <div className="flex items-center justify-between relative w-full">
                    <div className="flex flex-col items-start pl-0 py-0 relative">
                      <div className="flex items-end font-semibold justify-center leading-tight relative text-base sm:text-lg md:text-lg tracking-tight whitespace-pre-wrap">
                        <button
                          onClick={() => setSelectedModule(currentPath.modules[0].id)}
                          className="text-left text-[#fefc00] whitespace-nowrap underline decoration-solid underline-offset-2 hover:no-underline transition-all"
                        >
                          Back to Module 0
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : nextModule ? (
              <div className="bg-[#1e2c32] flex gap-0 items-start p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl w-full mt-3 sm:mt-4 md:mt-5">
                <div className="flex flex-[1_0_0] flex-col items-start min-h-0 min-w-0 relative self-stretch">
                  <div className="flex items-center justify-between relative w-full">
                    <div className="flex flex-col items-start pl-0 py-0 relative">
                      <div className="flex items-end font-semibold justify-center leading-tight relative text-base sm:text-lg md:text-lg tracking-tight whitespace-pre-wrap">
                        <p className="leading-relaxed mb-0 text-[#b0b0b0]">
                          Proceed to Module {currentModuleIndex + 1}: {nextModule.title}
                        </p>
                        <button
                          onClick={handleNextModule}
                          className="text-left text-[#fefc00] whitespace-nowrap underline decoration-solid underline-offset-2 hover:no-underline transition-all ml-1 sm:ml-2"
                        >
                          View Next Module
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:flex-col lg:gap-4 xl:gap-6 2xl:gap-8 lg:items-center lg:w-full">
        {/* Header */}
        <div className="flex flex-col items-center w-full pt-6 xl:pt-8 2xl:pt-12 pb-6 xl:pb-8 2xl:pb-12">
          <div className="flex flex-col items-center w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mb-3 xl:mb-4 2xl:mb-6">
            <h1 className="font-medium text-white text-3xl sm:text-3xl md:text-5xl 2xl:text-6xl leading-tight xl:leading-tight 2xl:leading-tight text-center tracking-tight xl:tracking-tight 2xl:tracking-tighter whitespace-nowrap">
              Intermediate Curriculum
            </h1>
          </div>
          <div className="flex flex-col gap-0 items-center justify-center w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
            <p className="font-medium text-[#b0b0b0] text-sm md:text-base 2xl:text-lg text-center tracking-tight leading-relaxed whitespace-nowrap">
              This Intermediate curriculum is developed by experienced developers and computer science
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
          <div className="bg-[#21252a] flex items-center p-1 rounded-full w-[28rem] xl:w-[32rem] 2xl:w-[36rem] relative">
            <div 
              className={`absolute bg-gradient-to-b from-[#f8f601] to-[#fefc00] inset-y-[9.52%] rounded-full transition-all duration-300 ease-in-out ${
                selectedPath === 'javascript' 
                  ? 'left-[1.5%] right-[65.5%]' 
                  : selectedPath === 'python'
                  ? 'left-[34%] right-[34%]'
                  : 'left-[65.5%] right-[1.5%]'
              }`}
              style={{ minHeight: '34px' }}
            />
            {programPaths.map((path) => (
              <button
                key={path.id}
                onClick={() => handlePathChange(path.id)}
                className={`flex-1 flex items-center justify-center p-2 rounded-full relative z-10 transition-colors ${
                  selectedPath === path.id ? 'text-[#161a20]' : 'text-white/50'
                }`}
              >
                <span className="font-medium text-xs xl:text-sm 2xl:text-base leading-tight whitespace-nowrap">
                  {path.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="flex items-start justify-center overflow-hidden w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem]">
          <div className="flex gap-4 xl:gap-6 2xl:gap-8 items-start w-full">
            {/* Left Sidebar */}
            <div className="flex flex-col items-start pb-0 pt-4 xl:pt-6 2xl:pt-8 px-0 w-full max-w-xs xl:max-w-sm 2xl:max-w-md">
              <div className="flex flex-col gap-2 items-center overflow-hidden pb-2 pt-0 px-0 w-full">
                {currentPath.modules.map((module, index) => (
                  <button
                    key={module.id}
                    onClick={() => setSelectedModule(module.id)}
                    className={`flex justify-center items-center px-3 xl:px-4 2xl:px-5 py-3 xl:py-4 2xl:py-5 rounded-xl xl:rounded-2xl w-full shadow-[inset_-1px_-1px_1px_0px_rgba(82,89,102,0.08),inset_2px_2px_2px_0px_rgba(0,0,0,0.5)] ${
                      selectedModule === module.id
                        ? 'bg-[#05141b] text-[#fefc00]'
                        : 'bg-[rgba(25,34,47,0.6)] text-[#b0b0b0]'
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex flex-col items-center w-full">
                        <p className={`${
                          selectedModule === module.id ? 'font-bold' : 'font-bold'
                        } text-sm md:text-base 2xl:text-lg leading-tight tracking-tight whitespace-nowrap`}>
                          Module {index}: {module.title.split(' ').slice(0, 2).join(' ')}
                          {module.title.split(' ').length > 2 && <><br />{module.title.split(' ').slice(2).join(' ')}</>}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Content Area */}
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
                    {currentModuleIndex === currentPath.modules.length - 1 ? (
                      <div className="bg-[#1e2c32] flex gap-0 items-center px-3 xl:px-4 2xl:px-5 py-3 xl:py-4 2xl:py-5 rounded-xl xl:rounded-2xl w-full">
                        <div className="flex flex-col items-start justify-center">
                          <div className="flex flex-col items-center pt-0 px-0 w-full">
                            <button
                              onClick={() => setSelectedModule(currentPath.modules[0].id)}
                              className="font-bold text-sm md:text-base 2xl:text-lg text-center tracking-tight leading-tight text-[#fefc00] underline decoration-solid hover:no-underline transition-all whitespace-nowrap"
                            >
                              Back to Module 0
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : nextModule ? (
                      <div className="bg-[#1e2c32] flex gap-0 items-center px-3 xl:px-4 2xl:px-5 py-3 xl:py-4 2xl:py-5 rounded-xl xl:rounded-2xl w-full">
                        <div className="flex flex-col items-start justify-center">
                          <div className="flex flex-col items-center pt-0 px-0 w-full">
                            <p className="font-bold text-sm md:text-base 2xl:text-lg text-center tracking-tight leading-tight whitespace-nowrap">
                              <span className="text-[#b0b0b0]">
                                Proceed to Module {currentModuleIndex + 1}: {nextModule.title}
                              </span>
                              <button
                                onClick={handleNextModule}
                                className="text-[#fefc00] underline decoration-solid ml-2 hover:no-underline transition-all"
                              >
                                View Next Module
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : null}

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
          </div>
        </div>
      </div>
    </div>
  );
}
