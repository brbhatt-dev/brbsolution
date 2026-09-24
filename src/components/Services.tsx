import React from 'react';
import { Globe, Code2, Server, Gauge, Wrench, CheckCircle, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Website Design & Development',
      description:
        'Custom, mobile-friendly websites for businesses, organizations, and personal portfolios. Fast, modern, and easy to navigate.',
      points: ['Responsive for all screens', 'Clean modern design', 'Fast loading speed'],
    },
    {
      icon: Code2,
      title: 'Web Application & Custom Tools',
      description:
        'Building dynamic web apps, management portals, and custom web tools using modern React, Next.js, and Node.js.',
      points: ['Secure database connection', 'User accounts & dashboards', 'API integrations'],
    },
    {
      icon: Server,
      title: 'Domain, Hosting & Cloud Setup',
      description:
        'Complete setup of custom domains (like www.brbhatta.com), professional business emails, SSL certificates, and cloud hosting.',
      points: ['Free SSL certificate (HTTPS)', 'Fast edge hosting', 'Professional email setup'],
    },
    {
      icon: Gauge,
      title: 'Website Redesign & Speed Optimization',
      description:
        'Upgrade your slow or outdated website into a clean, modern experience that loads instantly and ranks better on Google.',
      points: ['Speed & Core Web Vitals audit', 'Mobile layout fix', 'SEO best practices'],
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 border-t border-slate-100 bg-slate-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>WHAT I DO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Services & Tech Solutions
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Everything you need to launch, improve, and maintain your online presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all duration-200 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-2">
                  {srv.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA banner below services */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg shadow-blue-500/10">
          <div>
            <h4 className="text-xl font-bold">Have a custom tech requirement or project in mind?</h4>
            <p className="text-blue-100 text-sm mt-1">Let’s discuss your idea and find the right solution.</p>
          </div>
          <a
            href="https://wa.me/9779800000000"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-5 py-3 rounded-xl bg-white text-blue-600 hover:bg-blue-50 font-bold text-sm transition-all"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
