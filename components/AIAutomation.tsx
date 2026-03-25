import React from 'react';
import ScrollReveal from './ScrollReveal';
import './AIAutomation.css';

const services = [
  {
    id: 1,
    title: 'AI Chat & Voice Agents',
    description:
      'Always-on AI agents that qualify leads, answer questions, and convert visitors into customers — 24/7 without human intervention.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800',
    alt: 'AI chatbot interface'
  },
  {
    id: 2,
    title: 'Lead Capture & Nurture Flows',
    description:
      'Automatically collect, score, and follow up with every lead the moment they show interest. No lead slips through the cracks.',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
    alt: 'Lead generation dashboard'
  },
  {
    id: 3,
    title: 'CRM & Pipeline Automation',
    description:
      'Auto-update records, assign tasks, and trigger next steps in your pipeline so your sales team closes — not clicks.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    alt: 'CRM pipeline automation'
  },
  {
    id: 4,
    title: 'Email & Outreach Sequences',
    description:
      'AI-written, hyper-personalized outreach at scale. Every email feels hand-crafted. Every sequence runs on autopilot.',
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800',
    alt: 'Email automation'
  },
  {
    id: 5,
    title: 'Document & Data Processing',
    description:
      'Extract, organize, and route information from files, forms, and invoices — automatically. Zero manual data entry.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800',
    alt: 'Document processing AI'
  },
  {
    id: 6,
    title: 'Custom AI Agents',
    description:
      'Purpose-built intelligent agents tailored to your unique business logic, workflows, and goals. Your AI, your rules.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    alt: 'Custom AI agent'
  }
];

const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'We audit your workflows and identify the highest-impact automation opportunities.'
  },
  {
    number: '02',
    title: 'Build & Test',
    desc: 'We design, develop, and rigorously test your custom AI agents and workflows.'
  },
  {
    number: '03',
    title: 'Launch & Optimize',
    desc: 'Go live, monitor performance, and continuously refine for peak efficiency.'
  }
];

const stats = [
  { value: '85%', label: 'Reduction in Manual Tasks' },
  { value: '3x', label: 'Faster Response Times' },
  { value: '60%', label: 'Lower Operational Costs' },
  { value: '24/7', label: 'Always-On Automation' }
];

const AIAutomation = () => {
  return (
    <div className="ai-automation-page" id="automation">

      {/* ===== HERO ===== */}
      <section className="hero-section">
        <div className="hero-content">
          <ScrollReveal
            baseOpacity={0.05}
            enableBlur
            baseRotation={5}
            blurStrength={6}
            containerClassName="hero-heading"
            textClassName="hero-heading-text"
          >
            Automate. Accelerate. Scale.
          </ScrollReveal>
          <p className="hero-sub">
            We build custom AI agents and intelligent workflows that
            eliminate repetitive tasks, reduce costs, and let your team
            focus on what actually moves the needle.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn-primary">
              Book a Free Discovery Call
            </a>
            <a href="#services" className="btn-secondary">
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="problem-section">
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur
          baseRotation={3}
          blurStrength={4}
        >
          You are losing time and money on work that machines should handle. Hours wasted on repetitive tasks. Leads slipping away. Human errors in processes that should run on autopilot.
        </ScrollReveal>
      </section>

      {/* ===== SERVICES (Alternating Image + Text) ===== */}
      <section className="services-section" id="services">
        <div className="services-header">
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur
            baseRotation={2}
            blurStrength={3}
            containerClassName="section-title-reveal"
            textClassName="section-title-text"
          >
            What We Automate
          </ScrollReveal>
        </div>

        {services.map((service, index) => (
          <div
            className={`service-row ${
              index % 2 === 0 ? 'image-left' : 'image-right'
            }`}
            key={service.id}
          >
            <div className="service-image-wrapper">
              <img
                src={service.image}
                alt={service.alt}
                className="service-image"
                loading="lazy"
              />
              <div className="image-overlay" />
            </div>
            <div className="service-text-wrapper">
              <span className="service-number">
                {String(service.id).padStart(2, '0')}
              </span>
              <ScrollReveal
                baseOpacity={0.1}
                enableBlur
                baseRotation={2}
                blurStrength={3}
                containerClassName="service-title-reveal"
                textClassName="service-title-text"
              >
                {service.title}
              </ScrollReveal>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="process-section">
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur
          baseRotation={3}
          blurStrength={4}
          containerClassName="section-title-reveal"
          textClassName="section-title-text"
        >
          From Chaos to Automated in 3 Steps
        </ScrollReveal>

        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-item" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats-section">
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur
          baseRotation={2}
          blurStrength={3}
          containerClassName="section-title-reveal"
          textClassName="section-title-text"
        >
          The Impact Speaks for Itself
        </ScrollReveal>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div className="stat-item" key={i}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="final-cta-section">
        <ScrollReveal
          baseOpacity={0.05}
          enableBlur
          baseRotation={4}
          blurStrength={5}
          containerClassName="cta-heading"
          textClassName="cta-heading-text"
        >
          Stop Doing Manually What AI Can Do in Seconds
        </ScrollReveal>
        <p className="cta-sub">
          Book a free 15-minute call. We'll show you exactly what can be
          automated in your business.
        </p>
        <a href="#contact" className="btn-primary btn-large">
          Get Your Free Automation Audit
        </a>
      </section>
    </div>
  );
};

export default AIAutomation;
