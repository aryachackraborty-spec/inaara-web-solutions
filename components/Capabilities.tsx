
import React from 'react';
import { Users, TrendingUp, Code, Video, Cpu, Search, Bot, Filter } from 'lucide-react';

const capabilities = [
  { icon: Users, title: 'SMM', desc: 'Aggressive social media growth through trend-aligned content and community architecture.' },
  { icon: TrendingUp, title: 'Performance Marketing', desc: 'High-ROI ad campaigns built on raw data and psychological triggers.' },
  { icon: Code, title: 'Web Dev', desc: 'Modern, blazing-fast web applications designed for conversion and SEO dominance.' },
  { icon: Video, title: 'Video Editing', desc: 'Cinematic short and long-form content engineered to hold attention.' },
  { icon: Cpu, title: 'Software Dev', desc: 'Custom internal tools and SaaS products to streamline your core operations.' },
  { icon: Search, title: 'SEO', desc: 'Search engine optimization that lands your brand on page one consistently.' },
  { icon: Bot, title: 'AI Automations', desc: 'Replace manual labor with intelligent bots and automated workflows.' },
  { icon: Filter, title: 'AI Funnels', desc: 'Sales pipelines that use AI to qualify leads and personalize experiences.' },
];

const Capabilities: React.FC = () => {
  return (
    <section className="py-24 bg-navy/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Core Capabilities</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, idx) => (
            <div key={idx} className="glass group p-8 rounded-2xl flex flex-col gap-5 hover:scale-[1.02] transition-all border border-white/5 hover:border-primary/50">
              <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
