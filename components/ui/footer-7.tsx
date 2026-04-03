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
      // Display a professional alias; the mailto routes to the real inbox privately
      { name: "hello@meridian-ai.com", href: "mailto:Syedrouf313@gmail.com" },
    ],
  },
];

// ─── Brand-accurate social icon SVGs ─────────────────────────────────────────
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#ffd600" />
        <stop offset="30%" stopColor="#ff6d00" />
        <stop offset="60%" stopColor="#e1306c" />
        <stop offset="90%" stopColor="#833ab4" />
        <stop offset="100%" stopColor="#405de6" />
      </radialGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="6" stroke="url(#ig-grad)" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke="url(#ig-grad)" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1" fill="url(#ig-grad)" />
  </svg>
);

const GoogleMapsIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" />
    <circle cx="12" cy="9" r="2.5" fill="#fff" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GmailIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 6.5A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5V18a2 2 0 01-2 2H4a2 2 0 01-2-2V6.5z" fill="#fff" />
    <path d="M2 7l10 7 10-7" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 4l8 6 8-6" fill="#EA4335" />
    <path d="M2 7v11a2 2 0 002 2h16a2 2 0 002-2V7" stroke="#BDBDBD" strokeWidth="0.5" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="#26A5E4" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="#5865F2" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const defaultSocialLinks = [
  { icon: <InstagramIcon />, href: "https://www.instagram.com", label: "Instagram", hoverColor: "#E1306C" },
  { icon: <GoogleMapsIcon />, href: "https://maps.google.com", label: "Google Maps", hoverColor: "#EA4335" },
  { icon: <LinkedInIcon />, href: "https://www.linkedin.com", label: "LinkedIn", hoverColor: "#0A66C2" },
  { icon: <GmailIcon />, href: "mailto:Syedrouf313@gmail.com", label: "Gmail", hoverColor: "#EA4335" },
  { icon: <WhatsAppIcon />, href: "https://wa.me/917816078991", label: "WhatsApp", hoverColor: "#25D366" },
  { icon: <TelegramIcon />, href: "https://t.me", label: "Telegram", hoverColor: "#26A5E4" },
  { icon: <DiscordIcon />, href: "https://discord.com", label: "Discord", hoverColor: "#5865F2" },
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
            {/* Social Icons — each glows with its own brand colour on hover */}
            <ul className="flex items-center flex-wrap gap-3 py-1">
              {socialLinks.map((social: any, idx: number) => (
                <li
                  key={idx}
                  className="group relative transition-transform duration-200 hover:scale-125"
                >
                  <a
                    href={social.href}
                    aria-label={social.label}
                    title={social.label}
                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="block"
                    style={{
                      filter: 'brightness(0.45) saturate(0.6)',
                      transition: 'filter 0.25s ease',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.filter =
                        `brightness(1) saturate(1) drop-shadow(0 0 7px ${social.hoverColor ?? '#fff'}88)`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.filter =
                        'brightness(0.45) saturate(0.6)';
                    }}
                  >
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
