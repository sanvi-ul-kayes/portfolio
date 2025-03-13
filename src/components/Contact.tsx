import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-400">
          Have a project in mind? Let's work together to bring your ideas to life.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-emerald-400/10 rounded-lg">
                <Mail className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold">Email</h3>
            </div>
            <a href="mailto:kayesmolla124@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
              kayesmolla124@gmail.com
            </a>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Social Links</h3>
            <div className="space-y-3">
              <a 
                href="https://github.com/sanvi-ul-kayes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>github.com/sanvi-ul-kayes</span>
              </a>
              <a 
                href="https://linkedin.com/in/kayes-molla-663798308" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>linkedin.com/in/kayes-molla-663798308</span>
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;