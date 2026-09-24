import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Award } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Senior Software Engineer & Systems Architect',
      company: 'Tech Solutions & Enterprise Architecture',
      period: '2023 — Present',
      location: 'Global / Remote',
      description:
        'Leading architecture and deployment of scalable full-stack web platforms and cloud-native systems. Mentoring engineering talent and defining best practices in TypeScript and automated CI/CD pipelines.',
      achievements: [
        'Architected distributed microservices handling over 5M+ monthly API requests with 99.98% uptime.',
        'Migrated legacy monolithic applications to Next.js App Router and serverless edge functions, cutting TTFB by 65%.',
        'Implemented rigorous automated unit and integration test suites, reducing regression bug incidents by 40%.',
      ],
    },
    {
      role: 'Full-Stack Developer & Cloud Consultant',
      company: 'Digital Innovation Labs',
      period: '2021 — 2023',
      location: 'Remote & Hybrid',
      description:
        'Engineered responsive web applications, secure backend APIs, and real-time database synchronizations for high-growth tech startups and businesses.',
      achievements: [
        'Developed real-time analytics dashboards with Next.js, WebSockets, and Tailwind CSS.',
        'Designed normalized relational database schemas in PostgreSQL with Prisma ORM.',
        'Integrated third-party payment gateways, authentication providers, and webhook pipelines.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 relative border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#070b14]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-mono mb-4">
            <span>04 // EXPERIENCE & TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Proven Engineering & Leadership Experience
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A track record of taking complex software requirements and delivering production-ready, performant systems.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 max-w-4xl">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-sm hover:border-teal-500/30 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-teal-600 dark:text-teal-400 font-medium text-sm">
                    {exp.company} &middot; <span className="text-slate-500 dark:text-slate-400 font-normal">{exp.location}</span>
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-600 dark:text-slate-300 w-fit">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="space-y-2.5">
                {exp.achievements.map((item, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 mt-1 shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
