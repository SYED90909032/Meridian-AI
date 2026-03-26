/**
 * Meridian AI — Proprietary Source Code
 * © 2026 Meridian AI Systems. All rights reserved.
 * Unauthorized copying, reproduction, distribution, or reuse of this
 * codebase or any connected services is strictly prohibited.
 * Internal systems, workflows, and implementation details are private.
 */

import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { cn } from '../lib/utils';

export default function Forms() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', 'eff427e3-c4b0-4655-ae19-57f22893c843');
    formData.append('subject', 'New Project Submission — Meridian AI');
    formData.append('from_name', 'Meridian AI Website');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData
      });
      
      const result = await response.json();
      if (result.success) {
        window.location.hash = '#thank-you';
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch(err) {
       alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full bg-[#F9F7F7]/50 border border-[#112D4E]/10 rounded-sm px-5 py-4 focus:outline-none focus:border-[#3F72AF] transition-colors placeholder:text-[#112D4E]/40 text-[#112D4E] text-sm";
  const labelClass = "block text-xs font-mono tracking-widest uppercase text-[#112D4E]/60 mb-2 font-bold";

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
      {/* REQUIRED INFO */}
      <div className="space-y-6">
        <h3 className="font-serif text-2xl text-[#112D4E] mb-6 pb-2 border-b border-[#112D4E]/10">Primary Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className={labelClass}>Full Name *</label>
            <input type="text" name="name" id="name" required className={inputClass} placeholder="Jane Doe" />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>Work Email *</label>
            <input type="email" name="email" id="email" required className={inputClass} placeholder="jane@company.com" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className={labelClass}>Company or Organization *</label>
            <input type="text" name="company" id="company" required className={inputClass} placeholder="Acme Corp" />
          </div>
          <div>
            <label htmlFor="country" className={labelClass}>Country *</label>
            <input type="text" name="country" id="country" required className={inputClass} placeholder="United States" />
          </div>
        </div>
      </div>

      {/* PROJECT SCOPE */}
      <div className="space-y-6 pt-6">
        <h3 className="font-serif text-2xl text-[#112D4E] mb-6 pb-2 border-b border-[#112D4E]/10">Project Scope</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="service" className={labelClass}>Service Needed *</label>
            <select name="service" id="service" required defaultValue="" className={cn(inputClass, "appearance-none cursor-pointer")}>
                <option value="" disabled>Select a Service</option>
                <option value="Voice & Speech Data">Voice & Speech Data Collection</option>
                <option value="Transcription">Transcription</option>
                <option value="Translation">Translation</option>
                <option value="Data Annotation">Data Annotation & Labeling</option>
                <option value="AI Automation">AI Automation (Agents)</option>
                <option value="Other">Other / Custom Request</option>
            </select>
          </div>
          <div>
            <label htmlFor="languages" className={labelClass}>Languages Involved *</label>
            <input type="text" name="languages" id="languages" required className={inputClass} placeholder="e.g., Hindi, English, Mandarin" />
          </div>
        </div>

        <div>
            <label htmlFor="description" className={labelClass}>Brief Project Description *</label>
            <textarea name="description" id="description" required rows={5} className={cn(inputClass, "resize-vertical")} placeholder="Please describe exactly what you need built, annotated, translated, or captured..."></textarea>
        </div>
      </div>

      {/* LOGISTICS & TIMELINE */}
      <div className="space-y-6 pt-6">
        <h3 className="font-serif text-2xl text-[#112D4E] mb-6 pb-2 border-b border-[#112D4E]/10">Logistics & Timeline</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="volume" className={labelClass}>Estimated Volume <span className="opacity-50 lowercase font-sans text-[10px] tracking-normal">(Optional)</span></label>
            <input type="text" name="volume" id="volume" className={inputClass} placeholder="e.g., 500 hours, 10k entities" />
          </div>
          <div>
            <label htmlFor="deadline" className={labelClass}>Deadline or Timeline <span className="opacity-50 lowercase font-sans text-[10px] tracking-normal">(Optional)</span></label>
            <input type="text" name="deadline" id="deadline" className={inputClass} placeholder="e.g., Within 30 days" />
          </div>
        </div>
        
        <div>
            <label htmlFor="source" className={labelClass}>How Did You Find Us? <span className="opacity-50 lowercase font-sans text-[10px] tracking-normal">(Optional)</span></label>
            <select name="source" id="source" defaultValue="" className={cn(inputClass, "appearance-none cursor-pointer")}>
                <option value="" disabled>Select an option</option>
                <option value="Search Engine">Search Engine (Google)</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Referral">Referral / Word of Mouth</option>
                <option value="Social Media">Social Media</option>
                <option value="Other">Other</option>
            </select>
        </div>
      </div>

      {/* SUBMIT */}
      <div className="pt-10 flex flex-col items-center">
        <button 
            type="submit" 
            disabled={isSubmitting}
            className="group relative px-12 py-5 bg-[#112D4E] text-[#F9F7F7] uppercase font-mono tracking-widest text-xs font-bold overflow-hidden rounded-sm transition-all hover:bg-[#3F72AF] disabled:opacity-70 flex items-center gap-4"
        >
            {isSubmitting ? (
              <>
                 <Icons.Loader2 className="animate-spin" size={16} />
                 Transmitting...
              </>
            ) : (
              <>
                 Submit Project
                 <Icons.ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
              </>
            )}
        </button>
        <p className="text-[11px] text-[#112D4E]/40 mt-6 max-w-sm text-center tracking-wide leading-relaxed">
            By submitting, you agree to our strict data privacy policies. We do not share your details with third parties.
        </p>
      </div>
    </form>
  );
}