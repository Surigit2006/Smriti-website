import React, { useState } from 'react';
import { 
  Cloud, 
  LayoutTemplate, 
  PenTool, 
  Bot, 
  Sparkles, 
  Calendar, 
  Clock, 
  ArrowUpRight, 
  ShieldCheck, 
  Smartphone, 
  Laptop, 
  Tablet,
  CheckCircle,
  HelpCircle,
  Vote
} from 'lucide-react';

interface RoadmapSectionProps {
  onOpenWaitlist: () => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ onOpenWaitlist }) => {
  // Allow visitors to upvote roadmap items!
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
      title: 'Cloud sync',
      subtitle: 'Access your notes across devices and keep your work up to date.',
      status: 'Coming soon',
      stage: 'In Development',
      badgeColor: 'text-sky-400 bg-sky-950/80 border-sky-500/30',
      icon: Cloud,
      image: '/images/cloud-sync.jpg',
      fallbackImage: 'https://images.openai.com/static-rsc-4/MNpAPxlWX2wLpVubT8YHNTladvboH1me8dYTNQPrNEAd5UX30xFQD3hTHgZmsoPRQ4JivssipDhiBYVxYZKDyiFLegFKCb7Pv2tdUYpykXSRFnezvOyS5Jch-xH9ndwcKtlECem7UBP-1hUBr8jJJUwSu18ZTZRS-ae-9WwmtFY?purpose=inline',
      bullets: [
        'End-to-end encrypted synchronization',
        'Instant multi-device handover (phone, tablet & desktop)',
        'Conflict-free offline-first database'
      ]
    },
    {
      id: 'templates',
      title: 'Ready-to-use templates',
      subtitle: 'Build timetables, daily planners, study schedules, project trackers, and more.',
      status: 'Coming soon',
      stage: 'In Design',
      badgeColor: 'text-amber-400 bg-amber-950/80 border-amber-500/30',
      icon: LayoutTemplate,
      image: '/images/templates-planner.jpg',
      fallbackImage: 'https://images.openai.com/static-rsc-4/AYmLB_rUtxeJg8mxtYwAJZW_v2jqxXI7h5kUNAP291Phrag6bUXsxGnowJxZX32BI-Nc3Bi_e4Ibglqa25wWeRKNr-YjgnJwcqRij9kuxfGDNIPcxwyN6JkuqT7ZhAHwZmPC-rCG7qLUBdG_SWumM-LkrMKfx_xd93zljjSLCFE?purpose=inline',
      bullets: [
        'Student timetables & Cornell study schedules',
        'Daily habit planners & sprint roadmaps',
        'One-click template marketplace and community sharing'
      ]
    },
    {
      id: 'sketching',
      title: 'Sketching and freehand drawing',
      subtitle: 'Draw diagrams, sketch ideas, and combine handwritten thinking with your notes.',
      status: 'Coming soon',
      stage: 'Prototyping',
      badgeColor: 'text-rose-400 bg-rose-950/80 border-rose-500/30',
      icon: PenTool,
      image: '/images/sketching-drawing.jpg',
      fallbackImage: 'https://images.openai.com/static-rsc-4/agnd-lvcajPI9h7FMiEBpZJGwkC_7nT_E15hh_MSPJSF4fCVKMUglzw1_hN_i75yEsnBzOgKcDw8EA3qdf3IR8Lm-BmAN3i5MI027WyjyKapIzSfJC41jjqa3Nv3ODiiShVGJCNzc8Fi2eTKIKezjBmyoBHBtrdKaGLiW5oDcpk?purpose=inline',
      bullets: [
        'Infinite canvas vector engine with zero latency',
        'Apple Pencil & stylus pressure/tilt sensitivity',
        'Mix handwritten ink directly with markdown typography'
      ]
    },
    {
      id: 'ai',
      title: 'AI-powered productivity',
      subtitle: 'Summarize notes, explore ideas, generate study materials, and turn information into actionable insights.',
      status: 'Coming soon',
      stage: 'Research & Testing',
      badgeColor: 'text-indigo-400 bg-indigo-950/80 border-indigo-500/30',
      icon: Bot,
      image: '/images/ai-productivity.jpg',
      fallbackImage: 'https://images.openai.com/static-rsc-4/DEcNRidAKW4G3Aj8QhjZ84qxJZG2xpENWMPc8uGgSpQu53ccZCToFSJy6upf_m-i4mDU0H8rN9AWbtQPQvGFcBu5mFgEhBq7l-1KYn9xZhS4BqTQcJ08KM9_AQjIMkjkNtgs4QqFd1cEMcQHuLkFZXKMmUnxtZdf6WBp6Wxy82k?purpose=inline',
      bullets: [
        'Instant summaries and key takeaways extraction',
        'Generate flashcards & spaced repetition quizzes',
        'Private AI running securely without training on your notes'
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-24 sm:py-32 relative bg-[#080c14] border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-sky-600/10 via-purple-600/10 to-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header (Exact Copy from User Specification) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Coming to Smriti • Future Horizons</span>
            <span className="bg-amber-950/80 text-amber-300 px-2 py-0.5 rounded text-[10px] font-mono border border-amber-500/30">
              Roadmap
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            More than a place to take notes.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            Connected sticky notes. Ready-made planners. Freehand sketching. AI assistance. Your notes, wherever you need them.
          </p>

          <p className="mt-2 text-xs text-slate-400">
            Note: These 4 upcoming capabilities are actively on our release roadmap and clearly separated from currently live features.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {roadmapItems.map((item) => {
            const Icon = item.icon;
            const userVoted = hasVoted[item.id];
            return (
              <div
                key={item.id}
                className="group relative rounded-3xl overflow-hidden bg-slate-900/70 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                {/* Top Media / Screenshot Frame */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                  {/* Status Badges */}
                  <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
                    <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border backdrop-blur-md ${item.badgeColor}`}>
                      {item.status}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-black/60 text-slate-300 border border-white/10 backdrop-blur-md">
                      {item.stage}
                    </span>
                  </div>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.src.includes('openai.com')) {
                        target.src = item.fallbackImage;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30 pointer-events-none" />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed mb-5">
                      {item.subtitle}
                    </p>

                    <div className="space-y-2 mb-6">
                      {item.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action / Upvote */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => handleVote(item.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        userVoted
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                      }`}
                    >
                      <Vote className="w-3.5 h-3.5" />
                      <span>{userVoted ? 'Prioritized!' : 'Upvote feature'}</span>
                      <span className="font-mono text-[11px] opacity-75">({votes[item.id]})</span>
                    </button>

                    <button
                      onClick={onOpenWaitlist}
                      className="text-xs text-slate-400 hover:text-white font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Get updates</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Roadmap Promise Box */}
        <div className="rounded-3xl p-8 bg-gradient-to-r from-sky-950/40 via-purple-950/30 to-slate-900 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">
              Want to test these features before public release?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Join the private beta tester circle. We ship weekly development builds of cloud sync, template builders, and the infinite sketching engine.
            </p>
          </div>

          <button
            onClick={onOpenWaitlist}
            className="px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 shadow-lg shadow-indigo-500/20 whitespace-nowrap transition-all hover:scale-105 shrink-0"
          >
            Apply for Beta Testing →
          </button>
        </div>
      </div>
    </section>
  );
};

