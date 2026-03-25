import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SPRING_PRESETS } from '../constants';
import * as Icons from 'lucide-react';

const SpatialBento = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const items = [
    { id: 1, icon: 'Database', label: 'Data', color: '#1C4D8D' },
    { id: 2, icon: 'Brain', label: 'Train', color: '#0F2854' },
    { id: 3, icon: 'Cpu', label: 'Process', color: '#4988C4' },
    { id: 4, icon: 'Globe', label: 'Scale', color: '#BDE8F5' },
    { id: 5, icon: 'Zap', label: 'Speed', color: '#1C4D8D' },
    { id: 6, icon: 'Shield', label: 'Secure', color: '#0F2854' },
    { id: 7, icon: 'Code', label: 'API', color: '#4988C4' },
    { id: 8, icon: 'Users', label: 'Team', color: '#1C4D8D' },
    { id: 9, icon: 'Mail', label: 'Contact', color: '#0F2854' },
  ];

  return (
    <div className="fixed top-8 right-8 z-50 perspective-[1000px] hidden lg:block">
      <div className="grid grid-cols-3 gap-3 p-4 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl transform rotate-y-[-10deg]">
        {items.map((item) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const Icon = (Icons as any)[item.icon] || Icons.Circle;
            const isActive = activeId === item.id;
            
            return (
              <motion.div
                key={item.id}
                className="relative bg-white/20 rounded-xl cursor-pointer flex items-center justify-center overflow-hidden"
                style={{
                    backdropFilter: 'blur(10px)',
                    boxShadow: isActive ? `0 0 20px ${item.color}` : 'none'
                }}
                initial={{ width: 64, height: 64 }}
                animate={{
                    width: isActive ? 192 : 64,
                    height: isActive ? 192 : 64,
                    rotateX: isActive ? 5 : 0,
                    zIndex: isActive ? 10 : 1,
                    backgroundColor: isActive ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.2)'
                }}
                transition={SPRING_PRESETS.BOUNCY}
                onHoverStart={() => setActiveId(item.id)}
                onHoverEnd={() => setActiveId(null)}
              >
                  <AnimatePresence mode="popLayout">
                    {isActive ? (
                        <motion.div 
                            className="flex flex-col items-center justify-center text-center p-4 w-full h-full"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                        >
                            <Icon size={48} color={item.color} strokeWidth={1} className="mb-2" />
                            <span className="text-sm font-bold tracking-widest uppercase text-[#0F2854]">{item.label}</span>
                            <motion.div 
                                className="mt-2 w-full h-1 rounded-full"
                                style={{ backgroundColor: item.color }}
                                layoutId="underline"
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                             <Icon size={24} color={isActive ? item.color : "#0F2854"} />
                        </motion.div>
                    )}
                  </AnimatePresence>
              </motion.div>
            );
        })}
      </div>
    </div>
  );
};

export default SpatialBento;