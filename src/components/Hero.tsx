import React, { useState } from 'react';
import { 
  Palette, 
  PenTool, 
  FolderTree, 
  Sparkles, 
  ArrowUpRight, 
  ArrowRight, 
  Layers, 
  ExternalLink,
  Flame,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
  Shield,
  Zap,
  Bookmark
} from 'lucide-react';
import { ColorPalette, OFFICIAL_SMRITI_PALETTES, APP_REDIRECT_URL, CREATOR_NAME } from '../data/palettes';
import { ThreeDCard } from './ThreeDCard';

interface HeroProps {
  onOpenWaitlist: () => void;
  activePalette: ColorPalette;
  onSelectPalette: (palette: ColorPalette) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenWaitlist, 
  activePalette, 
  onSelectPalette 
}) => {
  const [activeTab, setActiveTab] = useState<'app-view' | 'screenshot'>('app-view');

  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-36 overflow-hidden">
      {/* 3D Dynamic Ambient Glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1050px] h-[550px] rounded-full blur-[160px] opacity-25 pointer-events-none transition-colors duration-700"
        style={{
          background: `radial-gradient(circle, ${activePalette.accent} 0%, ${activePalette.secondary} 45%, transparent 75%)`
        }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Creator Badge & Aesthetic Indian Icon Top Banner */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-500/30 backdrop-blur-xl shadow-xl shadow-black/40 hover:border-amber-400 transition-all cursor-pointer group">
            {/* The Girl Icon Image from user upload */}
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-amber-400 shadow-sm shrink-0">
              <img
                src="/images/smriti-icon.jpg"
                alt="Smriti Artwork"
                className="w-full h-full object-cover object-top group-hover:scale-125 transition-transform duration-300"
              />
            </div>
            
            <div className="flex items-center gap-1.5 text-xs text-slate-300">
              <span className="text-slate-400">Handcrafted by</span>
              <span className="font-bold text-amber-300 group-hover:underline">
                {CREATOR_NAME}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live on app.smritinotes.site
              </span>
            </div>

            <ChevronRight className="w-3.5 h-3.5 text-amber-400/80 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
            Your thoughts deserve a{' '}
            <span 
              className="text-transparent bg-clip-text transition-all duration-500"
              style={{
                backgroundImage: `linear-gradient(135deg, ${activePalette.accent} 0%, ${activePalette.secondary} 50%, #ffffff 100%)`
              }}
            >
              better space.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            A beautiful notebook for writing, planning, sketching, and connecting ideas — designed around the way you think.
          </p>

          {/* 3 Core Highlight Badges (Exact from User Requirements) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a 
              href="#palettes" 
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/80 hover:border-amber-400/80 shadow-md backdrop-blur-sm transition-all"
            >
              <div className="w-5 h-5 rounded-full flex items-center justify-center bg-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
                <Palette className="w-3 h-3" />
              </div>
              <span className="text-sm font-semibold text-slate-200 group-hover:text-amber-300 transition-colors">
                162 palettes
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-700/30">
                Current
              </span>
            </a>

            <a 
              href="#editor" 
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/80 hover:border-rose-400/80 shadow-md backdrop-blur-sm transition-all"
            >
              <div className="w-5 h-5 rounded-full flex items-center justify-center bg-rose-500/20 text-rose-400 group-hover:scale-110 transition-transform">
                <PenTool className="w-3 h-3" />
              </div>
              <span className="text-sm font-semibold text-slate-200 group-hover:text-rose-300 transition-colors">
                Rich editor
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-700/30">
                Current
              </span>
            </a>

            <a 
              href="#organization" 
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/80 hover:border-indigo-400/80 shadow-md backdrop-blur-sm transition-all"
            >
              <div className="w-5 h-5 rounded-full flex items-center justify-center bg-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform">
                <FolderTree className="w-3 h-3" />
              </div>
              <span className="text-sm font-semibold text-slate-200 group-hover:text-indigo-300 transition-colors">
                Smart organization
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-700/30">
                Current
              </span>
            </a>
          </div>

          {/* Primary High-Converting CTAs with Direct app.smritinotes.site Redirect */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-extrabold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
            >
              <Sparkles className="w-5 h-5 text-black group-hover:rotate-12 transition-transform" />
              <span>Launch Smriti App</span>
              <span className="text-xs font-mono bg-black/15 px-2 py-0.5 rounded-md font-bold">
                app.smritinotes.site
              </span>
              <ArrowUpRight className="w-4 h-4 ml-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#palettes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-base font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-white/15 hover:border-amber-400/50 transition-all duration-200 shadow-lg"
            >
              <Palette className="w-4 h-4 text-amber-400" />
              <span>Test 162 Palettes (3D Studio)</span>
            </a>
          </div>

          {/* Subtitle Value Proposition */}
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              No browser tabs clutter
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              100% Offline-first local speed
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              Created by {CREATOR_NAME}
            </span>
          </div>
        </div>

        {/* 3D Interactive Spatial Showcase Window */}
        <div className="mt-12 sm:mt-16 max-w-6xl mx-auto">
          {/* Quick Palette Bar on top of window */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-2">
            <div className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
              <SlidersHorizontal className="w-4 h-4 text-amber-400" />
              <span>Official Palettes:</span>
              <span className="text-white font-bold">{activePalette.name}</span>
              <span className="text-[11px] text-amber-300/80 font-mono hidden md:inline">
                ({activePalette.vibe})
              </span>
            </div>

            {/* Quick Palette Swatches directly from user's app */}
            <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-700/80 p-1.5 rounded-2xl backdrop-blur-md">
              {OFFICIAL_SMRITI_PALETTES.slice(0, 6).map((pal) => (
                <button
                  key={pal.id}
                  onClick={() => onSelectPalette(pal)}
                  title={`${pal.name} - ${pal.vibe}`}
                  className={`relative group w-7 h-7 rounded-xl transition-all duration-200 overflow-hidden border ${
                    activePalette.id === pal.id 
                      ? 'scale-115 ring-2 ring-amber-400 border-transparent shadow-lg shadow-amber-400/30' 
                      : 'border-white/20 hover:scale-105'
                  }`}
                  style={{ background: pal.wallColor || pal.bg }}
                >
                  <div 
                    className="absolute inset-x-0 bottom-0 h-2.5" 
                    style={{ background: pal.punchColor || pal.accent }} 
                  />
                </button>
              ))}
              <a 
                href="#palettes" 
                className="text-[11px] text-amber-400 hover:text-amber-300 font-bold px-2 py-0.5 rounded hover:bg-white/5 transition-colors"
              >
                +156 more
              </a>
            </div>
          </div>

          {/* 3D Card Container with Mouse Parallax Tilt */}
          <ThreeDCard maxTilt={8} scale={1.01} className="w-full">
            <div 
              className="rounded-3xl border transition-all duration-500 shadow-2xl overflow-hidden backdrop-blur-xl relative"
              style={{ 
                backgroundColor: activePalette.bg,
                borderColor: activePalette.border,
                boxShadow: `0 35px 80px -15px ${activePalette.accent}30`
              }}
            >
              {/* Top Window Bar */}
              <div 
                className="flex items-center justify-between px-5 py-3.5 border-b text-xs transition-colors duration-500"
                style={{ 
                  backgroundColor: activePalette.surface,
                  borderColor: activePalette.border,
                  color: activePalette.text
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-rose-500/90 shadow-sm" />
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-500/90 shadow-sm" />
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/90 shadow-sm" />
                  </div>
                  <div className="h-4 w-[1px] bg-white/10 mx-2" />
                  
                  {/* Artwork Logo in Title Bar */}
                  <div className="flex items-center gap-2">
                    <img 
                      src="/images/smriti-icon.jpg" 
                      alt="Icon" 
                      className="w-5 h-5 rounded-full object-cover object-top border border-amber-400/50" 
                    />
                    <span className="font-bold tracking-wide">
                      Smriti Notes — app.smritinotes.site
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Toggle between live mock & actual screenshot from app */}
                  <div className="flex bg-black/40 p-0.5 rounded-lg border border-white/10">
                    <button
                      onClick={() => setActiveTab('app-view')}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                        activeTab === 'app-view' ? 'bg-amber-400 text-black font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      3D Interactive View
                    </button>
                    <button
                      onClick={() => setActiveTab('screenshot')}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                        activeTab === 'screenshot' ? 'bg-amber-400 text-black font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Actual App Screenshot
                    </button>
                  </div>

                  <a
                    href={APP_REDIRECT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold text-black bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
                  >
                    <span>Open Web App</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* View Content: Either 3D Interactive Mock or Actual App Screenshot */}
              {activeTab === 'app-view' ? (
                <div className="grid grid-cols-12 min-h-[500px]">
                  {/* Left Sidebar (Matching actual screenshot) */}
                  <div 
                    className="col-span-4 md:col-span-3 p-4 flex flex-col justify-between border-r text-xs transition-colors duration-500"
                    style={{ 
                      backgroundColor: activePalette.railColor ? `${activePalette.railColor}25` : `${activePalette.surface}95`,
                      borderColor: activePalette.border,
                      color: activePalette.text
                    }}
                  >
                    <div className="space-y-4">
                      {/* App header in sidebar */}
                      <div className="flex items-center justify-between pb-2 border-b border-white/10">
                        <span className="font-extrabold text-sm tracking-tight text-white flex items-center gap-2">
                          <img src="/images/smriti-icon.jpg" className="w-5 h-5 rounded-md object-cover object-top" alt="" />
                          Smriti Notes
                        </span>
                      </div>

                      {/* "+ New note" Button */}
                      <button 
                        className="w-full py-2 px-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform hover:scale-102 shadow-md text-xs"
                        style={{
                          backgroundColor: activePalette.punchColor || activePalette.accent,
                          color: '#ffffff'
                        }}
                      >
                        <span>+ New note</span>
                      </button>

                      {/* Collections */}
                      <div className="space-y-2 pt-2">
                        <div className="text-[10px] uppercase font-bold tracking-wider opacity-60">
                          Collections
                        </div>
                        <div className="text-[11px] opacity-75 px-2 py-1.5 rounded-lg border border-dashed border-white/15 hover:border-white/30 cursor-pointer flex items-center gap-1.5">
                          <span>+ Group notes into a collection</span>
                        </div>
                      </div>

                      {/* Notes list */}
                      <div className="space-y-1 pt-2">
                        <div className="text-[10px] uppercase font-bold tracking-wider opacity-60 flex items-center justify-between">
                          <span>Notes</span>
                          <span className="font-mono">3</span>
                        </div>
                        <div 
                          className="px-3 py-2 rounded-xl font-semibold shadow-sm cursor-pointer border"
                          style={{
                            backgroundColor: activePalette.notePanel || '#ffffff',
                            color: '#0f172a',
                            borderColor: activePalette.accent
                          }}
                        >
                          Thinking in Spaces (No Tabs)
                        </div>
                        <div className="px-3 py-2 rounded-xl opacity-75 hover:opacity-100 hover:bg-white/5 cursor-pointer">
                          162 Palette Customization
                        </div>
                        <div className="px-3 py-2 rounded-xl opacity-75 hover:opacity-100 hover:bg-white/5 cursor-pointer">
                          Connected Sticky Canvas
                        </div>
                      </div>
                    </div>

                    {/* Bottom Sidebar: Archive, Trash, Login */}
                    <div className="pt-4 border-t border-white/10 space-y-1.5 text-xs opacity-80">
                      <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/5 cursor-pointer">
                        <span>📦 Archive</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/5 cursor-pointer">
                        <span>🗑️ Trash</span>
                      </div>
                      <div className="flex items-center justify-between px-2 py-1 rounded hover:bg-white/5 cursor-pointer pt-2 border-t border-white/10 font-bold text-amber-300">
                        <span>Login</span>
                        <span className="text-[10px] font-mono opacity-60">⚙️ Settings</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Editor Canvas Area */}
                  <div 
                    className="col-span-8 md:col-span-9 p-6 sm:p-8 flex flex-col justify-between transition-colors duration-500 relative"
                    style={{ 
                      backgroundColor: activePalette.wallColor ? `${activePalette.wallColor}15` : activePalette.surface,
                      color: activePalette.text
                    }}
                  >
                    {/* Top Formatting Ribbon (Exact match to user's real app) */}
                    <div className="pb-4 mb-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2 bg-black/40 p-1.5 rounded-xl border border-white/10">
                        <span className="px-2 py-0.5 rounded font-mono font-bold bg-white/10">T ▾ 16 ▾</span>
                        <div className="h-4 w-[1px] bg-white/15" />
                        <span className="font-bold px-1.5">B</span>
                        <span className="italic px-1.5">I</span>
                        <span className="underline px-1.5">U</span>
                        <span className="line-through px-1.5">S</span>
                        <div className="h-4 w-[1px] bg-white/15" />
                        <span className="w-4 h-4 rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-indigo-500 inline-block cursor-pointer" title="Color wheel" />
                        <span className="text-amber-400 font-bold cursor-pointer">🖌️ ▾</span>
                        <span className="cursor-pointer">¶ ▾</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono px-2 py-1 rounded bg-black/30 border border-white/10 text-amber-300">
                          Active: {activePalette.name}
                        </span>
                        <a
                          href={APP_REDIRECT_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 rounded-lg text-xs font-bold text-black bg-amber-400 hover:bg-amber-300 transition-colors"
                        >
                          Redirect to App →
                        </a>
                      </div>
                    </div>

                    {/* Note Content */}
                    <div className="space-y-4 max-w-2xl">
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                        ⚡ Created by {CREATOR_NAME}
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                        ## Heading 2: Jumps Over the Lazy Dog
                      </h2>

                      <h3 className="text-lg sm:text-xl font-bold opacity-80" style={{ color: activePalette.accent }}>
                        ### Heading 3: Pack My Box With Five Dozen Liquor Jugs
                      </h3>

                      <p className="text-sm sm:text-base leading-relaxed opacity-90">
                        Smriti Notes no longer uses the tab-based structure. Every note lives in an uncluttered, distraction-free spatial workspace. You can switch themes on the fly, color-code your ideas with 162 palettes, and link thoughts seamlessly.
                      </p>

                      {/* 3D Floating Palette Preview Pill */}
                      <div 
                        className="p-4 rounded-2xl border shadow-xl flex items-center justify-between gap-4 mt-6 backdrop-blur-md"
                        style={{
                          backgroundColor: activePalette.notePanel || '#ffffff',
                          color: '#0f172a',
                          borderColor: activePalette.accent
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <span 
                            className="w-4 h-4 rounded-full shrink-0 shadow-md"
                            style={{ backgroundColor: activePalette.punchColor || activePalette.accent }} 
                          />
                          <div>
                            <div className="font-extrabold text-sm">{activePalette.name}</div>
                            <div className="text-xs opacity-75">{activePalette.vibe}</div>
                          </div>
                        </div>

                        <a
                          href={APP_REDIRECT_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-xl text-xs font-bold text-white shadow-md flex items-center gap-1"
                          style={{ backgroundColor: activePalette.punchColor || activePalette.accent }}
                        >
                          <span>Try in App</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                    {/* Footer bar of the editor */}
                    <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono mt-8">
                      <span>Saved locally on this device</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        ✓ 100% Offline-First
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Actual Screenshot view from user's app */
                <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden">
                  <img
                    src="/images/smriti-app-screenshot.png"
                    alt="Smriti Notes Real App Screenshot"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-white/15 flex items-center justify-between text-xs">
                    <div className="text-white">
                      <span className="font-bold text-amber-300">Live Screenshot:</span> Smriti Notes Theme Customizer with Pink Riot, Cobalt Block, Mint Slab, Orange Crush, Lilac Slap, Sky Slap
                    </div>
                    <a
                      href={APP_REDIRECT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold flex items-center gap-1.5"
                    >
                      <span>Open Live App</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
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
