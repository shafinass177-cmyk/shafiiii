import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-zinc-950 text-white pt-16 pb-12 overflow-hidden border-t border-zinc-800">
      
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand-orange/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-zinc-800/80">
          
          {/* Brand & College Tag */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-orange to-brand-amber flex items-center justify-center text-white font-anton text-lg">
                S
              </div>
              <span className="font-display font-extrabold text-2xl tracking-wide uppercase">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm">
              Engineering Student at {personalInfo.college}, Kerala. Building modern, high-performance web products.
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-brand-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to Top Magnetic Button */}
          <MagneticButton
            onClick={scrollToTop}
            className="p-3.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-brand-orange hover:border-brand-orange transition-all shadow-md group"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </MagneticButton>
        </div>

        {/* Bottom Sub-row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-brand-orange fill-current" />
            <span>in Kerala, India</span>
          </div>

          <div>
            <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

