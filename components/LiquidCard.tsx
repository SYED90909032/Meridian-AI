import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SPRING_PRESETS } from '../constants';
import * as Icons from 'lucide-react';

interface LiquidCardProps {
  title: string;
  subtitle: string;
  question: string;
  description: string;
  iconName: string;
  index: number;
}

const LiquidCard: React.FC<LiquidCardProps> = ({ title, subtitle, question, description, iconName, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[iconName] || Icons.Box;

  return (
    <motion.div
      className="relative w-full overflow-visible"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ ...SPRING_PRESETS.SMOOTH, delay: index * 0.1 }}
      onTap={() => setIsOpen(!isOpen)}
    >
      <motion.div
        className="relative z-10 p-8 rounded-xl cursor-pointer group bg-[#F9F7F7]"
        style={{
          border: '1px solid rgba(73, 136, 196, 0.2)',
          boxShadow: '0 4px 20px rgba(15, 40, 84, 0.05)',
        }}
        whileHover={{
          y: -4,
          borderColor: '#3F72AF',
          boxShadow: '0 12px 40px rgba(28, 77, 141, 0.15)',
        }}
        animate={{
          scale: isOpen ? 1.02 : 1,
        }}
        transition={SPRING_PRESETS.BOUNCY}
      >
        <div className="flex items-start justify-between mb-6">
          <div className="p-4 rounded-lg bg-[#DBE2EF]/20 border border-[#3F72AF]/20 text-[#3F72AF]">
            <IconComponent size={28} strokeWidth={1.5} />
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <Icons.Plus size={24} className="text-[#3F72AF]" />
          </div>
        </div>

        <h3 className="text-2xl font-serif font-bold mb-1 text-[#112D4E]">
          {title}
        </h3>
        <p className="text-xs font-mono uppercase tracking-widest text-[#3F72AF] mb-4">{subtitle}</p>
        
        <p className="text-lg font-medium text-[#3F72AF] mb-4">
          {question}
        </p>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={SPRING_PRESETS.SMOOTH}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-black/5">
                <p className="text-base text-[#112D4E] leading-relaxed mb-4">
                  {description}
                </p>
                <div className="flex items-center gap-2 text-[#3F72AF] font-bold text-sm uppercase tracking-wider">
                  <span>Explore Architecture</span>
                  <Icons.ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default LiquidCard;