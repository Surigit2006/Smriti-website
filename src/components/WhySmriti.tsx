import React from 'react';
import { XCircle, CheckCircle, Zap, Shield, Sparkles, Brain, Layout, Layers } from 'lucide-react';
import { ColorPalette } from '../data/palettes';

interface WhySmritiProps {
  activePalette: ColorPalette;
}

export const WhySmriti: React.FC<WhySmritiProps> = ({ activePalette }) => {
  return (
    <section className="py-24 relative bg-[#090d15] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layout className="w-3.5 h-3.5 text-amber-400" />
            <span>Design Evolution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Smriti abandoned tab overload.
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Note-taking shouldn't mirror a chaotic browser with 47 open tabs. We designed a clean spatial system that keeps you centered.
          </p>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Legacy Cluttered Apps */}
          <div className="p-7 sm:p-8 rounded-3xl bg-slate-900/40 border border-rose-500/20 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-4">
                <XCircle className="w-4 h-4" />
                <span>The Old Tab-Heavy Model</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Fragmented thoughts & visual clutter
              </h3>
              
              <ul className="space-y-3.5 text-sm text-slate-400">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span><strong>Tab hoarding syndrome:</strong> Dozens of unnamed tabs that pile up until your workspace becomes overwhelming.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span><strong>Zero emotional resonance:</strong> Monotone, sterile interfaces with rigid default themes that tire your eyes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span><strong>Cloud latency pauses:</strong> Stalling spinners and syncing locks when all you need is to capture a sudden insight.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span><strong>Siloed linear documents:</strong> Inability to see how early visual sticky ideas connect to full articles.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-xs text-slate-500 font-mono">
              Old legacy approach
            </div>
          </div>

          {/* Smriti Notes Modern Architecture */}
          <div 
            className="p-7 sm:p-8 rounded-3xl border backdrop-blur-md flex flex-col justify-between shadow-2xl"
            style={{
              backgroundColor: '#0f172a80',
              borderColor: `${activePalette.accent}50`,
              boxShadow: `0 20px 40px -15px ${activePalette.accent}25`
            }}
          >
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
                <CheckCircle className="w-4 h-4" />
                <span>Smriti Notes 2.0</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Spatial focus & aesthetic harmony
              </h3>
              
              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>Unified Spatial Navigation:</strong> Clean folder hierarchies, pinned priorities, and sub-millisecond ⌘K jump.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>162 Hand-tuned Palettes:</strong> Choose the exact mood, contrast, and custom hex pen ink that inspires you.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>Instant Offline Speed:</strong> Every keystroke writes directly to local storage at 120 FPS.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>Connected Sticky Notes:</strong> Visual infinite canvas that expands directly into your full note documents.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-white font-semibold">Purpose-built for thinkers</span>
              <span className="font-mono text-[11px] text-amber-300">No tabs • Zero bloat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

