import React, { useState } from 'react';
import { 
  Cloud, 
  LayoutTemplate, 
  PenTool, 
  Bot, 
  ArrowUpRight, 
  Vote
} from 'lucide-react';
import { APP_REDIRECT_URL, CREATOR_NAME } from '../data/palettes';
import { ThreeDCard } from './ThreeDCard';

interface RoadmapSectionProps {
  onOpenWaitlist: () => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ onOpenWaitlist }) => {
  const [votes, setVotes] = useState<Record<string, number>>({
    'cloud-sync': 1420,
    'templates': 980,
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
      id: 'cloud-sync',
      num: '01',
      title: 'Cloud sync',
      subtitle: 'Access your notes across devices and keep your work up to date.',
      stage: 'In Development',
      badgeColor: 'text-sky-400 bg-sky-950/80 border-sky-500/30',
      icon: Cloud,
      image: '/images/cloud-sync.jpg',
      bullets: [
        'End-to-end encrypted synchronization',
        'Instant multi-device handover (phone, tablet & desktop)',
        'Conflict-free offline-first database'
      ]
    },
    {
      id: 'templates',
      num: '02',
      title: 'Ready-to-use templates',
      subtitle: 'Build timetables, daily planners, study schedules, project trackers, and more.',
      stage: 'In Design',
      badgeColor: 'text-[#facc15] bg-amber-950/80 border-amber-500/30',
      icon: LayoutTemplate,
      image: '/images/templates-planner.jpg',
      bullets: [
        'Student timetables & Cornell study schedules',
        'Daily habit planners & sprint roadmaps',
        'One-click template marketplace and community sharing'
      ]
    },
    {
      id: 'sketching',
      num: '03',
      title: 'Sketching & freehand drawing',
      subtitle: 'Draw diagrams, sketch ideas, and combine handwritten thinking with your notes.',
      stage: 'Prototyping',
      badgeColor: 'text-[#ed4a1c] bg-rose-950/80 border-rose-500/30',
      icon: PenTool,
      image: '/images/sketching-drawing.jpg',
      bullets: [
        'Infinite canvas vector engine with zero latency',
        'Apple Pencil & stylus pressure/tilt sensitivity',
        'Mix handwritten ink directly with markdown typography'
      ]
    },
    {
      id: 'ai',
      num: '04',
      title: 'AI-powered productivity',
      subtitle: 'Summarize notes, explore ideas, generate study materials, and turn information into actionable insights.',
      stage: 'Research & Testing',
      badgeColor: 'text-[#c6f432] bg-emerald-950/80 border-emerald-500/30',
      icon: Bot,
      image: '/images/ai-productivity.jpg',
      bullets: [
        'Instant summaries and key takeaways extraction',
        'Generate flashcards & spaced repetition quizzes',
        'Private AI running securely without training on your notes'
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-24 sm:py-32 relative bg-[#05080c] border-t border-[#1c1c1c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* DOVV Section Header (Exact Copy from User Specification) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#1c1c1c]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#ed4a1c] font-bold uppercase tracking-widest">
                [ 05 // COMING TO SMRITI • ROADMAP ]
              </span>
              <span className="dovv-chip text-[#c6f432] text-xs py-0.5">
                Upcoming Horizon
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-archivo font-black text-white tracking-tight leading-[0.95] uppercase">
              MORE THAN A PLACE<br />
              <span className="text-[#ed4a1c]">TO TAKE NOTES.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Connected sticky notes. Ready-made planners. Freehand sketching. AI assistance. Your notes, wherever you need them.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenWaitlist}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#111622] hover:bg-[#1a2233] border border-[#222] text-white font-mono text-xs uppercase tracking-wider transition-all hover:scale-105"
            >
              <span>Join Alpha Circle</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Cards Grid in DOVV Studio Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {roadmapItems.map((item) => {
            const Icon = item.icon;
            const userVoted = hasVoted[item.id];
            return (
              <ThreeDCard key={item.id} maxTilt={8} scale={1.01}>
                <div className="dovv-card p-0 rounded-[32px] overflow-hidden flex flex-col justify-between h-full">
                  {/* Top Image Frame */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-black dovv-media rounded-t-[32px] rounded-b-none">
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                      <span className="dovv-chip text-[#c6f432] font-mono text-xs py-1">
                        {item.num} // COMING SOON
                      </span>
                      <span className="dovv-chip text-white font-mono text-xs py-1">
                        {item.stage}
                      </span>
                    </div>

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d121c] via-transparent to-black/30 pointer-events-none" />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-xl bg-[#1c1c1c] border border-[#2b2b2b] flex items-center justify-center text-[#ed4a1c]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-archivo text-2xl font-black text-white uppercase tracking-tight">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
                        {item.subtitle}
                      </p>

                      <div className="space-y-2 mb-6 font-mono text-xs text-slate-400">
                        {item.bullets.map((bullet, idx) => (
                          <div key={idx} className="flex items-center gap-2.5">
                            <span className="text-[#ed4a1c] font-black">✦</span>
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Voting Action */}
                    <div className="pt-4 border-t border-[#1c1c1c] flex items-center justify-between">
                      <button
                        onClick={() => handleVote(item.id)}
                        className={`dovv-chip text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                          userVoted ? 'bg-[#c6f432] text-black border-transparent' : 'hover:border-white'
                        }`}
                      >
                        <Vote className="w-3.5 h-3.5" />
                        <span>{userVoted ? 'Voted!' : 'Upvote Feature'}</span>
                        <span className="opacity-75">({votes[item.id]})</span>
                      </button>

                      <button
                        onClick={onOpenWaitlist}
                        className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
                      >
                        <span>Get Updates</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
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
