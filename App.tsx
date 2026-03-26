/**
 * Meridian AI — Proprietary Source Code
 * © 2026 Meridian AI Systems. All rights reserved.
 * Unauthorized copying, reproduction, distribution, or reuse of this
 * codebase or any connected services is strictly prohibited.
 * Internal systems, workflows, and implementation details are private.
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import JudgesMode from './components/JudgesMode';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import About from './pages/About';
import Careers from './pages/Careers';

export default function App() {
  const [hash, setHash] = useState(() => 
    typeof window !== 'undefined' ? window.location.hash : ''
  );

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
      
      // Allow React a tick to mount page, then scroll
      if (['#contact', '#thank-you', '#about', '#careers'].includes(window.location.hash) || window.location.hash.startsWith('#about-')) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isContactPage = hash === '#contact';
  const isThankYouPage = hash === '#thank-you';
  const isAboutPage = hash.startsWith('#about');
  const isCareersPage = hash === '#careers';

  return (
    <div className="relative w-full overflow-x-clip bg-[#F9F7F7] selection:bg-[#3F72AF] selection:text-[#F9F7F7]">
      <JudgesMode />
      <Navbar />
      {isThankYouPage ? <ThankYou /> : isCareersPage ? <Careers /> : isAboutPage ? <About /> : isContactPage ? <Contact /> : <Home />}
    </div>
  );
}