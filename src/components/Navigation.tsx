import React from 'react';
import { Home, User2, Code2, Briefcase, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User2, label: 'About' },
    { id: 'projects', icon: Code2, label: 'Projects' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="relative">
        {/* Blur effect background */}
        <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-xl rounded-full" />
        
        {/* Glass morphism border effect */}
        <div className="absolute inset-0 rounded-full border border-white/10" />
        
        {/* Main navigation */}
        <ul className="relative flex items-center gap-2 px-6 py-4">
          {navItems.map(({ id, icon: Icon, label }) => (
            <li key={id} className="relative">
              <button
                onClick={() => scrollToSection(id)}
                className="group relative p-3 focus:outline-none"
              >
                {/* Active indicator */}
                {activeSection === id && (
                  <span className="absolute inset-0 bg-emerald-500/20 rounded-full" />
                )}
                
                {/* Icon and label container */}
                <div className="relative flex flex-col items-center">
                  <Icon 
                    className={`w-6 h-6 transition-all duration-300 ${
                      activeSection === id 
                        ? 'text-emerald-400 scale-110' 
                        : 'text-gray-400 group-hover:text-gray-100'
                    }`}
                  />
                  
                  {/* Floating label */}
                  <span
                    className={`absolute -top-10 px-3 py-1 bg-gray-800 rounded-full text-xs
                      transition-all duration-300 whitespace-nowrap
                      ${activeSection === id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0'}
                    `}
                  >
                    {label}
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;