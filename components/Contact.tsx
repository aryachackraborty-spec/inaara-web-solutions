
import React from 'react';
import { Mail, Phone, ArrowRight, Terminal } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Contact Us
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
                Let’s Build the <br/>
                <span className="text-primary italic">Future</span> of <br/>Your Brand.
              </h2>
              <p className="text-xl text-slate-400 max-w-lg font-light">
                Minimalist design meeting high-impact performance. We don't just deliver; we scale.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h4 className="text-primary font-black text-xs tracking-widest uppercase">Call Us</h4>
                <div className="space-y-3">
                  <a href="tel:7003316830" className="flex items-center gap-3 text-2xl font-bold text-white hover:text-primary transition-colors">
                    <Phone size={20} className="text-primary" /> 700 331 6830
                  </a>
                  <a href="tel:9073568772" className="flex items-center gap-3 text-2xl font-bold text-white hover:text-primary transition-colors">
                    <Phone size={20} className="text-primary" /> 907 356 8772
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-primary font-black text-xs tracking-widest uppercase">Email Us</h4>
                <a href="mailto:hello@inaara.web" className="flex items-center gap-3 text-2xl font-bold text-white hover:text-primary transition-colors">
                  <Mail size={20} className="text-primary" /> hello@inaara.web
                </a>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-[2.5rem] border-primary/20 relative shadow-2xl">
            <div className="absolute -top-10 -right-10 size-40 bg-primary/20 blur-[80px] rounded-full" />
            
            <form className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-700" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-700" 
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Project Category</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer">
                  <option className="bg-background">Web & App Development</option>
                  <option className="bg-background">AI Automations</option>
                  <option className="bg-background">Performance Marketing</option>
                  <option className="bg-background">Cinematic Brand Identity</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your mission..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-700 resize-none"
                ></textarea>
              </div>

              <button className="group w-full bg-primary text-background font-black py-6 rounded-2xl text-xl hover:shadow-[0_0_30px_rgba(37,209,244,0.4)] transition-all flex items-center justify-center gap-4">
                Book Strategy Call
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              
              <p className="text-center text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                Typical Response: Under 12 Hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
