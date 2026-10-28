import React from 'react';
import { XCircle, CheckCircle, PenTool, Layout, Layers } from 'lucide-react';
import { AppPalette } from '../data/palettes';
import { ThreeDCard } from './ThreeDCard';

interface WhySmritiProps {
  activePalette?: AppPalette;
  isDark?: boolean;
}

export const WhySmriti: React.FC<WhySmritiProps> = ({ isDark = true }) => {
  return (
    <section 
      className={`py-24 sm:py-32 relative border-t transition-colors duration-500 overflow-hidden ${
        isDark 
          ? 'bg-[#08090D] border-white/10 text-white' 
          : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4 font-mono text-xs font-bold uppercase tracking-widest text-[#00F076]">
            [ 06 // ARCHITECTURAL ADVANTAGE ]
          </div>

          <h2 className="text-4xl sm:text-6xl font-archivo font-black tracking-tight uppercase leading-[0.95]">
            WHY UNIFIED WRITING &<br />
            <span className="text-[#00F076]">EXCALIDRAW BELONG TOGETHER.</span>
          </h2>
          <p className={`mt-4 text-base sm:text-lg leading-relaxed font-normal ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Great systems require both structured words and hand-drawn architecture sketches. Smriti brings markdown notes and infinite vector whiteboards into one unified space.
          </p>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Legacy Fragmented Apps */}
          <ThreeDCard maxTilt={4}>
            <div className={`p-8 sm:p-10 h-full flex flex-col justify-between border rounded-3xl transition-colors ${
              isDark 
                ? 'bg-[#131722] border-rose-500/30 shadow-lg' 
                : 'bg-rose-50/50 border-rose-200 shadow-sm'
            }`}>
              <div>
                <div className="flex items-center gap-2 text-rose-500 font-mono text-xs font-bold uppercase tracking-widest mb-4">
                  <XCircle className="w-4 h-4" />
                  <span>The Fragmented Multi-App Setup</span>
                </div>
                <h3 className="font-archivo text-2xl font-black uppercase mb-6">
                  Context Switching & Lost Artifacts
                </h3>
                
                <ul className="space-y-4 text-sm font-sans">
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                      <strong>Tool-hopping fatigue:</strong> Jumping back and forth between separate markdown note apps, standalone whiteboard tabs, and wireframing tools.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                      <strong>Static screenshot decay:</strong> Exporting PNG diagrams and pasting them into docs where they can never be easily edited again.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                      <strong>Cloud latency pauses:</strong> Stalling spinners and syncing locks when all you need is to capture a sudden architectural insight.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-rose-500/20 text-xs font-mono text-rose-400">
                Disconnected multi-tool stack
              </div>
            </div>
          </ThreeDCard>

          {/* Smriti Notes Modern Architecture */}
          <ThreeDCard maxTilt={4}>
            <div className={`p-8 sm:p-10 h-full flex flex-col justify-between border-2 rounded-3xl transition-colors ${
              isDark 
                ? 'bg-[#131722] border-[#00F076]/40 shadow-2xl shadow-[#00F076]/5' 
                : 'bg-white border-[#00F076]/60 shadow-xl'
            }`}>
              <div>
                <div className="flex items-center gap-2 text-[#00F076] font-mono text-xs font-bold uppercase tracking-widest mb-4">
                  <CheckCircle className="w-4 h-4" />
                  <span>Smriti Unified Canvas & Editor</span>
                </div>
                <h3 className="font-archivo text-2xl font-black uppercase mb-6">
                  System Design & Words in Harmony
                </h3>
                
                <ul className="space-y-4 text-sm font-sans">
                  <li className="flex items-start gap-3">
                    <span className="text-[#00F076] font-bold shrink-0">✓</span>
                    <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>
                      <strong>Embedded Excalidraw Whiteboard:</strong> Draw microservices, database schemas, and state machines right alongside long-form technical prose.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00F076] font-bold shrink-0">✓</span>
                    <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>
                      <strong>162 Hand-Tuned Palettes:</strong> Apply matching hex tones and pencil stroke styles to both diagrams and notebook surfaces.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00F076] font-bold shrink-0">✓</span>
                    <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>
                      <strong>Instant Offline Speed:</strong> Every stroke and keystroke writes directly to local storage at zero network latency.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-[#00F076] font-bold">Excalidraw Native • Local-First</span>
                <span className="text-[#00E5FF] font-bold">Pure Creative Flow</span>
              </div>
            </div>
          </ThreeDCard>
        </div>
      </div>
    </section>
  );
};
