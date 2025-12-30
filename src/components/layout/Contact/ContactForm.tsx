'use client';
import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col items-center px-4 py-10 w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-md">
        {/* Name Fields */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="firstName" className="font-medium text-white text-sm">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="bg-[#1c2026] border border-white/20 rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:border-[#fefc00] transition-colors"
              placeholder="Enter your first name"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="lastName" className="font-medium text-white text-sm">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="bg-[#1c2026] border border-white/20 rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:border-[#fefc00] transition-colors"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email" className="font-medium text-white text-sm">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-[#1c2026] border border-white/20 rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:border-[#fefc00] transition-colors"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="phoneNumber" className="font-medium text-white text-sm">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="bg-[#1c2026] border border-white/20 rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:border-[#fefc00] transition-colors"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="subject" className="font-medium text-white text-sm">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="bg-[#1c2026] border border-white/20 rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:border-[#fefc00] transition-colors appearance-none cursor-pointer"
          >
            <option value="" disabled>Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="trial">Book a Trial Class</option>
            <option value="programs">Program Information</option>
            <option value="technical">Technical Support</option>
            <option value="billing">Billing Question</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="message" className="font-medium text-white text-sm">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="bg-[#1c2026] border border-white/20 rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:border-[#fefc00] transition-colors resize-none"
            placeholder="Tell us more about your inquiry..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#fefc00] flex items-center justify-center overflow-hidden py-3 px-6 rounded-xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] w-full mt-4 hover:bg-[#f5f200] transition-colors"
        >
          <span className="font-medium text-[#161a20] text-lg leading-6 tracking-[-0.4px] text-center">
            Send Message
          </span>
        </button>
      </form>
    </div>
  );
}

