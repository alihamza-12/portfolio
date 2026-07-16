import React from 'react';
import Reveal from './Reveal';

const Experience = () => {
  const experiences = [
    {
      role: 'Backend Developer (Node.js)',
      company: 'Venture Tech',
      location: 'Lahore, Pakistan',
      period: 'Jan 2026 – Present',
      points: [
        'Engineered scalable RESTful APIs using Node.js and Express.js',
        'Designed and optimized MongoDB schemas using Mongoose',
        'Implemented secure JWT-based authentication system',
        'Developed features like user profiles, connection requests, and paginated APIs',
        'Integrated essential services like Nodemailer, node-cron, and dotenv'
      ],
      color: 'indigo'
    },
    {
      role: 'Frontend Developer (React.js)',
      company: 'Tech Arts Solutions',
      location: 'Lahore, Pakistan',
      period: 'Sep 2025 – Dec 2025',
      points: [
        'Built responsive UI components using React.js & Tailwind CSS',
        'Managed state using Redux Toolkit, RTK Query, and Zustand',
        'Integrated complex APIs using Fetch and RTK Query',
        'Implemented robust authentication and validation (React Hook Form, Zod)',
        'Developed a comprehensive Scrap Yard Management System'
      ],
      color: 'purple'
    },
    {
      role: 'Trainee Software Engineer (Vue.js)',
      company: 'Developers Studio',
      location: 'Lahore, Pakistan',
      period: 'May 2025 – Aug 2025',
      points: [
        'Developed web applications using Vue.js and Bootstrap',
        'Built reusable components and handled API integrations',
        'Created an HRMS system with role-based dashboards',
        'Developed an e-commerce platform with cart and local storage features',
        'Utilized Git/GitHub for team collaboration'
      ],
      color: 'cyan'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-16 text-center">Professional Path</h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="relative pl-8 border-l border-white/5 pb-12 last:pb-0">
                {/* Timeline Dot */}
                <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-${exp.color}-500 shadow-[0_0_10px_rgba(var(--${exp.color}-500-rgb),0.5)]`}></div>
                
                <div className="bg-slate-900/40 border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className={`text-${exp.color}-400 font-medium`}>{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-300 font-medium">{exp.period}</p>
                      <p className="text-slate-500 text-sm">{exp.location}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-slate-400 flex items-start gap-3">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-${exp.color}-500 flex-shrink-0Shadow`}></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
