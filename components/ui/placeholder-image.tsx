"use client"

import React from 'react';
import { motion } from 'framer-motion';

interface PlaceholderImageProps {
  className?: string;
}

export default function PlaceholderImage({ className = '' }: PlaceholderImageProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/70 to-secondary rounded-2xl overflow-hidden">
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', damping: 10 }}
        >
          <div className="w-[80%] h-[80%] bg-white/15 backdrop-blur-sm flex items-center justify-center rounded-full border-4 border-white/30">
            <div className="text-white text-7xl md:text-8xl lg:text-9xl font-bold">
              TSS
            </div>
          </div>
        </motion.div>
        
        {/* Animated shapes in the background */}
        <motion.div 
          className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/20"
          animate={{ 
            y: [0, 15, 0], 
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 5,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-20 w-16 h-16 rounded-full bg-white/15"
          animate={{ 
            y: [0, -20, 0], 
            x: [0, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 7,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-32 left-32 w-12 h-12 rounded-full bg-white/10"
          animate={{ 
            y: [0, 25, 0], 
            x: [0, 25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 6,
            ease: "easeInOut" 
          }}
        />
      </div>
    </div>
  );
} 