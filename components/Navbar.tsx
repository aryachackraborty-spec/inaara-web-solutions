
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const STRATEGY_CALL_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeax27rHE6ZcNayp-Fq4eW4XEFtKr9go1coY0UsAxoBiAR2bg/viewform?usp=publish-editor";

export const BrandLogo: React.FC<{ size?: number; showText?: boolean }> = ({ size = 40, showText = true }) => (
  <div className="flex items-center gap-4 group cursor-pointer">
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-[0_0_8px_rgba(37,209,244,0.6)] group-hover:scale-110 transition-transform duration-500"
      >
        <defs>
          <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#25d1f4" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Stylized A Shape */}
        <path
          d="M50 10L15 85H30L50 35L70 85H85L50 10Z"
          fill="url(#logo-grad)"
          style={{ filter: 'url(#glow)' }}
        />
        {/* Orbital Swoosh */}
        <path
          d="M20 75C20 75 35 45 70 35C85 30 95 40 85 55C75 70 40 85 20 75Z"
          stroke="#25d1f4"
          strokeWidth="3"
          strokeLinecap="round"
          className="animate-pulse"
        />
        {/* Sparkle */}
        <circle cx="75" cy="30" r="2" fill="white" className="animate-ping" />
        <path d="M75 25V35M70 30H80" stroke="white" strokeWidth="1" />
      </svg>
    </div>
    {showText && (
      <div className="flex flex-col leading-none">
        <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Inaara</span>
        <span className="text-[9px] text-primary font-bold tracking-[0.4em] uppercase mt-0.5">Web Solutions</span>
      </div>
    )}
  </div>
);

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-primary/10 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')}>
            <BrandLogo />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-xs font-black uppercase tracking-widest transition-colors hover:text-primary ${
                  activeSection === link.href.substring(1) ? 'text-primary' : 'text-slate-500'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={STRATEGY_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-background px-6 py-2.5 rounded-lg font-black text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(37,209,244,0.4)] transition-all inline-block"
            >
              Book Strategy Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-primary/10 px-4 py-8 flex flex-col gap-8 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-2xl font-black text-white hover:text-primary uppercase italic"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={STRATEGY_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-primary text-background px-6 py-5 rounded-2xl font-black text-lg uppercase text-center"
          >
            Book Strategy Call
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
