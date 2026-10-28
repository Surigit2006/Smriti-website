import React, { useState } from 'react';
import { 
  Palette, 
  PenTool, 
  FolderTree, 
  Sparkles, 
  ArrowUpRight, 
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
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-[#05080c]">
      {/* Background radial atmosphere */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] sm:w-[1100px] h-[550px] rounded-full blur-[180px] opacity-20 pointer-events-none transition-colors duration-700"
        style={{
          background: `radial-gradient(circle, ${activePalette.accent} 0%, #ed4a1c 40%, transparent 75%)`
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
            <span className="text-black font-bold">Smriti 2.0 Live on Web</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="text-slate-600 font-mono text-xs">app.smritinotes.site</span>
            <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* GIANT DOVV Condensed Headline Wordmark with Floating 3D Die-Cut Stickers */}
        <div className="relative max-w-5xl mx-auto mb-8 select-none">
          {/* Floating Sticker 1: Holographic Die-Cut Indian Artwork Icon */}
          <div 
            className="dovv-sticker absolute -top-12 -left-2 sm:-left-8 hidden md:block" 
            style={{ '--rot': '-8deg' } as any}
          >
            <div className="p-1 rounded-3xl bg-gradient-to-tr from-[#ed4a1c] via-[#facc15] to-[#c6f432] shadow-2xl">
              <div className="w-20 h-24 rounded-[22px] overflow-hidden bg-black relative border-2 border-white">
                <img
                  src="/images/smriti-icon.jpg"
                  alt="Smriti Artwork"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1.5">
                  <span className="text-[9px] font-mono font-bold text-white uppercase tracking-tighter">
                    Smriti Icon
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Sticker 2: Neon Lime "No Tabs" Badge */}
          <div 
            className="dovv-sticker absolute -top-8 -right-2 sm:-right-6 hidden md:block" 
            style={{ '--rot': '10deg' } as any}
          >
            <div className="px-4 py-2 rounded-2xl bg-[#c6f432] text-black font-archivo font-black text-sm uppercase tracking-tight shadow-xl border-2 border-white flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-black fill-black" />
              <span>NO BROWSER TABS</span>
            </div>
          </div>

          {/* Floating Sticker 3: Vermillion "162 Palettes" Badge */}
          <div 
            className="dovv-sticker absolute -bottom-6 left-6 hidden lg:block" 
            style={{ '--rot': '6deg' } as any}
          >
            <div className="px-3.5 py-1.5 rounded-2xl bg-[#ed4a1c] text-white font-archivo font-black text-xs uppercase tracking-tight shadow-xl border-2 border-white flex items-center gap-1">
              <Palette className="w-3.5 h-3.5" />
              <span>162 PALETTES</span>
            </div>
          </div>

          {/* Floating Sticker 4: "By Suriya Prakash" Creator Badge */}
          <div 
            className="dovv-sticker absolute -bottom-6 right-8 hidden lg:block" 
            style={{ '--rot': '-6deg' } as any}
          >
            <div className="px-3.5 py-1.5 rounded-2xl bg-white text-black font-mono font-bold text-xs uppercase tracking-tight shadow-xl border-2 border-black flex items-center gap-1">
              <span>★ BY {CREATOR_NAME}</span>
            </div>
          </div>

          {/* Giant Wordmark */}
          <h1 className="dovv-wordmark text-[14vw] sm:text-[11vw] lg:text-[8.5rem] tracking-tighter text-white font-black leading-[0.85] uppercase">
            YOUR THOUGHTS<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ed4a1c] via-[#facc15] to-[#c6f432]">
              DESERVE A BETTER
            </span><br />
            SPACE.
          </h1>
        </div>

        {/* Subtitle in clean Inter / Geist */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-8">
          A beautiful notebook for writing, planning, sketching, and connecting ideas — designed around the way you think without tab clutter.
        </p>

        {/* 3 Core Highlight Badges in DOVV chip style */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          <a href="#palettes" className="dovv-chip hover:text-[#c6f432] hover:border-[#c6f432]/40 transition-colors">
            🎨 162 Palettes (Official)
          </a>
          <a href="#editor" className="dovv-chip hover:text-[#ed4a1c] hover:border-[#ed4a1c]/40 transition-colors">
            ✍️ First-Class Editor
          </a>
          <a href="#organization" className="dovv-chip hover:text-[#facc15] hover:border-[#facc15]/40 transition-colors">
            🗂️ Zero Tab Clutter
          </a>
          <span className="dovv-chip text-[#c6f432] font-bold">
            ⚡ Handcrafted by {CREATOR_NAME}
          </span>
        </div>

        {/* Primary CTA Buttons with High-Impact DOVV Style */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={APP_REDIRECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-anton uppercase tracking-wider text-white bg-[#ed4a1c] hover:bg-[#ff5d33] shadow-2xl shadow-[#ed4a1c]/40 transition-all hover:scale-105 group"
          >
            <span>START WRITING ON SMRITI</span>
            <span className="text-xs font-mono lowercase bg-black/20 px-2.5 py-1 rounded-full font-sans">
              app.smritinotes.site
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <a
            href="#palettes"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-slate-300 hover:text-white bg-[#111622] hover:bg-[#1a2233] border border-[#222] transition-colors"
          >
            <span>Explore 162 Palettes</span>
          </a>
        </div>

        {/* 3D App Mockup / Screenshot Showcase in DOVV Card Framing */}
        <div className="max-w-5xl mx-auto">
          {/* Quick Palette Bar on top of window */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-2">
            <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
              <span className="text-[#ed4a1c] font-bold">● ACTIVE THEME:</span>
              <span className="text-white font-bold">{activePalette.name}</span>
            </div>

            {/* Quick Palette Swatches directly from user's app */}
            <div className="flex items-center gap-2 bg-[#0c1018] border border-[#222] p-1.5 rounded-full">
              {OFFICIAL_SMRITI_PALETTES.slice(0, 6).map((pal) => (
                <button
                  key={pal.id}
                  onClick={() => onSelectPalette(pal)}
                  title={`${pal.name} - ${pal.vibe}`}
                  className={`relative group w-7 h-7 rounded-full transition-all duration-200 overflow-hidden border ${
                    activePalette.id === pal.id 
                      ? 'scale-115 ring-2 ring-white border-transparent' 
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
                className="text-[11px] font-mono text-[#c6f432] hover:underline px-2"
              >
                +156 more
              </a>
            </div>
          </div>

          <ThreeDCard maxTilt={8} className="w-full">
            <div className="dovv-card text-left p-0 border border-[#222222] rounded-[32px] overflow-hidden shadow-2xl">
              {/* Card Window Topbar */}
              <div className="p-4 bg-[#0a0e16] border-b border-[#222222] flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ed4a1c]" />
                    <div className="w-3 h-3 rounded-full bg-[#facc15]" />
                    <div className="w-3 h-3 rounded-full bg-[#c6f432]" />
                  </div>
                  <span className="font-mono text-slate-400 text-xs">
                    Smriti Workspace • app.smritinotes.site
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex bg-[#161c28] p-0.5 rounded-lg border border-[#263044]">
                    <button
                      onClick={() => setActiveTab('app-view')}
                      className={`px-3 py-1 rounded-md text-xs font-semibold font-mono transition-all ${
                        activeTab === 'app-view' ? 'bg-[#ed4a1c] text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Interactive View
                    </button>
                    <button
                      onClick={() => setActiveTab('screenshot')}
                      className={`px-3 py-1 rounded-md text-xs font-semibold font-mono transition-all ${
                        activeTab === 'screenshot' ? 'bg-[#ed4a1c] text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Actual App Screenshot
                    </button>
                  </div>

                  <a
                    href={APP_REDIRECT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-md text-xs font-bold text-black bg-[#c6f432] hover:bg-[#b2df27] transition-colors flex items-center gap-1 font-mono"
                  >
                    <span>Launch</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* View Content */}
              {activeTab === 'app-view' ? (
                <div className="grid grid-cols-12 min-h-[480px]">
                  {/* Left Sidebar */}
                  <div 
                    className="col-span-4 md:col-span-3 p-4 flex flex-col justify-between border-r border-[#222222] text-xs transition-colors duration-500"
                    style={{ 
                      backgroundColor: activePalette.railColor ? `${activePalette.railColor}25` : '#0d121c',
                      color: activePalette.text
                    }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-2 border-b border-white/10">
                        <span className="font-anton text-base tracking-wide text-white flex items-center gap-2">
                          <img src="/images/smriti-icon.jpg" className="w-5 h-5 rounded-md object-cover object-top" alt="" />
                          SMRITI NOTES
                        </span>
                      </div>

                      <button 
                        className="w-full py-2.5 px-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform hover:scale-102 shadow-md text-xs font-mono uppercase"
                        style={{
                          backgroundColor: activePalette.punchColor || '#ed4a1c',
                          color: '#ffffff'
                        }}
                      >
                        <span>+ New note</span>
                      </button>

                      <div className="space-y-2 pt-2">
                        <div className="text-[10px] uppercase font-bold tracking-wider opacity-60 font-mono">
                          Collections
                        </div>
                        <div className="text-[11px] opacity-75 px-2 py-1.5 rounded-lg border border-dashed border-white/15 hover:border-white/30 cursor-pointer">
                          + Group into collection
                        </div>
                      </div>

                      <div className="space-y-1 pt-2">
                        <div className="text-[10px] uppercase font-bold tracking-wider opacity-60 flex items-center justify-between font-mono">
                          <span>Notes</span>
                          <span>3</span>
                        </div>
                        <div 
                          className="px-3 py-2 rounded-xl font-semibold shadow-sm cursor-pointer border text-xs"
                          style={{
                            backgroundColor: activePalette.notePanel || '#ffffff',
                            color: '#0f172a',
                            borderColor: activePalette.accent
                          }}
                        >
                          Thinking in Spaces (No Tabs)
                        </div>
                        <div className="px-3 py-2 rounded-xl opacity-75 hover:opacity-100 hover:bg-white/5 cursor-pointer text-xs">
                          162 Palette Customization
                        </div>
                        <div className="px-3 py-2 rounded-xl opacity-75 hover:opacity-100 hover:bg-white/5 cursor-pointer text-xs">
                          Connected Sticky Canvas
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 space-y-1.5 text-xs opacity-80 font-mono">
                      <div className="flex items-center justify-between">
                        <span>📦 Archive</span>
                        <span>🗑️ Trash</span>
                      </div>
                      <div className="pt-2 text-[#c6f432] font-bold">
                        by {CREATOR_NAME}
                      </div>
                    </div>
                  </div>

                  {/* Main Editor Canvas Area */}
                  <div 
                    className="col-span-8 md:col-span-9 p-6 sm:p-8 flex flex-col justify-between transition-colors duration-500 relative"
                    style={{ 
                      backgroundColor: activePalette.wallColor ? `${activePalette.wallColor}15` : '#111622',
                      color: activePalette.text
                    }}
                  >
                    <div>
                      {/* Ribbon */}
                      <div className="pb-4 mb-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-2 bg-black/40 p-1.5 rounded-xl border border-white/10 font-mono">
                          <span className="px-2 py-0.5 rounded font-bold bg-white/10">T ▾ 16 ▾</span>
                          <span className="font-bold px-1">B</span>
                          <span className="italic px-1">I</span>
                          <span className="underline px-1">U</span>
                          <span className="line-through px-1">S</span>
                          <span className="text-[#ed4a1c] font-bold px-1">🖌️ ▾</span>
                        </div>

                        <span className="text-[11px] font-mono px-2 py-1 rounded bg-black/30 border border-white/10 text-[#c6f432]">
                          Active: {activePalette.name}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="space-y-4 max-w-2xl">
                        <h2 className="text-2xl sm:text-3xl font-archivo font-extrabold tracking-tight">
                          ## Heading 2: Jumps Over the Lazy Dog
                        </h2>

                        <h3 className="text-lg font-bold font-mono opacity-85" style={{ color: activePalette.accent }}>
                          ### Heading 3: Pack My Box With Five Dozen Liquor Jugs
                        </h3>

                        <p className="text-sm leading-relaxed opacity-90">
                          Smriti Notes no longer uses the tab-based structure. Every note lives in an uncluttered, distraction-free spatial workspace. You can switch themes on the fly, color-code your ideas with 162 palettes, and link thoughts seamlessly.
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono mt-8">
                      <span>Saved locally on this device</span>
                      <a 
                        href={APP_REDIRECT_URL}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#ed4a1c] font-bold hover:underline"
                      >
                        Launch Web App →
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden">
                  <img
                    src="/images/smriti-app-screenshot.png"
                    alt="Smriti Notes Real App Screenshot"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/90 backdrop-blur-md border border-[#222] flex items-center justify-between text-xs font-mono">
                    <div className="text-white">
                      <span className="text-[#c6f432] font-bold">● Screenshot from production:</span> "Personalize Smriti" Theme Customizer
                    </div>
                    <a
                      href={APP_REDIRECT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-[#ed4a1c] text-white font-bold"
                    >
                      Open Live App →
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
