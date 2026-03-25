import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import ScrollMorphHero from '../components/ScrollMorphHero';
import { ExpandableCard } from '../components/ui/expandable-card';
import KineticText from '../components/KineticText';
import * as Icons from 'lucide-react';
import { SERVICES, METHODOLOGY } from '../constants';
import AIAutomation from '../components/AIAutomation';

const SERVICE_IMAGES: Record<string, string> = {
    'speech-data': 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=800',
    'transcription': 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800',
    'custom-vision': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    'speech-annotation': 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800',
    'vision-annotation': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    'nlp-labeling': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    'multimodal': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    'translation': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    'dubbing': 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800',
    'rlhf': 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    'fact-checking': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    'agent-audit': 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
    'media-eval': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    'moderation': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    'search-eval': 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
};

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <>
      {/* 1. HERO CHAPTER */}
      <section id="hero" className="relative z-10">
        <ScrollMorphHero />
      </section>

      {/* 2. MANIFESTO CHAPTER */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 bg-white relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-[#1C4D8D] to-transparent opacity-30" />
         
         <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl text-center relative z-10"
         >
             <h2 className="text-4xl md:text-7xl font-serif text-[#0F2854] leading-[1.1]">
                "We don't just build intelligence;<br/> <span className="text-[#1C4D8D] italic">we craft the protocol</span>."
             </h2>
             <div className="mt-8 flex justify-center">
                 <div className="w-16 h-1 bg-[#1C4D8D]" />
             </div>
         </motion.div>
      </section>

      {/* 3. SERVICES CHAPTER */}
      <section id="services" className="min-h-screen py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="mb-20">
                <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-[#1C4D8D]">01 // Capabilities</span>
                <h2 className="mt-4 text-5xl md:text-7xl font-serif text-[#0F2854]">
                    Full-Stack<br/>Intelligence
                </h2>
                <p className="mt-8 text-xl text-[#0F2854] leading-relaxed opacity-80 max-w-3xl">
                    We provide comprehensive data and language solutions to empower the next generation of artificial intelligence. Our work is built on a simple belief: for AI to be truly effective and trustworthy, it needs to be trained on authentic, thoughtfully prepared information, validated by human insight.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SERVICES.map((service) => (
                    <ExpandableCard 
                        key={service.id}
                        title={service.title}
                        description={service.subtitle}
                        src={SERVICE_IMAGES[service.id] || `https://picsum.photos/seed/${service.id}/800/600`}
                        classNameExpanded="[&_h4]:text-black dark:[&_h4]:text-white [&_h4]:font-medium"
                    >
                        <h4>{service.question}</h4>
                        <p>{service.description}</p>
                    </ExpandableCard>
                ))}
            </div>
        </div>
      </section>

      {/* 4. AI AUTOMATION CHAPTER */}
      <AIAutomation />

      {/* 5. AGENTS CHAPTER */}
      <section id="agents" className="min-h-screen py-24 px-6 bg-white relative border-t border-[#1C4D8D]/10">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8fcff] hidden lg:block" />
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10">
           <div className="w-full lg:w-1/2 pt-12">
               <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8 }}
               >
                   <div className="flex items-center gap-3 mb-8">
                       <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-[#1C4D8D]">03 // Agentic Automation</span>
                   </div>
                   <h2 className="text-5xl md:text-7xl font-serif text-[#0F2854] mb-8 leading-tight">
                       <KineticText text="Self-Governing" /><br/>
                       <span className="text-[#4988C4]">Systems</span>
                   </h2>
                   <p className="text-xl text-[#0F2854] leading-relaxed mb-10 opacity-80 max-w-lg">
                       Move beyond static scripts. We build autonomous agents that perceive, reason, and execute complex business workflows without human intervention.
                   </p>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                       {[
                           "Multi-Step Reasoning",
                           "Self-Correction",
                           "Tool-Use & API Integration",
                           "Human-in-the-Loop"
                       ].map((item, i) => (
                           <div key={i} className="flex items-center gap-3 border-l-2 border-[#1C4D8D]/30 pl-4">
                               <span className="text-sm font-bold uppercase tracking-wider text-[#0F2854]">{item}</span>
                           </div>
                       ))}
                   </div>
               </motion.div>
           </div>
           
           <div className="w-full lg:w-1/2 relative">
               <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: false }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   className="aspect-[4/5] bg-[#0F2854] rounded-sm p-8 relative overflow-hidden shadow-2xl"
               >
                   {/* Abstract Visualization */}
                   <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                   <div className="relative z-10 flex flex-col h-full justify-between">
                       <div className="flex justify-between items-start text-[#BDE8F5]">
                           <Icons.Cpu size={48} strokeWidth={1} />
                           <span className="font-mono text-xs">SYS_ACTIVE</span>
                       </div>
                       
                       <div className="space-y-6">
                           {[1, 2, 3].map((i) => (
                               <div key={i} className="bg-white/5 border border-white/10 p-4 backdrop-blur-sm rounded-sm">
                                   <div className="flex items-center gap-3 mb-2">
                                       <div className="w-2 h-2 rounded-full bg-[#4988C4] animate-pulse" />
                                       <span className="text-xs font-mono text-white/70">AGENT_0{i} // PROCESSING</span>
                                   </div>
                                   <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                       <motion.div 
                                          className="h-full bg-[#4988C4]" 
                                          initial={{ width: "0%" }}
                                          whileInView={{ width: `${Math.random() * 60 + 40}%` }}
                                          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                                       />
                                   </div>
                               </div>
                           ))}
                       </div>
                       
                       <div className="text-white/50 text-xs font-mono">
                           {'>'} OPTIMIZING WORKFLOW TOPOLOGY...<br/>
                           {'>'} LATENCY: 12ms
                       </div>
                   </div>
               </motion.div>
           </div>
        </div>
      </section>

      {/* 6. GLOBAL INFRASTRUCTURE CHAPTER */}
      <section id="global" className="min-h-screen py-24 px-6 bg-[#0F2854] text-[#BDE8F5] flex items-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
               {/* Background Grid */}
               <div className="w-full h-full bg-[linear-gradient(rgba(189,232,245,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(189,232,245,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-[#4988C4]">04 // Global Scale</span>
                      <h2 className="mt-4 text-5xl md:text-8xl font-serif leading-none text-white">
                          Neural<br/>Network
                      </h2>
                      <div className="h-px w-32 bg-[#4988C4] my-8" />
                      <div className="space-y-8 max-w-md">
                          <div>
                              <h4 className="text-xl font-bold mb-2 text-white">Multimodal Data Pipeline</h4>
                              <p className="text-[#BDE8F5]/60 leading-relaxed">Processing 40TB+ of sensory data daily across 150+ languages. Ensuring zero-latency context windows.</p>
                          </div>
                          <div>
                              <h4 className="text-xl font-bold mb-2 text-white">Edge Deployment</h4>
                              <p className="text-[#BDE8F5]/60 leading-relaxed">Models deployed on-device or via distributed cloud clusters for maximum privacy and speed.</p>
                          </div>
                      </div>
                  </div>

                  <div className="relative h-[500px] w-full border border-white/20 rounded-full flex items-center justify-center">
                       <motion.div 
                          className="absolute inset-0 rounded-full border border-[#4988C4]/30"
                          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 4, repeat: Infinity }}
                       />
                       <Icons.Globe size={300} strokeWidth={0.5} className="text-white/20" />
                       
                       {/* Animated Nodes */}
                       {[0, 120, 240].map((deg, i) => (
                           <motion.div 
                               key={i}
                               className="absolute w-3 h-3 bg-[#4988C4] rounded-full shadow-[0_0_20px_#4988C4]"
                               style={{ transformOrigin: "center center" }}
                               animate={{ rotate: 360 }}
                               transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                           >
                               <div className="absolute top-0 left-0 w-full h-full" style={{ transform: `rotate(${deg}deg) translateX(150px)` }} />
                           </motion.div>
                       ))}
                       
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                           <div className="text-3xl font-bold text-white">150+</div>
                           <div className="text-[10px] tracking-widest uppercase text-[#4988C4]">Regions Active</div>
                       </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 7. METHODOLOGY CHAPTER */}
      <section className="min-h-[80vh] py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-[#0F2854]/10 pb-8">
                  <div>
                      <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-[#1C4D8D]">05 // The Process</span>
                      <h2 className="mt-4 text-5xl md:text-6xl font-serif text-[#0F2854]">Methodology</h2>
                  </div>
                  <p className="text-[#0F2854] max-w-md opacity-60 mt-8 md:mt-0">
                      Our proven framework for integrating hyper-scale intelligence into legacy enterprise environments.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {METHODOLOGY.map((step, i) => (
                      <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: false }}
                          transition={{ delay: i * 0.1 }}
                          className="group relative border-l border-[#0F2854]/10 pl-8 py-4 hover:border-[#1C4D8D] transition-colors"
                      >
                          <span className="text-4xl font-serif text-[#0F2854]/20 group-hover:text-[#1C4D8D] transition-colors">{step.step}</span>
                          <h3 className="text-xl font-bold text-[#0F2854] mt-4 mb-2">{step.title}</h3>
                          <p className="text-sm text-[#4988C4] leading-relaxed">{step.desc}</p>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>
    </>
  );
}
