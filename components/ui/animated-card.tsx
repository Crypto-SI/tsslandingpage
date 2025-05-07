"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function AnimatedCard({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  once = true,
}: AnimatedCardProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        transition: { 
          duration,
          delay,
          type: 'spring',
          damping: 15
        } 
      }}
      viewport={{ once }}
      whileHover={{ 
        y: -10,
        transition: { type: 'spring', stiffness: 300 }
      }}
      className={className}
    >
      <Card className="h-full border border-border">
        {children}
      </Card>
    </motion.div>
  );
}

export { CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
export default AnimatedCard; 