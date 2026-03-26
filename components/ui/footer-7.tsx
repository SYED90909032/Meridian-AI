/**
 * Meridian AI — Proprietary Source Code
 * © 2026 Meridian AI Systems. All rights reserved.
 * Unauthorized copying, reproduction, distribution, or reuse of this
 * codebase or any connected services is strictly prohibited.
 * Internal systems, workflows, and implementation details are private.
 */

import React from "react";
import * as Icons from "lucide-react";

interface Footer7Props {
  logo?: {
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: React.ReactNode;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "#hero" },
      { name: "Capabilities", href: "#services" },
      { name: "Automation", href: "#automation" },
      { name: "About Meridian AI", href: "#about" },
    ],
  },
  {
    title: "Global Presence",
    links: [
      { name: "Karim Nagar", href: "#" },
      { name: "Hyderabad", href: "#" },
      { name: "Mumbai", href: "#" },
      { name: "Canada", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Submit a Project", href: "#submit" },
      { name: "contact@meridianai.com", href: "mailto:contact@meridianai.com" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <Icons.MessageCircle className="size-5" />, href: "https://wa.me/917816078991", label: "WhatsApp" },
  { icon: <Icons.Linkedin className="size-5" />, href: "#", label: "LinkedIn" },
  { icon: <Icons.Mail className="size-5" />, href: "mailto:contact@meridianai.com", label: "Email" },
];

const defaultLegalLinks = [
  { name: "Privacy Policy", href: "#about-privacy" },
  { name: "Terms of Service", href: "#about-terms" },
  { name: "Security", href: "#about-security" },
  { name: "Compliance", href: "#about-compliance" },
  { name: "Legal Notice", href: "#about-legal" },
];

export const Footer7 = ({
  logo = {
    title: "Meridian AI",
  },
  sections = defaultSections,
  description = "Pioneering the standard for enterprise intelligence through human-led validation and agentic orchestration. We bridge the gap between raw compute and human intent.",
  socialLinks = defaultSocialLinks,
  copyright = (
     <>© 2026 Meridian AI Systems. <span className="text-[#3F72AF]">Created with ❤️ by <strong className="text-[#F9F7F7]">Syed</strong></span></>
  ),
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('#about-') || href === '#about') {
        e.preventDefault();
        window.location.hash = href;
    } else if (href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        document.getElementById(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-[#112D4E] text-[#F9F7F7] border-t border-[#F9F7F7]/5 relative overflow-hidden">
      {/* Optional decorative background elements based on prompt colors */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#3F72AF]/30 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#3F72AF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Top brand rule */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-[#3F72AF]/40 to-transparent" />
          <span className="text-[9px] font-mono tracking-[0.35em] uppercase text-[#3F72AF]/60">Meridian AI · Est. 2024</span>
          <div className="h-px flex-1 bg-gradient-to-l from-[#3F72AF]/40 to-transparent" />
        </div>
        <div className="flex w-full flex-col justify-between gap-8 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-4 lg:items-start max-w-xs">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <div className="w-1.5 h-6 bg-[#3F72AF] rounded-sm" />
              <h2 className="text-lg font-serif tracking-[0.15em] uppercase text-[#F9F7F7]">{logo.title}</h2>
            </div>
            <p className="text-xs text-[#F9F7F7]/50 leading-relaxed font-light max-w-[260px]">
              {description}
            </p>
            <ul className="flex items-center space-x-5 text-[#F9F7F7]/40">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-[#DBE2EF] transition-colors hover:scale-110 transform duration-200">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>

            {/* Join Our Team CTA */}
            <a
              href="#careers"
              onClick={e => { e.preventDefault(); window.location.hash = '#careers'; }}
              className="group relative inline-flex items-center gap-2 mt-1"
            >
              {/* Pulsing ring */}
              <span className="absolute -inset-1 rounded-sm bg-gradient-to-r from-[#3F72AF] via-[#DBE2EF]/30 to-[#3F72AF] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
              <span className="relative flex items-center gap-2 px-5 py-2.5 bg-[#3F72AF] text-[#F9F7F7] rounded-sm text-[10px] font-mono uppercase tracking-[0.2em] font-bold border border-[#DBE2EF]/20 group-hover:bg-[#DBE2EF] group-hover:text-[#112D4E] transition-all duration-300 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Join Our Team
                <Icons.ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </div>
          
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-12">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 text-[9px] uppercase tracking-[0.3em] text-[#3F72AF] font-bold">{section.title}</h3>
                <ul className="space-y-2.5 text-[12px] text-[#F9F7F7]/55">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-[#F9F7F7] transition-colors flex items-center gap-2 group"
                    >
                      <div className="w-0 h-px bg-[#3F72AF] group-hover:w-3 transition-all" />
                      <a href={link.href} onClick={(e) => link.href.startsWith('#') ? handleLinkClick(e, link.href) : undefined}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-[#F9F7F7]/8 pt-5 text-[10px] font-mono tracking-[0.12em] uppercase font-medium text-[#F9F7F7]/30 md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1 flex items-center gap-4">
             <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
             {copyright}
          </p>
          <ul className="order-1 flex flex-col gap-4 md:order-2 md:flex-row md:gap-8">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-[#F9F7F7] transition-colors">
                <a href={link.href} onClick={(e) => link.href.startsWith('#') ? handleLinkClick(e, link.href) : undefined}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
