import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          <div>
            <p className="text-base font-bold text-slate-900">
              BR Bhatta <span className="text-blue-600 font-normal">| www.brbhatta.com</span>
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              Personal Tech Portfolio & Web Solutions
            </p>
          </div>

          <div className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} BR Bhatta. All rights reserved.
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-blue-600 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>

        </div>
      </div>
    </footer>
  );
}
