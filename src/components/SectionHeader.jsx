import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
            light
              ? 'bg-white/10 text-white/90 border border-white/20 backdrop-blur-md'
              : 'bg-brand-orange/10 dark:bg-brand-orange/20 text-brand-orange dark:text-brand-amber border border-brand-orange/20'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none mb-4 uppercase ${
          light ? 'text-white' : 'text-zinc-900 dark:text-white'
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-base sm:text-lg leading-relaxed ${
            light ? 'text-zinc-300' : 'text-zinc-600 dark:text-zinc-400'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

