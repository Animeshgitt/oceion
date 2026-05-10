'use client';

// ============================================================
// File: components/sections/HowWeWork.jsx
// Styling: Tailwind CSS only — standard classes
// Framework: React / Next.js
// ============================================================

const STEPS = [
  {
    number: '01',
    title: 'Discover',
    desc: 'We assess your current privacy posture, data flows, regulatory obligations, and risk exposure through a structured discovery process.',
  },
  {
    number: '02',
    title: 'Design',
    desc: 'We design a bespoke compliance program — policies, controls, and governance structures — calibrated to your business model and risk appetite.',
  },
  {
    number: '03',
    title: 'Implement',
    desc: 'We work alongside your team to implement the program operationally, ensuring legal documents, processes, and training are in place.',
  },
  {
    number: '04',
    title: 'Sustain',
    desc: 'We provide ongoing monitoring, regulatory updates, annual reviews, and training refreshers to keep you continuously compliant.',
  },
];

const HowWeWork =()=> {
  return (
    <section className="bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-sky-500 shrink-0" />
            <span className="text-xs font-semibold tracking-widest uppercase text-sky-500">
              Our Approach
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            How We Work
          </h2>
          <p className="mt-4 text-base text-slate-500 max-w-lg leading-relaxed">
            Every engagement follows a structured, outcome-driven methodology that ensures
            compliance is embedded — not bolted on.
          </p>
        </div>

        {/* ── Steps ── */}
        <div className="flex flex-col lg:flex-row">
          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className={`
                flex-1 px-8 py-4
                border-slate-200 hover:bg-blue-50
                ${index !== 0 ? 'border-t sm:border-t-0 sm:border-l' : ''}
              `}
            >
              {/* Big number */}
              <p className="text-6xl font-bold text-sky-200 leading-none mb-6 select-none">
                {step.number}
              </p>

              {/* Title */}
              <h3 className="text-base font-bold text-slate-800 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default HowWeWork;