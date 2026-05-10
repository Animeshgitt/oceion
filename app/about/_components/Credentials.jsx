import React from 'react';

const CredentialsSection = () => {
  const credentials = [
    {
      iconColor: "text-orange-500",
      iconPath: "M12 15l-2 5L9 9l11 4-5 2zm0 0l-5-2L2 9l11 4 2 5z", // Medal shape
      title: "Practitioner-Led, Not Analyst-Led",
      desc: "Every engagement is led by qualified practitioners with verifiable experience in the specific regulatory frameworks being applied — not generalists or junior analysts following a checklist."
    },
    {
      iconColor: "text-orange-300",
      iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", // Document shape
      title: "Legally Grounded Advice",
      desc: "All recommendations are grounded in the current text of applicable law, supplemented by regulatory guidance and enforcement precedent — not convention, assumption, or what competitors are doing."
    },
    {
      iconColor: "text-blue-500",
      iconPath: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", // Sync/Partnership shape
      title: "Ongoing Partnership, Not Transactional",
      desc: "We build long-term relationships with our clients — providing continuous compliance support as regulations evolve, not disappearing after delivering a document."
    },
    {
      iconColor: "text-orange-400",
      iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", // Lock shape
      title: "Absolute Confidentiality",
      desc: "All client engagements are conducted under strict confidentiality. We never reference client engagements without explicit consent and never share client information across matters."
    }
  ];

  return (
    <section className="bg-slate-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[2px] w-8 bg-blue-600"></span>
            <p className="text-blue-600 font-bold tracking-widest text-[10px] uppercase">
              How we work
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Our <span className="text-blue-600 font-bold">Credentials & Approach</span>
          </h2>
          <p className="text-slate-600 max-w-2xl leading-relaxed text-lg">
            What makes OCEION different — in our qualifications, our methodology, and our client relationships.
          </p>
        </div>

        {/* Main Flex Wrapper */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: Credentials Cards */}
          <div className="flex-1 flex flex-col gap-4">
            {credentials.map((item, idx) => (
              <div key={idx} className="hover:bg-blue-50 flex items-start gap-5 p-6 bg-white rounded-lg border border-slate-200 shadow-sm">
                <div className={`mt-1 shrink-0 ${item.iconColor}`}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: The Method (Dark Box) */}
          <div className="flex-1 bg-navy rounded-xl p-8 md:p-10 text-white">
            <p className="text-blue-400 font-bold tracking-[0.2em] text-base less-spacing uppercase mb-10">
              How we engage: The Oceion Method
            </p>
            
            <div className="flex flex-col gap-4">
              {[
                { step: "01", t: "Discovery & Assessment", d: "We begin with a structured discovery — mapping data flows, regulatory obligations, existing controls, and gap exposure across your organisation." },
                { step: "02", t: "Bespoke Programme Design", d: "We design a compliance programme tailored to your specific context — not a modified template, but a purpose-built architecture for your organisation's data reality." },
                { step: "03", t: "Hands-On Implementation", d: "We work alongside your team to implement — drafting documents, designing processes, delivering training, and integrating compliance into your operations." },
                { step: "04", t: "Continuous Compliance", d: "We provide ongoing monitoring, regulatory watch, incident support, and annual programme reviews — keeping your compliance current." },
                { step: "05", t: "Knowledge Transfer", d: "We build your team's internal capability throughout the engagement — so you are less dependent on external advisors over time, not more." }
              ].map((m, i) => (
                <div key={i} className="flex gap-3 border border-slate-700 p-4 rounded-md hover:bg-deep">
                  <span className="text-blue-600 font-bold text-xl leading-none">{m.step}</span>
                  <div className="pl-6">
                    <h4 className="font-bold text-lg mb-2 text-slate-100">{m.t}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">{m.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;