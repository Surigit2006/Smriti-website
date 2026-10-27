import React, { useState } from 'react';
import { 
  Palette, 
  Copy, 
  Check, 
  Sparkles, 
  Search, 
  Pipette, 
  Sliders, 
  ArrowRight,
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import { 
  ColorPalette, 
  OFFICIAL_SMRITI_PALETTES,
  ALL_162_PALETTES, 
  CATEGORIES, 
  TOTAL_PALETTE_COUNT,
  APP_REDIRECT_URL,
  CREATOR_NAME
} from '../data/palettes';
import { ThreeDCard } from './ThreeDCard';

interface PaletteShowcaseProps {
  activePalette: ColorPalette;
  onSelectPalette: (palette: ColorPalette) => void;
}

export const PaletteShowcase: React.FC<PaletteShowcaseProps> = ({
  activePalette,
  onSelectPalette,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [customPenHex, setCustomPenHex] = useState('#f59e0b');
  const [visibleCount, setVisibleCount] = useState(24);

  const filteredPalettes = ALL_162_PALETTES.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.vibe.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.accent.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <section id="palettes" className="py-24 sm:py-32 relative bg-[#090d16] overflow-hidden border-t border-b border-white/5">
      {/* 3D dynamic blur orb */}
      <div 
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[750px] h-[750px] rounded-full blur-[170px] opacity-20 pointer-events-none transition-colors duration-700"
        style={{ background: activePalette.accent }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Palette className="w-3.5 h-3.5" />
              <span>Official 162-Palette Engine</span>
              <span className="bg-emerald-500/20 text-emerald-400 px-1.5 py-0.2 rounded text-[10px]">
                Current
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              162 hand-crafted palettes. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-indigo-400">
                Crafted by {CREATOR_NAME}.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Personalize your workspace with the official graphic colorways from the Smriti app: Pink Riot, Cobalt Block, Mint Slab, Orange Crush, Lilac Slap, and Sky Slap. Select any palette to recolor the entire preview.
            </p>
          </div>

          {/* Quick Action Card & Link */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-sm shadow-xl shadow-amber-500/25 transition-all hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              <span>Open in app.smritinotes.site</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3D Showcase: Actual App Screenshot Card + Official Graphic Theme Swatches */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Direct from the Smriti App
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Personalize Smriti Theme Modal
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Interactive 3D preview of the actual theme selector running in production.
            </p>
          </div>

          {/* 3D Card of the actual App Screenshot */}
          <ThreeDCard maxTilt={10} className="max-w-4xl mx-auto mb-12">
            <div className="rounded-3xl border border-white/20 bg-slate-950 overflow-hidden shadow-2xl relative group">
              <div className="p-4 bg-slate-900 border-b border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-200 font-semibold">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Smriti App — "Personalize Smriti" Theme Customizer</span>
                </div>
                <a
                  href={APP_REDIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline flex items-center gap-1 font-mono text-[11px]"
                >
                  <span>app.smritinotes.site</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* The user's screenshot */}
              <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
                <img
                  src="/images/smriti-app-screenshot.png"
                  alt="Personalize Smriti Themes from notes app"
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              <div className="p-4 bg-slate-900/90 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-300">
                <div>
                  <strong className="text-white">Active Palettes:</strong> Pink Riot, Cobalt Block, Mint Slab, Orange Crush, Lilac Slap, Sky Slap
                </div>
                <div className="text-slate-400 font-mono text-[11px]">
                  "Your selected theme is saved on this device."
                </div>
              </div>
            </div>
          </ThreeDCard>

          {/* Official Themes 3D Interactive Grid (Click to activate) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OFFICIAL_SMRITI_PALETTES.map((pal) => {
              const isSelected = activePalette.id === pal.id;
              return (
                <ThreeDCard key={pal.id} maxTilt={14} scale={1.03}>
                  <div
                    onClick={() => onSelectPalette(pal)}
                    className={`p-5 rounded-3xl border transition-all duration-300 cursor-pointer text-left h-full flex flex-col justify-between ${
                      isSelected
                        ? 'ring-2 ring-amber-400 border-transparent shadow-2xl scale-[1.02]'
                        : 'border-white/10 hover:border-white/30 bg-slate-900/80 hover:bg-slate-900'
                    }`}
                    style={{
                      backgroundColor: pal.bg,
                      boxShadow: isSelected ? `0 15px 35px -5px ${pal.accent}50` : 'none'
                    }}
                  >
                    <div>
                      {/* Theme Title */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <h4 
                            className="font-extrabold text-base tracking-tight"
                            style={{ color: pal.text }}
                          >
                            {pal.name}
                          </h4>
                          <p 
                            className="text-xs opacity-80 line-clamp-2 mt-0.5" 
                            style={{ color: pal.text }}
                          >
                            {pal.vibe}
                          </p>
                        </div>
                        {isSelected && (
                          <span className="shrink-0 p-1 rounded-full bg-amber-400 text-black shadow-md">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </span>
                        )}
                      </div>

                      {/* Graphic App-Style Color Slab (matching user screenshot layout) */}
                      <div 
                        className="rounded-2xl p-3 my-4 border border-white/20 shadow-inner flex items-center justify-between gap-2"
                        style={{ backgroundColor: pal.wallColor || pal.bg }}
                      >
                        {/* Rail / sidebar slab */}
                        <div 
                          className="w-10 h-14 rounded-xl shadow-sm shrink-0" 
                          style={{ backgroundColor: pal.railColor || pal.accent }} 
                          title="Sidebar Rail"
                        />
                        {/* Note Panel */}
                        <div 
                          className="flex-1 h-14 rounded-xl shadow-md p-2 flex flex-col justify-between"
                          style={{ backgroundColor: pal.notePanel || '#ffffff' }}
                          title="Note Surface"
                        >
                          <div className="w-12 h-1.5 rounded-full bg-slate-400/40" />
                          <div className="w-8 h-1.5 rounded-full bg-slate-300/40" />
                        </div>
                        {/* Punch accent pill */}
                        <div 
                          className="w-2.5 h-8 rounded-full shadow-sm shrink-0"
                          style={{ backgroundColor: pal.punchColor || pal.accent }}
                          title="Punch Accent"
                        />
                      </div>
                    </div>

                    {/* Bottom Metadata & Hex Codes */}
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                      <span 
                        className="px-2 py-0.5 rounded text-[11px] font-bold"
                        style={{ backgroundColor: `${pal.accent}30`, color: pal.accent }}
                      >
                        {pal.accent}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyHex(pal.accent);
                        }}
                        className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1"
                      >
                        {copiedHex === pal.accent ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedHex === pal.accent ? 'Copied' : 'Hex'}</span>
                      </button>
                    </div>
                  </div>
                </ThreeDCard>
              );
            })}
          </div>
        </div>

        {/* 162 Palettes Interactive Catalog Filter & Explorer */}
        <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Complete 162-Palette Library</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30">
                  {TOTAL_PALETTE_COUNT} total
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Click any palette to immediately apply it across the 3D mockups.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Search palettes or moods..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950/80 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-black font-bold shadow-md shadow-amber-400/20'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid of Palettes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {filteredPalettes.slice(0, visibleCount).map((pal) => {
              const isSelected = activePalette.id === pal.id;
              return (
                <div
                  key={pal.id}
                  onClick={() => onSelectPalette(pal)}
                  className={`group relative p-4 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                    isSelected
                      ? 'ring-2 ring-amber-400 border-transparent shadow-xl scale-[1.02]'
                      : 'border-white/10 hover:border-white/25 hover:bg-white/[0.03]'
                  }`}
                  style={{
                    backgroundColor: pal.bg,
                  }}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 
                        className="font-bold text-sm tracking-tight"
                        style={{ color: pal.text }}
                      >
                        {pal.name}
                      </h4>
                      <p className="text-[11px] opacity-75 line-clamp-1" style={{ color: pal.text }}>
                        {pal.vibe}
                      </p>
                    </div>
                    {isSelected && (
                      <span className="shrink-0 p-1 rounded-full bg-amber-400 text-black">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    )}
                  </div>

                  {/* Color Swatch Bars */}
                  <div className="flex h-5 rounded-lg overflow-hidden border border-white/15 my-3">
                    <div className="flex-1" style={{ backgroundColor: pal.wallColor || pal.bg }} title="Wall" />
                    <div className="flex-1" style={{ backgroundColor: pal.railColor || pal.surface }} title="Rail" />
                    <div className="flex-1" style={{ backgroundColor: pal.notePanel || pal.accent }} title="Panel" />
                    <div className="flex-1" style={{ backgroundColor: pal.punchColor || pal.secondary }} title="Punch" />
                  </div>

                  {/* Hex badges */}
                  <div className="flex items-center justify-between text-[10px] font-mono opacity-80 pt-1">
                    <span 
                      className="px-1.5 py-0.5 rounded font-bold"
                      style={{ backgroundColor: `${pal.accent}25`, color: pal.accent }}
                    >
                      {pal.accent}
                    </span>
                    <span className="text-slate-400 text-[10px]">
                      {pal.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Show More Button if filtered has more */}
          {visibleCount < filteredPalettes.length && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setVisibleCount((prev) => Math.min(prev + 24, TOTAL_PALETTE_COUNT))}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-sm font-semibold text-white border border-white/10 transition-all hover:scale-105"
              >
                <span>Load More Palettes ({filteredPalettes.length - visibleCount} remaining)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
