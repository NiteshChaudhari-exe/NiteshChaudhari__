import { motion } from 'framer-motion';
import React from 'react';

interface PageSectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth, natural feel
      delay: delay * 0.1,
    },
  }),
};

export function PageSection({ id, children, className = '', delay = 0 }: PageSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants as any}
      custom={delay}
    >
      {children}
    </motion.section>
  );
}
