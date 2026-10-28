import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
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
    { label: 'Connected Notes', href: '#connected-notes' },
    { label: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05080c]/90 backdrop-blur-xl border-b border-[#222222] py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Artwork Icon & DOVV Studio bold type */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-2xl overflow-hidden p-[1.5px] bg-gradient-to-tr from-[#ed4a1c] via-[#facc15] to-[#c6f432] shadow-lg shadow-[#ed4a1c]/20 group-hover:scale-105 transition-transform duration-300">
              <img
                src="/images/smriti-icon.jpg"
                alt="Smriti Logo Icon"
                className="w-full h-full object-cover object-top rounded-[14px]"
              />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <span className="font-anton tracking-wide text-2xl text-white group-hover:text-[#ed4a1c] transition-colors leading-none">
                  SMRITI
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded bg-[#1c1c1c] text-[#c6f432] border border-[#333] font-bold">
                  2.0
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 mt-0.5">
                by {CREATOR_NAME}
              </span>
            </div>
          </a>

          {/* Desktop Nav in DOVV floating pill style */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0e121a]/85 border border-[#222222] rounded-full px-5 py-1.5 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Direct Redirect to app.smritinotes.site */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-black bg-[#ed4a1c] hover:bg-[#ff5d33] text-white shadow-lg shadow-[#ed4a1c]/30 hover:shadow-[#ed4a1c]/50 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
            >
              <span className="w-2 h-2 rounded-full bg-[#c6f432] animate-ping" />
              <span>Launch App</span>
              <span className="text-[10px] font-mono lowercase bg-black/20 px-1.5 py-0.5 rounded text-white/90">
                app.smritinotes.site
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 rounded-full bg-[#ed4a1c] text-white font-bold"
            >
              App
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#1c1c1c] border border-[#2b2b2b] text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e16]/98 border-b border-[#222222] backdrop-blur-2xl px-5 pt-3 pb-6 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#222222] text-xs text-slate-400 font-mono">
            <span>Created by {CREATOR_NAME}</span>
            <span className="text-[#c6f432]">● Ready</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-bold uppercase tracking-wider text-slate-200 hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#222222]">
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold uppercase text-white bg-[#ed4a1c] shadow-lg shadow-[#ed4a1c]/30 text-xs"
            >
              Launch app.smritinotes.site →
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
