/**
 * Meridian AI — Proprietary Source Code
 * © 2026 Meridian AI Systems. All rights reserved.
 * Unauthorized copying, reproduction, distribution, or reuse of this
 * codebase or any connected services is strictly prohibited.
 * Internal systems, workflows, and implementation details are private.
 */

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MagicText } from '../components/ui/magic-text';
import Forms from '../components/Forms';
import * as Icons from 'lucide-react';

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F7F7] text-[#112D4E] pt-32 pb-24 px-6 md:px-12 lg:px-24 font-light">
      <div className="max-w-4xl mx-auto">

        <MagicText 
            text="Submit a Project"
            className="mt-6 mb-12 text-5xl md:text-7xl font-serif text-[#112D4E]"
        />

        <div className="prose prose-lg max-w-none text-[#112D4E] leading-relaxed mb-24">
          <p className="text-xl md:text-2xl font-serif mb-8 text-[#3F72AF] font-medium">
            You have a project that needs to get done. We are here to handle it. Whether you need voice data collected in specific languages, thousands of hours of audio transcribed, content translated by native professionals, datasets annotated for machine learning, or a complete workflow automated with an intelligent agent, we take the project off your hands and deliver finished work on your timeline.
          </p>

          <p className="mb-16">
            Tell us what you need using the form below. Include as much detail as you can about the scope, languages, volume, quality expectations, and deadlines. We will review your requirements and send you a detailed proposal with pricing, process breakdown, and delivery schedule within 24 hours of receiving your submission.
          </p>

          <div className="bg-[#112D4E] text-[#F9F7F7] p-8 md:p-12 rounded-sm mb-16 shadow-2xl">
            <h2 className="text-3xl font-serif mb-6 text-[#DBE2EF]">What Happens After You Submit</h2>
            <p className="mb-6 opacity-90">
              Once we receive your project details, here is exactly what follows.
            </p>
            <p className="opacity-90 leading-relaxed font-light">
              We review your requirements internally and assess the scope, languages, and complexity involved. Within 24 hours we send you a written proposal that covers our approach, the team structure we will assign, pricing, milestones, and the delivery timeline. If the project scope is large or has specific technical requirements, we may ask a few clarifying questions before finalizing the proposal. Once you approve, we begin immediately. We assign a dedicated project manager to your account who becomes your single point of contact throughout the engagement. You do not coordinate with multiple people. You speak to one person who manages everything on our side.
            </p>
          </div>

          <h2 className="text-3xl font-serif mt-16 mb-6">How We Execute Your Project</h2>
          <p className="mb-6">
            You send us the project brief with your guidelines, quality standards, and deadlines. We recruit and train a dedicated team specifically for your project based on your exact specifications. Every team member is briefed on your instructions before they begin any work. We manage the daily operations internally. Task assignment, progress tracking, quality monitoring, and deadline management are all handled by us. Before anything is delivered to you, our internal review team checks every file against your quality standards. You receive finished, reviewed, ready-to-use deliverables on schedule.
          </p>
          <p className="mb-16 font-medium italic border-l-4 border-[#3F72AF] pl-6 text-xl text-[#3F72AF]">
            You do not manage our team. You do not chase deadlines. You do not fix errors. That is our job. We own the process from start to finish and take full responsibility for the output.
          </p>

          <h2 className="text-4xl font-serif mt-20 mb-10 text-[#3F72AF]">What We Handle</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-xl font-bold mb-4 font-serif">Voice and Speech Data Collection</h3>
              <p className="text-sm opacity-80">
                We collect natural, high-quality voice recordings from carefully selected native speakers. Every speaker is chosen based on age, region, accent, dialect, and fluency to match your target profile. Recordings are captured with professional equipment in controlled environments. The result is clean, natural audio with no background noise, no distortion, and no robotic delivery. We have direct access to a large pool of native speakers across Indian languages including Hindi, Tamil, Telugu, Bengali, Marathi, and Kannada, along with strong bilingual talent for English, Thai, Mandarin, and other Asian and European languages.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 font-serif">Transcription</h3>
              <p className="text-sm opacity-80">
                Every file is transcribed by trained human transcribers who understand context, accents, overlapping speech, and spontaneous conversation. We deliver clean, formatted transcripts with timestamps, speaker labels, and punctuation at 99 percent accuracy or above. We do not run automated tools and call it done. Every transcript goes through human review before it reaches you.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 font-serif">Translation</h3>
              <p className="text-sm opacity-80">
                Our translators are native speakers of the target language. They do not just convert words from one language to another. They understand cultural context, tone, idioms, and how real people communicate. We maintain consistency across large datasets using glossaries and style guides provided by you or developed by our team. We cover 50 plus languages with strong depth in Southeast Asian, South Asian, and European language pairs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 font-serif">Data Annotation and Labeling</h3>
              <p className="text-sm opacity-80">
                We annotate text, audio, image, and video data for machine learning training. Our annotation team is trained on your specific guidelines and schemas before any work begins. We handle text classification, entity recognition, sentiment tagging, audio segmentation, speaker identification, image bounding boxes, object labeling, and custom annotation tasks designed around your model requirements.
              </p>
            </div>

            <div className="md:col-span-2 bg-slate-50 p-8 border border-slate-200">
              <h3 className="text-2xl font-bold mb-4 font-serif text-[#3F72AF]">AI Automation</h3>
              <p className="text-sm opacity-80">
                We design and deploy autonomous agents that replace complete manual workflows in your business. Customer support agents that resolve tickets without human involvement. Lead management systems that capture, qualify, and follow up automatically. Data processing pipelines that move and transform information between your tools. Scheduling, reporting, invoicing, onboarding, and back-office workflows that run on their own around the clock. These are not basic chatbots. These are full operational systems built to handle real work independently.
              </p>
            </div>
          </div>

          <div className="bg-[#f8f9fa] p-8 md:p-12 rounded-sm mb-16 border border-[#e5e7eb] shadow-sm">
            <h2 className="text-3xl font-serif mt-0 mb-8">Why Teams Trust Us With Their Projects</h2>
            <ul className="space-y-6 text-base opacity-80">
              <li className="flex gap-4">
                <span className="text-[#3F72AF]">✓</span>
                <span>We deliver training-ready data that meets your quality threshold. Every file, every recording, every transcript, and every annotation is checked before delivery.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#3F72AF]">✓</span>
                <span>We select native speakers based on your exact requirements. No generic voice pools. No synthetic audio. Real people who speak the language naturally.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#3F72AF]">✓</span>
                <span>We operate from India with access to a large, diverse, multilingual talent base at cost-effective rates with clear English communication at every level.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#3F72AF]">✓</span>
                <span>We deliver on time because we understand that data loses value when it arrives late. We plan capacity ahead, communicate clearly, and meet every deadline we commit to.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#3F72AF]">✓</span>
                <span>We assign one project manager to your account. One person who knows your project inside out and responds to you directly. No ticket systems. No automated replies. A real person who is accountable.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#3F72AF]">✓</span>
                <span>We are familiar with AI training projects across Southeast Asia, South Asia, and global markets. We understand what AI companies need because that is who we work with every day.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-serif mt-16 mb-4">Start With a Pilot</h2>
          <p className="mb-24">
            If you are working with us for the first time, we recommend starting with a small pilot project. Send us a limited batch, whether that is 30 minutes of audio, a few hundred lines for transcription, a translation sample, or one workflow you want automated. We will complete it at an agreed rate so you can evaluate our quality, turnaround time, communication, and attention to your guidelines before committing to a larger engagement. No long-term contracts required upfront. Prove it first, then scale.
          </p>
        </div>

        {/* SUBMISSION FORM SECTION */}
        <div id="submit" className="border-t border-[#112D4E]/10 pt-20">
            <div className="text-center mb-6">
                <h2 className="text-4xl md:text-5xl font-serif text-[#112D4E]">Submit Your Project Below</h2>
            </div>
            <p className="text-center opacity-70 mb-12 max-w-2xl mx-auto">
                Fill out the form with your project details. The more information you provide about the scope, languages, volume, and quality expectations, the more accurate and useful our proposal will be. We respond to every submission within 24 hours.
            </p>
            <Forms />
        </div>

        {/* DIRECT CONTACT OPTIONS */}
        <div className="mt-24 pt-12 border-t border-[#112D4E]/10 flex flex-col md:flex-row items-center justify-center gap-6">
            <h3 className="font-mono uppercase tracking-widest text-xs font-bold text-[#3F72AF]">Direct Inquiry:</h3>
            <div className="flex gap-4">
                <a href="mailto:contact@meridian-ai.com" className="flex items-center gap-2 px-6 py-3 bg-[#112D4E] text-[#F9F7F7] rounded-md hover:bg-[#3F72AF] transition-colors">
                    <Icons.Mail size={16} />
                    <span className="text-sm font-semibold tracking-wide">Email Us</span>
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-[#F9F7F7] rounded-md hover:bg-[#128C7E] transition-colors">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
                    <span className="text-sm font-semibold tracking-wide">WhatsApp</span>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}
