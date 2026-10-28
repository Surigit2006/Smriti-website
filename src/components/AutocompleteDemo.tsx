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
    ghost: 'friction drops to absolute zero and distractions are eliminated.',
    continuation: '\n\n### Daily Routine\n1. 90-minute morning deep work block\n2. Zero tabs, zero notifications\n3. Capture emergent ideas directly into local-first notes'
  },
  {
    id: 'architecture',
    label: 'Architecture Decision',
    prefix: 'We decided against traditional browser tabs because ',
    ghost: 'they cause cognitive fragmentation and treat ideas like disposable web pages.',
    continuation: '\n\n**Consequences**:\n- Users retain spatial memory of where their thoughts live.\n- Instant local disk indexing guarantees sub-10ms search.'
  },
  {
    id: 'sprint',
    label: 'Sprint Planning',
    prefix: 'Our primary objective for this milestone is to ',
    ghost: 'deliver fluid connected sticky notes and intelligent slash-command completion.',
    continuation: '\n\n- [x] 162 colorway themes engine\n- [x] First-class rich text markdown editor\n- [ ] Inline autocomplete with Tab completion'
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

export const AutocompleteDemo: React.FC = () => {
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

  return (
    <section id="autocomplete" className="py-24 sm:py-32 relative bg-[#F5F0E8] border-t border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* DOVV Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/[0.07]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#0F4C81] font-bold uppercase tracking-widest">
                [ UPCOMING // INTELLIGENT AUTOCOMPLETE ]
              </span>
              <span className="dovv-chip text-[#F59E0B] text-xs py-0.5 font-bold">
                Coming Soon
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-archivo font-black text-[#141414] tracking-tight leading-[0.95] uppercase">
              THOUGHT-SPEED WRITING.<br />
              <span className="text-[#0F4C81]">INLINE AUTOCOMPLETE & SLASH COMMANDS.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#666055] leading-relaxed max-w-2xl font-normal">
              Type naturally and let Smriti anticipate your next phrase, code block, or markdown structure. Press <kbd className="px-2 py-0.5 rounded bg-white border border-black/10 font-mono text-xs font-bold text-[#141414] shadow-xs">Tab ⇥</kbd> to complete thoughts instantly without breaking creative momentum.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#141414] hover:bg-[#0F4C81] text-white font-archivo font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105"
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
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all whitespace-nowrap ${
                  selectedScenarioIndex === idx
                    ? 'bg-[#141414] text-white shadow-sm'
                    : 'bg-white text-[#666055] hover:text-[#141414] border border-black/[0.06]'
                }`}
              >
                {scenario.label}
              </button>
            ))}
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-2 bg-white p-1 rounded-full border border-black/[0.08] shadow-xs shrink-0 self-start md:self-auto">
            <button
              onClick={() => { setActiveTab('autocomplete'); setShowSlashMenu(false); }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all ${
                activeTab === 'autocomplete'
                  ? 'bg-[#0F4C81] text-white font-bold'
                  : 'text-[#666055] hover:text-[#141414]'
              }`}
            >
              Inline Tab ⇥ Ghost
            </button>
            <button
              onClick={() => { setActiveTab('slash'); setShowSlashMenu(true); }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all ${
                activeTab === 'slash'
                  ? 'bg-[#0F4C81] text-white font-bold'
                  : 'text-[#666055] hover:text-[#141414]'
              }`}
            >
              Slash (/) Commands
            </button>
          </div>
        </div>

        {/* Interactive 3D Editor Canvas */}
        <ThreeDCard maxTilt={3} className="w-full">
          <div className="dovv-card bg-white p-6 sm:p-10 rounded-3xl border border-black/[0.08] shadow-xl relative overflow-hidden">
            {/* Top Bar of the Interactive Autocomplete Console */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-black/[0.06] text-xs font-mono text-[#666055]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E87A90]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#16c847]" />
                </div>
                <span className="font-bold text-[#141414]">Smart Autocomplete Engine</span>
                <span className="text-black/30">•</span>
                <span className="text-[#0F4C81]">Local semantic prediction</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/5 hover:bg-black/10 text-xs font-mono text-[#141414] transition-colors"
                  title="Reset demo"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
                <span className="px-2 py-0.5 rounded bg-[#16c847]/10 text-[#16c847] font-bold text-[11px]">
                  Zero Latency
                </span>
              </div>
            </div>

            {/* The Text & Ghost Container */}
            <div 
              className="relative min-h-[220px] sm:min-h-[260px] font-sans text-base sm:text-lg leading-relaxed text-[#141414] whitespace-pre-wrap select-text cursor-text focus:outline-none"
              tabIndex={0}
              onKeyDown={handleKeyDown}
            >
              <span>{text}</span>

              {/* Ghost Translucent Autocomplete Suggestion */}
              {!isCompleted && ghost && (
                <span className="text-[#0F4C81]/45 italic font-sans animate-pulse">
                  {ghost}
                </span>
              )}

              {/* Floating Tab Completion Indicator */}
              <AnimatePresence>
                {!isCompleted && ghost && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="inline-flex items-center gap-2 ml-2 mt-2 px-3 py-1.5 rounded-full bg-[#0F4C81] text-white font-mono text-xs shadow-md cursor-pointer hover:bg-[#141414] transition-colors"
                    onClick={handleComplete}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Press Tab ⇥ or click to complete</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Slash Command Dropdown Menu Simulation */}
              <AnimatePresence>
                {(showSlashMenu || activeTab === 'slash') && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-4 top-24 z-30 w-72 bg-white rounded-2xl border border-black/10 shadow-2xl p-2 font-sans"
                  >
                    <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-[#666055] font-bold border-b border-black/5">
                      Commands matching "/"
                    </div>
                    <div className="space-y-1 mt-1">
                      {SLASH_COMMANDS.map((cmd) => {
                        const Icon = cmd.icon;
                        return (
                          <div
                            key={cmd.trigger}
                            onClick={() => {
                              setText((prev) => prev + `\n${cmd.trigger} `);
                              setShowSlashMenu(false);
                            }}
                            className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#FAF7F2] cursor-pointer transition-colors group"
                          >
                            <div className="w-7 h-7 rounded-lg bg-black/5 flex items-center justify-center text-[#141414] group-hover:bg-[#0F4C81] group-hover:text-white transition-colors">
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div className="flex-1">
                              <div className="text-xs font-bold text-[#141414]">{cmd.label}</div>
                              <div className="text-[10px] text-[#666055]">{cmd.desc}</div>
                            </div>
                            <span className="text-[10px] font-mono text-[#666055] group-hover:text-[#0F4C81]">
                              {cmd.trigger}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Interactive Guidance Bar */}
            <div className="pt-6 mt-6 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#666055]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#16c847]" />
                {isCompleted ? (
                  <span className="text-[#16c847] font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Suggestion accepted & inserted!
                  </span>
                ) : (
                  <span>Type anywhere or press Tab ⇥ to accept inline suggestions</span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleComplete}
                  disabled={isCompleted}
                  className={`px-4 py-2 rounded-full font-bold text-xs font-mono uppercase tracking-wider transition-all ${
                    isCompleted
                      ? 'bg-black/5 text-black/30 cursor-not-allowed'
                      : 'bg-[#141414] hover:bg-[#0F4C81] text-white shadow-xs'
                  }`}
                >
                  Accept Suggestion ⇥
                </button>
              </div>
            </div>
          </div>
        </ThreeDCard>
      </div>
    </section>
  );
};
