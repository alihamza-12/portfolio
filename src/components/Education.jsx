import React from 'react';
import Reveal from './Reveal';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal delay={0.1}>
          <h2 className="text-3xl font-bold text-white mb-16 text-center">Academic Background</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative group bg-slate-900/40 border border-white/5 p-10 rounded-3xl hover:border-white/10 transition-all">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Science in Information Technology</h3>
                  <p className="text-indigo-400 font-medium text-lg">University of the Punjab, Lahore, Pakistan</p>
                  <p className="text-slate-500 mt-4 mb-6">2021 – 2025</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0"></div>
                      <p className="text-slate-400">
                        <span className="text-white font-medium">Final Year Project:</span> Scrap Yard Management System (MERN Stack). 
                        Successfully developed a full-stack platform for optimized scrap trading.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                   <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl">
                     🎓
                   </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Education;
