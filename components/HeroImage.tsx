'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroImage() {
  return (
    <motion.div
      style={{ position: 'absolute', inset: '-8%' }}
      animate={{
        scale: [1.0, 1.1, 1.04, 1.12, 1.02, 1.0],
        x: [0, -18, 12, -10, 8, 0],
        y: [0, -12, 8, -14, 6, 0],
      }}
      transition={{
        duration: 12,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
      }}
    >
      <Image
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=90"
        alt="Luxury construction project"
        fill
        style={{ objectFit: 'cover' }}
        className="opacity-45"
        priority
      />
    </motion.div>
  );
}
