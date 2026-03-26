/**
 * Meridian AI — Proprietary Source Code
 * © 2026 Meridian AI Systems. All rights reserved.
 * Unauthorized copying, reproduction, distribution, or reuse of this
 * codebase or any connected services is strictly prohibited.
 * Internal systems, workflows, and implementation details are private.
 */

import React, { useEffect } from 'react';
import * as Icons from 'lucide-react';
import { MagicText } from '../components/ui/magic-text';

export default function ThankYou() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F7F7] flex flex-col items-center justify-center py-32 px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="w-20 h-20 bg-[#f4f7f9] rounded-full flex items-center justify-center mx-auto mb-8">
          <Icons.Check className="text-[#3F72AF] w-10 h-10" />
        </div>
        
        <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-[#3F72AF]">08 / Submission Received</span>
        
        <MagicText 
            text="Thank You."
            className="mt-6 mb-8 text-5xl md:text-7xl font-serif text-[#112D4E]"
        />

        <p className="text-xl text-[#112D4E] font-light leading-relaxed mb-12 max-w-xl mx-auto opacity-80">
          Your project details have been securely transmitted to our team. We are reviewing your requirements and will return a detailed proposal within 24 hours.
        </p>

        <div className="bg-[#112D4E] p-8 md:p-12 rounded-sm text-left max-w-lg mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#3F72AF]" />
          <h3 className="text-[#F9F7F7] font-serif tracking-wide text-2xl mb-4">Urgent Inquiries</h3>
          <p className="text-[#DBE2EF]/80 font-light text-sm mb-8 leading-relaxed">
            If your project is highly time-sensitive or you require an immediate response, please connect with us directly via WhatsApp for expedited support.
          </p>
          <a 
            href="https://wa.me/917816078991" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-[#F9F7F7] px-6 py-4 rounded-md hover:bg-[#128C7E] transition-colors font-medium tracking-wide w-full justify-center"
          >
            <Icons.MessageCircle size={20} />
            Message +91 7816078991
          </a>
        </div>

        <button 
          onClick={() => window.location.hash = ''} 
          className="mt-16 text-[#3F72AF] font-mono text-xs uppercase tracking-[0.2em] hover:text-[#112D4E] transition-colors inline-flex items-center gap-2"
        >
          <Icons.ArrowLeft size={14} />
          Return to Homepage
        </button>
      </div>
    </div>
  );
}
