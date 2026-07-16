import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Let's build something <br/> extraordinary.</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="space-y-4">
              <a href="mailto:alihamzaarshad12@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-indigo-400 transition-colors group">
                <span className="p-3 rounded-xl bg-white/5 group-hover:bg-indigo-500/10 transition-colors">📧</span>
                alihamzaarshad12@gmail.com
              </a>
              <div className="flex items-center gap-4 text-slate-300">
                <span className="p-3 rounded-xl bg-white/5">📱</span>
                +92 333 4838204
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <span className="p-3 rounded-xl bg-white/5">📍</span>
                Lahore, Pakistan
              </div>
            </div>
          </div>
          
          <div className="bg-slate-900/40 border border-white/5 p-8 md:p-12 rounded-3xl">
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <a href="#hero" className="block text-slate-500 hover:text-white transition-colors">Home</a>
                <a href="#about" className="block text-slate-500 hover:text-white transition-colors">About</a>
                <a href="#skills" className="block text-slate-500 hover:text-white transition-colors">Skills</a>
              </div>
              <div className="space-y-4">
                <a href="https://github.com/alihamza-12" target="_blank" className="block text-slate-500 hover:text-white transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/ali-hamza-63537b335/" target="_blank" className="block text-slate-500 hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="text-slate-600 text-sm">
                © 2026 Ali Hamza. All rights reserved. <br/>
                Crafted with React & Tailwind CSS v4.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
