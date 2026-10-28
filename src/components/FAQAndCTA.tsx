import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowUpRight, ShieldCheck } from 'lucide-react';
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
    <section className="py-24 sm:py-32 relative bg-[#05080c] border-t border-[#1c1c1c] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* FAQ Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-xs text-[#ed4a1c] font-bold uppercase tracking-widest mb-3">
            [ 07 // FREQUENTLY ASKED QUESTIONS ]
          </div>

          <h2 className="text-4xl sm:text-5xl font-archivo font-black text-white tracking-tight uppercase">
            EVERYTHING YOU NEED<br />
            <span className="text-[#c6f432]">TO KNOW ABOUT SMRITI.</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-24">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="dovv-card p-0 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 text-white hover:text-[#c6f432] transition-colors"
                >
                  <span className="font-archivo text-lg sm:text-xl font-bold uppercase tracking-tight">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#ed4a1c] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 font-mono leading-relaxed border-t border-[#1c1c1c] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final Monumental CTA Banner in DOVV Style */}
        <ThreeDCard maxTilt={6}>
          <div className="dovv-card p-8 sm:p-14 text-center rounded-[32px] border-2 border-[#ed4a1c] relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white font-mono text-xs font-bold uppercase">
                <span>Handcrafted by {CREATOR_NAME} • Live on Web</span>
              </div>

              <h3 className="text-4xl sm:text-6xl font-archivo font-black text-white tracking-tight leading-[0.92] uppercase">
                YOUR THOUGHTS<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ed4a1c] via-[#facc15] to-[#c6f432]">
                  DESERVE A BETTER SPACE.
                </span>
              </h3>

              <p className="text-base sm:text-lg text-slate-300 font-normal">
                Join deep thinkers, writers, and students creating clear mental models with Smriti Notes.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={APP_REDIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-anton uppercase tracking-wider text-white bg-[#ed4a1c] hover:bg-[#ff5d33] shadow-2xl shadow-[#ed4a1c]/40 transition-all hover:scale-105"
                >
                  <span>Launch Smriti App</span>
                  <span className="text-xs font-mono lowercase bg-black/20 px-2.5 py-1 rounded-full font-sans">
                    app.smritinotes.site
                  </span>
                  <ArrowUpRight className="w-4 h-4 ml-0.5" />
                </a>

                <a
                  href="#palettes"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-slate-300 hover:text-white bg-[#111622] hover:bg-[#1a2233] border border-[#222] transition-colors"
                >
                  Explore 162 Palettes
                </a>
              </div>

              <div className="flex items-center justify-center gap-3 text-xs text-slate-400 font-mono pt-3">
                <ShieldCheck className="w-4 h-4 text-[#c6f432]" />
                <span>Offline-first • Zero tracking • Handcrafted with love</span>
              </div>
            </div>
          </div>
        </ThreeDCard>
      </div>
    </section>
  );
};
