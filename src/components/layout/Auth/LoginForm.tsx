'use client';
import Button from '@/components/ui/Button';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email.includes('@') || !email.includes('.')) {
      setEmailError(true);
      return;
    }
    
    // Handle login
    console.log('Login:', { email, password });
  };

  return (
    <div className="bg-white h-full w-full rounded-none lg:rounded-[28px] overflow-auto">
      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-col items-center justify-center h-full w-full px-10 py-[97.5px]">
        <div className="flex flex-col gap-3 w-full max-w-[416px]">
          {/* Title */}
          <div className="flex flex-col items-center w-full mb-3">
            <h1 className="font-bold text-[#0b1922] text-[33px] leading-[23px] text-center tracking-[0.228px]">
              Welcome back
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
            {/* Email Field */}
            <div className="flex flex-col gap-1">
              <label className="font-normal text-[18.63px] text-[#091717] leading-[22px]">
                Email address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="alexaplex@gmail.co"
                  className={`bg-white border ${
                    emailError ? 'border-[#e23353]' : 'border-[#d9dce1]'
                  } rounded-[4px] h-10 px-4 w-full font-normal text-[18px] text-[#091717] placeholder:text-[#bdc1ca] focus:outline-none ${
                    emailError ? 'focus:border-[#e23353]' : 'focus:border-[#091717]'
                  }`}
                />
              </div>
              
              {/* Error Message */}
              {emailError && (
                <div className="flex items-center gap-[5px] mt-1">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8" r="7.5" stroke="#e23353"/>
                      <path d="M8 4V8M8 12H8.01" stroke="#e23353" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="font-normal text-[#e23353] text-[17px] leading-[22px]">
                    Please enter an address.
                  </p>
                </div>
              )}
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1">
              <label className="font-normal text-[18.63px] text-[#091717] leading-[22px]">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••••"
                  className="bg-white border border-[#d9dce1] rounded-[4px] h-10 px-4 pr-10 w-full font-normal text-[21px] text-[#091717] placeholder:text-[#091717] focus:outline-none focus:border-[#091717]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 text-[#091717]" />
                  ) : (
                    <Eye className="w-4 h-4 text-[#091717]" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="flex items-start">
              <Link 
                href="/auth/forget-password" 
                className="font-normal text-[#1d1f24] text-[17px] leading-[24px] underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <div className="flex items-center justify-center mt-6">
              <Button
                type="colored"
                htmlType="submit"
                className="!rounded-[18px] !px-6 !py-3 w-full max-w-[414px]"
              >
                Login <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="flex items-center justify-center gap-1 mt-6">
            <p className="font-normal text-[17px] text-[#1b1b1b] leading-[24px] text-center">
              Don&apos;t have an account?{' '}
            </p>
            <Link 
              href="/auth/signup" 
              className="font-normal text-[#1d1f24] text-[14px] leading-[24px] underline"
            >
              Register here
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex lg:hidden flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 py-8">
        <div className="flex flex-col gap-3 w-full max-w-full sm:max-w-[333px]">
          {/* Title */}
          <div className="flex flex-col items-center w-full mb-6">
            <h1 className="font-bold text-[#1d1f24] text-[33px] leading-[23px] text-center tracking-[0.228px]">
              Welcome back
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
            {/* Email Field */}
            <div className="flex flex-col gap-1">
              <label className="font-normal text-[18.63px] text-[#091717] leading-[22px]">
                Email address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="alexaplex@gmail.co"
                  className={`bg-white border ${
                    emailError ? 'border-[#e23353]' : 'border-[#d9dce1]'
                  } rounded-[4px] h-10 px-4 w-full font-normal text-[18px] text-[#091717] placeholder:text-[#bdc1ca] focus:outline-none ${
                    emailError ? 'focus:border-[#e23353]' : 'focus:border-[#091717]'
                  }`}
                />
              </div>
              
              {/* Error Message */}
              {emailError && (
                <div className="flex items-center gap-[5px] mt-1">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8" r="7.5" stroke="#e23353"/>
                      <path d="M8 4V8M8 12H8.01" stroke="#e23353" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="font-normal text-[#e23353] text-[17px] leading-[22px]">
                    Please enter an address.
                  </p>
                </div>
              )}
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1">
              <label className="font-normal text-[18.63px] text-[#091717] leading-[22px]">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••••"
                  className="bg-white border border-[#d9dce1] rounded-[4px] h-10 px-4 pr-10 w-full font-normal text-[21px] text-[#091717] placeholder:text-[#091717] focus:outline-none focus:border-[#091717]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 text-[#091717]" />
                  ) : (
                    <Eye className="w-4 h-4 text-[#091717]" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="flex items-start">
              <Link 
                href="/auth/forget-password" 
                className="font-normal text-[#1d1f24] text-[17px] leading-[24px] underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <div className="flex items-center justify-center mt-8">
              <Button
                type="colored"
                htmlType="submit"
                className="!rounded-[16px] !px-6 !py-3 w-full max-w-[358px]"
              >
                Login <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="flex items-center justify-center gap-1 mt-8">
            <p className="font-normal text-[17px] text-[#1b1b1b] leading-[24px] text-center">
              Need to create an account?{' '}
            </p>
            <Link 
              href="/auth/signup" 
              className="font-normal text-[#1d1f24] text-[14px] leading-[24px] underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
