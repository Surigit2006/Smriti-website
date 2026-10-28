import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Flame,
  CheckCircle2,
  Folder,
  FileText,
  Search,
  PenTool,
  Check,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { AppPalette, APP_REDIRECT_URL } from '../data/palettes';
import { ThreeDCard } from './ThreeDCard';

interface HeroProps {
  onOpenWaitlist: () => void;
  activePalette: AppPalette;
  onSelectPalette: (palette: AppPalette) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  activePalette 
}) => {
  const [viewMode, setViewMode] = useState<'interactive' | 'screenshot'>('interactive');
  const [editorText, setEditorText] = useState(
    `# Deep Thinking in the Age of Noise\n\nThe highest leverage work happens when friction drops to absolute zero.\n\n### Why Smriti Removed Tabs\n1. Cognitive Overhead — 40 open tabs create visual fatigue.\n2. Context Loss — Thoughts aren't throwaway browser sessions.\n3. Spatial Focus — Folders, pinned notes, and upcoming canvas stickies.\n\n> "Simplicity is prerequisite for reliability and depth."`
  );

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-[#F5F0E8]">
      {/* Subtle warm halo matching the sun from the artwork */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] rounded-full blur-[140px] opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #F59E0B 0%, #E87A90 35%, transparent 70%)'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* DOVV Studio Status Pill */}
        <div className="flex justify-center mb-8">
          <a
            href={APP_REDIRECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="dovv-status-pill group cursor-pointer"
          >
            <span className="pill-dot" />
            <span className="text-[#141414] font-semibold text-xs sm:text-sm">Smriti Notes • Live on Web</span>
            <span className="w-1 h-1 rounded-full bg-black/20" />
            <span className="text-[#666055] font-mono text-xs">app.smritinotes.site</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#141414] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* GIANT DOVV Condensed Headline Wordmark with Minimal 3D Floating Die-Cut Stickers */}
        <div className="relative max-w-5xl mx-auto mb-8 select-none">
          {/* Floating Sticker 1: Artwork Woman with Peacock Emblem */}
          <div 
            className="dovv-sticker absolute -top-10 -left-2 sm:-left-8 hidden md:block" 
            style={{ '--rot': '-7deg' } as React.CSSProperties}
          >
            <div className="p-1 rounded-2xl bg-white shadow-xl border border-black/10">
              <div className="w-18 h-22 sm:w-20 sm:h-24 rounded-xl overflow-hidden bg-[#F5F0E8] relative">
                <img
                  src="/images/smriti-icon.jpg"
                  alt="Smriti Artwork"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Floating Sticker 2: Minimal "NO BROWSER TABS" Badge */}
          <div 
            className="dovv-sticker absolute -top-6 -right-2 sm:-right-6 hidden md:block" 
            style={{ '--rot': '8deg' } as React.CSSProperties}
          >
            <div className="px-4 py-2 rounded-full bg-[#141414] text-[#FAF7F2] font-mono font-bold text-xs uppercase tracking-wider shadow-lg border border-black/10 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>NO BROWSER TABS</span>
            </div>
          </div>

          {/* Giant Wordmark in Anton / Archivo */}
          <h1 className="dovv-wordmark text-[14vw] sm:text-[11vw] lg:text-[7.8rem] tracking-tight text-[#141414] font-black leading-[0.88] uppercase">
            YOUR THOUGHTS<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#141414] via-[#0F4C81] to-[#D97706]">
              DESERVE A BETTER
            </span><br />
            SPACE.
          </h1>
        </div>

        {/* Subtitle in clean minimalist typography */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#666055] font-normal leading-relaxed mb-8">
          A calm, distraction-free notebook for writing, planning, sketching, and connecting ideas — designed around the way you think without tab clutter.
        </p>

        {/* Balanced Feature Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <a href="#editor" className="dovv-chip">
            ✍️ First-Class Editor
          </a>
          <a href="#organization" className="dovv-chip">
            🗂️ Effortless Organization
          </a>
          <a href="#palettes" className="dovv-chip">
            🎨 162 Palettes
          </a>
          <a href="#connected-notes" className="dovv-chip">
            📌 Connected Stickies
          </a>
          <span className="dovv-chip text-[#0F4C81] font-semibold">
            ⚡ Instant Local-First Speed
          </span>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-16">
          <a
            href={APP_REDIRECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#141414] hover:bg-[#0F4C81] shadow-lg shadow-black/10 transition-all hover:scale-105 group"
          >
            <span>Open Smriti Notes</span>
            <span className="text-[11px] font-mono lowercase bg-white/15 px-2 py-0.5 rounded-full text-white/90">
              app.smritinotes.site
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#editor"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#141414] bg-white hover:bg-[#FAF7F2] border border-black/[0.08] shadow-sm transition-colors"
          >
            <span>Explore Experience</span>
          </a>
        </div>

        {/* 3D App Workspace Window in Minimal DOVV Framing */}
        <div className="max-w-5xl mx-auto">
          {/* Top Bar with Mode Switcher */}
          <div className="mb-3 flex items-center justify-between px-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#666055]">
              <span className="w-2 h-2 rounded-full bg-[#16c847]" />
              <span>Workspace Preview</span>
            </div>

            <div className="flex items-center bg-white p-1 rounded-full border border-black/[0.08] shadow-sm">
              <button
                onClick={() => setViewMode('interactive')}
                className={`px-3 py-1 text-xs font-mono rounded-full transition-all ${
                  viewMode === 'interactive'
                    ? 'bg-[#141414] text-white font-bold'
                    : 'text-[#666055] hover:text-[#141414]'
                }`}
              >
                Interactive Note
              </button>
              <button
                onClick={() => setViewMode('screenshot')}
                className={`px-3 py-1 text-xs font-mono rounded-full transition-all ${
                  viewMode === 'screenshot'
                    ? 'bg-[#141414] text-white font-bold'
                    : 'text-[#666055] hover:text-[#141414]'
                }`}
              >
                Production Screenshot
              </button>
            </div>
          </div>

          <ThreeDCard maxTilt={5} className="w-full">
            <div className="dovv-card text-left p-0 border border-black/[0.08] rounded-3xl overflow-hidden shadow-xl bg-white">
              {/* Window Header */}
              <div className="px-5 py-3.5 bg-[#FAF7F2] border-b border-black/[0.06] flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#E87A90]" />
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                    <div className="w-3 h-3 rounded-full bg-[#16c847]" />
                  </div>
                  <span className="font-mono text-[#666055] text-xs">
                    Smriti Notes • app.smritinotes.site
                  </span>
                </div>

                <a
                  href={APP_REDIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-[#0F4C81] hover:underline flex items-center gap-1"
                >
                  <span>Launch Live App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Window Content */}
              {viewMode === 'interactive' ? (
                <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
                  {/* Left Sidebar (No tabs - Spatial hierarchy) */}
                  <div className="md:col-span-4 bg-[#FAF7F2]/70 border-r border-black/[0.06] p-4 flex flex-col justify-between">
                    <div>
                      {/* Brand & New note */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <img
                            src="/images/smriti-icon.jpg"
                            alt="Smriti"
                            className="w-5 h-5 rounded-md object-cover"
                          />
                          <span className="font-bold text-xs text-[#141414]">Smriti Notes</span>
                        </div>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/5 text-[#666055]">v2.0</span>
                      </div>

                      {/* Search bar */}
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-black/[0.06] text-xs text-[#666055] mb-5">
                        <Search className="w-3.5 h-3.5 text-black/40" />
                        <span className="font-mono text-[11px]">Quick search (⌘K)...</span>
                      </div>

                      {/* Collections */}
                      <div className="mb-4">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[#666055]/80 mb-2 font-bold px-1">
                          Collections
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-black/[0.04] text-xs font-semibold text-[#141414]">
                            <Folder className="w-3.5 h-3.5 text-[#0F4C81]" />
                            <span>Architecture & Essays</span>
                          </div>
                          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs text-[#666055] hover:bg-black/[0.02]">
                            <Folder className="w-3.5 h-3.5 text-black/40" />
                            <span>Daily Journal & Thoughts</span>
                          </div>
                          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs text-[#666055] hover:bg-black/[0.02]">
                            <Folder className="w-3.5 h-3.5 text-black/40" />
                            <span>Product Roadmap</span>
                          </div>
                        </div>
                      </div>

                      {/* Notes list */}
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[#666055]/80 mb-2 font-bold px-1">
                          Notes
                        </div>
                        <div className="space-y-1">
                          <div className="p-2.5 rounded-xl bg-white border border-black/[0.07] shadow-xs">
                            <div className="text-xs font-bold text-[#141414] truncate mb-1">
                              Deep Thinking in the Age of Noise
                            </div>
                            <div className="text-[10px] font-mono text-[#666055] flex items-center justify-between">
                              <span>Oct 28</span>
                              <span className="text-[#0F4C81]">Active note</span>
                            </div>
                          </div>

                          <div className="p-2 rounded-lg text-xs text-[#666055] hover:bg-black/[0.03]">
                            <div className="truncate font-medium">Design Systems & 162 Palettes</div>
                            <span className="text-[10px] font-mono text-black/40">Oct 26</span>
                          </div>

                          <div className="p-2 rounded-lg text-xs text-[#666055] hover:bg-black/[0.03]">
                            <div className="truncate font-medium">Weekly Reflections & Systems</div>
                            <span className="text-[10px] font-mono text-black/40">Oct 24</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-black/[0.06] text-[11px] font-mono text-[#666055] flex items-center justify-between">
                      <span>Offline-first</span>
                      <span className="text-[#16c847] flex items-center gap-1 font-bold">
                        <Check className="w-3 h-3" /> Saved
                      </span>
                    </div>
                  </div>

                  {/* Right Note Editor */}
                  <div className="md:col-span-8 p-6 sm:p-8 flex flex-col justify-between bg-white">
                    <div>
                      {/* Editor formatting toolbar */}
                      <div className="flex flex-wrap items-center gap-1 pb-4 mb-6 border-b border-black/[0.06]">
                        <span className="px-2 py-1 text-xs font-bold font-mono text-[#141414] bg-black/5 rounded">H1</span>
                        <span className="px-2 py-1 text-xs font-bold font-mono text-[#141414] bg-black/5 rounded">H2</span>
                        <span className="px-2 py-1 text-xs font-bold font-mono text-[#141414] bg-black/5 rounded">B</span>
                        <span className="px-2 py-1 text-xs italic font-mono text-[#141414] bg-black/5 rounded">I</span>
                        <span className="px-2 py-1 text-xs font-mono text-[#141414] bg-black/5 rounded">Quote</span>
                        <span className="px-2 py-1 text-xs font-mono text-[#141414] bg-black/5 rounded">Code</span>
                        <span className="px-2 py-1 text-xs font-mono text-[#141414] bg-black/5 rounded">Checklist</span>
                      </div>

                      {/* Editable text simulation */}
                      <textarea
                        value={editorText}
                        onChange={(e) => setEditorText(e.target.value)}
                        className="w-full h-64 text-sm font-sans text-[#141414] bg-transparent resize-none focus:outline-none leading-relaxed"
                        placeholder="Write something thoughtful..."
                      />
                    </div>

                    <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-[#666055]">
                      <span>{editorText.split(/\s+/).filter(Boolean).length} words</span>
                      <a
                        href={APP_REDIRECT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-[#141414] hover:text-[#0F4C81] transition-colors"
                      >
                        <span>Open Full Editor</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                /* Production screenshot view */
                <div className="p-4 sm:p-6 bg-[#FAF7F2]">
                  <div className="relative rounded-2xl overflow-hidden border border-black/10 shadow-lg group">
                    <img
                      src="/images/smriti-app-screenshot.png"
                      alt="Smriti Notes Production Workspace Screenshot"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                      <a
                        href={APP_REDIRECT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
                      >
                        <span>Open Live in app.smritinotes.site</span>
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
