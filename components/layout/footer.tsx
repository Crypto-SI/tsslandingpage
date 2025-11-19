"use client"

import Link from 'next/link';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Football Programs',
      links: [
        { name: 'After School Football', href: '/after-school-football' },
        { name: 'Walking Football', href: '/walking-football' },
        { name: 'Football for Toddlers', href: '/toddler-football' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '/' },
        { name: 'Events', href: '/events' },
        { name: 'Coaches', href: '/coaches' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Partners', href: '/partners' },
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

  return (
    <footer className="bg-muted text-muted-foreground dark:bg-muted dark:text-muted-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand / Contact */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-red-600 mb-2">TSS Multisports</h2>
              <p className="text-sm">
                Fun and engaging sports activities for children of all ages and abilities.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span>📍</span>
                <span>123 Sports Avenue, Sportsville</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span>📞</span>
                <span>+44 (0) 1234 567890</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span>✉️</span>
                <span>info@tssmultisports.com</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, idx) => (
            <div key={section.title} className="col-span-1">
              <h3 className="font-bold uppercase text-sm mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-sm hover:text-red-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-4 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm mb-2 md:mb-0 text-center md:text-left">
            © {new Date().getFullYear()} TSS Multisports. All rights reserved.
          </p>

          <div className="flex space-x-4 items-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600">
              📘
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600">
              📷
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600">
              🐦
            </a>
          </div>

          <a
            href="https://webarastudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
            aria-label="Built with love by Webara Studio"
          >
            <img
              src="/webarabadge.png"
              alt="Built with love by Webara Studio"
              className="h-10 w-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
