'use client';

import { useState } from 'react';
// ============================================================
// File: components/sections/EngagementModels.jsx
// Styling: Tailwind CSS — standard classes only
// Framework: React / Next.js
// ============================================================
import Modal from '@/app/_components/Modal';
const PLANS = [
  {
    tag: 'Foundation',
    title: 'Privacy Foundation',
    subtitle: 'For startups and SMEs establishing their first privacy programme',
    featured: false,
    btnLabel: 'Get Started',
    btnStyle: 'outline',
    items: [
      'Privacy gap analysis & risk assessment',
      'Core policy documentation suite (x4)',
      'Personal data mapping & RoPA',
      'Privacy notice & cookie policy drafting',
      'Two advisory sessions per month',
      'Staff awareness training (x1 session)',
      'Breach response procedure',
      'Regulatory horizon monitoring',
    ],
  },
  {
    tag: 'Full Programme',
    title: 'Compliance Partner',
    subtitle: 'For scaling organisations requiring end-to-end compliance management',
    featured: true,
    btnLabel: 'Get Started',
    btnStyle: 'solid',
    items: [
      'Everything in Foundation, plus:',
      'Named outsourced DPO (full mandate)',
      'Complete policy & documentation suite',
      'DPIA & risk assessment programme',
      'Data subject request management',
      'Breach response planning & activation',
      'Quarterly board privacy reporting',
      'Unlimited advisory access',
      'Annual compliance health check',
    ],
  },
  {
    tag: 'Enterprise',
    title: 'Strategic Advisory',
    subtitle: 'For enterprises demanding multi-jurisdictional depth and board-level counsel',
    featured: false,
    btnLabel: 'Contact Us',
    btnStyle: 'outline',
    items: [
      'Everything in Compliance Partner, plus:',
      'Multi-jurisdiction regulatory coverage',
      'Board & C-suite advisory programme',
      'M&A privacy due diligence',
      'AI & emerging technology review',
      'Bespoke corporate training programme',
      '24/7 breach response priority line',
      'Dedicated senior advisory team',
      'Monthly regulatory briefings',
    ],
  },
];

function CheckIcon({ featured }) {
  return (
    <svg
      className={`w-4 h-4 shrink-0 mt-0.5 ${featured ? 'text-sky-400' : 'text-sky-500'}`}
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const EngagementModels = () => {
    const [isModalOpen,setIsModalOpen]=useState(false);
  return (
    <>
    <Modal isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)} title="Discuss our Services with Us"></Modal>
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="w-full mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col justify-center items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-sky-500 shrink-0" />
            <span className="text-xs font-semibold tracking-widest uppercase text-sky-500">
              Engagement Models
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Structured for Every{' '}
            <span className="text-sky-500">Stage of Growth</span>
          </h2>
          <p className="mt-4 text-base text-slate-500 max-w-3xl leading-relaxed">
            Three clearly scoped engagement models — designed to deliver the right depth of
            compliance support at the right stage of your organisation's journey.
          </p>
        </div>

        {/* ── Plans grid ── */}
        <div className="flex flex-col lg:flex-row gap-1 justify-center items-stretch">
          {PLANS.map((plan, index) => (
            <div
              key={plan.title}
              className={`
                 flex flex-col relative   md:mx-auto lg:mx-0
                ${plan.featured
                  ? 'bg-slate-900 text-white z-10 shadow-2xl lg:w-130 md:w-110 '
                  : 'bg-blue-50 text-slate-900 lg:w-125 md:w-100 w-[90%] mx-auto lg:mx-0'
                }
                ${index === 0 ? 'lg:rounded-l-lg border border-slate-200 lg:border-r-0' : ''}
                ${index === 2 ? 'lg:rounded-r-lg border border-slate-200 lg:border-l-0' : ''}
                ${plan.featured ? 'rounded-lg border border-blue-700 lg:-my-4' : ''}
              `}
            >

              {/* Recommended badge */}
              {plan.featured && (
                <div className="absolute top-0 right-0">
                  <span className="bg-sky-500 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-bl-lg rounded-tr-lg">
                    Recommended
                  </span>
                </div>
              )}

              {/* Card content */}
              <div className="flex flex-col flex-1 px-4 pt-10 pb-8">

                {/* Tag */}
                <p className={`text-xs font-semibold tracking-widest uppercase mb-3 ${plan.featured ? 'text-sky-400' : 'text-sky-500'}`}>
                  {plan.tag}
                </p>

                {/* Title */}
                <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-slate-900'}`}>
                  {plan.title}
                </h3>

                {/* Subtitle */}
                <p className={`text-sm italic mb-6 leading-relaxed ${plan.featured ? 'text-blue-300' : 'text-slate-400'}`}>
                  {plan.subtitle}
                </p>

                {/* Divider */}
                <div className={`h-px mb-6 ${plan.featured ? 'bg-blue-700' : 'bg-slate-200'}`} />

                {/* Feature list */}
                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon featured={plan.featured} />
                      <span className={`text-sm leading-relaxed ${plan.featured ? 'text-blue-100' : 'text-slate-600'}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                {plan.btnStyle === 'solid' ? (
                  <button onClick={()=>setIsModalOpen(true)} className="w-full py-3.5 hover:bg-sky-700 bg-sky-500  text-white text-xs font-bold tracking-widest uppercase rounded transition duration-150 cursor-pointer">
                    {plan.btnLabel} 
                  </button>
                ) : (
                  <button onClick={()=>setIsModalOpen(true)} className="w-full py-3.5 border hover:bg-sky-200 border-sky-500 text-sky-600 hover:bg-sky-50 text-xs font-bold tracking-widest uppercase rounded transition duration-150 cursor-pointer">
                    {plan.btnLabel}
                  </button>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
}
export default EngagementModels;