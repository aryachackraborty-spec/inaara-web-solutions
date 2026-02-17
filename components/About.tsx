
import React from 'react';
import { Target, Eye, Terminal, TrendingUp, Megaphone, Share2, Star } from 'lucide-react';

const stats = [
  { label: 'Member Specialists', value: '18+' },
  { label: 'Modern Perspective', value: 'Student-Led' },
  { label: 'Zero Guesswork', value: 'Data-Driven' },
  { label: 'Scale-Ready Metrics', value: 'ROI Focused' },
];

const About: React.FC = () => {
  return (
    <section className="py-24 bg-navy/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          {/* Story Card */}
          <div className="lg:col-span-7 glass p-12 rounded-3xl border-primary/10 hover:border-primary/30 transition-all">
            <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">Born from Curiosity, <br/><span className="text-primary">Driven by Data</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Inaara Web Solutions started as a bold vision in a student dormitory. We saw a widening gap between traditional business operations and the rapid evolution of Artificial Intelligence. As a student-led startup, we bring fresh perspectives, agility, and a native understanding of the digital landscape to empower businesses with cutting-edge AI tools.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-primary text-3xl font-black mb-1">{stat.value}</p>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission/Vision Vertical */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex-1 glass p-8 rounded-3xl border-primary/10 group hover:border-primary/30 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <Target className="text-primary size-8" />
                <h3 className="text-white font-bold text-2xl uppercase">Mission</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">Scaling brands through the powerful synergy of cinematic storytelling, strategic digital marketing, and complex automation workflows.</p>
            </div>
            <div className="flex-1 glass p-8 rounded-3xl border-primary/10 group hover:border-primary/30 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <Eye className="text-primary size-8" />
                <h3 className="text-white font-bold text-2xl uppercase">Vision</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">To become a global growth partner, leading the evolution of AI-driven business solutions and redefining digital excellence for the next generation.</p>
            </div>
          </div>
        </div>

        {/* Founder Spotlight */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">The Architect</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[2rem] border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 size-64 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="w-64 h-64 flex-shrink-0 relative group">
              <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC265GBblkv9ewUPoDQvI31Civpqs2_isjIs7eN-OXyREl-8qTG7Y_-WEF20W7q-HJT1ly0O4g4UHTxBbeQtBNpJFCq0MP5m1GDOqinc-pTafIzqnpUK0E1yTYDUh0FteeuHhw-UvPh-pGQN-vIyw_INAmfGbcmt56UWthc0AMufVGaDzdsBwkc_YIq3PVDb6KoG9uHtnxH4rjLA3AtokzrAabajt71OSwDO2_VMqsTJOyr6vHJJ_kwKjC2ZOoDa9NHJWQPtQDQ7w0" 
                alt="Arya Chakraborty"
                className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-background px-4 py-2 rounded-lg font-black text-xs shadow-xl z-20">
                Founder & CEO
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-4xl font-black text-white mb-2">Arya Chakraborty</h3>
              <p className="text-primary font-bold tracking-widest uppercase text-xs mb-6">18-year-old Tech Visionary</p>
              <p className="text-slate-400 text-lg leading-relaxed italic mb-8">
                "Age is just a number when it comes to digital disruption. At Inaara, we don't just use tools; we build the future frameworks that empower global brands."
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary text-xs font-bold rounded-full flex items-center gap-2">
                  <Terminal size={14} /> B.Tech Student
                </span>
                <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary text-xs font-bold rounded-full flex items-center gap-2">
                  <TrendingUp size={14} /> SEO Expert
                </span>
                <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary text-xs font-bold rounded-full flex items-center gap-2">
                  <Megaphone size={14} /> Digital Strategist
                </span>
              </div>
              <div className="flex justify-center md:justify-start gap-4 mt-8">
                <Share2 className="text-slate-600 hover:text-primary cursor-pointer transition-colors" />
                <Star className="text-slate-600 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
