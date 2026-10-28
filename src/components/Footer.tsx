import React from 'react';
import { ArrowUpRight, ArrowUp, ExternalLink } from 'lucide-react';
import { ColorPalette, APP_REDIRECT_URL, CREATOR_NAME } from '../data/palettes';

interface FooterProps {
  activePalette: ColorPalette;
  onOpenWaitlist: () => void;
}

export const Footer: React.FC<FooterProps> = ({ activePalette, onOpenWaitlist }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080c] border-t border-[#1c1c1c] text-slate-400 py-16 text-xs sm:text-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-16 border-b border-[#1c1c1c]">
          {/* Brand & Creator Info */}
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl p-[1.5px] bg-gradient-to-tr from-[#ed4a1c] via-[#facc15] to-[#c6f432] shadow-lg shadow-[#ed4a1c]/25 overflow-hidden">
                <img
                  src="/images/smriti-icon.jpg"
                  alt="Smriti Icon"
                  className="w-full h-full object-cover object-top rounded-[14px]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-anton text-2xl text-white tracking-wide">
                  SMRITI NOTES
                </span>
                <span className="text-xs font-mono text-[#c6f432] font-bold">
                  HANDCRAFTED BY {CREATOR_NAME.toUpperCase()}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm font-sans">
              An independent spatial workspace for writing, planning, sketching, and connecting ideas — designed around the way you think without tab clutter.
            </p>

            <div className="pt-2">
              <a
                href={APP_REDIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ed4a1c] hover:bg-[#ff5d33] text-white font-archivo font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#ed4a1c]/30 transition-all hover:scale-105"
              >
                <span>Launch app.smritinotes.site</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Current Features */}
          <div>
            <h4 className="font-archivo text-white text-xs font-bold uppercase tracking-wider mb-4">
              Current Features
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#palettes" className="hover:text-[#ed4a1c] transition-colors">
                  162 Color Palettes
                </a>
              </li>
              <li>
                <a href="#editor" className="hover:text-[#c6f432] transition-colors">
                  Rich-Text Note Editor
                </a>
              </li>
              <li>
                <a href="#organization" className="hover:text-[#facc15] transition-colors">
                  Folders & Pinned Notes
                </a>
              </li>
              <li>
                <a href="#organization" className="hover:text-white transition-colors">
                  Instant ⌘K Search
                </a>
              </li>
              <li>
                <a href="#organization" className="hover:text-emerald-400 transition-colors">
                  Archive & Trash
                </a>
              </li>
            </ul>
          </div>

          {/* Upcoming Roadmap */}
          <div>
            <h4 className="font-archivo text-white text-xs font-bold uppercase tracking-wider mb-4">
              Upcoming Roadmap
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#connected-notes" className="hover:text-purple-300 transition-colors flex items-center gap-1">
                  <span>Connected Sticky Notes</span>
                  <span className="text-[9px] px-1 py-0.2 bg-purple-950 text-purple-300 rounded">Soon</span>
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-sky-300 transition-colors">
                  Cloud Multi-Device Sync
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-[#facc15] transition-colors">
                  Ready-to-use Templates
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-rose-300 transition-colors">
                  Sketching & Stylus Drawing
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-indigo-300 transition-colors">
                  AI-Powered Productivity
                </a>
              </li>
            </ul>
          </div>

          {/* Links & Attribution */}
          <div>
            <h4 className="font-archivo text-white text-xs font-bold uppercase tracking-wider mb-4">
              Application & Creator
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a 
                  href={APP_REDIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c6f432] hover:underline font-bold flex items-center gap-1"
                >
                  <span>app.smritinotes.site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li className="text-slate-300">
                Crafted by <strong className="text-white">{CREATOR_NAME}</strong>
              </li>
              <li>
                <button 
                  onClick={onOpenWaitlist}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Join Alpha Testing
                </button>
              </li>
              <li>
                <a href="#roadmap" className="text-slate-400 hover:text-white transition-colors">
                  Roadmap Upvoting
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* GIANT DOVV Style Bottom Wordmark */}
        <div className="pt-12 pb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-anton text-[12vw] sm:text-[9vw] lg:text-[7rem] text-[#111622] leading-none uppercase select-none tracking-tighter">
            SMRITI NOTES
          </div>

          <button
            onClick={scrollToTop}
            className="dovv-chip text-xs uppercase font-mono tracking-wider flex items-center gap-2 hover:border-white transition-colors cursor-pointer shrink-0 py-2.5 px-5"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#ed4a1c]" />
          </button>
        </div>

        {/* Copyright bar */}
        <div className="pt-6 border-t border-[#1c1c1c] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Smriti Notes. Handcrafted by <strong>{CREATOR_NAME}</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href={APP_REDIRECT_URL} target="_blank" rel="noopener noreferrer" className="text-[#ed4a1c] hover:underline">
              Launch App (app.smritinotes.site)
            </a>
            <span>•</span>
            <span>Local-Only Data</span>
            <span>•</span>
            <span>No Browser Tabs</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
