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
  activePalette: AppPalette;
}

export const ConnectedStickyNotesShowcase: React.FC<ConnectedStickyNotesShowcaseProps> = () => {
  const [nodes] = useState([
    {
      id: 'node-1',
      title: 'Problem Framing',
      color: '#F59E0B',
      content: 'Thoughts get scattered when trapped in 40 browser tabs. Spatial clarity is essential.',
      x: 30,
      y: 40,
      linkedDoc: 'Spatial Architecture RFC'
    },
    {
      id: 'node-2',
      title: 'Palette Engine',
      color: '#E87A90',
      content: '162 hand-tuned themes calibrated for mood, lighting conditions, and cognition.',
      x: 310,
      y: 35,
      linkedDoc: 'Visual Design Spec'
    },
    {
      id: 'node-3',
      title: 'Connected Stickies',
      color: '#0F4C81',
      content: 'Signature upcoming feature: drag visual cards and link directly to full long-form prose.',
      x: 170,
      y: 200,
      linkedDoc: 'Canvas Specification'
    },
    {
      id: 'node-4',
      title: 'Local-First Speed',
      color: '#1B4332',
      content: 'Sub-millisecond disk writes with end-to-end encrypted multi-device handover.',
      x: 430,
      y: 210,
      linkedDoc: 'Sync Protocol Whitepaper'
    }
  ]);

  const [activeNodeId, setActiveNodeId] = useState<string>('node-3');
  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[2];

  return (
    <section id="connected-notes" className="py-24 sm:py-32 relative bg-[#F5F0E8] border-t border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/[0.07]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#0F4C81] font-bold uppercase tracking-widest">
                [ UPCOMING // VISUAL CANVAS ]
              </span>
              <span className="dovv-chip text-[#F59E0B] text-xs py-0.5 font-bold">
                Coming Soon
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-archivo font-black text-[#141414] tracking-tight leading-[0.95] uppercase">
              CONNECTED STICKIES.<br />
              <span className="text-[#0F4C81]">VISUAL CANVAS MEETS LONG-FORM.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#666055] leading-relaxed max-w-2xl font-normal">
              Place sticky notes on an infinite visual canvas and connect them directly to your full notes. Move effortlessly from rapid, messy visual concept-mapping to structured deep writing.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#141414] hover:bg-[#0F4C81] text-white font-archivo font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              <span>Explore in Smriti</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3D Interactive Canvas Playground Container */}
        <ThreeDCard maxTilt={3}>
          <div className="dovv-card bg-white p-6 sm:p-8 rounded-3xl border border-black/[0.08] shadow-md">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/[0.06] text-xs font-mono text-[#666055]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0F4C81] animate-pulse" />
                <span className="font-bold text-[#141414]">Infinite Spatial Canvas</span>
                <span className="text-black/30">|</span>
                <span>Click any card to inspect linked deep note</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#FAF7F2] border border-black/[0.06]">
                Interactive Simulation
              </span>
            </div>

            {/* The Canvas Area */}
            <div className="relative h-[380px] sm:h-[420px] bg-[#FAF7F2] rounded-2xl border border-black/[0.06] overflow-hidden p-4">
              {/* SVG Connecting Bezier Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#0F4C81" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E87A90" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#0F4C81" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="lineGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0F4C81" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#1B4332" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                <path d="M 120 90 Q 180 140 230 220" fill="none" stroke="url(#lineGrad1)" strokeWidth="2.5" strokeDasharray="4 4" />
                <path d="M 360 85 Q 300 140 250 220" fill="none" stroke="url(#lineGrad2)" strokeWidth="2.5" strokeDasharray="4 4" />
                <path d="M 270 240 Q 370 230 470 230" fill="none" stroke="url(#lineGrad3)" strokeWidth="2.5" strokeDasharray="4 4" />
              </svg>

              {/* Floating Canvas Sticky Nodes */}
              {nodes.map((node) => {
                const isSelected = activeNodeId === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveNodeId(node.id)}
                    className={`absolute cursor-pointer p-4 rounded-2xl transition-all duration-200 select-none ${
                      isSelected
                        ? 'scale-105 shadow-xl ring-2 ring-[#0F4C81] z-20 bg-white'
                        : 'shadow-md hover:scale-102 z-10 bg-white/95'
                    }`}
                    style={{
                      left: `${node.x}px`,
                      top: `${node.y}px`,
                      width: '210px',
                      borderLeft: `4px solid ${node.color}`
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#141414] font-archivo uppercase">
                        {node.title}
                      </span>
                      <Link2 className="w-3.5 h-3.5 text-[#666055]" />
                    </div>
                    <p className="text-[11px] font-sans text-[#666055] leading-relaxed mb-3">
                      {node.content}
                    </p>
                    <div className="pt-2 border-t border-black/[0.06] flex items-center justify-between text-[10px] font-mono text-[#0F4C81]">
                      <span className="truncate max-w-[130px]">{node.linkedDoc}</span>
                      <span>→</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Linked Doc Inspector */}
            <div className="mt-4 p-4 rounded-2xl bg-[#FAF7F2] border border-black/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-black/[0.06] flex items-center justify-center">
                  <FileText className="w-4 h-4 text-[#0F4C81]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#141414]">
                    Connected Deep Note: <span className="text-[#0F4C81]">{activeNode.linkedDoc}</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#666055]">
                    Double-click node to open full markdown document
                  </div>
                </div>
              </div>

              <a
                href={APP_REDIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-[#141414] hover:text-[#0F4C81] flex items-center gap-1"
              >
                <span>Preview in Smriti</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </ThreeDCard>
      </div>
    </section>
  );
};
