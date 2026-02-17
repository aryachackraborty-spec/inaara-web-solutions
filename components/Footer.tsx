
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './Navbar';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Process', href: '#process' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
    ],
    services: [
      { name: 'SMM & Content', href: '#services' },
      { name: 'AI Automations', href: '#services' },
      { name: 'Web Development', href: '#services' },
      { name: 'Performance Ads', href: '#services' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-background border-t border-white/5">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 right-0 size-96 bg-primary/5 blur-[120px] rounded-full -mb-48 -mr-48 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <BrandLogo size={50} />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Architecting high-performance digital ecosystems for the next generation of global brands. We bridge the gap between human creativity and AI-powered scale.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em]">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-slate-400 text-sm hover:text-primary flex items-center gap-1 transition-colors group"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em]">Solutions</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-slate-400 text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em]">Connect With Us</h4>
            <div className="space-y-6">
              <a href="mailto:hello@inaara.web" className="flex items-start gap-4 group">
                <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Email Support</p>
                  <p className="text-white font-bold group-hover:text-primary transition-colors">hello@inaara.web</p>
                </div>
              </a>

              <a href="tel:7003316830" className="flex items-start gap-4 group">
                <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Call for Strategy</p>
                  <p className="text-white font-bold group-hover:text-primary transition-colors">+91 700 331 6830</p>
                </div>
              </a>

              <div className="flex items-start gap-4 group">
                <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Headquarters</p>
                  <p className="text-white font-bold">Kolkata, West Bengal, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em]">
              © {currentYear} INAARA WEB SOLUTIONS.
            </p>
            <div className="hidden md:block w-px h-4 bg-white/10" />
            <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] animate-pulse">
              ENGINEERED FOR EXPONENTIAL GROWTH
            </p>
          </div>

          <div className="flex gap-8">
            {footerLinks.legal.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[10px] font-black text-slate-500 hover:text-primary uppercase tracking-[0.2em] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
