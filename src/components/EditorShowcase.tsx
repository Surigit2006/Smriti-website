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
  Sparkles, 
  Clock, 
  HelpCircle,
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
    <section id="editor" className="py-24 sm:py-32 relative bg-[#0b0f19] overflow-hidden">
      {/* 3D Background Glow */}
      <div 
        className="absolute top-1/3 left-10 w-[650px] h-[650px] rounded-full blur-[190px] opacity-15 pointer-events-none"
        style={{ background: activePalette.secondary }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <PenTool className="w-3.5 h-3.5" />
            <span>Main Product Benefit • Premium Note Editor</span>
            <span className="bg-emerald-500/20 text-emerald-400 px-1.5 py-0.2 rounded text-[10px]">
              Current
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            A first-class note editor. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-indigo-300">
              Crafted for pure writing flow.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A polished writing experience with rich-text formatting and tools for organizing ideas. No tab overload, no laggy cloud pauses — just effortless expression.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">No Tab Overload</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              We replaced cluttered, messy browser-like tabs with a streamlined, spatial navigation system. Keep full clarity over where your ideas live.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mb-4">
              <PenTool className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Rich-Text & Markdown</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Format headings, callouts, blockquotes, code snippets, and checklists. Write naturally using keyboard shortcuts or the top visual ribbon.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Instant Local Response</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Zero typing latency. Every stroke renders at 120 FPS with instant local auto-save, JSON backup, and zero distraction spinners.
            </p>
          </div>
        </div>

        {/* 3D Main Editor Split: Reference Screenshot + 3D Interactive Live Editor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Reference Image: Notepad desktop app by Serhii Yermolenko */}
          <div className="lg:col-span-5 space-y-5">
            <ThreeDCard maxTilt={8}>
              <div className="rounded-3xl overflow-hidden border border-white/15 bg-slate-900/90 shadow-2xl backdrop-blur-md group">
                <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/40">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="text-xs font-semibold text-slate-200">
                      Desktop Design Architecture
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase text-slate-400">
                    Dribbble Reference
                  </span>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                  <img
                    src="/images/editor-notepad.jpg"
                    alt="Notepad desktop app by Serhii Yermolenko on Dribbble"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-4 bg-slate-900/95 border-t border-white/10 text-xs text-slate-400 flex items-center justify-between">
                  <span>Serhii Yermolenko inspired UI</span>
                  <a 
                    href={APP_REDIRECT_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-amber-400 font-bold hover:underline flex items-center gap-1"
                  >
                    <span>Try in Smriti</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </ThreeDCard>

            {/* Creator Attribution Card with Girl Artwork Icon */}
            <div className="p-5 rounded-3xl bg-gradient-to-r from-amber-950/30 to-slate-900 border border-amber-500/20 text-xs text-slate-300 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border border-amber-400/60 shrink-0 shadow-md">
                <img
                  src="/images/smriti-icon.jpg"
                  alt="Smriti Icon"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Created by {CREATOR_NAME}</div>
                <p className="text-slate-400 text-xs mt-0.5">
                  Built for deep creative flow, spatial clarity, and joyful writing without browser tab fatigue.
                </p>
              </div>
            </div>
          </div>

          {/* 3D Interactive Live Note Editor Playground */}
          <div className="lg:col-span-7">
            <ThreeDCard maxTilt={6}>
              <div 
                className="rounded-3xl border transition-all duration-500 shadow-2xl overflow-hidden flex flex-col"
                style={{
                  backgroundColor: activePalette.surface,
                  borderColor: activePalette.border,
                  boxShadow: `0 25px 60px -10px ${activePalette.accent}25`
                }}
              >
                {/* Editor Top Navigation & Action Bar */}
                <div 
                  className="p-3.5 sm:p-4 border-b flex flex-wrap items-center justify-between gap-3"
                  style={{
                    backgroundColor: activePalette.bg,
                    borderColor: activePalette.border
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-white/10 text-white">
                      3D Interactive Editor
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                      (Type or format below)
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    <div className="flex bg-black/40 p-0.5 rounded-lg border border-white/10">
                      <button
                        onClick={() => setActiveTab('preview')}
                        className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                          activeTab === 'preview' ? 'bg-amber-400 text-black' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Formatted View
                      </button>
                      <button
                        onClick={() => setActiveTab('source')}
                        className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                          activeTab === 'source' ? 'bg-amber-400 text-black' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Raw Markdown
                      </button>
                    </div>

                    <a
                      href={APP_REDIRECT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors"
                    >
                      Open App →
                    </a>
                  </div>
                </div>

                {/* Formatting Toolbar */}
                <div 
                  className="p-2 sm:p-3 border-b flex flex-wrap items-center gap-1 text-xs"
                  style={{
                    backgroundColor: `${activePalette.surface}95`,
                    borderColor: activePalette.border,
                    color: activePalette.text
                  }}
                >
                  <button
                    onClick={() => applyFormatting('bold')}
                    className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                    title="Bold (**text**)"
                  >
                    <Bold className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => applyFormatting('italic')}
                    className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                    title="Italic (*text*)"
                  >
                    <Italic className="w-4 h-4" />
                  </button>
                  <div className="h-4 w-[1px] bg-white/15 mx-1" />
                  <button
                    onClick={() => applyFormatting('h1')}
                    className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                    title="Heading 1 (# Header)"
                  >
                    <Heading1 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => applyFormatting('h2')}
                    className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                    title="Heading 2 (## Header)"
                  >
                    <Heading2 className="w-4 h-4" />
                  </button>
                  <div className="h-4 w-[1px] bg-white/15 mx-1" />
                  <button
                    onClick={() => applyFormatting('todo')}
                    className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                    title="Checklist (- [ ])"
                  >
                    <CheckSquare className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => applyFormatting('quote')}
                    className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                    title="Blockquote (> quote)"
                  >
                    <Quote className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => applyFormatting('code')}
                    className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                    title="Code snippet (```)"
                  >
                    <Code className="w-4 h-4" />
                  </button>

                  <div className="ml-auto flex items-center gap-2 text-[11px] font-mono text-slate-400">
                    <span className="hidden sm:inline font-bold" style={{ color: activePalette.accent }}>
                      Theme: {activePalette.name}
                    </span>
                  </div>
                </div>

                {/* Editor Content Area */}
                <div className="p-6 min-h-[380px] flex-1">
                  {activeTab === 'preview' ? (
                    <div className="space-y-4">
                      <h1 
                        className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                        style={{ color: activePalette.text }}
                      >
                        Deep Thinking in the Age of Noise
                      </h1>

                      <p className="text-sm sm:text-base leading-relaxed opacity-90">
                        The highest leverage work happens when friction drops to absolute zero.
                      </p>

                      <h3 
                        className="text-lg font-bold mt-4"
                        style={{ color: activePalette.accent }}
                      >
                        Why Smriti Removed Tabs
                      </h3>

                      <ul className="space-y-2 text-sm leading-relaxed opacity-85 list-disc pl-5">
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

                      {/* Blockquote styled with active palette accent */}
                      <div 
                        className="p-4 rounded-2xl border-l-4 my-4 italic text-sm leading-relaxed"
                        style={{
                          backgroundColor: `${activePalette.accent}12`,
                          borderColor: activePalette.accent,
                          color: activePalette.text
                        }}
                      >
                        "Simplicity is prerequisite for reliability and depth."
                      </div>

                      {/* Checklist */}
                      <div className="space-y-2 text-sm pt-2">
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</span>
                          <span className="line-through opacity-70">Streamlined single-window interface</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</span>
                          <span className="line-through opacity-70">Rich markdown formatting with keyboard hotkeys</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</span>
                          <span className="line-through opacity-70">162 color palettes for custom reading environments</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded border border-amber-500/50 flex items-center justify-center text-[10px] text-amber-400">○</span>
                          <span className="text-amber-300 font-medium">Connect canvas sticky notes (coming next)</span>
                        </div>
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
                  className="px-5 py-3 border-t flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400"
                  style={{
                    backgroundColor: activePalette.bg,
                    borderColor: activePalette.border
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span>{words} words</span>
                    <span>•</span>
                    <span>{chars} characters</span>
                    <span>•</span>
                    <span>~{readTime} min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
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
