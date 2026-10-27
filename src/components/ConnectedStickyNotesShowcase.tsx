import React, { useState } from 'react';
import { 
  Network, 
  Sparkles, 
  Link2, 
  ArrowUpRight, 
  Layers, 
  Palette,
  Compass,
  ExternalLink
} from 'lucide-react';
import { ColorPalette, APP_REDIRECT_URL, CREATOR_NAME } from '../data/palettes';
import { ThreeDCard } from './ThreeDCard';

interface ConnectedStickyNotesShowcaseProps {
  activePalette: ColorPalette;
  onOpenWaitlist: () => void;
}

export const ConnectedStickyNotesShowcase: React.FC<ConnectedStickyNotesShowcaseProps> = ({
  activePalette,
  onOpenWaitlist,
}) => {
  const [nodes, setNodes] = useState([
    {
      id: 'node-1',
      title: 'Problem Framing',
      color: '#f59e0b',
      content: 'Notes get lost in infinite tab clutter. We need spatial clarity.',
      x: 35,
      y: 40,
      linkedDoc: 'Architecture RFC #14'
    },
    {
      id: 'node-2',
      title: '162-Palette Engine',
      color: '#ec4899',
      content: 'Pink Riot, Cobalt Block, Mint Slab, Lilac Slap & custom hex codes.',
      x: 300,
      y: 35,
      linkedDoc: 'Official Colorways Design Spec'
    },
    {
      id: 'node-3',
      title: 'Connected Sticky Notes',
      color: '#8b5cf6',
      content: 'Signature upcoming feature: drag stickies and connect to deep text.',
      x: 160,
      y: 200,
      linkedDoc: 'Visual Canvas Spec 2027'
    },
    {
      id: 'node-4',
      title: 'Multi-device Sync',
      color: '#06b6d4',
      content: 'Local-first offline speed with peer-to-peer cloud handover.',
      x: 420,
      y: 210,
      linkedDoc: 'Sync Protocol Whitepaper'
    }
  ]);

  const [activeNodeId, setActiveNodeId] = useState<string>('node-3');

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[2];

  return (
    <section id="connected-notes" className="py-24 sm:py-32 relative bg-[#070b12] overflow-hidden">
      {/* 3D background ambient light */}
      <div 
        className="absolute bottom-1/4 right-1/3 w-[850px] h-[850px] rounded-full blur-[200px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8b5cf6 0%, #ec4899 50%, transparent 70%)' }}
      />
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Signature Upcoming Feature • Coming to Smriti</span>
            <span className="bg-purple-950/80 text-purple-300 px-2 py-0.5 rounded text-[10px] font-mono border border-purple-500/30">
              Coming Soon
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Connected sticky notes. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
              Visual thinking meets deep writing.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Place sticky notes on an interactive 3D visual canvas and connect them directly to your full notes. Move effortlessly from rapid, messy visual concept-mapping to rigorous long-form prose.
          </p>
        </div>

        {/* 3D Interactive Canvas Playground Container */}
        <div className="max-w-5xl mx-auto mb-16">
          <ThreeDCard maxTilt={10} className="w-full">
            <div className="rounded-3xl border border-purple-500/30 bg-slate-900/90 shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Canvas Controls Header */}
              <div className="p-4 bg-slate-950/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-purple-400 animate-pulse shadow-sm" />
                  <span className="font-extrabold text-white text-sm">3D Relational Knowledge Canvas</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 font-mono text-[11px]">
                  <span className="text-amber-300">Tilt mouse for 3D perspective</span>
                  <span>•</span>
                  <span>Click card to inspect</span>
                </div>
              </div>

              {/* The Visual 2D/3D Canvas Area with Connecting Lines */}
              <div className="relative h-[380px] sm:h-[420px] bg-[#090d18] bg-dot-pattern overflow-hidden p-4 select-none">
                {/* SVG Connector Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {/* Line 1: Node 1 to Node 3 */}
                  <path
                    d="M 120 100 C 120 160, 180 160, 200 200"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                    className="opacity-70"
                  />
                  {/* Line 2: Node 2 to Node 3 */}
                  <path
                    d="M 360 100 C 330 160, 260 160, 230 200"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2.5"
                    className="opacity-80"
                  />
                  {/* Line 3: Node 3 to Node 4 */}
                  <path
                    d="M 280 240 C 340 240, 380 240, 420 240"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="2.5"
                    strokeDasharray="3 3"
                    className="opacity-80"
                  />
                </svg>

                {/* Render interactive cards */}
                {nodes.map((node) => {
                  const isSelected = activeNodeId === node.id;
                  return (
                    <div
                      key={node.id}
                      onClick={() => setActiveNodeId(node.id)}
                      className={`absolute w-44 sm:w-48 p-3.5 rounded-2xl cursor-pointer transition-all duration-300 shadow-xl border ${
                        isSelected
                          ? 'ring-2 ring-white scale-105 z-20 shadow-purple-500/40 translate-z-10'
                          : 'opacity-90 hover:opacity-100 hover:scale-102 z-10'
                      }`}
                      style={{
                        left: `${node.x}px`,
                        top: `${node.y}px`,
                        backgroundColor: '#131a2c',
                        borderColor: node.color,
                        boxShadow: isSelected ? `0 12px 30px -5px ${node.color}60` : 'none',
                      }}
                    >
                      <div className="flex items-center justify-between gap-1 mb-1.5">
                        <span 
                          className="w-2.5 h-2.5 rounded-full shadow-sm" 
                          style={{ backgroundColor: node.color }} 
                        />
                        <span className="text-[11px] font-bold text-white truncate">
                          {node.title}
                        </span>
                        <Link2 className="w-3.5 h-3.5 opacity-60 text-slate-300" />
                      </div>
                      <p className="text-xs text-slate-300 leading-snug line-clamp-2">
                        {node.content}
                      </p>
                      <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                        <span>Markdown linked</span>
                        <span style={{ color: node.color }} className="font-bold">Inspect →</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Inspector Pane for Active Card */}
              <div className="p-4 bg-slate-950 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">Full Note Connected:</span>
                    <span className="text-purple-300 font-mono underline font-semibold">
                      {activeNode.linkedDoc}
                    </span>
                  </div>
                  <div className="text-slate-400 text-[11px] mt-0.5">
                    Clicking this sticky note expands the full document with zero tab switching.
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={APP_REDIRECT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold text-xs shadow-md whitespace-nowrap transition-all flex items-center gap-1.5"
                  >
                    <span>Try in app.smritinotes.site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </ThreeDCard>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-purple-500/20 backdrop-blur-md hover:border-purple-500/40 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
              <Network className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Relational Canvas</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Drop ideas onto an infinite 3D spatial canvas. Draw semantic connector lines between cards to visually explore relationships.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/60 border border-pink-500/20 backdrop-blur-md hover:border-pink-500/40 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-pink-500/20 text-pink-400 flex items-center justify-center mb-4">
              <Link2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Deep Note Expansion</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Every sticky card is a gateway to a complete, full-length document. Click any sticky to unfold the full markdown editor.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/60 border border-amber-500/20 backdrop-blur-md hover:border-amber-500/40 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Color-Coded Meaning</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Leverage Smriti's 162 color palettes across your stickies. Assign distinct tints for questions, evidence, and actions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
