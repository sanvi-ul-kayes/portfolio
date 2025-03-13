import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <div className="text-center space-y-8">
      <div className="relative inline-block">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-400 mx-auto">
          <img
            src="https://i.ibb.co.com/TDm7CGyc/IMG-20250105-023143-420.webp"
            alt="Md. Kayes Molla"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="space-y-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
          Md. Kayes Molla
        </h1>
        <p className="text-xl text-gray-400">Full Stack Developer</p>
      </div>

      <p className="max-w-2xl mx-auto text-gray-300 text-lg">
        Passionate about crafting digital experiences with modern web technologies.
        Specialized in building scalable applications with React, Node.js, and cloud technologies.
      </p>

      <div className="flex justify-center space-x-6">
        <a href="https://github.com/sanvi-ul-kayes" target="_blank" rel="noopener noreferrer"
           className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
          <Github className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com/in/kayes-molla-663798308" target="_blank" rel="noopener noreferrer"
           className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="mailto:kayesmolla124@gmail.com"
           className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}

export default Hero;