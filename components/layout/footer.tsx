"use client"

import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedComponent from '@/components/ui/animated-component';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '/' },
        { name: 'Events', href: '/events' },
        { name: 'Coaches', href: '/coaches' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Register', href: '/register' },
      ],
    },
    {
      title: 'Information',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Safety Policy', href: '/safety-policy' },
        { name: 'Terms & Conditions', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="bg-muted text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand / Contact */}
          <AnimatedComponent animation="slideUp" delay={0.1} className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-primary mb-2">TSS Multisports</h2>
              <p className="text-muted-foreground">
                Fun and engaging sports activities for children of all ages and abilities.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Sports Avenue, Sportsville</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+44 (0) 1234 567890</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@tssmultisports.com</span>
              </div>
            </div>
          </AnimatedComponent>

          {/* Links */}
          {footerLinks.map((section, idx) => (
            <AnimatedComponent 
              key={section.title} 
              animation="slideUp" 
              delay={0.2 + idx * 0.1} 
              className="col-span-1"
            >
              <h3 className="font-bold uppercase text-sm mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimatedComponent>
          ))}

          {/* Newsletter */}
          <AnimatedComponent animation="slideUp" delay={0.4} className="col-span-1">
            <h3 className="font-bold uppercase text-sm mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for updates on events and offers.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 text-sm rounded-md bg-background border border-border"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm transition-colors hover:bg-primary/90">
                Subscribe
              </button>
            </div>
          </AnimatedComponent>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-4 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <AnimatedComponent animation="fadeIn" delay={0.5}>
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} TSS Multisports. All rights reserved.
            </p>
          </AnimatedComponent>
          
          <AnimatedComponent animation="fadeIn" delay={0.6}>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </AnimatedComponent>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 