import React from 'react';

const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent tracking-tighter">
          ALI HAMZA.
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#hero" className="text-slate-400 hover:text-white transition-colors cursor-pointer">Home</a>
          <a href="#experience" className="text-slate-400 hover:text-white transition-colors cursor-pointer">Experience</a>
          <a href="#projects" className="text-slate-400 hover:text-white transition-colors cursor-pointer">Projects</a>
          <a href="#skills" className="text-slate-400 hover:text-white transition-colors cursor-pointer">Skills</a>
          <button className="bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/20 text-indigo-400 px-5 py-2 rounded-xl font-medium transition-all">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
