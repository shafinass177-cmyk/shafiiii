import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, Calendar, MapPin } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { timeline } from '../data/portfolioData';

export default function Timeline() {
  return (
    <section id="journey" className="relative py-24 sm:py-32 bg-surface-light dark:bg-surface-dark transition-colors duration-300">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="GROWTH & MILESTONES"
          title="EDUCATION & EXPERIENCE"
          subtitle="A chronological trace of my academic milestones, technical achievements, and hands-on developer experience."
        />

        {/* Vertical Animated Timeline */}
        <div className="relative border-l-2 border-brand-orange/30 dark:border-brand-orange/20 ml-4 sm:ml-32 space-y-12">
          {timeline.map((item, index) => {
            const isEducation = item.type === 'Education';
            const Icon = isEducation ? GraduationCap : item.type === 'Milestone' ? Award : Briefcase;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 sm:pl-10 group"
              >
                {/* Timeline Node Orb */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-orange-glow group-hover:scale-125 transition-transform duration-300 ring-4 ring-surface-light dark:ring-surface-dark">
                  <Icon className="w-4 h-4 stroke-[2.5]" />
                </div>

                {/* Left Year Label (Visible on Tablet/Desktop) */}
                <div className="hidden sm:block absolute -left-36 top-2 text-right w-24">
                  <span className="font-mono text-xs font-bold text-brand-orange dark:text-brand-amber">
                    {item.year}
                  </span>
                </div>

                {/* Content Card */}
                <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-zinc-200 dark:border-zinc-800 hover:border-brand-orange/40 transition-all duration-300 shadow-sm hover:shadow-md">
                  
                  {/* Mobile Year Badge */}
                  <div className="sm:hidden inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-orange mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.year}</span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-zinc-900 dark:text-white">
                      {item.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-brand-orange/10 dark:bg-brand-orange/20 text-brand-orange dark:text-brand-amber border border-brand-orange/20">
                      {item.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-4">
                    <MapPin className="w-4 h-4 text-brand-amber shrink-0" />
                    <span>{item.institution}</span>
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

