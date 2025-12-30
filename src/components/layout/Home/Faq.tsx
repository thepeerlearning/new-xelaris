'use client';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';


interface FAQItem {
  question: string;
  answer?: string; // Optional for now, can be added later
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

export function Faq() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (sectionTitle: string, question: string) => {
    const key = `${sectionTitle}-${question}`;
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(key)) {
      newOpenItems.delete(key);
    } else {
      newOpenItems.add(key);
    }
    setOpenItems(newOpenItems);
  };

  const faqData: FAQSection[] = [
    {
      title: "About Our Programs",
      items: [
        {
          question: "What is the difference between Foundation, Advanced, and Masters?",
          answer: "Foundation is where students discover what kind of technologist they want to become. They learn the basics of coding, explore different areas such as web development, AI, and game development, and build four to six real projects over six to twelve months. It is designed for kids ages 7 - 10 with no prior experience.\n\nIntermediate is where students go deep into their chosen path. They choose a specialization in Web Development, Software and AI, or Game Development. Over seven to nine months of personalized one-on-one instruction with a professional engineer, they deepen their technical skills by building hands-on projects and applying concepts to real-world problems within their chosen path. It is designed for kids ages 11 - 13. Prerequisite required.\n\nAdvanced is our most intensive program for ages 14-18. Students build production-ready applications and create portfolios that help them gain admission into top universities or secure internships at major tech companies. It runs for twelve to eighteen months and includes personalized mentorship."
        },
        {
          question: "What is the AI Accelerator?",
          answer: "The AI Accelerator is a focused program for high school students who need one standout AI project for college applications or science competitions. Instead of learning everything about AI over an extended period, students choose a domain such as AI and Health, AI and Finance, AI and Law, AI and Education, AI and Business, or AI and Language, and build one exceptional research level project with one on one mentorship from an AI engineer."
        },
        {
          question: "How do I know which program is right for my child?",
          answer: "We offer a personalized assessment where we meet with your child, review any previous work, give a short technical challenge, and discuss their interests. By the end of the call, we provide a clear recommendation on the best program."
        },
        {
          question: "Does my child need coding experience to start?",
          answer: "Foundation: No prior experience required. This program is designed for complete beginners.\n\nIntermediate: Yes. Students should have basic programming knowledge, either by completing Foundation or by demonstrating a solid understanding of core concepts.\n\nAdvanced: Yes. Students must have strong technical skills, either through successful completion of Intermediate or through at least two years of coding experience supported by a portfolio.\n\nAI Accelerator: Yes. Students must have strong Python programming skills."
        },
        {
          question: "What if my child is not ready for the program I want them in?",
          answer: "We will be honest with you. If your child is not ready, we will explain exactly what they need to improve and recommend the right starting point. Most students who are not ready for Advanced simply need Foundation first. That is not a setback. It is the smartest path to long-term success."
        },
        {
          question: "Can my child switch paths during the program?",
          answer: "Yes, especially in Intermediate. Helping students discover what genuinely interests them is a core part of the program. If your child begins in web development and later realizes they prefer game development, we adapt their learning path. In more advanced levels, switching is possible but less common, as students typically enter with a clear focus."
        },
      ],
    },
    {
      title: "How Classes Work",
      items: [
        {
          question: "Are these group classes or private lessons?",
          answer: "All programs are one-on-one private lessons with a dedicated mentor. Your child receives personalized attention, progresses at their own pace, and gets direct feedback on every line of code they write."
        },
        {
          question: "How long are the classes?",
          answer: "Class length and frequency depend on the program you choose.\n\nIn the Foundation program, students can attend 45-minute or 1-hour sessions, either once per week or twice per week.\n\nIn the Intermediate and Advanced programs, students attend 45-minute sessions twice per week, 1-hour sessions once per week, or 1-hour sessions twice per week."
        },
        {
          question: "How often does my child meet with their mentor?",
          answer: "You choose either once a week or twice a week. Students who meet twice weekly typically progress faster, but once weekly works well for many families."
        },
        {
          question: "What happens in each session?",
          answer: "Each session is personalized to your child. They may learn a new concept, build a project, debug code they have written, or receive feedback on their work. After every class, you receive detailed instructor notes outlining what was covered."
        },
        {
          question: "What if my child needs help between classes?",
          answer: "We provide dedicated support seven days a week. If your child gets stuck or has a question, they can reach out and receive help without waiting for the next session."
        },
        {
          question: "Can we reschedule classes?",
          answer: "Yes. You can reschedule your child's class anytime. We understand that life happens, and we aim to remain flexible for your family."
        },
      ],
    },
    {
      title: "Pricing & Payment",
      items: [
        {
          question: "How much does each program cost?",
          answer: "Pricing varies based on the program, session length, and class frequency. For full and up-to-date details, please visit our Pricing page, where all options are clearly outlined."
        },
        {
          question: "What is included in the monthly price?",
          answer: "Everything your child needs, including private one-on-one sessions once or twice weekly with an experienced instructor, personalized lessons tailored to your child's pace and learning style, detailed instructor notes after every class, dedicated support seven days a week, flexible rescheduling, and course certification upon completion."
        },
        {
          question: "Is there a registration fee or any hidden costs?",
          answer: "No. There are no registration fees and no hidden costs. The monthly price is exactly what you pay."
        },
        {
          question: "Can I pause or cancel?",
          answer: "Yes. We require thirty days' notice for cancellation. You can also pause your child's enrollment if you need to take a break."
        },
        {
          question: "Do you offer any guarantees?",
          answer: "Yes. If you enroll after the assessment and your child completes the first two classes but you are not satisfied, we will work with you to make it right. This may include adjusting the program, changing instructors, or issuing a refund."
        },
      ],
    },
    {
      title: "Results & Outcomes",
      items: [
        {
          question: "What will my child actually build?",
          answer: "Foundation: Students build hands-on projects like games and animations, learning by doing and exploring what excites them most.\n\nIntermediate: Students work on 5–6 meaningful projects, such as web applications, AI models, or published games.\n\nAdvanced: Students develop research-level projects, submit work to competitions, build portfolios, and develop real applications that people can actually use."
        },
        {
          question: "Will my child get a certificate?",
          answer: "Yes. Students receive course certification upon completion. More importantly, they leave with a portfolio of real projects, which matters far more than a certificate."
        },
        {
          question: "What do students do after completing a program?",
          answer: "After Foundation, students typically move on to Intermediate to deepen their skills.\n\nAfter Intermediate, students progress to Advanced if they are aiming for top universities or serious tech careers. Others may choose to apply for internships or start freelancing."
        },
        {
          question: "Has this actually worked for other kids?",
          answer: "Yes. Many of our students have achieved impressive results, including winning national and international competitions such as the National Beta State Competition in 2024 and 2025, as well as AI competitions. Several have built and launched live applications, and some have even applied to Y Combinator, the world's largest startup accelerator, with the projects they created in our programs."
        },
      ],
    },
    {
      title: "About Instructors",
      items: [
        {
          question: "Who are the instructors?",
          answer: "All instructors are experienced developers who build software every day. They are not just teachers. They are practitioners who design systems, solve real world problems, and ship products to real users."
        },
        {
          question: "Will my child have the same instructor throughout the program?",
          answer: "Yes. Consistency matters in one-on-one mentorship, and your child will work with the same dedicated mentor throughout the program."
        },
        {
          question: "What if my child does not connect with their instructor?",
          answer: "We will switch instructors. The mentor-student relationship is critical, and we prioritize the right fit."
        },
      ],
    },
    {
      title: "Technical Requirements",
      items: [
        {
          question: "What does my child need to participate?",
          answer: "A computer running Windows, Mac, or Chromebook for Foundation. Windows or Mac is preferred for intermediate and advanced. A stable internet connection and a quiet space for video calls are also required."
        },
        {
          question: "Do I need to buy any software?",
          answer: "No. All tools we use are free and open source. We help set everything up during the first session."
        },
        {
          question: "What if we have technical issues?",
          answer: "Our support team is available seven days a week and will help troubleshoot any issues."
        },
      ],
    },
    {
      title: "Getting Started",
      items: [
        {
          question: "How do I enroll my child?",
          answer: "Book an assessment session.\n\nMeet with your child to review their skills and receive a clear program recommendation.\n\nEnroll your child and get started."
        },
        {
          question: "How quickly can my child start?",
          answer: "Most students begin within one week of their assessment, depending on instructor availability and scheduling."
        },
        {
          question: "What if I have more questions?",
          answer: "You can contact our team directly at any time. We are happy to answer all your questions and guide you before you make any commitment."
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-start px-4 py-10 w-full">
      <div className="flex flex-col gap-4 items-start w-full md:max-w-[60rem] lg:max-w-[70rem] mx-auto lg:px-30">
        {/* Header Section */}
        <div className="flex flex-col gap-4 items-center w-full">
          {/* Title */}
          <div className="flex flex-col items-center w-full">
            <h2 className="font-medium text-white text-3xl sm:text-3xl md:text-5xl     lg:text-6xl leading-[2.2rem] lg:leading-[4.4rem] text-center tracking-[-0.075rem] whitespace-pre-wrap">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Description */}
          <div className="flex flex-col items-center justify-center w-full">
            <p className="font-medium leading-[1.4rem] text-[#b0b0b0] text-lg text-center tracking-[-0.025rem] whitespace-pre-wrap max-w-md">
              Find answers to common questions about our programs, pricing, scheduling, and how to get started.
            </p>
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="flex flex-col gap-4 items-start w-full px-4">
          {faqData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="flex flex-col gap-4 items-start w-full">
              {/* Section Heading */}
              <div className="flex gap-0  items-start p-5 relative rounded-[14px] w-full">
                <div className="flex flex-[1_0_0] flex-col h-full items-start min-h-0 min-w-0 relative">
                  <div className="flex items-center justify-between relative w-full">
                    <div className="flex flex-col items-start pl-0 pr-[30px] py-0 relative">
                      <div className="flex flex-col font-semibold leading-[0] relative text-[#fefc00] text-[18px]">
                        <p className="leading-[28px] whitespace-pre-wrap text-left">{section.title}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start relative shrink-0">
                      <div className="shrink-0 w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Questions */}
              {section.items.map((item, itemIndex) => {
                const key = `${section.title}-${item.question}`;
                const isOpen = openItems.has(key);

                return (
                  <div key={itemIndex} className="flex flex-col gap-0 items-start w-full">
                    <button
                      onClick={() => toggleItem(section.title, item.question)}
                      className="bg-white/10 flex gap-4 items-start p-5 relative rounded-[14px] w-full hover:bg-white/15 transition-colors"
                    >
                      {/* Chat Bubble Icon */}
                      <div className="bg-white/30 flex flex-col items-center p-2 relative rounded-[6px] shrink-0">
                        <div className="relative w-6 h-6 flex items-center justify-center">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.9 18.0079C8.80858 18.9869 11.0041 19.2521 13.0909 18.7556C15.1777 18.2592 17.0186 17.0337 18.2818 15.3C19.545 13.5664 20.1474 11.4386 19.9806 9.30002C19.8137 7.16147 18.8886 5.15283 17.3718 3.63605C15.855 2.11928 13.8464 1.19411 11.7078 1.02728C9.56929 0.860441 7.44147 1.46291 5.70782 2.72611C3.97417 3.98931 2.74869 5.83017 2.25222 7.91697C1.75575 10.0038 2.02094 12.1993 3 14.1079L1 20.0079L6.9 18.0079Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </div>
                      </div>

                      {/* Question Text */}
                      <div className="flex flex-[1_0_0] flex-col items-start min-h-0 min-w-0 relative self-stretch">
                        <div className="flex items-center justify-between relative w-full">
                          <div className="flex flex-col items-start pl-0 pr-[30px] py-0 relative">
                            <div className="flex flex-col font-normal justify-center leading-[0] relative text-white text-[18px]">
                              <p className="leading-[28px] whitespace-pre-wrap text-left">{item.question}</p>
                            </div>
                          </div>
                          {/* Chevron Icon */}
                          <div className="flex flex-col items-start relative shrink-0">
                            <div className={`relative w-6 h-6 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                              <ChevronDown className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>

                    {/* Answer (Collapsible) */}
                    {isOpen && item.answer && (
                      <div className="bg-white/5 p-5 rounded-[14px] w-full">
                        <p className="font-normal text-white text-lg leading-[1.4rem] whitespace-pre-wrap">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
