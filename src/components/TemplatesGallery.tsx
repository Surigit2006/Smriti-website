import React, { useState } from 'react';
import { 
  LayoutTemplate, 
  BookOpen, 
  Calendar, 
  Code2, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight, 
  Clock, 
  CheckSquare, 
  Users, 
  Smile,
  Copy,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { APP_REDIRECT_URL } from '../data/palettes';
import { ThreeDCard } from './ThreeDCard';

interface TemplateItem {
  id: string;
  name: string;
  category: string;
  desc: string;
  icon: any;
  accent: string;
  content: {
    title: string;
    sections: {
      heading: string;
      items: string[];
      type: 'text' | 'checkbox' | 'table';
    }[];
  };
}

const TEMPLATES: TemplateItem[] = [
  {
    id: 'cornell',
    name: 'Cornell Study System',
    category: 'Learning & Research',
    desc: 'Structured cues, notes, and summary for high-retention spaced repetition revision.',
    icon: BookOpen,
    accent: '#0F4C81',
    content: {
      title: 'Distributed Consensus & Raft Protocol',
      sections: [
        {
          heading: 'Recall Cues & Questions',
          items: [
            'What is the fundamental difference between Raft and Paxos?',
            'How does leader election handle network partitions?',
            'What guarantees log replication consistency across terms?'
          ],
          type: 'text'
        },
        {
          heading: 'Lecture & Book Notes',
          items: [
            'Raft divides consensus into Leader Election, Log Replication, and Safety.',
            'Followers only respond to Heartbeat RPCs from valid leaders within heartbeat timeout.',
            'Commit rule: A log entry is committed once replicated across majority of peers.'
          ],
          type: 'text'
        },
        {
          heading: 'Summary & Core Takeaway',
          items: [
            'Raft optimizes for understandability without sacrificing correctness. Leader failure triggers immediate election via randomized timeouts.'
          ],
          type: 'text'
        }
      ]
    }
  },
  {
    id: 'timeblock',
    name: 'Daily Timeblocking & Focus',
    category: 'Productivity',
    desc: 'Deep work allocation, top priorities, and daily reflection.',
    icon: Calendar,
    accent: '#F59E0B',
    content: {
      title: 'Daily Focus — Wednesday Sprint',
      sections: [
        {
          heading: 'Top 3 High-Leverage Priorities',
          items: [
            'Ship inline autocomplete motion prototype for Smriti',
            'Finalize 162-palette contrast compliance matrix',
            'Review user feedback on zero-tab spatial navigation'
          ],
          type: 'checkbox'
        },
        {
          heading: 'Deep Work Blocks',
          items: [
            '09:00 - 11:30 | Core Editor & Motion Architecture (Deep Work)',
            '13:00 - 14:30 | Connected Sticky Notes Canvas SVG engine',
            '16:00 - 17:00 | Code review, documentation, & daily wrap-up'
          ],
          type: 'text'
        },
        {
          heading: 'Evening Reflection & Wins',
          items: [
            'Single window writing felt remarkably calmer than juggling tabs.',
            'Tomorrow: expand templates library with community sharing.'
          ],
          type: 'text'
        }
      ]
    }
  },
  {
    id: 'rfc',
    name: 'Engineering RFC / ADR',
    category: 'Engineering',
    desc: 'Architectural Decision Records to document technical choices and trade-offs.',
    icon: Code2,
    accent: '#1B4332',
    content: {
      title: 'RFC-042: Local-First Storage Architecture',
      sections: [
        {
          heading: 'Status & Context',
          items: [
            'Status: ACCEPTED (v2.0)',
            'Context: Traditional note apps stall when offline or facing flaky Wi-Fi.',
            'Goal: Keystrokes must save at 120 FPS locally with zero network delay.'
          ],
          type: 'text'
        },
        {
          heading: 'Decision',
          items: [
            'Adopt IndexedDB as primary persistence tier with in-memory write cache.',
            'Implement CRDT-ready snapshot format for forthcoming peer sync.',
            'Support zero-friction JSON backup export & restore.'
          ],
          type: 'text'
        },
        {
          heading: 'Action Items & Milestones',
          items: [
            'Benchmarked 10,000 note queries: sub-4ms response',
            'Integrated into Smriti Web App engine'
          ],
          type: 'checkbox'
        }
      ]
    }
  },
  {
    id: 'sprint',
    name: 'Weekly Sprint & OKR Board',
    category: 'Projects',
    desc: 'Sprint objective, prioritized tasks, blockers, and deliverables.',
    icon: CheckSquare,
    accent: '#E87A90',
    content: {
      title: 'Sprint 24: Spatial Workspaces & Polished Motion',
      sections: [
        {
          heading: 'Sprint Objective',
          items: [
            'Deliver award-winning DOVV-level motion and template previews for Smriti Notes.'
          ],
          type: 'text'
        },
        {
          heading: 'Active Tasks (In Progress)',
          items: [
            'Interactive autocomplete simulator with Tab ⇥ completion',
            'Live template preview gallery with instant copy',
            'Verify all redirects point cleanly to app.smritinotes.site'
          ],
          type: 'checkbox'
        },
        {
          heading: 'Blockers & Dependencies',
          items: [
            'None! Production build compiles cleanly with zero TypeScript errors.'
          ],
          type: 'text'
        }
      ]
    }
  },
  {
    id: 'meeting',
    name: 'Meeting & Action Matrix',
    category: 'Team Collaboration',
    desc: 'Attendees, agenda items, clear decisions, and owner-assigned action items.',
    icon: Users,
    accent: '#0F4C81',
    content: {
      title: 'Product Review: Connected Sticky Notes',
      sections: [
        {
          heading: 'Agenda & Discussion',
          items: [
            'Review user feedback regarding tab overload in competitive note apps.',
            'Walkthrough visual canvas drag-and-drop mechanics.',
            'Performance test on 500 simultaneous sticky cards.'
          ],
          type: 'text'
        },
        {
          heading: 'Action Items (Owner & Due)',
          items: [
            'Optimize SVG Bezier connector rendering (Target: 60 FPS on mobile)',
            'Add double-click to transition from sticky note to long-form markdown',
            'Release alpha test build to early users'
          ],
          type: 'checkbox'
        }
      ]
    }
  },
  {
    id: 'journal',
    name: 'Mindful Journal & Gratitude',
    category: 'Personal & Habits',
    desc: 'Morning clarity, gratitude prompts, and evening decompression.',
    icon: Smile,
    accent: '#F59E0B',
    content: {
      title: 'Morning Clarity & Daily Reflection',
      sections: [
        {
          heading: 'Three Things I Am Grateful For',
          items: [
            'Quiet morning coffee before opening any screens',
            'Working on thoughtful, handcrafted creative tools',
            'The freedom to build without unnecessary complexity'
          ],
          type: 'text'
        },
        {
          heading: 'Daily Mindset Check',
          items: [
            'Energy: High • Focus: Calm • Distraction Level: Zero',
            'One thing that would make today great: Shipping with pure craftsmanship'
          ],
          type: 'text'
        }
      ]
    }
  }
];

export const TemplatesGallery: React.FC = () => {
  const [selectedTemplateId, setSelectedTemplateId] = useState(TEMPLATES[0].id);
  const [copied, setCopied] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'cornell-0': true,
    'timeblock-0': true,
    'rfc-0': true,
    'sprint-0': true,
  });

  const activeTemplate = TEMPLATES.find((t) => t.id === selectedTemplateId) || TEMPLATES[0];

  const handleToggleCheck = (key: string) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCopyMarkdown = () => {
    let md = `# ${activeTemplate.content.title}\n\n`;
    activeTemplate.content.sections.forEach((sec) => {
      md += `### ${sec.heading}\n`;
      sec.items.forEach((item) => {
        md += sec.type === 'checkbox' ? `- [ ] ${item}\n` : `- ${item}\n`;
      });
      md += '\n';
    });
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="templates" className="py-24 sm:py-32 relative bg-[#FAF7F2] border-t border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* DOVV Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/[0.07]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#0F4C81] font-bold uppercase tracking-widest">
                [ UPCOMING // READY-TO-USE TEMPLATES ]
              </span>
              <span className="dovv-chip text-[#F59E0B] text-xs py-0.5 font-bold">
                Coming Soon
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-archivo font-black text-[#141414] tracking-tight leading-[0.95] uppercase">
              STRUCTURED FOR CLARITY.<br />
              <span className="text-[#0F4C81]">PRE-BUILT NOTEBOOK TEMPLATES.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#666055] leading-relaxed max-w-2xl font-normal">
              Build timetables, daily planners, study schedules, project trackers, and engineering decision records. Launch any template into your notes with instant structure.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#141414] hover:bg-[#0F4C81] text-white font-archivo font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              <span>Open in Smriti</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Template Selector Cards (Horizontal Grid) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {TEMPLATES.map((tmpl) => {
            const Icon = tmpl.icon;
            const isSelected = selectedTemplateId === tmpl.id;
            return (
              <button
                key={tmpl.id}
                onClick={() => setSelectedTemplateId(tmpl.id)}
                className={`p-4 rounded-2xl text-left transition-all flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-white border-[#0F4C81] ring-2 ring-[#0F4C81] shadow-md scale-102'
                    : 'bg-white/80 hover:bg-white border-black/[0.06] shadow-xs'
                }`}
              >
                <div 
                  className="w-8 h-8 rounded-xl flex items-center justify-center mb-3 transition-colors"
                  style={{ 
                    background: isSelected ? tmpl.accent : '#F5F0E8', 
                    color: isSelected ? '#FFFFFF' : '#141414' 
                  }}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#141414] leading-snug mb-1">
                    {tmpl.name}
                  </div>
                  <div className="text-[10px] font-mono text-[#666055] truncate">
                    {tmpl.category}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Live Template Playground Document */}
        <ThreeDCard maxTilt={3} className="w-full">
          <div className="dovv-card bg-white p-6 sm:p-10 rounded-3xl border border-black/[0.08] shadow-xl">
            {/* Top Bar of the Template Preview */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-black/[0.06]">
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                  style={{ background: activeTemplate.accent }}
                >
                  <activeTemplate.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-archivo text-xl font-bold uppercase text-[#141414]">
                      {activeTemplate.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#FAF7F2] border border-black/10 text-[#666055]">
                      Template Preview
                    </span>
                  </div>
                  <p className="text-xs font-sans text-[#666055] mt-0.5">
                    {activeTemplate.desc}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyMarkdown}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FAF7F2] hover:bg-[#F0EAE1] border border-black/[0.08] text-xs font-mono font-semibold text-[#141414] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#16c847]" />
                      <span className="text-[#16c847]">Markdown Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Markdown</span>
                    </>
                  )}
                </button>

                <a
                  href={APP_REDIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#141414] hover:bg-[#0F4C81] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-xs"
                >
                  <span>Use in Smriti</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Rendered Template Document Body */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTemplate.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="pb-4 border-b border-black/[0.04]">
                  <h1 className="text-2xl sm:text-3xl font-archivo font-extrabold text-[#141414] tracking-tight">
                    {activeTemplate.content.title}
                  </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeTemplate.content.sections.map((sec, secIdx) => (
                    <div 
                      key={secIdx} 
                      className={`p-5 rounded-2xl bg-[#FAF7F2] border border-black/[0.05] ${
                        secIdx === 0 && activeTemplate.content.sections.length % 2 !== 0 ? 'md:col-span-2' : ''
                      }`}
                    >
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#0F4C81] mb-3 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0F4C81]" />
                        <span>{sec.heading}</span>
                      </h4>

                      <div className="space-y-2.5">
                        {sec.items.map((item, itemIdx) => {
                          const itemKey = `${activeTemplate.id}-${secIdx}-${itemIdx}`;
                          const isChecked = !!checkedItems[itemKey];

                          if (sec.type === 'checkbox') {
                            return (
                              <div
                                key={itemIdx}
                                onClick={() => handleToggleCheck(itemKey)}
                                className="flex items-start gap-2.5 cursor-pointer group text-xs font-mono"
                              >
                                <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border transition-colors ${
                                  isChecked 
                                    ? 'bg-[#0F4C81] border-[#0F4C81] text-white' 
                                    : 'border-black/30 bg-white group-hover:border-black'
                                }`}>
                                  {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                                </div>
                                <span className={`leading-relaxed ${isChecked ? 'line-through text-[#666055]/60' : 'text-[#141414]'}`}>
                                  {item}
                                </span>
                              </div>
                            );
                          }

                          return (
                            <div key={itemIdx} className="flex items-start gap-2 text-xs font-sans text-[#141414] leading-relaxed">
                              <span className="text-[#0F4C81] font-bold select-none">•</span>
                              <span>{item}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Template Card Footer */}
            <div className="pt-6 mt-6 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#666055]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Ready-to-use templates are rolling out in the next Smriti update</span>
              </div>

              <span className="text-[#0F4C81] font-semibold">
                Available directly in app.smritinotes.site
              </span>
            </div>
          </div>
        </ThreeDCard>
      </div>
    </section>
  );
};
