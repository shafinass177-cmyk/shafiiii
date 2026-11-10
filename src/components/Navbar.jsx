import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import MagneticButton from './MagneticButton';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only hide after scrolling past 120px
      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      // Detect active section
      const sections = ['work', 'about', 'services', 'journey', 'testimonials', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-500 ease-in-out px-4 sm:px-8 py-4 sm:py-6 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Stylized Logo */}
          <a
            href="#"
            className="group flex items-center gap-2.5 z-50 focus:outline-none"
            aria-label="Shafi Portfolio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-orange to-brand-amber flex items-center justify-center text-white font-anton text-2xl shadow-md group-hover:scale-105 transition-transform duration-300">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-2xl tracking-wide text-zinc-900 dark:text-white uppercase leading-none group-hover:text-brand-orange transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-600 dark:text-zinc-400">
                Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Glass Pill */}
          <nav className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 hover:text-brand-orange dark:hover:text-brand-amber transition-colors duration-200"
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-brand-orange to-brand-amber rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Quick Contact Pill */}
            <div className="hidden sm:block">
              <MagneticButton
                href="#contact"
                className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:bg-brand-orange dark:hover:bg-brand-orange dark:hover:text-white transition-colors duration-300 shadow-sm"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </MagneticButton>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full glass-pill text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Animated Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at top right)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#0D0D0E]/95 backdrop-blur-2xl text-white flex flex-col justify-between p-8 md:hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 -right-16 w-80 h-80 rounded-full bg-brand-orange/30 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-16 w-80 h-80 rounded-full bg-brand-amber/20 blur-[100px] pointer-events-none" />

            {/* Top Space for logo */}
            <div className="pt-16 pb-6 border-b border-zinc-800 flex items-center justify-between">
              <div className="text-sm font-mono tracking-widest text-zinc-400">
                NAVIGATION
              </div>
              <div className="flex items-center gap-2 text-xs text-brand-amber">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Available for projects</span>
              </div>
            </div>

            {/* Nav Items List */}
            <nav className="flex flex-col gap-6 my-auto">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.08, duration: 0.4 }}
                  className="flex items-baseline justify-between group"
                >
                  <span className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-wide group-hover:text-brand-orange transition-colors">
                    {link.name}
                  </span>
                  <span className="text-xs font-mono text-zinc-500 group-hover:text-brand-amber">
                    0{idx + 1} ↗
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* Bottom info */}
            <div className="pt-6 border-t border-zinc-800 flex flex-col gap-3">
              <p className="text-xs text-zinc-400">
                Engineering student at Thejus Engineering College, Kerala
              </p>
              <div className="flex items-center justify-between">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm text-brand-amber hover:underline font-medium"
                >
                  {personalInfo.email}
                </a>
                <span className="text-xs text-zinc-500">Kerala, India</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

