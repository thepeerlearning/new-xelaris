"use client"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Logo } from "../assets/Logos"
import Button from "../ui/buttons/Button"
import { MobileMenu } from "./MobileMenu"

export function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="bg-[#f1f5f9] backdrop-blur-[5px] py-2 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/"
            className="font-medium text-[#181c22] text-lg leading-[19.2px] px-1.5 py-1 rounded hover:bg-white/50 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/programs"
            className="font-medium text-[#181c22] text-lg leading-[19.2px] px-1.5 py-1 rounded hover:bg-white/50 transition-colors"
          >
            Programs
          </Link>
          <Link
            href="/about"
            className="font-medium text-[#181c22] text-lg leading-[19.2px] px-1.5 py-1 rounded hover:bg-white/50 transition-colors"
          >
            About
          </Link>
          <Link
            href="/pricing"
            className="font-medium text-[#181c22] text-lg leading-[19.2px] px-1.5 py-1 rounded hover:bg-white/50 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="font-medium text-[#181c22] text-lg leading-[19.2px] px-1.5 py-1 rounded hover:bg-white/50 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Right Section - Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            href="/login"
            className="font-normal text-[#181c22] text-lg leading-[19.2px] px-1.5 py-1 rounded hover:bg-white/50 transition-colors"
          >
            Login
          </Link>
          <Link
            href="https://cal.com/xelaris/trial-class"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fefc00] text-[#161a20] font-medium text-lg leading-6 tracking-[-0.4px] px-6 py-3 rounded-2xl shadow-[inset_2px_2px_4px_0px_rgba(255,255,255,0.05),inset_-2px_-2px_6px_0px_rgba(0,0,0,0.15)] hover:bg-[#f5f200] transition-colors inline-block"
          >
            Book A Trial Class →
          </Link>
        </div>

        {/* Mobile Menu Button - Hidden on desktop */}
        <Button
          className="lg:hidden !bg-[#1a1e24] text-white !p-3 !rounded-xl"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu />
        </Button>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}
