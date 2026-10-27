import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, ArrowUpRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { ColorPalette, APP_REDIRECT_URL, CREATOR_NAME } from '../data/palettes';
import { ThreeDCard } from './ThreeDCard';

interface FAQAndCTAProps {
  onOpenWaitlist: () => void;
  activePalette: ColorPalette;
}

export const FAQAndCTA: React.FC<FAQAndCTAProps> = ({ onOpenWaitlist, activePalette }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Why did Smriti replace the tab-based structure?',
      a: 'Tabs were originally made for navigating disjointed web pages, not for deep creative thought. Users found themselves drowning in 40+ unlabeled tabs. Smriti replaced tabs with an intuitive spatial hierarchy: Folders, Pinned Notes, and sub-millisecond ⌘K search, giving you complete mental clarity.'
    },
    {
      q: 'How do the 162 color palettes and official themes work?',
      a: 'Smriti includes 162 hand-tuned color schemes featuring official app palettes like Pink Riot, Cobalt Block, Mint Slab, Orange Crush, Lilac Slap, and Sky Slap. Furthermore, you can assign custom Hex codes directly to pen inks, highlighters, and accents.'
    },
    {
      q: 'Where can I access the live application?',
      a: 'You can immediately launch and use the app at app.smritinotes.site! It runs seamlessly in your browser with full local-first offline support.'
    },
    {
      q: 'What makes Connected Sticky Notes different from regular digital sticky notes?',
      a: 'Most sticky note apps are lightweight scratchpads that hit a wall. In Smriti, every sticky note on the upcoming visual canvas connects directly to a complete, full-fledged long-form markdown note. You can brainstorm messily and drill into depth whenever inspiration strikes.'
    },
    {
      q: 'Is Smriti Notes offline-first and private?',
      a: 'Yes! Your thoughts stay on your machine. All formatting, auto-saving, and full-text searches happen locally at zero latency with zero network dependency. You can export or import your entire notebook as clean JSON at any time.'
    }
  ];

  return (
    <section className="py-24 relative bg-[#070b12] border-t border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* FAQ Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Everything you need to know about Smriti.
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-24">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/60 border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-white hover:text-amber-300 transition-colors"
                >
                  <span className="font-semibold text-base sm:text-lg">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final 3D Call to Action Banner with direct redirect to app.smritinotes.site */}
        <ThreeDCard maxTilt={6}>
          <div 
            className="relative rounded-3xl p-8 sm:p-14 overflow-hidden border text-center shadow-2xl transition-all duration-500"
            style={{
              backgroundColor: '#0c1222',
              borderColor: `${activePalette.accent}50`,
              boxShadow: `0 30px 80px -15px ${activePalette.accent}35`
            }}
          >
            {/* Ambient Glow */}
            <div 
              className="absolute inset-0 opacity-25 pointer-events-none blur-3xl"
              style={{
                background: `radial-gradient(circle, ${activePalette.accent} 0%, ${activePalette.secondary} 50%, transparent 80%)`
              }}
            />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/40">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Created by {CREATOR_NAME} • Live on Web</span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Ready to give your thoughts a better space?
              </h3>

              <p className="text-base sm:text-lg text-slate-300">
                Start writing immediately with 162 color palettes, instant offline speed, and zero tab clutter.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={APP_REDIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-extrabold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-2xl shadow-amber-500/40 transition-all hover:scale-105"
                >
                  <span>Open Smriti App</span>
                  <span className="text-xs font-mono bg-black/15 px-2 py-0.5 rounded font-bold">
                    app.smritinotes.site
                  </span>
                  <ArrowUpRight className="w-4 h-4 ml-0.5" />
                </a>

                <a
                  href="#palettes"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-base font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  Explore 162 Palettes
                </a>
              </div>

              <div className="flex items-center justify-center gap-3 text-xs text-slate-400 pt-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Offline-first • Zero tracking • Handcrafted with love</span>
              </div>
            </div>
          </div>
        </ThreeDCard>
      </div>
    </section>
  );
};
