import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';
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
            [ 06 // ARCHITECTURAL EVOLUTION ]
          </div>

          <h2 className="text-4xl sm:text-6xl font-archivo font-black text-[#141414] tracking-tight uppercase leading-[0.95]">
            WHY SMRITI ABANDONED<br />
            <span className="text-[#0F4C81]">BROWSER TABS.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#666055] leading-relaxed font-normal">
            Note-taking shouldn't mirror a chaotic browser with 47 open tabs. We designed a clean spatial system that keeps you centered.
          </p>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Legacy Cluttered Apps */}
          <ThreeDCard maxTilt={5}>
            <div className="dovv-card bg-white p-8 sm:p-10 h-full flex flex-col justify-between border border-rose-200 shadow-sm rounded-3xl">
              <div>
                <div className="flex items-center gap-2 text-rose-600 font-mono text-xs font-bold uppercase tracking-widest mb-4">
                  <XCircle className="w-4 h-4" />
                  <span>The Old Tab-Heavy Model</span>
                </div>
                <h3 className="font-archivo text-2xl font-black text-[#141414] uppercase mb-6">
                  Fragmented Thoughts & Clutter
                </h3>
                
                <ul className="space-y-4 text-sm text-[#666055] font-sans">
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>Tab hoarding syndrome:</strong> Dozens of unnamed tabs that pile up until your workspace becomes overwhelming.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>Zero emotional resonance:</strong> Monotone, sterile interfaces with rigid default themes that tire your eyes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>Cloud latency pauses:</strong> Stalling spinners and syncing locks when all you need is to capture a sudden insight.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-black/[0.06] text-xs font-mono text-[#666055]">
                Legacy tab architecture
              </div>
            </div>
          </ThreeDCard>

          {/* Smriti Notes Modern Architecture */}
          <ThreeDCard maxTilt={5}>
            <div className="dovv-card bg-white p-8 sm:p-10 h-full flex flex-col justify-between border-2 border-[#0F4C81]/30 shadow-md rounded-3xl">
              <div>
                <div className="flex items-center gap-2 text-[#0F4C81] font-mono text-xs font-bold uppercase tracking-widest mb-4">
                  <CheckCircle className="w-4 h-4" />
                  <span>Smriti Notes 2.0</span>
                </div>
                <h3 className="font-archivo text-2xl font-black text-[#141414] uppercase mb-6">
                  Spatial Focus & Harmonic Speed
                </h3>
                
                <ul className="space-y-4 text-sm text-[#141414] font-sans">
                  <li className="flex items-start gap-3">
                    <span className="text-[#16c847] font-bold">✓</span>
                    <span><strong>Unified Spatial Navigation:</strong> Clean folder hierarchies, pinned priorities, and sub-millisecond ⌘K jump.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#16c847] font-bold">✓</span>
                    <span><strong>162 Hand-Tuned Palettes:</strong> Choose the exact mood, contrast, and custom hex pen ink that inspires you.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#16c847] font-bold">✓</span>
                    <span><strong>Instant Offline Speed:</strong> Every keystroke writes directly to local storage at zero latency.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-[#0F4C81] font-bold">No Tabs • Zero Bloat</span>
                <span className="text-[#16c847] font-bold">Pure Writing Flow</span>
              </div>
            </div>
          </ThreeDCard>
        </div>
      </div>
    </section>
  );
};
