
import React from 'react';
import { 
  Megaphone, 
  TrendingUp, 
  Globe, 
  PlayCircle, 
  Settings, 
  MapPin, 
  Sparkles, 
  Zap 
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.link/k3qcha";

// Using consistent Lucide icons across the service categories
const serviceCategories = [
  { icon: Megaphone, title: 'SMM', points: ['Increased Engagement', 'Brand Authority', 'Community Growth'] },
  { icon: TrendingUp, title: 'Performance Marketing', points: ['Targeted Reach', 'Lower CPA', 'Scalable ROI'] },
  { icon: Globe, title: 'Web Dev', points: ['Responsive Design', 'High Speed', 'SEO Optimized'] },
  { icon: PlayCircle, title: 'Video Editing', points: ['4K Quality', 'Viral Hooks', 'Color Grading'] },
  { icon: Settings, title: 'Software Dev', points: ['Cloud Ready', 'Secure Architecture', 'Custom API'] },
  { icon: MapPin, title: 'SEO & GMB', points: ['Top Rankings', 'Map Visibility', 'Organic Traffic'] },
  { icon: Sparkles, title: 'AI Automations', points: ['Zero Manual Tasks', 'Error Reduction', '24/7 Efficiency'] },
  { icon: Zap, title: 'AI Sales Funnels', points: ['High Conversion', 'Automated Lead Gen', 'Premium UX'] },
];

const Services: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6 inline-block">Our Expertise</span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">What We <span className="text-primary italic">Do Best</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">High-impact, futuristic solutions designed to scale your business with modern technology.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={i} className="glass p-8 rounded-[2rem] border-white/5 hover:border-primary/40 group transition-all flex flex-col justify-between">
                <div>
                  <div className="size-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 border border-primary/10 group-hover:bg-primary transition-colors duration-500">
                    <Icon size={32} className="text-primary group-hover:text-background transition-colors" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase">{service.title}</h3>
                  <ul className="space-y-3 mb-10">
                    {service.points.map((p, pi) => (
                      <li key={pi} className="flex items-center gap-3 text-slate-400 text-sm">
                        <div className="size-4 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="size-1.5 rounded-full bg-primary" />
                        </div>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 border border-primary/20 text-primary font-bold rounded-xl group-hover:bg-primary group-hover:text-background transition-all text-center"
                >
                  Get Started
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
