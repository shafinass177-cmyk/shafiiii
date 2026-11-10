import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  GraduationCap,
  MapPin,
  Code,
  Sparkles,
  Terminal,
  Award,
  CheckCircle2,
  Download,
  ArrowUpRight
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import MagneticButton from '../components/MagneticButton';
import { personalInfo, stats, skillsMarquee } from '../data/portfolioData';

// Animated CountUp number
function StatCounter({ target, suffix = '', label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 25);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 25);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="flex flex-col p-6 rounded-2xl glass-panel text-left">
      <div className="font-display text-5xl sm:text-6xl font-extrabold text-zinc-900 dark:text-white mb-1 flex items-baseline">
        <span className="text-brand-orange">{count}</span>
        <span className="text-brand-amber ml-0.5">{suffix}</span>
      </div>
      <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 tracking-wide uppercase">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-surface-light dark:bg-surface-dark transition-colors duration-300">

      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-amber/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <SectionHeader
          badge="ABOUT SHAFI"
          title="ENGINEERING PRECISION × DESIGN ARTISTRY"
          subtitle="Crafting high-impact digital experiences from Kerala to the global web."
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">

          {/* Main Bio Card (Cols 1-7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl p-8 sm:p-10 glass-panel flex flex-col justify-between relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-orange uppercase tracking-wider">
                  <Terminal className="w-4 h-4" />
                  <span>The Story & Drive</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/60 shadow-sm">
                  <img
                    src={personalInfo.profileImage || "/profile.jpg"}
                    alt={personalInfo.name}
                    className="w-5 h-5 rounded-full object-cover object-center ring-1 ring-brand-orange"
                  />
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">{personalInfo.name}</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6 leading-snug">
                Hey, I'm <span className="text-brand-orange">Shafi</span> — an undergraduate engineering student at <span className="underline decoration-brand-amber decoration-2 underline-offset-4">Thejus Engineering College</span> with a deep obsession for frontend craft.
              </h3>

              <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                Currently a 1st year Computer Science & Engineering (AI) student, I specialize in architecting fast, responsive web applications using React, Tailwind CSS, and GSAP. Rather than just making things work, I strive to make web interfaces feel alive, tactile, and unforgettable.
              </p>

              <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Whether it's building interactive campus portals, collaborating on freelance projects, or exploring creative agency motion techniques with Lenis and Framer Motion, I bring curiosity, engineering rigor, and aesthetic sensibility to every pixel.
              </p>
            </div>

            {/* Quick Details & Badges */}
            <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                <MapPin className="w-4 h-4 text-brand-orange" />
                <span>Thrissur, Kerala, India</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                <GraduationCap className="w-4 h-4 text-brand-amber" />
                <span>Thejus Engineering College</span>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-amber transition-colors uppercase tracking-wider"
              >
                <span>Read Full Journey</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* College & Education Spotlight Card (Cols 8-12) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-zinc-900 to-zinc-950 text-white flex flex-col justify-between relative overflow-hidden border border-zinc-800 shadow-xl"
          >
            {/* Top Amber Accent Orb */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-orange/25 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-amber text-xs font-mono font-semibold uppercase tracking-wider mb-6">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>ACADEMIC FOUNDATION</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold mb-2">
                Thejus Engineering College
              </h4>
              <p className="text-xs text-brand-amber font-mono tracking-wider uppercase mb-6">
                Vellarakkad, Kerala • B.Tech CSE AI (1st Year)
              </p>

              <div className="space-y-3.5 text-sm text-zinc-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <span>Strong foundation in Computer Networks, DBMS & Operating Systems</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <span>Frontend lead for hackathon projects and campus initiatives</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <span>Certified in Modern React, Responsive Architecture & UI/UX Design</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">STATUS: ACTIVE STUDENT & DEV</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Open for Internships
              </span>
            </div>
          </motion.div>
        </div>

        {/* Animated Stat Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {stats.map((stat, idx) => (
            <StatCounter
              key={idx}
              target={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

        {/* Skills Continuous Velocity Marquee */}
        <div className="relative w-full overflow-hidden py-6 rounded-2xl bg-zinc-900 text-white border border-zinc-800 shadow-inner">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-900 to-transparent z-10 pointer-events-none" />

          <div className="flex w-[200%] animate-marquee whitespace-nowrap">
            {[...skillsMarquee, ...skillsMarquee].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-4 mx-6 text-sm md:text-base font-bold font-mono tracking-wider uppercase text-zinc-300 hover:text-brand-amber transition-colors cursor-default"
              >
                <span>{skill}</span>
                <span className="text-brand-orange text-lg">✦</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

