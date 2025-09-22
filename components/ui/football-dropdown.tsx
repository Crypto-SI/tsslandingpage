"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, Users2, Baby, ChevronDown } from "lucide-react";
import Link from "next/link";

interface FootballDropdownProps {
  onItemClick?: () => void;
  onClose?: () => void;
}

const footballPrograms = [
  {
    title: "After School Football",
    description: "Expert coaching for ages 5-12",
    href: "/after-school-football",
    icon: <Crown className="h-5 w-5" />,
    gradient: "from-orange-400 to-red-500",
  },
  {
    title: "Walking Football",
    description: "Low-impact fitness for ages 50+",
    href: "/walking-football",
    icon: <Users2 className="h-5 w-5" />,
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    title: "Football for Toddlers",
    description: "Fun introduction for ages 3-5",
    href: "/toddler-football",
    icon: <Baby className="h-5 w-5" />,
    gradient: "from-green-400 to-emerald-500",
  },
];

export const FootballDropdown = ({ onItemClick, onClose }: FootballDropdownProps) => {
  const handleItemClick = (href: string) => {
    if (onClose) onClose();
    if (onItemClick) onItemClick();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.button
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md hover:bg-primary/10 transition-colors relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Football</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </DropdownMenuTrigger>
      
      <DropdownMenuPortal>
        <DropdownMenuContent
          className="w-72 p-2 bg-background/95 backdrop-blur-md border border-border/50 shadow-lg"
          sideOffset={8}
        >
          <AnimatePresence>
            {footballPrograms.map((program, index) => (
              <motion.div
                key={program.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ delay: index * 0.1 }}
              >
                <DropdownMenuItem
                  className="group relative overflow-hidden rounded-lg p-3 mb-2 cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-primary/50 border border-transparent"
                  onClick={() => handleItemClick(program.href)}
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className={`p-2 rounded-lg bg-gradient-to-br ${program.gradient} text-white shadow-md`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {program.icon}
                    </motion.div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{program.title}</div>
                      <div className="text-xs text-muted-foreground">{program.description}</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </DropdownMenuItem>
              </motion.div>
            ))}
          </AnimatePresence>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};

// Mobile version for collapsible menu
export const FootballDropdownMobile = ({ onItemClick, onClose }: FootballDropdownProps) => {
  const handleItemClick = (href: string) => {
    if (onClose) onClose();
    if (onItemClick) onItemClick();
  };

  return (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
      {footballPrograms.map((program, index) => (
        <motion.div
          key={program.href}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link
            href={program.href}
            onClick={(e) => {
              e.preventDefault();
              handleItemClick(program.href);
            }}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-all duration-200 group"
          >
            <motion.div 
              className={`p-2 rounded-lg bg-gradient-to-br ${program.gradient} text-white`}
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {program.icon}
            </motion.div>
            <div className="flex-1">
              <div className="font-medium text-sm">{program.title}</div>
              <div className="text-xs text-muted-foreground">{program.description}</div>
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};