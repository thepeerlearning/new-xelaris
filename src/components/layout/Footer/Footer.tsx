"use client"

import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Flag from "react-world-flags"

// Country flag codes - organized by position in grid (4 rows x 5 columns for mobile, 4 rows x 6 columns for desktop)
// Based on the image: Row 1: USA, Australia, Canada, Bahamas, Indonesia, Luxembourg
// Row 2: France, Netherlands, Dominican Republic, Saint Kitts and Nevis, Hong Kong, Bahrain
// Row 3: Singapore, China, Russia, Brazil, New Zealand, Greece
// Row 4: Dominica, Israel, Maldives, Colombia, British Virgin Islands, (and more countries to fill 6 columns)
const countryCodes = [
  // Row 1
  "US", // USA
  "AU", // Australia
  "CA", // Canada
  "BS", // Bahamas
  "ID", // Indonesia
  "LU", // Luxembourg
  // Row 2
  "FR", // France
  "NL", // Netherlands
  "DO", // Dominican Republic
  "KN", // Saint Kitts and Nevis
  "HK", // Hong Kong
  "BH", // Bahrain
  // Row 3
  "SG", // Singapore
  "CN", // China
  "RU", // Russia
  "BR", // Brazil
  "NZ", // New Zealand
  "GR", // Greece
  // Row 4
  "DM", // Dominica
  "IL", // Israel
  "MV", // Maldives
  "CO", // Colombia
  "VG", // British Virgin Islands
]

interface FooterProps {
  onBookTrial?: () => void
  onContact?: () => void
  onSocialClick?: (platform: "instagram" | "facebook" | "twitter") => void
}

export function Footer({ onContact, onSocialClick }: FooterProps) {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set())

  const toggleSection = (section: string) => {
    const newOpenSections = new Set(openSections)
    if (newOpenSections.has(section)) {
      newOpenSections.delete(section)
    } else {
      newOpenSections.add(section)
    }
    setOpenSections(newOpenSections)
  }

  return (
    <div className="flex flex-col items-center w-full bg-black ">
      {/* CTA Buttons Section */}
      <div className="flex flex-col lg:flex-row items-center lg:max-w-full w-full">
        {/* Book A Trial Class Button */}
        <a
          href="https://cal.com/xelaris/trial-class"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#fefc00] border-b border-l-0 lg:border-l border-r border-t border-black flex gap-2 sm:gap-2.5 items-center justify-left md:justify-center py-4 sm:py-5 md:py-6 lg:py-5 xl:py-6 2xl:py-8 px-4 sm:px-5 md:px-6 w-full lg:flex-1"
        >
          <div className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative">
            <svg
              className="w-full h-full"
              viewBox="0 0 19 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4577 10.0234H5.20768M7.29102 14.0164H5.20768M13.541 6.03038H5.20768M17.7077 5.83073V16.2127C17.7077 17.8899 17.7077 18.7285 17.3671 19.3691C17.0675 19.9327 16.5895 20.3908 16.0014 20.6779C15.3329 21.0044 14.4579 21.0044 12.7077 21.0044H6.04102C4.29085 21.0044 3.41577 21.0044 2.7473 20.6779C2.15929 20.3908 1.68122 19.9327 1.38162 19.3691C1.04102 18.7285 1.04102 17.8899 1.04102 16.2127V5.83073C1.04102 4.15348 1.04102 3.31486 1.38162 2.67424C1.68122 2.11074 2.15929 1.65259 2.7473 1.36547C3.41577 1.03906 4.29085 1.03906 6.04102 1.03906H12.7077C14.4579 1.03906 15.3329 1.03906 16.0014 1.36547C16.5895 1.65259 17.0675 2.11074 17.3671 2.67424C17.7077 3.31486 17.7077 4.15348 17.7077 5.83073Z"
                stroke="#050505"
                strokeWidth="2.08333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="font-bold text-[#161a20] text-lg sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl whitespace-nowrap">
            Book A Trial Class <ArrowRight className="inline-block w-4 h-4" />
          </span>
        </a>

        {/* Contact us Button */}
        <button
          onClick={onContact}
          className="bg-white border border-black flex gap-2 sm:gap-2.5 items-center justify-left md:justify-center py-4 sm:py-5 md:py-6 lg:py-5 xl:py-6 2xl:py-8 px-4 sm:px-5 md:px-6 w-full lg:flex-1"
        >
          <div className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative">
            <svg
              className="w-full h-full"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.8755 11.9792C21.8755 16.8692 17.9114 20.8333 13.0214 20.8333C11.8997 20.8333 10.8268 20.6248 9.83925 20.2443C9.6587 20.1748 9.56842 20.14 9.49663 20.1234C9.42601 20.1072 9.3749 20.1003 9.30249 20.0976C9.22887 20.0948 9.1481 20.1031 8.98655 20.1198L3.65216 20.6713C3.14356 20.7238 2.88927 20.7501 2.73927 20.6585C2.60862 20.5789 2.51963 20.4457 2.49594 20.2946C2.46874 20.1209 2.59026 19.896 2.83329 19.4463L4.53711 16.2925C4.67742 16.0328 4.74757 15.9029 4.77936 15.778C4.81073 15.6548 4.81832 15.5658 4.80828 15.439C4.79812 15.3105 4.74176 15.1433 4.62906 14.809C4.32955 13.9204 4.16721 12.9688 4.16721 11.9792C4.16721 7.08915 8.13136 3.125 13.0214 3.125C17.9114 3.125 21.8755 7.08915 21.8755 11.9792Z"
                stroke="#050505"
                strokeWidth="2.08333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="font-bold text-[#050505] text-lg sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl whitespace-nowrap">
            Contact us
          </span>
        </button>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#1a282e]  flex flex-col items-start justify-center py-4 sm:py-5 md:py-6 pt-8 sm:pt-10 md:pt-12 lg:pt-8 xl:pt-12 2xl:pt-16 pb-4 sm:pb-5 md:pb-6 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 2xl:px-16 lg:py-8 xl:py-12 2xl:py-16 w-full">
        {/* Mobile Menu Sections */}
        <div className="flex lg:hidden flex-col items-start max-w-[93.75rem] w-full">
          <div className="flex flex-col gap-10 items-start py-5 px-0 w-full">
            {/* Programs */}
            <div className="relative w-full">
              <div className="absolute bg-white h-0.5 left-0 right-0 -top-5" />
              <button
                onClick={() => toggleSection("programs")}
                className="flex items-center justify-between pb-1 pt-0 px-0 w-full"
              >
                <span className="font-normal text-[#fefc00] text-lg whitespace-nowrap">
                  Programs
                </span>
                <div className="flex items-center justify-center w-5 h-2">
                  <ChevronDown
                    className={`w-[0.6875rem] h-2 text-white transition-transform ${
                      openSections.has("programs") ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              {openSections.has("programs") && (
                <div className="flex flex-col gap-4 items-start pt-4 pb-2 w-full">
                  <Link
                    href="/programs/foundation"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <span className="font-normal text-white text-lg">
                      Foundation
                    </span>
                  </Link>
                  <Link
                    href="/programs/intermediate"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <span className="font-normal text-white text-lg">
                      Intermediate
                    </span>
                  </Link>
                  <Link
                    href=""
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <span className="font-normal text-white text-lg">
                      Advanced
                    </span>
                  </Link>
                  <Link
                    href="/programs/ai-for-high-school"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <span className="font-medium text-white text-lg tracking-[-1px] leading-6">
                      AI (High School)
                    </span>
                  </Link>
                  <Link
                    href="/programs/web3-for-high-school"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <span className="font-normal text-white text-lg">
                      Web3 (High School)
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* Company */}
            <div className="relative w-full">
              <div className="absolute bg-white h-0.5 left-0 right-0 -top-5" />
              <button
                onClick={() => toggleSection("company")}
                className="flex items-center justify-between pb-1 pt-0 px-0 w-full"
              >
                <span className="font-normal text-[#fefc00] text-lg whitespace-nowrap">
                  Company
                </span>
                <div className="flex items-center justify-center w-5 h-2">
                  <ChevronDown
                    className={`w-[0.6875rem] h-2 text-white transition-transform ${
                      openSections.has("company") ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              {openSections.has("company") && (
                <div className="flex flex-col gap-4 items-start pt-4 pb-2 w-full">
                  <Link
                    href="/about"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <span className="font-normal text-white text-lg">
                      About
                    </span>
                  </Link>
                  <Link
                    href="/contact"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <span className="font-normal text-white text-lg">
                      Contact
                    </span>
                  </Link>
                  <Link
                    href="/pricing"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <span className="font-normal text-white text-lg">
                      Pricing
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* Legal */}
            <div className="relative w-full">
              <div className="absolute bg-white h-0.5 left-0 right-0 -top-5" />
              <button
                onClick={() => toggleSection("legal")}
                className="flex items-center justify-between pb-1 pt-0 px-0 w-full"
              >
                <span className="font-normal text-[#fefc00] text-lg whitespace-nowrap">
                  Legal
                </span>
                <div className="flex items-center justify-center w-5 h-2">
                  <ChevronDown
                    className={`w-[0.6875rem] h-2 text-white transition-transform ${
                      openSections.has("legal") ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              {openSections.has("legal") && (
                <div className="flex flex-col gap-4 items-start pt-4 pb-2 w-full">
                  <Link
                    href="/terms"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <span className="font-normal text-white text-lg">
                      Terms of Service
                    </span>
                  </Link>
                  <Link
                    href="/privacy"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <span className="font-normal text-white text-lg">
                      Privacy Policy
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="border-t-2 border-white flex flex-col gap-6 items-start py-5 px-0 w-full">
            <h4 className="font-normal text-[#fefc00] text-lg w-full">
              Follow us
            </h4>
            <div className="flex flex-wrap gap-2.5 items-center h-8 w-full">
              <a
                href="https://www.instagram.com/xelarisofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0  relative hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <svg
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4094_43608)">
                    <g clip-path="url(#clip1_4094_43608)">
                      <path
                        d="M14.0016 10.6383C11.9946 10.6383 10.3567 12.3205 10.3567 14.3817C10.3567 16.443 11.9946 18.1252 14.0016 18.1252C16.0086 18.1252 17.6465 16.443 17.6465 14.3817C17.6465 12.3205 16.0086 10.6383 14.0016 10.6383ZM24.9337 14.3817C24.9337 12.8316 24.9473 11.2955 24.8626 9.74811C24.7778 7.95082 24.3786 6.35571 23.0989 5.04144C21.8165 3.72436 20.2661 3.31716 18.5161 3.2301C17.0067 3.14305 15.511 3.15709 14.0044 3.15709C12.495 3.15709 10.9993 3.14305 9.4926 3.2301C7.7426 3.31716 6.18948 3.72717 4.90979 5.04144C3.62737 6.35852 3.23088 7.95082 3.14612 9.74811C3.06135 11.2983 3.07503 12.8344 3.07503 14.3817C3.07503 15.9291 3.06135 17.468 3.14612 19.0154C3.23088 20.8127 3.6301 22.4078 4.90979 23.7221C6.19221 25.0392 7.7426 25.4464 9.4926 25.5334C11.002 25.6205 12.4977 25.6064 14.0044 25.6064C15.5137 25.6064 17.0094 25.6205 18.5161 25.5334C20.2661 25.4464 21.8192 25.0363 23.0989 23.7221C24.3813 22.405 24.7778 20.8127 24.8626 19.0154C24.9501 17.468 24.9337 15.9319 24.9337 14.3817ZM14.0016 20.1415C10.8981 20.1415 8.39339 17.5691 8.39339 14.3817C8.39339 11.1944 10.8981 8.62199 14.0016 8.62199C17.1051 8.62199 19.6098 11.1944 19.6098 14.3817C19.6098 17.5691 17.1051 20.1415 14.0016 20.1415ZM19.8395 9.73126C19.1149 9.73126 18.5297 9.13029 18.5297 8.3861C18.5297 7.6419 19.1149 7.04093 19.8395 7.04093C20.5641 7.04093 21.1493 7.6419 21.1493 8.3861C21.1495 8.56281 21.1158 8.73782 21.05 8.90112C20.9843 9.06444 20.8878 9.2128 20.7661 9.33776C20.6445 9.46271 20.5 9.5618 20.341 9.62932C20.182 9.69684 20.0116 9.73148 19.8395 9.73126Z"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_4094_43608">
                      <rect width="28" height="29" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_4094_43608">
                      <rect width="28" height="29" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <button
                onClick={() => onSocialClick?.("facebook")}
                className="shrink-0 relative"
                aria-label="Facebook"
              >
                <svg
                  width="12"
                  height="26"
                  viewBox="0 0 12 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.58126 25.0611V13.6481H11.0375L11.5513 9.17964H7.58126V6.33335C7.58126 5.0439 7.90376 4.16105 9.56496 4.16105H11.67V0.177085C10.6458 0.0548148 9.61626 -0.00422505 8.58626 0.000234952C5.53126 0.000234952 3.43376 2.07785 3.43376 5.89194V9.17124H0V13.6398H3.44126V25.0611H7.58126Z"
                    fill="white"
                  />
                </svg>
              </button>
              <a
                href="https://x.com/Xelarisofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0  relative hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <svg
                  width="25"
                  height="23"
                  viewBox="0 0 25 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.0412 5.53941C22.0575 5.78311 22.0575 6.02541 22.0575 6.26771C22.0575 13.6828 16.9912 22.2272 7.7325 22.2272C4.88 22.2272 2.23 21.3067 0 19.7081C0.405 19.7596 0.795 19.7777 1.21625 19.7777C3.48249 19.7838 5.68456 18.9397 7.4675 17.3812C6.41678 17.3601 5.39822 16.9739 4.55405 16.2766C3.70987 15.5794 3.08223 14.6058 2.75875 13.492C3.07 13.5435 3.3825 13.5783 3.71 13.5783C4.16125 13.5783 4.615 13.5087 5.03625 13.3875C3.89595 13.1311 2.87059 12.4425 2.13452 11.439C1.39845 10.4355 0.99712 9.17891 0.99875 7.88301V7.81331C1.67 8.22971 2.44875 8.49011 3.27375 8.52491C2.58261 8.01331 2.0159 7.31901 1.62417 6.50411C1.23245 5.68921 1.02789 4.77891 1.02875 3.85446C1.02875 2.81286 1.2775 1.8576 1.71375 1.02489C2.97892 2.75858 4.55688 4.17691 6.34542 5.18801C8.134 6.19911 10.0932 6.78041 12.0962 6.89431C12.0187 6.47651 11.9712 6.04351 11.9712 5.60901C11.9709 4.87231 12.1009 4.14279 12.3538 3.4621C12.6068 2.78142 12.9776 2.16295 13.4452 1.64203C13.9128 1.12111 14.468 0.707971 15.079 0.426221C15.6901 0.144471 16.3449 -0.000359331 17.0062 6.69484e-07C18.4562 6.69484e-07 19.765 0.676761 20.685 1.77127C21.8122 1.52844 22.8932 1.07003 23.88 0.416361C23.5043 1.71253 22.7172 2.81162 21.6662 3.50772C22.666 3.3807 23.643 3.08782 24.565 2.6388C23.8764 3.75712 23.0231 4.73781 22.0412 5.53941Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Countries Section */}
          <div className="border-t-2 border-white flex flex-col gap-2 items-start py-5 px-0 w-full">
            <h4 className="font-normal text-[#fefc00] text-lg w-full">
              Countries
            </h4>
            <p className="font-normal text-white text-lg opacity-70 pb-4 pt-0">
              Where we have student learning
            </p>
            <div className="grid grid-cols-5 gap-4 w-full max-w-[250px]">
              {countryCodes.slice(0, 20).map((code, index) => (
                <div
                  key={index}
                  className="aspect-square w-10 h-10 relative overflow-hidden rounded-[0.3125rem]"
                >
                  <Flag
                    code={code}
                    className="w-full h-full object-cover rounded-[0.3125rem]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Menu Layout */}
        <div className="hidden max-w-7xl xl:max-w-[90rem] 2xl:max-w-360 mx-auto lg:flex items-start justify-between max-w-5xl xl:max-w-6xl 2xl:max-w-[1224px] w-full mx-auto">
          {/* Left Section - Programs and Company */}
          <div className="flex flex-1 gap-6 xl:gap-8 2xl:gap-10 items-start">
            {/* Programs */}
            <div className="flex flex-col items-start w-full max-w-xs xl:max-w-sm 2xl:max-w-md">
              <div className="flex flex-col gap-4 xl:gap-5 2xl:gap-6 items-start w-full">
                <h4 className="font-medium text-[#fefc00] text-lg xl:text-xl 2xl:text-2xl pb-1">
                  Programs
                </h4>
                <div className="flex flex-col gap-4 xl:gap-5 items-start pb-6 xl:pb-8 2xl:pb-10 w-full">
                  <Link
                    href="/programs/foundation"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <span className="font-normal text-white text-lg">
                      Foundation
                    </span>
                  </Link>
                  <Link
                    href="/programs/intermediate"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <span className="font-normal text-white text-lg">
                      Intermediate
                    </span>
                  </Link>
                  <Link
                    href=""
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <span className="font-normal text-white text-lg">
                      Advanced
                    </span>
                  </Link>
                  <Link
                    href="/programs/ai-for-high-school"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <span className="font-medium text-white text-lg tracking-[-1px] leading-6">
                      AI (High School)
                    </span>
                  </Link>
                  <Link
                    href="/programs/web3-for-high-school"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <span className="font-normal text-white text-lg">
                      Web3 (High School)
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Company */}
            <div className="flex flex-col items-start w-full max-w-xs xl:max-w-sm 2xl:max-w-md">
              <div className="flex flex-col gap-4 xl:gap-5 2xl:gap-6 items-start w-full">
                <h4 className="font-medium text-[#fefc00] text-lg xl:text-xl 2xl:text-2xl pb-1">
                  Company
                </h4>
                <div className="flex flex-col gap-4 xl:gap-5 items-start pb-6 xl:pb-8 2xl:pb-10 w-full">
                  <Link
                    href="/about"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <span className="font-normal text-white text-lg">
                      About
                    </span>
                  </Link>
                  <Link
                    href="/contact"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <span className="font-normal text-white text-lg">
                      Contact
                    </span>
                  </Link>
                  <Link
                    href="/pricing"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <span className="font-normal text-white text-lg">
                      Pricing
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Legal, Follow us, and Countries */}
          <div className="flex flex-1 items-start justify-between">
            {/* Legal + Follow Us */}
            <div className="flex flex-col items-start">
              {/* Legal */}
              <div className="flex flex-col gap-4 xl:gap-5 2xl:gap-6 items-start mb-2 xl:mb-3 2xl:mb-4">
                <h4 className="font-medium text-[#fefc00] text-lg xl:text-xl 2xl:text-2xl pb-1">
                  Legal
                </h4>
                <div className="flex flex-col gap-4 xl:gap-5 items-start pb-6 xl:pb-8 2xl:pb-10">
                  <Link
                    href="/terms"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <span className="font-normal text-white text-lg">
                      Terms of Service
                    </span>
                  </Link>
                  <Link
                    href="/privacy"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <span className="font-normal text-white text-lg">
                      Privacy Policy
                    </span>
                  </Link>
                </div>
              </div>

              {/* Follow Us */}
              <div className="flex flex-col gap-4 xl:gap-5 2xl:gap-6 items-start pt-2 xl:pt-3 2xl:pt-4">
                <h4 className="font-medium text-[#fefc00] text-lg xl:text-xl 2xl:text-2xl">
                  Follow us
                </h4>
                <div className="flex gap-5 items-center">
                  <button
                    onClick={() => onSocialClick?.("facebook")}
                    className="shrink-0 relative hover:opacity-80 transition-opacity"
                    aria-label="Facebook"
                  >
                    <svg
                      width="12"
                      height="26"
                      viewBox="0 0 12 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.58126 25.0611V13.6481H11.0375L11.5513 9.17964H7.58126V6.33335C7.58126 5.0439 7.90376 4.16105 9.56496 4.16105H11.67V0.177085C10.6458 0.0548148 9.61626 -0.00422505 8.58626 0.000234952C5.53126 0.000234952 3.43376 2.07785 3.43376 5.89194V9.17124H0V13.6398H3.44126V25.0611H7.58126Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <a
                    href="https://x.com/Xelarisofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 relative hover:opacity-80 transition-opacity"
                    aria-label="Twitter"
                  >
                    <svg
                      width="25"
                      height="23"
                      viewBox="0 0 25 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.0412 5.53941C22.0575 5.78311 22.0575 6.02541 22.0575 6.26771C22.0575 13.6828 16.9912 22.2272 7.7325 22.2272C4.88 22.2272 2.23 21.3067 0 19.7081C0.405 19.7596 0.795 19.7777 1.21625 19.7777C3.48249 19.7838 5.68456 18.9397 7.4675 17.3812C6.41678 17.3601 5.39822 16.9739 4.55405 16.2766C3.70987 15.5794 3.08223 14.6058 2.75875 13.492C3.07 13.5435 3.3825 13.5783 3.71 13.5783C4.16125 13.5783 4.615 13.5087 5.03625 13.3875C3.89595 13.1311 2.87059 12.4425 2.13452 11.439C1.39845 10.4355 0.99712 9.17891 0.99875 7.88301V7.81331C1.67 8.22971 2.44875 8.49011 3.27375 8.52491C2.58261 8.01331 2.0159 7.31901 1.62417 6.50411C1.23245 5.68921 1.02789 4.77891 1.02875 3.85446C1.02875 2.81286 1.2775 1.8576 1.71375 1.02489C2.97892 2.75858 4.55688 4.17691 6.34542 5.18801C8.134 6.19911 10.0932 6.78041 12.0962 6.89431C12.0187 6.47651 11.9712 6.04351 11.9712 5.60901C11.9709 4.87231 12.1009 4.14279 12.3538 3.4621C12.6068 2.78142 12.9776 2.16295 13.4452 1.64203C13.9128 1.12111 14.468 0.707971 15.079 0.426221C15.6901 0.144471 16.3449 -0.000359331 17.0062 6.69484e-07C18.4562 6.69484e-07 19.765 0.676761 20.685 1.77127C21.8122 1.52844 22.8932 1.07003 23.88 0.416361C23.5043 1.71253 22.7172 2.81162 21.6662 3.50772C22.666 3.3807 23.643 3.08782 24.565 2.6388C23.8764 3.75712 23.0231 4.73781 22.0412 5.53941Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/xelarisofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 relative hover:opacity-80 transition-opacity"
                    aria-label="Instagram"
                  >
                    <svg
                      width="28"
                      height="29"
                      viewBox="0 0 28 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_4094_43608)">
                        <g clip-path="url(#clip1_4094_43608)">
                          <path
                            d="M14.0016 10.6383C11.9946 10.6383 10.3567 12.3205 10.3567 14.3817C10.3567 16.443 11.9946 18.1252 14.0016 18.1252C16.0086 18.1252 17.6465 16.443 17.6465 14.3817C17.6465 12.3205 16.0086 10.6383 14.0016 10.6383ZM24.9337 14.3817C24.9337 12.8316 24.9473 11.2955 24.8626 9.74811C24.7778 7.95082 24.3786 6.35571 23.0989 5.04144C21.8165 3.72436 20.2661 3.31716 18.5161 3.2301C17.0067 3.14305 15.511 3.15709 14.0044 3.15709C12.495 3.15709 10.9993 3.14305 9.4926 3.2301C7.7426 3.31716 6.18948 3.72717 4.90979 5.04144C3.62737 6.35852 3.23088 7.95082 3.14612 9.74811C3.06135 11.2983 3.07503 12.8344 3.07503 14.3817C3.07503 15.9291 3.06135 17.468 3.14612 19.0154C3.23088 20.8127 3.6301 22.4078 4.90979 23.7221C6.19221 25.0392 7.7426 25.4464 9.4926 25.5334C11.002 25.6205 12.4977 25.6064 14.0044 25.6064C15.5137 25.6064 17.0094 25.6205 18.5161 25.5334C20.2661 25.4464 21.8192 25.0363 23.0989 23.7221C24.3813 22.405 24.7778 20.8127 24.8626 19.0154C24.9501 17.468 24.9337 15.9319 24.9337 14.3817ZM14.0016 20.1415C10.8981 20.1415 8.39339 17.5691 8.39339 14.3817C8.39339 11.1944 10.8981 8.62199 14.0016 8.62199C17.1051 8.62199 19.6098 11.1944 19.6098 14.3817C19.6098 17.5691 17.1051 20.1415 14.0016 20.1415ZM19.8395 9.73126C19.1149 9.73126 18.5297 9.13029 18.5297 8.3861C18.5297 7.6419 19.1149 7.04093 19.8395 7.04093C20.5641 7.04093 21.1493 7.6419 21.1493 8.3861C21.1495 8.56281 21.1158 8.73782 21.05 8.90112C20.9843 9.06444 20.8878 9.2128 20.7661 9.33776C20.6445 9.46271 20.5 9.5618 20.341 9.62932C20.182 9.69684 20.0116 9.73148 19.8395 9.73126Z"
                            fill="white"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_4094_43608">
                          <rect width="28" height="29" fill="white" />
                        </clipPath>
                        <clipPath id="clip1_4094_43608">
                          <rect width="28" height="29" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Countries */}
            <div className="flex flex-1 flex-col gap-1 items-start lg:ml-8 xl:ml-12 2xl:ml-16">
              <h4 className="font-medium text-[#fefc00] text-lg xl:text-xl 2xl:text-2xl">
                Countries
              </h4>
              <div className="flex flex-col items-start pb-6 xl:pb-8 2xl:pb-10 pt-0 w-full">
                <div className="flex flex-col items-start pt-4 xl:pt-5 2xl:pt-6 w-full">
                  <p className="font-normal text-white text-sm xl:text-base 2xl:text-lg opacity-70 pb-3 xl:pb-4 2xl:pb-5">
                    Where we have student learning
                  </p>
                  <div className="grid grid-cols-6 gap-x-2 xl:gap-x-3 2xl:gap-x-4 gap-y-4 xl:gap-y-6 2xl:gap-y-8 max-w-xs xl:max-w-sm 2xl:max-w-md">
                    {countryCodes.map((code, index) => (
                      <div
                        key={index}
                        className="aspect-square w-10 h-10 relative overflow-hidden rounded-[0.3125rem]"
                      >
                        <Flag
                          code={code}
                          className="w-full h-full object-cover rounded-[0.3125rem]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* XELARIS Description */}
        <div className="flex flex-col items-start leading-normal text-lg w-full  mx-auto lg:pt-0 whitespace-nowrap">
          {/* Mobile Version */}
          <div className="flex lg:hidden flex-col font-bold justify-center relative shrink-0 text-white">
            <p className="leading-normal">
              XELARIS:
              <span className="font-normal">{` For Ambitious Kids/Teens Who `}</span>
            </p>
          </div>
          <div className="flex lg:hidden flex-col font-normal justify-center relative shrink-0 text-white">
            <p className="leading-normal">Want to Build, Not Just Learn</p>
          </div>
          <div className="flex lg:hidden flex-col font-normal justify-center relative shrink-0 text-[#b0b0b0] leading-[1.375rem] whitespace-normal">
            <p className="mb-0">We saw a disconnect in how kids were </p>
            <p className="mb-0">learning tech skills. Most coding programs</p>
            <p className="mb-0">teach students to replicate pre-built</p>
            <p className="mb-0">projects and follow instructions, led by </p>
            <p className="mb-0">{`instructors  who've never shipped code to `}</p>
            <p className="mb-0">production, pre-built curriculums where </p>
            <p className="mb-0">everyone makes the same thing. Students </p>
            <p className="mb-0">complete courses, earn certificates, and </p>
            <p className="mb-0">graduate without ever building something </p>
            <p className="mb-0">real. So we built what we wished existed: </p>
            <p className="mb-0">true 1-on-1 in the industry. No cohorts. </p>
            <p className="mb-0">No fixed curriculum. Just a student with </p>
            <p className="mb-0">
              <span>{`an idea working with an engineer. `}</span>
              <span className="font-bold">All </span>
            </p>
            <p className="mb-0 font-bold">
              programs is developed and taught exclusively{" "}
            </p>
            <p className="mb-0 font-bold">
              <span className="font-bold">{`by a `}</span>
              <Link
                href="/about"
                className="font-bold text-[#fefc00] underline decoration-solid underline-offset-2"
              >{`team`}</Link>
              <span className="font-bold">{` of professional`}</span>
              <span className="font-bold">{` engineers.  `}</span>
            </p>
          </div>

          {/* Desktop Version */}
          <div className="hidden lg:flex flex-col items-start leading-normal text-lg w-full">
            <div className="flex flex-col font-bold justify-center text-white w-full max-w-[610px]">
              <p className="leading-normal whitespace-normal">
                XELARIS:
                <span className="font-normal">
                  {" "}
                  For Ambitious Kids/Teens Who Want to Build, Not Just Learn
                </span>
              </p>
            </div>
            <div className="flex flex-col font-normal justify-center text-[#b0b0b0]">
              <p className="leading-[22px] whitespace-nowrap">
                We saw a disconnect in how kids were learning tech skills. Most
                coding programs teach students to replicate pre-built projects
                and follow instructions,
              </p>
            </div>
            <div className="flex flex-col font-normal justify-center text-[#b0b0b0]">
              <p className="leading-[22px] whitespace-nowrap">
                led by instructors who&apos;ve never shipped code to production.
                Pre-built curriculums where everyone makes the same thing.
                Students complete courses,
              </p>
            </div>
            <div className="flex flex-col font-normal justify-center text-[#b0b0b0]">
              <p className="leading-[22px] whitespace-nowrap">
                earn certificates, and graduate without ever building something
                real. So we built what we wished existed: true 1-on-1 mentorship
                with engineers who work
              </p>
            </div>
            <div className="flex flex-col font-normal justify-center text-[#b0b0b0]">
              <p className="leading-[22px] whitespace-nowrap">
                in the industry. No cohorts. No fixed curriculum. Just a student
                with an idea working with an engineer.{" "}
                <span className="font-bold">
                  All programs is developed and taught
                </span>
              </p>
            </div>
            <div className="flex flex-col font-bold justify-center text-[#b0b0b0]">
              <p className="leading-[22px] whitespace-nowrap">
                exclusively <span className="font-bold">by a </span>
                <span className="font-bold text-[#fefc00] underline decoration-solid [text-decoration-skip-ink:none] [text-underline-position:from-font]">
                  team
                </span>
                <span className="font-bold"> of professional engineers.</span>
              </p>
            </div>
          </div>

          <div className="h-4 shrink-0 w-full" />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-white flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-12 py-3 sm:py-4 md:py-5 lg:py-3 xl:py-4 2xl:py-5 w-full">
        <div className="flex flex-col items-center relative w-full">
          <p className="font-normal text-[#050505] text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg text-center w-full">
            All rights reserved ©2025 Xelaris Inc.
          </p>
        </div>
      </div>
    </div>
  )
}
