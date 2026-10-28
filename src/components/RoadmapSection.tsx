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

export const RoadmapSection: React.FC = () => {
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
      badgeColor: 'text-[#0F4C81] bg-[#0F4C81]/10 border-[#0F4C81]/20',
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
      title: 'Ready-to-Use Templates',
      subtitle: 'Build timetables, daily planners, study schedules, project trackers, and engineering decision records.',
      stage: 'Prototyping',
      badgeColor: 'text-[#D97706] bg-[#F59E0B]/10 border-[#F59E0B]/20',
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
      badgeColor: 'text-[#0F4C81] bg-[#0F4C81]/10 border-[#0F4C81]/20',
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
      title: 'Sketching & Freehand Drawing',
      subtitle: 'Draw diagrams, sketch concepts, and combine handwritten stylus thinking with your markdown notes.',
      stage: 'In Research',
      badgeColor: 'text-[#E87A90] bg-[#E87A90]/10 border-[#E87A90]/20',
      icon: PenTool,
      bullets: [
        'Infinite canvas vector engine with zero stylus lag',
        'Pressure sensitivity & tilt detection for digital pencils',
        'Seamless integration of hand-drawn diagrams into markdown docs'
      ],
      demoLink: null
    },
    {
      id: 'ai',
      num: '05',
      title: 'AI-Powered Productivity',
      subtitle: 'Summarize lengthy notes, generate study materials, and turn fragmented thoughts into actionable insights.',
      stage: 'Exploration',
      badgeColor: 'text-[#1B4332] bg-[#1B4332]/10 border-[#1B4332]/20',
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
    <section id="roadmap" className="py-24 sm:py-32 relative bg-[#F5F0E8] border-t border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* DOVV Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/[0.07]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#0F4C81] font-bold uppercase tracking-widest">
                [ ROADMAP // THE FUTURE OF SMRITI ]
              </span>
              <span className="dovv-chip text-[#F59E0B] text-xs py-0.5 font-bold">
                Upcoming Milestones
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-archivo font-black text-[#141414] tracking-tight leading-[0.95] uppercase">
              COMING TO SMRITI.<br />
              <span className="text-[#0F4C81]">MORE THAN A PLACE TO TAKE NOTES.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#666055] leading-relaxed max-w-2xl font-normal">
              Intelligent autocomplete. Connected sticky notes. Ready-made planners. Freehand sketching. Your thoughts, amplified.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#141414] hover:bg-[#0F4C81] text-white font-archivo font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              <span>Launch Live App</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Roadmap Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {roadmapItems.map((item) => {
            const Icon = item.icon;
            const voted = hasVoted[item.id];
            return (
              <ThreeDCard key={item.id} maxTilt={4}>
                <div className="dovv-card bg-white p-6 sm:p-8 rounded-3xl border border-black/[0.08] shadow-md h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-[#666055]">
                        {item.num} // UPCOMING
                      </span>
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono border font-semibold ${item.badgeColor}`}>
                        {item.stage}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-black/[0.06] flex items-center justify-center text-[#141414]">
                        <Icon className="w-5 h-5 text-[#0F4C81]" />
                      </div>
                      <h3 className="font-archivo text-xl font-bold uppercase text-[#141414] leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm font-sans text-[#666055] leading-relaxed mb-6">
                      {item.subtitle}
                    </p>

                    <ul className="space-y-2 mb-8">
                      {item.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs font-mono text-[#141414]">
                          <span className="text-[#0F4C81] font-bold">✦</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Vote and Demo Links */}
                  <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleVote(item.id)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                        voted
                          ? 'bg-[#16c847]/15 text-[#16c847] border border-[#16c847]/30 font-bold'
                          : 'bg-[#FAF7F2] hover:bg-[#F0EAE1] text-[#141414] border border-black/[0.08]'
                      }`}
                    >
                      <Vote className="w-3.5 h-3.5 text-[#0F4C81]" />
                      <span>{voted ? 'Upvoted!' : 'Vote'}</span>
                      <span className="text-black/40 font-mono">({votes[item.id]})</span>
                    </button>

                    {item.demoLink ? (
                      <a
                        href={item.demoLink}
                        className="text-xs font-mono font-bold text-[#0F4C81] hover:underline flex items-center gap-1"
                      >
                        <span>Try Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-[#666055]">Coming Soon</span>
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
