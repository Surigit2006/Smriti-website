import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { APP_REDIRECT_URL } from '../data/palettes';

interface NavbarProps {
  isDark?: boolean;
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark = true, onToggleTheme }) => {
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
    { label: 'Editor', href: '#editor' },
    { label: '3D Notes', href: '#spatial-notes' },
    { label: 'Excalidraw', href: '#excalidraw' },
    { label: 'Templates', href: '#templates' },
    { label: 'Autocomplete', href: '#autocomplete' },
    { label: 'Palettes', href: '#palettes' },
    { label: 'Canvas', href: '#connected-notes' },
    { label: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? isDark 
            ? 'bg-[#08090D]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl'
            : 'bg-white/85 backdrop-blur-xl border-b border-black/10 py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Artwork Emblem */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-2xl overflow-hidden border border-white/20 shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
              <img
                src="/images/smriti-icon.jpg"
                alt="Smriti Notes Logo"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className={`font-anton tracking-tight text-2xl transition-colors leading-none ${isDark ? 'text-white group-hover:text-[#00F076]' : 'text-slate-900 group-hover:text-[#008060]'}`}>
                SMRITI
              </span>
              <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full font-bold border ${
                isDark 
                  ? 'bg-white/5 text-[#00F076] border-white/10' 
                  : 'bg-slate-100 text-[#008060] border-black/10'
              }`}>
                Unified '24
              </span>
            </div>
          </a>

          {/* Desktop Nav in Shopify Editions floating pill style */}
          <nav className={`hidden xl:flex items-center gap-1 rounded-full px-5 py-1.5 backdrop-blur-md border shadow-sm ${
            isDark 
              ? 'bg-[#0E1118]/80 border-white/10 text-slate-300' 
              : 'bg-white/90 border-black/10 text-slate-700'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full transition-all duration-200 ${
                  isDark 
                    ? 'hover:text-white hover:bg-white/10' 
                    : 'hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Direct Redirect to app.smritinotes.site & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className={`p-2 rounded-full border transition-colors ${
                  isDark 
                    ? 'bg-white/5 border-white/10 text-amber-400 hover:bg-white/10' 
                    : 'bg-slate-100 border-black/10 text-slate-700 hover:bg-slate-200'
                }`}
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[#00F076] hover:bg-[#00d669] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
              <span>Launch App</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3.5 py-1.5 rounded-full bg-[#00F076] text-black font-bold uppercase tracking-wider"
            >
              Open App
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl ${isDark ? 'text-white hover:bg-white/10' : 'text-slate-900 hover:bg-black/5'}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className={`xl:hidden mt-3 p-4 rounded-2xl shadow-2xl border flex flex-col gap-2 ${
            isDark 
              ? 'bg-[#0E1118]/95 border-white/10 text-white' 
              : 'bg-white/95 border-black/10 text-slate-900'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                  isDark ? 'hover:bg-white/10' : 'hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
              <a
                href={APP_REDIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#00F076]"
              >
                <span>Launch app.smritinotes.site</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
