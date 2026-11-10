import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 600);
          }, 300);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  const nameLetters = ['S', 'H', 'A', 'F', 'I'];

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0D0D0E] text-white overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          {/* Ambient Amber Glow in Preloader */}
          <div className="absolute w-96 h-96 rounded-full bg-brand-orange/20 blur-[120px] pointer-events-none" />

          {/* Center Brand Monogram and Name */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Stylized Logo mark */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-tr from-brand-orange to-brand-amber flex items-center justify-center shadow-orange-glow"
            >
              <span className="font-anton text-3xl tracking-widest text-white">S</span>
            </motion.div>

            {/* Staggered Name Letters */}
            <div className="flex items-center gap-2 overflow-hidden mb-3">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.08,
                    ease: [0.33, 1, 0.68, 1]
                  }}
                  className="font-display font-extrabold text-5xl md:text-7xl tracking-wider text-white"
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-xs md:text-sm font-sans tracking-[0.3em] uppercase text-zinc-400 mb-8"
            >
              Creative Agency Portfolio • Kerala
            </motion.p>

            {/* Numeric Counter & Progress Bar */}
            <div className="w-56 md:w-72">
              <div className="flex justify-between items-center text-xs font-mono text-zinc-400 mb-2">
                <span>LOADING EXPERIENCE</span>
                <span className="text-brand-amber font-bold">{progress}%</span>
              </div>
              <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-orange to-brand-amber"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

