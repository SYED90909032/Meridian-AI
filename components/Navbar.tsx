import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SPRING_PRESETS } from '../constants';
import StaggeredMenu from './StaggeredMenu';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const items = [
    { id: 1, label: 'Home', action: () => scrollToSection('hero') },
    { id: 2, label: 'Services', action: () => scrollToSection('services') },
    { id: 3, label: 'AI Automation', action: () => scrollToSection('automation') },
    { id: 4, label: 'Articles', action: () => scrollToSection('agents') },
    { id: 5, label: 'About', action: () => scrollToSection('vision') },
  ];

  if (isMobile) {
    return (
      <StaggeredMenu
        position="right"
        items={items}
        logoUrl=""
        menuButtonColor="#0F2854"
        openMenuButtonColor="#0F2854"
        accentColor="#1C4D8D"
        isFixed={true}
        closeOnClickAway={true}
      />
    );
  }

  return (
    <>
      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 92vw;
          max-width: 1200px;
          z-index: 50;
        }
        .navbar {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.07);
        }
        .nav-brand {
          font-family: serif;
          font-weight: 700;
          font-size: 1.25rem;
          color: #0F2854;
          white-space: nowrap;
          cursor: pointer;
        }
        .nav-links {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 1rem;
        }
        .nav-link {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          position: relative;
        }
        .nav-text {
          font-family: sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: 0.75rem;
          color: #0F2854;
          transition: color 0.3s ease;
          white-space: nowrap;
          position: relative;
          padding-bottom: 4px;
        }
        .nav-text::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: #1C4D8D;
          transition: width 0.3s ease;
        }
        .nav-link:hover .nav-text {
          color: #1C4D8D;
        }
        .nav-link:hover .nav-text::after {
          width: 100%;
        }

        /* Mobile-first responsive approach */
        @media (min-width: 768px) {
          .navbar {
            padding: 1rem 2rem;
          }
          .nav-links {
            gap: 1.5rem;
          }
          .nav-text {
            font-size: 0.8rem;
          }
          .nav-brand {
            font-size: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .navbar {
            padding: 1rem 2.5rem;
          }
          .nav-links {
            gap: 2rem;
          }
          .nav-text {
            font-size: 0.85rem;
          }
        }
      `}</style>
      <div className="navbar-wrapper">
        <motion.div 
          className="navbar"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={SPRING_PRESETS.BOUNCY}
        >
          <div 
            className="nav-brand"
            onClick={() => scrollToSection('hero')}
          >
            Meridian AI
          </div>
          <div className="nav-links">
            {items.map((item) => (
                <button
                    key={item.id}
                    className="nav-link"
                    onClick={item.action}
                >
                    <span className="nav-text">
                        {item.label}
                    </span>
                </button>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;