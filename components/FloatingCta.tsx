import React from 'react';
import { motion } from 'framer-motion';
import { SPRING_PRESETS } from '../constants';
import * as Icons from 'lucide-react';

const FloatingCta = () => {
  const scrollToContact = () => {
      document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
          <motion.button
            key="orb"
            className="w-20 h-20 rounded-full flex items-center justify-center cursor-pointer shadow-2xl relative"
            style={{
              background: 'conic-gradient(from 180deg, #1C4D8D, #0F2854, #1C4D8D)',
            }}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToContact}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={SPRING_PRESETS.BOUNCY}
          >
            <div className="absolute inset-1 rounded-full bg-white/10 backdrop-blur-md" />
            <Icons.Sparkles className="text-white relative z-10" size={32} />
          </motion.button>
    </div>
  );
};

export default FloatingCta;