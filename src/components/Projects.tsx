import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'Node.js', 'MongoDB', 'Redux'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates.',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking with interactive maps and forecasts.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'D3.js', 'Weather API', 'Tailwind'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-700 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;