/**
 * Meridian AI — Proprietary Source Code
 * © 2026 Meridian AI Systems. All rights reserved.
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagicText } from '../components/ui/magic-text';
import * as Icons from 'lucide-react';

// ─── CONFIGURATION ─────────────────────────────────────────────────────────────
// Replace with your deployed Google Apps Script Web App URL (see guide below).
const GAS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwnglLCZYi93cYhtgfKhOD1XMP6xrMRPjIgYLQyh26fZkm9UmIWKR8pNlMNJkhFeqzTVg/exec';

// ─── Static data ───────────────────────────────────────────────────────────────
const COUNTRIES = [
  'Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda',
  'Argentina','Armenia','Australia','Austria','Azerbaijan','Bahamas','Bahrain',
  'Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia',
  'Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso',
  'Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Central African Republic',
  'Chad','Chile','China','Colombia','Comoros','Congo (Brazzaville)','Congo (DRC)',
  'Costa Rica','Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti',
  'Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea',
  'Eritrea','Estonia','Eswatini','Ethiopia','Fiji','Finland','France','Gabon',
  'Gambia','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea',
  'Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia',
  'Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan',
  'Kenya','Kiribati','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho',
  'Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Madagascar','Malawi',
  'Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius',
  'Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Morocco',
  'Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','New Zealand',
  'Nicaragua','Niger','Nigeria','North Korea','North Macedonia','Norway','Oman',
  'Pakistan','Palau','Palestine','Panama','Papua New Guinea','Paraguay','Peru',
  'Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda',
  'Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines',
  'Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia',
  'Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands',
  'Somalia','South Africa','South Korea','South Sudan','Spain','Sri Lanka','Sudan',
  'Suriname','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania',
  'Thailand','Timor-Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey',
  'Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom',
  'United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela',
  'Vietnam','Yemen','Zambia','Zimbabwe',
];

const NATIVE_LANGUAGES = [
  'Arabic (UAE)','Arabic (Saudi Arabia)','Arabic spoken in France (Darija)',
  'Catalan (Spain)','Chinese Simplified (China)','Chinese Traditional (Hong Kong)',
  'Chinese Traditional (Taiwan)','Danish (Denmark)','Dutch (Netherlands)',
  'Finnish (Finland)','French (Canada)','French (France)','German (Germany)',
  'Swiss German (Switzerland / Austria)','Hebrew (Israel)','Hindi (India)',
  'Italian (Italy)','Japanese (Japan)','Korean (South Korea)','Malay (Malaysia)',
  'Norwegian (Norway)','Portuguese (Brazil)','Portuguese (Portugal)','Russian (Russia)',
  'Spanish (Spain)','Spanish (United States)','Swedish (Sweden)',
  'Tagalog / Filipino (Philippines)','Tamil (India)','Thai (Thailand)',
  'Turkish (Turkey)','Vietnamese (Vietnam)',
];

const SECONDARY_LANGUAGES = [
  'English','French (European)','German (Standard)',
  'Swiss-Austrian German','Catalan','Basque',
];

const GENDERS = ['Male','Female','Non-binary','Prefer not to say'];

// ─── Hiring Steps ──────────────────────────────────────────────────────────────
const STEPS = [
  { icon: Icons.FolderSearch, title: 'Browse Projects',     body: 'Find an open project that matches your language and skills.' },
  { icon: Icons.ClipboardEdit, title: 'Submit Application', body: 'Fill in the short application form with your details.' },
  { icon: Icons.UserCheck,    title: 'We Review',           body: 'Our team reviews your profile and matches you to the project.' },
  { icon: Icons.Rocket,       title: 'Get Started',         body: 'Once selected, you receive full instructions and begin working.' },
];

// ─── Projects ──────────────────────────────────────────────────────────────────
type Project = { title: string; description: string; status: 'open' | 'expired' };
const PROJECTS: Project[] = [
  { title: 'Bilingual Recording Project — Natural Conversation',
    description: 'Native speakers required to record natural conversations while naturally switching between their native language and English.',
    status: 'open' },
  { title: 'Text Translation & Proofreading',
    description: 'Translate and proofread content across Indic and Asian languages.', status: 'expired' },
  { title: 'Audio Transcription Project',
    description: 'Transcribe spoken audio into accurate, formatted text for AI training.', status: 'expired' },
  { title: 'Data Annotation & Labeling',
    description: 'Label text, audio, and image data for machine learning pipelines.', status: 'expired' },
  { title: 'Voice Data Collection — Single Speaker',
    description: 'Record scripted and natural speech samples across multiple languages.', status: 'expired' },
];

// ─── Animation ─────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' } }),
};

// ─── Form types ────────────────────────────────────────────────────────────────
type FormData = {
  fullName: string; email: string; phone: string; gender: string;
  country: string; nativeLanguage: string; secondaryLanguage: string;
  previousExperience: boolean;
};
const BLANK: FormData = {
  fullName:'', email:'', phone:'', gender:'', country:'',
  nativeLanguage:'', secondaryLanguage:'', previousExperience: false,
};
type ModalView = 'overview' | 'apply' | 'success';

// ─── Shared styles ─────────────────────────────────────────────────────────────
const inputCls = `w-full bg-white border border-[#DBE2EF] rounded-sm px-4 py-3 text-sm
  text-[#112D4E] focus:outline-none focus:border-[#3F72AF] focus:ring-1
  focus:ring-[#3F72AF]/20 transition-all placeholder:text-[#112D4E]/30 appearance-none`;
const labelCls = `block text-[10px] font-mono uppercase tracking-[0.22em] text-[#3F72AF] mb-1.5 font-bold`;
const errCls   = `text-[10px] text-red-400 mt-1 font-mono`;

// ─── Modal ─────────────────────────────────────────────────────────────────────
function ProjectModal({ onClose }: { onClose: () => void }) {
  const [view, setView]   = useState<ModalView>('overview');
  const [step, setStep]   = useState<1 | 2>(1);
  const [form, setForm]   = useState<FormData>(BLANK);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors]   = useState<Partial<Record<keyof FormData, string>>>({});

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const set = (key: keyof FormData, val: string | boolean) => {
    setForm(f => ({ ...f, [key]: val }));
    setErrors(e => ({ ...e, [key]: undefined }));
  };

  const validate1 = () => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.fullName.trim()) e.fullName = 'Full name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Valid email is required';
    if (!form.phone.trim()) e.phone = 'WhatsApp / mobile number is required';
    if (!form.gender) e.gender = 'Please select your gender';
    if (!form.country) e.country = 'Please select your country';
    setErrors(e); return !Object.keys(e).length;
  };

  const validate2 = () => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.nativeLanguage) e.nativeLanguage = 'Please select your native language';
    if (!form.secondaryLanguage) e.secondaryLanguage = 'Please select your secondary language';
    setErrors(e); return !Object.keys(e).length;
  };

  const handleSubmit = async () => {
    if (!validate2()) return;
    setLoading(true);
    const params = new URLSearchParams({
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      gender: form.gender,
      country: form.country,
      nativeLanguage: form.nativeLanguage,
      secondaryLanguage: form.secondaryLanguage,
      previousExperience: form.previousExperience ? 'Yes' : 'No',
      submittedAt: new Date().toISOString(),
      source: 'Meridian AI Website',
    });
    try {
      await fetch(GAS_ENDPOINT, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
    } catch (_) { /* no-cors swallows errors — data still lands in Sheet */ }
    setLoading(false);
    setView('success');
  };

  /* ── modal header ── */
  const Header = ({ title, subtitle, onBack }: { title: string; subtitle: string; onBack?: () => void }) => (
    <div className="bg-[#112D4E] px-7 py-5 shrink-0">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          {onBack && (
            <button onClick={onBack}
              className="w-7 h-7 flex items-center justify-center rounded-sm border border-[#DBE2EF]/20 text-[#DBE2EF]/60 hover:text-[#F9F7F7] transition-colors shrink-0">
              <Icons.ArrowLeft size={13} />
            </button>
          )}
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 mb-1">
              <Icons.Mic size={12} className="text-[#3F72AF] shrink-0" />
              <span className="text-[9px] font-mono uppercase tracking-[0.28em] text-[#3F72AF] font-bold">Voice Recording · Code-Switching</span>
            </div>
            <h2 className="text-lg font-serif text-[#F9F7F7] font-bold leading-tight truncate">{title}</h2>
            <p className="text-[11px] text-[#DBE2EF]/55 mt-0.5 font-light">{subtitle}</p>
          </div>
        </div>
        <button onClick={onClose}
          className="shrink-0 w-7 h-7 flex items-center justify-center rounded-sm border border-[#DBE2EF]/20 text-[#DBE2EF]/60 hover:text-[#F9F7F7] transition-colors">
          <Icons.X size={14} />
        </button>
      </div>
    </div>
  );

  return (
    <AnimatePresence>
      <motion.div key="bd" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
        transition={{ duration: 0.2 }} onClick={onClose}
        className="fixed inset-0 z-50 bg-[#112D4E]/75 backdrop-blur-sm flex items-center justify-center px-4 py-6">

        <motion.div key="pn" initial={{ opacity:0, scale:0.95, y:16 }} animate={{ opacity:1, scale:1, y:0 }}
          exit={{ opacity:0, scale:0.95, y:16 }} transition={{ duration: 0.28, ease:'easeOut' }}
          onClick={e => e.stopPropagation()}
          className="relative bg-[#F9F7F7] w-full max-w-[480px] rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">

          {/* ══ OVERVIEW ══════════════════════════════════════════════════════ */}
          {view === 'overview' && (
            <>
              <Header title="Bilingual Recording Project" subtitle="Natural Conversation | Code-Switching" />
              <div className="overflow-y-auto flex-1 px-7 py-6 space-y-6">
                <div>
                  <p className={labelCls.replace('mb-1.5','mb-2.5')}>Project Overview</p>
                  <p className="text-sm text-[#112D4E]/80 leading-relaxed">
                    This project involves recording natural, everyday conversations between two native speakers. While speaking in your native language, you must also naturally switch to English — just as bilingual speakers do in real life.
                  </p>
                  <div className="mt-4 border-l-2 border-[#3F72AF] pl-4 space-y-1.5">
                    <p className="text-xs text-[#112D4E]/50 italic font-light">Two Arabic speakers conversing in Arabic while naturally using English words or sentences mid-conversation.</p>
                    <p className="text-xs text-[#112D4E]/50 italic font-light">Two Hindi speakers doing the same.</p>
                  </div>
                </div>
                <div>
                  <p className={labelCls.replace('mb-1.5','mb-2.5')}>Requirements</p>
                  <ul className="space-y-2">
                    {['Must be a native speaker of your language',
                      'Must be comfortable and fluent in English',
                      'High-quality microphone (clear, studio-grade audio)',
                      'Quiet room — zero background noise',
                      'Two participants required per session']
                      .map(r => (
                        <li key={r} className="flex items-start gap-2.5 text-sm text-[#112D4E]/70">
                          <Icons.CheckCircle size={13} className="text-[#3F72AF] mt-0.5 shrink-0" />{r}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="px-7 py-5 border-t border-[#DBE2EF] shrink-0">
                <button onClick={() => setView('apply')}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#3F72AF] text-[#F9F7F7] text-[11px] font-mono font-bold uppercase tracking-widest hover:bg-[#112D4E] transition-all rounded-sm shadow">
                  <Icons.ClipboardEdit size={13} /> Apply for This Project
                </button>
              </div>
            </>
          )}

          {/* ══ FORM ══════════════════════════════════════════════════════════ */}
          {view === 'apply' && (
            <>
              <Header
                title={step === 1 ? 'Step 1 of 2 — Personal Details' : 'Step 2 of 2 — Language Profile'}
                subtitle={step === 1 ? 'Contact information' : 'Language background & experience'}
                onBack={step === 2 ? () => { setStep(1); setErrors({}); } : () => { setView('overview'); setStep(1); setErrors({}); }}
              />
              {/* Progress bar */}
              <div className="h-0.5 bg-[#DBE2EF] shrink-0">
                <motion.div className="h-full bg-[#3F72AF]"
                  animate={{ width: step === 1 ? '50%' : '100%' }}
                  transition={{ duration: 0.35 }} />
              </div>

              <div className="overflow-y-auto flex-1 px-7 py-6">
                <AnimatePresence mode="wait">
                  {/* ─ Step 1 ─ */}
                  {step === 1 && (
                    <motion.div key="s1" initial={{ opacity:0, x:18 }} animate={{ opacity:1, x:0 }}
                      exit={{ opacity:0, x:-18 }} transition={{ duration:0.22 }} className="space-y-4">

                      {/* Full Name */}
                      <div>
                        <label className={labelCls}>Full Name <span className="text-red-400">*</span></label>
                        <input type="text" value={form.fullName} onChange={e => set('fullName', e.target.value)}
                          placeholder="Your full legal name"
                          className={`${inputCls}${errors.fullName ? ' border-red-300' : ''}`} />
                        {errors.fullName && <p className={errCls}>{errors.fullName}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className={labelCls}>Email Address <span className="text-red-400">*</span></label>
                        <input type="email" value={form.email} onChange={e => set('email', e.target.value)}
                          placeholder="your@email.com"
                          className={`${inputCls}${errors.email ? ' border-red-300' : ''}`} />
                        {errors.email && <p className={errCls}>{errors.email}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className={labelCls}>WhatsApp / Mobile Number <span className="text-red-400">*</span></label>
                        <input type="tel" value={form.phone} onChange={e => set('phone', e.target.value)}
                          placeholder="+91 9876543210"
                          className={`${inputCls}${errors.phone ? ' border-red-300' : ''}`} />
                        <p className="text-[10px] text-[#112D4E]/38 mt-1 font-light">Include country code, e.g. +91XXXXXXXXXX</p>
                        {errors.phone && <p className={errCls}>{errors.phone}</p>}
                      </div>

                      {/* Gender */}
                      <div>
                        <label className={labelCls}>Gender <span className="text-red-400">*</span></label>
                        <select value={form.gender} onChange={e => set('gender', e.target.value)}
                          className={`${inputCls} cursor-pointer${errors.gender ? ' border-red-300' : ''}`}>
                          <option value="">Select gender</option>
                          {GENDERS.map(g => <option key={g}>{g}</option>)}
                        </select>
                        {errors.gender && <p className={errCls}>{errors.gender}</p>}
                      </div>

                      {/* Country */}
                      <div>
                        <label className={labelCls}>Country of Residence <span className="text-red-400">*</span></label>
                        <select value={form.country} onChange={e => set('country', e.target.value)}
                          className={`${inputCls} cursor-pointer${errors.country ? ' border-red-300' : ''}`}>
                          <option value="">Select your country</option>
                          {COUNTRIES.map(c => <option key={c}>{c}</option>)}
                        </select>
                        {errors.country && <p className={errCls}>{errors.country}</p>}
                      </div>
                    </motion.div>
                  )}

                  {/* ─ Step 2 ─ */}
                  {step === 2 && (
                    <motion.div key="s2" initial={{ opacity:0, x:18 }} animate={{ opacity:1, x:0 }}
                      exit={{ opacity:0, x:-18 }} transition={{ duration:0.22 }} className="space-y-5">

                      {/* Native Language */}
                      <div>
                        <label className={labelCls}>Native / Main Language <span className="text-red-400">*</span></label>
                        <select value={form.nativeLanguage} onChange={e => set('nativeLanguage', e.target.value)}
                          className={`${inputCls} cursor-pointer${errors.nativeLanguage ? ' border-red-300' : ''}`}>
                          <option value="">Select your native language</option>
                          {NATIVE_LANGUAGES.map(l => <option key={l}>{l}</option>)}
                        </select>
                        {errors.nativeLanguage && <p className={errCls}>{errors.nativeLanguage}</p>}
                      </div>

                      {/* Secondary Language */}
                      <div>
                        <label className={labelCls}>Secondary / Fluent Language <span className="text-red-400">*</span></label>
                        <select value={form.secondaryLanguage} onChange={e => set('secondaryLanguage', e.target.value)}
                          className={`${inputCls} cursor-pointer${errors.secondaryLanguage ? ' border-red-300' : ''}`}>
                          <option value="">Select secondary language</option>
                          {SECONDARY_LANGUAGES.map(l => <option key={l}>{l}</option>)}
                        </select>
                        <p className="text-[10px] text-[#112D4E]/38 mt-1 font-light">Select English unless applying for a cross-language pair.</p>
                        {errors.secondaryLanguage && <p className={errCls}>{errors.secondaryLanguage}</p>}
                      </div>

                      {/* Previous Experience checkbox */}
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="mt-0.5 shrink-0 relative">
                          <input type="checkbox" className="sr-only" checked={form.previousExperience}
                            onChange={e => set('previousExperience', e.target.checked)} />
                          <div className={`w-5 h-5 rounded-sm border-2 flex items-center justify-center transition-all
                            ${form.previousExperience ? 'bg-[#3F72AF] border-[#3F72AF]' : 'border-[#DBE2EF] bg-white group-hover:border-[#3F72AF]/60'}`}>
                            {form.previousExperience && <Icons.Check size={11} className="text-white" />}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-[#112D4E] font-medium leading-snug">I have previously worked on a recording or voice data collection project</p>
                          <p className="text-[11px] text-[#112D4E]/42 mt-0.5 font-light">Check if you have prior freelance or professional recording experience</p>
                        </div>
                      </label>

                      {/* Consent note */}
                      <div className="border-l-2 border-[#3F72AF]/40 pl-4 py-0.5 bg-[#EEF2FA]/50 rounded-r-sm">
                        <p className="text-[11px] text-[#112D4E]/55 leading-relaxed font-light">
                          By submitting, you confirm all details are accurate, you are a native speaker of your selected language, and that payment details will be shared once the project commences.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="px-7 py-5 border-t border-[#DBE2EF] shrink-0">
                {step === 1 ? (
                  <button onClick={() => { if (validate1()) setStep(2); }}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#3F72AF] text-[#F9F7F7] text-[11px] font-mono font-bold uppercase tracking-widest hover:bg-[#112D4E] transition-all rounded-sm shadow">
                    Continue <Icons.ArrowRight size={13} />
                  </button>
                ) : (
                  <button onClick={handleSubmit} disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#112D4E] text-[#F9F7F7] text-[11px] font-mono font-bold uppercase tracking-widest hover:bg-[#3F72AF] disabled:opacity-55 disabled:cursor-not-allowed transition-all rounded-sm shadow">
                    {loading ? <><Icons.Loader2 size={13} className="animate-spin" /> Submitting…</> : <><Icons.Send size={13} /> Submit Application</>}
                  </button>
                )}
                <p className="text-center text-[10px] text-[#112D4E]/32 mt-2 font-light">
                  Your details are secure and used only for project matching
                </p>
              </div>
            </>
          )}

          {/* ══ SUCCESS ═══════════════════════════════════════════════════════ */}
          {view === 'success' && (
            <>
              <Header title="Application Received" subtitle="Thank you for applying" />
              <div className="flex-1 flex flex-col items-center justify-center px-7 py-12 text-center">
                <motion.div initial={{ scale:0.6, opacity:0 }} animate={{ scale:1, opacity:1 }}
                  transition={{ type:'spring', stiffness:220, damping:14 }}
                  className="w-16 h-16 bg-[#112D4E] rounded-full flex items-center justify-center mb-6 shadow-xl">
                  <Icons.Check size={28} className="text-[#3F72AF]" />
                </motion.div>
                <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2, duration:0.4 }}>
                  <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#3F72AF] mb-3">Application Received</p>
                  <h3 className="text-2xl font-serif text-[#112D4E] font-bold mb-3">You're in the pipeline.</h3>
                  <p className="text-sm text-[#112D4E]/60 leading-relaxed max-w-xs mx-auto font-light">
                    We have received your profile. If your language background matches a current or upcoming project, we will contact you directly at the details you provided.
                  </p>
                </motion.div>
              </div>
              <div className="px-7 py-5 border-t border-[#DBE2EF] shrink-0">
                <button onClick={onClose}
                  className="w-full flex items-center justify-center gap-2 py-3 border border-[#DBE2EF] text-[#112D4E] text-[11px] font-mono uppercase tracking-widest hover:border-[#3F72AF] hover:text-[#3F72AF] transition-all rounded-sm">
                  <Icons.ArrowLeft size={13} /> Back to Projects
                </button>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function Careers() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  return (
    <div className="min-h-screen bg-[#F9F7F7] text-[#112D4E] pt-28 pb-28">

      {/* ── S1: HEADER ────────────────────────────────────────────────────── */}
      <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-5xl mx-auto px-6 mb-20">
        <span className="text-[10px] font-bold font-mono uppercase tracking-[0.3em] text-[#3F72AF] block mb-4">Join Our Team</span>
        <MagicText text="Careers at Meridian AI"
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#112D4E] mb-6 leading-tight" />
        <p className="text-lg md:text-xl text-[#112D4E]/65 leading-relaxed font-light max-w-3xl">
          Join our growing team of language professionals, native speakers, and AI data contributors.
        </p>
        <div className="mt-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#DBE2EF]" />
          <div className="w-2 h-2 bg-[#3F72AF] rotate-45" />
          <div className="h-px w-16 bg-[#3F72AF]/40" />
        </div>
      </motion.div>

      {/* ── S2: HOW WE HIRE ───────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true, margin:'-60px' }} variants={fadeUp} className="mb-10">
          <span className="text-[10px] font-bold font-mono uppercase tracking-[0.3em] text-[#3F72AF] block mb-3">Process</span>
          <h2 className="text-2xl md:text-3xl font-serif text-[#112D4E]">How We Hire</h2>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-[2.5rem] left-[calc(12.5%)] right-[calc(12.5%)] h-px bg-[#DBE2EF] z-0" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative z-10">
            {STEPS.map(({ icon: Icon, title, body }, i) => (
              <motion.div key={title} initial="hidden" whileInView="visible" viewport={{ once:true, margin:'-40px' }}
                custom={i} variants={fadeUp} className="group flex flex-col">
                <div className="flex md:justify-center mb-5">
                  <div className="relative">
                    <div className="w-12 h-12 bg-[#F9F7F7] border-2 border-[#3F72AF] rounded-full flex items-center justify-center group-hover:bg-[#3F72AF] transition-all duration-300 shadow-sm">
                      <Icon size={18} className="text-[#3F72AF] group-hover:text-[#F9F7F7] transition-colors duration-300" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#3F72AF] text-[#F9F7F7] text-[9px] font-mono font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                </div>
                <div className="md:text-center">
                  <h3 className="font-serif font-bold text-sm text-[#112D4E] mb-1.5">{title}</h3>
                  <p className="text-xs text-[#112D4E]/58 leading-relaxed font-light">{body}</p>
                </div>
                {i < STEPS.length - 1 && <div className="md:hidden mt-4 ml-6"><Icons.ChevronDown size={14} className="text-[#DBE2EF]" /></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S3: OPEN PROJECTS ─────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true, margin:'-60px' }} variants={fadeUp} className="mb-8">
          <span className="text-[10px] font-bold font-mono uppercase tracking-[0.3em] text-[#3F72AF] block mb-3">Now Recruiting</span>
          <h2 className="text-2xl md:text-3xl font-serif text-[#112D4E] mb-1.5">Open Projects</h2>
          <p className="text-sm text-[#112D4E]/52 font-light">Browse available data collection and language projects.</p>
        </motion.div>

        <div className="border border-[#DBE2EF] rounded-sm overflow-hidden divide-y divide-[#DBE2EF]">
          {PROJECTS.map((project, i) => {
            const isOpen = project.status === 'open';
            return (
              <motion.div key={project.title} initial="hidden" whileInView="visible"
                viewport={{ once:true, margin:'-30px' }} custom={i * 0.4} variants={fadeUp}
                className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-5 transition-colors border-l-4
                  ${isOpen ? 'border-l-[#3F72AF] bg-[#F9F7F7] hover:bg-[#EEF2FA]/50' : 'border-l-transparent bg-[#F9F7F7]/60 opacity-65'}`}>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    {isOpen && <span className="w-1.5 h-1.5 rounded-full bg-[#3F72AF] animate-pulse shrink-0" />}
                    <h3 className={`font-serif font-bold text-sm md:text-base truncate ${isOpen ? 'text-[#112D4E]' : 'text-[#112D4E]/45'}`}>{project.title}</h3>
                  </div>
                  <p className={`text-xs leading-relaxed font-light ${isOpen ? 'text-[#112D4E]/62' : 'text-[#112D4E]/38'}`}>{project.description}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {isOpen ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-mono font-bold uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Open
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DBE2EF]/50 border border-[#DBE2EF] text-[#112D4E]/32 text-[10px] font-mono font-bold uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#112D4E]/22" /> Expired
                    </span>
                  )}
                  {isOpen ? (
                    <button onClick={() => setModalOpen(true)}
                      className="flex items-center gap-1.5 px-5 py-2.5 bg-[#3F72AF] text-[#F9F7F7] text-[10px] font-mono font-bold uppercase tracking-widest hover:bg-[#112D4E] transition-all rounded-sm shadow-sm whitespace-nowrap">
                      <Icons.ClipboardEdit size={11} /> View &amp; Apply
                    </button>
                  ) : (
                    <button disabled
                      className="flex items-center gap-1.5 px-5 py-2.5 bg-[#DBE2EF]/70 text-[#112D4E]/28 text-[10px] font-mono font-bold uppercase tracking-widest rounded-sm cursor-not-allowed whitespace-nowrap">
                      <Icons.Lock size={11} /> Closed
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── S4: BOTTOM NOTE ───────────────────────────────────────────────── */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once:true, margin:'-40px' }}
        variants={fadeUp} className="max-w-5xl mx-auto px-6">
        <div className="border-l-4 border-[#3F72AF] border border-[#DBE2EF] bg-[#EEF2FA]/55 rounded-sm px-6 py-5 flex gap-4 items-start">
          <Icons.Info size={17} className="text-[#3F72AF] mt-0.5 shrink-0" />
          <div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#3F72AF] mb-1.5">Please Note</p>
            <p className="text-sm text-[#112D4E]/72 leading-relaxed font-light">
              Submitting an application does not guarantee immediate placement on a project. Your details are saved and you will be contacted when a suitable project matching your language and availability becomes available.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── MODAL ─────────────────────────────────────────────────────────── */}
      {modalOpen && <ProjectModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}
