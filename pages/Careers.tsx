/**
 * Meridian AI — Proprietary Source Code
 * © 2026 Meridian AI Systems. All rights reserved.
 * Unauthorized copying, reproduction, distribution, or reuse of this
 * codebase or any connected services is strictly prohibited.
 * Internal systems, workflows, and implementation details are private.
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagicText } from '../components/ui/magic-text';
import * as Icons from 'lucide-react';

const WORK_TYPES = [
  'Voice Recording',
  'Transcription',
  'Translation',
  'Data Annotation',
  'Subtitling',
  'Creative Writing',
  'Other',
];

type FormData = {
  // Section 1
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  gender: string;
  ageRange: string;
  // Section 2
  nativeLanguage: string;
  nativeDialect: string;
  additionalLanguages: string;
  proficiencyAdditional: string;
  readWriteNative: string;
  readWriteAdditional: string;
  // Section 3
  workTypes: string[];
  previousExperience: string;
  experienceDescription: string;
  platformsWorked: string;
  hoursPerWeek: string;
  quietEnvironment: string;
  microphone: string;
  portfolioLink: string;
  howDidYouHear: string;
};

const initialForm: FormData = {
  fullName: '', email: '', phone: '', country: '', city: '', gender: '', ageRange: '',
  nativeLanguage: '', nativeDialect: '', additionalLanguages: '', proficiencyAdditional: '', readWriteNative: '', readWriteAdditional: '',
  workTypes: [], previousExperience: '', experienceDescription: '', platformsWorked: '', hoursPerWeek: '', quietEnvironment: '', microphone: '', portfolioLink: '', howDidYouHear: '',
};

const SECTIONS = ['Personal Details', 'Language Proficiency', 'Experience & Availability'];

export default function Careers() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const set = (key: keyof FormData, value: string) => setForm(f => ({ ...f, [key]: value }));

  const toggleWorkType = (type: string) => {
    setForm(f => ({
      ...f,
      workTypes: f.workTypes.includes(type)
        ? f.workTypes.filter(t => t !== type)
        : [...f.workTypes, type],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Build URLSearchParams — Apps Script reads these via e.parameter
    const params = new URLSearchParams();
    const payload: Record<string, string> = {
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      country: form.country,
      city: form.city,
      gender: form.gender,
      ageRange: form.ageRange,
      nativeLanguage: form.nativeLanguage,
      nativeDialect: form.nativeDialect,
      additionalLanguages: form.additionalLanguages,
      proficiencyAdditional: form.proficiencyAdditional,
      readWriteNative: form.readWriteNative,
      readWriteAdditional: form.readWriteAdditional,
      workTypes: form.workTypes.join(', '),
      previousExperience: form.previousExperience,
      experienceDescription: form.experienceDescription,
      platformsWorked: form.platformsWorked,
      hoursPerWeek: form.hoursPerWeek,
      quietEnvironment: form.quietEnvironment,
      microphone: form.microphone,
      portfolioLink: form.portfolioLink,
      howDidYouHear: form.howDidYouHear,
      submittedAt: new Date().toISOString(),
    };
    Object.entries(payload).forEach(([k, v]) => params.append(k, v));

    try {
      // mode: 'no-cors' is required — Apps Script doesn't return CORS headers.
      // The request still reaches the server and writes to the Sheet.
      await fetch(
        'https://script.google.com/macros/s/AKfycby8w00FMMkCOTFfAj05UzKXtVjIuiuukxvrtFZzH8dS3qsKkcqVQIAWkqLRGTbiAXmj/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: params.toString(),
        }
      );
    } catch (_) {
      // Silently ignore — no-cors responses always throw on .json()/.text(),
      // but the data still lands in Google Sheets.
    }

    setLoading(false);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const inputCls = `w-full bg-[#F9F7F7] border border-[#DBE2EF] rounded-sm px-4 py-3 text-sm text-[#112D4E] focus:outline-none focus:border-[#3F72AF] transition-colors placeholder:text-[#112D4E]/30`;
  const labelCls = `block text-[10px] font-mono tracking-widest uppercase text-[#3F72AF] mb-1.5 font-bold`;
  const selectCls = `${inputCls} cursor-pointer`;

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F9F7F7] flex flex-col items-center justify-center px-6 text-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
          <div className="w-20 h-20 bg-[#112D4E] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <Icons.Check className="text-[#DBE2EF] w-10 h-10" />
          </div>
          <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-[#3F72AF] block mb-4">Application Received</span>
          <h1 className="text-4xl md:text-6xl font-serif text-[#112D4E] mb-6">Thank You for Applying</h1>
          <p className="text-lg text-[#112D4E]/70 max-w-xl mx-auto leading-relaxed font-light mb-10">
            We have received your profile. If your skills match a current or upcoming project, we will contact you at the email you provided. If there is no immediate match, your profile stays active in our network.
          </p>
          <button
            onClick={() => { window.location.hash = ''; }}
            className="inline-flex items-center gap-2 text-[#3F72AF] font-mono text-xs uppercase tracking-[0.2em] hover:text-[#112D4E] transition-colors"
          >
            <Icons.ArrowLeft size={14} /> Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F7F7] text-[#112D4E] pt-28 pb-24">
      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-[#3F72AF]">Join Our Team</span>
        <MagicText text="Careers" className="mt-4 mb-6 text-5xl md:text-7xl font-serif text-[#112D4E]" />
        <p className="text-xl text-[#112D4E]/70 leading-relaxed font-light max-w-3xl">
          Meridian AI builds project-based teams from a global network of linguists, voice artists, transcribers, translators, and data specialists. We do not hire for fixed roles. When a project comes in, we match the right people from our network based on language, skills, and availability.
        </p>
        <p className="mt-4 text-lg text-[#112D4E]/60 leading-relaxed font-light max-w-3xl">
          If your profile fits, we reach out with the details and pay rate. You decide if you want to take it. Fill out the form below to register your profile.
        </p>
      </div>

      {/* Work We Offer */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <h2 className="text-2xl md:text-3xl font-serif mb-8 text-[#112D4E]">Work We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Icons.Mic, title: 'Voice Recording', desc: 'Record your voice for AI training projects. Read scripts, speak naturally, or have conversations — done from your own location.' },
            { icon: Icons.Headphones, title: 'Transcription', desc: 'Listen to audio and type out exactly what is being said. Requires strong listening skills across accents and speech styles.' },
            { icon: Icons.Globe, title: 'Translation', desc: 'Translate content while keeping meaning, tone, and cultural context intact. Native-level understanding required.' },
            { icon: Icons.Tag, title: 'Data Annotation', desc: 'Label and categorize text, audio, images, or video per project guidelines. Requires patience and consistency.' },
            { icon: Icons.Subtitles, title: 'Subtitling', desc: 'Create timed subtitles for video content. Transcribe dialogue, sync to audio, and format for readability.' },
            { icon: Icons.PenTool, title: 'Creative Writing', desc: 'Produce original written content in specific languages for AI training datasets.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-[#F9F7F7] border border-[#DBE2EF] rounded-sm p-5 hover:border-[#3F72AF]/40 hover:shadow-md transition-all group">
              <Icon size={22} className="text-[#3F72AF] mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold font-serif text-base mb-2 text-[#112D4E]">{title}</h3>
              <p className="text-xs text-[#112D4E]/60 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Info blocks */}
      <div className="max-w-5xl mx-auto px-6 mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'How It Works', body: 'Fill out the form below. We review your profile and add it to our network. When a matching project arrives, we contact you. If you accept, we onboard you, provide guidelines, and you begin. No obligation to accept every project.' },
          { title: 'What We Look For', body: 'Native-level fluency in at least one language. Attention to detail. Ability to follow guidelines carefully. Reliability in meeting deadlines. For voice projects, access to a quiet recording space.' },
          { title: 'Apply Below', body: 'We review every application. If your profile matches a current or upcoming project, we contact you directly. If there is no immediate match, your profile stays in our network.' },
        ].map(({ title, body }) => (
          <div key={title} className="bg-[#112D4E] rounded-sm p-6 text-[#F9F7F7]">
            <h3 className="font-serif text-lg font-bold mb-3 text-[#DBE2EF]">{title}</h3>
            <p className="text-sm text-[#F9F7F7]/70 leading-relaxed font-light">{body}</p>
          </div>
        ))}
      </div>

      {/* Multi-step form */}
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-serif mb-2 text-[#112D4E]">Application Form</h2>
        <p className="text-sm text-[#112D4E]/60 mb-8 font-light">The form has three sections. Fill them out one at a time.</p>

        {/* Step indicator */}
        <div className="flex items-center gap-0 mb-10">
          {SECTIONS.map((s, i) => (
            <React.Fragment key={s}>
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-all ${i <= step ? 'bg-[#112D4E] text-[#F9F7F7]' : 'bg-[#DBE2EF] text-[#112D4E]/40'}`}>
                  {i < step ? <Icons.Check size={14} /> : i + 1}
                </div>
                <span className={`text-[9px] mt-1.5 font-mono uppercase tracking-wider whitespace-nowrap ${i <= step ? 'text-[#3F72AF]' : 'text-[#112D4E]/30'}`}>{s}</span>
              </div>
              {i < SECTIONS.length - 1 && (
                <div className={`h-px flex-1 mx-3 transition-all ${i < step ? 'bg-[#3F72AF]' : 'bg-[#DBE2EF]'}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          onKeyDown={(e) => {
            // Prevent Enter key from accidentally submitting the form on steps 0 and 1.
            // Allow Enter inside <textarea> so users can write multi-line text normally.
            if (
              e.key === 'Enter' &&
              (e.target as HTMLElement).tagName !== 'TEXTAREA' &&
              step < 2
            ) {
              e.preventDefault();
            }
          }}
        >
          <div className="bg-[#F9F7F7] border border-[#DBE2EF] rounded-sm p-8 shadow-sm">
            <AnimatePresence mode="wait">
              {/* SECTION 1 */}
              {step === 0 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="space-y-5">
                  <h3 className="font-serif text-xl font-bold text-[#112D4E] mb-6 pb-3 border-b border-[#DBE2EF]">Personal Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div><label className={labelCls}>Full Name *</label><input required className={inputCls} value={form.fullName} onChange={e => set('fullName', e.target.value)} placeholder="Your full name" /></div>
                    <div><label className={labelCls}>Email Address *</label><input required type="email" className={inputCls} value={form.email} onChange={e => set('email', e.target.value)} placeholder="your@email.com" /></div>
                    <div><label className={labelCls}>Phone Number (with country code) *</label><input required className={inputCls} value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+91 9876543210" /></div>
                    <div><label className={labelCls}>Country *</label><input required className={inputCls} value={form.country} onChange={e => set('country', e.target.value)} placeholder="India" /></div>
                    <div><label className={labelCls}>City *</label><input required className={inputCls} value={form.city} onChange={e => set('city', e.target.value)} placeholder="Hyderabad" /></div>
                    <div>
                      <label className={labelCls}>Gender</label>
                      <select className={selectCls} value={form.gender} onChange={e => set('gender', e.target.value)}>
                        <option value="">Prefer not to say</option>
                        <option>Male</option><option>Female</option><option>Prefer not to say</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className={labelCls}>Age Range *</label>
                      <select required className={selectCls} value={form.ageRange} onChange={e => set('ageRange', e.target.value)}>
                        <option value="">Select age range</option>
                        <option>18-24</option><option>25-34</option><option>35-44</option><option>45-54</option><option>55+</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* SECTION 2 */}
              {step === 1 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="space-y-5">
                  <h3 className="font-serif text-xl font-bold text-[#112D4E] mb-6 pb-3 border-b border-[#DBE2EF]">Language Proficiency</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div><label className={labelCls}>Native Language *</label><input required className={inputCls} value={form.nativeLanguage} onChange={e => set('nativeLanguage', e.target.value)} placeholder="e.g. Hindi" /></div>
                    <div><label className={labelCls}>Native Dialect or Accent</label><input className={inputCls} value={form.nativeDialect} onChange={e => set('nativeDialect', e.target.value)} placeholder="e.g. Hyderabadi Hindi" /></div>
                    <div className="md:col-span-2"><label className={labelCls}>Additional Languages *</label><input required className={inputCls} value={form.additionalLanguages} onChange={e => set('additionalLanguages', e.target.value)} placeholder="Comma separated, e.g. English, Telugu" /></div>
                    <div className="md:col-span-2"><label className={labelCls}>Proficiency in Additional Languages *</label><textarea required rows={3} className={inputCls} value={form.proficiencyAdditional} onChange={e => set('proficiencyAdditional', e.target.value)} placeholder="Describe your level (beginner, conversational, fluent, native) for each additional language listed..." /></div>
                    <div>
                      <label className={labelCls}>Read and Write in Native Language *</label>
                      <select required className={selectCls} value={form.readWriteNative} onChange={e => set('readWriteNative', e.target.value)}>
                        <option value="">Select</option>
                        <option>Yes, both read and write</option><option>Read only</option><option>Write only</option><option>Spoken only</option>
                      </select>
                    </div>
                    <div><label className={labelCls}>Read/Write in Additional Languages</label><textarea rows={3} className={inputCls} value={form.readWriteAdditional} onChange={e => set('readWriteAdditional', e.target.value)} placeholder="Describe reading/writing ability for each additional language..." /></div>
                  </div>
                </motion.div>
              )}

              {/* SECTION 3 */}
              {step === 2 && (
                <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="space-y-5">
                  <h3 className="font-serif text-xl font-bold text-[#112D4E] mb-6 pb-3 border-b border-[#DBE2EF]">Experience & Availability</h3>
                  <div>
                    <label className={labelCls}>Type of Work Interested In *</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                      {WORK_TYPES.map(type => (
                        <label key={type} className={`flex items-center gap-2 px-3 py-2.5 rounded-sm border cursor-pointer text-xs font-medium transition-all select-none ${form.workTypes.includes(type) ? 'bg-[#112D4E] border-[#112D4E] text-[#F9F7F7]' : 'border-[#DBE2EF] text-[#112D4E]/60 hover:border-[#3F72AF]'}`}>
                          <input type="checkbox" className="sr-only" checked={form.workTypes.includes(type)} onChange={() => toggleWorkType(type)} />
                          {form.workTypes.includes(type) ? <Icons.CheckSquare size={12} /> : <Icons.Square size={12} />}
                          {type}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Previous Experience *</label>
                      <select required className={selectCls} value={form.previousExperience} onChange={e => set('previousExperience', e.target.value)}>
                        <option value="">Select</option>
                        <option>Yes, professional</option><option>Yes, informal or freelance</option><option>No, but willing to learn</option>
                      </select>
                    </div>
                    <div><label className={labelCls}>Platforms Worked With</label><input className={inputCls} value={form.platformsWorked} onChange={e => set('platformsWorked', e.target.value)} placeholder="e.g. Appen, Scale AI, Upwork" /></div>
                    <div className="md:col-span-2"><label className={labelCls}>Describe Your Experience</label><textarea rows={3} className={inputCls} value={form.experienceDescription} onChange={e => set('experienceDescription', e.target.value)} placeholder="Describe relevant experience, projects, and skills..." /></div>
                    <div>
                      <label className={labelCls}>Hours Available Per Week *</label>
                      <select required className={selectCls} value={form.hoursPerWeek} onChange={e => set('hoursPerWeek', e.target.value)}>
                        <option value="">Select</option>
                        <option>Under 10</option><option>10-20</option><option>20-30</option><option>30-40</option><option>40+</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>Quiet Environment for Recording *</label>
                      <select required className={selectCls} value={form.quietEnvironment} onChange={e => set('quietEnvironment', e.target.value)}>
                        <option value="">Select</option>
                        <option>Yes</option><option>Mostly quiet</option><option>Noisy</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>Microphone or Recording Device *</label>
                      <select required className={selectCls} value={form.microphone} onChange={e => set('microphone', e.target.value)}>
                        <option value="">Select</option>
                        <option>Professional mic</option><option>Headset mic</option><option>Phone only</option><option>None</option>
                      </select>
                    </div>
                    <div><label className={labelCls}>Portfolio or Sample Work Link</label><input className={inputCls} value={form.portfolioLink} onChange={e => set('portfolioLink', e.target.value)} placeholder="https://" /></div>
                    <div className="md:col-span-2">
                      <label className={labelCls}>How Did You Hear About Us</label>
                      <select className={selectCls} value={form.howDidYouHear} onChange={e => set('howDidYouHear', e.target.value)}>
                        <option value="">Select</option>
                        <option>Google</option><option>LinkedIn</option><option>Social Media</option><option>Referral</option><option>Job Board</option><option>Other</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-6">
            {step > 0 ? (
              <button type="button" onClick={() => setStep(s => s - 1)} className="flex items-center gap-2 px-6 py-3 border border-[#DBE2EF] text-[#112D4E] text-xs font-mono uppercase tracking-widest hover:border-[#3F72AF] hover:text-[#3F72AF] transition-all rounded-sm">
                <Icons.ArrowLeft size={14} /> Back
              </button>
            ) : (
              <button type="button" onClick={() => window.location.hash = ''} className="flex items-center gap-2 px-6 py-3 border border-[#DBE2EF] text-[#112D4E]/50 text-xs font-mono uppercase tracking-widest hover:border-[#3F72AF] transition-all rounded-sm">
                <Icons.ArrowLeft size={14} /> Home
              </button>
            )}
            {step < 2 ? (
              <button type="button" onClick={() => setStep(s => s + 1)} className="flex items-center gap-2 px-8 py-3 bg-[#112D4E] text-[#F9F7F7] text-xs font-mono uppercase tracking-widest hover:bg-[#3F72AF] transition-all rounded-sm shadow-lg">
                Next <Icons.ArrowRight size={14} />
              </button>
            ) : (
              <button type="submit" disabled={loading} className="flex items-center gap-2 px-8 py-3 bg-[#112D4E] text-[#F9F7F7] text-xs font-mono uppercase tracking-widest hover:bg-[#3F72AF] disabled:opacity-60 transition-all rounded-sm shadow-lg">
                {loading ? <Icons.Loader2 size={14} className="animate-spin" /> : <Icons.Send size={14} />}
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
