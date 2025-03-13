import React from 'react';

const About = () => {
  const skills = [
    { 
      category: 'Frontend', 
      items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS']
    },
    { 
      category: 'Backend', 
      items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'] 
    },
    { 
      category: 'Tools & Version Control', 
      items: ['Git', 'GitHub', 'VS Code', 'Chrome DevTools'] 
    },
    { 
      category: 'Currently Learning', 
      items: ['TypeScript', 'Next.js', 'Redux', 'PostgreSQL'] 
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            I'm an aspiring full-stack developer with a strong foundation in web development fundamentals.
            My journey in programming started with a passion for creating user-friendly web applications
            and solving real-world problems through code.
          </p>
          <p>
            Currently, I'm focused on building projects that strengthen my understanding of modern web
            technologies while learning new tools and frameworks. I'm particularly interested in React
            ecosystem and full-stack development with the MERN stack.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map(({ category, items }) => (
          <div 
            key={category} 
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-emerald-500/30 transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-emerald-400">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map(item => (
                <span
                  key={item}
                  className="px-3 py-1 bg-gray-700/50 rounded-full text-sm border border-gray-600/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center text-gray-400">
        <p>
          I'm always open to learning new technologies and collaborating on interesting projects.
          Feel free to reach out if you'd like to connect or work together!
        </p>
      </div>
    </div>
  );
}

export default About;