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
  Check,
  PenTool
} from 'lucide-react';
import { AppPalette, APP_REDIRECT_URL } from '../data/palettes';
import { ThreeDCard } from './ThreeDCard';

interface EditorShowcaseProps {
  activePalette: AppPalette;
  isDark?: boolean;
}

export const EditorShowcase: React.FC<EditorShowcaseProps> = ({ isDark = true }) => {
  const [editorText, setEditorText] = useState(
`# Thoughts on Deep Craft & Spatial Writing

When thinking isn't fragmented across disparate tools, clarity emerges naturally.

### Principles of Smriti
- **Zero Latency**: Writing should feel as immediate as ink on fine paper.
- **Cognitive Serenity**: No popups, no distracting notifications, no unnecessary clutter.
- **Unified Sketching**: Excalidraw whiteboards live directly inside your markdown notes.
- **Structured Freedom**: Rich markdown when you want it, hand-drawn vector diagrams when you need them.

> "Simplicity is about subtracting the obvious and adding the meaningful."

- [x] Distraction-free writing experience
- [x] Instant keyboard shortcuts (⌘B, ⌘I, ⌘K)
- [x] Local-first data safety & offline speed
- [x] Excalidraw system design integration`
  );

  const words = editorText.trim() ? editorText.trim().split(/\s+/).filter(Boolean).length : 0;
  const readTime = Math.max(1, Math.ceil(words / 200));

  const insertText = (template: string) => {
    setEditorText((prev) => prev + '\n' + template);
  };

  return (
    <section id="editor" className={`py-24 sm:py-32 relative border-t transition-colors duration-300 ${
      isDark ? 'bg-[#0E1118] text-white border-white/10' : 'bg-white text-slate-900 border-black/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/10 dark:border-white/10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#00F076] font-bold uppercase tracking-widest">
                [ 01 // UNIFIED EDITOR ]
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border ${
                isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-100 border-black/10 text-slate-800'
              }`}>
                Current Feature
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-archivo font-black tracking-tight leading-[0.95] uppercase">
              A FIRST-CLASS EDITOR.<br />
              <span className="text-[#00F076]">DESIGNED AROUND FLOW.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg opacity-70 leading-relaxed max-w-2xl font-normal">
              A polished writing experience with rich-text formatting and tools for organizing ideas. No tool fragmentation, no laggy cloud pauses — just effortless expression.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#00F076] hover:bg-[#00d669] text-black font-archivo font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              <span>Write on Smriti</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3D Interactive Editor Card */}
        <ThreeDCard maxTilt={3} className="w-full">
          <div className={`p-6 sm:p-10 rounded-3xl border shadow-2xl ${
            isDark ? 'bg-[#131722] border-white/10' : 'bg-slate-50 border-black/10 shadow-slate-200'
          }`}>
            {/* Editor Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-black/10 dark:border-white/10">
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  onClick={() => insertText('# New Heading')}
                  className="px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-xs font-mono font-bold flex items-center gap-1 transition-colors"
                  title="Heading 1"
                >
                  <Heading1 className="w-3.5 h-3.5" />
                  <span>H1</span>
                </button>

                <button
                  onClick={() => insertText('## Subheading')}
                  className="px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-xs font-mono font-bold flex items-center gap-1 transition-colors"
                  title="Heading 2"
                >
                  <Heading2 className="w-3.5 h-3.5" />
                  <span>H2</span>
                </button>

                <button
                  onClick={() => insertText('**bold statement**')}
                  className="px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-xs font-mono font-bold flex items-center gap-1 transition-colors"
                  title="Bold"
                >
                  <Bold className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => insertText('*italic thought*')}
                  className="px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-xs font-mono font-bold flex items-center gap-1 transition-colors"
                  title="Italic"
                >
                  <Italic className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => insertText('- [ ] Actionable step')}
                  className="px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-xs font-mono font-bold flex items-center gap-1 transition-colors"
                  title="Checklist"
                >
                  <CheckSquare className="w-3.5 h-3.5 text-[#00F076]" />
                  <span>Task</span>
                </button>

                <button
                  onClick={() => insertText('> "Insight worth saving."')}
                  className="px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-xs font-mono font-bold flex items-center gap-1 transition-colors"
                  title="Blockquote"
                >
                  <Quote className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>Quote</span>
                </button>

                <button
                  onClick={() => insertText('```ts\nconst clarity = true;\n```')}
                  className="px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-xs font-mono font-bold flex items-center gap-1 transition-colors"
                  title="Code Block"
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>Code</span>
                </button>

                <a
                  href="#excalidraw"
                  className="px-3 py-1.5 rounded-lg bg-[#00F076]/10 hover:bg-[#00F076]/20 text-[#00F076] text-xs font-mono font-bold flex items-center gap-1 transition-colors"
                  title="Excalidraw Whiteboard"
                >
                  <PenTool className="w-3.5 h-3.5" />
                  <span>Excalidraw</span>
                </a>
              </div>

              {/* Status indicators */}
              <div className="flex items-center gap-3 text-xs font-mono opacity-70">
                <span className="flex items-center gap-1 text-[#00F076] font-semibold">
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
                className="w-full h-80 sm:h-96 text-sm sm:text-base font-sans bg-transparent resize-none focus:outline-none leading-relaxed tracking-normal"
                placeholder="Type or format your thoughts..."
              />
            </div>

            {/* Editor Bottom Callout */}
            <div className="pt-6 mt-6 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono opacity-70">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00F076]" />
                <span>Full Markdown support • Excalidraw embeds • Export anytime to Markdown or JSON</span>
              </div>

              <a
                href={APP_REDIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#00F076] hover:underline flex items-center gap-1"
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
