import React, { useState, useEffect } from 'react';
import { Palette, Sparkles, Menu, X, ArrowUpRight, Flame } from 'lucide-react';
import { APP_REDIRECT_URL, CREATOR_NAME } from '../data/palettes';

interface NavbarProps {
  onOpenWaitlist: () => void;
  activePaletteName?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWaitlist, activePaletteName }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '162 Palettes', href: '#palettes' },
    { label: 'Note Editor', href: '#editor' },
    { label: 'Organization', href: '#organization' },
    { label: 'Connected Sticky Notes', href: '#connected-notes' },
    { label: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080c14]/90 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Indian Aesthetic Girl Icon from user upload */}
          <div className="flex items-center gap-3.5">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-2xl p-[2px] bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-500 shadow-lg shadow-amber-500/25 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300">
                <img
                  src="/images/smriti-icon.jpg"
                  alt="Smriti Notes Icon"
                  className="w-full h-full object-cover object-top rounded-[14px]"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#080c14] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                </div>
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-amber-300 transition-colors">
                    Smriti
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold">
                    v2.0
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                  <span>Created by</span>
                  <span className="text-amber-400 font-semibold">{CREATOR_NAME}</span>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Launch App Direct Redirect */}
          <div className="hidden sm:flex items-center gap-3">
            {activePaletteName && (
              <a
                href="#palettes"
                className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-xs text-slate-300 hover:border-amber-400 transition-colors"
                title="Active preview palette"
              >
                <Palette className="w-3.5 h-3.5 text-amber-400" />
                <span className="truncate max-w-[120px]">{activePaletteName}</span>
              </a>
            )}

            {/* Direct App Launch Button to app.smritinotes.site */}
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
            >
              <Sparkles className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
              <span>Launch App</span>
              <span className="text-[10px] font-mono bg-black/15 px-1.5 py-0.5 rounded font-bold">
                app.smritinotes.site
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 rounded-lg bg-amber-400 text-black font-bold shadow-sm"
            >
              Open App
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e1a]/98 border-b border-white/10 backdrop-blur-2xl px-5 pt-3 pb-6 space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-white/10 text-xs text-slate-400">
            <span>Created by</span>
            <span className="text-amber-400 font-bold">{CREATOR_NAME}</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-black bg-gradient-to-r from-amber-400 to-yellow-400 shadow-lg shadow-amber-500/20"
            >
              <Sparkles className="w-4 h-4" />
              Launch app.smritinotes.site →
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
