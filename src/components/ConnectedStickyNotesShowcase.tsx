import React, { useState } from 'react';
import { 
  Sparkles, 
  Link2, 
  ArrowUpRight, 
  Layers, 
  FileText
} from 'lucide-react';
import { AppPalette, APP_REDIRECT_URL } from '../data/palettes';
import { ThreeDCard } from './ThreeDCard';

interface ConnectedStickyNotesShowcaseProps {
  activePalette?: AppPalette;
  isDark?: boolean;
}

export const ConnectedStickyNotesShowcase: React.FC<ConnectedStickyNotesShowcaseProps> = ({ isDark = true }) => {
  const [nodes] = useState([
    {
      id: 'node-1',
      title: 'Problem Framing',
      color: '#00F076',
      content: 'Thoughts get scattered across disconnected tools. Spatial visual clarity is essential.',
      x: 30,
      y: 40,
      linkedDoc: 'Spatial Architecture RFC'
    },
    {
      id: 'node-2',
      title: 'Excalidraw Engine',
      color: '#00E5FF',
      content: 'Hand-drawn architecture sketches, microservice topologies, and ER diagrams directly in notes.',
      x: 310,
      y: 35,
      linkedDoc: 'Excalidraw Design Spec'
    },
    {
      id: 'node-3',
      title: 'Connected Stickies',
      color: '#8B5CF6',
      content: 'Signature upcoming feature: drag visual cards and link directly to full long-form prose.',
      x: 170,
      y: 200,
      linkedDoc: 'Canvas Specification'
    },
    {
      id: 'node-4',
      title: 'Local-First Speed',
      color: '#F59E0B',
      content: 'Sub-millisecond disk writes with end-to-end encrypted multi-device handover.',
      x: 430,
      y: 210,
      linkedDoc: 'Sync Protocol Whitepaper'
    }
  ]);

  const [activeNodeId, setActiveNodeId] = useState<string>('node-3');
  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[2];

  return (
    <section 
      id="connected-notes" 
      className={`py-24 sm:py-32 relative border-t transition-colors duration-500 overflow-hidden ${
        isDark 
          ? 'bg-[#08090D] border-white/10 text-white' 
          : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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
                [ UPCOMING // VISUAL CANVAS ]
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold ${
                isDark ? 'bg-white/10 text-white' : 'bg-slate-200 text-slate-800'
              }`}>
                Coming Soon
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-archivo font-black tracking-tight leading-[0.95] uppercase">
              CONNECTED STICKIES.<br />
              <span className="text-[#00F076]">VISUAL CANVAS MEETS LONG-FORM.</span>
            </h2>

            <p className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Place sticky notes on an infinite spatial canvas and connect them directly to your full long-form notes. Move effortlessly from rapid, messy visual concept-mapping to structured deep writing.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#00F076] hover:bg-[#00d669] text-black font-archivo font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[#00F076]/20 transition-all hover:scale-105"
            >
              <span>Explore in Smriti</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3D Interactive Canvas Playground Container */}
        <ThreeDCard maxTilt={2}>
          <div className={`p-6 sm:p-8 rounded-3xl border shadow-2xl transition-colors ${
            isDark ? 'bg-[#131722] border-white/10' : 'bg-white border-slate-200'
          }`}>
            {/* Top Toolbar */}
            <div className={`flex items-center justify-between pb-4 mb-4 border-b text-xs font-mono ${
              isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-500'
            }`}>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00F076] animate-pulse" />
                <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Infinite Spatial Canvas</span>
                <span className="opacity-30">•</span>
                <span>Click any sticky to inspect linked deep note</span>
              </div>
              <span className={`px-2.5 py-0.5 rounded-full border ${
                isDark ? 'bg-[#0E1118] border-white/10 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}>
                Interactive Simulation
              </span>
            </div>

            {/* The Canvas Area */}
            <div className={`relative h-[380px] sm:h-[420px] rounded-2xl border overflow-hidden p-4 ${
              isDark ? 'bg-[#0E1118] border-white/10' : 'bg-slate-50 border-slate-200'
            }`}>
              {/* SVG Connecting Bezier Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00F076" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="lineGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.6" />
                  </linearGradient>
                </defs>

                <path
                  d="M 120 90 C 130 160, 190 170, 240 220"
                  stroke="url(#lineGrad1)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  fill="none"
                />
                <path
                  d="M 380 90 C 340 150, 310 180, 270 220"
                  stroke="url(#lineGrad2)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  fill="none"
                />
                <path
                  d="M 290 260 C 350 260, 390 250, 440 250"
                  stroke="url(#lineGrad3)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  fill="none"
                />
              </svg>

              {/* 4 Draggable/Clickable Sticky Note Cards */}
              {nodes.map((node) => {
                const isSelected = activeNodeId === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveNodeId(node.id)}
                    style={{
                      transform: `translate(${node.x}px, ${node.y}px)`,
                      borderColor: isSelected ? node.color : undefined,
                    }}
                    className={`absolute z-10 w-52 sm:w-60 p-4 rounded-xl shadow-lg cursor-pointer transition-all ${
                      isSelected
                        ? isDark 
                          ? 'bg-[#181D2B] ring-2 ring-offset-2 ring-offset-[#0E1118] scale-105' 
                          : 'bg-white ring-2 ring-offset-2 ring-offset-slate-100 scale-105'
                        : isDark
                          ? 'bg-[#131722]/90 border border-white/10 hover:border-white/30'
                          : 'bg-white/90 border border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: node.color }}
                        />
                        <span className="font-archivo font-bold text-xs uppercase tracking-tight">
                          {node.title}
                        </span>
                      </div>
                      <Link2 className="w-3.5 h-3.5 opacity-50" />
                    </div>

                    <p className={`text-[11px] font-sans leading-relaxed mb-3 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {node.content}
                    </p>

                    <div className={`pt-2 border-t flex items-center justify-between text-[10px] font-mono ${
                      isDark ? 'border-white/10 text-slate-400' : 'border-slate-100 text-slate-500'
                    }`}>
                      <span className="truncate">Linked: {node.linkedDoc}</span>
                      <span style={{ color: node.color }}>Open ↗</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Linked Note Inspector */}
            <div className={`mt-6 p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors ${
              isDark ? 'bg-[#0E1118] border-white/10' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-lg text-black font-bold shrink-0"
                  style={{ backgroundColor: activeNode.color }}
                >
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">
                    Connected Deep Document
                  </div>
                  <div className="font-archivo font-bold text-sm sm:text-base">
                    {activeNode.linkedDoc}.md
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">
                  Double-click card in canvas to enter full editor
                </span>
                <a
                  href={APP_REDIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono font-bold transition-colors"
                >
                  View Spec
                </a>
              </div>
            </div>
          </div>
        </ThreeDCard>
      </div>
    </section>
  );
};
