import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Forms from '../components/Forms';
import { CEO } from '../constants';

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-32">
      {/* 8. VISION / ABOUT CHAPTER (Merged with Contact) */}
      <section id="vision" className="min-h-[90vh] flex flex-col justify-center py-24 px-6 bg-white">
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
                    <h2 className="text-5xl md:text-6xl font-serif text-[#0F2854]">Alignment is not optional.</h2>
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
                   <h2 className="mt-4 text-4xl md:text-5xl font-serif text-[#0F2854]">Establish Connection</h2>
                </div>
                <Forms />
            </div>
        </div>
      </section>
    </div>
  );
}
