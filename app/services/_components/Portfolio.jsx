'use client';

import { useState } from 'react';
import Link from 'next/link';
import Modal from '../../_components/Modal';

const TABS = ['ALL SERVICES', 'PRIVACY', 'SECURITY', 'LEGAL & REGULATORY', 'ADVISORY & DPO', 'TECH & EMERGING'];

const SERVICES = [
  {
    categories: ['ALL SERVICES', 'PRIVACY'],
    tag: 'DATA PRIVACY · CORE SERVICE',
    icon: '🛡️',
    title: 'Data Privacy & Protection Compliance',
    desc: 'We design and implement comprehensive data privacy programs aligned with GDPR, India\'s Digital Personal Data Protection Act 2023, Singapore PDPA, and other applicable frameworks. Our programs are built around your actual data flows — not generic templates.',
    features: [
      'GDPR & DPDP Act 2023 compliance',
      'Lawful basis & consent management',
      'Privacy by design & by default',
      'Records of Processing Activities (RoPA)',
      'Personal data mapping & inventory',
      'Data subject rights implementation',
      'Cross-border data transfer mechanisms',
      'Vendor compliance management',
    ],
    industryTags: ['STARTUPS', 'FINTECH', 'HEALTHCARE', 'E-COMMERCE'],
  },
  {
    categories: ['ALL SERVICES', 'SECURITY'],
    tag: 'SECURITY · GOVERNANCE',
    icon: '🔒',
    title: 'Information Security & Governance',
    desc: 'Robust information security is the foundation of credible privacy compliance. We help organisations build ISO 27001-aligned security management systems, establish technical and organisational controls, and demonstrate security to clients, regulators, and investors.',
    features: [
      'ISO 27001 gap analysis & roadmap',
      'Security risk assessment & treatment',
      'Incident detection & response planning',
      'Security awareness & training programs',
      'ISMS policy development',
      'Access control & asset management',
      'Third-party vendor security assessment',
      'Business continuity & DR planning',
    ],
    industryTags: ['CORPORATES', 'FINTECH', 'HEALTHCARE', 'GOVERNMENT'],
  },
  {
    categories: ['ALL SERVICES', 'LEGAL & REGULATORY'],
    tag: 'LEGAL · REGULATORY',
    icon: '⚖️',
    title: 'Regulatory & Corporate Compliance',
    desc: 'Operating across jurisdictions means navigating overlapping and sometimes conflicting regulatory regimes. We map your obligations, design your compliance architecture, and keep your programme current as laws evolve — from seed stage to listed enterprise.',
    features: [
      'Multi-jurisdiction regulatory mapping',
      'GDPR / PDPA / PIPL / CCPA alignment',
      'Regulatory change monitoring & alerts',
      'Regulatory authority response support',
      'India DPDP Act 2023 implementation',
      'Compliance programme design & management',
      'Board-level compliance governance',
      'Compliance culture & accountability framework',
    ],
    industryTags: ['CORPORATES', 'FINTECH', 'EDTECH', 'E-COMMERCE'],
  },
  {
    categories: ['ALL SERVICES', 'PRIVACY'],
    tag: 'PRIVACY · RISK',
    icon: '🔍',
    title: 'Risk Assessment & Audits (DPIA)',
    desc: 'Structured assessments and independent audits provide the evidence base that regulators, investors, and clients demand. We conduct rigorous DPIAs, vendor due diligence, and compliance health checks that produce actionable, prioritised recommendations.',
    features: [
      'Data Protection Impact Assessments (DPIA)',
      'Privacy maturity benchmarking',
      'AI system privacy risk review',
      'Technical & organisational measures audit',
      'Legitimate Interest Assessments (LIA)',
      'Third-party & vendor due diligence',
      'Annual compliance health check',
      'Gap analysis & remediation roadmap',
    ],
    industryTags: ['ALL INDUSTRIES', 'HEALTHCARE', 'FINTECH'],
  },
  {
    categories: ['ALL SERVICES', 'LEGAL & REGULATORY'],
    tag: 'LEGAL · DOCUMENTATION',
    icon: '📄',
    title: 'Policy Drafting & Documentation',
    desc: 'Legally sound documentation is both a compliance obligation and a trust signal. Every document we produce is plain-language, jurisdiction-specific, and drafted to withstand regulatory scrutiny — not to create the appearance of compliance.',
    features: [
      'Privacy notices & website policies',
      'Data processing agreements (DPA/DPA)',
      'Internal data governance policies',
      'Data retention & deletion schedules',
      'Cookie consent frameworks & banners',
      'Standard Contractual Clauses (SCCs)',
      'Employee & HR data handling guidelines',
      'Breach notification procedures',
    ],
    industryTags: ['STARTUPS', 'SMES', 'E-COMMERCE', 'EDTECH'],
  },
  {
    categories: ['ALL SERVICES', 'ADVISORY & DPO'],
    tag: 'ADVISORY · DPO',
    icon: '💼',
    title: 'DPO-as-a-Service',
    desc: 'A qualified, independent Data Protection Officer — without the cost or complexity of a full-time hire. Our DPO-as-a-Service gives you named, accountable oversight of your privacy programme, with direct access to expert counsel when it matters most.',
    features: [
      'Named, qualified outsourced DPO',
      'Regulatory authority liaison',
      'Breach response & notification oversight',
      'M&A privacy due diligence',
      'Independent oversight & reporting',
      'Data subject request management',
      'Board & management privacy briefings',
      'New product & service privacy review',
    ],
    industryTags: ['STARTUPS', 'SMES', 'CORPORATES', 'HEALTHCARE'],
  },
  {
    categories: ['ALL SERVICES', 'TECH & EMERGING'],
    tag: 'PRIVACY · EMERGING TECHNOLOGY',
    icon: '🤖',
    title: 'AI & Emerging Technology Privacy',
    desc: 'Artificial intelligence, biometrics, and connected devices introduce privacy and governance risks that traditional frameworks were not designed to address. We help technology companies and AI deployers build responsible, regulation-ready practices before regulators arrive.',
    features: [
      'EU AI Act readiness assessment',
      'Biometric & facial recognition governance',
      'Algorithmic transparency frameworks',
      'IoT & connected device compliance',
      'Automated decision-making compliance',
      'AI system DPIA & impact review',
      'Generative AI usage & data policies',
      'AI ethics & privacy by design integration',
    ],
    industryTags: ['TECH STARTUPS', 'HEALTHCARE', 'FINTECH', 'CORPORATES'],
  },
  {
    categories: ['ALL SERVICES', 'LEGAL & REGULATORY'],
    tag: 'LEGAL · CYBER',
    icon: '🚨',
    title: 'Cyber Law & Breach Response',
    desc: 'When a data breach occurs, every decision in the first 72 hours carries legal consequence. Our cyber law advisory service ensures you respond correctly, notify appropriately, and minimise legal exposure — with a team that has done it before.',
    features: [
      'Cyber law compliance advisory (IT Act, CERT)',
      '72-hour notification obligation management',
      'Post-breach legal remediation guidance',
      'Evidence preservation & legal hold',
      'Breach response planning & simulation',
      'Regulatory authority communication drafting',
      'Cyber insurance readiness review',
      'Ongoing threat & legal landscape monitoring',
    ],
    industryTags: ['ALL INDUSTRIES', 'FINTECH', 'HEALTHCARE', 'E-COMMERCE'],
  },
];

function ServiceCard({ service }) {
  const half = Math.ceil(service.features.length / 2);
  const col1 = service.features.slice(0, half);
  const col2 = service.features.slice(half);

  return (
    <div className="flex flex-col gap-5 p-7 border border-slate-200 bg-white rounded-sm hover:bg-blue-50" 
    >

      {/* Tag + icon row */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xl flex-shrink-0">
          {service.icon}
        </div>
        <p className="text-xs font-semibold tracking-widest uppercase text-sky-500">
          {service.tag}
        </p>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-slate-900 leading-snug">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-500 leading-relaxed">
        {service.desc}
      </p>

      {/* Features — two columns */}
      <div className="flex flex-col sm:flex-row gap-x-8 gap-y-2">
        <ul className="flex flex-col gap-2 flex-1">
          {col1.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
              <svg className="w-3.5 h-3.5 text-sky-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 flex-1">
          {col2.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
              <svg className="w-3.5 h-3.5 text-sky-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom row — industry tags + enquire */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
        <div className="flex flex-wrap gap-2">
          {service.industryTags.map((t) => (
            <span key={t} className="text-xs font-semibold tracking-wider px-2.5 py-1 bg-slate-100 text-slate-500 border border-slate-200 rounded">
              {t}
            </span>
          ))}
        </div>
        <button onClick={()=>setIsModalOpen(true)} className="text-xs font-semibold tracking-widest uppercase text-sky-500 hover:text-sky-700 transition duration-150 cursor-pointer flex-shrink-0">
          ENQUIRE →
        </button>
      </div>

    </div>
  );
}

export default function Portfolio() {
  const [isModalOpen,setIsModalOpen]=useState(false);
  const [activeTab, setActiveTab] = useState('ALL SERVICES');

  const filtered = SERVICES.filter((s) => s.categories.includes(activeTab));

  return (
    <>
     <Modal isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)} title="Discuss our Services with Us"></Modal>
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 scroll-mt-[30px]" id="service-depth">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-sky-500 shrink-0" />
            <span className="text-xs font-semibold tracking-widest uppercase text-sky-500">
              In Depth
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-3">
            What Each Service{' '}
            <span className="text-sky-500">Delivers</span>
          </h2>
          <p className="text-base text-slate-500 max-w-md leading-relaxed">
            Click a category to filter. Every service includes a defined scope, qualified
            practitioners, and measurable outputs.
          </p>
        </div>

        {/* ── Tabs ── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-4 py-2 text-xs font-bold tracking-widest uppercase border transition duration-150 cursor-pointer rounded-sm
                ${activeTab === tab
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-600 border-slate-300 hover:border-slate-500 hover:text-slate-900'}
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Service cards grid ── */}
        <div className="flex flex-col lg:flex-row flex-wrap gap-0">
          {filtered.map((service) => (
            <div
              key={service.title}
              className={`
                w-full border-b border-slate-200
                ${filtered.length === 1 ? 'lg:w-full' : 'lg:w-1/2'}
                ${filtered.length === 1 ? '' : 'lg:odd:border-r lg:border-r-slate-200'}
              `}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
}