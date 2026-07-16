import React from 'react';
import Reveal from './Reveal';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-indigo-500/50"></span>
            About Me
          </h2>
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              I am a <span className="text-white font-medium">MERN Stack Software Engineer</span> with hands-on experience in building 
              full-stack web applications. My expertise lies in <span className="text-indigo-400">React.js, Node.js, Express.js, and MongoDB</span>, 
              complemented by strong frontend experience in <span className="text-cyan-400">Vue.js</span>.
            </p>
            <p>
              I specialize in developing responsive user interfaces, secure RESTful APIs, JWT-based authentication, 
              and database-driven applications. I have a proven track record of working with modern state management 
              libraries like Redux Toolkit and Zustand, as well as handling complex form validations with Zod and React Hook Form.
            </p>
            <p>
              As a graduate with a Bachelor of Science in Information Technology from the <span className="text-white">University of the Punjab</span>, 
              I am now seeking an entry-level role where I can contribute to real-world projects and continue growing 
              as a versatile software engineer.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
            <div>
              <p className="text-white font-bold text-2xl mb-1">2026</p>
              <p className="text-slate-500 text-sm italic">Started Backend @ Venture Tech</p>
            </div>
            <div>
              <p className="text-white font-bold text-2xl mb-1">2025</p>
              <p className="text-slate-500 text-sm italic">BS IT Graduate</p>
            </div>
            <div>
              <p className="text-white font-bold text-2xl mb-1">MERN</p>
              <p className="text-slate-500 text-sm italic">Core Expertise</p>
            </div>
            <div>
              <p className="text-white font-bold text-2xl mb-1">Vue.js</p>
              <p className="text-slate-500 text-sm italic">Secondary Stack</p>
            </div>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
