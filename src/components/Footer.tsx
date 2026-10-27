import React from 'react';
import { ArrowUpRight, Heart, Sparkles, ExternalLink } from 'lucide-react';
import { ColorPalette, APP_REDIRECT_URL, CREATOR_NAME } from '../data/palettes';

interface FooterProps {
  activePalette: ColorPalette;
  onOpenWaitlist: () => void;
}

export const Footer: React.FC<FooterProps> = ({ activePalette, onOpenWaitlist }) => {
  return (
    <footer className="bg-[#05070d] border-t border-white/10 text-slate-400 py-16 text-xs sm:text-sm relative overflow-hidden">
      {/* Subtle Glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{ background: activePalette.accent }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info with Artwork Girl Icon */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 rounded-2xl p-[2px] bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-500 shadow-lg shadow-amber-500/25">
                <img
                  src="/images/smriti-icon.jpg"
                  alt="Smriti Icon"
                  className="w-full h-full object-cover object-top rounded-[14px]"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-xl text-white">Smriti Notes</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                    v2.0
                  </span>
                </div>
                <span className="text-xs text-amber-400 font-medium">
                  Created by {CREATOR_NAME}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              A beautiful 3D spatial notebook for writing, planning, sketching, and connecting ideas — designed around the way you think without tab clutter.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activePalette.accent }} />
              <span>Theme: {activePalette.name}</span>
            </div>

            <div className="pt-2">
              <a
                href={APP_REDIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs shadow-md transition-all hover:scale-105"
              >
                <span>Open app.smritinotes.site</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Current Features */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Current Features
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#palettes" className="hover:text-amber-300 transition-colors">
                  162 Color Palettes
                </a>
              </li>
              <li>
                <a href="#editor" className="hover:text-rose-300 transition-colors">
                  Rich-Text Note Editor
                </a>
              </li>
              <li>
                <a href="#organization" className="hover:text-indigo-300 transition-colors">
                  Folders & Pinned Notes
                </a>
              </li>
              <li>
                <a href="#organization" className="hover:text-sky-300 transition-colors">
                  Instant ⌘K Search
                </a>
              </li>
              <li>
                <a href="#organization" className="hover:text-emerald-300 transition-colors">
                  Archive & Trash
                </a>
              </li>
            </ul>
          </div>

          {/* Upcoming Features */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Coming Soon
            </h4>
            <ul className="space-y-2 text-xs">
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
                <a href="#roadmap" className="hover:text-amber-300 transition-colors">
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

          {/* Creator & Links */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Application Link
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a 
                  href={APP_REDIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 hover:text-white font-bold flex items-center gap-1.5"
                >
                  <span>app.smritinotes.site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li className="text-slate-400">
                Created by <strong className="text-white">{CREATOR_NAME}</strong>
              </li>
              <li>
                <button 
                  onClick={onOpenWaitlist}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Join Beta Newsletter
                </button>
              </li>
              <li>
                <a href="#roadmap" className="text-slate-300 hover:text-white transition-colors">
                  Vote on Features
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Smriti Notes. Handcrafted by <strong>{CREATOR_NAME}</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href={APP_REDIRECT_URL} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
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
