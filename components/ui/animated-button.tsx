"use client";

import { motion } from 'framer-motion';
import { Button, ButtonProps } from "@/components/ui/button";
import React from 'react';

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedButton({
  children,
  className = '',
  delay = 0,
  ...props
}: AnimatedButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        transition: { 
          duration: 0.3,
          delay,
          type: 'spring',
          damping: 15
        } 
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { type: 'spring', stiffness: 400 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Button className={className} {...props}>
        {children}
      </Button>
    </motion.div>
  );
}

export default AnimatedButton; 