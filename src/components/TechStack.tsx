'use client';

import React, { useState } from 'react';
import { Code, Layout, Database, Cloud, Wrench, CheckCircle } from 'lucide-react';

export default function TechStack() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Technologies' },
    { id: 'frontend', name: 'Frontend & UI' },
    { id: 'backend', name: 'Backend & Data' },
    { id: 'cloud', name: 'Cloud & DevOps' },
  ];

  const technologies = [
    // Frontend
    { name: 'TypeScript', category: 'frontend', level: 'Expert', desc: 'Type-safe scalable application development' },
    { name: 'Next.js (App Router)', category: 'frontend', level: 'Expert', desc: 'SSR, SSG, Edge rendering, and SEO' },
    { name: 'React 18 / 19', category: 'frontend', level: 'Expert', desc: 'Component architecture, Hooks, State management' },
    { name: 'Tailwind CSS', category: 'frontend', level: 'Expert', desc: 'Modern utility-first responsive styling' },
    
    // Backend
    { name: 'Node.js & Express', category: 'backend', level: 'Advanced', desc: 'High-throughput RESTful services and APIs' },
    { name: 'PostgreSQL', category: 'backend', level: 'Advanced', desc: 'Relational schema design, indexes, and queries' },
    { name: 'Python', category: 'backend', level: 'Proficient', desc: 'Data processing, scripting, and automation' },
    { name: 'Redis', category: 'backend', level: 'Advanced', desc: 'In-memory caching and message queues' },
    { name: 'Prisma / Drizzle ORM', category: 'backend', level: 'Advanced', desc: 'Type-safe database modelling and migrations' },
    
    // Cloud & DevOps
    { name: 'Docker & Containers', category: 'cloud', level: 'Advanced', desc: 'Containerization and reproducible environments' },
    { name: 'Vercel / Cloudflare Edge', category: 'cloud', level: 'Expert', desc: 'Serverless deployment and global CDN distribution' },
    { name: 'Git & GitHub Actions', category: 'cloud', level: 'Advanced', desc: 'Automated CI/CD testing and build pipelines' },
    { name: 'AWS / Cloud Services', category: 'cloud', level: 'Intermediate', desc: 'S3, EC2, IAM, Lambda serverless patterns' },
  ];

  const filteredTech = activeTab === 'all' 
    ? technologies 
    : technologies.filter(item => item.category === activeTab);

  return (
    <section id="skills" className="py-20 md:py-28 relative border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#070b14]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-mono mb-4">
              <span>02 // SKILLS & TECH STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Modern Toolbelt & Architecture Stack
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-base">
              A battle-tested set of languages, frameworks, and cloud utilities used to create production software.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === cat.id
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-teal-500'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTech.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-teal-500/40 transition-all duration-200 shadow-sm hover:shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                  {item.name}
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-300 font-medium">
                  {item.level}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
