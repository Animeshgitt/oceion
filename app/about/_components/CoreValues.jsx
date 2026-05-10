import React from 'react';

const CoreValues = () => {
  const values = [
    {
      title: "Depth Over Surface",
      desc: "We never accept a surface-level answer. Every engagement goes as deep as the problem requires — regardless of how long that takes or how uncomfortable the findings are.",
      icon: "🔍"
    },
    {
      title: "Integrity Without Exception",
      desc: "We give the same advice privately that we give publicly. We tell clients what they need to hear, not what they want to hear. Integrity is not negotiable.",
      icon: "🤝"
    },
    {
      title: "Legal Rigour",
      desc: "Every recommendation we make is grounded in law, not convention. We cite our sources, acknowledge uncertainty, and never overstate our certainty on legal matters.",
      icon: "⚖️"
    },
    {
      title: "Practical by Design",
      desc: "Advice that cannot be implemented is not advice — it is an expensive document. Everything we produce is designed to work in the real operational context of your organisation.",
      icon: "🛠️"
    },
    {
      title: "Long-Term Thinking",
      desc: "We design for sustainability, not for the next audit. Our programmes are built to evolve with your organisation and with the regulatory landscape — not to become outdated six months after delivery.",
      icon: "🌱"
    },
    {
      title: "Global Perspective, Local Knowledge",
      desc: "We understand that privacy obligations are shaped by local culture, regulatory history, and enforcement practice — not just the text of the law. We bring both.",
      icon: "🌐"
    },
    {
      title: "Knowledge Sharing",
      desc: "We believe privacy literacy is a public good. We educate, publish, and train because organisations that understand privacy make better decisions — with or without our continued involvement.",
      icon: "🎓"
    },
    {
      title: "Individual Rights First",
      desc: "Behind every data protection obligation is a human being whose information deserves respect. When in doubt, we err on the side of the individual — because that is what the law was designed to do.",
      icon: "🛡️"
    }
  ];

  return (
    <section className="bg-slate-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-6 bg-blue-600"></span>
            <p className="text-blue-600 font-bold tracking-widest text-[10px] uppercase">
              What We Stand For
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Our <span className="text-blue-600">Core Values</span>
          </h2>
          <p className="text-slate-500 max-w-2xl leading-relaxed font-medium">
            Eight principles that govern every engagement, every recommendation, and every relationship we build.
          </p>
        </div>

        {/* Values Flex Grid */}
        <div className="flex flex-wrap border-t border-slate-200 ">
          {values.map((item, idx) => (
            <div 
              key={idx} 
              className={`w-full sm:w-1/2 lg:w-1/4 p-8 border-b border-slate-200 flex flex-col gap-4 hover:bg-blue-50
                hover:border-blue-400
                /* Logic for vertical dividers */
                ${(idx + 1) % 4 !== 0 ? 'lg:border-r' : ''} 
                ${(idx + 1) % 2 !== 0 ? 'sm:border-r lg:sm:border-r-0' : ''}
                ${(idx + 1) % 4 === 2 || (idx + 1) % 4 === 3 ? 'lg:border-r' : ''}
              `}
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-slate-900 text-lg leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs leading-relaxed text-slate-500 font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;