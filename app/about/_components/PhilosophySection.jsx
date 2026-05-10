import React from 'react';

const PhilosophySection = () => {
  const pillars = [
    {
      num: "I",
      title: "Truth Requires Depth",
      subtitle: "Plato's Allegory of the Cave, 380 BC",
      desc: "Plato's prisoners saw only shadows on a cave wall and mistook them for reality. Most compliance programmes mistake documentation for genuine compliance. We are committed to seeing beyond the shadow — to the operational reality of how personal data actually flows, is processed, and is protected within your organisation."
    },
    {
      num: "II",
      title: "Integrity Is Built Daily",
      subtitle: "Stoic Ethics — Marcus Aurelius, Epictetus",
      desc: "The Stoics taught that virtue is not declared but demonstrated — through consistent action, honest counsel, and the discipline to do the right thing even when it is difficult. Our advisory relationships are built on this principle: we are honest even when our clients would prefer a more comfortable answer."
    },
    {
      num: "III",
      title: "Design from First Principles",
      subtitle: "Aristotelian Method — First Causes & Essentials",
      desc: "Aristotle distinguished between knowledge of facts and knowledge of causes. We apply this distinction to every engagement: we do not ask what other organisations do, we ask what the law requires, what the risk demands, and what your specific circumstances necessitate — then build from there."
    }
  ];

  return (
    <section className="bg-navy py-20 px-6 md:px-12 lg:px-24 font-sans text-white mons-font">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Heading and Plato Quote */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-bright"></span>
              <p className="text-bright font-bold tracking-[0.2em] text-[10px] uppercase">
                Guiding Philosophy
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Three Pillars of <span className="text-bright">Principled Practice</span>
            </h2>
            <p className="text-white/80 text-sm leading-relaxed max-w-lg">
              Our approach is informed by philosophical traditions that pre-date data protection law — because the questions privacy raises about truth, dignity, and governance are ancient ones.
            </p>
          </div>

          <div className="lg:w-1/2 border-l-3 border-bright/30 pl-8 py-4">
            <p className="italic text-bright text-lg mb-6 leading-relaxed">
              "The unexamined life is not worth living." — Plato
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              We apply the same rigour to organisational data practice that Socrates applied to every assumption: question it, test it, and be honest about what survives scrutiny.
            </p>
          </div>
        </div>

        {/* Pillars Section */}
        <div className="border-t-3 border-white/20 pt-5 flex flex-col lg:flex-row gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex-1 flex flex-col gap-5">
              {/* Roman Numeral Header */}
              <span className="text-5xl font-serif font-light text-slate-500 select-none">
                {pillar.num}
              </span>
              
              <div className="flex flex-col gap-3">
                <h4 className="text-xl font-bold text-white">{pillar.title}</h4>
                <p className="italic text-bright text-[11px] tracking-wide uppercase">
                  {pillar.subtitle}
                </p>
              </div>

              <p className="text-white/60 text-sm leading-relaxed text-justify">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PhilosophySection;