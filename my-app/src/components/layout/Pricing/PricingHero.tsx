'use client';

type ProgramTab = 'foundation' | 'intermediate' | 'advanced';

interface PricingHeroProps {
  selectedProgram: ProgramTab;
  onProgramChange: (program: ProgramTab) => void;
}

export function PricingHero({ selectedProgram, onProgramChange }: PricingHeroProps) {

  return (
    <div className="flex flex-col items-center py-12 px-4 w-full">
      {/* Program Tabs */}

      <h2 className="font-bold text-white text-3xl tracking-wide pb-6 md:text-4xl lg:text-6xl leading-tight xl:leading-tight 2xl:leading-tight tracking-tight xl:tracking-tight 2xl:tracking-tighter">
          Pricing
        </h2>

      <div className="flex items-center justify-center p-px rounded-[112px] bg-gradient-to-r from-white/10 to-white/0">
        <div className="bg-[#21252a] flex items-center p-1 rounded-[112px] w-[344px] relative">
          {/* Active State Background */}
          <div
            className={`absolute bg-[#fefc00] h-[34px] rounded-[96px] transition-all duration-300 ${
              selectedProgram === 'foundation'
                ? 'left-[5px] w-[106px]'
                : selectedProgram === 'intermediate'
                ? 'left-[113px] w-[110px]'
                : 'left-[226px] w-[110px]'
            }`}
          />

          {/* Foundation Tab */}
          <button
            onClick={() => onProgramChange('foundation')}
            className={`flex-1 flex items-center justify-center p-2 rounded-[96px] relative z-10 ${
              selectedProgram === 'foundation'
                ? 'text-[#21252a] font-bold'
                : 'text-white/50 font-medium'
            }`}
          >
            <span className="text-sm leading-[18px]">Foundation</span>
          </button>

          {/* Intermediate Tab */}
          <button
            onClick={() => onProgramChange('intermediate')}
            className={`flex-1 flex items-center justify-center p-2 rounded-[96px] relative z-10 ${
              selectedProgram === 'intermediate'
                ? 'text-[#21252a] font-bold'
                : 'text-white/50 font-medium'
            }`}
          >
            <span className="text-sm leading-[18px]">Intermediate</span>
          </button>

          {/* Advanced Tab */}
          <button
            onClick={() => onProgramChange('advanced')}
            className={`flex-1 flex items-center justify-center p-2 rounded-[96px] relative z-10 ${
              selectedProgram === 'advanced'
                ? 'text-[#21252a] font-bold'
                : 'text-white/50 font-medium'
            }`}
          >
            <span className="text-sm leading-[18px]">Advanced</span>
          </button>
        </div>
      </div>

      {/* Description */}
      <p className="font-medium leading-5 text-white text-lg text-center tracking-[-0.4px] max-w-xs lg:max-w-2xl mt-6">
        Our goal is to provide the finest online tech education available. When you enrol your child, their tuition includes much more than just the standard class experience
      </p>
    </div>
  );
}
