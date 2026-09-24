import React from 'react';
import { User, Target, ThumbsUp, Sparkles, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Bio info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold">
              <User className="w-3.5 h-3.5" />
              <span>ABOUT ME</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Passionate about technology, problem solving, and modern web.
            </h2>

            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Hello! I am BR Bhatta. I have a deep passion for technology, coding, and building practical digital solutions. Over the past few years, I have worked with various web tools, frameworks, and modern technologies.
            </p>

            <p className="text-slate-600 leading-relaxed text-base">
              My goal is simple: to make technology easy and effective. Whether you need a brand-new website for your business, want to fix technical bugs, or need someone reliable to maintain your digital systems, I am here to help.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Responsive & Modern Design</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Quick WhatsApp Communication</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Affordable & Honest Pricing</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Ongoing Support & Maintenance</span>
              </div>
            </div>
          </div>

          {/* Right: 3 Value cards */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
              <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" />
                <span>Result-Oriented Approach</span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                I don’t just write code — I build websites that look great, load fast on all devices, and help you reach your goals.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
              <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                <ThumbsUp className="w-5 h-5 text-blue-600" />
                <span>Easy & Friendly Collaboration</span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                No complicated tech jargon. Everything is explained clearly so you know exactly what is happening with your project.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
              <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span>Latest & Reliable Tech Stack</span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Using proven standards like Next.js, React, Tailwind CSS, and secure cloud platforms for stability and performance.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
