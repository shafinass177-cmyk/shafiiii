import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Sparkles, 
  Smartphone, 
  Plus, 
  Minus, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { services } from '../data/portfolioData';

// Map icon string to Lucide component
const iconMap = {
  Code2,
  Palette,
  Sparkles,
  Smartphone
};

export default function Services() {
  const [openId, setOpenId] = useState('01'); // Default open first service

  const toggleService = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-surface-light dark:bg-surface-dark transition-colors duration-300 overflow-hidden">
      
      {/* Background Amber Glow */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-brand-amber/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="CAPABILITIES & EXPERTISE"
          title="SERVICES & SOLUTIONS"
          subtitle="From conceptual wireframing to high-performance code deployment, here is how I help brands and teams excel."
        />

        {/* Interactive Accordion / Hover-Expand List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const isOpen = openId === service.id;
            const Icon = iconMap[service.icon] || Code2;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-3xl transition-all duration-300 border ${
                  isOpen
                    ? 'glass-panel border-brand-orange/40 shadow-lg'
                    : 'glass-panel border-zinc-200/80 dark:border-zinc-800/80 hover:border-brand-orange/30'
                }`}
              >
                {/* Header Row (Always Visible & Clickable) */}
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-brand-orange/50 rounded-3xl"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    {/* Index Number */}
                    <span className="font-mono text-sm sm:text-base font-bold text-brand-orange dark:text-brand-amber">
                      {service.id}
                    </span>

                    {/* Service Title & Subtitle */}
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-zinc-900 dark:text-white">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Indicator Button */}
                  <div className={`p-3 rounded-full transition-transform duration-300 ${
                    isOpen 
                      ? 'bg-brand-orange text-white rotate-180 shadow-orange-glow' 
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                  }`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Details Body */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-zinc-100 dark:border-zinc-800/60">
                        <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange dark:text-brand-amber mb-3">
                            Key Deliverables & Capabilities:
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.deliverables.map((item, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2.5 text-sm text-zinc-700 dark:text-zinc-300"
                              >
                                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-orange/10 dark:bg-brand-orange/20 text-brand-orange shrink-0">
                                  <Check className="w-3 h-3 stroke-[3]" />
                                </span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Quick CTA to start project */}
                        <div className="flex items-center justify-end">
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange hover:text-brand-amber transition-colors"
                          >
                            <span>Request This Service</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

