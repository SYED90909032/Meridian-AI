/**
 * Meridian AI — Proprietary Source Code
 * © 2026 Meridian AI Systems. All rights reserved.
 * Unauthorized copying, reproduction, distribution, or reuse of this
 * codebase or any connected services is strictly prohibited.
 * Internal systems, workflows, and implementation details are private.
 */

import React from 'react';
import { motion } from 'framer-motion';
import ScrollMorphHero from '../components/ScrollMorphHero';
import { ExpandableCard } from '../components/ui/expandable-card';
import { SERVICES, CEO, METHODOLOGY } from '../constants';
import KineticText from '../components/KineticText';
import { MagicText } from '../components/ui/magic-text';
import * as Icons from 'lucide-react';
import FeatureCarousel from '../components/ui/feature-carousel';
import AIAutomationHero from '../components/AIAutomationHero';
import { Footer7 } from '../components/ui/footer-7';

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

export default function Home() {
  return (
    <>

      {/* 1. HERO CHAPTER */}
      <section id="hero" className="relative z-10">
        <ScrollMorphHero />
      </section>

      {/* 2. MANIFESTO CHAPTER */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 bg-[#F9F7F7] relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-[#3F72AF] to-transparent opacity-30" />
         
         <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl text-center relative z-10"
         >
             <MagicText 
                text="&quot;We don't just build intelligence; we architect its integrity.&quot;"
                className="text-4xl md:text-7xl font-serif text-[#112D4E] leading-[1.1] justify-center"
             />
             <div className="mt-8 flex justify-center">
                 <div className="w-16 h-1 bg-[#3F72AF]" />
             </div>
         </motion.div>
      </section>

      {/* 3. SERVICES CHAPTER (Moved up) */}
      <section id="services" className="min-h-screen py-32 px-6 bg-[#F9F7F7]">
        <div className="max-w-7xl mx-auto">
            <div className="mb-20">

                <MagicText 
                    text="Full-Stack Intelligence"
                    className="mt-4 text-5xl md:text-7xl font-serif text-[#112D4E]"
                />
                <p className="mt-8 text-xl text-[#112D4E] leading-relaxed opacity-80 max-w-3xl">
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
                        classNameExpanded="[&_h4]:text-black dark:[&_h4]:text-[#F9F7F7] [&_h4]:font-medium"
                    >
                        <h4>{service.question}</h4>
                        <p>{service.description}</p>
                    </ExpandableCard>
                ))}
            </div>
        </div>
      </section>


      <AIAutomationHero />
      <FeatureCarousel />




      {/* FOOTER */}
      <Footer7 />

    </>
  );
}