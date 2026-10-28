import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { APP_REDIRECT_URL } from '../data/palettes';

export const Navbar: React.FC = () => {
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
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-black/[0.06] py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Artwork Emblem */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-2xl overflow-hidden border border-black/10 shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
              <img
                src="/images/smriti-icon.jpg"
                alt="Smriti Notes Logo"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-anton tracking-tight text-2xl text-[#141414] group-hover:text-[#0F4C81] transition-colors leading-none">
                SMRITI
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-black/5 text-[#141414]/70 border border-black/5 font-semibold">
                app
              </span>
            </div>
          </a>

          {/* Desktop Nav in DOVV floating pill style */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/80 border border-black/[0.08] rounded-full px-5 py-1.5 backdrop-blur-md shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#666055] hover:text-[#141414] hover:bg-black/[0.04] rounded-full transition-all duration-200"
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
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#141414] hover:bg-[#0F4C81] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="w-2 h-2 rounded-full bg-[#16c847] animate-pulse" />
              <span>Open App</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3.5 py-1.5 rounded-full bg-[#141414] text-white font-medium"
            >
              Open App
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#141414] hover:bg-black/5"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 p-4 bg-white/95 backdrop-blur-xl border border-black/[0.08] rounded-2xl shadow-xl flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-[#141414] hover:bg-black/5 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-black/5">
              <a
                href={APP_REDIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#141414]"
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
