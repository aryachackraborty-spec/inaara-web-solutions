
import React from 'react';

const steps = [
  { id: '01', title: 'Strategy', desc: 'Deep audit of your current ecosystem and market gap analysis.' },
  { id: '02', title: 'Build', desc: 'Rapid development of funnels, sites, and advertising creative.' },
  { id: '03', title: 'Automate', desc: 'Integrating AI agents to handle lead nurture and backend ops.' },
  { id: '04', title: 'Scale', desc: 'Pushing performance marketing to drive exponential growth.' },
];

const Process: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">Our Deployment Process</h2>
          <p className="text-slate-400 text-lg">From initial concept to hyper-scaling.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-[2px] bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 z-0" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="size-20 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(37,209,244,0.3)] group-hover:bg-primary transition-all duration-500">
                <span className="text-white group-hover:text-background font-black text-2xl transition-colors">{step.id}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
