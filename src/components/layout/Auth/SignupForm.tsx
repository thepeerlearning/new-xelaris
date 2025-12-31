'use client';
import Button from '@/components/ui/Button';
import { ArrowRight, Eye } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function SignupForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    email: '',
    phoneNumber: '',
    password: '',
    timezone: '',
    childAge: '',
    classDuration: '',
    availableDay: '',
    availableTime: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    country: 'United States',
    addressLine1: '',
    addressLine2: '',
    city: '',
    zip: '',
    state: '',
  });
  const [emailError, setEmailError] = useState(false);

  const handleContinue = () => {
    if (step === 1) {
      // Validate email
      if (!formData.email.includes('@') || !formData.email.includes('.')) {
        setEmailError(true);
        return;
      }
      setEmailError(false);
    }
    
    // Move to next step
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Handle final form submission
      console.log('Form submitted:', formData);
    }
  };

  const handleBack = () => {
    if (step > 1 && step < 4) {
      setStep(step - 1);
    }
  };

  return (
    <div className="bg-white h-screen lg:h-[880px] rounded-none lg:rounded-[28px] overflow-auto lg:sticky lg:top-0 w-full max-w-full lg:max-w-[547px]">
      <div className="flex flex-col items-center w-full justify-center pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-10">
        {/* Success Screen - Step 4 */}
        {step === 4 ? (
          <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-[43px] w-full max-w-[418px] pt-8 sm:pt-12 lg:pt-[98px] px-4">
            {/* Success Icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-[66px] lg:h-[66px] relative">
              <svg width="100%" height="100%" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="33" cy="33" r="33" fill="#fefc00"/>
                <path d="M20 33L28 41L46 23" stroke="#091717" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Success Message */}
            <div className="flex flex-col items-center gap-3 sm:gap-4 text-center">
              <h2 className="font-bold text-[23px] sm:text-[27px] lg:text-[28px] leading-tight lg:leading-[23px] text-[#091717] tracking-[0.228px]">
                Registration Successful!
              </h2>
              <p className="font-normal text-[19px] sm:text-[21px] lg:text-[20px] leading-relaxed lg:leading-[25px] text-[#091717] tracking-[0.228px] w-full max-w-[389px]">
                Your child&apos;s class is confirmed! We&apos;ve sent all the details to your email, including the Zoom link and instructor information.
              </p>
            </div>

            {/* Back to Homepage Button */}
            <Link href="/" className="w-full max-w-[334px]">
              <button className="bg-[#fefc00] w-full flex items-center justify-center overflow-hidden px-6 py-3 rounded-2xl shadow-[inset_2px_2px_4px_0px_rgba(255,255,255,0.05),inset_-2px_-2px_6px_0px_rgba(0,0,0,0.15)]">
                <span className="font-medium text-[#161a20] text-[19px] sm:text-[21px] text-center tracking-[-0.4px] leading-6">
                  Back to homepage
                </span>
              </button>
            </Link>
          </div>
        ) : (
          <>
        <div className="bg-white flex items-center p-4 sm:p-6 lg:py-10 w-full justify-center">
          <div className="w-full max-w-full lg:max-w-[497px]">
            {/* Step Indicator */}
            <div className="flex flex-col items-center justify-center mb-6 sm:mb-8 lg:mb-[55px] w-full max-w-full sm:max-w-[90%] mx-auto">
              {/* Circles and Progress Bars Row */}
              <div className="flex items-center w-full mb-4 sm:mb-6 lg:mb-8">
                {/* Circle 1 */}
                <div className={`${step === 1 ? 'bg-[#fefc00]' : 'bg-[#1d1f24]'} flex items-center justify-center rounded-lg sm:rounded-xl w-5 h-5 sm:w-6 sm:h-6 z-10 shrink-0`}>
                  <span className={`${step === 1 ? 'font-normal text-[15px] sm:text-[17px] text-[#1d1f24]' : 'font-medium text-[15px] sm:text-[17px] text-white'}`}>1</span>
                </div>

                {/* Progress Bar 1 */}
                <div className="flex-1 h-0.5 sm:h-1 mx-2 sm:mx-3 relative">
                  <div className="h-full rounded-[20px] w-full bg-[#1d1f24]" />
                </div>

                {/* Circle 2 */}
                <div className={`${step === 2 ? 'bg-[#fefc00]' : 'bg-[#f3f3ed]'} flex items-center justify-center rounded-lg sm:rounded-xl w-5 h-5 sm:w-6 sm:h-6 z-10 shrink-0`}>
                  <span className={`${step === 2 ? 'font-normal text-[15px] sm:text-[17px] text-[#1d1f24]' : 'font-medium text-[15px] sm:text-[17px] text-[rgba(9,23,23,0.83)]'}`}>2</span>
                </div>

                {/* Progress Bar 2 */}
                <div className="flex-1 h-0.5 sm:h-1 mx-2 sm:mx-3 relative">
                  <div className={`h-full rounded-[20px] w-full ${step === 3 ? 'bg-[#1d1f24]' : 'bg-[#f3f3ed]'}`} />
                </div>

                {/* Circle 3 */}
                <div className={`${step === 3 ? 'bg-[#fefc00]' : 'bg-[#f3f3ed]'} flex items-center justify-center rounded-lg sm:rounded-xl w-5 h-5 sm:w-6 sm:h-6 z-10 shrink-0`}>
                  <span className={`${step === 3 ? 'font-normal text-[15px] sm:text-[17px] text-[#1d1f24]' : 'font-medium text-[15px] sm:text-[17px] text-[rgba(9,23,23,0.83)]'}`}>3</span>
                </div>
              </div>

              {/* Step Labels */}
              <div className="flex items-center justify-between w-full">
                <span className={`${step === 1 ? 'font-normal text-[#1d1f24]' : 'font-medium text-[rgba(9,23,23,0.83)]'} text-[15px] sm:text-[16.672px] leading-[16px] sm:leading-[18px]`}>
                  Information
                </span>
                <span className={`${step === 2 ? 'font-normal text-[#1d1f24]' : 'font-medium text-[rgba(9,23,23,0.83)]'} text-[15px] sm:text-[16.781px] leading-[16px] sm:leading-[18px]`}>
                  Scheduling
                </span>
                <span className={`${step === 3 ? 'font-normal text-[#1d1f24]' : 'font-medium text-[rgba(9,23,23,0.83)]'} text-[15px] sm:text-[16.781px] leading-[16px] sm:leading-[18px]`}>
                  Payment
                </span>
              </div>
            </div>

            {/* Form Fields */}
            {step === 1 && (
              <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-full lg:max-w-[416px]">
                {/* Parent Full Name */}
                <div className="flex flex-col">
                  <label className="font-normal text-[17px] sm:text-[18.63px] text-[#091717] leading-[20px] sm:leading-[22px] mb-1">
                    Parent full name
                  </label>
                  <input
                    type="text"
                    placeholder="Alexa Plex"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="bg-white border border-[#d9dce1] rounded h-10 sm:h-11 px-3 sm:px-4 font-normal text-[17px] sm:text-[18px] text-[#091717] placeholder:text-[#bdc1ca] focus:outline-none focus:border-[#091717]"
                  />
                </div>

                {/* Child Full Name */}
                <div className="flex flex-col">
                  <label className="font-normal text-[17px] sm:text-[18.63px] text-[#091717] leading-[20px] sm:leading-[22px] mb-1">
                    Child full name
                  </label>
                  <input
                    type="text"
                    placeholder="Ryan Plex"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    className="bg-white border border-[#d9dce1] rounded h-10 sm:h-11 px-3 sm:px-4 font-normal text-[17px] sm:text-[18px] text-[#091717] placeholder:text-[#bdc1ca] focus:outline-none focus:border-[#091717]"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col">
                  <label className="font-normal text-[17px] sm:text-[18.63px] text-[#091717] leading-[20px] sm:leading-[22px] mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="alexaplex@gmail.co"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      setEmailError(false);
                    }}
                    className={`bg-white border ${
                      emailError ? 'border-[#e23353]' : 'border-[#d9dce1]'
                    } rounded h-10 sm:h-11 px-3 sm:px-4 font-normal text-[17px] sm:text-[18px] text-[#091717] placeholder:text-[#bdc1ca] focus:outline-none ${
                      emailError ? 'focus:border-[#e23353]' : 'focus:border-[#091717]'
                    }`}
                  />
                </div>

                {/* Error Message */}
                {emailError && (
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-[#e23353] flex items-center justify-center shrink-0">
                      <span className="text-white text-[15px] font-bold">!</span>
                    </div>
                    <p className="font-normal text-[15px] sm:text-[17px] text-[#e23353] leading-[20px] sm:leading-[22px]">
                      Please enter an address.
                    </p>
                  </div>
                )}

                {/* Phone Number */}
                <div className="flex flex-col">
                  <label className="font-normal text-[17px] sm:text-[18.63px] text-[#091717] leading-[20px] sm:leading-[22px] mb-1">
                    Phone number
                  </label>
                  <div className="flex flex-col gap-1">
                    <div className="bg-white border border-[#d9dce1] rounded h-10 sm:h-11 px-3 sm:px-4 flex items-center justify-between">
                      <span className="font-normal text-[17px] sm:text-[18px] text-[#bdc1ca]">United States</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6 shrink-0">
                        <path d="M6 9L12 15L18 9" stroke="#091717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <input
                      type="tel"
                      placeholder="+1 (415) 642-5372"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="bg-white border border-[#d9dce1] rounded h-10 sm:h-11 px-3 sm:px-4 font-normal text-[17px] sm:text-[18px] text-[#091717] placeholder:text-[#bdc1ca] focus:outline-none focus:border-[#091717]"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="flex flex-col">
                  <label className="font-normal text-[17px] sm:text-[18.63px] text-[#091717] leading-[20px] sm:leading-[22px] mb-1">
                    Password
                  </label>
                  <div className="bg-white border border-[#d9dce1] rounded h-10 sm:h-11 px-3 sm:px-4 flex items-center justify-between">
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="flex-1 bg-transparent font-normal text-[19px] sm:text-[21px] text-[#091717] focus:outline-none"
                    />
                    <Eye className="w-4 h-4 text-[#091717] shrink-0" />
                  </div>
                </div>

                {/* Terms & Privacy */}
                <div className="mt-2 sm:mt-3">
                  <p className="font-normal text-[15px] sm:text-[16.344px] text-[#1d1f24] leading-[16px] sm:leading-[18px]">
                    By clicking &apos;Continue&apos;, you agree to Xelaris&apos;s{' '}
                    <Link href="/privacy" className="underline">
                      Privacy Policy
                    </Link>{' '}
                    and{' '}
                    <Link href="/terms" className="underline">
                      Terms Of Service
                    </Link>.
                  </p>
                </div>
              </div>
            )}

            {/* Step 2: Scheduling */}
            {step === 2 && (
              <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-full lg:max-w-[416px]">
                {/* Time Zone */}
                <div className="flex flex-col">
                  <label className="font-normal text-[17px] sm:text-[18.63px] text-[#091717] leading-[20px] sm:leading-[22px] mb-1">
                    Time Zone
                  </label>
                  <div className="bg-white border border-[#d9dce1] rounded h-10 sm:h-11 px-3 sm:px-4 flex items-center justify-between">
                    <input
                      type="text"
                      placeholder="Daylight Time (MDT): UTC -6"
                      value={formData.timezone}
                      onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                      className="flex-1 bg-transparent font-normal text-[17px] sm:text-[18px] text-[#091717] placeholder:text-[#bdc1ca] focus:outline-none"
                    />
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transform rotate-180 sm:w-6 sm:h-6 shrink-0">
                      <path d="M6 9L12 15L18 9" stroke="#091717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Select Child Age */}
                <div className="flex flex-col">
                  <label className="font-normal text-[17px] sm:text-[18.63px] text-[#091717] leading-[20px] sm:leading-[22px] mb-1">
                    Select Child Age
                  </label>
                  <div className="bg-white border border-[#d9dce1] rounded h-10 sm:h-11 px-3 sm:px-4 flex items-center justify-between">
                    <input
                      type="text"
                      placeholder="Ages 7-10"
                      value={formData.childAge}
                      onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      className="flex-1 bg-transparent font-normal text-[17px] sm:text-[18px] text-[#091717] placeholder:text-[#bdc1ca] focus:outline-none"
                    />
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transform rotate-180 sm:w-6 sm:h-6 shrink-0">
                      <path d="M6 9L12 15L18 9" stroke="#091717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Select Class Duration */}
                <div className="flex flex-col">
                  <label className="font-normal text-[17px] sm:text-[18.63px] text-[#091717] leading-[20px] sm:leading-[22px] mb-1">
                    Select Class Duration
                  </label>
                  <div className="bg-white border border-[#d9dce1] rounded h-10 sm:h-11 px-3 sm:px-4 flex items-center justify-between">
                    <input
                      type="text"
                      placeholder="45 min ($200/m) - 1 class per week"
                      value={formData.classDuration}
                      onChange={(e) => setFormData({ ...formData, classDuration: e.target.value })}
                      className="flex-1 bg-transparent font-normal text-[17px] sm:text-[18px] text-[#091717] placeholder:text-[#bdc1ca] focus:outline-none"
                    />
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transform rotate-180 sm:w-6 sm:h-6 shrink-0">
                      <path d="M6 9L12 15L18 9" stroke="#091717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* What Day Are You Available For Class */}
                <div className="flex flex-col">
                  <label className="font-normal text-[17px] sm:text-[18.63px] text-[#091717] leading-[20px] sm:leading-[22px] mb-1">
                    What Day Are You Available For Class
                  </label>
                  <div className="bg-white border border-[#d9dce1] rounded h-10 sm:h-11 px-3 sm:px-4 flex items-center justify-between">
                    <input
                      type="text"
                      placeholder="Monday"
                      value={formData.availableDay}
                      onChange={(e) => setFormData({ ...formData, availableDay: e.target.value })}
                      className="flex-1 bg-transparent font-normal text-[17px] sm:text-[18px] text-[#091717] placeholder:text-[#bdc1ca] focus:outline-none"
                    />
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transform rotate-180 sm:w-6 sm:h-6 shrink-0">
                      <path d="M6 9L12 15L18 9" stroke="#091717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* What Time Are You Available For Class */}
                <div className="flex flex-col">
                  <label className="font-normal text-sm sm:text-[15.63px] text-[#1c1e21] leading-[20px] sm:leading-[22px] mb-1">
                    What Time Are You Available For Class
                  </label>
                  <div className="bg-white border border-[#d9dce1] rounded h-10 sm:h-11 px-3 sm:px-4 flex items-center justify-between">
                    <input
                      type="text"
                      placeholder="02:45"
                      value={formData.availableTime}
                      onChange={(e) => setFormData({ ...formData, availableTime: e.target.value })}
                      className="flex-1 bg-transparent font-normal text-[17px] sm:text-[18px] text-[#091717] placeholder:text-[#bdc1ca] focus:outline-none"
                    />
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transform rotate-180 sm:w-6 sm:h-6 shrink-0">
                      <path d="M6 9L12 15L18 9" stroke="#091717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Payment - Placeholder */}
            {step === 3 && (
              <div className="flex flex-col gap-4 sm:gap-[18px] w-full max-w-full lg:max-w-[416px]">
                {/* Name on Card */}
                <div className="flex flex-col">
                  <label className="font-normal text-[17px] sm:text-[18.63px] text-[#091717] leading-[20px] sm:leading-[22px] mb-1">
                    Name on card
                  </label>
                  <input
                    type="text"
                    placeholder="Alexa Plex"
                    value={formData.cardName}
                    onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                    className="bg-white border border-[#d9dce1] rounded h-10 sm:h-11 px-3 sm:px-4 font-normal text-[17px] sm:text-[18px] text-[#091717] placeholder:text-[#bdc1ca] focus:outline-none focus:border-[#091717]"
                  />
                </div>

                {/* Card Number */}
                <div className="flex flex-col">
                  <label className="font-normal text-[17px] sm:text-[18.63px] text-[#091717] leading-[20px] sm:leading-[22px] mb-1">
                    Card number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="1234 1234 1234 1234"
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      className="bg-white border border-[#d9dce1] rounded h-10 sm:h-11 px-3 sm:px-4 pr-20 sm:pr-[140px] font-normal text-[17px] sm:text-[18px] text-[#091717] placeholder:text-[#bdc1ca] focus:outline-none focus:border-[#091717] w-full"
                    />
                    {/* Card Icons */}
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5 sm:gap-1">
                      <div className="w-5 h-3 sm:w-6 sm:h-4 bg-blue-600 rounded flex items-center justify-center text-white text-[7px] sm:text-[8px] font-bold">VISA</div>
                      <div className="w-5 h-3 sm:w-6 sm:h-4 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 -mr-0.5 sm:-mr-1" />
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-orange-400" />
                      </div>
                      <div className="w-5 h-3 sm:w-6 sm:h-4 bg-blue-400 rounded flex items-center justify-center text-white text-[6px] sm:text-[7px] font-bold">AMEX</div>
                      <div className="w-5 h-3 sm:w-6 sm:h-4 bg-white border border-gray-300 rounded flex items-center justify-center text-[6px] sm:text-[7px] font-bold">JCB</div>
                    </div>
                  </div>
                </div>

                {/* Expiry and CVV */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-[21px]">
                  <div className="flex flex-col flex-1">
                    <label className="font-normal text-[17px] sm:text-[18.63px] text-[#091717] leading-[20px] sm:leading-[22px] mb-1">
                      Expiry
                    </label>
                    <input
                      type="text"
                      placeholder="MM / YY"
                      value={formData.expiry}
                      onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                      className="bg-white border border-[#d9dce1] rounded h-10 sm:h-11 px-3 sm:px-4 font-normal text-[17px] sm:text-[18px] text-[#091717] placeholder:text-[#bdc1ca] focus:outline-none focus:border-[#091717]"
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <label className="font-normal text-[17px] sm:text-[18.63px] text-[#091717] leading-[20px] sm:leading-[22px] mb-1">
                      CVV
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="345"
                        value={formData.cvv}
                        onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                        className="bg-white border border-[#d9dce1] rounded h-10 sm:h-11 px-3 sm:px-4 pr-8 sm:pr-10 font-normal text-[17px] sm:text-[18px] text-[#091717] placeholder:text-[#bdc1ca] focus:outline-none focus:border-[#091717] w-full"
                      />
                      <svg className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-5 h-3 sm:w-6 sm:h-4" viewBox="0 0 24 16" fill="none">
                        <rect x="1" y="1" width="22" height="14" rx="2" stroke="#091717" strokeWidth="1"/>
                        <line x1="1" y1="4" x2="23" y2="4" stroke="#091717" strokeWidth="2"/>
                        <rect x="18" y="9" width="3" height="2" fill="#091717"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Billing Address */}
                <div className="flex flex-col gap-3 mt-2">
                  <label className="font-normal text-sm sm:text-[15.63px] text-[#091717] leading-[20px] sm:leading-[22px]">
                    Billing Address
                  </label>

                  {/* Country Dropdown */}
                  <div className="bg-white border border-[#e0e0e0] rounded-tl-md rounded-tr-md shadow-sm px-3 py-2 flex items-center justify-between">
                    <span className="font-normal text-[15px] sm:text-[17px] text-[#091717]">{formData.country}</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="#091717" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>

                  {/* Address Lines */}
                  <input
                    type="text"
                    placeholder="Address line 1"
                    value={formData.addressLine1}
                    onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                    className="bg-white border border-[#e0e0e0] shadow-sm px-3 py-2 font-normal text-[17px] sm:text-[18px] text-[#091717] placeholder:text-[rgba(9,23,23,0.5)] focus:outline-none focus:border-[#091717]"
                  />
                  <input
                    type="text"
                    placeholder="Address line 2"
                    value={formData.addressLine2}
                    onChange={(e) => setFormData({ ...formData, addressLine2: e.target.value })}
                    className="bg-white border border-[#e0e0e0] shadow-sm px-3 py-2 font-normal text-[17px] sm:text-[18px] text-[#091717] placeholder:text-[rgba(9,23,23,0.5)] focus:outline-none focus:border-[#091717]"
                  />

                  {/* City and Zip */}
                  <div className="flex flex-col sm:flex-row gap-px">
                    <input
                      type="text"
                      placeholder="City"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="bg-white border border-[#e0e0e0] shadow-sm px-3 py-2 font-normal text-sm sm:text-[15px] text-[#091717] placeholder:text-[rgba(9,23,23,0.5)] focus:outline-none focus:border-[#091717] flex-1"
                    />
                    <input
                      type="text"
                      placeholder="Zip"
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      className="bg-white border border-[#e0e0e0] shadow-sm px-3 py-2 font-normal text-sm sm:text-[15px] text-[#091717] placeholder:text-[rgba(9,23,23,0.5)] focus:outline-none focus:border-[#091717] flex-1"
                    />
                  </div>

                  {/* State Dropdown */}
                  <div className="bg-white border border-[#e0e0e0] rounded-bl-md rounded-br-md shadow-sm px-3 py-2 flex items-center justify-between">
                    <span className="font-normal text-[15px] sm:text-[17px] text-[#091717]">{formData.state || 'State'}</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="#091717" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>

                {/* Stripe Security Message */}
                <div className="flex items-start gap-2 mt-4">
                  <span className="text-[15px] sm:text-[16.672px] shrink-0">🔒</span>
                  <p className="font-normal text-[15px] sm:text-[16.672px] text-[#1d1f24] leading-[16px] sm:leading-[18px] flex-1">
                    We use Stripe to securely manage your payment information and we never store your complete card number ourselves.
                  </p>
                </div>

                {/* Powered by Stripe */}
                <div className="flex justify-center mt-2">
                  <div className="text-[15px] sm:text-[17px] text-gray-600">
                    Powered by <span className="font-bold text-[#635BFF]">stripe</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Buttons */}
        {step < 4 && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-[14.35px] w-full max-w-full lg:max-w-[422px] min-h-[54px] px-4">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="border border-black rounded-2xl px-6 sm:px-12 py-2.5 w-full sm:w-[204px] font-medium text-[#161a20] text-[19px] sm:text-[21px] text-center tracking-[-0.4px] leading-6"
              >
                Back
              </button>
            )}
            <Button
              type="colored"
              onClick={handleContinue}
              className={`flex items-center justify-center gap-2 !py-3 !px-6 sm:!px-12 w-full ${step === 1 ? 'sm:w-[422px]' : 'sm:w-[204px]'}`}
            >
              <span className="text-[19px] sm:text-[21px]">
                {step === 3 ? 'Make Payment' : 'Continue'}
              </span>
              {step < 3 && <ArrowRight className="w-4 h-4" />}
            </Button>
          </div>
        )}

        {/* Login Link */}
        {step < 4 && (
          <div className="flex items-center justify-center mt-4 px-4">
            <p className="font-normal text-[15px] sm:text-[17px] text-[#1b1b1b] leading-5 sm:leading-6 text-center">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-[#1d1f24] underline">
                Login
              </Link>
            </p>
          </div>
        )}
          </>
        )}
      </div>
    </div>
  );
}

