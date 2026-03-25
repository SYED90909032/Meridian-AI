import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { SPRING_PRESETS } from '../constants';

const Forms: React.FC = () => {
    const [mode, setMode] = useState<'client' | 'investor'>('client');

    return (
        <div className="w-full mt-24">
            <motion.div
                className="relative bg-white w-full rounded-3xl overflow-hidden shadow-2xl border border-[#1C4D8D]/30 flex flex-col md:flex-row"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={SPRING_PRESETS.BOUNCY}
            >
                {/* Sidebar / Header */}
                <div className="md:w-1/3 bg-[#0F2854] text-[#BDE8F5] p-8 flex flex-col justify-between">
                    <div>
                        <h3 className="text-3xl font-serif mb-4 text-[#4988C4]">
                            {mode === 'client' ? 'Protocol Initialization' : 'Investor Access'}
                        </h3>
                        <p className="text-sm opacity-80 leading-relaxed font-mono">
                            {mode === 'client' 
                                ? 'You are initiating a secure channel with Meridian AI architecture team. Precision in your request ensures precision in our response.' 
                                : 'Access privileged financial data and roadmap projections.'}
                        </p>
                    </div>
                    
                    <div className="mt-8 space-y-4">
                        <button 
                            onClick={() => setMode('client')}
                            className={`w-full py-3 px-4 text-left rounded-lg transition-all flex items-center gap-3 ${mode === 'client' ? 'bg-[#1C4D8D] text-white' : 'hover:bg-white/10'}`}
                        >
                            <Icons.Briefcase size={18} />
                            <span className="font-bold tracking-wider text-sm uppercase">Client Partnership</span>
                        </button>
                        <button 
                            onClick={() => setMode('investor')}
                            className={`w-full py-3 px-4 text-left rounded-lg transition-all flex items-center gap-3 ${mode === 'investor' ? 'bg-[#1C4D8D] text-white' : 'hover:bg-white/10'}`}
                        >
                            <Icons.TrendingUp size={18} />
                            <span className="font-bold tracking-wider text-sm uppercase">Investor Relations</span>
                        </button>
                    </div>
                    
                    <div className="hidden md:block opacity-30 text-xs font-mono mt-8">
                        SECURE TRANSMISSION // TLS 1.3
                    </div>
                </div>

                {/* Form Area */}
                <div className="flex-1 p-8 md:p-12 bg-white">
                    <form className="space-y-8">
                        {/* Section 1: Identity */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 mb-4 border-b border-black/10 pb-2">
                                <span className="text-[#1C4D8D] font-bold">01</span>
                                <h4 className="font-mono text-sm uppercase tracking-widest text-[#0F2854]">Identity Matrix</h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-[#4988C4] uppercase">Full Name</label>
                                    <input type="text" className="w-full bg-white border border-black/10 rounded-sm p-3 focus:ring-1 focus:ring-[#1C4D8D] outline-none transition-all" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-[#4988C4] uppercase">Organization</label>
                                    <input type="text" className="w-full bg-white border border-black/10 rounded-sm p-3 focus:ring-1 focus:ring-[#1C4D8D] outline-none transition-all" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-[#4988C4] uppercase">Corporate Email</label>
                                <input type="email" className="w-full bg-white border border-black/10 rounded-sm p-3 focus:ring-1 focus:ring-[#1C4D8D] outline-none transition-all" />
                            </div>
                        </div>

                        {/* Section 2: Parameters */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 mb-4 border-b border-black/10 pb-2">
                                <span className="text-[#1C4D8D] font-bold">02</span>
                                <h4 className="font-mono text-sm uppercase tracking-widest text-[#0F2854]">Operational Parameters</h4>
                            </div>
                            
                            {mode === 'client' ? (
                                <>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-[#4988C4] uppercase">Primary Vector</label>
                                            <select className="w-full bg-white border border-black/10 rounded-sm p-3 focus:ring-1 focus:ring-[#1C4D8D] outline-none transition-all text-[#0F2854]">
                                                <option>Autonomous Agents</option>
                                                <option>Data Infrastructure</option>
                                                <option>Model Training</option>
                                                <option>Strategic Consulting</option>
                                            </select>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-[#4988C4] uppercase">Timeline</label>
                                            <select className="w-full bg-white border border-black/10 rounded-sm p-3 focus:ring-1 focus:ring-[#1C4D8D] outline-none transition-all text-[#0F2854]">
                                                <option>Immediate (Q1)</option>
                                                <option>Near-term (Q2)</option>
                                                <option>Strategic (FY26)</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-[#4988C4] uppercase">Objective & Constraints</label>
                                        <textarea rows={3} className="w-full bg-white border border-black/10 rounded-sm p-3 focus:ring-1 focus:ring-[#1C4D8D] outline-none transition-all" placeholder="Describe your technical requirements..."></textarea>
                                    </div>
                                </>
                            ) : (
                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-[#4988C4] uppercase">Capital Deployment Range</label>
                                        <select className="w-full bg-white border border-black/10 rounded-sm p-3 focus:ring-1 focus:ring-[#1C4D8D] outline-none transition-all text-[#0F2854]">
                                            <option>Series A ($1M - $5M)</option>
                                            <option>Series B ($5M - $20M)</option>
                                            <option>Strategic Growth ($20M+)</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-[#4988C4] uppercase">Firm Profile</label>
                                        <input type="text" placeholder="e.g. Venture Capital, Family Office" className="w-full bg-white border border-black/10 rounded-sm p-3 focus:ring-1 focus:ring-[#1C4D8D] outline-none transition-all" />
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        <motion.button 
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            type="button" 
                            className="w-full py-5 bg-[#0F2854] text-[#BDE8F5] font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-[#1C4D8D] transition-colors shadow-lg"
                        >
                            Transmit Signal
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}

export default Forms;