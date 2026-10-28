import React from 'react';

export const MarqueeTicker: React.FC = () => {
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
    'PAPER INK',
    'COBALT BLOCK',
    'MINT SLAB',
    'ORANGE CRUSH',
    'STATE MACHINE FLOWS',
    'PEACOCK & GOLD',
    'OFFLINE PRIVACY',
  ];

  return (
    <div className="py-5 sm:py-6 bg-[#FAF7F2] border-y border-black/[0.06] overflow-hidden space-y-2.5 select-none">
      {/* Track 1: Forward */}
      <div className="flex w-fit animate-marquee whitespace-nowrap">
        {[...items1, ...items1, ...items1].map((text, idx) => (
          <div key={idx} className="flex items-center mx-4 sm:mx-6 text-xs sm:text-sm font-mono tracking-wider font-semibold text-[#666055]">
            <span className="hover:text-[#141414] transition-colors">{text}</span>
            <span className="mx-4 text-[#F59E0B] font-black text-sm">✦</span>
          </div>
        ))}
      </div>

      {/* Track 2: Reverse */}
      <div className="flex w-fit animate-marqueeReverse whitespace-nowrap opacity-85">
        {[...items2, ...items2, ...items2].map((text, idx) => (
          <div key={idx} className="flex items-center mx-4 sm:mx-6 text-xs sm:text-sm font-mono tracking-wider font-semibold text-[#666055]">
            <span className="hover:text-[#0F4C81] transition-colors">{text}</span>
            <span className="mx-4 text-[#0F4C81] font-black text-sm">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
