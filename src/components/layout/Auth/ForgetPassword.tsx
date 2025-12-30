'use client';
import Button from '@/components/ui/Button';
import { ArrowLeft, ArrowRight, CheckCircle, Eye, EyeOff, Key, Lock, Mail } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export function ForgetPassword() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  
  // If token is present in URL, start at step 3 (set new password)
  const [step, setStep] = useState(token ? 3 : 1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@') || !email.includes('.')) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    setStep(2);
  };

  const handleResendEmail = () => {
    // Handle resend email logic
    console.log('Resending email to:', email);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return;
    }
    // Validate password requirements
    if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return;
    }
    setStep(4);
  };

  const handleOpenEmailApp = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="bg-white min-h-screen w-full flex items-center justify-center px-4 py-12 lg:py-24">
      <div className="w-full max-w-[360px] flex flex-col gap-8 items-center">
        {/* Step 1: Forgot Password Form */}
        {step === 1 && (
          <>
            {/* Icon */}
            <div className="border border-[#eaecf0] rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] w-14 h-14 flex items-center justify-center">
              <Key className="w-7 h-7 text-[#344054]" />
            </div>

            {/* Header */}
            <div className="flex flex-col gap-3 items-center text-center w-full">
              <h1 className="font-bold text-[#101828] text-[30px] leading-[38px]">
                Forgot password?
              </h1>
              <p className="font-normal text-[#475467] text-lg leading-6">
                No worries, we&apos;ll send you reset instructions.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleEmailSubmit} className="flex flex-col gap-5 w-full">
              {/* Email Input */}
              <div className="flex flex-col gap-1.5">
                <label className="font-medium text-[#344054] text-sm leading-5">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError(false);
                  }}
                  placeholder="Enter your email"
                  className={`bg-white border ${
                    emailError ? 'border-[#e23353]' : 'border-[#d0d5dd]'
                  } rounded-lg px-3.5 py-2.5 w-full font-normal text-lg text-[#091717] placeholder:text-[#667085] focus:outline-none focus:border-[#091717] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]`}
                />
              </div>

              {/* Reset Password Button */}
              <Button
                type="colored"
                htmlType="submit"
                className="!rounded-[18px] !px-6 !py-3 w-full"
              >
                <span className="font-bold">Reset password</span> <ArrowRight className="w-4 h-4" />
              </Button>
            </form>

            {/* Back to Login Link */}
            <Link
              href="/auth/login"
              className="flex items-center gap-1.5 text-[#475467] text-sm font-bold hover:text-[#091717] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to log in
            </Link>
          </>
        )}

        {/* Step 2: Check Email */}
        {step === 2 && (
          <>
            {/* Icon */}
            <div className="border border-[#eaecf0] rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] w-14 h-14 flex items-center justify-center">
              <Mail className="w-7 h-7 text-[#344054]" />
            </div>

            {/* Header */}
            <div className="flex flex-col gap-3 items-center text-center w-full">
              <h1 className="font-bold text-[#101828] text-[30px] leading-[38px]">
                Check your email
              </h1>
              <p className="font-medium text-[#475467] text-lg leading-6">
                We sent a password reset link to{' '}
                <span className="font-bold">{email}</span>
              </p>
            </div>

            {/* Open Email App Button */}
            <Button
              type="colored"
              onClick={handleOpenEmailApp}
              className="!rounded-[18px] !px-6 !py-3 w-full"
            >
              <span className="font-bold">Open email app</span> <ArrowRight className="w-4 h-4" />
            </Button>

            {/* Resend Email */}
            <div className="flex items-center gap-1 text-sm">
              <p className="font-normal text-[#475467]">Didn&apos;t receive the email?</p>
              <button
                onClick={handleResendEmail}
                className="font-bold text-[#161a20] hover:underline"
              >
                Click to resend
              </button>
            </div>

            {/* Back to Login Link */}
            <Link
              href="/auth/login"
              className="flex items-center gap-1.5 text-[#475467] text-sm font-bold hover:text-[#091717] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to log in
            </Link>
          </>
        )}

        {/* Step 3: Set New Password */}
        {step === 3 && (
          <>
            {/* Icon */}
            <div className="border border-[#eaecf0] rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] w-14 h-14 flex items-center justify-center">
              <Lock className="w-7 h-7 text-[#344054]" />
            </div>

            {/* Header */}
            <div className="flex flex-col gap-3 items-center text-center w-full">
              <h1 className="font-bold text-[#101828] text-[30px] leading-[38px]">
                Set new password
              </h1>
              <p className="font-normal text-[#475467] text-lg leading-6">
                Your new password must be different to previously used passwords.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-5 w-full">
              {/* Password Input */}
              <div className="flex flex-col gap-1.5">
                <label className="font-medium text-[#344054] text-sm leading-5">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-white border border-[#d0d5dd] rounded-lg px-3.5 py-2.5 pr-10 w-full font-normal text-lg text-[#091717] placeholder:text-[#667085] focus:outline-none focus:border-[#091717] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
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

              {/* Confirm Password Input */}
              <div className="flex flex-col gap-1.5">
                <label className="font-medium text-[#344054] text-sm leading-5">
                  Confirm password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-white border border-[#d0d5dd] rounded-lg px-3.5 py-2.5 pr-10 w-full font-normal text-lg text-[#091717] placeholder:text-[#667085] focus:outline-none focus:border-[#091717] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4 text-[#091717]" />
                    ) : (
                      <Eye className="w-4 h-4 text-[#091717]" />
                    )}
                  </button>
                </div>
              </div>

              {/* Password Requirements */}
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-2">
                  <div className={`rounded-full w-5 h-5 flex items-center justify-center ${
                    password.length >= 8 ? 'bg-[#12b76a]' : 'bg-[#d0d5dd]'
                  }`}>
                    {password.length >= 8 && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <p className="font-normal text-[#475467] text-sm leading-5 flex-1">
                    Must be at least 8 characters
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className={`rounded-full w-5 h-5 flex items-center justify-center ${
                    /[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'bg-[#12b76a]' : 'bg-[#d0d5dd]'
                  }`}>
                    {/[!@#$%^&*(),.?":{}|<>]/.test(password) && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <p className="font-normal text-[#475467] text-sm leading-5 flex-1">
                    Must contain one special character
                  </p>
                </div>
              </div>

              {/* Reset Password Button */}
              <Button
                type="colored"
                htmlType="submit"
                className="!rounded-[16px] !px-6 !py-3 w-full"
              >
                <span className="font-bold">Reset password</span> <ArrowRight className="w-4 h-4" />
              </Button>
            </form>

            {/* Back to Login Link */}
            <Link
              href="/auth/login"
              className="flex items-center gap-1.5 text-[#475467] text-sm font-bold hover:text-[#091717] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to log in
            </Link>
          </>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <>
            {/* Icon */}
            <div className="border border-[#eaecf0] rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] w-14 h-14 flex items-center justify-center">
              <CheckCircle className="w-7 h-7 text-[#344054]" />
            </div>

            {/* Header */}
            <div className="flex flex-col gap-3 items-center text-center w-full">
              <h1 className="font-bold text-[#101828] text-[30px] leading-[38px]">
                Password reset
              </h1>
              <p className="font-normal text-[#475467] text-lg leading-6">
                Your password has been successfully reset. Click below to log in
              </p>
            </div>

            {/* Log In Button */}
            <Link href="/auth/login" className="w-full">
              <Button
                type="colored"
                className="!rounded-[16px] !px-6 !py-3 w-full"
              >
                <span className="font-bold">Log in</span> <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
