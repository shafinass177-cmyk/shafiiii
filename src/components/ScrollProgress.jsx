import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[90] bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-brand-amber via-brand-orange to-red-500 origin-left shadow-[0_0_12px_rgba(232,89,12,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
}

