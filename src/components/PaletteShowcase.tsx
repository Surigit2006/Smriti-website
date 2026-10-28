import React, { useState } from 'react';
import { 
  Palette, 
  Copy, 
  Check, 
  Search, 
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
    <section id="palettes" className="py-24 sm:py-32 relative bg-[#05080c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* DOVV Style Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#1c1c1c]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#ed4a1c] font-bold uppercase tracking-widest">
                [ 01 // VISUAL HOOK ]
              </span>
              <span className="dovv-chip text-[#c6f432] text-xs py-0.5">
                Current Feature
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-archivo font-black text-white tracking-tight leading-[0.95] uppercase">
              162 COLOR PALETTES.<br />
              <span className="text-[#ed4a1c]">NO STERILE DEFAULTS.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Personalize your workspace with the official graphic colorways from the Smriti app: Pink Riot, Cobalt Block, Mint Slab, Orange Crush, Lilac Slap, and Sky Slap. Select any palette to recolor the entire preview.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#ed4a1c] hover:bg-[#ff5d33] text-white font-archivo font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#ed4a1c]/25 transition-all hover:scale-105"
            >
              <span>Test in Web App</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Featured Official Palettes (DOVV Studio Card Grid) */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-archivo text-xl font-bold uppercase text-white tracking-wide">
              Official Production Themes
            </h3>
            <span className="font-mono text-xs text-slate-400">
              Click to skin preview
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFICIAL_SMRITI_PALETTES.map((pal) => {
              const isSelected = activePalette.id === pal.id;
              return (
                <ThreeDCard key={pal.id} maxTilt={10} scale={1.02}>
                  <div
                    onClick={() => onSelectPalette(pal)}
                    className={`dovv-card cursor-pointer transition-all duration-300 h-full flex flex-col justify-between ${
                      isSelected
                        ? 'ring-2 ring-[#c6f432] border-transparent shadow-2xl scale-[1.01]'
                        : 'hover:border-white/20'
                    }`}
                  >
                    <div>
                      {/* Media Header with App Slabs */}
                      <div 
                        className="dovv-media p-4 h-44 rounded-[24px] flex items-center justify-between gap-3 relative overflow-hidden border border-white/10"
                        style={{ backgroundColor: pal.wallColor || pal.bg }}
                      >
                        {/* Rail / sidebar slab */}
                        <div 
                          className="w-14 h-full rounded-2xl shadow-md shrink-0 flex items-center justify-center font-mono text-[10px] text-white/50"
                          style={{ backgroundColor: pal.railColor || pal.accent }} 
                        >
                          RAIL
                        </div>

                        {/* Note Panel */}
                        <div 
                          className="flex-1 h-full rounded-2xl shadow-lg p-3 flex flex-col justify-between border border-black/10"
                          style={{ backgroundColor: pal.notePanel || '#ffffff' }}
                        >
                          <div className="space-y-1.5">
                            <div className="w-16 h-2 rounded-full bg-slate-400/40" />
                            <div className="w-24 h-1.5 rounded-full bg-slate-300/40" />
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">
                            PANEL
                          </span>
                        </div>

                        {/* Punch Accent Pill */}
                        <div 
                          className="w-4 h-16 rounded-full shadow-md shrink-0"
                          style={{ backgroundColor: pal.punchColor || pal.accent }}
                          title="Punch Accent"
                        />
                      </div>

                      {/* Card Content & Meta */}
                      <div className="pt-5 px-2">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-archivo text-xl font-bold text-white tracking-tight uppercase">
                            {pal.name}
                          </h4>
                          {isSelected && (
                            <span className="dovv-chip text-[#c6f432] font-mono text-xs py-0.5">
                              Active
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 mt-1 font-mono leading-relaxed">
                          {pal.vibe}
                        </p>
                      </div>
                    </div>

                    {/* Card Chips & Hex code */}
                    <div className="pt-4 px-2 mt-4 border-t border-[#1c1c1c] flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span 
                          className="w-3 h-3 rounded-full shrink-0" 
                          style={{ backgroundColor: pal.accent }} 
                        />
                        <span className="font-mono text-xs text-slate-300 font-bold">
                          {pal.accent}
                        </span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyHex(pal.accent);
                        }}
                        className="dovv-chip text-xs hover:text-white flex items-center gap-1"
                      >
                        {copiedHex === pal.accent ? <Check className="w-3 h-3 text-[#c6f432]" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedHex === pal.accent ? 'Copied' : 'Copy Hex'}</span>
                      </button>
                    </div>
                  </div>
                </ThreeDCard>
              );
            })}
          </div>
        </div>

        {/* 162 Palettes Interactive Catalog Filter & Explorer */}
        <div className="dovv-card p-6 sm:p-10 rounded-[32px] border border-[#222222]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#222222]">
            <div>
              <h3 className="font-archivo text-2xl font-black text-white uppercase tracking-wide flex items-center gap-3">
                <span>The Complete 162-Palette Library</span>
                <span className="dovv-chip text-[#c6f432] text-xs font-mono font-bold">
                  {TOTAL_PALETTE_COUNT} Palettes
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Click any palette to recolor the 3D application mockup and reading space.
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
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#090d14] border border-[#262c3b] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#ed4a1c] font-mono"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto py-5 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`dovv-chip text-xs uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#ed4a1c] text-white font-bold shadow-md shadow-[#ed4a1c]/25 border-transparent'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid of Palettes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
            {filteredPalettes.slice(0, visibleCount).map((pal) => {
              const isSelected = activePalette.id === pal.id;
              return (
                <div
                  key={pal.id}
                  onClick={() => onSelectPalette(pal)}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                    isSelected
                      ? 'ring-2 ring-[#c6f432] border-transparent shadow-xl scale-[1.02]'
                      : 'border-[#222] hover:border-white/20 bg-[#090d15] hover:bg-[#0e1422]'
                  }`}
                  style={{
                    backgroundColor: pal.bg,
                  }}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 
                        className="font-archivo text-sm font-bold tracking-tight uppercase"
                        style={{ color: pal.text }}
                      >
                        {pal.name}
                      </h4>
                      <p className="text-[11px] opacity-75 line-clamp-1 font-mono" style={{ color: pal.text }}>
                        {pal.vibe}
                      </p>
                    </div>
                    {isSelected && (
                      <span className="shrink-0 p-1 rounded-full bg-[#c6f432] text-black">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    )}
                  </div>

                  {/* Swatch bars */}
                  <div className="flex h-5 rounded-lg overflow-hidden border border-white/15 my-3">
                    <div className="flex-1" style={{ backgroundColor: pal.wallColor || pal.bg }} title="Wall" />
                    <div className="flex-1" style={{ backgroundColor: pal.railColor || pal.surface }} title="Rail" />
                    <div className="flex-1" style={{ backgroundColor: pal.notePanel || pal.accent }} title="Panel" />
                    <div className="flex-1" style={{ backgroundColor: pal.punchColor || pal.secondary }} title="Punch" />
                  </div>

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
                className="dovv-chip text-sm uppercase tracking-wider text-white hover:border-white transition-all hover:scale-105 px-6 py-3"
              >
                <span>Load More Palettes ({filteredPalettes.length - visibleCount} remaining)</span>
                <ArrowRight className="w-4 h-4 inline-block ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
