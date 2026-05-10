'use client';

// ============================================================
// File: components/sections/SpecialistKnowledge.jsx
// Styling: Tailwind CSS — standard classes only
// Framework: React / Next.js
// Hover state: dark navy background with white text
// ============================================================

import { useState } from 'react';

const AREAS = [
  {
    icon: '🛡️',
    title: 'Data Privacy & Protection Law',
    desc: 'GDPR, India DPDP Act 2023, Singapore PDPA, Thailand PDPA, PIPL China, CCPA/CPRA — multi-jurisdictional expertise in substantive data protection law and its practical application.',
    tags: ['GDPR', 'DPDP ACT 2023', 'PDPA', 'CCPA'],
  },
  {
    icon: '🔒',
    title: 'Information Security Governance',
    desc: 'ISO 27001, NIST CSF, SOC 2 alignment, and information security management systems — bridging the gap between technical security controls and legal data protection obligations.',
    tags: ['ISO 27001', 'NIST CSF', 'ISMS'],
  },
  {
    icon: '⚖️',
    title: 'Regulatory & Corporate Compliance',
    desc: 'Multi-jurisdictional regulatory mapping, compliance programme design and management, and board-level governance advisory for complex, data-heavy organisations.',
    tags: ['MULTI-JURISDICTION', 'BOARD ADVISORY', 'GOVERNANCE'],
  },
  {
    icon: '🤖',
    title: 'AI & Emerging Technology Privacy',
    desc: 'EU AI Act compliance, automated decision-making obligations, biometric data governance, and responsible AI frameworks — built for the technology-driven organisations of 2025 and beyond.',
    tags: ['EU AI ACT', 'GDPR ART 22', 'BIOMETRICS'],
  },
  {
    icon: '🏥',
    title: 'Health Data & Sensitive Category Processing',
    desc: 'HIPAA alignment, patient data governance, clinical trial privacy, and the heightened obligations for special category data under GDPR and the DPDP Act.',
    tags: ['HIPAA', 'SPECIAL CATEGORY', 'CLINICAL TRIALS'],
  },
  {
    icon: '💼',
    title: 'DPO Practice & Privacy Leadership',
    desc: 'Outsourced DPO services, DPO advisory, and the governance structures that allow Data Protection Officers to operate with the independence and authority the law requires.',
    tags: ['DPO-AS-A-SERVICE', 'GDPR ART 37-39', 'INDEPENDENCE'],
  },
  {
    icon: '🏦',
    title: 'Financial Services & Fintech Privacy',
    desc: 'RBI data localisation, PCI-DSS alignment, AML data governance, and the intersection of financial regulation and data protection law — where two complex regimes overlap.',
    tags: ['RBI GUIDELINES', 'PCI-DSS', 'AML'],
  },
  {
    icon: '🎓',
    title: 'Privacy Education & Professional Development',
    desc: 'Certified professional courses, student learning modules, and corporate training programmes building the next generation of data privacy practitioners across India and beyond.',
    tags: ['CDPP', 'DPO TRAINING', 'CORPORATE TRAINING'],
  },
];

function AreaCard({ area }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        flex flex-col gap-4 p-7 border-b border-r border-slate-200
        transition-all duration-200 cursor-default
        ${hovered ? 'bg-blue-100' : 'bg-white'}
      `}
    >
      {/* Icon + Title row */}
      <div className="flex items-start gap-4">
        {/* Icon circle */}
        <div className={`
          w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-xl
          border transition-colors duration-200
          ${hovered
            ? 'bg-sky-500/20 border-sky-300'
            : 'bg-slate-100 border-slate-200'}
        `}>
          {area.icon}
        </div>

        {/* Title + desc */}
        <div className="flex flex-col gap-2 min-w-0">
          <h3 className={`text-base font-bold leading-snug transition-colors duration-200 ${hovered ? 'text-black' : 'text-slate-900'}`}>
            {area.title}
          </h3>
          <p className={`text-sm leading-relaxed transition-colors duration-200 ${hovered ? 'text-slate-600' : 'text-slate-500'}`}>
            {area.desc}
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pl-15">
        {area.tags.map((tag) => (
          <span
            key={tag}
            className={`
              text-xs font-semibold tracking-wider px-2.5 py-1 rounded
              transition-colors duration-200
              ${hovered
                ? 'bg-slate-300 text-slate-600 border border-sky-500/30'
                : 'bg-slate-100 text-slate-500 border border-slate-200'}
            `}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Left accent bar on hover */}
      {hovered && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-sky-500 rounded-r" />
      )}
    </div>
  );
}

export default function SpecialistKnowledge() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-sky-500 flex-shrink-0" />
            <span className="text-xs font-semibold tracking-widest uppercase text-sky-500">
              Deep Expertise
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Areas of{' '}
            <span className="text-sky-500">Specialist Knowledge</span>
          </h2>
          <p className="text-base text-slate-500 max-w-lg leading-relaxed">
            Eight specialist practice areas — each with dedicated expert practitioners, not
            generalists covering multiple domains.
          </p>
        </div>

        {/* ── Grid ── */}
        {/* Outer border wrapper */}
        <div className="border-t border-l border-slate-200">
          {/* Two cards per row */}
          <div className="flex flex-col sm:flex-row flex-wrap">
            {AREAS.map((area) => (
              <div
                key={area.title}
                className="relative w-full sm:w-1/2"
              >
                <AreaCard area={area} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}