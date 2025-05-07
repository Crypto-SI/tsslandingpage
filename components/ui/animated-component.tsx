"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedComponentProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideIn' | 'scale' | 'bounce';
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function AnimatedComponent({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  duration = 0.5,
  once = false,
}: AnimatedComponentProps) {
  const animations = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration, delay }
      }
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration, 
          delay,
          type: 'spring',
          damping: 15
        }
      }
    },
    slideIn: {
      hidden: { opacity: 0, x: -50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration, 
          delay,
          type: 'spring',
          damping: 15
        }
      }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration, 
          delay
        }
      }
    },
    bounce: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration, 
          delay,
          type: 'spring',
          stiffness: 200,
          damping: 15
        }
      }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={animations[animation]}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedComponent; 