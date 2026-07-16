import React from 'react';
import Reveal from './Reveal';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'Vue.js (2/3)', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3', 'JavaScript (ES6+)'],
      icon: '🎨'
    },
    {
      title: 'Backend & DB',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'MongoDB', 'Mongoose'],
      icon: '⚙️'
    },
    {
      title: 'State & Logic',
      skills: ['Redux Toolkit', 'RTK Query', 'Zustand', 'React Router', 'React Hook Form', 'Zod'],
      icon: '🧠'
    },
    {
      title: 'Tools & Auth',
      skills: ['JWT', 'RBAC', 'Git', 'GitHub', 'Postman', 'VS Code', 'EmailJS', 'Nodemailer'],
      icon: '🛠️'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-16 text-center">Technical Arsenal</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="bg-slate-900/40 border border-white/5 p-8 rounded-3xl hover:border-indigo-500/20 transition-all group h-full">
                <div className="text-3xl mb-6 grayscale group-hover:grayscale-0 transition-all">{category.icon}</div>
                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider text-sm">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-slate-400 text-sm hover:text-indigo-400 hover:border-indigo-400/30 transition-all cursor-default text-center flex-1 min-w-[80px]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
