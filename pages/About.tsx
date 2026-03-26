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

export default function About() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#about-')) {
      const section = hash.replace('#about-', '');
      setOpenSection(section);
      setTimeout(() => {
        document.getElementById('legal-policies')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F7F7] text-[#112D4E] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto font-light leading-relaxed">
        



        <MagicText 
            text="About Meridian AI"
            className="mt-6 mb-16 text-5xl md:text-7xl font-serif text-[#112D4E]"
        />

        {/* WHO WE ARE */}
        <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-[#3F72AF]">Who We Are</h2>
            <div className="space-y-6 text-lg">
                <p>Meridian AI is a language data and AI automation agency based in India. We provide voice data collection, transcription, translation, data annotation, and AI automation services to companies that are building and training artificial intelligence systems. We operate as a managed vendor, which means when a client hires us, they are not hiring individual freelancers. They are hiring a complete operation with trained teams, internal quality control, project management, and guaranteed delivery timelines.</p>
                <p>We were founded by Syed Rouf with a specific focus on delivering high-quality, training-ready data for AI companies and providing intelligent automation solutions for businesses that want to replace repetitive manual workflows with autonomous systems.</p>
                <p>Our clients include AI research teams, machine learning companies, language technology firms, and businesses across industries that need reliable data services or workflow automation. We work with organizations across Southeast Asia, South Asia, Europe, and North America.</p>
            </div>
        </section>

        {/* CORE SERVICES */}
        <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif mb-10 text-[#3F72AF]">What We Do — Our Core Services</h2>
            <p className="text-lg mb-12">Meridian AI offers six core services. Each one is designed to be delivered as a fully managed operation where we handle everything from team recruitment and training to quality review and final delivery.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                <div>
                   <h3 className="text-xl font-bold font-serif mb-4 flex items-center gap-3">
                      <Icons.Mic size={20} className="text-[#3F72AF]" />
                      Voice and Speech Data Collection
                   </h3>
                   <p className="text-sm opacity-80">We collect natural, high-quality voice recordings from native speakers for AI training purposes. Every speaker is selected based on specific criteria including age, gender, region, accent, dialect, and fluency level. Recordings are captured using professional-grade microphones in controlled environments to produce clean audio with no background noise or distortion. We specialize in natural conversational speech, not scripted or robotic reading. Our speaker pool covers Indian languages including Hindi, Tamil, Telugu, Bengali, Marathi, Kannada, Malayalam, Gujarati, Punjabi, and Urdu, along with English, Thai, Mandarin, and other Asian and European languages. Being based in India gives us direct access to one of the most linguistically diverse talent pools in the world.</p>
                </div>
                <div>
                   <h3 className="text-xl font-bold font-serif mb-4 flex items-center gap-3">
                      <Icons.Type size={20} className="text-[#3F72AF]" />
                      Transcription
                   </h3>
                   <p className="text-sm opacity-80">We provide human-powered transcription with 99 percent accuracy or above. Every audio and video file is transcribed by trained professionals who understand context, accents, overlapping speech, mumbled words, and spontaneous conversation. We deliver clean, formatted output with timestamps, speaker labels, and punctuation. We do not rely on automated transcription tools. Every file is transcribed by a human and reviewed by a second person before delivery. We handle files in multiple languages and accents across short-form and long-form content.</p>
                </div>
                <div>
                   <h3 className="text-xl font-bold font-serif mb-4 flex items-center gap-3">
                      <Icons.Globe size={20} className="text-[#3F72AF]" />
                      Translation and Localization
                   </h3>
                   <p className="text-sm opacity-80">Our translation work is done by native speakers of the target language who understand cultural context, idiomatic expressions, and natural phrasing. We do not produce word-for-word translations. We produce translations that sound like they were originally written in the target language. We maintain consistency across large datasets using client-provided glossaries and style guides, or we develop them in-house when needed. We cover more than 50 languages with particular strength in Southeast Asian, South Asian, and European language pairs. Our localization work goes beyond translation to adapt content for specific regional audiences, ensuring cultural accuracy and natural readability.</p>
                </div>
                <div>
                   <h3 className="text-xl font-bold font-serif mb-4 flex items-center gap-3">
                      <Icons.Tag size={20} className="text-[#3F72AF]" />
                      Data Annotation and Labeling
                   </h3>
                   <p className="text-sm opacity-80">We annotate and label text, audio, image, and video data for machine learning model training. Our annotation team is trained on each client's specific guidelines and quality standards before beginning any work. We handle text classification, named entity recognition, sentiment analysis, intent labeling, audio segmentation, speaker diarization, image bounding boxes, polygon annotation, object detection labeling, and custom annotation schemas. Every annotation task goes through internal quality review before delivery to ensure consistency and accuracy across the entire dataset.</p>
                </div>
                <div>
                   <h3 className="text-xl font-bold font-serif mb-4 flex items-center gap-3">
                      <Icons.Cpu size={20} className="text-[#3F72AF]" />
                      AI Automation and Autonomous Agents
                   </h3>
                   <p className="text-sm opacity-80">We design and deploy intelligent automation systems that replace complete manual workflows. These are not simple chatbots or basic rule-based scripts. We build autonomous agents that receive triggers, process information, make decisions based on defined rules, and execute tasks from start to finish without human supervision. Our agents handle customer support, lead capture and qualification, email management, invoice generation and payment tracking, recruitment pipeline management, appointment scheduling, social media monitoring, report generation, client onboarding, and custom operational workflows. These systems run around the clock and handle multiple tasks simultaneously without errors, delays, or fatigue.</p>
                </div>
                <div>
                   <h3 className="text-xl font-bold font-serif mb-4 flex items-center gap-3">
                      <Icons.Subtitles size={20} className="text-[#3F72AF]" />
                      Subtitling and Captioning
                   </h3>
                   <p className="text-sm opacity-80">We produce timed, accurate subtitles and closed captions for video content in multiple languages. Our subtitling work includes proper timing synchronization, reading speed optimization, line break formatting, and cultural adaptation for international audiences.</p>
                </div>
            </div>
        </section>

        {/* HOW WE WORK */}
        <section className="mb-20 bg-[#112D4E] text-[#F9F7F7] p-8 md:p-12 rounded-sm shadow-xl">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-[#DBE2EF]">How We Work — Our Operating Model</h2>
            <p className="mb-8 opacity-90 text-lg">When a client submits a project to Meridian AI, the following process begins.</p>
            <ul className="space-y-6 opacity-80">
                <li className="flex gap-4"><span className="text-[#DBE2EF] font-bold">1.</span> We review the project requirements, scope, languages, volume, quality standards, and deadlines. We send the client a detailed written proposal within 24 hours that includes our approach, team structure, pricing, and delivery timeline.</li>
                <li className="flex gap-4"><span className="text-[#DBE2EF] font-bold">2.</span> Once approved, we assign a dedicated project manager to the account. This person becomes the client's single point of contact for the entire engagement. The client communicates with one person who manages everything internally.</li>
                <li className="flex gap-4"><span className="text-[#DBE2EF] font-bold">3.</span> We recruit and train a team specifically for that project. Every team member is briefed on the client's exact guidelines, quality expectations, and delivery format before any work begins. We do not assign generic workers to specialized projects. We match the right people to the right work.</li>
                <li className="flex gap-4"><span className="text-[#DBE2EF] font-bold">4.</span> During execution, we manage all daily operations. Task assignment, progress tracking, deadline management, and issue resolution are handled internally. The client does not manage our workforce.</li>
                <li className="flex gap-4"><span className="text-[#DBE2EF] font-bold">5.</span> Before any deliverable leaves our hands, it passes through our internal quality review process. We check every file, every annotation, every transcript, and every recording against the client's standards. Only reviewed and approved work is delivered.</li>
                <li className="flex gap-4"><span className="text-[#DBE2EF] font-bold">6.</span> We deliver on schedule because we plan capacity ahead of time. We understand that AI training data has a limited useful window. Late data delays model training, pushes back product timelines, and costs our clients money. We treat deadlines as commitments, not targets.</li>
            </ul>
        </section>

        {/* WHAT MAKES US DIFFERENT */}
        <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif mb-12 text-[#3F72AF]">What Makes Meridian AI Different</h2>
            <div className="space-y-10">
                <div className="border-l-2 border-[#3F72AF]/30 pl-6 hover:border-[#3F72AF] transition-colors">
                    <h3 className="font-bold text-xl mb-3 font-serif">We are a managed operation, not a marketplace.</h3>
                    <p className="opacity-80">When you work with Meridian AI, you are not posting tasks on a platform and hoping qualified people pick them up. You are hiring a structured team with a project manager, trained workers, and a quality control layer. We take full ownership of the project from start to delivery.</p>
                </div>
                <div className="border-l-2 border-[#3F72AF]/30 pl-6 hover:border-[#3F72AF] transition-colors">
                    <h3 className="font-bold text-xl mb-3 font-serif">We recruit and train specifically for each project.</h3>
                    <p className="opacity-80">We do not assign the same generic pool of workers to every project. When we receive a new engagement, we assess the requirements and build a team around them. If a project needs native Thai speakers between the ages of 25 and 40 with clear pronunciation and a quiet recording environment, that is exactly who we find, verify, train, and assign.</p>
                </div>
                <div className="border-l-2 border-[#3F72AF]/30 pl-6 hover:border-[#3F72AF] transition-colors">
                    <h3 className="font-bold text-xl mb-3 font-serif">We deliver training-ready output, not raw work.</h3>
                    <p className="opacity-80">Every deliverable from Meridian AI has already been through internal quality checks. Transcripts are reviewed for accuracy. Voice recordings are checked for audio quality, naturalness, and compliance with recording guidelines. Annotations are verified for consistency. Clients receive work that is ready to feed directly into their training pipelines without additional cleaning or correction.</p>
                </div>
                <div className="border-l-2 border-[#3F72AF]/30 pl-6 hover:border-[#3F72AF] transition-colors">
                    <h3 className="font-bold text-xl mb-3 font-serif">We understand AI training requirements.</h3>
                    <p className="opacity-80">We work with AI companies regularly. We understand concepts like inter-annotator agreement, speaker diversity requirements, recording environment specifications, annotation schema consistency, and the importance of balanced datasets. We do not need clients to explain the basics of what they are building. We already understand the domain.</p>
                </div>
                <div className="border-l-2 border-[#3F72AF]/30 pl-6 hover:border-[#3F72AF] transition-colors">
                    <h3 className="font-bold text-xl mb-3 font-serif">We operate from India with cost-effective rates and strong English communication.</h3>
                    <p className="opacity-80">India offers one of the largest and most linguistically diverse talent pools in the world. We leverage this advantage to provide high-quality work at rates that allow our clients to scale their data collection and processing without exceeding their budgets. Our project management and client communication is conducted in fluent English.</p>
                </div>
                <div className="border-l-2 border-[#3F72AF]/30 pl-6 hover:border-[#3F72AF] transition-colors">
                    <h3 className="font-bold text-xl mb-3 font-serif">We are familiar with Asian language projects.</h3>
                    <p className="opacity-80">We have experience working on projects involving Thai, Mandarin, Hindi, Tamil, Telugu, Bengali, Malay, Vietnamese, Japanese, Korean, and other Asian languages. We understand the linguistic and cultural considerations involved in collecting and processing data in these languages.</p>
                </div>
            </div>
        </section>

        {/* WHO WE WORK WITH & WHERE WE OPERATE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 bg-slate-50 p-8 md:p-12 border border-slate-100 rounded-sm">
            <section>
                <h2 className="text-2xl font-serif mb-6 text-[#3F72AF]">Who We Work With</h2>
                <ul className="space-y-4 opacity-80 text-sm list-disc pl-4 marker:text-[#3F72AF]">
                    <li>AI research laboratories and teams that need large volumes of labeled, annotated, or recorded data for training and evaluating machine learning models.</li>
                    <li>Speech technology companies building voice assistants, speech recognition systems, text-to-speech engines, and conversational AI platforms.</li>
                    <li>Language technology firms developing translation engines, natural language processing tools, and multilingual content systems.</li>
                    <li>Enterprise companies that need workflow automation to reduce manual operational overhead in departments like customer support, sales, finance, human resources, and operations.</li>
                    <li>Startups and growing businesses that need professional language services or automation solutions but do not have the internal team to build and manage these functions.</li>
                    <li>Agencies and service providers who need a reliable subcontractor to handle language data projects on behalf of their own clients.</li>
                </ul>
            </section>
            
            <section>
                <h2 className="text-2xl font-serif mb-6 text-[#3F72AF]">Where We Operate</h2>
                <div className="space-y-4 opacity-80 text-sm">
                    <p>Meridian AI is headquartered in India. We serve clients globally with particular focus on organizations in Southeast Asia, South Asia, East Asia, Europe, and North America.</p>
                    <p>Our speaker and linguist network spans across India and extends to talent in Thailand, the Philippines, Malaysia, Indonesia, Vietnam, Japan, South Korea, China, and multiple European and Middle Eastern countries.</p>
                    <p>All client communication, project management, proposals, and reporting are conducted in English. We operate across time zones and accommodate scheduling needs of international clients.</p>
                </div>

                <h2 className="text-2xl font-serif mt-10 mb-6 text-[#3F72AF]">Data Security & Confidentiality</h2>
                <div className="space-y-4 opacity-80 text-sm">
                    <p>All client projects are handled under strict confidentiality. We sign non-disclosure agreements before beginning any engagement. Our team members are individually bound by confidentiality terms that prohibit sharing, copying, or retaining any client data outside of the project environment.</p>
                    <p>We follow data handling practices aligned with GDPR and international data protection principles. Client data is stored securely, accessed only by authorized team members, and deleted or returned upon project completion as per the client's instructions.</p>
                </div>
            </section>
        </div>

        {/* START WORKING */}
        <section className="mb-24 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[#3F72AF]">Start Working With Meridian AI</h2>
            <p className="text-lg opacity-80 mb-8">
                If you have a project that needs voice data, transcription, translation, annotation, or automation, submit your project details through our project submission page. We review every submission and respond with a detailed proposal within 24 hours.
            </p>
            <p className="text-lg opacity-80 mb-10">
                If you prefer to start with a small test before committing to a larger engagement, we welcome pilot projects. Send us a limited batch and evaluate our quality, communication, and delivery speed firsthand.
            </p>
            <p className="text-xl font-bold font-serif italic text-[#112D4E] tracking-wide mb-10">
                Meridian AI. The reference point for AI training data.
            </p>
            <button 
                onClick={() => window.location.hash = '#contact'}
                className="inline-block px-10 py-5 bg-[#112D4E] text-[#F9F7F7] uppercase text-xs font-mono tracking-[0.2em] hover:bg-[#3F72AF] hover:-translate-y-1 transition-all rounded-sm shadow-xl font-bold border border-transparent hover:border-[#DBE2EF]"
            >
                Submit a Project
            </button>
        </section>

        {/* FAQ */}
        <section className="border-t border-[#112D4E]/10 pt-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-12 text-[#3F72AF] text-center">Frequently Asked Questions</h2>
            <div className="space-y-8 max-w-4xl mx-auto">
                <div>
                   <h3 className="font-bold text-lg mb-2 font-serif text-[#112D4E]">What types of projects does Meridian AI handle?</h3>
                   <p className="opacity-80 text-sm leading-relaxed text-[#112D4E]">We handle voice and speech data collection, transcription, translation, localization, data annotation, data labeling, subtitling, captioning, and AI workflow automation. We serve clients who are training AI models, building language technology products, or looking to automate business operations.</p>
                </div>
                <div>
                   <h3 className="font-bold text-lg mb-2 font-serif text-[#112D4E]">What languages does Meridian AI support?</h3>
                   <p className="opacity-80 text-sm leading-relaxed text-[#112D4E]">We support more than 50 languages. Our strongest coverage is in Indian languages (Hindi, Tamil, Telugu, Bengali, Marathi, Kannada, Malayalam, Gujarati, Punjabi, Urdu), Southeast Asian languages (Thai, Malay, Vietnamese, Indonesian, Filipino), East Asian languages (Mandarin, Japanese, Korean), and major European languages (English, Spanish, French, German, Portuguese, Italian, Dutch).</p>
                </div>
                <div>
                   <h3 className="font-bold text-lg mb-2 font-serif text-[#112D4E]">Where is Meridian AI based?</h3>
                   <p className="opacity-80 text-sm leading-relaxed text-[#112D4E]">Meridian AI is based in India and serves clients globally. Our team and speaker network operates across multiple countries in Asia, Europe, and the Middle East.</p>
                </div>
                <div>
                   <h3 className="font-bold text-lg mb-2 font-serif text-[#112D4E]">How does Meridian AI ensure quality?</h3>
                   <p className="opacity-80 text-sm leading-relaxed text-[#112D4E]">Every project goes through internal quality review before delivery. We train our teams on client-specific guidelines, monitor work during execution, and review all output against quality benchmarks before submitting to the client. For transcription we maintain 99 percent or higher accuracy. For voice data we verify audio quality, speaker naturalness, and recording compliance. For annotations we check consistency and guideline adherence across the full dataset.</p>
                </div>
                <div>
                   <h3 className="font-bold text-lg mb-2 font-serif text-[#112D4E]">Can I start with a small pilot project?</h3>
                   <p className="opacity-80 text-sm leading-relaxed text-[#112D4E]">Yes. We encourage new clients to start with a pilot. Send us a limited batch of work and we will complete it so you can evaluate our output quality, turnaround time, and communication before scaling up.</p>
                </div>
                <div>
                   <h3 className="font-bold text-lg mb-2 font-serif text-[#112D4E]">How quickly does Meridian AI deliver?</h3>
                   <p className="opacity-80 text-sm leading-relaxed text-[#112D4E]">We send a written proposal within 24 hours of receiving a project submission. Delivery timelines depend on project scope and volume, but we plan capacity in advance and commit to the deadlines we agree upon. We understand that late data delays AI training cycles and we treat every deadline as a hard commitment.</p>
                </div>
                <div>
                   <h3 className="font-bold text-lg mb-2 font-serif text-[#112D4E]">Does Meridian AI sign NDAs?</h3>
                   <p className="opacity-80 text-sm leading-relaxed text-[#112D4E]">Yes. We sign non-disclosure agreements before beginning any project. All team members working on client projects are individually bound by confidentiality terms.</p>
                </div>
                <div>
                   <h3 className="font-bold text-lg mb-2 font-serif text-[#112D4E]">How do I submit a project to Meridian AI?</h3>
                   <p className="opacity-80 text-sm leading-relaxed text-[#112D4E]">Visit our Submit a Project page, fill in your project details including scope, languages, volume, and quality requirements, and submit the form. We will respond with a proposal within 24 hours.</p>
                </div>
                <div>
                   <h3 className="font-bold text-lg mb-2 font-serif text-[#112D4E]">Who founded Meridian AI?</h3>
                   <p className="opacity-80 text-sm leading-relaxed text-[#112D4E]">Meridian AI was founded by Syed Rouf, a specialist in AI data services and workflow automation. The agency was built to provide managed, high-quality language data and automation solutions to AI companies and businesses worldwide.</p>
                </div>
            </div>
        </section>

        {/* LEGAL ACCORDION DATA */}
        <section id="legal-policies" className="border-t border-[#112D4E]/10 pt-16 mt-16 scroll-mt-32">
            <h2 className="text-3xl md:text-4xl font-serif mb-12 text-[#3F72AF] text-center">Legal & Policies</h2>
            <div className="max-w-5xl mx-auto border border-[#112D4E]/10 rounded-sm divide-y divide-[#112D4E]/10 overflow-hidden shadow-sm">
                {[
                  {
                    id: 'privacy', title: 'Privacy Policy',
                    content: (
                      <div className="space-y-6">
                        <p className="italic text-sm opacity-60">Last updated: March 26, 2026</p>
                        <p>Meridian AI operates the website meridianai.com. This page explains what information we collect from visitors and clients, how we use it, and how we protect it.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">What Information We Collect</h3>
                        <p>When you submit a project through our website, we collect the information you provide in the form. This includes your name, work email address, company name, country, the service you need, languages involved, project description, estimated volume, timeline, and how you found us.</p>
                        <p>When you apply to join our team through the careers page, we collect your name, email, phone number, country, city, age range, language proficiency details, work experience, availability, and any portfolio links you share.</p>
                        <p>We also collect basic technical information automatically when you visit our website. This includes your IP address, browser type, device type, pages visited, and time spent on each page. This data is collected through standard web analytics and is not tied to your personal identity.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">How We Use Your Information</h3>
                        <p>We use client submission data to understand your project requirements and send you a proposal. We use applicant data to evaluate your skills and contact you about relevant work opportunities. We use website analytics data to understand how people use our site and improve the experience.</p>
                        <p>We do not sell your information to anyone. We do not share your information with third parties for marketing purposes. We do not send unsolicited promotional emails.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Who Can Access Your Information</h3>
                        <p>Only authorized members of the Meridian AI team can access the information you submit. Client project details are shared only with team members who are directly involved in preparing your proposal or working on your project. Applicant details are reviewed only by our recruitment and project management team.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">How We Store and Protect Your Information</h3>
                        <p>Form submissions are delivered to our email through Web3Forms, a secure form delivery service. We do not store your form data in any public database. Our email accounts are protected with strong passwords and two-factor authentication. Any client data received during active projects is stored in secure, access-controlled environments and handled according to the confidentiality terms agreed upon for each engagement.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">How Long We Keep Your Information</h3>
                        <p>Client inquiry data is retained for as long as needed to respond to your request and for reasonable follow-up. If we begin working together, your information is retained for the duration of the engagement and a reasonable period afterward for record-keeping. Applicant data is retained for up to 12 months so we can contact you when relevant projects arise. If you want your data deleted at any time, email us and we will remove it within 7 business days.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Cookies</h3>
                        <p>Our website may use cookies for basic analytics and website functionality. Cookies are small text files stored on your device by your browser. You can disable cookies in your browser settings at any time. Disabling cookies will not affect your ability to use our website or submit forms.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Your Rights</h3>
                        <p>You have the right to request access to the personal data we hold about you. You have the right to request correction of any inaccurate data. You have the right to request deletion of your data. You have the right to withdraw consent for us to process your data at any time. To exercise any of these rights, email us at <a href="mailto:contact@meridianai.com" className="text-[#3F72AF] underline">contact@meridianai.com</a>.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Changes to This Policy</h3>
                        <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this page periodically.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Contact</h3>
                        <p>If you have questions about this privacy policy or how we handle your data, contact us at <a href="mailto:contact@meridianai.com" className="text-[#3F72AF] underline">contact@meridianai.com</a>.</p>
                      </div>
                    )
                  },
                  {
                    id: 'terms', title: 'Terms of Service',
                    content: (
                      <div className="space-y-6">
                        <p className="italic text-sm opacity-60">Last updated: March 26, 2026</p>
                        <p>These terms govern your use of the Meridian AI website at meridianai.com and any services provided by Meridian AI. By using our website or engaging our services, you agree to these terms.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">About Meridian AI</h3>
                        <p>Meridian AI is a language data and AI automation agency founded by Syed Rouf, based in India. We provide voice data collection, transcription, translation, data annotation, AI automation, and related services to businesses and organizations worldwide.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Website Use</h3>
                        <p>You may use our website to learn about our services, submit project inquiries, and apply to join our team. You agree to provide accurate and truthful information when submitting any form on our website. You agree not to use our website for any unlawful purpose or in any way that could damage, disable, or impair the website.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Project Engagements</h3>
                        <p>When you submit a project inquiry through our website, it is a request for a proposal, not a binding contract. A binding engagement begins only when both parties agree to a written proposal, statement of work, or contract that outlines the scope, deliverables, timeline, pricing, and payment terms.</p>
                        <p>All project-specific terms including scope, deliverables, quality standards, timelines, pricing, payment schedules, revision policies, and confidentiality obligations will be defined in the written agreement for each engagement. In the event of any conflict between these general terms and a project-specific agreement, the project-specific agreement takes priority.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Pricing and Payment</h3>
                        <p>Pricing is determined on a per-project basis and communicated in our written proposal. Pricing is not published on our website because it varies based on scope, volume, complexity, language pairs, and timeline. Payment terms, methods, and schedules are defined in each project agreement.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Intellectual Property</h3>
                        <p>All work delivered by Meridian AI to a client becomes the property of the client upon full payment, unless otherwise specified in the project agreement. Meridian AI retains no ownership or usage rights over client deliverables after final payment is received and confirmed.</p>
                        <p>The content, design, text, and visual elements of the Meridian AI website are the property of Meridian AI. You may not copy, reproduce, distribute, or use any website content without our written permission.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Confidentiality</h3>
                        <p>We treat all client project details, data, and communications as confidential. We do not share client information with third parties without explicit consent. For projects involving sensitive data, we execute non-disclosure agreements before beginning any work. Specific confidentiality terms are defined in each project agreement.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Limitation of Liability</h3>
                        <p>Meridian AI provides services with professional care and in accordance with the quality standards agreed upon in each project engagement. However, we do not guarantee that our services will be error-free or uninterrupted. Our total liability for any claim arising from a project engagement is limited to the total fees paid by the client for that specific project.</p>
                        <p>We are not liable for any indirect, incidental, consequential, or special damages arising from the use of our services or website, including but not limited to loss of revenue, data, or business opportunities.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Termination</h3>
                        <p>Either party may terminate a project engagement by providing written notice as defined in the project agreement. In the event of termination, the client is responsible for payment of all work completed up to the date of termination.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Governing Law</h3>
                        <p>These terms are governed by the laws of India. Any disputes arising from these terms or from any engagement with Meridian AI will be subject to the jurisdiction of the courts in India.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Changes to These Terms</h3>
                        <p>We may update these terms from time to time. Changes will be posted on this page with an updated date. Continued use of our website or services after changes are posted constitutes acceptance of the updated terms.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Contact</h3>
                        <p>If you have questions about these terms, contact us at <a href="mailto:contact@meridianai.com" className="text-[#3F72AF] underline">contact@meridianai.com</a>.</p>
                      </div>
                    )
                  },
                  {
                    id: 'security', title: 'Security',
                    content: (
                      <div className="space-y-6">
                        <p>Meridian AI takes the security of client data and project information seriously. This section describes the measures we follow to protect the information entrusted to us.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Communication Security</h3>
                        <p>All client communication is conducted through secure email channels. We use email providers that support encryption in transit. Sensitive project documents, credentials, and data are shared only through secure, access-controlled methods. We do not share confidential information over unsecured channels.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Access Control</h3>
                        <p>Access to client data and project files is restricted to authorized team members who are directly involved in that specific project. Team members are granted access only for the duration of their involvement. When a project is completed or a team member's role ends, their access is revoked.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Team Confidentiality</h3>
                        <p>Every team member who works on client projects is bound by confidentiality terms that prohibit sharing, copying, storing, or distributing any client data outside of the project environment. For projects that require additional protection, we execute individual non-disclosure agreements with each team member assigned to the project.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Data Handling</h3>
                        <p>Client data received for processing, including audio files, text documents, images, and datasets, is stored in secure environments during the project. We do not use client data for any purpose other than completing the work described in the project agreement. We do not use client data to train our own systems or share it with unrelated projects.</p>
                        <p>Upon project completion, client data is either returned to the client or deleted from our systems, based on the client's instructions. We confirm deletion in writing when requested.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Website Security</h3>
                        <p>Our website uses HTTPS encryption to protect data transmitted between your browser and our servers. Form submissions are processed through Web3Forms, which uses secure HTTPS connections for all data transmission.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Incident Response</h3>
                        <p>In the unlikely event of a security incident involving client data, we will notify the affected client promptly, describe the nature of the incident, and outline the steps we are taking to resolve it and prevent recurrence.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Questions</h3>
                        <p>If you have specific security requirements for your project or want to discuss our security practices in more detail, contact us at <a href="mailto:contact@meridianai.com" className="text-[#3F72AF] underline">contact@meridianai.com</a>.</p>
                      </div>
                    )
                  },
                  {
                    id: 'compliance', title: 'Compliance',
                    content: (
                      <div className="space-y-6">
                        <p>Meridian AI is committed to operating in compliance with applicable data protection regulations and industry standards. This section outlines our approach to compliance in the work we do for our clients.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Data Protection</h3>
                        <p>We handle personal data in accordance with the principles outlined in the General Data Protection Regulation (GDPR) and other applicable international data protection laws. This includes collecting only the data necessary for the stated purpose, processing it lawfully and transparently, storing it securely, retaining it only for as long as needed, and deleting it when it is no longer required.</p>
                        <p>When we process personal data on behalf of a client as part of a project engagement, we act as a data processor under the client's instructions. We process the data only for the purposes defined in the project agreement and do not use it for any other purpose.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Confidentiality Agreements</h3>
                        <p>We execute non-disclosure agreements with clients before beginning any engagement that involves sensitive or proprietary data. Our team members who work on client projects are individually bound by confidentiality obligations.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Ethical Data Collection</h3>
                        <p>For voice and speech data collection projects, we follow ethical practices in participant recruitment and data handling. Speakers who participate in recording projects are informed about the purpose of the data collection, how their recordings will be used, and their right to withdraw. We obtain appropriate consent from all participants before recording. We do not collect data from minors without verified parental or guardian consent.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Client-Specific Compliance Requirements</h3>
                        <p>We understand that different clients operate under different regulatory frameworks depending on their industry and geography. If your project has specific compliance requirements such as HIPAA, SOC 2, ISO 27001, or region-specific data residency rules, we are prepared to discuss how we can accommodate those requirements within our workflow. We adapt our processes to meet the compliance standards defined in each project agreement.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Subcontractor Compliance</h3>
                        <p>When we engage subcontractors or individual contributors for project work, they are held to the same confidentiality, data protection, and ethical standards that we commit to with our clients. Subcontractor agreements include data handling obligations and confidentiality terms.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Reporting and Transparency</h3>
                        <p>We maintain records of our data processing activities for client projects. We can provide compliance documentation, processing records, and data handling confirmations upon client request.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Contact</h3>
                        <p>If you have compliance-related questions or need to discuss specific regulatory requirements for your project, contact us at <a href="mailto:contact@meridianai.com" className="text-[#3F72AF] underline">contact@meridianai.com</a>.</p>
                      </div>
                    )
                  },
                  {
                    id: 'legal', title: 'Legal Notice',
                    content: (
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold font-serif pt-4">Company Information</h3>
                        <ul className="space-y-2 opacity-80 list-disc pl-4">
                          <li><strong>Company:</strong> Meridian AI is a professional services agency specializing in language data services and AI automation solutions.</li>
                          <li><strong>Founded by:</strong> Syed Rouf</li>
                          <li><strong>Based in:</strong> India</li>
                          <li><strong>Website:</strong> meridianai.com</li>
                          <li><strong>Contact:</strong> <a href="mailto:contact@meridianai.com" className="text-[#3F72AF] underline">contact@meridianai.com</a></li>
                        </ul>
                        <h3 className="text-xl font-bold font-serif pt-4">Nature of Services</h3>
                        <p>Meridian AI provides voice and speech data collection, transcription, translation and localization, data annotation and labeling, subtitling and captioning, and AI automation agent design and deployment. We operate as a managed vendor providing end-to-end project execution for clients globally.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Disclaimer</h3>
                        <p>The information provided on this website is for general informational purposes. While we make every effort to keep the content accurate and up to date, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information on this site.</p>
                        <p>The content on this website does not constitute a contractual offer. Service availability, pricing, and terms are subject to the specific agreement made between Meridian AI and each client for each engagement.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">External Links</h3>
                        <p>Our website may contain links to external websites. We have no control over the content or availability of those sites. Inclusion of any external link does not imply endorsement or recommendation.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Copyright</h3>
                        <p>All content on this website, including text, design, layout, and visual elements, is the property of Meridian AI unless otherwise stated. You may not reproduce, distribute, or use any content from this website without written permission from Meridian AI.</p>
                        <h3 className="text-xl font-bold font-serif pt-4">Contact for Legal Inquiries</h3>
                        <p>For any legal questions or concerns, contact us at <a href="mailto:contact@meridianai.com" className="text-[#3F72AF] underline">contact@meridianai.com</a>.</p>
                      </div>
                    )
                  }
                ].map(policy => (
                    <div key={policy.id} className="bg-[#F9F7F7]">
                        <button 
                            onClick={() => setOpenSection(openSection === policy.id ? null : policy.id)}
                            className="w-full text-left px-6 py-6 border-transparent md:px-8 flex justify-between items-center hover:bg-slate-50 transition-colors focus:outline-none focus:bg-slate-50"
                        >
                            <span className="font-serif text-xl font-bold text-[#112D4E] tracking-wide">{policy.title}</span>
                            <Icons.ChevronDown className={`transition-transform duration-500 text-[#3F72AF] ${openSection === policy.id ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                            {openSection === policy.id && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="overflow-hidden bg-[#f4f7f9]/30"
                                >
                                    <div className="px-6 md:px-8 pb-10 pt-4 text-[#112D4E] font-light leading-relaxed">
                                        {policy.content}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>

      </div>
    </div>
  );
}
