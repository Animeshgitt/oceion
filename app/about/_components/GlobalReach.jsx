import React from 'react';

const GlobalReach = () => {
  const jurisdictions = [
    {
      code: "IN",
      name: "India",
      desc: "Headquartered in New Delhi. Lead practice for DPDP Act 2023, IT Act compliance, and RBI data governance requirements.",
      status: "Primary Jurisdiction",
      statusColor: "bg-blue-50 text-blue-600"
    },
    {
      code: "EU",
      name: "European Union",
      desc: "EU GDPR compliance, EDPB guidance implementation, SCCs and adequacy decisions for cross-border transfer management.",
      status: "Active Practice",
      statusColor: "bg-blue-50 text-blue-600"
    },
    {
      code: "GB",
      name: "United Kingdom",
      desc: "UK GDPR and DPA 2018 compliance, ICO engagement, and the evolving UK Data (Use and Access) Bill landscape.",
      status: "Active Practice",
      statusColor: "bg-blue-50 text-blue-600"
    },
    {
      code: "SG",
      name: "Singapore",
      desc: "PDPA 2012 compliance, PDPC advisory engagement, and data protection obligations for businesses in the Singapore market.",
      status: "Advisory Coverage",
      statusColor: "bg-slate-50 text-blue-600"
    },
    {
      code: "US",
      name: "United States",
      desc: "CCPA/CPRA compliance for clients with California operations, HIPAA health data governance, and state privacy law mapping.",
      status: "Advisory Coverage",
      statusColor: "bg-slate-50 text-blue-600"
    },
    {
      isIcon: true,
      name: "12+ Additional Jurisdictions",
      desc: "Thailand PDPA, Brazil LGPD, UAE PDPL, Japan APPI, South Korea PIPA, and additional regional frameworks on request.",
      status: "Multi-Jurisdiction",
      statusColor: "bg-blue-50 text-blue-600"
    }
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-6 bg-blue-600"></span>
            <p className="text-blue-600 font-bold tracking-widest text-[10px] uppercase">
              Global Reach
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Where We <span className="text-blue-600 font-bold">Operate</span>
          </h2>
          <p className="text-slate-500 max-w-3xl leading-relaxed font-medium">
            Headquartered in New Delhi with advisory coverage spanning 15+ regulatory jurisdictions — we bring both global expertise and local regulatory knowledge to every engagement.
          </p>
        </div>

        {/* Grid-like Flex Container */}
        <div className="flex flex-wrap border-t border-slate-100 ">
          {jurisdictions.map((item, idx) => (
            <div 
              key={idx} 
              className="hover:bg-blue-50 w-full md:w-1/2 lg:w-1/3 p-8 border-b border-slate-300 md:border-slate-200 md:border flex flex-col gap-4 "
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10">
                  {item.isIcon ? (
                    <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  ) : (
                    <span className="text-slate-900 font-bold text-xl tracking-tighter">
                      {item.code}
                    </span>
                  )}
                </div>
                
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-slate-900 text-lg">{item.name}</h4>
                  <p className="text-xs leading-relaxed text-slate-500 font-medium">
                    {item.desc}
                  </p>
                  <div className="mt-2">
                    <span className={`inline-block px-3 py-1 rounded-sm text-[9px] font-bold uppercase tracking-widest ${item.statusColor}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;