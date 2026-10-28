import React from 'react';
import { ArrowUp, ExternalLink } from 'lucide-react';
import { AppPalette, APP_REDIRECT_URL, CREATOR_NAME } from '../data/palettes';

interface FooterProps {
  activePalette?: AppPalette;
  isDark?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark = true }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-16 text-xs sm:text-sm relative overflow-hidden select-none border-t transition-colors ${
      isDark ? 'bg-[#08090D] text-slate-400 border-white/10' : 'bg-slate-900 text-slate-300 border-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl overflow-hidden border border-white/20 shadow-md">
                <img
                  src="/images/smriti-icon.jpg"
                  alt="Smriti Logo Icon"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="font-anton text-2xl text-white tracking-wider">
                SMRITI NOTES
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm font-sans">
              A distraction-free notebook for writing, Excalidraw system design, planning, and connecting ideas — designed around the way you think with zero friction.
            </p>

            <div className="pt-2">
              <a
                href={APP_REDIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00F076] hover:bg-[#00d669] text-black font-archivo font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105"
              >
                <span>Launch app.smritinotes.site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Core Features */}
          <div>
            <h4 className="font-archivo text-white text-xs font-bold uppercase tracking-wider mb-4">
              Core Features
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a href="#editor" className="hover:text-[#00F076] transition-colors">
                  First-Class Editor
                </a>
              </li>
              <li>
                <a href="#excalidraw" className="hover:text-[#00F076] transition-colors">
                  Excalidraw Whiteboard
                </a>
              </li>
              <li>
                <a href="#palettes" className="hover:text-[#00F076] transition-colors">
                  162 Color Palettes
                </a>
              </li>
              <li>
                <a href="#organization" className="hover:text-[#00F076] transition-colors">
                  Folders & Pinned Notes
                </a>
              </li>
              <li>
                <a href="#organization" className="hover:text-[#00F076] transition-colors">
                  Command Bar (⌘K)
                </a>
              </li>
            </ul>
          </div>

          {/* Upcoming Roadmap */}
          <div>
            <h4 className="font-archivo text-white text-xs font-bold uppercase tracking-wider mb-4">
              Upcoming Roadmap
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a href="#autocomplete" className="hover:text-[#00F076] transition-colors flex items-center gap-1.5">
                  <span>Inline Autocomplete</span>
                  <span className="text-[9px] px-1.5 py-0.2 bg-[#00F076]/20 text-[#00F076] rounded font-bold">New</span>
                </a>
              </li>
              <li>
                <a href="#templates" className="hover:text-[#00F076] transition-colors flex items-center gap-1.5">
                  <span>Notebook Templates</span>
                  <span className="text-[9px] px-1.5 py-0.2 bg-white/10 text-white rounded font-bold">Soon</span>
                </a>
              </li>
              <li>
                <a href="#connected-notes" className="hover:text-[#00F076] transition-colors">
                  Connected Sticky Canvas
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-[#00F076] transition-colors">
                  Cloud Multi-Device Sync
                </a>
              </li>
              <li>
                <a href="#excalidraw" className="hover:text-[#00F076] transition-colors">
                  System Design Templates
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div>
            <h4 className="font-archivo text-white text-xs font-bold uppercase tracking-wider mb-4">
              Application
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a 
                  href={APP_REDIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#00F076] font-bold flex items-center gap-1"
                >
                  <span>app.smritinotes.site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a href="#excalidraw" className="hover:text-[#00F076] transition-colors">
                  System Architecture Canvas
                </a>
              </li>
              <li>
                <a href="#templates" className="hover:text-[#00F076] transition-colors">
                  Explore Templates
                </a>
              </li>
              <li>
                <a href="#autocomplete" className="hover:text-[#00F076] transition-colors">
                  Test Autocomplete Demo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Big Wordmark & Scroll to Top */}
        <div className="pt-12 pb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-anton text-[12vw] sm:text-[9vw] lg:text-[6.5rem] text-white/[0.08] leading-none uppercase select-none tracking-tight">
            SMRITI NOTES
          </div>

          <button
            onClick={scrollToTop}
            className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs uppercase font-mono tracking-wider flex items-center gap-2 text-white transition-colors cursor-pointer shrink-0"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00F076]" />
          </button>
        </div>

        {/* Copyright & Strictly ONE Attribution Line */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} Smriti Notes. Created by <span className="text-white font-semibold">{CREATOR_NAME}</span>.
          </div>
          <div className="flex items-center gap-4">
            <a href={APP_REDIRECT_URL} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00F076]">
              app.smritinotes.site
            </a>
            <span>•</span>
            <span>100% Local-First Data</span>
            <span>•</span>
            <span>Excalidraw System Design</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
