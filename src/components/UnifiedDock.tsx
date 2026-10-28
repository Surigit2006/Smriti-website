import React from 'react';
import { 
  Sun, 
  Moon, 
  ArrowUpRight, 
  Edit3, 
  Server, 
  LayoutTemplate, 
  Terminal, 
  Palette, 
  Layers,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import { APP_REDIRECT_URL } from '../data/palettes';

interface UnifiedDockProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export const UnifiedDock: React.FC<UnifiedDockProps> = ({ isDark, onToggleTheme }) => {
  const quickLinks = [
    { label: 'Editor', href: '#editor', icon: Edit3 },
    { label: '3D Notes', href: '#spatial-notes', icon: Layers },
    { label: 'Excalidraw', href: '#excalidraw', icon: Server },
    { label: 'Templates', href: '#templates', icon: LayoutTemplate },
    { label: 'Autocomplete', href: '#autocomplete', icon: Terminal },
    { label: 'Palettes', href: '#palettes', icon: Palette },
  ];

  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-full px-3 py-2 backdrop-blur-2xl border shadow-2xl flex items-center gap-2 select-none max-w-[95vw] overflow-x-auto scrollbar-none transition-colors duration-300 ${
        isDark 
          ? 'bg-[#0E1118]/85 border-white/10 text-white shadow-black/60' 
          : 'bg-white/90 border-black/10 text-slate-800 shadow-slate-400/20'
      }`}
    >
      {/* Editions Summer '24 Badge */}
      <a 
        href="#" 
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-colors ${
          isDark 
            ? 'bg-white/5 hover:bg-white/10 text-white' 
            : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#00F076] animate-pulse" />
        <span className="hidden sm:inline">EDITIONS '24</span>
        <span className="text-[10px] text-[#00F076] font-mono">UNIFIED</span>
      </a>

      {/* Quick Navigation Icons */}
      <div className="flex items-center gap-1 border-x px-2 border-black/10 dark:border-white/10">
        {quickLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`px-2.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
              isDark 
                ? 'text-slate-400 hover:text-white hover:bg-white/5' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
            title={item.label}
          >
            <item.icon className="w-3.5 h-3.5" />
            <span className="hidden md:inline text-[11px] font-mono">{item.label}</span>
          </a>
        ))}
      </div>

      {/* Dark / Light Theme Toggle */}
      <button
        onClick={onToggleTheme}
        className={`p-2 rounded-full transition-all ${
          isDark 
            ? 'bg-white/5 hover:bg-white/10 text-amber-400' 
            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
        }`}
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        aria-label="Toggle Theme"
      >
        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>

      {/* Direct App Launch Button */}
      <a
        href={APP_REDIRECT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#00F076] hover:bg-[#00d669] text-black font-archivo font-bold text-xs uppercase tracking-wider shadow-sm transition-transform hover:scale-105"
      >
        <span>Open</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </motion.div>
  );
};
