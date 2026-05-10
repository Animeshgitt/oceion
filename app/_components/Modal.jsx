// components/ui/Modal.jsx
'use client'
import React from "react";
import FormSection from "./FormSection";

const Modal = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    // Backdrop
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Card */}
      <div
        className="bg-white rounded-lg shadow-xl w-full md:w-[80%] max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header — fixed, never scrolls */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 shrink-0">
          <h2 className="text-lg font-bold text-slate-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-slate-700 hover:text-slate-600 text-xl transition cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body — this part scrolls */}
        <div className="px-6 py-5 overflow-y-auto flex-1">
          <FormSection />
        </div>

        {/* Footer — fixed, never scrolls */}
        <div className="flex justify-end px-6 py-4 border-t border-slate-200 shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded transition cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default Modal;