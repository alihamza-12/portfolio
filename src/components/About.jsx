import React from "react";
import Reveal from "./Reveal";

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
                <span className="text-white font-medium">
                  Full Stack Developer
                </span>{" "}
                with hands-on experience building scalable web applications
                using the{" "}
                <span className="text-indigo-400">
                  MERN Stack (React.js, Node.js, Express.js, MongoDB)
                </span>
                , <span className="text-indigo-400">Next.js</span>, and{" "}
                <span className="text-cyan-400">Vue.js</span>. Skilled in
                engineering secure RESTful APIs, modern backend workflows, and
                responsive, type-safe frontends with{" "}
                <span className="text-white font-medium">TypeScript</span>.{" "}
                Experienced with{" "}
                <span className="text-white font-medium">
                  AWS Cloud hosting
                </span>
                ,{" "}
                <span className="text-white font-medium">
                  CI/CD automation (GitHub Actions)
                </span>
                , and workflow automation using{" "}
                <span className="text-white font-medium">n8n</span>. Driven to
                solve complex system problems and build robust, high-performance
                software.
              </p>

              <p>
                As a graduate with a Bachelor of Science in Information
                Technology from the{" "}
                <span className="text-white">University of the Punjab</span>, I
                am now seeking an entry-level role where I can contribute to
                real-world projects and continue growing as a versatile software
                engineer.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
              <div>
                <p className="text-white font-bold text-2xl mb-1">2026</p>
                <p className="text-slate-500 text-sm italic">
                  Started Backend @ Venture Tech
                </p>
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
