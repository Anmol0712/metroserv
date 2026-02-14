import { motion } from 'framer-motion';

// Page transitions
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  out: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

// Fade in up animation
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    }
  }
};

// Scale up animation
export const scaleUp = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    }
  }
};

// Stagger children
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

// Button hover effects
export const buttonHover = {
  hover: {
    scale: 1.03,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.98,
  },
};

// Card hover effects
export const cardHover = {
  hover: {
    y: -4,
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

// Navbar scroll effect
export const navScrollVariants = {
  scrolled: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  top: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    backdropFilter: 'blur(0px)',
    boxShadow: 'none',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

// For reduced motion preferences
export const prefersReducedMotion = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  return false;
};