"use client"
import { ChevronRight, Home, X } from "lucide-react"
import Link from "next/link"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col justify-between overflow-y-auto">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <X size={24} className="text-[#161a20]" />
      </button>

      {/* Top Section */}
      <div className="flex flex-col items-start px-3 py-0 w-full">
        <div className="flex flex-col items-start w-full max-w-[351px] mx-auto pt-4">
          {/* Go to Home Page */}
          <Link
            href="/"
            onClick={onClose}
            className="bg-[#f1f5f9] flex gap-[15px] items-center px-4 py-2.5 w-full"
          >
            <div className="flex flex-col items-start w-[22px]">
              <Home size={22} className="text-[#161a20]" />
            </div>
            <div className="flex flex-col items-start">
              <p className="font-medium text-[#161a20] text-lg leading-normal">
                Go to Home Page
              </p>
            </div>
          </Link>

          {/* Programs */}
          <div className="border-b border-[#bababa] flex flex-col items-start pb-px pt-0 px-0 w-full">
            <div className="bg-white w-full">
              <Link
                href="/programs"
                onClick={onClose}
                className="flex items-center justify-between p-[15px] w-full"
              >
                <p className="font-medium text-[#161a20] text-lg leading-normal">
                  Programs
                </p>
                <ChevronRight size={24} className="text-[#161a20]" />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="border-b border-[#bababa] flex flex-col items-start pb-px pt-0 px-0 w-full">
            <div className="bg-white w-full">
              <Link
                href="/about"
                onClick={onClose}
                className="flex items-center justify-between p-[15px] w-full"
              >
                <p className="font-medium text-[#161a20] text-lg leading-normal">
                  Company
                </p>
                <ChevronRight size={24} className="text-[#161a20]" />
              </Link>
            </div>
          </div>

          {/* Login */}
          <div className="border-b border-[#bababa] flex flex-col items-center justify-center pb-px pt-0 px-0 w-full">
            <div className="bg-white w-full">
              <Link
                href="/login"
                onClick={onClose}
                className="flex items-center justify-between p-[15px] w-full"
              >
                <p className="font-medium text-[#161a20] text-lg leading-normal">
                  Login
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - CTA Buttons */}
      <div className="flex flex-col items-start pb-[15px] pt-0 px-5 w-full">
        <div className="flex flex-col items-start w-full max-w-[351px] mx-auto">
          <div className="flex flex-col items-start pb-6 pt-5 px-5 w-full bg-white">
            {/* Book A Trial Class Button */}
            <a
              href="https://cal.com/xelaris/trial-class"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="bg-[#fefc00] flex items-center justify-center overflow-hidden px-6 py-3 rounded-2xl shadow-[inset_2px_2px_4px_0px_rgba(255,255,255,0.05),inset_-2px_-2px_6px_0px_rgba(0,0,0,0.15)] w-full"
            >
              <span className="font-medium text-[#161a20] text-lg text-center tracking-[-0.4px] leading-6">
                Book A Trial Class →
              </span>
            </a>

            {/* Spacing */}
            <div className="h-4 w-full" />

            {/* Sign Up Button */}
            <Link
              href="/signup"
              onClick={onClose}
              className="border border-[#161a20] flex items-center justify-center overflow-hidden px-12 py-2.5 rounded-2xl w-full"
            >
              <span className="font-medium text-[#161a20] text-lg text-center tracking-[-0.4px] leading-6">
                Sign up
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
