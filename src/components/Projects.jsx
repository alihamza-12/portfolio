import React from "react";
import Reveal from "./Reveal";

const Projects = () => {
  const projects = [
    {
      title: "Sync0 -- AI Workflow Platform (Frontend)",
      description:
        "Designed and developed a responsive landing page and conversational AI UI for an AI-powered automation platform.",
      tech: ["React.js", "Tailwind CSS", "Conversational AI UI"],
      github: "https://sync0.dev",
      live: "https://sync0.dev",
      color: "from-blue-500 to-indigo-600",
      showIndex: true,
    },
    {
      title: "Armeco Electronics Store Management",
      description:
        "Built a full-stack MERN application to digitize repair history and customer ledgers with an admin-only portal.",
      tech: ["MERN Stack", "JWT", "Admin Controls"],
      github: "https://nae-store-frontend.vercel.app/",
      live: "https://nae-store-frontend.vercel.app/",
      color: "from-purple-500 to-pink-600",
      showIndex: true,
    },
    {
      title: "AI-Powered Workflow Automations",
      description:
        "Automated Gmail responses and inventory workflows using n8n, LLMs, and tool-calling integrations.",
      tech: [
        "n8n",
        "Google Gemini",
        "Groq",
        "Gmail API",
        "Airtable",
        "LangChain",
      ],
      github: null,
      live: null,
      color: "from-emerald-500 to-teal-600",
      showIndex: false,
    },
    {
      title: "Scrap Yard Management System",
      description:
        "Engineered a full-stack app for scrap buying/selling with JWT auth, role-based access, and secure validation.",
      tech: ["React.js", "Redux Toolkit", "RTK Query", "Tailwind CSS", "JWT"],
      github: "https://github.com/alihamza-12/Scrap-Yard",
      live: "https://scrap-yard-six.vercel.app/",
      color: "from-blue-500 to-indigo-600",
      showIndex: false,
    },
    {
      title: "E-commerce Outfit Platform (Frontend Only)",
      description:
        "Created a responsive e-commerce frontend using Vue.js and Bootstrap with API integration and cart persistence.",
      tech: ["Vue.js", "Bootstrap", "JavaScript", "API Integration"],
      github: "https://github.com/alihamza-12/e-commerce-outfits",
      live: "https://e-commerce-outfits-eta.vercel.app/",
      color: "from-purple-500 to-pink-600",
      showIndex: false,
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Featured Works
            </h2>
            <p className="text-slate-400">
              Transforming ideas into digital reality
            </p>
          </div>
          <a
            href="https://github.com/alihamza-12"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-2"
          >
            View all on GitHub <span>→</span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="group relative bg-slate-900/30 border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all flex flex-col h-full">
                {/* Card Header (Gradient Image Placeholder) */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.color} p-8 flex items-center justify-center relative`}
                >
                  {project.showIndex ? (
                    <div className="text-center">
                      <p className="text-white font-bold opacity-20 text-4xl select-none">
                        Project 0{idx + 1}
                      </p>
                    </div>
                  ) : null}

                  {/* Overlay Links */}
                  {project.github || project.live ? (
                    <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-white text-slate-950 hover:bg-slate-200 transition-colors"
                        >
                          Repo
                        </a>
                      ) : null}
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
                        >
                          Live
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>

                {/* Card Body */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-bold uppercase tracking-widest text-slate-500 px-2 py-1 rounded bg-slate-800/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
