import React from 'react';
import { motion } from 'framer-motion';
import { SPRING_PRESETS } from '../constants';

interface KineticTextProps {
  text: string;
  className?: string;
  staggerDelay?: number;
}

const KineticText: React.FC<KineticTextProps> = ({ text, className = "", staggerDelay = 0.03 }) => {
  const characters = text.split("");

  return (
    <span className={`inline-block whitespace-nowrap ${className}`} style={{ fontVariationSettings: '"wdth" 100' }}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          style={{ display: "inline-block" }}
          whileHover={{
            y: -5,
            rotateZ: Math.random() * 6 - 3, // Random between -3 and 3
            scale: 1.1,
            color: "#3F72AF",
            transition: SPRING_PRESETS.CRITICAL_DAMPED
          }}
          initial={{ y: 0, rotateZ: 0, scale: 1 }}
          animate={{ y: 0, rotateZ: 0, scale: 1 }}
          transition={{
            type: "spring",
            ...SPRING_PRESETS.BOUNCY,
            delay: index * staggerDelay
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default KineticText;