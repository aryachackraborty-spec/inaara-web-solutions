
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Process from './components/Process';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // New Order: home, about, services, process, testimonials, contact
      const sections = ['home', 'about', 'services', 'process', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      {/* Background Decor */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0 animate-pulse-slow" />
      
      <Navbar activeSection={activeSection} />
      
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        <section id="services" className="scroll-mt-20">
          <Capabilities />
          <Services />
        </section>

        <section id="process" className="scroll-mt-20">
          <Process />
        </section>

        <section id="testimonials" className="scroll-mt-20">
          <Testimonials />
        </section>
        
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
