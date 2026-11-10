import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const containerRef = useRef(null);
  const headlineWords = personalInfo.heroAlternates || ["CREATE", "CRAFT", "INVENT", "DESIGN"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Cycle headline word periodically for dynamic agency energy
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % headlineWords.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [headlineWords.length]);

  // Scroll parallax for portrait and elements
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const currentWord = headlineWords[currentWordIndex];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between pt-24 lg:pt-0"
    >
      {/* Background Split Screen */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 z-0 pointer-events-none">
        {/* Left Side: Deep Warm Burnt Orange to Amber Gradient */}
        <div className="relative h-full w-full bg-gradient-to-br from-[#FF9F1C] via-[#E8590C] to-[#992E00] noise-overlay overflow-hidden">
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-[#FFAA33]/30 blur-[130px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#E8590C]/50 blur-[100px]" />

          {/* Subtle Organic Curve / Architectural Line */}
          <svg
            className="absolute inset-0 w-full h-full opacity-15"
            preserveAspectRatio="none"
            viewBox="0 0 600 900"
            fill="none"
          >
            <path
              d="M-100 200 C 200 150, 400 450, 700 350 C 900 280, 500 800, 600 1000"
              stroke="white"
              strokeWidth="1.5"
              strokeDasharray="8 8"
            />
          </svg>
        </div>

        {/* Right Side: Off-white Canvas in Light Mode, Sleek Deep Obsidian in Dark Mode */}
        <div className="relative h-full w-full bg-[#F4F1EC] dark:bg-[#0D0D0E] transition-colors duration-500 noise-overlay">
          <div className="absolute top-1/3 right-10 w-[450px] h-[450px] rounded-full bg-brand-orange/5 dark:bg-brand-orange/10 blur-[140px]" />
        </div>
      </div>

      {/* Main Split Grid Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-4 py-12 lg:py-0">

          {/* Left Column: Typography, Tagline, Actions, Social Proof (Cols 1 to 6) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-white z-20 pt-8 lg:pt-0">
            {/* Top Student & Location Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/20 backdrop-blur-md border border-white/20 w-fit mb-6 text-xs font-semibold tracking-wider uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-brand-amber animate-ping" />
              <span>{personalInfo.college} • Kerala</span>
            </motion.div>

            {/* Giant Bold Headline with Masked Character Reveal */}
            <div className="overflow-hidden mb-4 py-2">
              <div className="flex items-center gap-2 overflow-hidden">
                <motion.div
                  key={currentWord}
                  initial={{ y: 90, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -90, opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display font-extrabold text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] tracking-tight leading-[0.88] text-white select-none drop-shadow-md"
                >
                  {currentWord}
                </motion.div>
              </div>
            </div>

            {/* Sub-headline / Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl font-light text-white/90 max-w-md mb-8 leading-snug tracking-wide"
            >
              {personalInfo.heroTagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              {/* Primary "View Work ↗" Pill Button */}
              <MagneticButton
                href="#work"
                className="px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase bg-white text-zinc-950 hover:bg-[#FFF3E8] shadow-orange-glow hover:scale-105 transition-all duration-300"
              >
                <span>View Work</span>
                <ArrowUpRight className="w-4 h-4 ml-2 stroke-[2.5]" />
              </MagneticButton>

              {/* Secondary "About Me" Glass Button */}
              <MagneticButton
                href="#about"
                className="px-7 py-4 rounded-full text-sm font-bold tracking-wider uppercase bg-black/20 hover:bg-black/35 text-white border border-white/25 backdrop-blur-md transition-all duration-300"
              >
                <span>About Shafi</span>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: Hero Portrait (Cols 7 to 12) */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] lg:min-h-[620px]">
            {/* Central Portrait Container with Parallax & Warm Rim Glow */}
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/5] flex items-end justify-center">
              {/* Back Orange/Amber Glow Halo */}
              <div className="absolute inset-x-8 bottom-12 top-12 bg-gradient-to-t from-brand-orange to-brand-amber opacity-60 dark:opacity-40 blur-[80px] rounded-full pointer-events-none" />

              {/* Portrait Image with Scale & Parallax */}
              <motion.div
                style={{ y: portraitY, scale: portraitScale }}
                className="relative z-10 w-full h-full flex items-end justify-center"
              >
                <div className="relative w-full h-[90%] rounded-3xl overflow-hidden shadow-2xl border border-white/40 dark:border-white/10 group">
                  {/* Profile Portrait */}
                  <img
                    src={personalInfo.profileImage || "/profile.jpg"}
                    alt="Shafi — Creative Frontend Developer & UI/UX Designer"
                    className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Rim Light Overlay from Left */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/30 via-transparent to-transparent pointer-events-none" />

                  {/* Bottom Vignette */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                  {/* Portrait Name Tag */}
                  <div className="absolute bottom-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber" />
                    <span>Shafi • Thejus Eng. College</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Strip: Scroll Down Indicator */}
      <div className="relative z-10 w-full py-4 px-8 border-t border-white/10 dark:border-zinc-800 flex items-center justify-between text-xs text-white/70 dark:text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="font-mono text-brand-amber">01</span>
          <span className="uppercase tracking-widest text-[11px]">SCROLL TO EXPLORE</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-[11px] font-mono uppercase">
          <span>React + Vite</span>
          <span>•</span>
          <span>GSAP + Lenis</span>
          <span>•</span>
          <span>Tailwind CSS</span>
        </div>
      </div>
    </section>
  );
}

