import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { AppPalette, APP_REDIRECT_URL } from '../data/palettes';
import { ThreeDCard } from './ThreeDCard';

interface FAQAndCTAProps {
  activePalette?: AppPalette;
  isDark?: boolean;
}

export const FAQAndCTA: React.FC<FAQAndCTAProps> = ({ isDark = true }) => {
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
    <section 
      className={`py-24 sm:py-32 relative border-t transition-colors duration-500 overflow-hidden ${
        isDark 
          ? 'bg-[#0E1118] border-white/10 text-white' 
          : 'bg-[#F8FAFC] border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* FAQ Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-xs text-[#00F076] font-bold uppercase tracking-widest mb-3">
            [ 07 // FREQUENTLY ASKED QUESTIONS ]
          </div>

          <h2 className="text-4xl sm:text-5xl font-archivo font-black tracking-tight uppercase">
            EVERYTHING YOU NEED<br />
            <span className="text-[#00F076]">TO KNOW ABOUT SMRITI.</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-24">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`p-0 rounded-2xl overflow-hidden border transition-colors ${
                  isDark ? 'bg-[#131722] border-white/10' : 'bg-white border-slate-200 shadow-xs'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className={`w-full p-6 text-left flex items-center justify-between gap-4 transition-colors ${
                    isDark ? 'text-white hover:text-[#00F076]' : 'text-slate-900 hover:text-emerald-700'
                  }`}
                >
                  <span className="font-archivo text-lg sm:text-xl font-bold uppercase tracking-tight">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#00F076] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className={`px-6 pb-6 text-sm font-sans leading-relaxed border-t pt-4 ${
                    isDark ? 'border-white/10 text-slate-300' : 'border-slate-100 text-slate-600'
                  }`}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final Monumental CTA Banner in Shopify Editions Obsidian Style */}
        <ThreeDCard maxTilt={3}>
          <div className={`p-8 sm:p-14 text-center rounded-3xl border shadow-2xl relative overflow-hidden ${
            isDark 
              ? 'bg-[#131722] border-white/10' 
              : 'bg-white border-slate-200'
          }`}>
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border font-mono text-xs font-bold uppercase ${
                isDark ? 'bg-[#0E1118] border-white/10 text-white' : 'bg-slate-100 border-slate-200 text-slate-900'
              }`}>
                <span className="w-2 h-2 rounded-full bg-[#00F076] animate-pulse" />
                <span>Live on Web • Instant Zero-Config Access</span>
              </div>

              <h3 className="text-4xl sm:text-6xl font-archivo font-black tracking-tight leading-[0.92] uppercase">
                YOUR THOUGHTS<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#00F076] to-[#00E5FF]">
                  DESERVE A BETTER SPACE.
                </span>
              </h3>

              <p className={`text-sm sm:text-base max-w-lg mx-auto font-sans leading-relaxed ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Start writing in a clean, distraction-free environment with 162 colorways, Excalidraw system whiteboard, instant search, and complete local privacy.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={APP_REDIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#00F076] hover:bg-[#00d669] text-black font-archivo font-bold text-sm uppercase tracking-wider shadow-xl hover:shadow-[#00F076]/30 transition-all hover:scale-105"
                >
                  <span>Launch Smriti Notes Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#templates"
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                    isDark ? 'bg-white/5 hover:bg-white/10 border-white/10 text-white' : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-900'
                  }`}
                >
                  <span>Explore Templates</span>
                </a>
              </div>

              <div className="pt-2 flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
                <ShieldCheck className="w-4 h-4 text-[#00F076]" />
                <span>Runs entirely client-side. Zero trackers. Free forever.</span>
              </div>
            </div>

            {/* Glowing Tech Mesh Gradients */}
            <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#00F076]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#00E5FF]/10 blur-3xl" />
          </div>
        </ThreeDCard>
      </div>
    </section>
  );
};
