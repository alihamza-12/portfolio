import React from "react";
import Reveal from "./Reveal";

import sync0Img from "../assets/synco.GIF";
import armecoImg from "../assets/newarmeco.GIF";
import scrapImg from "../assets/Scrapyad.GIF";
import ecommerceImg from "../assets/ecommerce.GIF";

const Projects = () => {
  const projects = [
    {
      title: "Sync0 -- AI Workflow Platform (Frontend)",
      description:
        "Designed and developed a responsive landing page and conversational AI UI for an AI-powered automation platform.",
      tech: ["React.js", "Tailwind CSS", "Conversational AI UI"],
      github: "https://sync0.dev",
      live: "https://sync0.dev",
      showIndex: true,
      image: sync0Img,
      isIcon: false,
    },
    {
      title: "Armeco Electronics Store Management",
      description:
        "Built a full-stack MERN application to digitize repair history and customer ledgers with an admin-only portal.",
      tech: ["MERN Stack", "JWT", "Admin Controls"],
      github: "https://nae-store-frontend.vercel.app/",
      live: "https://nae-store-frontend.vercel.app/",
      showIndex: true,
      image: armecoImg,
      isIcon: false,
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
      showIndex: false,
      image: "https://cdn.simpleicons.org/n8n/FF6C37",
      isIcon: true,
    },
    {
      title: "Scrap Yard Management System",
      description:
        "Engineered a full-stack app for scrap buying/selling with JWT auth, role-based access, and secure validation.",
      tech: ["React.js", "Redux Toolkit", "RTK Query", "Tailwind CSS", "JWT"],
      github: "https://github.com/alihamza-12/Scrap-Yard",
      live: "https://scrap-yard-six.vercel.app/",
      showIndex: false,
      image: scrapImg,
      isIcon: false,
    },
    {
      title: "E-commerce Outfit Platform (Frontend Only)",
      description:
        "Created a responsive e-commerce frontend using Vue.js and Bootstrap with API integration and cart persistence.",
      tech: ["Vue.js", "Bootstrap", "JavaScript", "API Integration"],
      github: "https://github.com/alihamza-12/e-commerce-outfits",
      live: "https://e-commerce-outfits-eta.vercel.app/",
      showIndex: false,
      image: ecommerceImg,
      isIcon: false,
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
                {/* Image / Header Container */}
                <div className="h-48 w-full relative overflow-hidden bg-slate-950 flex items-center justify-center border-b border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`absolute inset-0 w-full h-full transition-all duration-500 group-hover:scale-105 ${
                      project.isIcon
                        ? "object-contain p-10 opacity-80 group-hover:opacity-100"
                        : "object-cover opacity-100"
                    }`}
                  />

                  {/* index watermark */}
                  {project.showIndex ? (
                    <div className="text-center relative z-10 select-none">
                      <p className="text-white font-bold opacity-10 text-4xl">
                        Project 0{idx + 1}
                      </p>
                    </div>
                  ) : null}

                  {/* Overlay Links */}
                  {project.github || project.live ? (
                    <div className="absolute inset-0 z-20 bg-slate-950/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-white text-slate-950 hover:bg-slate-200 transition-colors text-sm font-medium"
                        >
                          Repo
                        </a>
                      ) : null}
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 transition-colors text-sm font-medium"
                        >
                          Live
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>

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