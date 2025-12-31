'use client';
import Image from 'next/image';

const whatsappIcon = 'https://res.cloudinary.com/seunsanyaa/image/upload/v1766934989/image-placeholder_irgokv.png';
const emailIcon = 'https://res.cloudinary.com/seunsanyaa/image/upload/v1766934991/image_26_apkayp.png';

export function ContactHero() {
  return (
    <div className="flex flex-col gap-6 items-center py-16 px-4 w-full">
      {/* Heading */}
      <div className="flex flex-col items-center w-full pb-4">
        <h1 className="font-medium text-white text-3xl sm:text-3xl md:text-5xl leading-[35.2px] tracking-[-2px] text-center">
          How we can help?
        </h1>
      </div>

      {/* Contact Cards */}
      <div className="flex flex-col md:flex-row gap-10 items-start  w-full max-w-3xl">
        {/* Email Card */}
        <div className="flex gap-3 items-center w-full">
        <div className="overflow-hidden relative size-12">
              <Image
                src={emailIcon}
                alt="WhatsApp"
                width={48}
                height={48}
                unoptimized
              />
            </div>
         
          <div className="flex flex-col gap-0 items-start flex-1">
            <h3 className="font-medium text-white text-lg leading-[18.9px]">
              Email
            </h3>
            <p className="font-normal text-[#b0b0b0] text-lg leading-5">
              For general queries, including enrollment support, please email{' '}
              <a
                href="mailto:hello@xelaris.co"
                className="text-[#fefc00] underline decoration-solid cursor-pointer"
              >
                hello@xelaris.co
              </a>
            </p>
          </div>
        </div>

        {/* WhatsApp Card */}
        <div className="flex gap-3 items-center w-full">
          <div className="flex items-center justify-center shrink-0">
            <div className="overflow-hidden relative size-12">
              <Image
                src={whatsappIcon}
                alt="WhatsApp"
                width={48}
                height={48}
                unoptimized
              />
            </div>
          </div>
          <div className="flex flex-col gap-0 items-start flex-1">
            <h3 className="font-medium text-white text-lg leading-[18.9px]">
              WhatsApp
            </h3>
            <p className="font-normal text-[#b0b0b0] text-lg leading-5">
              If you have a quick question, send us a WhatsApp message:{' '}<br/>
              <span className="text-[#fefc00]"> +44 7831 664124</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
