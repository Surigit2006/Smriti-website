import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  PenTool, 
  Folder, 
  Search, 
  Check, 
  Sparkles, 
  ExternalLink,
  Server,
  Layers,
  Palette,
  Cpu
} from 'lucide-react';
import { motion } from 'framer-motion';
import { AppPalette, APP_REDIRECT_URL } from '../data/palettes';
import { ThreeDCard } from './ThreeDCard';

interface HeroProps {
  activePalette: AppPalette;
  onSelectPalette: (palette: AppPalette) => void;
  isDark?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDark = true }) => {
  const [viewMode, setViewMode] = useState<'interactive' | 'screenshot'>('interactive');
  const [editorText, setEditorText] = useState(
    `# Deep Thinking & System Architecture\n\nThe highest leverage work happens when technical writing and system sketching live together seamlessly.\n\n### Why Smriti Unifies Notes & Excalidraw\n1. Thought Continuity — Write specs and sketch architectures on one canvas.\n2. System Modeling — Microservices, database ERDs, and state machines with zero tool-hopping.\n3. Spatial Focus — Folders, pinned priorities, and visual sticky canvases.\n\n> "Simplicity is prerequisite for reliability and depth."`
  );

  return (
    <section className={`relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#08090D] text-[#F8FAFC]' : 'bg-[#F8FAFC] text-[#0F172A]'
    }`}>
      {/* Background glowing iridescent atmosphere (Shopify Editions Summer '24 style) */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[500px] rounded-full blur-[160px] opacity-25 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(circle, #00F076 0%, #00E5FF 35%, #7C3AED 70%, transparent 85%)'
            : 'radial-gradient(circle, #008060 0%, #0284C7 35%, #F59E0B 70%, transparent 85%)'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Shopify Editions Status Pill */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-8"
        >
          <a
            href={APP_REDIRECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`shopify-pill group cursor-pointer border ${
              isDark 
                ? 'bg-[#0E1118] border-white/10 text-white shadow-black/40' 
                : 'bg-white border-black/10 text-slate-800 shadow-slate-200'
            }`}
          >
            <span className="pill-dot-emerald" />
            <span className="font-semibold text-xs sm:text-sm">Smriti Editions '24 • Unified Workspace</span>
            <span className="w-1 h-1 rounded-full bg-slate-400" />
            <span className="font-mono text-xs text-slate-400">app.smritinotes.site</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* GIANT Condensed Headline Wordmark with Floating 3D Die-Cut Stickers */}
        <div className="relative max-w-5xl mx-auto mb-8 select-none">
          {/* Floating Sticker 1: Artwork Woman with Peacock Emblem */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: -7 }}
            transition={{ duration: 0.6, delay: 0.1, type: 'spring' }}
            className="absolute -top-10 -left-2 sm:-left-8 hidden md:block z-20" 
          >
            <div className={`p-1 rounded-2xl shadow-2xl border ${isDark ? 'bg-[#131722] border-white/10' : 'bg-white border-black/10'}`}>
              <div className="w-18 h-22 sm:w-20 sm:h-24 rounded-xl overflow-hidden relative">
                <img
                  src="/images/smriti-icon.jpg"
                  alt="Smriti Artwork"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Floating Sticker 2: Excalidraw Canvas Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
            animate={{ opacity: 1, scale: 1, rotate: 8 }}
            transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
            className="absolute -top-6 -right-2 sm:-right-6 hidden md:block z-20" 
          >
            <div className={`px-4 py-2 rounded-full font-mono font-bold text-xs uppercase tracking-wider shadow-xl border flex items-center gap-1.5 ${
              isDark 
                ? 'bg-[#131722] text-[#00F076] border-[#00F076]/30' 
                : 'bg-white text-[#008060] border-black/10'
            }`}>
              <PenTool className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>EXCALIDRAW CANVAS</span>
            </div>
          </motion.div>

          {/* Giant Wordmark */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`shopify-wordmark text-[14vw] sm:text-[11vw] lg:text-[7.8rem] tracking-tight font-black leading-[0.88] uppercase ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            UNIFIED.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F076] via-[#00E5FF] to-[#F59E0B]">
              WRITING & ARCHITECTURE.
            </span><br />
            ON ONE CANVAS.
          </motion.h1>
        </div>

        {/* Subtitle in clean minimalist typography */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className={`max-w-2xl mx-auto text-base sm:text-lg font-normal leading-relaxed mb-8 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          A unified spatial workspace for markdown writing, Excalidraw system design, and pre-built templates — designed around the way you think with zero friction.
        </motion.p>

        {/* Feature Chips */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          <a href="#editor" className={`px-3.5 py-1.5 rounded-full text-xs font-mono border transition-all ${
            isDark ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10' : 'bg-white border-black/10 text-slate-700 hover:bg-slate-50'
          }`}>
            ✍️ First-Class Editor
          </a>
          <a href="#excalidraw" className={`px-3.5 py-1.5 rounded-full text-xs font-mono border transition-all font-bold ${
            isDark ? 'bg-[#00F076]/10 border-[#00F076]/30 text-[#00F076]' : 'bg-emerald-50 border-emerald-200 text-[#008060]'
          }`}>
            📐 Excalidraw Whiteboard
          </a>
          <a href="#spatial-notes" className={`px-3.5 py-1.5 rounded-full text-xs font-mono border transition-all ${
            isDark ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white' : 'bg-white border-black/10 text-slate-700'
          }`}>
            🧊 3D Notes Renders
          </a>
          <a href="#templates" className={`px-3.5 py-1.5 rounded-full text-xs font-mono border transition-all ${
            isDark ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white' : 'bg-white border-black/10 text-slate-700'
          }`}>
            📋 Note Templates
          </a>
          <a href="#autocomplete" className={`px-3.5 py-1.5 rounded-full text-xs font-mono border transition-all ${
            isDark ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white' : 'bg-white border-black/10 text-slate-700'
          }`}>
            ⚡ Inline Autocomplete
          </a>
          <a href="#palettes" className={`px-3.5 py-1.5 rounded-full text-xs font-mono border transition-all ${
            isDark ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white' : 'bg-white border-black/10 text-slate-700'
          }`}>
            🎨 162 Palettes
          </a>
        </motion.div>

        {/* Primary Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-16"
        >
          <a
            href={APP_REDIRECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#00F076] hover:bg-[#00d669] shadow-lg shadow-[#00F076]/25 transition-all hover:scale-105 group"
          >
            <span>Open Smriti Notes</span>
            <span className="text-[11px] font-mono lowercase bg-black/15 px-2 py-0.5 rounded-full text-black font-semibold">
              app.smritinotes.site
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#excalidraw"
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider border shadow-sm transition-colors ${
              isDark 
                ? 'text-white bg-[#131722] hover:bg-[#1A202E] border-white/10' 
                : 'text-slate-900 bg-white hover:bg-slate-50 border-black/10'
            }`}
          >
            <span>Explore Excalidraw Canvas</span>
          </a>
        </motion.div>

        {/* 3D App Workspace Window in Shopify Editions Framing */}
        <div className="max-w-5xl mx-auto">
          {/* Top Bar with Mode Switcher */}
          <div className="mb-3 flex items-center justify-between px-2">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-[#00F076]" />
              <span>Unified Command Center</span>
            </div>

            <div className={`flex items-center p-1 rounded-full border shadow-sm ${
              isDark ? 'bg-[#0E1118] border-white/10' : 'bg-white border-black/10'
            }`}>
              <button
                onClick={() => setViewMode('interactive')}
                className={`px-3 py-1 text-xs font-mono rounded-full transition-all ${
                  viewMode === 'interactive'
                    ? isDark ? 'bg-white text-black font-bold' : 'bg-slate-900 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Interactive Note
              </button>
              <button
                onClick={() => setViewMode('screenshot')}
                className={`px-3 py-1 text-xs font-mono rounded-full transition-all ${
                  viewMode === 'screenshot'
                    ? isDark ? 'bg-white text-black font-bold' : 'bg-slate-900 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Original App Screenshot
              </button>
            </div>
          </div>

          <ThreeDCard maxTilt={4} className="w-full">
            <div className={`shopify-card text-left p-0 border rounded-3xl overflow-hidden shadow-2xl ${
              isDark ? 'bg-[#0E1118] border-white/10' : 'bg-white border-black/10 shadow-slate-200'
            }`}>
              {/* Window Header */}
              <div className={`px-5 py-3.5 border-b flex items-center justify-between text-xs ${
                isDark ? 'bg-[#131722] border-white/10' : 'bg-slate-100 border-black/10'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#E87A90]" />
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                    <div className="w-3 h-3 rounded-full bg-[#00F076]" />
                  </div>
                  <span className="font-mono text-xs opacity-70">
                    Smriti Notes • app.smritinotes.site
                  </span>
                </div>

                <a
                  href={APP_REDIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-[#00F076] hover:underline flex items-center gap-1 font-bold"
                >
                  <span>Launch Live App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Window Content */}
              {viewMode === 'interactive' ? (
                <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
                  {/* Left Sidebar */}
                  <div className={`md:col-span-4 border-r p-4 flex flex-col justify-between ${
                    isDark ? 'bg-[#08090D]/60 border-white/10' : 'bg-slate-50 border-black/10'
                  }`}>
                    <div>
                      {/* Brand & New note */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <img
                            src="/images/smriti-icon.jpg"
                            alt="Smriti"
                            className="w-5 h-5 rounded-md object-cover"
                          />
                          <span className="font-bold text-xs">Smriti Notes</span>
                        </div>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 opacity-70">v2.0</span>
                      </div>

                      {/* Search bar */}
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs mb-5 ${
                        isDark ? 'bg-white/5 border-white/10 text-slate-400' : 'bg-white border-black/10 text-slate-600'
                      }`}>
                        <Search className="w-3.5 h-3.5 opacity-60" />
                        <span className="font-mono text-[11px]">Command search (⌘K)...</span>
                      </div>

                      {/* Collections */}
                      <div className="mb-4">
                        <div className="text-[10px] font-mono uppercase tracking-wider opacity-60 mb-2 font-bold px-1">
                          Collections
                        </div>
                        <div className="space-y-1">
                          <div className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold ${
                            isDark ? 'bg-white/10 text-white' : 'bg-slate-200 text-slate-900'
                          }`}>
                            <Folder className="w-3.5 h-3.5 text-[#00F076]" />
                            <span>System Architecture & RFCs</span>
                          </div>
                          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs opacity-70 hover:opacity-100">
                            <Folder className="w-3.5 h-3.5" />
                            <span>Excalidraw Whiteboards</span>
                          </div>
                          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs opacity-70 hover:opacity-100">
                            <Folder className="w-3.5 h-3.5" />
                            <span>Daily Journal & Thoughts</span>
                          </div>
                        </div>
                      </div>

                      {/* Notes list */}
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-wider opacity-60 mb-2 font-bold px-1">
                          Active Documents
                        </div>
                        <div className="space-y-1">
                          <div className={`p-2.5 rounded-xl border shadow-xs ${
                            isDark ? 'bg-[#131722] border-white/10 text-white' : 'bg-white border-black/10 text-slate-900'
                          }`}>
                            <div className="text-xs font-bold truncate mb-1">
                              Deep Thinking & System Architecture
                            </div>
                            <div className="text-[10px] font-mono opacity-70 flex items-center justify-between">
                              <span>Oct 28</span>
                              <span className="text-[#00F076] font-bold">Active note</span>
                            </div>
                          </div>

                          <div className="p-2 rounded-lg text-xs opacity-70 hover:opacity-100">
                            <div className="truncate font-medium">Excalidraw Microservices Map</div>
                            <span className="text-[10px] font-mono opacity-50">Oct 27</span>
                          </div>

                          <div className="p-2 rounded-lg text-xs opacity-70 hover:opacity-100">
                            <div className="truncate font-medium">162 Palettes Engine & Colors</div>
                            <span className="text-[10px] font-mono opacity-50">Oct 26</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-black/10 dark:border-white/10 text-[11px] font-mono opacity-70 flex items-center justify-between">
                      <span>Offline-first</span>
                      <span className="text-[#00F076] flex items-center gap-1 font-bold">
                        <Check className="w-3 h-3" /> Saved
                      </span>
                    </div>
                  </div>

                  {/* Right Note Editor */}
                  <div className={`md:col-span-8 p-6 sm:p-8 flex flex-col justify-between ${
                    isDark ? 'bg-[#0E1118]' : 'bg-white'
                  }`}>
                    <div>
                      {/* Editor formatting toolbar */}
                      <div className="flex flex-wrap items-center gap-1 pb-4 mb-6 border-b border-black/10 dark:border-white/10">
                        <span className="px-2 py-1 text-xs font-bold font-mono bg-black/5 dark:bg-white/10 rounded">H1</span>
                        <span className="px-2 py-1 text-xs font-bold font-mono bg-black/5 dark:bg-white/10 rounded">H2</span>
                        <span className="px-2 py-1 text-xs font-bold font-mono bg-black/5 dark:bg-white/10 rounded">B</span>
                        <span className="px-2 py-1 text-xs italic font-mono bg-black/5 dark:bg-white/10 rounded">I</span>
                        <span className="px-2 py-1 text-xs font-mono text-[#00F076] bg-[#00F076]/10 rounded font-bold">✏️ Excalidraw</span>
                        <span className="px-2 py-1 text-xs font-mono bg-black/5 dark:bg-white/10 rounded">Quote</span>
                        <span className="px-2 py-1 text-xs font-mono bg-black/5 dark:bg-white/10 rounded">Code</span>
                      </div>

                      {/* Editable text simulation */}
                      <textarea
                        value={editorText}
                        onChange={(e) => setEditorText(e.target.value)}
                        className={`w-full h-64 text-sm font-sans bg-transparent resize-none focus:outline-none leading-relaxed tracking-normal ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                        placeholder="Write something thoughtful..."
                      />
                    </div>

                    <div className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono opacity-70">
                      <span>{editorText.split(/\s+/).filter(Boolean).length} words</span>
                      <a
                        href={APP_REDIRECT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-[#00F076] hover:underline"
                      >
                        <span>Open Full Editor</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                /* Production screenshot view with feature callouts */
                <div className={`p-4 sm:p-8 ${isDark ? 'bg-[#08090D]' : 'bg-slate-50'}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl group">
                    <img
                      src="/images/smriti-app-screenshot.png"
                      alt="Smriti Notes Production Workspace Screenshot"
                      className="w-full h-auto object-cover"
                    />

                    {/* Interactive Hotspot Pills highlighting exact features from the user's app */}
                    <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-black/85 text-white backdrop-blur-md text-[11px] font-mono flex items-center gap-1.5 shadow-lg border border-white/10">
                        <span className="w-2 h-2 rounded-full bg-[#00F076]" />
                        <span>Original App UI: Theme Switcher Modal</span>
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#00F076] text-black backdrop-blur-md text-[11px] font-mono font-bold shadow-lg">
                        162 Palette Engine
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                      <a
                        href={APP_REDIRECT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full bg-[#00F076] text-black font-bold text-xs uppercase tracking-wider shadow-2xl flex items-center gap-2 hover:scale-105 transition-transform"
                      >
                        <span>Open Live at app.smritinotes.site</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ThreeDCard>
        </div>
      </div>
    </section>
  );
};
