import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { testimonials } from '../data/portfolioData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide every 5 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section 
      id="testimonials" 
      className="relative py-24 sm:py-32 bg-surface-light dark:bg-surface-dark transition-colors duration-300 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-orange/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="CLIENT & PEER PRAISE"
          title="WHAT PEOPLE SAY"
          subtitle="Feedback from startup founders, faculty advisors, and collaborative design partners."
        />

        {/* Carousel Container */}
        <div className="relative min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full p-8 sm:p-12 rounded-3xl glass-panel border border-zinc-200 dark:border-zinc-800 text-center relative shadow-lg"
            >
              {/* Quote Icon Backdrop */}
              <Quote className="absolute top-6 left-6 w-12 h-12 text-brand-orange/15 rotate-180 pointer-events-none" />

              {/* Star Rating */}
              <div className="flex items-center justify-center gap-1.5 text-brand-amber mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Quote Statement */}
              <p className="font-sans text-lg sm:text-2xl font-medium italic leading-relaxed text-zinc-800 dark:text-zinc-200 mb-8 max-w-2xl mx-auto">
                "{current.quote}"
              </p>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {current.avatar && !current.avatar.startsWith('[') && !current.avatar.includes('path/to') ? (
                  <img
                    src={current.avatar}
                    alt={current.author}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-brand-orange shadow-md"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-brand-orange to-brand-amber text-white font-bold text-[11px] flex items-center justify-center ring-2 ring-brand-orange shadow-md select-none text-center px-1">
                    {current.initials || "[Initials]"}
                  </div>
                )}
                <div className="text-center sm:text-left">
                  <h4 className="font-display text-xl font-bold uppercase tracking-tight text-zinc-900 dark:text-white">
                    {current.author}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-orange dark:text-brand-amber font-mono font-medium">
                    {current.title}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows & Pagination Dots */}
        <div className="flex items-center justify-between mt-8 max-w-xs mx-auto">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="p-3 rounded-full glass-panel hover:bg-brand-orange hover:text-white transition-colors text-zinc-700 dark:text-zinc-300 focus:outline-none"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-brand-orange shadow-orange-glow'
                    : 'w-2.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="p-3 rounded-full glass-panel hover:bg-brand-orange hover:text-white transition-colors text-zinc-700 dark:text-zinc-300 focus:outline-none"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}

