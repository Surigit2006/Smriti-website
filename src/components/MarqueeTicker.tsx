import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const items1 = [
    '162 COLOR PALETTES',
    'NO BROWSER TABS',
    'CONNECTED STICKY NOTES',
    'LOCAL-FIRST SPEED',
    'APP.SMRITINOTES.SITE',
    'HANDCRAFTED BY SURIYA PRAKASH',
    'SPATIAL CLARITY',
    'ZERO CLUTTER',
  ];

  const items2 = [
    'PINK RIOT',
    'COBALT BLOCK',
    'MINT SLAB',
    'ORANGE CRUSH',
    'LILAC SLAP',
    'SKY SLAP',
    'SMRITI PEACOCK & SUN',
    'RICH MARKDOWN EDITOR',
  ];

  return (
    <div className="py-6 sm:py-8 bg-[#05080c] border-y border-[#1c1c1c] overflow-hidden space-y-3 select-none">
      {/* Track 1: Forward */}
      <div className="flex w-fit animate-marquee whitespace-nowrap">
        {[...items1, ...items1, ...items1].map((text, idx) => (
          <div key={idx} className="flex items-center mx-4 sm:mx-6 text-xs sm:text-sm font-mono tracking-wider font-semibold text-slate-400">
            <span className="hover:text-white transition-colors">{text}</span>
            <span className="mx-4 text-[#ed4a1c] font-black text-base">✦</span>
          </div>
        ))}
      </div>

      {/* Track 2: Reverse with Neon Lime Accents */}
      <div className="flex w-fit animate-marqueeReverse whitespace-nowrap opacity-75">
        {[...items2, ...items2, ...items2].map((text, idx) => (
          <div key={idx} className="flex items-center mx-4 sm:mx-6 text-xs sm:text-sm font-mono tracking-wider font-semibold text-slate-400">
            <span className="hover:text-[#c6f432] transition-colors">{text}</span>
            <span className="mx-4 text-[#c6f432] font-black text-base">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
