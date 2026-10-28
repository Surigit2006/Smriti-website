import React from 'react';

interface MarqueeTickerProps {
  isDark?: boolean;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({ isDark = true }) => {
  const items1 = [
    'EXCALIDRAW SYSTEM DESIGN',
    'FIRST-CLASS NOTE EDITOR',
    'HAND-DRAWN CLOUD TOPOLOGIES',
    'CONNECTED STICKY NOTES',
    'LOCAL-FIRST SPEED',
    'DATABASE ERD MODELING',
    'APP.SMRITINOTES.SITE',
    '162 CURATED COLORWAYS',
  ];

  const items2 = [
    'MICROSERVICES CANVAS',
    'OBSIDIAN SLATE',
    'COBALT BLOCK',
    'MINT SLAB',
    'ORANGE CRUSH',
    'STATE MACHINE FLOWS',
    'PEACOCK & GOLD',
    'OFFLINE PRIVACY',
  ];

  return (
    <div className={`py-4 sm:py-5 border-y overflow-hidden space-y-2 select-none transition-colors duration-300 ${
      isDark ? 'bg-[#0B0D13] border-white/10' : 'bg-slate-100 border-black/10'
    }`}>
      {/* Track 1: Forward */}
      <div className="flex w-fit animate-marquee whitespace-nowrap">
        {[...items1, ...items1, ...items1].map((text, idx) => (
          <div key={idx} className={`flex items-center mx-4 sm:mx-6 text-xs sm:text-sm font-mono tracking-wider font-semibold ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            <span className={isDark ? 'hover:text-white' : 'hover:text-black'}>{text}</span>
            <span className="mx-4 text-[#00F076] font-black text-sm">✦</span>
          </div>
        ))}
      </div>

      {/* Track 2: Reverse */}
      <div className="flex w-fit animate-marqueeReverse whitespace-nowrap opacity-85">
        {[...items2, ...items2, ...items2].map((text, idx) => (
          <div key={idx} className={`flex items-center mx-4 sm:mx-6 text-xs sm:text-sm font-mono tracking-wider font-semibold ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            <span className={isDark ? 'hover:text-[#00E5FF]' : 'hover:text-[#008060]'}>{text}</span>
            <span className="mx-4 text-[#00E5FF] font-black text-sm">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
