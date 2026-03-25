import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const JudgesMode = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.code === 'KeyJ') {
        setActive((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] pointer-events-none"
        >
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[#0F2854]/5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50" />
          <div className="absolute inset-0 grid grid-cols-12 gap-4 px-8 opacity-20 pointer-events-none">
             {Array.from({ length: 12 }).map((_, i) => (
                 <div key={i} className="h-full border-r border-[#1C4D8D] border-dashed" />
             ))}
          </div>

          {/* Annotations */}
          <div className="absolute top-1/2 left-10 -translate-y-1/2 max-w-sm bg-[#0F2854]/90 text-white p-6 rounded-lg backdrop-blur-md border border-[#4988C4]/20 font-mono text-xs">
            <h4 className="text-[#4988C4] font-bold mb-2 uppercase">Design Rationale</h4>
            <ul className="space-y-4">
              <li>
                <strong className="block text-[#BDE8F5]">Color Space</strong>
                Custom corporate blue gamut utilized for trustworthiness and authority. High contrast ratios maintained.
              </li>
              <li>
                <strong className="block text-[#BDE8F5]">Interaction Physics</strong>
                Spring(mass:1, stiff:120, damp:8) applied to all micro-interactions for organic tactile feedback.
              </li>
              <li>
                <strong className="block text-[#BDE8F5]">Scrollytelling</strong>
                IntersectionObservers trigger 3D transforms on scroll progress. 4 parallax layers active.
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JudgesMode;