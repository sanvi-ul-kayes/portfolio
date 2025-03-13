import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Full Stack Developer',
      period: '2021 - Present',
      description: 'Led development of enterprise-scale applications, mentored junior developers, and implemented CI/CD pipelines.',
      achievements: [
        'Reduced application load time by 40%',
        'Implemented microservices architecture',
        'Led team of 5 developers',
      ],
    },
    {
      company: 'Digital Innovations Ltd.',
      position: 'Full Stack Developer',
      period: '2019 - 2021',
      description: 'Developed and maintained multiple client projects using React and Node.js.',
      achievements: [
        'Delivered 10+ successful projects',
        'Introduced automated testing',
        'Improved code review process',
      ],
    },
    {
      company: 'StartUp Hub',
      position: 'Frontend Developer',
      period: '2018 - 2019',
      description: 'Built responsive web applications and implemented modern UI/UX designs.',
      achievements: [
        'Developed component library',
        'Optimized frontend performance',
        'Collaborated with UX team',
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-emerald-400/10 rounded-lg">
                <Briefcase className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="space-y-4 flex-1">
                <div>
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <p className="text-emerald-400">{exp.company}</p>
                  <p className="text-gray-400">{exp.period}</p>
                </div>
                <p className="text-gray-300">{exp.description}</p>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;