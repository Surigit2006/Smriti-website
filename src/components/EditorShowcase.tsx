import React, { useState } from 'react';
import { 
  PenTool, 
  Bold, 
  Italic, 
  Heading1, 
  Heading2, 
  CheckSquare, 
  Quote, 
  Code, 
  Clock, 
  ArrowUpRight
} from 'lucide-react';
import { ColorPalette, APP_REDIRECT_URL, CREATOR_NAME } from '../data/palettes';
import { ThreeDCard } from './ThreeDCard';

interface EditorShowcaseProps {
  activePalette: ColorPalette;
}

export const EditorShowcase: React.FC<EditorShowcaseProps> = ({ activePalette }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'source'>('preview');
  const [editorText, setEditorText] = useState(
`# Deep Thinking in the Age of Noise

The highest leverage work happens when friction drops to absolute zero.

### Why Smriti Removed Tabs
1. **Cognitive Overhead**: 40 open tabs create visual noise and anxiety.
2. **Context Fragmentation**: Tab-based notes treat thoughts like throwaway browser sessions.
3. **Spatial Clarity**: Smriti groups thoughts by folders, pinned priorities, and upcoming canvas sticky notes.

> "Simplicity is prerequisite for reliability and depth."

- [x] Streamlined single-window interface
- [x] Rich markdown formatting with keyboard hotkeys
- [x] 162 color palettes for custom reading environments
- [ ] Connect canvas sticky notes (coming next)`
  );

  const words = editorText.trim() ? editorText.trim().split(/\s+/).length : 0;
  const chars = editorText.length;
  const readTime = Math.max(1, Math.ceil(words / 200));

  const applyFormatting = (tag: string) => {
    if (tag === 'bold') {
      setEditorText((prev) => prev + ' **bold text**');
    } else if (tag === 'italic') {
      setEditorText((prev) => prev + ' *italicized phrase*');
    } else if (tag === 'h1') {
      setEditorText((prev) => prev + '\n# New Section Header');
    } else if (tag === 'h2') {
      setEditorText((prev) => prev + '\n## Key Takeaway');
    } else if (tag === 'todo') {
      setEditorText((prev) => prev + '\n- [ ] New actionable item');
    } else if (tag === 'quote') {
      setEditorText((prev) => prev + '\n> "A thought worth remembering."');
    } else if (tag === 'code') {
      setEditorText((prev) => prev + '\n```ts\nconst focus = true;\n```');
    }
  };

  return (
    <section id="editor" className="py-24 sm:py-32 relative bg-[#070b13] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* DOVV Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#1c1c1c]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#c6f432] font-bold uppercase tracking-widest">
                [ 02 // MAIN PRODUCT BENEFIT ]
              </span>
              <span className="dovv-chip text-[#ed4a1c] text-xs py-0.5">
                Current Feature
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-archivo font-black text-white tracking-tight leading-[0.95] uppercase">
              A FIRST-CLASS EDITOR.<br />
              <span className="text-[#c6f432]">DESIGNED AROUND FLOW.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              A polished writing experience with rich-text formatting and tools for organizing ideas. No tab overload, no laggy cloud pauses — just effortless expression.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#c6f432] hover:bg-[#b5e625] text-black font-archivo font-black text-xs uppercase tracking-wider shadow-xl shadow-[#c6f432]/25 transition-all hover:scale-105"
            >
              <span>Write on Smriti</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3 Pillars in DOVV Studio Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="dovv-card p-6 sm:p-8">
            <div className="font-mono text-xs text-[#ed4a1c] font-bold mb-4">
              01 // SPATIAL ARCHITECTURE
            </div>
            <h3 className="font-archivo text-2xl font-black text-white uppercase mb-3">
              No Tab Overload
            </h3>
            <p className="text-sm text-slate-400 font-mono leading-relaxed">
              We replaced cluttered, messy browser-like tabs with a streamlined, spatial navigation system. Keep full clarity over where your ideas live.
            </p>
          </div>

          <div className="dovv-card p-6 sm:p-8">
            <div className="font-mono text-xs text-[#c6f432] font-bold mb-4">
              02 // MARKDOWN HARMONY
            </div>
            <h3 className="font-archivo text-2xl font-black text-white uppercase mb-3">
              Rich Typography
            </h3>
            <p className="text-sm text-slate-400 font-mono leading-relaxed">
              Format headings, callouts, blockquotes, code snippets, and checklists. Write naturally using keyboard shortcuts or the top visual ribbon.
            </p>
          </div>

          <div className="dovv-card p-6 sm:p-8">
            <div className="font-mono text-xs text-[#facc15] font-bold mb-4">
              03 // LOCAL-FIRST ENGINE
            </div>
            <h3 className="font-archivo text-2xl font-black text-white uppercase mb-3">
              Zero Typing Latency
            </h3>
            <p className="text-sm text-slate-400 font-mono leading-relaxed">
              Zero typing latency. Every stroke renders at 120 FPS with instant local auto-save, JSON backup, and zero distraction spinners.
            </p>
          </div>
        </div>

        {/* 3D Main Editor Split: Reference Screenshot + 3D Interactive Live Editor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Reference Image: Notepad desktop app by Serhii Yermolenko */}
          <div className="lg:col-span-5 space-y-6">
            <ThreeDCard maxTilt={8}>
              <div className="dovv-card p-0 rounded-[32px] overflow-hidden group">
                <div className="p-4 bg-[#0a0e16] border-b border-[#222222] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#ed4a1c] font-bold uppercase">
                    [ DESKTOP DESIGN SPEC ]
                  </span>
                  <span className="text-slate-400">Serhii Yermolenko</span>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src="/images/editor-notepad.jpg"
                    alt="Notepad desktop app by Serhii Yermolenko on Dribbble"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-4 bg-[#0d121c] border-t border-[#1c1c1c] flex items-center justify-between text-xs font-mono text-slate-300">
                  <span>Refined desktop writing aesthetic</span>
                  <a 
                    href={APP_REDIRECT_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#c6f432] font-bold hover:underline flex items-center gap-1"
                  >
                    <span>Launch App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </ThreeDCard>

            {/* Creator Attribution Card with Girl Artwork Icon in DOVV Card Style */}
            <div className="dovv-card p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#ed4a1c] shrink-0 shadow-lg">
                <img
                  src="/images/smriti-icon.jpg"
                  alt="Smriti Icon"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="font-archivo text-lg font-bold text-white uppercase">
                  Created by {CREATOR_NAME}
                </div>
                <p className="text-slate-400 text-xs font-mono mt-1">
                  Built for deep creative flow, spatial clarity, and joyful writing without browser tab fatigue.
                </p>
              </div>
            </div>
          </div>

          {/* 3D Interactive Live Note Editor Playground */}
          <div className="lg:col-span-7">
            <ThreeDCard maxTilt={6}>
              <div 
                className="dovv-card p-0 rounded-[32px] overflow-hidden flex flex-col"
                style={{
                  backgroundColor: activePalette.surface,
                  borderColor: activePalette.border,
                }}
              >
                {/* Editor Top Navigation & Action Bar */}
                <div 
                  className="p-4 border-b border-[#222222] flex flex-wrap items-center justify-between gap-3"
                  style={{ backgroundColor: activePalette.bg }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase px-3 py-1 rounded-full bg-white/10 text-white">
                      Live Markdown Playground
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono">
                    <button
                      onClick={() => setActiveTab('preview')}
                      className={`px-3 py-1 rounded-full font-bold transition-all ${
                        activeTab === 'preview' ? 'bg-[#ed4a1c] text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Formatted View
                    </button>
                    <button
                      onClick={() => setActiveTab('source')}
                      className={`px-3 py-1 rounded-full font-bold transition-all ${
                        activeTab === 'source' ? 'bg-[#ed4a1c] text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Markdown Source
                    </button>
                  </div>
                </div>

                {/* Formatting Toolbar */}
                <div 
                  className="p-3 border-b border-[#222222] flex flex-wrap items-center gap-1.5 text-xs"
                  style={{
                    backgroundColor: `${activePalette.surface}95`,
                    color: activePalette.text
                  }}
                >
                  <button onClick={() => applyFormatting('bold')} className="p-1.5 rounded-lg hover:bg-white/10 font-bold" title="Bold">
                    <Bold className="w-4 h-4" />
                  </button>
                  <button onClick={() => applyFormatting('italic')} className="p-1.5 rounded-lg hover:bg-white/10 italic" title="Italic">
                    <Italic className="w-4 h-4" />
                  </button>
                  <div className="h-4 w-[1px] bg-white/15 mx-1" />
                  <button onClick={() => applyFormatting('h1')} className="p-1.5 rounded-lg hover:bg-white/10" title="Heading 1">
                    <Heading1 className="w-4 h-4" />
                  </button>
                  <button onClick={() => applyFormatting('h2')} className="p-1.5 rounded-lg hover:bg-white/10" title="Heading 2">
                    <Heading2 className="w-4 h-4" />
                  </button>
                  <div className="h-4 w-[1px] bg-white/15 mx-1" />
                  <button onClick={() => applyFormatting('todo')} className="p-1.5 rounded-lg hover:bg-white/10" title="Checklist">
                    <CheckSquare className="w-4 h-4" />
                  </button>
                  <button onClick={() => applyFormatting('quote')} className="p-1.5 rounded-lg hover:bg-white/10" title="Quote">
                    <Quote className="w-4 h-4" />
                  </button>
                  <button onClick={() => applyFormatting('code')} className="p-1.5 rounded-lg hover:bg-white/10" title="Code">
                    <Code className="w-4 h-4" />
                  </button>

                  <div className="ml-auto flex items-center gap-2 text-[11px] font-mono text-slate-400">
                    <span className="text-[#c6f432] font-bold">
                      {activePalette.name}
                    </span>
                  </div>
                </div>

                {/* Editor Content Area */}
                <div className="p-6 sm:p-8 min-h-[380px] flex-1">
                  {activeTab === 'preview' ? (
                    <div className="space-y-4">
                      <h1 
                        className="text-2xl sm:text-3xl font-archivo font-black tracking-tight uppercase"
                        style={{ color: activePalette.text }}
                      >
                        Deep Thinking in the Age of Noise
                      </h1>

                      <p className="text-sm sm:text-base leading-relaxed opacity-90 font-sans">
                        The highest leverage work happens when friction drops to absolute zero.
                      </p>

                      <h3 
                        className="text-lg font-bold font-mono mt-4"
                        style={{ color: activePalette.accent }}
                      >
                        Why Smriti Removed Tabs
                      </h3>

                      <ul className="space-y-2 text-sm leading-relaxed opacity-85 list-disc pl-5 font-sans">
                        <li>
                          <strong className="text-white">Cognitive Overhead</strong>: 40 open tabs create visual noise and anxiety.
                        </li>
                        <li>
                          <strong className="text-white">Context Fragmentation</strong>: Tab-based notes treat thoughts like throwaway browser sessions.
                        </li>
                        <li>
                          <strong className="text-white">Spatial Clarity</strong>: Smriti groups thoughts by folders, pinned priorities, and upcoming canvas sticky notes.
                        </li>
                      </ul>

                      <div 
                        className="p-4 rounded-2xl border-l-4 my-4 italic text-sm leading-relaxed font-sans"
                        style={{
                          backgroundColor: `${activePalette.accent}15`,
                          borderColor: activePalette.accent,
                          color: activePalette.text
                        }}
                      >
                        "Simplicity is prerequisite for reliability and depth."
                      </div>
                    </div>
                  ) : (
                    <textarea
                      value={editorText}
                      onChange={(e) => setEditorText(e.target.value)}
                      className="w-full h-80 bg-transparent resize-none focus:outline-none font-mono text-xs sm:text-sm leading-relaxed"
                      style={{ color: activePalette.text }}
                    />
                  )}
                </div>

                {/* Status Bar */}
                <div 
                  className="px-6 py-3 border-t border-[#222222] flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400"
                  style={{ backgroundColor: activePalette.bg }}
                >
                  <div className="flex items-center gap-3">
                    <span>{words} words</span>
                    <span>•</span>
                    <span>{chars} characters</span>
                    <span>•</span>
                    <span>~{readTime} min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#16c847]" />
                    <span>Autosaved locally</span>
                  </div>
                </div>
              </div>
            </ThreeDCard>
          </div>
        </div>
      </div>
    </section>
  );
};
