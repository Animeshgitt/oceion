'use client';
import React from "react";
// ============================================================
// File: components/sections/DpoService.jsx
// Styling: Tailwind CSS — standard classes only
// Colors: navy, blue, sky — no arbitrary values
// Framework: React / Next.js
// ============================================================

const BULLET_POINTS = [
  'Named, qualified DPO with legal accountability and independence',
  'Regular privacy reviews and board-level reporting',
  '24/7 breach response hotline for incident management',
  'Regulatory authority liaison and notification management',
  'Ongoing training and awareness for your team',
  'Scales with your business — from seed to Series C and beyond',
];

const RETAINER_ITEMS = [
  {
    icon: '📋',
    title: 'Monthly Privacy Review',
    desc: 'Structured review of data flows, incidents, and regulatory developments affecting your business.',
  },
  {
    icon: '📞',
    title: 'On-Call Advisory',
    desc: 'Direct access to your DPO for urgent queries, new product reviews, or regulatory questions.',
  },
  {
    icon: '⚡',
    title: 'Breach Response',
    desc: 'Immediate activation on any incident — assessment, notification drafting, regulator liaison.',
  },
  {
    icon: '🗂️',
    title: 'DSR Management',
    desc: 'Handling and logging of all Data Subject Requests within required timeframes.',
  },
  {
    icon: '🎓',
    title: 'Team Training',
    desc: 'Quarterly awareness sessions keeping your staff current and your culture privacy-first.',
  },
];

const Featured =()=> {
  return (
    <section className="bg-navy py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col justify-center items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-sky-400 shrink-0" />
            <span className="text-xs font-semibold tracking-widest uppercase text-sky-400">
              Featured Service
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-6xl">
            DPO-as-a-Service:{' '}
            <span className="text-sky-400">Privacy Leadership</span>{' '}
            on Demand
          </h2>
          <p className="mt-5 text-base text-blue-200 max-w-xl leading-relaxed">
            The most cost-effective way for growing organisations to access qualified,
            independent Data Protection Officer expertise.
          </p>
        </div>

        {/* ── Two-column body ── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 items-start">

          {/* ── LEFT — Why section ── */}
          <div className="flex-1 min-w-0">

            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-6">
              Why most startups need a{' '}
              <span className="text-sky-400">DPO before</span>{' '}
              they think they do
            </h3>

            <p className="text-sm text-blue-200 leading-relaxed mb-5">
              Under GDPR, the India DPDP Act, and many other frameworks, certain types of data
              processing legally require a DPO. But even where it's not mandatory, having
              qualified privacy oversight protects your business, your customers, and your
              reputation.
            </p>

            <p className="text-sm text-blue-200 leading-relaxed mb-8">
              OCEION's DPO-as-a-Service gives you a named, qualified DPO who acts independently,
              liaises with regulators, manages data subject requests, and ensures your privacy
              program stays current — at a fraction of the cost of a full-time hire.
            </p>

            {/* Bullet list */}
            <ul className="flex flex-col gap-3 mb-10">
              {BULLET_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-sky-400 flex-shrink-0 mt-1.5" />
                  <span className="text-sm text-blue-100 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            {/* CTA button */}
            <button className="py-3 px-5 md:px-6 md:py-3.5 bg-sky-500 hover:bg-sky-700 text-white text-xs font-bold 
            less-spacing uppercase rounded transition duration-150 cursor-pointer text-center">
              Enquire About <br className="md:hidden"/>DPO-as-a-Service
            </button>

          </div>

          {/* ── RIGHT — Retainer card ── */}
          <div className="w-full lg:w-[50%] shrink-0 bg-deep border border-light rounded-lg overflow-hidden p-5">

            {/* Card header */}
            <div className="px-6 py-5 border-b border-navy">
              <p className="text-xs font-semibold less-spacing uppercase text-blue-400 text-start">
                What's Included
              </p>
            </div>

            {/* Retainer items */}
            <div className="divide-y divide-navy flex flex-col gap-y-3">
              {RETAINER_ITEMS.map((item) => (
                <div key={item.title} className="flex border border-navy items-start 
                bg-navy gap-4 px-6 py-5 hover:bg-blue-900 transition duration-150">
                  <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                    <p className="text-xs text-blue-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Featured;