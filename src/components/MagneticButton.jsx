import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({
  children,
  className = '',
  strength = 0.35,
  onClick,
  href,
  target,
  rel,
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (clientX - centerX) * strength;
    const deltaY = (clientY - centerY) * strength;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const commonProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    animate: { x: position.x, y: position.y },
    transition: { type: 'spring', stiffness: 200, damping: 15, mass: 0.1 },
    className: `inline-flex items-center justify-center cursor-pointer ${className}`,
    ...props
  };

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} onClick={onClick} {...commonProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} {...commonProps}>
      {children}
    </motion.button>
  );
}

