'use client';
import Image from 'next/image';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Mia Liam',
    role: 'Software Developer',
    quote: '"Proud owner of more unread books than read ones. The library anxiety is real."',
    image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1767031847/ee08b3da9073eafa8ee45695ad276055c63b2462_szom5t.png',
  },
  {
    id: '2',
    name: 'Priya Mehta',
    role: 'Scheduling Coordinator',
    quote: " \"I'm a left-handed lover of pizza. I've never met a pizza I didn't like Lol.\"",
    image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1767031865/29dc3bc524c33b9d7b9c8e8721ea1764800db126_vy5ewh.png',
  },
  {
    id: '3',
    name: 'Sushi Uji',
    role: 'Product Designer',
    quote: "\"Catch me at my most excited when the kids debug their own code, I'll be giving out high-fives like candy\"",
    image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1767031888/f90132d0bd1a36c363d8bc31166b5c5172613f57_qivq73.png',
  },
  {
    id: '4',
    name: 'Casweeney',
    role: 'Blockchain Engineer',
    quote: '"I believe in learning by building. Show me your bug and I\'ll show you how to fix it."',
    image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1767031893/56955ec2a00713b33c0c079e2f829914bacd9b44_gnowuo.png',
  },
  {
    id: '5',
    name: 'Emilia Zhang',
    role: 'AI/ML',
    quote: '"Adult who still gets unreasonably excited about snow days. Age is just a number."',
    image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1767031902/fa7a62dbff221e5386a5037e8df3f17e3d7b797a_ep82z8.png',
  },
  {
    id: '6',
    name: 'Amelia Yates',
    role: 'Program Manager',
    quote: '"I\'ve never broken a bone but I have broken 3 phones in one year. Make of that what you will."',
    image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1767031912/aaa2d9867dac4b2faec20fd3fb0ce1a889fc8215_k9whtg.png',
  },
  {
    id: '7',
    name: 'Aisha Abdulkadi',
    role: 'Software Developer',
    quote: '"The best way I understand system is I take it apart. This has always worked, but my IKEA furniture disagrees."',
    image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1767031929/20cb1eec18039f6209aba126dced7afec7c905de_zi2adn.png',
  },
  {
    id: '8',
    name: 'Jasmine Ryan',
    role: 'Customer Success',
    quote: '"Karaoke enthusiast with the confidence of Beyonce and the voice of... not Beyonce."',
    image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1767031935/29dcb4de1cf8fcca08d6d377e4ef0be75e634118_nplzuc.png',
  },
  {
    id: '9',
    name: 'Soumen',
    role: 'Game Developer',
    quote: '"Kindness is costless but also priceless"',
    image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1767032026/image-placeholder_1_x6uplo.png',
  },
  {
    id: '10',
    name: 'Daniel Reyes',
    role: 'Software Developer',
    quote: '"Morning person trapped in a night owl\'s body. The struggle is real and caffeinated."',
    image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1767031953/8f79892c3cb036914b39409cbf8325ac0a83ee56_fmmbns.png',
  },
  {
    id: '11',
    name: 'Sophie Patel',
    role: 'Product Designer',
    quote: '"Convinced my dog understands three languages. Convinced my cat understands zero."',
    image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1767031966/a58b4a667e6dc398ab957f4ff1dd645dbf59098e_otrtwu.png',
  },
  {
    id: '12',
    name: 'Eliana Luca',
    role: 'AI/ML',
    quote: " \"Bookworm who judges you by your favorite book. Silently. But I'm judging.\"",
    image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1767031912/aaa2d9867dac4b2faec20fd3fb0ce1a889fc8215_k9whtg.png',
  },
  {
    id: '13',
    name: 'Sam Eseyin',
    role: 'Software Developer',
    quote: '"If I can teach one kid that they can build anything they imagine, I\'ve done my job."',
    image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1767035760/or6XD584AhJWFCfXx1bfHMhY2qw.png_4_mx1g2m.png',
  },
  {
    id: '14',
    name: 'Malik Gwandu',
    role: 'Product Designer',
    quote: '"I do yoga between design sessions and pretend it\'s not procrastination."',
    image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1767036092/image-placeholder_2_knkpy4.png',
  },
  {
    id: '15',
    name: 'Jordan Smith',
    role: 'Software Developer',
    quote: '"Concert enthusiast who spent more on tickets last year than groceries. No regrets."',
    image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1767035699/c02fe4accb59d9e4859ff7856d79519e05709bcd_opamzh.png',
  },
  {
    id: '16',
    name: 'Martha Ngedu',
    role: 'Software Developer',
    quote: '"Calm on the outside. Tabs open on the inside."',
    image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1767036104/image-placeholder_3_qlbusp.png',
  },
];

export function TeamGrid() {
  return (
    <div className="flex flex-col gap-4 items-center w-full py-10 px-4 lg:px-20 lg:pb-40">
      {/* Mobile Layout */}
      <div className="flex flex-col gap-4 items-center w-full max-w-4xl lg:hidden">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-gradient-to-b from-[#242930] to-[#13181f] border border-white/20 rounded-[34px] overflow-hidden shadow-lg w-full"
          >
            {/* Image */}
            <div className="relative w-full h-[284px] overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 px-4 py-6">
              <div className="flex flex-col">
                <h3 className="font-bold text-white text-xl leading-6 tracking-tight">
                  {member.name}
                </h3>
                <p className="font-normal text-[#fefc00] text-lg leading-6">
                  {member.role}
                </p>
              </div>

              <p className="font-normal leading-5 text-[#b0b0b0] text-lg">
                {member.quote}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:flex-col lg:gap-16 lg:items-stretch lg:w-full lg:max-w-[1200px]">
        {/* Row 1 */}
        <div className="flex gap-4 items-stretch w-full">
          {teamMembers.slice(0, 4).map((member) => (
            <div
              key={member.id}
              className="flex-1 flex flex-col items-stretch overflow-hidden"
            >
              <div className="bg-[rgba(255,255,255,0)] flex items-stretch justify-center overflow-hidden rounded-[34px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25),inset_1px_1px_1px_0px_rgba(255,255,255,0.1)] w-full h-full flex-1">
                <div 
                  className="flex-1 flex items-stretch overflow-hidden p-px rounded-[34px] h-full"
                  style={{
                    backgroundImage: 'linear-gradient(140.83deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 83%)'
                  }}
                >
                  <div className="bg-[#1b1f24] flex-1 flex items-stretch justify-center overflow-hidden p-2 rounded-[34px] h-full">
                    <div 
                      className="flex-1 flex items-stretch overflow-hidden p-px rounded-[28px] h-full"
                      style={{
                        backgroundImage: 'linear-gradient(139.62deg, rgba(255, 255, 255, 0.2) 3%, rgba(255, 255, 255, 0) 87%)'
                      }}
                    >
                      <div className="bg-gradient-to-b from-[#242930] to-[#13181f] flex-1 flex flex-col gap-[10px] items-start rounded-[28px] shadow-[inset_4px_4px_4px_0px_rgba(255,255,255,0.03),inset_-5px_-9px_11px_0px_rgba(0,0,0,0.15)] h-full min-h-0">
                        {/* Image */}
                        <div className="relative w-full flex-shrink-0" style={{ aspectRatio: '370/278' }}>
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover w-full h-full rounded-t-[28px]"
                            unoptimized
                          />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-2 items-start pb-6 px-6 w-full flex-1 min-h-0">
                          <div className="flex flex-col items-start justify-center w-full flex-shrink-0">
                            <h3 className="font-bold text-white text-[20px] leading-6 tracking-[-0.4px] mb-0">
                              {member.name}
                            </h3>
                            <p className="font-normal text-[#fefc00] text-lg leading-6">
                              {member.role}
                            </p>
                          </div>
                          <p className="font-normal text-[14px] leading-5 text-[#b0b0b0] tracking-[-0.4px] flex-1 overflow-hidden">
                            {member.quote}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex gap-4 items-stretch w-full">
          {teamMembers.slice(4, 8).map((member) => (
            <div
              key={member.id}
              className="flex-1 flex flex-col items-stretch overflow-hidden"
            >
              <div className="bg-[rgba(255,255,255,0)] flex items-stretch justify-center overflow-hidden rounded-[34px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25),inset_1px_1px_1px_0px_rgba(255,255,255,0.1)] w-full h-full flex-1">
                <div 
                  className="flex-1 flex items-stretch overflow-hidden p-px rounded-[34px] h-full"
                  style={{
                    backgroundImage: 'linear-gradient(140.83deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 83%)'
                  }}
                >
                  <div className="bg-[#1b1f24] flex-1 flex items-stretch justify-center overflow-hidden p-2 rounded-[34px] h-full">
                    <div 
                      className="flex-1 flex items-stretch overflow-hidden p-px rounded-[28px] h-full"
                      style={{
                        backgroundImage: 'linear-gradient(139.62deg, rgba(255, 255, 255, 0.2) 3%, rgba(255, 255, 255, 0) 87%)'
                      }}
                    >
                      <div className="bg-gradient-to-b from-[#242930] to-[#13181f] flex-1 flex flex-col gap-[10px] items-start rounded-[28px] shadow-[inset_4px_4px_4px_0px_rgba(255,255,255,0.03),inset_-5px_-9px_11px_0px_rgba(0,0,0,0.15)] h-full">
                        <div className="relative w-full flex-shrink-0" style={{ height: '0', paddingBottom: '75%' }}>
                          <div className="absolute inset-0 overflow-hidden">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover w-full h-full"
                              unoptimized
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 items-start pb-6 px-6 w-full flex-1">
                          <div className="flex flex-col items-start justify-center w-full">
                            <h3 className="font-bold text-white text-[20px] leading-6 tracking-[-0.4px] mb-0">
                              {member.name}
                            </h3>
                            <p className="font-normal text-[#fefc00] text-lg leading-6">
                              {member.role}
                            </p>
                          </div>
                          <p className="font-normal text-[14px] leading-5 text-[#b0b0b0] tracking-[-0.4px]">
                            {member.quote}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex gap-4 items-stretch w-full">
          {teamMembers.slice(8, 12).map((member) => (
            <div
              key={member.id}
              className="flex-1 flex flex-col items-stretch overflow-hidden"
            >
              <div className="bg-[rgba(255,255,255,0)] flex items-stretch justify-center overflow-hidden rounded-[34px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25),inset_1px_1px_1px_0px_rgba(255,255,255,0.1)] w-full h-full flex-1">
                <div 
                  className="flex-1 flex items-stretch overflow-hidden p-px rounded-[34px] h-full"
                  style={{
                    backgroundImage: 'linear-gradient(140.83deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 83%)'
                  }}
                >
                  <div className="bg-[#1b1f24] flex-1 flex items-stretch justify-center overflow-hidden p-2 rounded-[34px] h-full">
                    <div 
                      className="flex-1 flex items-stretch overflow-hidden p-px rounded-[28px] h-full"
                      style={{
                        backgroundImage: 'linear-gradient(139.62deg, rgba(255, 255, 255, 0.2) 3%, rgba(255, 255, 255, 0) 87%)'
                      }}
                    >
                      <div className="bg-gradient-to-b from-[#242930] to-[#13181f] flex-1 flex flex-col gap-[10px] items-start rounded-[28px] shadow-[inset_4px_4px_4px_0px_rgba(255,255,255,0.03),inset_-5px_-9px_11px_0px_rgba(0,0,0,0.15)] h-full">
                        <div className="relative w-full flex-shrink-0" style={{ height: '0', paddingBottom: '75%' }}>
                          <div className="absolute inset-0 overflow-hidden">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover w-full h-full"
                              unoptimized
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 items-start pb-6 px-6 w-full flex-1">
                          <div className="flex flex-col items-start justify-center w-full">
                            <h3 className="font-bold text-white text-[20px] leading-6 tracking-[-0.4px] mb-0">
                              {member.name}
                            </h3>
                            <p className="font-normal text-[#fefc00] text-lg leading-6">
                              {member.role}
                            </p>
                          </div>
                          <p className="font-normal text-[14px] leading-5 text-[#b0b0b0] tracking-[-0.4px]">
                            {member.quote}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 4 - Last 4 members */}
        <div className="flex gap-4 items-stretch w-full">
          {teamMembers.slice(12, 16).map((member) => (
            <div
              key={member.id}
              className="flex-1 flex flex-col items-stretch overflow-hidden"
            >
              <div className="bg-[rgba(255,255,255,0)] flex items-stretch justify-center overflow-hidden rounded-[34px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25),inset_1px_1px_1px_0px_rgba(255,255,255,0.1)] w-full h-full flex-1">
                <div 
                  className="flex-1 flex items-stretch overflow-hidden p-px rounded-[34px] h-full"
                  style={{
                    backgroundImage: 'linear-gradient(140.83deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 83%)'
                  }}
                >
                  <div className="bg-[#1b1f24] flex-1 flex items-stretch justify-center overflow-hidden p-2 rounded-[34px] h-full">
                    <div 
                      className="flex-1 flex items-stretch overflow-hidden p-px rounded-[28px] h-full"
                      style={{
                        backgroundImage: 'linear-gradient(139.62deg, rgba(255, 255, 255, 0.2) 3%, rgba(255, 255, 255, 0) 87%)'
                      }}
                    >
                      <div className="bg-gradient-to-b from-[#242930] to-[#13181f] flex-1 flex flex-col gap-[10px] items-start rounded-[28px] shadow-[inset_4px_4px_4px_0px_rgba(255,255,255,0.03),inset_-5px_-9px_11px_0px_rgba(0,0,0,0.15)] h-full">
                        <div className="relative w-full flex-shrink-0" style={{ height: '0', paddingBottom: '75%' }}>
                          <div className="absolute inset-0 overflow-hidden">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover w-full h-full"
                              unoptimized
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 items-start pb-6 px-6 w-full flex-1">
                          <div className="flex flex-col items-start justify-center w-full">
                            <h3 className="font-bold text-white text-[20px] leading-6 tracking-[-0.4px] mb-0">
                              {member.name}
                            </h3>
                            <p className="font-normal text-[#fefc00] text-lg leading-6">
                              {member.role}
                            </p>
                          </div>
                          <p className="font-normal text-[14px] leading-5 text-[#b0b0b0] tracking-[-0.4px]">
                            {member.quote}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

