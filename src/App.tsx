import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User2, ScrollText } from 'lucide-react';

// Components
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => setIsScrolling(false), 150);

      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navigation activeSection={activeSection} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Hero />
        </section>

        <section id="about" className="min-h-screen py-20">
          <About />
        </section>

        <section id="projects" className="min-h-screen py-20">
          <Projects />
        </section>

        <section id="experience" className="min-h-screen py-20">
          <Experience />
        </section>

        <section id="contact" className="min-h-screen py-20">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;