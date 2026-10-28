import React, { useState } from 'react';
import { 
  ArrowUpRight,
  Bold,
  Italic,
  Heading1,
  Heading2,
  CheckSquare,
  Quote,
  Code,
  Sparkles,
  Check
} from 'lucide-react';
import { AppPalette, APP_REDIRECT_URL } from '../data/palettes';
import { ThreeDCard } from './ThreeDCard';

interface EditorShowcaseProps {
  activePalette: AppPalette;
}

export const EditorShowcase: React.FC<EditorShowcaseProps> = () => {
  const [editorText, setEditorText] = useState(
`# Thoughts on Deep Craft & Spatial Writing

When thinking isn't constrained by 40 browser tabs, clarity emerges naturally.

### Principles of Smriti
- **Zero Latency**: Writing should feel as immediate as ink on fine paper.
- **Cognitive Serenity**: No popups, no distracting notifications, no unnecessary clutter.
- **Structured Freedom**: Rich markdown when you want it, plain text when you don't.

> "Simplicity is about subtracting the obvious and adding the meaningful."

- [x] Distraction-free single window
- [x] Instant keyboard shortcuts (⌘B, ⌘I, ⌘K)
- [x] Local-first data safety
- [ ] Connected visual canvas (coming soon)`
  );

  const words = editorText.trim() ? editorText.trim().split(/\s+/).filter(Boolean).length : 0;
  const chars = editorText.length;
  const readTime = Math.max(1, Math.ceil(words / 200));

  const insertText = (template: string) => {
    setEditorText((prev) => prev + '\n' + template);
  };

  return (
    <section id="editor" className="py-24 sm:py-32 relative bg-[#FAF7F2] border-t border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* DOVV Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/[0.07]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#0F4C81] font-bold uppercase tracking-widest">
                [ 01 // PRODUCT BENEFIT ]
              </span>
              <span className="dovv-chip text-[#141414] text-xs py-0.5">
                Current Feature
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-archivo font-black text-[#141414] tracking-tight leading-[0.95] uppercase">
              A FIRST-CLASS EDITOR.<br />
              <span className="text-[#0F4C81]">DESIGNED AROUND FLOW.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#666055] leading-relaxed max-w-2xl font-normal">
              A polished writing experience with rich-text formatting and tools for organizing ideas. No tab overload, no laggy cloud pauses — just effortless expression.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#141414] hover:bg-[#0F4C81] text-white font-archivo font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              <span>Write on Smriti</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3D Interactive Editor Card */}
        <ThreeDCard maxTilt={4} className="w-full">
          <div className="dovv-card bg-white rounded-3xl p-6 sm:p-10 border border-black/[0.08] shadow-lg">
            {/* Editor Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-black/[0.06]">
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  onClick={() => insertText('# New Heading')}
                  className="px-3 py-1.5 rounded-lg bg-black/[0.03] hover:bg-black/[0.08] text-[#141414] text-xs font-mono font-bold flex items-center gap-1 transition-colors"
                  title="Heading 1"
                >
                  <Heading1 className="w-3.5 h-3.5" />
                  <span>H1</span>
                </button>

                <button
                  onClick={() => insertText('## Subheading')}
                  className="px-3 py-1.5 rounded-lg bg-black/[0.03] hover:bg-black/[0.08] text-[#141414] text-xs font-mono font-bold flex items-center gap-1 transition-colors"
                  title="Heading 2"
                >
                  <Heading2 className="w-3.5 h-3.5" />
                  <span>H2</span>
                </button>

                <button
                  onClick={() => insertText('**bold statement**')}
                  className="px-3 py-1.5 rounded-lg bg-black/[0.03] hover:bg-black/[0.08] text-[#141414] text-xs font-mono font-bold flex items-center gap-1 transition-colors"
                  title="Bold"
                >
                  <Bold className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => insertText('*italic thought*')}
                  className="px-3 py-1.5 rounded-lg bg-black/[0.03] hover:bg-black/[0.08] text-[#141414] text-xs font-mono font-bold flex items-center gap-1 transition-colors"
                  title="Italic"
                >
                  <Italic className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => insertText('- [ ] Actionable step')}
                  className="px-3 py-1.5 rounded-lg bg-black/[0.03] hover:bg-black/[0.08] text-[#141414] text-xs font-mono font-bold flex items-center gap-1 transition-colors"
                  title="Checklist"
                >
                  <CheckSquare className="w-3.5 h-3.5 text-[#0F4C81]" />
                  <span>Task</span>
                </button>

                <button
                  onClick={() => insertText('> "Insight worth saving."')}
                  className="px-3 py-1.5 rounded-lg bg-black/[0.03] hover:bg-black/[0.08] text-[#141414] text-xs font-mono font-bold flex items-center gap-1 transition-colors"
                  title="Blockquote"
                >
                  <Quote className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>Quote</span>
                </button>

                <button
                  onClick={() => insertText('```ts\nconst clarity = true;\n```')}
                  className="px-3 py-1.5 rounded-lg bg-black/[0.03] hover:bg-black/[0.08] text-[#141414] text-xs font-mono font-bold flex items-center gap-1 transition-colors"
                  title="Code Block"
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>Code</span>
                </button>
              </div>

              {/* Status indicators */}
              <div className="flex items-center gap-3 text-xs font-mono text-[#666055]">
                <span className="flex items-center gap-1 text-[#16c847] font-semibold">
                  <Check className="w-3.5 h-3.5" /> Local auto-save
                </span>
                <span>•</span>
                <span>{words} words</span>
                <span>•</span>
                <span>{readTime} min read</span>
              </div>
            </div>

            {/* Main Interactive TextArea */}
            <div className="relative">
              <textarea
                value={editorText}
                onChange={(e) => setEditorText(e.target.value)}
                className="w-full h-80 sm:h-96 text-sm sm:text-base font-sans text-[#141414] bg-transparent resize-none focus:outline-none leading-relaxed tracking-normal"
                placeholder="Type or format your thoughts..."
              />
            </div>

            {/* Editor Bottom Callout */}
            <div className="pt-6 mt-6 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#666055]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                <span>Full Markdown support • Export anytime to Markdown or JSON</span>
              </div>

              <a
                href={APP_REDIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#141414] hover:text-[#0F4C81] flex items-center gap-1"
              >
                <span>Launch in app.smritinotes.site</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </ThreeDCard>
      </div>
    </section>
  );
};
