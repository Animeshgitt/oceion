

'use client';

import React, { useState ,useEffect } from 'react';
import ErrorMsg from './ErrorMsg';
import SuccessOverlay from './SuccessOverlay';
import { FaLongArrowAltRight, FaLock } from "react-icons/fa";
import { supabase } from '../utils/supabase/client'
const EMPTY_FORM = {
  firstName:    '',
  lastName:     '',
  userEmail:    '',
  organisation: '',
  orgSize:      '',
  service:      '',
  message:      '',
};
const FormSection = () => {
  // 1. State for form values
//   
 // Form field values — mirrors your original state shape
  const [formData, setFormData] = useState(EMPTY_FORM);

  // Validation error messages — one key per field
  const [errors, setErrors] = useState({});

  // Controls whether the success overlay is visible
  const [showSuccess, setShowSuccess] = useState(false);

  // Loading state — disables the button while Supabase insert is in-flight
  const [loading, setLoading] = useState(false);

  // API-level error (e.g. Supabase network failure) — shown below the button
  const [apiError, setApiError] = useState('');

  // ── Auto-hide overlay after 5 seconds ──────────────────────
  // When showSuccess flips to true, start a 5 second timer.
  // After 5s: hide overlay + reset the form so user can submit again.
  useEffect(() => {
    if (!showSuccess) return;
    const timer = setTimeout(() => {
      setShowSuccess(false);
      setFormData(EMPTY_FORM); // reset all fields after overlay closes
    }, 5000);
    return () => clearTimeout(timer); // cleanup if component unmounts early
  }, [showSuccess]);

  // ── handleChange ─────────────────────────────────────────────
  // Updates the matching key in formData and clears its error immediately
  // so user gets positive feedback as soon as they start fixing a field.
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: null }));
    }
  };

  // ── validateForm ──────────────────────────────────────────────
  // Runs all validation rules, populates errors state,
  // returns true if form is clean, false if any errors exist.
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName)    newErrors.firstName    = 'First name is required';
    if (!formData.lastName)     newErrors.lastName     = 'Last name is required';
    if (!formData.userEmail) {
      newErrors.userEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.userEmail)) {
      newErrors.userEmail = 'Email is invalid';
    }
    if (!formData.organisation) newErrors.organisation = 'Organisation name is required';
    if (!formData.orgSize)      newErrors.orgSize      = 'Please select an organisation size';
    if (!formData.service)      newErrors.service      = 'Please select a service';
    if (!formData.message)      newErrors.message      = 'Please enter a message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // true = no errors
  };

  // ── handleSubmit ──────────────────────────────────────────────
  // 1. Prevents default form submission (no page reload)
  // 2. Runs client-side validation
  // 3. If valid → inserts a row into Supabase `consultations` table
  // 4. On success → shows the overlay modal for 5 seconds
  // 5. On failure → shows a red error message below the button
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError(''); // clear any previous API error

    // Stop here if validation fails — errors state already updated
    if (!validateForm()) return;

    setLoading(true); // disable button, show spinner

    // ── Supabase insert ────────────────────────────────────────
    // Column names here must exactly match what you created in Supabase.
    // We map camelCase formData keys → snake_case column names.
    const { error } = await supabase
      .from('oceion')       // ← your table name in Supabase
      .insert([{
        first_name:   formData.firstName,
        last_name:    formData.lastName,
        email:        formData.userEmail,
        organisation: formData.organisation,
        org_size:     formData.orgSize,
        service:      formData.service,
        message:      formData.message,
      }]);

    setLoading(false);

    if (error) {
      // Supabase returned an error — show it below the button
      // Common causes: RLS policy not set, wrong column names, network issue
      console.error('Supabase insert error:', error);
      setApiError('Something went wrong. Please try again or email us directly.');
      return;
    }

    // Success — trigger the overlay modal
    setShowSuccess(true);
  };

  // ── Render ────────────────────────────────────────────────────
  return (
    // position:relative is REQUIRED here so the absolute overlay
    // positions itself relative to this card and not the whole page.
    <div
      className="relative lg:w-[45%] mons-font mx-auto rounded-lg shadow-base-300/20
        shadow-sm border bg-[#F4F8FE] border-blue-300 scroll-mt-[30px]
        md:scroll-mt-[70px] lg:scroll-mt-[90px]"
      id="form-fill"
    >
      {/* ── Success overlay sits on top of everything in this div ── */}
      <SuccessOverlay visible={showSuccess} />

      <div className="w-full py-8 px-5 text-black">
        <form className="grid gap-y-4" noValidate onSubmit={handleSubmit}>

          {/* Form heading */}
          <div className="w-full flex flex-col gap-y-2">
            <h6 className="text-lg font-bold text-slate-800">
              Book a Free Consultation
            </h6>
            <p className="text-sm text-slate-500">
              Complete this form and we will respond within one business day.
            </p>
          </div>

          {/* First + Last name */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="label-text text-xs font-bold less-spacing text-slate-500 uppercase" htmlFor="firstName">
                First Name
              </label>
              <br />
              <input
                id="firstName" type="text" placeholder="First Name"
                value={formData.firstName} onChange={handleChange}
                className={`input border ${errors.firstName ? 'border-red-500' : 'border-slate-400'} bg-white focus:border-2 focus:border-blue-300`}
              />
              <ErrorMsg msg={errors.firstName} />
            </div>
            <div>
              <label className="label-text text-xs font-bold less-spacing text-slate-500 uppercase" htmlFor="lastName">
                Last Name
              </label>
              <br />
              <input
                id="lastName" type="text" placeholder="Last Name"
                value={formData.lastName} onChange={handleChange}
                className={`input border ${errors.lastName ? 'border-red-500' : 'border-slate-400'} bg-white focus:border-2 focus:border-blue-300`}
              />
              <ErrorMsg msg={errors.lastName} />
            </div>
          </div>

          {/* Email */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="label-text text-xs font-bold less-spacing text-slate-500 uppercase" htmlFor="userEmail">
                Email
              </label>
              <br />
              <input
                id="userEmail" type="email" placeholder="@Work or Personal Email"
                value={formData.userEmail} onChange={handleChange}
                className={`input border ${errors.userEmail ? 'border-red-500' : 'border-slate-400'} bg-white focus:border-2 focus:border-blue-300`}
              />
              <ErrorMsg msg={errors.userEmail} />
            </div>
          </div>

          {/* Organisation + size */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="label-text text-xs font-bold less-spacing text-slate-500 uppercase" htmlFor="organisation">
                Organisation
              </label>
              <br />
              <input
                id="organisation" type="text" placeholder="Company Name"
                value={formData.organisation} onChange={handleChange}
                className={`input border ${errors.organisation ? 'border-red-500' : 'border-slate-400'} bg-white focus:border-2 focus:border-blue-300`}
              />
              <ErrorMsg msg={errors.organisation} />
            </div>
            <div>
              <label className="label-text text-xs font-bold less-spacing text-slate-500 uppercase" htmlFor="orgSize">
                Organisation Size
              </label>
              <br />
              <select
                id="orgSize" value={formData.orgSize} onChange={handleChange}
                className={`select border ${errors.orgSize ? 'border-red-500' : 'border-slate-400'} bg-white focus:border-2 focus:border-blue-300`}
              >
                <option value="">Select Organisation size..</option>
                <option value="1-10">1–10 employees</option>
                <option value="11-50">11–50 employees</option>
                <option value="51-250">51–250 employees</option>
                <option value="250-500">250–500 employees</option>
                <option value="500+">500+ employees</option>
              </select>
              <ErrorMsg msg={errors.orgSize} />
            </div>
          </div>

          {/* Service of interest */}
          <div className="w-full">
            <label className="label-text text-xs font-bold less-spacing text-slate-500 uppercase block" htmlFor="service">
              Service of Interest
            </label>
            <select
              id="service" value={formData.service} onChange={handleChange}
              className={`select border w-full ${errors.service ? 'border-red-500' : 'border-slate-400'} bg-white focus:border-2 focus:border-blue-300`}
            >
              <option value="">Select a service…</option>
              <option value="Data Privacy and Protection Compliance">Data Privacy &amp; Protection Compliance</option>
              <option value="Information Security and Governance">Information Security &amp; Governance</option>
              <option value="Regulatory and Corporate Compliance">Regulatory &amp; Corporate Compliance</option>
              <option value="Risk Assessment and DPIA">Risk Assessment &amp; DPIA</option>
              <option value="Policy Drafting and Documentation">Policy Drafting &amp; Documentation</option>
              <option value="DPO-as-a-Service / Advisory">DPO-as-a-Service / Advisory</option>
              <option value="AI and Emerging Tech Privacy">AI &amp; Emerging Tech Privacy</option>
              <option value="Cyber Law and Breach Response">Cyber Law &amp; Breach Response</option>
              <option value="not-sure">Not sure — need a general assessment</option>
            </select>
            <ErrorMsg msg={errors.service} />
          </div>

          {/* Message */}
          <div className="w-full">
            <label className="label-text text-xs font-bold less-spacing text-slate-500 uppercase block" htmlFor="message">
              Message
            </label>
            <textarea
              id="message" value={formData.message} onChange={handleChange}
              className={`textarea block min-h-25 w-full resize-none border ${errors.message ? 'border-red-500' : 'border-slate-400'} bg-white focus:border-2 focus:border-blue-300`}
              placeholder="Briefly describe your compliance needs or current challenge"
            />
            <ErrorMsg msg={errors.message} />
          </div>

          {/* Submit button + trust note */}
          <div className="mt-4 flex flex-col justify-center items-center gap-2 p-2">

            {/* Supabase/network error — only shows if insert fails */}
            {apiError && (
              <p className="text-red-500 text-xs font-semibold text-center w-full">
                ⚠ {apiError}
              </p>
            )}

            <button
              type="submit"
              disabled={loading} // prevents double-submit while request is in-flight
              className="rounded-md text-white font-bold w-full less-spacing bg-navy border-none p-2
                hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed
                flex items-center justify-center gap-2 transition duration-150"
            >
              {loading ? (
                // Simple spinner shown while Supabase request is pending
                <>
                  <svg className="w-4 h-4 animate-spin flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                    <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Submitting…
                </>
              ) : (
                <>
                  Submit - Book Consultation
                  <FaLongArrowAltRight className="inline" />
                </>
              )}
            </button>

            <p className="text-sm text-slate-400 p-1 text-center">
              <FaLock className="inline text-orange-400" />{' '}
              Your information is handled in strict confidence in accordance with our Privacy Policy.
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default FormSection;