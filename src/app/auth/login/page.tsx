'use client';
import { LoginForm } from '@/components/layout/Auth/LoginForm';
import { TestimonialSection } from '@/components/layout/Auth/TestimonialSection';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-0 lg:p-5">
      {/* Desktop Layout */}
      <div className="hidden lg:flex w-full max-w-[1372px] h-[900px] items-start gap-0">
        {/* Left Side - Form */}
        <div className="w-[547px] h-[880px] rounded-[34px] overflow-hidden">
          <LoginForm />
        </div>

        {/* Right Side - Testimonial */}
        <div className="flex-1  rounded-tr-[28px]">
          <TestimonialSection />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex lg:hidden w-full h-screen">
        <LoginForm />
      </div>
    </div>
  );
}

