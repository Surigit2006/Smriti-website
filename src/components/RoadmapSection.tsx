import React, { useState } from 'react';
import { 
  Cloud, 
  LayoutTemplate, 
  PenTool, 
  Bot, 
  ArrowUpRight, 
  Vote,
  Sparkles,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { APP_REDIRECT_URL } from '../data/palettes';
import { ThreeDCard } from './ThreeDCard';

interface RoadmapSectionProps {
  isDark?: boolean;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ isDark = true }) => {
  const [votes, setVotes] = useState<Record<string, number>>({
    'autocomplete': 1890,
    'cloud-sync': 1420,
    'templates': 1250,
    'sketching': 1630,
    'ai': 1210,
  });
  const [hasVoted, setHasVoted] = useState<Record<string, boolean>>({});

  const handleVote = (id: string) => {
    if (hasVoted[id]) return;
    setVotes((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    setHasVoted((prev) => ({ ...prev, [id]: true }));
  };

  const roadmapItems = [
    {
      id: 'autocomplete',
      num: '01',
      title: 'Intelligent Autocomplete & Slash Commands',
      subtitle: 'Inline thought completion, Tab ⇥ key expansion, and instant / quick actions for headings, tasks, tables, and code.',
      stage: 'In Active Development',
      badgeColor: 'text-[#00F076] bg-[#00F076]/10 border-[#00F076]/20',
      icon: Terminal,
      bullets: [
        'Semantic inline ghost text with single-keystroke Tab completion',
        'Instant / commands (headings, tasks, callouts, tables, math)',
        'Local model execution with zero data leaving your machine'
      ],
      demoLink: '#autocomplete'
    },
    {
      id: 'templates',
      num: '02',
      title: 'Ready-to-Use Notebook Templates',
      subtitle: 'Build timetables, daily planners, study schedules, project trackers, and engineering decision records.',
      stage: 'Prototyping',
      badgeColor: 'text-[#00E5FF] bg-[#00E5FF]/10 border-[#00E5FF]/20',
      icon: LayoutTemplate,
      bullets: [
        'Cornell study notes, spaced repetition flashcards, and timetables',
        'Daily timeblocking planners, habit matrices, and sprint roadmaps',
        'One-click template creation, markdown copy, and community sharing'
      ],
      demoLink: '#templates'
    },
    {
      id: 'cloud-sync',
      num: '03',
      title: 'Cloud Multi-Device Sync',
      subtitle: 'Access your notes seamlessly across desktop, phone, and tablet without compromising local-first speed.',
      stage: 'In Development',
      badgeColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
      icon: Cloud,
      bullets: [
        'End-to-end encrypted synchronization protocol',
        'Instant multi-device handover with conflict-free offline storage',
        'Full JSON backup export & instant restore at any time'
      ],
      demoLink: null
    },
    {
      id: 'sketching',
      num: '04',
      title: 'Excalidraw Native Stylus Expansion',
      subtitle: 'Draw diagrams, sketch concepts, and combine handwritten stylus thinking with your markdown notes.',
      stage: 'In Research',
      badgeColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
      icon: PenTool,
      bullets: [
        'Infinite canvas vector engine with zero stylus lag',
        'Pressure sensitivity & tilt detection for digital pencils',
        'Seamless integration of hand-drawn diagrams into markdown docs'
      ],
      demoLink: '#excalidraw'
    },
    {
      id: 'ai',
      num: '05',
      title: 'AI-Powered Productivity',
      subtitle: 'Summarize lengthy notes, generate study materials, and turn fragmented thoughts into actionable insights.',
      stage: 'Exploration',
      badgeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
      icon: Bot,
      bullets: [
        'Sub-millisecond note summarization and action items extraction',
        'Automatic flashcards and spaced repetition study schedules',
        '100% private AI execution that never trains on your personal data'
      ],
      demoLink: null
    }
  ];

  return (
    <section 
      id="roadmap" 
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
                [ ROADMAP // THE FUTURE OF SMRITI ]
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold ${
                isDark ? 'bg-white/10 text-white' : 'bg-slate-200 text-slate-800'
              }`}>
                Community Voted
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-archivo font-black tracking-tight leading-[0.95] uppercase">
              THE WORKSPACE ROADMAP.<br />
              <span className="text-[#00F076]">SHAPED BY COGNITIVE FLOW.</span>
            </h2>

            <p className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Vote on the next features for Smriti. We build with radical transparency, putting local speed, privacy, and architectural visual clarity first.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#00F076] hover:bg-[#00d669] text-black font-archivo font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[#00F076]/20 transition-all hover:scale-105"
            >
              <span>Launch Live App</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Roadmap Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapItems.map((item) => {
            const Icon = item.icon;
            const userVoted = hasVoted[item.id];
            return (
              <ThreeDCard key={item.id} maxTilt={3}>
                <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl h-full flex flex-col justify-between transition-colors ${
                  isDark ? 'bg-[#131722] border-white/10 hover:border-white/20' : 'bg-white border-slate-200 hover:border-slate-300'
                }`}>
                  <div>
                    {/* Top Row: Number & Status Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="font-mono text-xs text-slate-500 font-bold">
                        {item.num} // ROADMAP
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border ${item.badgeColor}`}>
                        {item.stage}
                      </span>
                    </div>

                    {/* Title & Icon */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`p-2.5 rounded-xl shrink-0 ${isDark ? 'bg-white/5 text-[#00F076]' : 'bg-slate-100 text-emerald-600'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-archivo text-xl font-bold uppercase leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.subtitle}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2 mb-6">
                      {item.bullets.map((b, i) => (
                        <li key={i} className={`flex items-start gap-2 text-xs font-mono leading-normal ${
                          isDark ? 'text-slate-300' : 'text-slate-600'
                        }`}>
                          <span className="text-[#00F076] font-bold">›</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Action: Vote & Demo */}
                  <div className={`pt-4 border-t flex items-center justify-between gap-3 ${
                    isDark ? 'border-white/10' : 'border-slate-100'
                  }`}>
                    <button
                      onClick={() => handleVote(item.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                        userVoted
                          ? 'bg-[#00F076] text-black shadow-sm'
                          : isDark
                            ? 'bg-white/5 text-slate-300 hover:bg-white/10'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <Vote className="w-3.5 h-3.5" />
                      <span>{userVoted ? 'Voted' : 'Upvote'}</span>
                      <span className="opacity-60 font-normal">({votes[item.id]})</span>
                    </button>

                    {item.demoLink && (
                      <a
                        href={item.demoLink}
                        className="text-xs font-mono text-[#00F076] hover:underline flex items-center gap-1 font-semibold"
                      >
                        <span>Interactive Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </ThreeDCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
