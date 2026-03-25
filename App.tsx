import React from 'react';
import { motion } from 'framer-motion';
import ScrollMorphHero from './components/ScrollMorphHero';
import Navbar from './components/Navbar';
import { ExpandableCard } from './components/ui/expandable-card';
import Forms from './components/Forms';
import JudgesMode from './components/JudgesMode';
import { SERVICES, CEO, METHODOLOGY } from './constants';
import KineticText from './components/KineticText';
import { MagicText } from './components/ui/magic-text';
import * as Icons from 'lucide-react';

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
    'agent-audit': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    'media-eval': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    'moderation': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    'search-eval': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
};

export default function App() {
  return (
    <div className="relative w-full overflow-x-hidden bg-white selection:bg-[#1C4D8D] selection:text-white">
      <JudgesMode />
      <Navbar />

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
             <MagicText 
                text="&quot;We don't just build intelligence; we craft the protocol.&quot;"
                className="text-4xl md:text-7xl font-serif text-[#0F2854] leading-[1.1] justify-center"
             />
             <div className="mt-8 flex justify-center">
                 <div className="w-16 h-1 bg-[#1C4D8D]" />
             </div>
         </motion.div>
      </section>

      {/* 3. SERVICES CHAPTER (Moved up) */}
      <section id="services" className="min-h-screen py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="mb-20">
                <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-[#1C4D8D]">01 // Capabilities</span>
                <MagicText 
                    text="Full-Stack Intelligence"
                    className="mt-4 text-5xl md:text-7xl font-serif text-[#0F2854]"
                />
                <p className="mt-8 text-xl text-[#0F2854] leading-relaxed opacity-80 max-w-3xl">
                    We provide comprehensive data and language solutions to empower the next generation of artificial intelligence. Our work is built on a simple belief: for AI to be truly effective and trustworthy, it needs to be trained on authentic, thoughtfully prepared information, validated by human insight.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SERVICES.map((service, index) => (
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

      {/* 4. AI AUTOMATION CHAPTER (Moved up) */}
      <section id="automation" className="min-h-screen py-32 px-6 bg-[#050B18] relative overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle,_rgba(28,77,141,0.15)_0%,_transparent_70%)] blur-3xl" />
            <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,_rgba(73,136,196,0.1)_0%,_transparent_70%)] blur-3xl" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Core Message */}
            <div className="lg:w-5/12">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                        <div className="w-2 h-2 rounded-full bg-[#4988C4] animate-pulse" />
                        <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-[#BDE8F5]">02 // AI Automation</span>
                    </div>
                    
                    <MagicText 
                        text="Build Autonomous Agents That Replace Entire Workflows"
                        className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] mb-8"
                    />
                    
                    <p className="text-xl text-[#BDE8F5]/80 leading-relaxed font-light mb-12">
                        Beyond data, we help you automate repetitive work by building intelligent agents that run on their own.
                    </p>

                    <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-md">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#4988C4] rounded-l-2xl" />
                        <p className="text-base text-white/90 leading-relaxed font-medium">
                            These aren't basic chatbots. We design full automation systems that replace manual workflows, save hours of work every day, and run 24/7 without breaks.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Right Column: Feature Cards */}
            <div className="lg:w-7/12 w-full">
                <div className="grid grid-cols-1 gap-4">
                    {[
                        {
                            icon: Icons.MessageSquare,
                            title: "Customer Support",
                            text: "Customer support agents that handle FAQs, tickets, and live chat without human intervention"
                        },
                        {
                            icon: Icons.Users,
                            title: "Lead Management",
                            text: "Lead management systems that capture, qualify, and route leads automatically"
                        },
                        {
                            icon: Icons.Database,
                            title: "Data Pipelines",
                            text: "Data processing pipelines that clean, transform, and move data between your tools"
                        },
                        {
                            icon: Icons.Workflow,
                            title: "Custom Workflows",
                            text: "Custom workflows for scheduling, reporting, notifications, and back-office tasks"
                        }
                    ].map((feat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            className="group relative overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#4988C4]/50 rounded-2xl p-6 transition-all duration-500 cursor-default"
                        >
                            <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-bl from-[#4988C4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none" />
                            
                            <div className="flex items-start gap-6 relative z-10">
                                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#0F2854] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#4988C4] group-hover:border-transparent transition-all duration-500 shadow-lg">
                                    <feat.icon className="text-[#BDE8F5] group-hover:text-white transition-colors" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2 tracking-wide">{feat.title}</h3>
                                    <p className="text-[#BDE8F5]/70 leading-relaxed text-sm">
                                        {feat.text}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. AGENTS CHAPTER (Explosive Layout) - Mapped as "Articles" in Nav */}
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
                   <MagicText 
                       text="Self-Governing Systems"
                       className="text-5xl md:text-7xl font-serif text-[#0F2854] mb-8 leading-tight"
                   />
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
                      <MagicText 
                          text="Neural Network"
                          className="mt-4 text-5xl md:text-8xl font-serif leading-none text-white"
                      />
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
                      <MagicText 
                          text="Methodology"
                          className="mt-4 text-5xl md:text-6xl font-serif text-[#0F2854]"
                      />
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

      {/* 8. VISION / ABOUT CHAPTER (Merged with Contact) */}
      <section id="vision" className="min-h-[90vh] flex flex-col justify-center py-24 px-6 bg-white border-t border-[#0F2854]/5">
        <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
                <div className="w-full md:w-5/12">
                    <div className="aspect-[3/4] rounded-sm bg-[#0F2854] overflow-hidden relative shadow-2xl group">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" alt="Syed Rauf" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000" />
                        {/* Improved Gradient Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2854] via-[#0F2854]/40 to-transparent opacity-90" />
                        <div className="absolute bottom-8 left-8 z-10">
                            <h3 className="text-4xl font-serif mb-2 text-white drop-shadow-lg">{CEO.name}</h3>
                            <p className="text-xs font-mono uppercase tracking-widest text-[#BDE8F5] drop-shadow-md font-bold">{CEO.role}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-7/12 space-y-10">
                    <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-[#1C4D8D]">06 // The Architect</span>
                    <MagicText 
                        text="Alignment is not optional."
                        className="text-5xl md:text-6xl font-serif text-[#0F2854]"
                    />
                    <p className="text-xl md:text-2xl text-[#4988C4] leading-relaxed italic border-l-4 border-[#1C4D8D] pl-6">
                        "{CEO.quote}"
                    </p>
                    <div className="space-y-6 text-[#0F2854] leading-relaxed opacity-80 max-w-xl">
                        <p>
                            Under Syed's leadership, Meridian AI has pioneered the field of agentic automation, bridging the gap between raw computational power and delicate human intent.
                        </p>
                        <p>
                            Our mission is to ensure that as systems grow in autonomy, they remain anchored in human values.
                        </p>
                    </div>
                    <div className="pt-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" alt="Signature" className="h-16 opacity-40 filter brightness-0" />
                    </div>
                </div>
            </div>

            {/* MERGED CONTACT SECTION */}
            <div className="border-t border-[#0F2854]/10 pt-20">
                <div className="text-center mb-12">
                   <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-[#1C4D8D]">07 // Contact</span>
                   <MagicText 
                       text="Establish Connection"
                       className="mt-4 text-4xl md:text-5xl font-serif text-[#0F2854] justify-center"
                   />
                </div>
                <Forms />
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 bg-[#050B18] text-[#BDE8F5] border-t border-white/5 relative overflow-hidden">
         {/* Background elements */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#4988C4]/30 to-transparent" />
         <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#1C4D8D]/10 rounded-full blur-[120px]" />
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#4988C4]/5 rounded-full blur-[120px]" />
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
             <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
                 <div className="md:col-span-5 space-y-8">
                     <div className="flex flex-col">
                         <h2 className="text-3xl font-serif text-white tracking-[0.15em] uppercase">Meridian AI</h2>
                         <div className="flex items-center gap-3 mt-2">
                             <div className="h-px w-8 bg-[#4988C4]" />
                             <p className="text-[10px] uppercase tracking-[0.4em] text-[#4988C4] font-bold">The Human Protocol</p>
                         </div>
                     </div>
                     <p className="text-sm opacity-50 max-w-sm leading-relaxed font-sans">
                         Pioneering the standard for enterprise intelligence through human-led validation and agentic orchestration. We bridge the gap between raw compute and human intent.
                     </p>
                     <div className="flex gap-4">
                         {[
                             { 
                               icon: () => (
                                 <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                               ), 
                               label: 'X' 
                             },
                             { 
                               icon: Icons.Linkedin, 
                               label: 'LinkedIn' 
                             },
                             { 
                               icon: () => (
                                 <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.558.217.957.477 1.377.896.419.42.679.819.896 1.377.163.422.358 1.057.412 2.227.059 1.266.071 1.646.071 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.217.558-.477.957-.896 1.377-.42.419-.819.679-1.377.896-.422.163-1.057.358-2.227.412-1.266.059-1.646.071-4.85.071s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.558-.217-.957-.477-1.377-.896-.419-.42-.679-.819-.896-1.377-.163-.422-.358-1.057-.412-2.227C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.217-.558.477-.957.896-1.377.42-.419.819-.679 1.377-.896.422-.163 1.057-.358 2.227-.412 1.266-.059 1.646-.071 4.85-.071M12 0C8.741 0 8.333.014 7.053.072 5.775.131 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.059 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.337 1.079 2.126 1.384c.766.296 1.636.499 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.277-.059 2.148-.261 2.913-.558.788-.306 1.459-.717 2.126-1.384s1.079-1.337 2.126-1.384c.296-.766.499-1.636.558-2.913.058-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.059-1.277-.261-2.148-.558-2.913-.306-.788-.717-1.459-1.384-2.126S18.65 1.079 17.86.774c-.766-.296-1.636-.499-2.913-.558C15.667.014 15.259 0 12 0z"></path><path d="M12 5.838A6.162 6.162 0 1018.162 12 6.162 6.162 0 0012 5.838zm0 10.162A3.999 3.999 0 1115.999 12 4.001 4.001 0 0112 15.999z"></path><path d="M18.406 4.137a1.44 1.44 0 101.44 1.44 1.44 1.44 0 00-1.44-1.44z"></path></svg>
                               ), 
                               label: 'Instagram' 
                             },
                             { 
                               icon: () => (
                                 <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
                               ), 
                               label: 'WhatsApp' 
                             },
                             { icon: Icons.Mail, label: 'Email' }
                         ].map((social) => (
                             <button 
                                 key={social.label} 
                                 className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#050B18] transition-all duration-500 group"
                             >
                                 {typeof social.icon === 'function' ? <social.icon /> : <social.icon size={16} className="opacity-60 group-hover:opacity-100" />}
                                 <span className="sr-only">{social.label}</span>
                             </button>
                         ))}
                     </div>
                 </div>
                 
                 <div className="md:col-span-2">
                     <h4 className="text-[11px] uppercase tracking-[0.25em] text-white font-bold mb-8 opacity-30">Navigation</h4>
                     <nav className="flex flex-col gap-5 text-[13px] font-medium opacity-60">
                         <button onClick={() => document.getElementById('hero')?.scrollIntoView({behavior:'smooth'})} className="text-left hover:text-white transition-colors flex items-center gap-2 group">
                             <div className="w-0 h-px bg-[#4988C4] group-hover:w-3 transition-all" />
                             Home
                         </button>
                         <button onClick={() => document.getElementById('services')?.scrollIntoView({behavior:'smooth'})} className="text-left hover:text-white transition-colors flex items-center gap-2 group">
                             <div className="w-0 h-px bg-[#4988C4] group-hover:w-3 transition-all" />
                             Capabilities
                         </button>
                         <button onClick={() => document.getElementById('automation')?.scrollIntoView({behavior:'smooth'})} className="text-left hover:text-white transition-colors flex items-center gap-2 group">
                             <div className="w-0 h-px bg-[#4988C4] group-hover:w-3 transition-all" />
                             Automation
                         </button>
                         <button onClick={() => document.getElementById('vision')?.scrollIntoView({behavior:'smooth'})} className="text-left hover:text-white transition-colors flex items-center gap-2 group">
                             <div className="w-0 h-px bg-[#4988C4] group-hover:w-3 transition-all" />
                             The Architect
                         </button>
                     </nav>
                 </div>

                 <div className="md:col-span-2">
                     <h4 className="text-[11px] uppercase tracking-[0.25em] text-white font-bold mb-8 opacity-30">Legal</h4>
                     <nav className="flex flex-col gap-5 text-[13px] font-medium opacity-60">
                         <button 
                            onClick={() => alert("Privacy Policy: We protect your data with enterprise-grade encryption and strictly adhere to global privacy standards.")}
                            className="text-left hover:text-white transition-colors"
                         >
                            Privacy
                         </button>
                         <button 
                            onClick={() => alert("Terms of Service: By using Meridian AI, you agree to our ethical AI usage guidelines and service protocols.")}
                            className="text-left hover:text-white transition-colors"
                         >
                            Terms
                         </button>
                         <button 
                            onClick={() => alert("Security: Our infrastructure is built on a zero-trust architecture with continuous monitoring.")}
                            className="text-left hover:text-white transition-colors"
                         >
                            Security
                         </button>
                         <button 
                            onClick={() => alert("Compliance: We are fully compliant with SOC2, GDPR, and HIPAA data processing requirements.")}
                            className="text-left hover:text-white transition-colors"
                         >
                            Compliance
                         </button>
                     </nav>
                 </div>

                 <div className="md:col-span-3">
                     <h4 className="text-[11px] uppercase tracking-[0.25em] text-white font-bold mb-8 opacity-30">Global Presence</h4>
                     <div className="grid grid-cols-2 gap-y-4 text-[12px] opacity-60 font-medium">
                         <div className="flex flex-col">
                             <span className="text-white/40 text-[10px] uppercase tracking-tighter mb-1">Americas</span>
                             <span>New York</span>
                         </div>
                         <div className="flex flex-col">
                             <span className="text-white/40 text-[10px] uppercase tracking-tighter mb-1">Europe</span>
                             <span>London</span>
                         </div>
                         <div className="flex flex-col">
                             <span className="text-white/40 text-[10px] uppercase tracking-tighter mb-1">Asia</span>
                             <span>Singapore</span>
                         </div>
                         <div className="flex flex-col">
                             <span className="text-white/40 text-[10px] uppercase tracking-tighter mb-1">MENA</span>
                             <span>Dubai</span>
                         </div>
                     </div>
                 </div>
             </div>

             <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                 <div className="flex flex-col md:flex-row items-center gap-4">
                     <div className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <div className="text-[10px] opacity-30 font-mono tracking-[0.2em] uppercase">
                            © 2026 Meridian AI Systems. All Rights Reserved.
                        </div>
                     </div>
                     <div className="text-[10px] opacity-50 font-sans tracking-wide text-[#4988C4]">
                        Created with love by <span className="text-white font-bold">Syed</span> • Based in <span className="text-white font-bold">India</span>
                     </div>
                 </div>
                 <div className="text-[10px] opacity-30 font-mono tracking-[0.2em] uppercase flex gap-8">
                     <span className="flex items-center gap-2">
                         <Icons.Shield size={10} />
                         Secure Transmission
                     </span>
                     <span className="flex items-center gap-2">
                         <Icons.Lock size={10} />
                         TLS 1.3
                     </span>
                 </div>
             </div>
         </div>
      </footer>

    </div>
  );
}