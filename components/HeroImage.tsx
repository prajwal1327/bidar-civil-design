'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroImage() {
  return (
    <motion.div
      style={{ position: 'absolute', inset: '-8%' }}
      animate={{
        scale: [1.0, 1.08, 1.04, 1.1, 1.02, 1.0],
        x: [0, -14, 10, -8, 6, 0],
        y: [0, -10, 6, -12, 4, 0],
      }}
      transition={{
        duration: 28,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
      }}
    >
      <Image
        src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=90"
        alt="Premium construction skyline"
        fill
        style={{ objectFit: 'cover' }}
        className="opacity-30"
        priority
      />
    </motion.div>
  );
}
