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
  isDark?: boolean;
}

export const PaletteShowcase: React.FC<PaletteShowcaseProps> = ({
  activePalette,
  onSelectPalette,
  isDark = true,
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
    <section 
      id="palettes" 
      className={`py-24 sm:py-32 relative border-t transition-colors duration-500 overflow-hidden ${
        isDark 
          ? 'bg-[#0E1118] border-white/10 text-white' 
          : 'bg-[#F8FAFC] border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Shopify Editions Style Section Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b ${
          isDark ? 'border-white/10' : 'border-slate-200'
        }`}>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border ${
                isDark 
                  ? 'bg-[#00F076]/10 text-[#00F076] border-[#00F076]/20' 
                  : 'bg-emerald-50 text-emerald-700 border-emerald-200'
              }`}>
                [ 03 // COLOR SCIENCE ]
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold ${
                isDark ? 'bg-white/10 text-white' : 'bg-slate-200 text-slate-800'
              }`}>
                162 Palettes
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-archivo font-black tracking-tight leading-[0.95] uppercase">
              162 COLORWAYS.<br />
              <span className="text-[#00F076]">ENGINEERED FOR EXTENDED FOCUS.</span>
            </h2>

            <p className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Personalize your workspace with the 162 colorways from the Smriti engine. From deep dark obsidian and high-contrast brutalist strokes to soft slate pastels, pick the tone that matches your state of mind.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#00F076] hover:bg-[#00d669] text-black font-archivo font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[#00F076]/20 transition-all hover:scale-105"
            >
              <span>Test in Web App</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Real App Screenshot Showcase Banner */}
        <div className="mb-14">
          <ThreeDCard maxTilt={2}>
            <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 transition-colors ${
              isDark ? 'bg-[#131722] border-white/10' : 'bg-white border-slate-200'
            }`}>
              <div className="max-w-md">
                <span className="text-xs font-mono font-bold text-[#00F076] uppercase tracking-wider mb-2 block">
                  Production Theme Switcher
                </span>
                <h3 className="text-xl sm:text-2xl font-archivo font-bold uppercase mb-2">
                  As Seen In Smriti
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Open the "Personalize Smriti" modal in the web app to switch between 162 themes across 13 distinct categories with instant zero-reload recoloring.
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={APP_REDIRECT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#00F076] hover:underline"
                  >
                    <span>Launch modal at app.smritinotes.site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Real App Modal Screenshot */}
              <div className="relative group max-w-sm rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <img
                  src="/images/smriti-screenshot.png"
                  alt="Smriti Personalize Modal"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-[11px] font-mono text-white">Live Smriti Modal Interface</span>
                </div>
              </div>
            </div>
          </ThreeDCard>
        </div>

        {/* Category Filter Pills & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all whitespace-nowrap border ${
                  selectedCategory === category
                    ? isDark
                      ? 'bg-white text-black border-white shadow-md'
                      : 'bg-slate-900 text-white border-slate-900 shadow-md'
                    : isDark
                      ? 'bg-[#131722] text-slate-400 hover:text-white border-white/10'
                      : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search 162 palettes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-full border text-xs font-mono outline-none ${
                isDark 
                  ? 'bg-[#131722] border-white/10 text-white placeholder-slate-500 focus:border-[#00F076]' 
                  : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-[#00F076]'
              }`}
            />
          </div>
        </div>

        {/* Palette Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPalettes.slice(0, visibleCount).map((p) => {
            const isSelected = activePalette.id === p.id;
            return (
              <ThreeDCard key={p.id} maxTilt={3}>
                <div
                  onClick={() => onSelectPalette(p)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer h-full flex flex-col justify-between ${
                    isSelected
                      ? 'ring-2 ring-[#00F076] bg-[#00F076]/5'
                      : isDark ? 'bg-[#131722] border-white/10 hover:border-white/25' : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div>
                    {/* Header: Name + Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h4 className="font-archivo font-bold text-base truncate uppercase">
                        {p.name}
                      </h4>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                        p.mode === 'dark'
                          ? 'bg-black/40 text-slate-300 border-white/10'
                          : 'bg-white/40 text-slate-700 border-black/10'
                      }`}>
                        {p.category}
                      </span>
                    </div>

                    <p className={`text-xs font-mono line-clamp-2 mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {p.desc}
                    </p>
                  </div>

                  {/* 10 Swatches representation */}
                  <div>
                    <div className="grid grid-cols-5 gap-1.5 p-2 rounded-xl mb-3 border border-white/5 bg-black/20">
                      {(p.colors || []).slice(0, 10).map((swatch, idx) => (
                        <div
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopyHex(swatch);
                          }}
                          className="h-6 rounded-md transition-transform hover:scale-110 shadow-xs relative group/swatch cursor-copy"
                          style={{ backgroundColor: swatch }}
                          title={`Click to copy: ${swatch}`}
                        >
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/swatch:opacity-100">
                            {copiedHex === swatch ? (
                              <Check className="w-3 h-3 text-white drop-shadow" />
                            ) : (
                              <Copy className="w-2.5 h-2.5 text-white drop-shadow" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer selection indicator */}
                    <div className="flex items-center justify-between pt-2 text-[11px] font-mono border-t border-white/5">
                      <span className={isSelected ? 'text-[#00F076] font-bold' : isDark ? 'text-slate-500' : 'text-slate-400'}>
                        {isSelected ? '● Currently Active' : 'Click to preview'}
                      </span>
                      <span className="text-[10px] opacity-60">10 swatches</span>
                    </div>
                  </div>
                </div>
              </ThreeDCard>
            );
          })}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredPalettes.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className={`px-8 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider border transition-all ${
                isDark 
                  ? 'bg-[#131722] hover:bg-[#1a2030] text-white border-white/10' 
                  : 'bg-white hover:bg-slate-100 text-slate-900 border-slate-300'
              }`}
            >
              Load More Palettes ({filteredPalettes.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
