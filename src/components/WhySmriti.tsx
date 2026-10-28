import React from 'react';
import { XCircle, CheckCircle, PenTool, Layout, Layers } from 'lucide-react';
import { AppPalette } from '../data/palettes';
import { ThreeDCard } from './ThreeDCard';

interface WhySmritiProps {
  activePalette: AppPalette;
}

export const WhySmriti: React.FC<WhySmritiProps> = () => {
  return (
    <section className="py-24 sm:py-32 relative bg-[#F5F0E8] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4 font-mono text-xs text-[#0F4C81] font-bold uppercase tracking-widest">
            [ 06 // ARCHITECTURAL ADVANTAGE ]
          </div>

          <h2 className="text-4xl sm:text-6xl font-archivo font-black text-[#141414] tracking-tight uppercase leading-[0.95]">
            WHY UNIFIED WRITING &<br />
            <span className="text-[#0F4C81]">EXCALIDRAW BELONG TOGETHER.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#666055] leading-relaxed font-normal">
            Great ideas require both structured words and hand-drawn system diagrams. Smriti brings markdown notes and infinite vector whiteboards into one unified space.
          </p>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Legacy Fragmented Apps */}
          <ThreeDCard maxTilt={5}>
            <div className="dovv-card bg-white p-8 sm:p-10 h-full flex flex-col justify-between border border-rose-200 shadow-sm rounded-3xl">
              <div>
                <div className="flex items-center gap-2 text-rose-600 font-mono text-xs font-bold uppercase tracking-widest mb-4">
                  <XCircle className="w-4 h-4" />
                  <span>The Fragmented Multi-App Setup</span>
                </div>
                <h3 className="font-archivo text-2xl font-black text-[#141414] uppercase mb-6">
                  Context Switching & Lost Artifacts
                </h3>
                
                <ul className="space-y-4 text-sm text-[#666055] font-sans">
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>Tool-hopping fatigue:</strong> Jumping back and forth between separate markdown note apps, standalone whiteboard tabs, and wireframing tools.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>Static screenshot decay:</strong> Exporting PNG diagrams and pasting them into docs where they can never be easily edited again.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>Cloud latency pauses:</strong> Stalling spinners and syncing locks when all you need is to capture a sudden architectural insight.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-black/[0.06] text-xs font-mono text-[#666055]">
                Disconnected multi-tool stack
              </div>
            </div>
          </ThreeDCard>

          {/* Smriti Notes Modern Architecture */}
          <ThreeDCard maxTilt={5}>
            <div className="dovv-card bg-white p-8 sm:p-10 h-full flex flex-col justify-between border-2 border-[#0F4C81]/30 shadow-md rounded-3xl">
              <div>
                <div className="flex items-center gap-2 text-[#0F4C81] font-mono text-xs font-bold uppercase tracking-widest mb-4">
                  <CheckCircle className="w-4 h-4" />
                  <span>Smriti Unified Canvas & Editor</span>
                </div>
                <h3 className="font-archivo text-2xl font-black text-[#141414] uppercase mb-6">
                  System Design & Words in Harmony
                </h3>
                
                <ul className="space-y-4 text-sm text-[#141414] font-sans">
                  <li className="flex items-start gap-3">
                    <span className="text-[#16c847] font-bold">✓</span>
                    <span><strong>Embedded Excalidraw Whiteboard:</strong> Draw microservices, database schemas, and state machines right alongside long-form technical prose.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#16c847] font-bold">✓</span>
                    <span><strong>162 Hand-Tuned Palettes:</strong> Apply matching hex tones and pencil stroke styles to both diagrams and notebook surfaces.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#16c847] font-bold">✓</span>
                    <span><strong>Instant Offline Speed:</strong> Every stroke and keystroke writes directly to local storage at zero network latency.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-[#0F4C81] font-bold">Excalidraw Native • Local-First</span>
                <span className="text-[#16c847] font-bold">Pure Creative Flow</span>
              </div>
            </div>
          </ThreeDCard>
        </div>
      </div>
    </section>
  );
};
