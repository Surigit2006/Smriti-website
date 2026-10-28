import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { AppPalette, APP_REDIRECT_URL } from '../data/palettes';
import { ThreeDCard } from './ThreeDCard';

interface FAQAndCTAProps {
  activePalette: AppPalette;
}

export const FAQAndCTA: React.FC<FAQAndCTAProps> = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does the Excalidraw sketching & system design integration work?',
      a: 'Smriti embeds an infinite Excalidraw vector canvas directly inside your workspace. You can sketch cloud microservice topologies, relational database ERDs, state machines, and UI wireframes with Excalidraw’s signature hand-drawn style. Every diagram links directly to your notes and exports cleanly to SVG or PNG.'
    },
    {
      q: 'Can I apply Smriti’s 162 color palettes to my Excalidraw diagrams?',
      a: 'Yes! When you pick any of Smriti’s 162 hand-tuned colorways, both your notebook typography and your Excalidraw whiteboard elements adopt matching stroke inks, hachure fills, and pastel highlights automatically.'
    },
    {
      q: 'Where can I access the live application?',
      a: 'You can immediately launch and use the app at app.smritinotes.site! It runs seamlessly in your browser with full local-first offline support.'
    },
    {
      q: 'What is the upcoming Intelligent Autocomplete feature?',
      a: 'Smriti is adding local inline autocomplete and slash commands. As you type, the engine anticipates your sentence and displays ghost text you can accept with a single tap of Tab ⇥. Typing / summons quick markdown elements like task lists, headings, and code blocks.'
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
    <section className="py-24 sm:py-32 relative bg-[#FAF7F2] border-t border-black/[0.06] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* FAQ Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-xs text-[#0F4C81] font-bold uppercase tracking-widest mb-3">
            [ 07 // FREQUENTLY ASKED QUESTIONS ]
          </div>

          <h2 className="text-4xl sm:text-5xl font-archivo font-black text-[#141414] tracking-tight uppercase">
            EVERYTHING YOU NEED<br />
            <span className="text-[#0F4C81]">TO KNOW ABOUT SMRITI.</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-24">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="dovv-card bg-white p-0 rounded-2xl overflow-hidden border border-black/[0.07] shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 text-[#141414] hover:text-[#0F4C81] transition-colors"
                >
                  <span className="font-archivo text-lg sm:text-xl font-bold uppercase tracking-tight">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#0F4C81] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#666055] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#666055] font-sans leading-relaxed border-t border-black/[0.06] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final Monumental CTA Banner in Clean DOVV Framing */}
        <ThreeDCard maxTilt={4}>
          <div className="dovv-card bg-white p-8 sm:p-14 text-center rounded-3xl border border-black/[0.1] shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF7F2] border border-black/[0.06] text-[#141414] font-mono text-xs font-bold uppercase">
                <span className="w-2 h-2 rounded-full bg-[#16c847] animate-pulse" />
                <span>Live on Web • Instant Zero-Config Access</span>
              </div>

              <h3 className="text-4xl sm:text-6xl font-archivo font-black text-[#141414] tracking-tight leading-[0.92] uppercase">
                YOUR THOUGHTS<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#141414] via-[#0F4C81] to-[#D97706]">
                  DESERVE A BETTER SPACE.
                </span>
              </h3>

              <p className="text-base sm:text-lg text-[#666055] font-normal leading-relaxed">
                Experience note-taking with clarity, Excalidraw system design, custom colorways, and zero friction. Available immediately in your browser.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={APP_REDIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#141414] hover:bg-[#0F4C81] shadow-lg shadow-black/10 transition-all hover:scale-105"
                >
                  <span>Launch Smriti Notes</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#excalidraw"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#141414] bg-[#FAF7F2] hover:bg-[#F0EAE1] border border-black/[0.08] transition-colors"
                >
                  <span>Explore Excalidraw Canvas</span>
                </a>
              </div>

              <div className="pt-4 flex items-center justify-center gap-4 text-xs font-mono text-[#666055]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#16c847]" /> 100% Private & Local
                </span>
                <span>•</span>
                <span>No sign-up required</span>
              </div>
            </div>
          </div>
        </ThreeDCard>
      </div>
    </section>
  );
};
