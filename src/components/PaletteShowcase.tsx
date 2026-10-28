import React, { useState } from 'react';
import { 
  Palette, 
  Copy, 
  Check, 
  Search, 
  ArrowUpRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { 
  AppPalette, 
  ALL_162_PALETTES, 
  CATEGORIES, 
  TOTAL_PALETTE_COUNT,
  APP_REDIRECT_URL
} from '../data/palettes';
import { ThreeDCard } from './ThreeDCard';

interface PaletteShowcaseProps {
  activePalette: AppPalette;
  onSelectPalette: (palette: AppPalette) => void;
}

export const PaletteShowcase: React.FC<PaletteShowcaseProps> = ({
  activePalette,
  onSelectPalette,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredPalettes = ALL_162_PALETTES.filter((p: AppPalette) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <section id="palettes" className="py-24 sm:py-32 relative bg-[#FAF7F2] border-t border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* DOVV Style Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/[0.07]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#0F4C81] font-bold uppercase tracking-widest">
                [ 03 // VISUAL PERSONALIZATION ]
              </span>
              <span className="dovv-chip text-[#141414] text-xs py-0.5">
                Current Feature
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-archivo font-black text-[#141414] tracking-tight leading-[0.95] uppercase">
              162 PALETTES.<br />
              <span className="text-[#0F4C81]">DESIGNED FOR MOOD & COGNITION.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#666055] leading-relaxed max-w-2xl font-normal">
              Personalize your workspace with the official 162 colorways from the Smriti engine. From warm paper and crisp slate to brutalist accents, choose the environment that fits your focus.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#141414] hover:bg-[#0F4C81] text-white font-archivo font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              <span>Test in Web App</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Real App Screenshot Showcase Banner */}
        <div className="mb-14">
          <ThreeDCard maxTilt={3}>
            <div className="dovv-card bg-white p-6 sm:p-8 rounded-3xl border border-black/[0.08] shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-md">
                <span className="text-xs font-mono font-bold text-[#F59E0B] uppercase tracking-wider mb-2 block">
                  Production Theme Switcher
                </span>
                <h3 className="text-xl sm:text-2xl font-archivo font-bold uppercase text-[#141414] mb-2">
                  As Seen In Smriti 2.0
                </h3>
                <p className="text-xs sm:text-sm text-[#666055] leading-relaxed mb-4">
                  Open the "Personalize Smriti" modal in the web app to switch between 162 themes across 13 distinct categories with instant zero-reload recoloring.
                </p>
                <a
                  href={APP_REDIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0F4C81] hover:underline"
                >
                  <span>Open Theme Modal in app.smritinotes.site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-black/10 shadow-sm bg-[#FAF7F2]">
                <img
                  src="/images/smriti-app-screenshot.png"
                  alt="Smriti Notes Theme Picker Screenshot"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </ThreeDCard>
        </div>

        {/* Filter & Category Navigation */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666055]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by theme name or mood (e.g. Linen, Riot, Tokyo)..."
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-black/[0.08] text-xs font-mono text-[#141414] focus:outline-none focus:border-[#0F4C81] transition-all shadow-xs"
              />
            </div>

            <div className="text-xs font-mono text-[#666055] shrink-0">
              Showing {Math.min(visibleCount, filteredPalettes.length)} of {filteredPalettes.length} palettes
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat: string) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#141414] text-white font-bold shadow-xs'
                    : 'bg-white text-[#666055] hover:text-[#141414] border border-black/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Palette Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPalettes.slice(0, visibleCount).map((pal: AppPalette) => {
            const isSelected = activePalette.id === pal.id;
            return (
              <ThreeDCard key={pal.id} maxTilt={6}>
                <div
                  onClick={() => onSelectPalette(pal)}
                  className={`dovv-card p-5 cursor-pointer bg-white transition-all ${
                    isSelected ? 'ring-2 ring-[#0F4C81] shadow-lg' : 'hover:shadow-md'
                  }`}
                >
                  {/* Visual Theme Preview Surface */}
                  <div 
                    className="h-32 rounded-2xl p-4 mb-4 flex flex-col justify-between border border-black/[0.06] relative overflow-hidden"
                    style={{ background: pal.bg, color: pal.text }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div 
                          className="w-4 h-4 rounded-md flex items-center justify-center text-[9px] font-bold"
                          style={{ background: pal.accent, color: pal.accentFg }}
                        >
                          S
                        </div>
                        <span className="text-xs font-bold" style={{ color: pal.text }}>
                          {pal.name}
                        </span>
                      </div>
                      <span 
                        className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-full"
                        style={{ background: pal.surface, color: pal.muted, border: `1px solid ${pal.border}` }}
                      >
                        {pal.mode}
                      </span>
                    </div>

                    <div 
                      className="p-2.5 rounded-xl text-[11px] font-mono leading-relaxed truncate"
                      style={{ background: pal.surface, border: `1px solid ${pal.border}` }}
                    >
                      {pal.desc}
                    </div>

                    {/* 10 Token Swatches Strip */}
                    <div className="flex items-center gap-1">
                      {pal.colors.slice(0, 8).map((hex: string, i: number) => (
                        <div
                          key={i}
                          className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0"
                          style={{ background: hex }}
                          title={hex}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#666055]">{pal.category}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyHex(pal.accent);
                      }}
                      className="flex items-center gap-1 text-[#666055] hover:text-[#141414] transition-colors"
                      title="Copy accent color hex"
                    >
                      {copiedHex === pal.accent ? (
                        <>
                          <Check className="w-3 h-3 text-[#16c847]" />
                          <span className="text-[#16c847]">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>{pal.accent}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </ThreeDCard>
            );
          })}
        </div>

        {/* Load More Palettes Button */}
        {visibleCount < filteredPalettes.length && (
          <div className="text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 18)}
              className="px-8 py-3.5 rounded-full bg-white hover:bg-[#FAF7F2] border border-black/[0.08] text-xs font-mono font-bold uppercase tracking-wider text-[#141414] shadow-sm hover:shadow transition-all"
            >
              Load More Palettes ({filteredPalettes.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
