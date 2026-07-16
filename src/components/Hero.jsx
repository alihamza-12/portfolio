import React from 'react';
import aliImg from '../assets/ali-hamza.jpeg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for new roles
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              MERN Stack <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Software Engineer
              </span>
            </h1>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
              Hi, I'm <span className="text-white font-medium">Ali Hamza</span>. I specialize in building full-stack web applications 
              using React, Node.js, Express, and MongoDB. I'm passionate about creating seamless user experiences 
              and scalable backend architectures.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#projects" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95">
                Explore Work
              </a>
              <a href="mailto:alihamzaarshad12@gmail.com" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold backdrop-blur-sm transition-all active:scale-95">
                Contact Me
              </a>
            </div>
            
            {/* Social Links */}
            <div className="mt-12 flex justify-center md:justify-start gap-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
              <a href="https://github.com/alihamza-12" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/ali-hamza-63537b335/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
        </motion.div>

          {/* Right Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative aspect-square md:aspect-auto md:h-[500px] w-full bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl group-hover:border-indigo-500/30 transition-all duration-500">
              <img 
                src={aliImg} 
                alt="Ali Hamza" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-slate-900/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl hidden md:block"
            >
               <p className="text-xs text-slate-500 mb-1">Experience</p>
               <p className="text-lg font-bold text-white">Entry Level</p>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 -right-6 bg-slate-900/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl hidden md:block"
            >
               <p className="text-xs text-slate-500 mb-1">Focus</p>
               <p className="text-lg font-bold text-indigo-400">MERN Stack</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-cyan-500/10 rounded-full blur-[100px]"></div>
      </div>
    </section>
  );
};

export default Hero;
