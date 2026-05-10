export default function VisionMission() {
  return (
    <section className="bg-navy py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-sky-400 shrink-0" />
            <span className="font-display text-xs font-semibold tracking-widest uppercase text-sky-400">
              Our Purpose
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
            Vision &amp;{' '}
            <span className="text-sky-400">Mission</span>
          </h2>
        </div>

        {/* ── Two columns ── */}
        <div className="flex flex-col lg:flex-row gap-1 items-stretch">

          {/* ── Vision ── */}
          <div className="flex-1 flex flex-col gap-6 px-8 py-10 bg-deep rounded-lg hover:bg-navy">

            {/* Icon */}
            <div className="text-4xl">🔭</div>

            {/* Label */}
            <p className="font-display text-xs font-semibold tracking-widest uppercase text-sky-400">
              Our Vision
            </p>

            {/* Quote */}
            <blockquote className="font-serif text-xl sm:text-2xl italic text-white leading-snug">
              "A world where every organisation treats personal data with the
              care and respect it deserves — not because regulators demand it,
              but because they understand what trust truly means."
            </blockquote>

            {/* Body */}
            <p className="font-display text-sm text-blue-300 leading-relaxed">
              We envision a future where privacy is not a compliance burden but a competitive
              advantage — where organisations that respect individual rights build stronger
              products, deeper customer relationships, and more resilient businesses as a result.
            </p>

          </div>

          {/* ── Mission ── */}
          <div className="flex-1 flex flex-col gap-6 px-8 py-10 bg-deep rounded-lg hover:bg-navy">

            {/* Icon */}
            <div className="text-4xl">🎯</div>

            {/* Label */}
            <p className="font-display text-xs font-semibold tracking-widest uppercase text-sky-400">
              Our Mission
            </p>

            {/* Quote */}
            <blockquote className="font-serif text-xl sm:text-2xl italic text-white leading-snug">
              "To deliver compliance solutions that are legally rigorous,
              operationally practical, and culturally embedded — tailored to
              each organisation, designed to last."
            </blockquote>

            {/* Body */}
            <p className="font-display text-sm text-blue-300 leading-relaxed">
              We exist to close the gap between regulatory obligation and genuine organisational
              practice — translating complexity into clarity, and legal requirements into
              operational realities that actually protect individuals and organisations alike.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}