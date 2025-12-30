'use client';

interface Module {
  id: string;
  title: string;
  overview: string;
  learningObjectives?: string[];
  practicalWork?: string[];
}

const domains = [
  'AI + Health',
  'AI + Finance',
  'AI + Law',
  'AI + Education',
  'AI + Business',
  'AI + Language',
];

const modules: Module[] = [
  {
    id: 'module-0',
    title: 'Foundations & Project Scoping',
    overview: 'This module establishes the development environment and refreshes essential Python skills for machine learning. The focus is on exploring a chosen domain, identifying a meaningful problem to solve, and beginning to scope the capstone project with mentor guidance.',
    learningObjectives: [
      'Refresh Python for machine learning',
      'Understand the ML development workflow',
      'Define a meaningful problem in chosen domain',
    ],
    practicalWork: [
      'Build first simple ML model using scikit-learn',
      'Implement proper train-test splitting',
      'Calculate and interpret evaluation metrics',
      'Document baseline performance',
    ],
  },
  {
    id: 'module-1',
    title: 'Machine Learning Fundamentals',
    overview: '',
  },
  {
    id: 'module-2',
    title: 'Data Preprocessing & Feature Engineering',
    overview: '',
  },
  {
    id: 'module-3',
    title: 'Regression Algorithms',
    overview: '',
  },
  {
    id: 'module-4',
    title: 'Classification Algorithms I',
    overview: '',
  },
  {
    id: 'module-5',
    title: 'Classification Algorithms II & Model Selection',
    overview: '',
  },
  {
    id: 'module-6',
    title: 'Introduction to Neural Networks',
    overview: '',
  },
  {
    id: 'module-7',
    title: 'Natural Language Processing',
    overview: '',
  },
  {
    id: 'module-8',
    title: 'Advanced Deep Learning for Domain',
    overview: '',
  },
  {
    id: 'module-9',
    title: 'Model Interpretability & Explainability',
    overview: '',
  },
  {
    id: 'module-10',
    title: 'Deployment Basics & MLOps Introduction',
    overview: '',
  },
  {
    id: 'module-11',
    title: 'Ethics, Bias, & Responsible AI',
    overview: '',
  },
  {
    id: 'module-12-13',
    title: 'Capstone Project Development',
    overview: '',
  },
];

export function AIProgram() {
  const currentModule = modules[0]; // Only Module 0 is available

  return (
    <div className="flex flex-col gap-6 items-center w-full py-10 px-4 lg:px-0 lg:py-0 lg:pb-[124px]">
      {/* Mobile Layout */}
      <div className="flex flex-col gap-6 items-center w-full max-w-4xl lg:hidden">
        {/* Philosophy Section */}
        <div className="flex flex-col gap-4 items-center w-full">
          <h2 className="font-medium text-white text-4xl text-center tracking-tight">
            Our AI Program
            <br />
            Philosophy
          </h2>
          <p className="font-medium leading-5 text-center text-[#b0b0b0] text-lg max-w-sm">
            Domain-first learning. Students select their AI application area from day one and build toward a professional-grade capstone project in that domain.
          </p>
        </div>

        {/* Domain Selection */}
        <div className="flex flex-col gap-4 items-center w-full">
          <h2 className="font-medium text-white text-4xl text-center tracking-tight">
            Domain Selection
          </h2>
          <p className="font-medium leading-5 text-center text-[#b0b0b0] text-lg max-w-sm">
            Students commit to one of these domains for the entire program:
          </p>
          <div className="flex flex-wrap gap-2 items-center justify-center w-full">
            {domains.map((domain) => (
              <div
                key={domain}
                className="bg-white/10 flex items-center justify-center px-4 py-3 rounded-lg"
              >
                <span className="font-semibold text-white text-lg">{domain}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Program Curriculum */}
        <div className="flex flex-col gap-4 items-center w-full pt-16">
          <h2 className="font-bold text-white text-3xl text-center tracking-tight">
            Program Curriculum
          </h2>
          <p className="font-medium leading-6 text-center text-[#b0b0b0] text-lg max-w-md">
            This AI Program is developed by professional engineers and AI practitioners who build real systems. Not only is it developed but also vetted and taught by experts in the field.
          </p>
        </div>

        {/* Module Container */}
        <div className="flex flex-col items-center w-full mt-6">
          <div className="flex items-start overflow-clip p-px relative rounded-[34px] w-full bg-gradient-to-br from-white/20 via-white/20 to-white/0">
            <div className="bg-[#05141b] flex flex-col items-center overflow-clip pb-6 pt-6 px-2 rounded-[34px] w-full">
              {/* Main Title */}
              <div className="flex flex-col gap-6 items-start px-3 py-0 w-full">
                <div className="flex flex-col items-start overflow-clip w-full">
                  <div className="flex flex-col items-start">
                    <h3 className="font-bold leading-6 text-white text-2xl tracking-tight">
                      Foundations & Project Scoping
                    </h3>
                  </div>
                </div>
                
                {/* Module Overview */}
                <div className="flex flex-col font-normal  pt-4 justify-center leading-0 text-center text-[#b0b0b0] tracking-tight w-full">
                  <p className="font-normal leading-5 mb-0 text-white text-xl">Module Overview</p>
                  <p className="leading-6 text-lg py-2">{currentModule.overview}</p>
                </div>
              </div>

              {/* Module 0 Expandable Header */}

              <div  className="bg-white/10 w-full rounded-xl mt-6">

        
              <div className="flex gap-0 items-start p-5 rounded-tl-xl rounded-tr-xl w-full">
                <div className="flex flex-col items-start w-full">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col items-start pl-0 pr-8 py-0">
                      <div className="flex flex-col font-bold justify-center leading-5 text-lg text-white tracking-tight">
                        <p className="mb-0">Module 0: Foundations</p>
                        <p>& Project Scoping</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start shrink-0">
                      <div className="relative w-6 h-6">
                        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           
              {/* Learning Objectives */}
              <div className=" flex gap-0 items-start px-5 rounded-lg w-full">
                <div className="flex flex-col items-start w-full">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col items-center w-full">
                      <div className="flex flex-col font-semibold justify-center leading-0 text-white w-full">
                        <p className="leading-7 mb-0 text-lg">&nbsp;</p>
                        <p className="font-semibold leading-7 mb-0 text-lg">Learning Objectives:</p>
                        <ul className="list-disc mb-0 ml-6">
                          {currentModule.learningObjectives?.map((objective, index) => (
                            <li key={index} className="mb-0">
                              <span className="font-semibold leading-7 text-[#b0b0b0] text-lg">{objective}</span>
                            </li>
                          ))}
                        </ul>
                   
                      </div>
                    </div>
                  </div>
                </div>
              </div>
         
              {/* Practical Work */}
              <div className="flex gap-0 items-start px-5  w-full">
                <div className="flex flex-col items-start w-full">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col items-center w-full">
                      <div className="flex flex-col font-semibold justify-center leading-0 text-white w-full">
                        <p className="leading-7 mb-0 text-lg">&nbsp;</p>
                        <p className="font-semibold leading-7 mb-0 text-lg">Practical Work</p>
                        <ul className="list-disc mb-0 ml-6">
                          {currentModule.practicalWork?.map((work, index) => (
                            <li key={index} className="mb-0">
                              <span className="font-normal leading-7 text-[#b0b0b0] text-lg">{work}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="leading-7 text-lg">&nbsp;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              {/* Other Modules (Collapsed, non-interactive) */}
              <div className="flex flex-col gap-2 items-start w-full mt-2">
                {modules.slice(1).map((module, index) => {
                  const moduleNumber = index === 11 ? '12-13' : (index + 1).toString();
                  
                  return (
                    <div
                      key={module.id}
                      className="bg-[#19222f]/60 flex gap-0 items-center px-4 py-4 rounded-2xl w-full shadow-[inset_-1px_-1px_1px_0px_rgba(82,89,102,0.08),inset_2px_2px_2px_0px_rgba(0,0,0,0.5)]"
                    >
                      <div className="flex flex-col items-start justify-center w-full">
                        <div className="flex flex-col items-center w-full">
                          <div className="flex flex-col font-bold justify-center leading-5 text-[#b0b0b0] text-lg tracking-tight">
                            <p className="mb-0">{`Module ${moduleNumber}: ${module.title.split(' ')[0]}`}</p>
                            <p>{module.title.substring(module.title.indexOf(' ') + 1)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="bg-[#1e2c32] flex gap-0 items-start p-4 rounded-xl w-full mt-2">
                <div className="flex flex-col items-start w-full">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col items-start pl-0 pr-2 py-0 w-full">
                      <div className="flex flex-col font-semibold justify-center leading-5 text-lg tracking-tight w-full">
                        <p className="leading-5 mb-0 text-[#b0b0b0]">Proceed to Module 2:</p>
                        <p className="leading-5 text-[#b0b0b0]">
                          Logic with Scratch{' '}
                        </p>
                      </div>
                    </div>
                    <span className="underline whitespace-nowrap text-[#fefc00] decoration-solid">View Next Level</span>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:flex-col lg:gap-7 lg:items-center lg:w-full">
        {/* Philosophy Header */}
        <div className="flex flex-col items-center w-full pt-[46px] pb-[20px]">
          <div className="flex flex-col items-center min-w-[1200px] mb-[11px]">
            <h1 className="font-medium text-white text-[60px] leading-[66px] text-center tracking-[-2px] whitespace-nowrap">
              Our AI Program Philosophy
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center min-w-[1200px]">
            <p className="font-medium text-[#b0b0b0] text-lg text-center tracking-[-0.4px] leading-[22.4px] max-w-[700px]">
              Domain-first learning. Students select their AI application area from day one and build toward a professional-grade capstone project in that domain.
            </p>
          </div>
        </div>

        {/* Domain Selection */}
        <div className="flex flex-col items-center w-full pb-[20px]">
          <div className="flex flex-col items-center min-w-[1200px] mb-[11px]">
            <h2 className="font-medium text-white text-[48px] leading-[56px] text-center tracking-[-2px] whitespace-nowrap">
              Domain Selection
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center min-w-[1200px] mb-4">
            <p className="font-medium text-[#b0b0b0] text-lg text-center tracking-[-0.4px] leading-[22.4px]">
              Students commit to one of these domains for the entire program:
            </p>
          </div>
          <div className="flex flex-wrap gap-2 items-center justify-center max-w-[800px]">
            {domains.map((domain) => (
              <div
                key={domain}
                className="bg-white/10 flex items-center justify-center px-6 py-3 rounded-lg"
              >
                <span className="font-semibold text-white text-lg">{domain}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Program Curriculum Header */}
        <div className="flex flex-col items-center w-full pt-[46px] pb-[45px]">
          <div className="flex flex-col items-center min-w-[1200px] mb-[11px]">
            <h2 className="font-bold text-white text-[48px] leading-[56px] text-center tracking-[-2px] whitespace-nowrap">
              Program Curriculum
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center min-w-[1200px]">
            <p className="font-medium text-[#b0b0b0] text-lg text-center tracking-[-0.4px] leading-[22.4px] max-w-[700px]">
              This AI Program is developed by professional engineers and AI practitioners who build real systems. Not only is it developed but also vetted and taught by experts in the field.
            </p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="flex   items-start justify-center overflow-hidden w-full">
          <div className="flex gap-8  items-start">
            {/* Left Sidebar - Module List */}
            <div className="flex flex-col items-start pb-0 pt-9 px-0">
              <div className="flex flex-col gap-2 items-center overflow-hidden pb-2 pt-0 px-0 w-full">
                {modules.map((module, index) => {
                  const moduleNumber = index === 12 ? '12-13' : index.toString();
                  
                  return (
                    <button
                      key={module.id}
                      className={`flex justify-center items-center px-4 py-[18px] rounded-2xl w-full shadow-[inset_-1px_-1px_1px_0px_rgba(82,89,102,0.08),inset_2px_2px_2px_0px_rgba(0,0,0,0.5)] ${
                        index === 0
                          ? 'bg-[#05141b] text-[#fefc00]'
                          : 'bg-[rgba(25,34,47,0.6)] text-[#b0b0b0]'
                      }`}
                    >
                      <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center w-full">
                          <p className={`${
                            index === 0 ? 'font-bold' : 'font-bold'
                          } text-lg leading-[20.8px] tracking-[-0.16px] whitespace-nowrap`}>
                            Module {moduleNumber}: {module.title.split(' ')[0]}
                            {module.title.split(' ').length > 1 && <><br />{module.title.substring(module.title.indexOf(' ') + 1)}</>}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex flex-col gap-0   items-center px-0 py-9 w-[737px]">
              <div className="flex flex-col h-auto items-center overflow-hidden w-full">
                <div 
                  className="flex h-auto items-start overflow-hidden p-px rounded-[34px] w-full"
                  style={{
                    backgroundImage: 'linear-gradient(100.5deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 56%)'
                  }}
                >
                  <div className="bg-[#05141b] flex-1 flex flex-col gap-[25px] h-auto items-center overflow-hidden pb-0 pt-[31px] px-2 rounded-[34px]">
                    {/* Module Title and Overview */}
                    <div className="flex flex-col gap-0 items-start px-6 py-0 w-full">
                      <div className="flex flex-col gap-3 items-start w-[630.64px]">
                        <div className="flex flex-col items-start w-full">
                          <h2 className="font-bold h-[38px] leading-[30.3px] text-[30px] text-white tracking-[-0.3px] w-full whitespace-pre-wrap">
                            {currentModule.title}
                          </h2>
                        </div>
                        <div className="flex flex-col items-start w-full">
                          <div className="font-normal leading-[21.6px] text-[#b0b0b0] w-full whitespace-pre-wrap">
                            <p className="mb-0 text-[20px] text-white">Module Overview</p>
                            <p className="text-base">{currentModule.overview}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Module 0 Expanded Content */}
                    <div className="bg-white/10 w-[671px] rounded-[14px]">
                      <div className="flex gap-4 items-start p-5 rounded-tl-[14px] rounded-tr-[14px] w-full">
                        <div className="flex-1 flex flex-col items-start">
                          <div className="flex items-center justify-between w-full">
                            <div className="flex flex-col items-start pr-8">
                              <p className="font-bold leading-5 text-lg text-white tracking-tight">
                                Module 0: Foundations & Project Scoping
                              </p>
                            </div>
                            <div className="flex flex-col items-start shrink-0">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                  
                      {/* Learning Objectives */}
                      <div className="flex gap-0 items-start px-5 w-full">
                        <div className="flex flex-col items-start w-full">
                          <div className="flex flex-col items-center w-full">
                            <div className="flex flex-col font-semibold justify-center text-white w-full">
                              <p className="leading-7 mb-0 text-lg">&nbsp;</p>
                              <p className="font-semibold leading-7 mb-0 text-lg">Learning Objectives:</p>
                              <ul className="list-disc mb-0 ml-6">
                                {currentModule.learningObjectives?.map((objective, index) => (
                                  <li key={index} className="mb-0">
                                    <span className="font-semibold leading-7 text-[#b0b0b0] text-lg">{objective}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                
                      {/* Practical Work */}
                      <div className="flex gap-0 items-start px-5 w-full">
                        <div className="flex flex-col items-start w-full">
                          <div className="flex flex-col items-center w-full">
                            <div className="flex flex-col font-semibold justify-center text-white w-full">
                              <p className="leading-7 mb-0 text-lg">&nbsp;</p>
                              <p className="font-semibold leading-7 mb-0 text-lg">Practical Work</p>
                              <ul className="list-disc mb-0 ml-6">
                                {currentModule.practicalWork?.map((work, index) => (
                                  <li key={index} className="mb-0">
                                    <span className="font-normal leading-7 text-[#b0b0b0] text-lg">{work}</span>
                                  </li>
                                ))}
                              </ul>
                              <p className="leading-7 text-lg">&nbsp;</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Navigation */}
                    <div className="bg-[#1e2c32] flex gap-0 items-center px-4 py-[18px] rounded-2xl w-[671px]">
                      <div className="flex flex-col items-start justify-center">
                        <div className="flex flex-col items-center pb-[0.8px] pt-0 px-0 w-full">
                          <p className="font-bold text-lg text-center tracking-[-0.16px] leading-[20.8px] whitespace-nowrap">
                            <span className="text-[#b0b0b0]">
                              Proceed to Module 1:                                                    
                            </span>
                            <button className="text-[#fefc00] underline decoration-solid ml-2 hover:no-underline transition-all">
                              View Next Module
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Spacer */}
                    <div className="flex flex-col items-start w-full">
                      <div className="bg-transparent flex items-center justify-center p-[2px] rounded-[18px] w-full">
                        <div className="bg-transparent flex-1 h-[52px] rounded-[18px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)]" />
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

