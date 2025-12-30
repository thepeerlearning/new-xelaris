'use client';
import Image from 'next/image';

interface AcceleratorProgram {
  id: string;
  badge: string;
  title: string;
  price: string;
  features: string[];
}

const checkIcon = 'https://res.cloudinary.com/seunsanyaa/image/upload/v1766954363/Vector_7_hofwlp.png';

const acceleratorPrograms: AcceleratorProgram[] = [
  {
    id: '1',
    badge: 'AI Accelerator',
    title: 'AI Program for High School Students',
    price: '$1300',
    features: [
      'Weekly 120 min 1:1 session with a professional AI engineer',
      'Personalized mentorship tailored to your chosen domain (AI + Health, Finance, Education, etc.)',
      'Comprehensive project guidance from concept to deployment',
      'Detailed session notes documenting progress and technical decisions',
      'Flexible rescheduling with 24-hour notice',
      'Access to curated datasets, tools, and resources for your project',
      'Final portfolio project review and presentation feedback',
    ],
  },
  {
    id: '2',
    badge: 'Web3 Beginner',
    title: 'Web3 Program for High School Students',
    price: '$1500',
    features: [
      'Weekly 120 min 1:1 session with a professional blockchain developer',
      'Introduction to blockchain fundamentals, smart contracts, and decentralized applications',
      'Personalized learning path based on your interests (DeFi, DAOs.)',
      'Detailed session notes documenting progress and technical decisions',
      'Flexible rescheduling with 24-hour notice',
      'Access to test networks, development tools, and learning resources',
      'Final project: Deploy a smart contract or dApp',
    ],
  },
];

export function AcceleratorPrograms() {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 w-full lg:px-20 lg:pt-0 lg:pb-40">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center mb-8 px-4 w-full lg:mb-[60px]">
        <h2 className="font-medium text-white text-4xl leading-[35.2px] tracking-tight text-center max-w-sm lg:text-[60px] lg:leading-[66px] lg:tracking-[-2px] lg:max-w-[690px]">
          Accelerator Programs For High School Students
        </h2>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col gap-4 items-center w-full max-w-md lg:hidden">
        {acceleratorPrograms.map((program) => (
          <div
            key={program.id}
            className="flex items-start justify-center overflow-hidden p-px rounded-tl-[32px] rounded-tr-[32px] rounded-bl-[20px] rounded-br-[20px] bg-gradient-to-br from-white/10 via-white/5 to-white/0 w-full"
          >
            <div className="bg-[#1c2026] flex flex-col p-2 rounded-tl-[32px] rounded-tr-[32px] rounded-bl-[20px] rounded-br-[20px] w-full">
              {/* Price Section */}
              <div className="bg-[#12161c] flex flex-col gap-6 p-4 rounded-[24px]">
                {/* Badge */}
                  <div
                    className="backdrop-blur-sm flex items-center px-3 py-1.5 rounded-[24px] shadow-[0px_4px_4px_0px_#fefc00] bg-gradient-to-br from-[#2c2e31] to-[#1e2024]"
                  >
                    <p className="font-medium leading-5 text-white text-lg tracking-tight text-center">
                      {program.badge}
                    </p>
                
                </div>

                {/* Price */}
                <div className="flex items-end">
                  <h3 className="font-bold text-white text-[32px] leading-[38.4px] tracking-tight">
                    {program.price}
                  </h3>
                  <span className="font-normal text-[#b0b0b0] text-sm leading-[16.8px] tracking-tight pb-1.5">
                    /month
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="flex flex-col gap-3 pl-4 pr-0 pt-2 pb-8 mt-4">
                {program.features.map((feature, index) => (
                  <div key={index} className="flex gap-2 items-start">
                    <div className="flex items-center justify-center shrink-0 w-6 h-6">
                      <Image
                        src={checkIcon}
                        alt=""
                        width={24}
                        height={24}
                        unoptimized
                      />
                    </div>
                    <p className="font-medium leading-6 text-white text-lg tracking-tight flex-1">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex items-center justify-center w-full mt-auto">
                <button className="bg-[#fefc00] flex items-center justify-center overflow-hidden py-3 px-0 rounded-xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] w-full">
                  <span className="font-medium text-[#161a20] text-lg leading-6 tracking-[-0.4px] text-center">
                    Apply For Consideration→
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout - 2 Cards Side by Side */}
      <div className="hidden lg:flex lg:gap-4 lg:items-start lg:justify-center lg:w-full lg:max-w-[1200px]">
        {acceleratorPrograms.map((program) => (
          <div
            key={program.id}
            style={{
              height: "-webkit-fill-available",
            }}
            className="w-[400px] flex items-start justify-center overflow-hidden p-px rounded-tl-[32px] rounded-tr-[32px] rounded-bl-[20px] rounded-br-[20px] bg-gradient-to-br from-white/10 via-white/5 to-white/0"
          >
            <div style={{
              height: "-webkit-fill-available",
            }} className="bg-[#1c2026] flex flex-col p-2 rounded-tl-[32px] rounded-tr-[32px] rounded-bl-[20px] rounded-br-[20px] w-full">
              {/* Price Section */}
              <div className="bg-[#12161c] flex flex-col gap-6 p-4 rounded-[24px]">
                {/* Badge */}
                <div className="flex items-center justify-center overflow-hidden p-px rounded-[24px] w-fit  py-1 px-3" style={{
                  backgroundImage: "linear-gradient(137.13deg, rgba(255, 255, 255, 0.2) 3%, rgba(255, 255, 255, 0) 87%)",
                  backdropFilter: "blur(3px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",

                }}>
               
                    <p className="font-medium leading-6 text-white text-lg tracking-tight text-center">
                      {program.badge}
                    </p>
              
                </div>


                {/* Price */}
                <div className="flex items-end">
                  <h3 className="font-bold text-white text-[32px] leading-[38.4px] tracking-tight">
                    {program.price}
                  </h3>
                  <span className="font-normal text-[#b0b0b0] text-sm leading-[16.8px] tracking-tight pb-1.5">
                    /month
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="flex flex-col gap-3 pl-4 pr-0 pt-2 pb-8 mt-4">
                {program.features.map((feature, index) => (
                  <div key={index} className="flex gap-2 items-start">
                    <div className="flex items-center justify-center shrink-0 w-6 h-6">
                      <Image
                        src={checkIcon}
                        alt=""
                        width={24}
                        height={24}
                        unoptimized
                      />
                    </div>
                    <p className="font-medium leading-6 text-white text-lg tracking-tight flex-1">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex items-center justify-center w-full mt-auto">
                <button className="bg-[#fefc00] flex items-center justify-center overflow-hidden py-3 px-0 rounded-xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] w-full">
                  <span className="font-medium text-[#161a20] text-lg leading-6 tracking-[-0.4px] text-center">
                    Apply For Consideration→
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

