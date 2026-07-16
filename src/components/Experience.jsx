import React from "react";
import Reveal from "./Reveal";

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Techling",
      location: "Lahore, Pakistan",
      period: "Jun 2026 -- Present",
      points: [
        "Developed and maintained responsive, high-performance full-stack web applications utilizing Next.js and TypeScript for optimal performance and SEO.",
        "Developed clean data models and implemented structured CRUD operations in Next.js applications using Prisma ORM and SQLite.",
        "Orchestrated automated backend workflows and third-party service integrations using n8n automation tools.",
        "Deployed scalable services and applications on AWS Cloud hosting infrastructure, maintaining high system availability.",
        "Built robust automated continuous integration and continuous deployment (CI/CD) pipelines using GitHub Actions.",
        "Implemented frontend authentication and modern session management flows utilizing the Clerk library.",
      ],
      color: "indigo",
    },
    {
      role: "MERN Stack Developer",
      company: "Venture Tech",
      location: "Lahore, Pakistan",
      period: "Sep 2025 -- Jun 2026",
      points: [
        "Developed responsive, mobile-first frontend interfaces and reusable components using React.js, Tailwind CSS, and modern ES6+ JavaScript.",
        "Engineered scalable and secure RESTful APIs using Node.js and Express.js with modular architecture, custom middleware, and protected routes.",
        "Managed application state and optimized frontend data fetching/caching using Redux Toolkit, RTK Query, and Zustand.",
        "Designed and optimized database schemas in MongoDB with Mongoose, enforcing schema validation, indexing, and paginated queries.",
        "Implemented secure user authentication with password hashing using JWT (JSON Web Tokens) and Role-Based Access Control (RBAC).",
        "Integrated third-party services such as Nodemailer for email alerts, node-cron for scheduled backend jobs, and managed environments with dotenv.",
        "Created core modules for a Scrap Yard Management System with dynamic features, protected routes, and strict validation via React Hook Form and Zod.",
      ],
      color: "purple",
    },
    {
      role: "Trainee Software Engineer (Vue.js)",
      company: "Developers Studio",
      location: "Lahore, Pakistan",
      period: "May 2025 -- Aug 2025",
      points: [
        "Developed responsive web applications using Vue.js (2/3), Bootstrap, and custom CSS.",
        "Built reusable components and integrated RESTful APIs using asynchronous JavaScript (ES6+).",
        "Created a HR Management System (HRMS) with role-based dashboards and JWT authentication.",
        "Developed an E-commerce platform with product management, cart functionality, and local storage persistence.",
        "Utilized Git/GitHub for version control and team collaboration.",
      ],
      color: "cyan",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-16 text-center">
          Professional Path
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="relative pl-8 border-l border-white/5 pb-12 last:pb-0">
                {/* Timeline Dot */}
                <div
                  className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-${exp.color}-500 shadow-[0_0_10px_rgba(var(--${exp.color}-500-rgb),0.5)]`}
                ></div>

                <div className="bg-slate-900/40 border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className={`text-${exp.color}-400 font-medium`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-300 font-medium">{exp.period}</p>
                      <p className="text-slate-500 text-sm">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-slate-400 flex items-start gap-3"
                      >
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-${exp.color}-500 flex-shrink-0Shadow`}
                        ></span>
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
