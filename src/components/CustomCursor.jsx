import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState('default'); // 'default' | 'hover' | 'view'
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      if (!target) return;

      const projectCard = target.closest('[data-cursor="view"]');
      const interactiveEl = target.closest('button, a, input, textarea, select, [role="button"], [data-cursor="hover"]');

      if (projectCard) {
        setCursorType('view');
      } else if (interactiveEl) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Follower / Action Orb */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full text-white font-bold pointer-events-none"
        animate={{
          x: mousePosition.x - (cursorType === 'view' ? 44 : cursorType === 'hover' ? 24 : 14),
          y: mousePosition.y - (cursorType === 'view' ? 44 : cursorType === 'hover' ? 24 : 14),
          width: cursorType === 'view' ? 88 : cursorType === 'hover' ? 48 : 28,
          height: cursorType === 'view' ? 88 : cursorType === 'hover' ? 48 : 28,
          backgroundColor:
            cursorType === 'view'
              ? 'rgba(232, 89, 12, 0.92)'
              : cursorType === 'hover'
              ? 'rgba(255, 159, 28, 0.3)'
              : 'rgba(232, 89, 12, 0.15)',
          borderColor:
            cursorType === 'view'
              ? 'rgba(255, 255, 255, 0.6)'
              : 'rgba(232, 89, 12, 0.5)',
          scale: 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.4
        }}
        style={{
          borderWidth: cursorType === 'view' ? '2px' : '1.5px',
          backdropFilter: 'blur(4px)',
          boxShadow: cursorType === 'view' ? '0 10px 25px rgba(232, 89, 12, 0.5)' : 'none',
        }}
      >
        {cursorType === 'view' && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="flex items-center gap-1 text-xs uppercase tracking-widest font-extrabold text-white"
          >
            <span>View</span>
            <span className="text-sm">↗</span>
          </motion.div>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-brand-orange pointer-events-none"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: cursorType === 'view' ? 0 : 1,
          scale: cursorType === 'hover' ? 0 : 1
        }}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 600,
        }}
      />
    </div>
  );
}

