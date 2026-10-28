import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowUpRight, 
  Terminal, 
  Check, 
  CornerDownLeft, 
  Command, 
  Heading1, 
  CheckSquare, 
  Code, 
  Quote, 
  Table, 
  Zap,
  RotateCcw
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { APP_REDIRECT_URL } from '../data/palettes';
import { ThreeDCard } from './ThreeDCard';

interface Scenario {
  id: string;
  label: string;
  prefix: string;
  ghost: string;
  continuation: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 'deep-work',
    label: 'Deep Work Habit',
    prefix: 'The highest leverage work happens when ',
    ghost: 'friction drops to absolute zero and thoughts flow into text without distraction.',
    continuation: '\n\n### Daily Routine\n1. 90-minute morning deep work block\n2. Unified notes and Excalidraw architecture sketching\n3. Capture emergent ideas directly into local-first notes'
  },
  {
    id: 'architecture',
    label: 'System Design & Excalidraw',
    prefix: 'We integrated Excalidraw directly into notes because ',
    ghost: 'system design architectures and technical prose belong on one unified canvas.',
    continuation: '\n\n**Key Capabilities**:\n- Hand-drawn microservice maps, cloud topologies, and database ERDs.\n- 162 hand-tuned palette stroke colors with zero tool-switching.'
  },
  {
    id: 'sprint',
    label: 'Sprint Planning',
    prefix: 'Our primary objective for this milestone is to ',
    ghost: 'deliver fluid connected sticky notes and intelligent slash-command completion.',
    continuation: '\n\n- [x] 162 colorway themes engine\n- [x] Embedded Excalidraw system design whiteboard\n- [ ] Inline autocomplete with Tab completion'
  },
  {
    id: 'code-rfc',
    label: 'Code Block & RFC',
    prefix: '```typescript\n// Local-first auto-save handler\nexport async function saveThought(doc: Document) {\n  await ',
    ghost: 'indexedDB.put("notes", doc.serialize());\n  notifySubscribers(doc.id);\n}',
    continuation: '\n```\n\n> "Zero network latency ensures every keystroke is safely persisted."'
  }
];

const SLASH_COMMANDS = [
  { trigger: '/h1', label: 'Heading 1', desc: 'Large section title', icon: Heading1 },
  { trigger: '/todo', label: 'To-do item', desc: 'Actionable checkbox task', icon: CheckSquare },
  { trigger: '/code', label: 'Code Block', desc: 'Syntax-highlighted snippet', icon: Code },
  { trigger: '/quote', label: 'Blockquote', desc: 'Highlight a memorable thought', icon: Quote },
  { trigger: '/table', label: 'Data Table', desc: 'Structured columns and rows', icon: Table },
];

interface AutocompleteDemoProps {
  isDark?: boolean;
}

export const AutocompleteDemo: React.FC<AutocompleteDemoProps> = ({ isDark = true }) => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const currentScenario = SCENARIOS[selectedScenarioIndex];
  
  const [text, setText] = useState(currentScenario.prefix);
  const [ghost, setGhost] = useState(currentScenario.ghost);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showSlashMenu, setShowSlashMenu] = useState(false);
  const [activeTab, setActiveTab] = useState<'autocomplete' | 'slash'>('autocomplete');

  useEffect(() => {
    setText(currentScenario.prefix);
    setGhost(currentScenario.ghost);
    setIsCompleted(false);
  }, [selectedScenarioIndex]);

  const handleComplete = () => {
    if (isCompleted) return;
    setText((prev) => prev + ghost + currentScenario.continuation);
    setGhost('');
    setIsCompleted(true);
  };

  const handleReset = () => {
    setText(currentScenario.prefix);
    setGhost(currentScenario.ghost);
    setIsCompleted(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      handleComplete();
    }
  };

  const insertSlashCommand = (cmd: typeof SLASH_COMMANDS[0]) => {
    if (cmd.trigger === '/h1') {
      setText((prev) => prev + '\n\n# New Strategic Architecture\n');
    } else if (cmd.trigger === '/todo') {
      setText((prev) => prev + '\n- [ ] Design high-throughput vector store\n- [ ] Verify Excalidraw zero-lag canvas\n');
    } else if (cmd.trigger === '/code') {
      setText((prev) => prev + '\n```rust\nfn compute_hash(seed: &[u8]) -> [u8; 32] {\n    blake3::hash(seed).into()\n}\n```\n');
    } else if (cmd.trigger === '/quote') {
      setText((prev) => prev + '\n> "Simplicity is prerequisite for reliability." — Edsger W. Dijkstra\n');
    } else if (cmd.trigger === '/table') {
      setText((prev) => prev + '\n| Service | Latency | Status |\n|---|---|---|\n| Edge Cache | 1.2ms | Operational |\n| Primary DB | 4.8ms | Operational |\n');
    }
    setShowSlashMenu(false);
  };

  return (
    <section 
      id="autocomplete" 
      className={`py-24 sm:py-32 relative border-t transition-colors duration-500 overflow-hidden ${
        isDark 
          ? 'bg-[#0E1118] border-white/10 text-white' 
          : 'bg-[#F8FAFC] border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Shopify Editions Section Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b ${
          isDark ? 'border-white/10' : 'border-slate-200'
        }`}>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border ${
                isDark 
                  ? 'bg-[#00F076]/10 text-[#00F076] border-[#00F076]/20' 
                  : 'bg-emerald-50 text-emerald-700 border-emerald-200'
              }`}>
                [ UPCOMING // INTELLIGENT AUTOCOMPLETE ]
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold ${
                isDark ? 'bg-white/10 text-white' : 'bg-slate-200 text-slate-800'
              }`}>
                Coming Soon
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-archivo font-black tracking-tight leading-[0.95] uppercase">
              THOUGHT-SPEED WRITING.<br />
              <span className="text-[#00F076]">INLINE AUTOCOMPLETE & SLASH COMMANDS.</span>
            </h2>

            <p className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Type naturally and let Smriti anticipate your next sentence, code snippet, or markdown block. Press <kbd className={`px-2 py-0.5 rounded font-mono text-xs font-bold shadow-xs ${
                isDark ? 'bg-white/10 border border-white/20 text-white' : 'bg-white border border-slate-300 text-slate-900'
              }`}>Tab ⇥</kbd> to accept completions instantly without breaking flow.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#00F076] hover:bg-[#00d669] text-black font-archivo font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[#00F076]/20 transition-all hover:scale-105"
            >
              <span>Try Live in Smriti</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Interactive Mode & Scenario Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Scenario Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {SCENARIOS.map((scenario, idx) => (
              <button
                key={scenario.id}
                onClick={() => setSelectedScenarioIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all whitespace-nowrap border ${
                  selectedScenarioIndex === idx
                    ? isDark
                      ? 'bg-white text-black border-white shadow-md'
                      : 'bg-slate-900 text-white border-slate-900 shadow-md'
                    : isDark
                      ? 'bg-[#131722] text-slate-400 hover:text-white border-white/10'
                      : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200'
                }`}
              >
                {scenario.label}
              </button>
            ))}
          </div>

          {/* Mode Switcher */}
          <div className={`flex items-center gap-2 p-1 rounded-full border shadow-xs shrink-0 self-start md:self-auto ${
            isDark ? 'bg-[#131722] border-white/10' : 'bg-white border-slate-200'
          }`}>
            <button
              onClick={() => { setActiveTab('autocomplete'); setShowSlashMenu(false); }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all ${
                activeTab === 'autocomplete'
                  ? 'bg-[#00F076] text-black font-bold'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Inline Tab ⇥ Ghost
            </button>
            <button
              onClick={() => { setActiveTab('slash'); setShowSlashMenu(true); }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all ${
                activeTab === 'slash'
                  ? 'bg-[#00F076] text-black font-bold'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Slash (/) Commands
            </button>
          </div>
        </div>

        {/* Interactive 3D Editor Canvas */}
        <ThreeDCard maxTilt={2} className="w-full">
          <div className={`p-6 sm:p-10 rounded-3xl border shadow-2xl relative overflow-hidden transition-colors ${
            isDark 
              ? 'bg-[#131722] border-white/10 text-white' 
              : 'bg-white border-slate-200 text-slate-900'
          }`}>
            {/* Top Bar */}
            <div className={`flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b text-xs font-mono ${
              isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-500'
            }`}>
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00F076]" />
                </div>
                <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Smart Autocomplete Engine</span>
                <span className="opacity-30">•</span>
                <span className="text-[#00F076] font-semibold">Local semantic prediction</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleReset}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono border transition-all ${
                    isDark 
                      ? 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10' 
                      : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Demo</span>
                </button>
              </div>
            </div>

            {/* Interactive Typing & Completion Area */}
            <div className="relative min-h-[260px] font-mono text-sm sm:text-base leading-relaxed">
              <div className="whitespace-pre-wrap select-text">
                <span className={isDark ? 'text-slate-100' : 'text-slate-900'}>{text}</span>
                
                {/* Ghost Text (Tab to Complete) */}
                {!isCompleted && ghost && (
                  <span className={`inline font-semibold transition-opacity animate-pulse ${
                    isDark ? 'text-[#00F076] bg-[#00F076]/10 px-1 rounded' : 'text-emerald-600 bg-emerald-50 px-1 rounded'
                  }`}>
                    {ghost}
                    <span className={`ml-2 inline-flex items-center gap-1 text-[11px] font-sans font-bold px-2 py-0.5 rounded border align-middle shadow-xs ${
                      isDark ? 'bg-black/60 border-white/20 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}>
                      Tab ⇥
                    </span>
                  </span>
                )}
              </div>

              {/* Slash Command Popover Menu */}
              <AnimatePresence>
                {showSlashMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.95 }}
                    className={`absolute top-16 left-4 sm:left-12 z-30 w-72 p-2 rounded-2xl shadow-2xl border ${
                      isDark 
                        ? 'bg-[#0E1118] border-white/15 text-white' 
                        : 'bg-white border-slate-200 text-slate-900'
                    }`}
                  >
                    <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-wider text-slate-400 border-b border-white/10">
                      Quick Insert Commands
                    </div>
                    <div className="py-1">
                      {SLASH_COMMANDS.map((cmd) => {
                        const Icon = cmd.icon;
                        return (
                          <button
                            key={cmd.trigger}
                            onClick={() => insertSlashCommand(cmd)}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                              isDark ? 'hover:bg-white/10 text-left' : 'hover:bg-slate-100 text-left'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <div className={`p-1.5 rounded-lg ${isDark ? 'bg-white/10 text-[#00F076]' : 'bg-slate-100 text-emerald-600'}`}>
                                <Icon className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <div className="font-bold">{cmd.label}</div>
                                <div className="text-[10px] text-slate-400">{cmd.desc}</div>
                              </div>
                            </div>
                            <span className="font-mono text-[10px] text-slate-400">{cmd.trigger}</span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Keyboard Action Callout */}
            <div className={`mt-8 pt-4 border-t flex flex-wrap items-center justify-between gap-4 text-xs font-mono ${
              isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-500'
            }`}>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleComplete}
                  disabled={isCompleted}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all ${
                    isCompleted
                      ? 'bg-slate-500/20 text-slate-400 cursor-not-allowed'
                      : 'bg-[#00F076] hover:bg-[#00d669] text-black shadow-md hover:scale-105 cursor-pointer'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>{isCompleted ? 'Thought Completed' : 'Simulate Tab ⇥ Completion'}</span>
                </button>

                <button
                  onClick={() => setShowSlashMenu(!showSlashMenu)}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border transition-all ${
                    isDark 
                      ? 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10' 
                      : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Command className="w-3.5 h-3.5 text-[#00F076]" />
                  <span>Insert / Command</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-[11px]">
                <span className="w-2 h-2 rounded-full bg-[#00F076]" />
                <span>Zero cloud latency • 100% On-Device AI</span>
              </div>
            </div>
          </div>
        </ThreeDCard>
      </div>
    </section>
  );
};
