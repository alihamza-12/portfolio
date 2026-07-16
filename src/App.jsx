import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';
import Reveal from './components/Reveal';

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <SectionDivider type="slanted" className="-mt-12 z-10" />
        <About />
        <SectionDivider type="wave" className="bg-slate-950/50" />
        <Experience />
        <SectionDivider type="slanted" className="bg-slate-950/50 -mt-8" />
        <Projects />
        <Skills />
        <SectionDivider type="wave" />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
