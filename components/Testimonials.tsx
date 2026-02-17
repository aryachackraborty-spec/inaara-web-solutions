
import React from 'react';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  logo: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Vikram Malhotra",
    role: "CEO",
    company: "Zest Digital India",
    quote: "Inaara transformed our backend operations. Their AI automation saved us 40+ man-hours per week. A complete game changer for our scaling strategy.",
    rating: 5,
    logo: "https://via.placeholder.com/80x40/0a0b1e/25d1f4?text=ZEST"
  },
  {
    name: "Ananya Sharma",
    role: "Marketing Director",
    company: "Bharat Retail Hub",
    quote: "The SEO dominance we achieved within 3 months was unprecedented. Our organic traffic skyrocketed by 200%. Team Inaara knows the digital pulse of India.",
    rating: 5,
    logo: "https://via.placeholder.com/80x40/0a0b1e/7c3aed?text=BRH"
  },
  {
    name: "Gopi Gupta",
    role: "CEO",
    company: "Genius Learning Centre, Mumbai",
    quote: "Inaara's web solutions helped us digitize our entire curriculum. Their SEO strategies made us the #1 choice for students in the Mumbai region.",
    rating: 5,
    logo: "https://via.placeholder.com/80x40/0a0b1e/25d1f4?text=GENIUS"
  },
  {
    name: "Abhik Chakraborty",
    role: "CEO",
    company: "Dynamic Group of Fitness",
    quote: "The AI automations integrated into our fitness platform have revolutionized client retention. Incredible work on the high-conversion lead funnels.",
    rating: 5,
    logo: "https://via.placeholder.com/80x40/0a0b1e/7c3aed?text=DYNAMIC"
  },
  {
    name: "Prity Agarwal",
    role: "CEO",
    company: "Eboard Academy Pvt Ltd",
    quote: "Our e-learning portal is now smoother and faster than ever. The software development team at Inaara is top-tier when it comes to performance.",
    rating: 5,
    logo: "https://via.placeholder.com/80x40/0a0b1e/25d1f4?text=EBOARD"
  },
  {
    name: "Rohan Gupta",
    role: "Founder",
    company: "FinLeap Technologies",
    quote: "Blazing fast web development. They delivered a complex SaaS dashboard that is both aesthetically stunning and functionally superior. Highly recommended.",
    rating: 5,
    logo: "https://via.placeholder.com/80x40/0a0b1e/25d1f4?text=FIN"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6 inline-block">Success Stories</span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">Voices of <span className="text-primary italic">Growth</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">See how we've empowered leading Indian brands with next-gen digital infrastructure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass p-8 rounded-[2.5rem] border-white/5 hover:border-primary/30 transition-all group relative overflow-hidden flex flex-col">
              {/* Decorative Quote Icon Background */}
              <div className="absolute top-6 right-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <Quote size={80} className="text-primary" />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(t.rating)].map((_, starIdx) => (
                    <Star key={starIdx} size={14} className="fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-lg text-slate-300 font-light italic leading-relaxed mb-8 flex-grow">
                  "{t.quote}"
                </p>

                <div className="mt-auto flex flex-col gap-6 border-t border-white/5 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-gradient-to-br from-primary to-accent p-[2px]">
                      <div className="size-full rounded-full bg-background flex items-center justify-center font-bold text-white text-base">
                        {t.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-black text-base leading-none">{t.name}</h4>
                      <p className="text-primary text-[10px] font-bold uppercase tracking-widest mt-1 opacity-70">
                        {t.role} @ {t.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="opacity-40 group-hover:opacity-100 transition-opacity">
                    <img 
                      src={t.logo} 
                      alt={t.company} 
                      className="h-6 object-contain filter grayscale group-hover:grayscale-0 transition-all" 
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
