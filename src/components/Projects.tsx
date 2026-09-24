import React from 'react';
import { ExternalLink, Layers, ArrowUpRight, FolderKanban } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Modern Business Website',
      category: 'Corporate & Services',
      description:
        'A clean, professional website built for a service business featuring responsive mobile design, service listings, client inquiries, and fast loading speed.',
      tech: ['Next.js', 'Tailwind CSS', 'Mobile First'],
      link: '#',
    },
    {
      title: 'E-Commerce Online Store',
      category: 'Web Shop & Products',
      description:
        'A digital shopping platform with product showcase, shopping cart, WhatsApp ordering button, and clean category filtering.',
      tech: ['React', 'JavaScript', 'Responsive UI'],
      link: '#',
    },
    {
      title: 'Creative Portfolio & Blog',
      category: 'Personal Branding',
      description:
        'An elegant personal brand website designed to showcase professional services, past works, client testimonials, and blog articles.',
      tech: ['Web Design', 'SEO Friendly', 'Fast CDN'],
      link: '#',
    },
    {
      title: 'Custom Management Portal',
      category: 'Web Application',
      description:
        'A lightweight web-based dashboard for managing client inquiries, booking requests, and internal records with simple login access.',
      tech: ['Full Stack', 'Node.js', 'PostgreSQL'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
              <FolderKanban className="w-3.5 h-3.5" />
              <span>PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Sample Works & Project Types
            </h2>
            <p className="mt-2 text-slate-600 text-base">
              A sample of the types of websites and solutions I design and build.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            <span>Have a project to discuss?</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {proj.category}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
                    Web Project
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {proj.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
