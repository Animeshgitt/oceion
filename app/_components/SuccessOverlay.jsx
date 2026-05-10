import { FaCheckCircle } from 'react-icons/fa';

const SuccessOverlay = ({ visible }) => {
  if (!visible) return null;

  return (
    // Overlay — covers the parent div which must be position:relative
    // bg-white/95 gives a near-opaque white layer over the form
    // backdrop-blur-sm adds a subtle blur effect on the form behind it
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center
      bg-white/95 backdrop-blur-sm rounded-lg px-8 text-center
      animate-in fade-in duration-300">

      {/* Animated check icon */}
      <div className="flex items-center justify-center w-20 h-20 rounded-full
        bg-green-50 border-2 border-green-400 mb-6">
        <FaCheckCircle className="text-green-500 text-4xl" />
      </div>

      {/* Heading */}
      <h3 className="text-xl font-bold text-slate-800 mb-2">
        Consultation Request Received!
      </h3>

      {/* Subtext */}
      <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
        Thank you for reaching out. Our consultant will contact you shortly.
        We typically respond within one business day.
      </p>

      {/* Progress bar — visually shows the 5 second countdown */}
      <div className="w-full max-w-xs mt-8 bg-slate-100 rounded-full h-1 overflow-hidden">
        <div
          className="h-full bg-green-400 rounded-full"
          // Animates from 100% → 0% over exactly 5 seconds
          // matches the setTimeout(5000) below
          style={{
            width: '100%',
            animation: 'shrink 5s linear forwards',
          }}
        />
      </div>
      <p className="text-xs text-slate-400 mt-2">Closing in 5 seconds…</p>

      {/* CSS keyframe for the progress bar shrink animation */}
      <style>{`
        @keyframes shrink {
          from { width: 100%; }
          to   { width: 0%;   }
        }
      `}</style>
    </div>
  );
};
export default SuccessOverlay;