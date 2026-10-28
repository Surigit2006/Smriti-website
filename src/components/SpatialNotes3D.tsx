import React, { useState, useRef, MouseEvent } from 'react';
import { 
  PenTool, 
  Layers, 
  Sparkles, 
  ArrowUpRight, 
  Move, 
  Rotate3d, 
  FileText, 
  Check, 
  ExternalLink,
  Server,
  Code
} from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { APP_REDIRECT_URL } from '../data/palettes';

interface SpatialNotes3DProps {
  isDark?: boolean;
}

export const SpatialNotes3D: React.FC<SpatialNotes3DProps> = ({ isDark = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNoteId, setActiveNoteId] = useState<string | null>('note-excalidraw');
  const [isExploded, setIsExploded] = useState(true);

  // Mouse position values for smooth 3D stage rotation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180, mass: 0.6 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Map mouse coordinates to degrees of rotation for the whole 3D stage
  const stageRotateX = useTransform(smoothMouseY, [-0.5, 0.5], [14, -14]);
  const stageRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-18, 18]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="spatial-notes" className={`py-24 sm:py-32 relative border-t overflow-hidden select-none transition-colors duration-300 ${
      isDark ? 'bg-[#08090D] text-white border-white/10' : 'bg-[#F8FAFC] text-slate-900 border-black/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/10 dark:border-white/10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#00F076] font-bold uppercase tracking-widest">
                [ 02 // SPATIAL 3D MOTION ENGINE ]
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border ${
                isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-100 border-black/10 text-slate-800'
              }`}>
                Unified Spatial Architecture
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-archivo font-black tracking-tight leading-[0.95] uppercase">
              TANGIBLE DIGITAL CANVAS.<br />
              <span className="text-[#00F076]">3D SPATIAL NOTES RENDERS.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg opacity-70 leading-relaxed max-w-2xl font-normal">
              Move your mouse to tilt the 3D spatial stage. Experience technical specs, Excalidraw blueprints, and colorful sticky notes rendered with real physical depth and reactive paper physics.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsExploded(!isExploded)}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono font-bold shadow-xs transition-all border ${
                isDark ? 'bg-[#131722] hover:bg-[#1A202E] border-white/10 text-white' : 'bg-white hover:bg-slate-50 border-black/10 text-slate-900'
              }`}
            >
              <Rotate3d className="w-4 h-4 text-[#00F076]" />
              <span>{isExploded ? 'Group Stack' : 'Explode 3D Layers'}</span>
            </button>

            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00F076] hover:bg-[#00d669] text-black font-archivo font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              <span>Launch Smriti</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3D Spatial Interactive Stage */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`relative w-full h-[580px] sm:h-[680px] rounded-3xl border shadow-2xl overflow-hidden flex items-center justify-center p-4 cursor-grab active:cursor-grabbing ${
            isDark ? 'bg-[#0E1118] border-white/10' : 'bg-slate-100 border-black/10'
          }`}
          style={{ perspective: '1400px' }}
        >
          {/* Subtle Ambient Isometric Grid Background */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: isDark 
                ? 'radial-gradient(#FFFFFF 0.75px, transparent 0.75px)' 
                : 'radial-gradient(#000000 0.75px, transparent 0.75px)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Mouse Coordinates Badge */}
          <div className={`absolute top-5 left-5 z-30 flex items-center gap-2 backdrop-blur-md px-3 py-1.5 rounded-full border text-[11px] font-mono shadow-xs ${
            isDark ? 'bg-[#131722]/80 border-white/10 text-slate-300' : 'bg-white/80 border-black/10 text-slate-700'
          }`}>
            <span className="w-2 h-2 rounded-full bg-[#00F076] animate-pulse" />
            <span>Interactive 3D Stage • Move Mouse to Tilt</span>
          </div>

          {/* Main 3D Container reacting to mouse parallax */}
          <motion.div
            className="relative w-full max-w-4xl h-full flex items-center justify-center"
            style={{
              rotateX: stageRotateX,
              rotateY: stageRotateY,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* NOTE 1: Excalidraw System Design Blueprint */}
            <motion.div
              onClick={() => setActiveNoteId('note-excalidraw')}
              className={`absolute cursor-pointer rounded-2xl p-6 border transition-all duration-300 ${
                isDark ? 'bg-[#131722] text-white' : 'bg-white text-slate-900'
              } ${
                activeNoteId === 'note-excalidraw'
                  ? 'ring-2 ring-[#00F076] border-transparent'
                  : 'border-white/10 hover:border-white/30'
              }`}
              style={{
                width: '320px',
                height: '240px',
                transformStyle: 'preserve-3d',
                transform: isExploded
                  ? `translate3d(-140px, -70px, ${activeNoteId === 'note-excalidraw' ? '140px' : '90px'}) rotate(-5deg)`
                  : 'translate3d(0, 0, 40px)',
                boxShadow: isDark 
                  ? '0 20px 50px -10px rgba(0, 240, 118, 0.15), 0 8px 24px rgba(0,0,0,0.5)'
                  : '0 20px 40px -10px rgba(0,0,0,0.1)'
              }}
            >
              {/* Metallic Binder Clip */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 rounded-t-md bg-[#2A3042] border border-white/20 shadow-xs flex items-center justify-center">
                <div className="w-3 h-1 bg-white/40 rounded-full" />
              </div>

              <div className="flex items-center justify-between pb-2 mb-3 border-b border-black/10 dark:border-white/10">
                <div className="flex items-center gap-1.5">
                  <Server className="w-4 h-4 text-[#00F076]" />
                  <span className="text-xs font-bold">Excalidraw Blueprint</span>
                </div>
                <span className="text-[9px] font-mono uppercase bg-[#00F076]/10 text-[#00F076] px-1.5 py-0.5 rounded font-bold">
                  Vector
                </span>
              </div>

              {/* Hand-drawn SVG architecture snippet */}
              <svg viewBox="0 0 260 120" className="w-full h-auto">
                <rect x="10" y="20" width="65" height="40" rx="8" fill={isDark ? '#08090D' : '#F8FAFC'} stroke="#00F076" strokeWidth="2" strokeDasharray="3 1" />
                <text x="42" y="44" textAnchor="middle" fontSize="9" fontWeight="bold" fill={isDark ? '#FFFFFF' : '#000000'}>Gateway</text>

                <path d="M 75 40 L 115 40" stroke="#00F076" strokeWidth="2" />

                <rect x="120" y="10" width="65" height="35" rx="6" fill={isDark ? '#08090D' : '#F8FAFC'} stroke="#00E5FF" strokeWidth="2" />
                <text x="152" y="32" textAnchor="middle" fontSize="9" fontWeight="bold" fill={isDark ? '#FFFFFF' : '#000000'}>Auth Svc</text>

                <rect x="120" y="60" width="65" height="35" rx="6" fill={isDark ? '#08090D' : '#F8FAFC'} stroke="#F59E0B" strokeWidth="2" />
                <text x="152" y="82" textAnchor="middle" fontSize="9" fontWeight="bold" fill={isDark ? '#FFFFFF' : '#000000'}>Postgres</text>

                <path d="M 75 45 Q 95 75 115 75" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
              </svg>

              <div className="mt-2 text-[10px] font-mono opacity-70 flex items-center justify-between">
                <span>RFC-042 System Topology</span>
                <span className="text-[#00F076] font-bold">Zoom 100%</span>
              </div>
            </motion.div>

            {/* NOTE 2: The Markdown Prose Sheet */}
            <motion.div
              onClick={() => setActiveNoteId('note-markdown')}
              className={`absolute cursor-pointer rounded-2xl p-6 border transition-all duration-300 ${
                isDark ? 'bg-[#131722] text-white' : 'bg-white text-slate-900'
              } ${
                activeNoteId === 'note-markdown'
                  ? 'ring-2 ring-[#00F076] border-transparent'
                  : 'border-white/10 hover:border-white/30'
              }`}
              style={{
                width: '340px',
                height: '260px',
                transformStyle: 'preserve-3d',
                transform: isExploded
                  ? `translate3d(130px, -50px, ${activeNoteId === 'note-markdown' ? '150px' : '50px'}) rotate(6deg)`
                  : 'translate3d(10px, 10px, 20px)',
                boxShadow: '0 25px 45px -10px rgba(0, 0, 0, 0.4)'
              }}
            >
              {/* Neon Washi Tape Strip on Corner */}
              <div 
                className="absolute -top-3 -right-3 w-16 h-6 bg-[#00F076]/40 backdrop-blur-xs border border-white/40 shadow-xs rotate-12 pointer-events-none"
              />

              <div className="flex items-center justify-between pb-2 mb-3 border-b border-black/10 dark:border-white/10">
                <div className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#00F076]" />
                  <span className="text-xs font-bold">Deep Craft Writing</span>
                </div>
                <span className="text-[10px] font-mono opacity-60">Oct 28</span>
              </div>

              <div className="space-y-2 text-xs font-sans leading-relaxed">
                <p className="font-semibold text-sm"># Principles of Focus</p>
                <p className="opacity-70 text-[11px]">
                  When friction drops to zero, deep work becomes effortless.
                </p>
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center gap-2 text-[11px] font-mono">
                    <Check className="w-3.5 h-3.5 text-[#00F076]" />
                    <span className="line-through opacity-50">Ship Excalidraw integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-mono">
                    <Check className="w-3.5 h-3.5 text-[#00F076]" />
                    <span className="line-through opacity-50">162 colorways engine</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-mono">
                    <div className="w-3.5 h-3.5 rounded border border-white/30" />
                    <span>Connected sticky notes canvas</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-black/10 dark:border-white/10 text-[10px] font-mono opacity-70 flex items-center justify-between">
                <span>Local-first IndexedDB</span>
                <span className="text-[#00F076] font-semibold">● Auto-saved</span>
              </div>
            </motion.div>

            {/* NOTE 3: The Golden Solar Artwork Emblem Card */}
            <motion.div
              onClick={() => setActiveNoteId('note-artwork')}
              className={`absolute cursor-pointer rounded-2xl p-3 border transition-all duration-300 ${
                isDark ? 'bg-[#131722] text-white' : 'bg-white text-slate-900'
              } ${
                activeNoteId === 'note-artwork'
                  ? 'ring-2 ring-[#F59E0B] border-transparent'
                  : 'border-white/10 hover:border-white/30'
              }`}
              style={{
                width: '180px',
                height: '240px',
                transformStyle: 'preserve-3d',
                transform: isExploded
                  ? `translate3d(-200px, 120px, ${activeNoteId === 'note-artwork' ? '180px' : '120px'}) rotate(-10deg)`
                  : 'translate3d(-20px, 20px, 80px)',
                boxShadow: '0 30px 60px -15px rgba(245, 158, 11, 0.3)'
              }}
            >
              {/* Photo Frame */}
              <div className="w-full h-40 rounded-xl overflow-hidden bg-black/40 relative border border-white/10">
                <img
                  src="/images/smriti-icon.jpg"
                  alt="Smriti Artwork"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="pt-2.5 text-center">
                <div className="text-[11px] font-anton tracking-wide uppercase">
                  SMRITI 2.0 EMBLEM
                </div>
                <div className="text-[9px] font-mono opacity-60">
                  Solar Halo & Peacock
                </div>
              </div>
            </motion.div>

            {/* NOTE 4: The 162-Colorway Neon Sticky Note */}
            <motion.div
              onClick={() => setActiveNoteId('note-sticky')}
              className={`absolute cursor-pointer rounded-2xl p-5 border transition-all duration-300 ${
                activeNoteId === 'note-sticky'
                  ? 'ring-2 ring-white border-transparent'
                  : 'border-black/20 hover:border-black/40'
              }`}
              style={{
                width: '210px',
                height: '190px',
                background: '#FF7AB6', // Neon Pink tone
                color: '#08090D',
                transformStyle: 'preserve-3d',
                transform: isExploded
                  ? `translate3d(40px, 130px, ${activeNoteId === 'note-sticky' ? '160px' : '100px'}) rotate(4deg)`
                  : 'translate3d(30px, -10px, 60px)',
                boxShadow: '0 25px 50px -12px rgba(255, 122, 182, 0.4)'
              }}
            >
              {/* Pushpin at top */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-white shadow-xs" />

              <div className="text-[10px] font-mono uppercase tracking-wider font-bold mb-2 opacity-70">
                COLORWAY: PINK RIOT
              </div>
              <p className="text-xs font-sans font-bold leading-relaxed mb-3">
                "Workspace recoloring with 162 hand-tuned themes across 13 mood categories."
              </p>
              <div className="pt-2 border-t border-black/10 flex items-center justify-between text-[10px] font-mono">
                <span>10 Tokens</span>
                <span className="font-bold">#FF7AB6</span>
              </div>
            </motion.div>

            {/* NOTE 5: Autocomplete Inline Code Card */}
            <motion.div
              onClick={() => setActiveNoteId('note-code')}
              className={`absolute cursor-pointer rounded-2xl bg-[#08090D] text-white p-5 border transition-all duration-300 ${
                activeNoteId === 'note-code'
                  ? 'ring-2 ring-[#00F076] border-transparent'
                  : 'border-white/10 hover:border-white/30'
              }`}
              style={{
                width: '260px',
                height: '180px',
                transformStyle: 'preserve-3d',
                transform: isExploded
                  ? `translate3d(240px, 100px, ${activeNoteId === 'note-code' ? '150px' : '70px'}) rotate(-3deg)`
                  : 'translate3d(50px, 20px, 10px)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)'
              }}
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-white">
                  <Code className="w-3.5 h-3.5 text-[#00F076]" />
                  <span>Inline Tab ⇥</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#00F076] animate-pulse" />
              </div>

              <div className="font-mono text-[11px] leading-relaxed opacity-90">
                <span className="text-[#00E5FF]">const</span> thought = await{' '}
                <span className="text-[#00F076]">anticipateNext()</span>;
                <div className="mt-1 opacity-50 italic">
                  // Press Tab ⇥ to complete
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono opacity-50">
                <span>Local AI Model</span>
                <span className="text-[#00F076]">Semantic</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Interactive Guidance Pill */}
          <div className={`absolute bottom-5 z-30 flex items-center gap-3 backdrop-blur-md px-4 py-2 rounded-full border text-xs font-mono shadow-sm ${
            isDark ? 'bg-[#131722]/90 border-white/10 text-white' : 'bg-white/90 border-black/10 text-slate-900'
          }`}>
            <Move className="w-3.5 h-3.5 text-[#00F076]" />
            <span>Click any 3D note card to bring it forward in space</span>
          </div>
        </div>
      </div>
    </section>
  );
};
