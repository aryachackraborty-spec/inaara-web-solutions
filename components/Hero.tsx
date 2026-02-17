
import React from 'react';
import { ChevronRight, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-bounce">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary">The Future of Growth is AI</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.95] md:leading-[0.9]">
            AI Powered <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent">Growth Systems</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            We build high-converting digital ecosystems that scale your brand online through intelligent automation and data-driven strategy.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={scrollToContact}
              className="group w-full sm:w-auto px-8 py-5 bg-primary text-background font-black rounded-2xl text-lg hover:shadow-[0_0_40px_rgba(37,209,244,0.5)] transition-all flex items-center justify-center gap-2"
            >
              Book Free Strategy Call
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="tel:7003316830"
              className="w-full sm:w-auto px-8 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-3"
            >
              <Phone className="size-5 text-primary" />
              Call: 7003316830
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;