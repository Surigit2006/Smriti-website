import React, { useState } from 'react';
import { 
  PenTool, 
  Square, 
  Circle, 
  Diamond, 
  ArrowRight, 
  Move, 
  Type, 
  Download, 
  Server, 
  Database, 
  Smartphone, 
  GitBranch, 
  ArrowUpRight, 
  FileCode2,
  Workflow
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { APP_REDIRECT_URL } from '../data/palettes';
import { ThreeDCard } from './ThreeDCard';

interface ExcalidrawTemplate {
  id: string;
  name: string;
  category: string;
  desc: string;
  icon: any;
  accent: string;
  diagramType: 'microservices' | 'erd' | 'wireframe' | 'statemachine' | 'authflow';
}

const EXCALIDRAW_TEMPLATES: ExcalidrawTemplate[] = [
  {
    id: 'microservices',
    name: 'Microservices & Cloud Topology',
    category: 'System Design',
    desc: 'API Gateway, Auth Service, Event Bus, Redis Cache, and PostgreSQL Cluster.',
    icon: Server,
    accent: '#00F076',
    diagramType: 'microservices'
  },
  {
    id: 'erd',
    name: 'Database Schema & ERD Model',
    category: 'Data Modeling',
    desc: 'Relational entity tables with primary keys, foreign keys, and 1-to-N relationships.',
    icon: Database,
    accent: '#00E5FF',
    diagramType: 'erd'
  },
  {
    id: 'authflow',
    name: 'OAuth2 & JWT Auth Pipeline',
    category: 'Security Architecture',
    desc: 'Client token request, identity provider verification, and downstream API gateway.',
    icon: Workflow,
    accent: '#F59E0B',
    diagramType: 'authflow'
  },
  {
    id: 'wireframe',
    name: 'UI/UX Wireframing & App Mockup',
    category: 'Interface Design',
    desc: 'Rapid low-fidelity screen layouts, navigation headers, and component cards.',
    icon: Smartphone,
    accent: '#E87A90',
    diagramType: 'wireframe'
  },
  {
    id: 'statemachine',
    name: 'Pipeline & State Machine Flow',
    category: 'Workflow Engineering',
    desc: 'State transitions, retry loops, conditional branches, and terminal states.',
    icon: GitBranch,
    accent: '#7C3AED',
    diagramType: 'statemachine'
  }
];

const CAPABILITIES = [
  {
    icon: Server,
    title: 'System Architecture',
    desc: 'Map out distributed services, load balancers, messaging queues, and caching layers with hand-drawn clarity.'
  },
  {
    icon: Workflow,
    title: 'Smart Arrow Binding',
    desc: 'Connect components with intelligent routing arrows that stay locked to nodes when repositioning shapes.'
  },
  {
    icon: Database,
    title: 'Entity Relationship (ERD)',
    desc: 'Model complex SQL schemas, foreign keys, and document collections directly alongside technical RFC specs.'
  },
  {
    icon: PenTool,
    title: '162-Palette Integration',
    desc: 'Apply any of Smriti’s 162 hand-tuned colorways to sketch strokes, hachure fills, and highlights.'
  },
  {
    icon: FileCode2,
    title: 'Embedded in Markdown',
    desc: 'Live Excalidraw canvases live directly inside your notes. Double-click to sketch, read as clean prose.'
  },
  {
    icon: Download,
    title: 'Zero Latency & Export',
    desc: '100% local-first canvas execution. Export high-res SVGs, PNGs, or raw Excalidraw JSON with zero cloud delay.'
  }
];

interface ExcalidrawShowcaseProps {
  isDark?: boolean;
}

export const ExcalidrawShowcase: React.FC<ExcalidrawShowcaseProps> = ({ isDark = true }) => {
  const [activeTemplateId, setActiveTemplateId] = useState(EXCALIDRAW_TEMPLATES[0].id);
  const [selectedTool, setSelectedTool] = useState<'select' | 'rect' | 'diamond' | 'arrow' | 'pen' | 'text'>('arrow');
  const [strokeColor, setStrokeColor] = useState('#00F076');

  const activeTemplate = EXCALIDRAW_TEMPLATES.find((t) => t.id === activeTemplateId) || EXCALIDRAW_TEMPLATES[0];

  return (
    <section id="excalidraw" className={`py-24 sm:py-32 relative border-t overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#0E1118] text-white border-white/10' : 'bg-white text-slate-900 border-black/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/10 dark:border-white/10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#00F076] font-bold uppercase tracking-widest">
                [ 03 // EXCALIDRAW WHITEBOARD & SYSTEM DESIGN ]
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border ${
                isDark ? 'bg-[#00F076]/10 text-[#00F076] border-[#00F076]/30' : 'bg-emerald-50 text-[#008060] border-emerald-200'
              }`}>
                Infinite Vector Canvas
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-archivo font-black tracking-tight leading-[0.95] uppercase">
              THINK IN SHAPES & CODE.<br />
              <span className="text-[#00F076]">EXCALIDRAW SYSTEM DESIGN.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg opacity-70 leading-relaxed max-w-2xl font-normal">
              Map out distributed microservices, design database schemas, model event-driven pipelines, and sketch UI wireframes — powered by an embedded Excalidraw infinite whiteboard directly beside your notes.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#00F076] hover:bg-[#00d669] text-black font-archivo font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              <span>Sketch in Smriti Notes</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <ThreeDCard key={i} maxTilt={3}>
                <div className={`p-6 rounded-3xl border shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between ${
                  isDark ? 'bg-[#131722] border-white/10' : 'bg-slate-50 border-black/10'
                }`}>
                  <div>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                      isDark ? 'bg-white/5 text-[#00F076]' : 'bg-white text-[#008060] border border-black/10'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-archivo text-lg font-bold uppercase mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm opacity-70 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-black/10 dark:border-white/10 text-[11px] font-mono text-[#00F076] font-semibold">
                    Excalidraw Native • Local-First
                  </div>
                </div>
              </ThreeDCard>
            );
          })}
        </div>

        {/* Template Selector Navigation Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider opacity-80">
              Excalidraw System Design Templates
            </span>
            <span className="text-[11px] font-mono opacity-60">
              Click to inspect interactive diagram
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {EXCALIDRAW_TEMPLATES.map((tmpl) => {
              const Icon = tmpl.icon;
              const isSelected = activeTemplateId === tmpl.id;
              return (
                <button
                  key={tmpl.id}
                  onClick={() => setActiveTemplateId(tmpl.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-semibold transition-all flex items-center gap-2 whitespace-nowrap border ${
                    isSelected
                      ? 'bg-[#00F076] text-black border-[#00F076] shadow-sm font-bold scale-102'
                      : isDark
                        ? 'bg-[#131722] hover:bg-[#1A202E] border-white/10 text-slate-300'
                        : 'bg-white hover:bg-slate-50 border-black/10 text-slate-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tmpl.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive 3D Excalidraw Whiteboard Canvas Simulator */}
        <ThreeDCard maxTilt={2} className="w-full mb-16">
          <div className={`p-0 rounded-3xl border shadow-2xl overflow-hidden ${
            isDark ? 'bg-[#131722] border-white/10' : 'bg-white border-black/10 shadow-slate-200'
          }`}>
            {/* Whiteboard Top Toolbar */}
            <div className={`p-4 border-b flex flex-wrap items-center justify-between gap-4 ${
              isDark ? 'bg-[#08090D] border-white/10' : 'bg-slate-50 border-black/10'
            }`}>
              {/* Virtual Excalidraw Toolset */}
              <div className={`flex items-center gap-1 p-1 rounded-2xl border ${
                isDark ? 'bg-[#131722] border-white/10' : 'bg-white border-black/10'
              }`}>
                <button
                  onClick={() => setSelectedTool('select')}
                  className={`p-2 rounded-xl transition-colors ${selectedTool === 'select' ? 'bg-[#00F076] text-black font-bold' : 'opacity-70 hover:opacity-100'}`}
                  title="Selection"
                >
                  <Move className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedTool('rect')}
                  className={`p-2 rounded-xl transition-colors ${selectedTool === 'rect' ? 'bg-[#00F076] text-black font-bold' : 'opacity-70 hover:opacity-100'}`}
                  title="Rectangle / Service Container"
                >
                  <Square className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedTool('diamond')}
                  className={`p-2 rounded-xl transition-colors ${selectedTool === 'diamond' ? 'bg-[#00F076] text-black font-bold' : 'opacity-70 hover:opacity-100'}`}
                  title="Diamond / Decision Branch"
                >
                  <Diamond className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedTool('arrow')}
                  className={`p-2 rounded-xl transition-colors ${selectedTool === 'arrow' ? 'bg-[#00F076] text-black font-bold' : 'opacity-70 hover:opacity-100'}`}
                  title="Smart Binding Arrow"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedTool('pen')}
                  className={`p-2 rounded-xl transition-colors ${selectedTool === 'pen' ? 'bg-[#00F076] text-black font-bold' : 'opacity-70 hover:opacity-100'}`}
                  title="Freehand Stylus Pen"
                >
                  <PenTool className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedTool('text')}
                  className={`p-2 rounded-xl transition-colors ${selectedTool === 'text' ? 'bg-[#00F076] text-black font-bold' : 'opacity-70 hover:opacity-100'}`}
                  title="Annotation Text"
                >
                  <Type className="w-4 h-4" />
                </button>
              </div>

              {/* Color Swatches */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono opacity-70 hidden sm:inline">Stroke Ink:</span>
                <div className={`flex items-center gap-1.5 p-1 rounded-full border ${
                  isDark ? 'bg-[#131722] border-white/10' : 'bg-white border-black/10'
                }`}>
                  {['#00F076', '#00E5FF', '#F59E0B', '#E87A90', '#FFFFFF'].map((color) => (
                    <button
                      key={color}
                      onClick={() => setStrokeColor(color)}
                      className={`w-5 h-5 rounded-full transition-transform ${strokeColor === color ? 'scale-125 ring-2 ring-[#00F076]' : 'hover:scale-110'}`}
                      style={{ background: color }}
                      title={`Select ${color}`}
                    />
                  ))}
                </div>
              </div>

              {/* Export Button */}
              <div className="flex items-center gap-2">
                <a
                  href={APP_REDIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono font-bold shadow-xs ${
                    isDark ? 'bg-[#131722] border-white/10 text-white hover:bg-white/10' : 'bg-white border-black/10 text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Download className="w-3.5 h-3.5 text-[#00F076]" />
                  <span>Export SVG</span>
                </a>
              </div>
            </div>

            {/* Canvas Surface with Hand-Drawn System Design Architecture */}
            <div className={`relative min-h-[440px] sm:min-h-[500px] p-6 sm:p-10 flex items-center justify-center overflow-x-auto select-none ${
              isDark ? 'bg-[#08090D]' : 'bg-[#F8FAFC]'
            }`}>
              <AnimatePresence mode="wait">
                {activeTemplate.diagramType === 'microservices' && (
                  <motion.div
                    key="microservices"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-4xl"
                  >
                    <svg viewBox="0 0 900 420" className="w-full h-auto drop-shadow-sm font-sans">
                      <defs>
                        <marker id="arrowHead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill={strokeColor} />
                        </marker>
                      </defs>

                      {/* 1. Client / User App */}
                      <g className="cursor-pointer">
                        <rect x="40" y="160" width="140" height="90" rx="14" fill={isDark ? '#131722' : '#FFFFFF'} stroke={strokeColor} strokeWidth="2.5" strokeDasharray="3 1" />
                        <text x="110" y="195" textAnchor="middle" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="13" fontWeight="bold">Web Client / App</text>
                        <text x="110" y="215" textAnchor="middle" fill={isDark ? '#94A3B8' : '#64748B'} fontSize="10" fontFamily="monospace">React / Next.js</text>
                        <circle cx="110" cy="232" r="4" fill="#00F076" />
                      </g>

                      {/* Arrow to Gateway */}
                      <path d="M 180 205 L 260 205" fill="none" stroke={strokeColor} strokeWidth="2.5" markerEnd="url(#arrowHead)" />
                      <text x="220" y="195" textAnchor="middle" fill={isDark ? '#94A3B8' : '#64748B'} fontSize="10" fontFamily="monospace">HTTPS / WSS</text>

                      {/* 2. API Gateway & Load Balancer */}
                      <g className="cursor-pointer">
                        <rect x="270" y="130" width="150" height="150" rx="16" fill={isDark ? '#131722' : '#FFFFFF'} stroke="#00F076" strokeWidth="2.5" />
                        <rect x="280" y="140" width="130" height="24" rx="6" fill="#00F076" />
                        <text x="345" y="156" textAnchor="middle" fill="#000000" fontSize="11" fontWeight="bold">API GATEWAY</text>
                        <text x="345" y="190" textAnchor="middle" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11" fontWeight="600">Rate Limiter</text>
                        <text x="345" y="212" textAnchor="middle" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11" fontWeight="600">JWT Validator</text>
                        <text x="345" y="234" textAnchor="middle" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11" fontWeight="600">Reverse Proxy</text>
                        <text x="345" y="258" textAnchor="middle" fill="#00F076" fontSize="9" fontFamily="monospace">Envoy / NGINX</text>
                      </g>

                      {/* Branching Arrows to Services */}
                      <path d="M 420 170 Q 470 110 520 80" fill="none" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrowHead)" />
                      <path d="M 420 205 L 520 205" fill="none" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrowHead)" />
                      <path d="M 420 240 Q 470 300 520 330" fill="none" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrowHead)" />

                      {/* 3. Microservice A: Auth */}
                      <g>
                        <rect x="530" y="40" width="150" height="80" rx="12" fill={isDark ? '#131722' : '#FFFFFF'} stroke="#F59E0B" strokeWidth="2" />
                        <text x="605" y="70" textAnchor="middle" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="12" fontWeight="bold">Auth Service</text>
                        <text x="605" y="90" textAnchor="middle" fill={isDark ? '#94A3B8' : '#64748B'} fontSize="10" fontFamily="monospace">Sessions & OAuth</text>
                      </g>

                      {/* 4. Microservice B: Notes & Excalidraw */}
                      <g>
                        <rect x="530" y="165" width="150" height="80" rx="12" fill={isDark ? '#131722' : '#FFFFFF'} stroke="#00F076" strokeWidth="2.5" />
                        <text x="605" y="195" textAnchor="middle" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="12" fontWeight="bold">Notes & Excalidraw</text>
                        <text x="605" y="215" textAnchor="middle" fill="#00F076" fontSize="10" fontFamily="monospace">162 Palettes Engine</text>
                      </g>

                      {/* 5. Microservice C: Sync & AI */}
                      <g>
                        <rect x="530" y="290" width="150" height="80" rx="12" fill={isDark ? '#131722' : '#FFFFFF'} stroke="#00E5FF" strokeWidth="2" />
                        <text x="605" y="320" textAnchor="middle" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="12" fontWeight="bold">Sync & AI Worker</text>
                        <text x="605" y="340" textAnchor="middle" fill={isDark ? '#94A3B8' : '#64748B'} fontSize="10" fontFamily="monospace">CRDT Re-index</text>
                      </g>

                      {/* Arrows to Storage */}
                      <path d="M 680 80 L 750 80" fill="none" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrowHead)" />
                      <path d="M 680 205 L 750 205" fill="none" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrowHead)" />
                      <path d="M 680 330 L 750 330" fill="none" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrowHead)" />

                      {/* 6. Redis */}
                      <g>
                        <ellipse cx="800" cy="80" rx="45" ry="30" fill={isDark ? '#131722' : '#FFFFFF'} stroke="#E87A90" strokeWidth="2" />
                        <text x="800" y="84" textAnchor="middle" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11" fontWeight="bold">Redis Cache</text>
                      </g>

                      {/* 7. PostgreSQL */}
                      <g>
                        <rect x="755" y="165" width="90" height="80" rx="10" fill={isDark ? '#131722' : '#FFFFFF'} stroke="#00F076" strokeWidth="2.5" />
                        <text x="800" y="195" textAnchor="middle" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11" fontWeight="bold">PostgreSQL</text>
                        <text x="800" y="215" textAnchor="middle" fill={isDark ? '#94A3B8' : '#64748B'} fontSize="9" fontFamily="monospace">Primary DB</text>
                      </g>

                      {/* 8. Kafka Event Bus */}
                      <g>
                        <rect x="755" y="290" width="90" height="80" rx="10" fill={isDark ? '#131722' : '#FFFFFF'} stroke="#00E5FF" strokeWidth="2" />
                        <text x="800" y="320" textAnchor="middle" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11" fontWeight="bold">Kafka Bus</text>
                        <text x="800" y="340" textAnchor="middle" fill={isDark ? '#94A3B8' : '#64748B'} fontSize="9" fontFamily="monospace">Event Stream</text>
                      </g>
                    </svg>
                  </motion.div>
                )}

                {activeTemplate.diagramType === 'erd' && (
                  <motion.div
                    key="erd"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-4xl"
                  >
                    <svg viewBox="0 0 900 380" className="w-full h-auto drop-shadow-sm font-sans">
                      {/* Table: Users */}
                      <g>
                        <rect x="60" y="80" width="220" height="200" rx="12" fill={isDark ? '#131722' : '#FFFFFF'} stroke="#00F076" strokeWidth="2.5" />
                        <rect x="60" y="80" width="220" height="35" rx="12" fill="#00F076" />
                        <text x="170" y="103" textAnchor="middle" fill="#000000" fontSize="13" fontWeight="bold">USERS</text>
                        <text x="80" y="140" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11" fontFamily="monospace">🔑 id: UUID [PK]</text>
                        <text x="80" y="165" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11" fontFamily="monospace">email: VARCHAR(255)</text>
                        <text x="80" y="190" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11" fontFamily="monospace">active_theme: VARCHAR</text>
                        <text x="80" y="215" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11" fontFamily="monospace">created_at: TIMESTAMP</text>
                        <text x="80" y="240" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11" fontFamily="monospace">offline_sync_key: TEXT</text>
                      </g>

                      <path d="M 280 180 L 370 180" fill="none" stroke={strokeColor} strokeWidth="2.5" strokeDasharray="4 2" />
                      <text x="325" y="170" textAnchor="middle" fill="#00F076" fontSize="11" fontWeight="bold">1 : N</text>

                      {/* Table: Notes & Sketches */}
                      <g>
                        <rect x="380" y="50" width="250" height="260" rx="12" fill={isDark ? '#131722' : '#FFFFFF'} stroke="#00E5FF" strokeWidth="2.5" />
                        <rect x="380" y="50" width="250" height="35" rx="12" fill="#00E5FF" />
                        <text x="505" y="73" textAnchor="middle" fill="#000000" fontSize="13" fontWeight="bold">NOTES & EXCALIDRAW</text>
                        <text x="400" y="110" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11" fontFamily="monospace">🔑 id: UUID [PK]</text>
                        <text x="400" y="135" fill="#00F076" fontSize="11" fontFamily="monospace">🔗 user_id: UUID [FK]</text>
                        <text x="400" y="160" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11" fontFamily="monospace">title: VARCHAR(255)</text>
                        <text x="400" y="185" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11" fontFamily="monospace">content_markdown: TEXT</text>
                        <text x="400" y="210" fill="#F59E0B" fontSize="11" fontFamily="monospace">excalidraw_data: JSONB</text>
                        <text x="400" y="235" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11" fontFamily="monospace">palette_theme: VARCHAR</text>
                        <text x="400" y="260" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11" fontFamily="monospace">is_pinned: BOOLEAN</text>
                        <text x="400" y="285" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11" fontFamily="monospace">updated_at: TIMESTAMP</text>
                      </g>

                      <path d="M 630 180 L 700 180" fill="none" stroke={strokeColor} strokeWidth="2.5" strokeDasharray="4 2" />
                      <text x="665" y="170" textAnchor="middle" fill="#00E5FF" fontSize="11" fontWeight="bold">N : 1</text>

                      {/* Table: Collections */}
                      <g>
                        <rect x="710" y="80" width="180" height="200" rx="12" fill={isDark ? '#131722' : '#FFFFFF'} stroke="#F59E0B" strokeWidth="2.5" />
                        <rect x="710" y="80" width="180" height="35" rx="12" fill="#F59E0B" />
                        <text x="800" y="103" textAnchor="middle" fill="#000000" fontSize="13" fontWeight="bold">COLLECTIONS</text>
                        <text x="725" y="140" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11" fontFamily="monospace">🔑 id: UUID [PK]</text>
                        <text x="725" y="165" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11" fontFamily="monospace">name: VARCHAR</text>
                        <text x="725" y="190" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11" fontFamily="monospace">color_badge: TEXT</text>
                        <text x="725" y="215" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11" fontFamily="monospace">sort_order: INT</text>
                        <text x="725" y="240" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11" fontFamily="monospace">is_archived: BOOL</text>
                      </g>
                    </svg>
                  </motion.div>
                )}

                {activeTemplate.diagramType === 'authflow' && (
                  <motion.div
                    key="authflow"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-4xl"
                  >
                    <svg viewBox="0 0 900 360" className="w-full h-auto drop-shadow-sm font-sans">
                      <g>
                        <rect x="50" y="80" width="180" height="220" rx="14" fill={isDark ? '#131722' : '#FFFFFF'} stroke="#00F076" strokeWidth="2" />
                        <text x="140" y="120" textAnchor="middle" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="14" fontWeight="bold">1. CLIENT</text>
                        <text x="140" y="150" textAnchor="middle" fill={isDark ? '#94A3B8' : '#64748B'} fontSize="11">Smriti Local App</text>
                        <text x="140" y="190" textAnchor="middle" fill="#00F076" fontSize="11" fontFamily="monospace">IndexedDB Keystore</text>
                      </g>

                      <path d="M 230 140 L 370 140" fill="none" stroke={strokeColor} strokeWidth="2.5" markerEnd="url(#arrowHead)" />
                      <text x="300" y="130" textAnchor="middle" fill={isDark ? '#94A3B8' : '#64748B'} fontSize="10" fontFamily="monospace">POST /oauth/token</text>

                      <g>
                        <rect x="380" y="60" width="200" height="240" rx="14" fill={isDark ? '#131722' : '#FFFFFF'} stroke="#F59E0B" strokeWidth="2.5" />
                        <rect x="380" y="60" width="200" height="35" rx="14" fill="#F59E0B" />
                        <text x="480" y="83" textAnchor="middle" fill="#000000" fontSize="12" fontWeight="bold">2. IDENTITY PROVIDER</text>
                        <text x="480" y="130" textAnchor="middle" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11">Argon2 Password Hash</text>
                        <text x="480" y="160" textAnchor="middle" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11">Issue Ed25519 Token</text>
                        <text x="480" y="190" textAnchor="middle" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11">Sign Claims & Expiry</text>
                        <text x="480" y="230" textAnchor="middle" fill="#00F076" fontSize="11" fontWeight="bold">✓ Cryptographically Valid</text>
                      </g>

                      <path d="M 580 180 L 700 180" fill="none" stroke={strokeColor} strokeWidth="2.5" markerEnd="url(#arrowHead)" />
                      <text x="640" y="170" textAnchor="middle" fill={isDark ? '#94A3B8' : '#64748B'} fontSize="10" fontFamily="monospace">Bearer JWT</text>

                      <g>
                        <rect x="710" y="80" width="160" height="220" rx="14" fill={isDark ? '#131722' : '#FFFFFF'} stroke="#00E5FF" strokeWidth="2" />
                        <text x="790" y="120" textAnchor="middle" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="14" fontWeight="bold">3. RESOURCE</text>
                        <text x="790" y="150" textAnchor="middle" fill={isDark ? '#94A3B8' : '#64748B'} fontSize="11">Protected API</text>
                        <text x="790" y="190" textAnchor="middle" fill="#00E5FF" fontSize="11" fontFamily="monospace">Sync & Canvas Data</text>
                      </g>
                    </svg>
                  </motion.div>
                )}

                {activeTemplate.diagramType === 'wireframe' && (
                  <motion.div
                    key="wireframe"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-4xl"
                  >
                    <svg viewBox="0 0 900 380" className="w-full h-auto drop-shadow-sm font-sans">
                      <g>
                        <rect x="120" y="20" width="240" height="340" rx="28" fill={isDark ? '#131722' : '#FFFFFF'} stroke="#00F076" strokeWidth="2.5" />
                        <line x1="210" y1="35" x2="270" y2="35" stroke={isDark ? '#FFFFFF' : '#000000'} strokeWidth="3" strokeLinecap="round" />
                        <rect x="140" y="60" width="200" height="30" rx="8" fill={isDark ? '#08090D' : '#F8FAFC'} stroke="#00F076" strokeWidth="1" strokeDasharray="3 2" />
                        <text x="155" y="80" fill={isDark ? '#94A3B8' : '#64748B'} fontSize="11" fontFamily="monospace">Search notes...</text>
                        
                        <rect x="140" y="105" width="200" height="60" rx="10" fill={isDark ? '#08090D' : '#FFFFFF'} stroke="#00E5FF" strokeWidth="1.5" />
                        <text x="155" y="130" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11" fontWeight="bold">Deep Work Habits</text>
                        <text x="155" y="150" fill={isDark ? '#94A3B8' : '#64748B'} fontSize="9">Oct 28 • 1,240 words</text>

                        <circle cx="310" cy="300" r="22" fill="#00F076" />
                        <text x="310" y="306" textAnchor="middle" fill="#000000" fontSize="20" fontWeight="bold">+</text>
                      </g>

                      <g>
                        <rect x="420" y="40" width="440" height="300" rx="16" fill={isDark ? '#131722' : '#FFFFFF'} stroke={isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'} strokeWidth="2" />
                        <line x1="420" y1="75" x2="860" y2="75" stroke={isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} strokeWidth="1.5" />
                        <text x="640" y="62" textAnchor="middle" fill={isDark ? '#94A3B8' : '#64748B'} fontSize="11" fontFamily="monospace">app.smritinotes.site</text>

                        <line x1="560" y1="75" x2="560" y2="340" stroke={isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} strokeWidth="1.5" />
                        <text x="445" y="104" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="10" fontWeight="bold">Collections</text>
                        <text x="445" y="130" fill={isDark ? '#94A3B8' : '#64748B'} fontSize="10">Architecture</text>
                        <text x="445" y="150" fill={isDark ? '#94A3B8' : '#64748B'} fontSize="10">Excalidraw</text>

                        <text x="580" y="110" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="14" fontWeight="bold"># Architecture Decisions</text>
                        <rect x="580" y="130" width="260" height="120" rx="8" fill={isDark ? '#08090D' : '#F8FAFC'} stroke="#00F076" strokeWidth="1.5" strokeDasharray="4 2" />
                        <text x="710" y="195" textAnchor="middle" fill="#00F076" fontSize="11" fontWeight="bold">[ Embedded Excalidraw Canvas ]</text>
                      </g>
                    </svg>
                  </motion.div>
                )}

                {activeTemplate.diagramType === 'statemachine' && (
                  <motion.div
                    key="statemachine"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-4xl"
                  >
                    <svg viewBox="0 0 900 360" className="w-full h-auto drop-shadow-sm font-sans">
                      <g>
                        <rect x="80" y="140" width="130" height="80" rx="14" fill={isDark ? '#131722' : '#FFFFFF'} stroke="#00F076" strokeWidth="2.5" />
                        <text x="145" y="185" textAnchor="middle" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="13" fontWeight="bold">IDLE / DRAFT</text>
                      </g>

                      <path d="M 210 180 L 290 180" fill="none" stroke={strokeColor} strokeWidth="2.5" markerEnd="url(#arrowHead)" />
                      <text x="250" y="170" textAnchor="middle" fill={isDark ? '#94A3B8' : '#64748B'} fontSize="10" fontFamily="monospace">onEdit()</text>

                      <g>
                        <rect x="300" y="140" width="150" height="80" rx="14" fill={isDark ? '#131722' : '#FFFFFF'} stroke="#00E5FF" strokeWidth="2.5" />
                        <text x="375" y="175" textAnchor="middle" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="13" fontWeight="bold">SAVING LOCAL</text>
                        <text x="375" y="195" textAnchor="middle" fill="#00F076" fontSize="10" fontFamily="monospace">sub-4ms IndexedDB</text>
                      </g>

                      <path d="M 450 180 L 530 180" fill="none" stroke={strokeColor} strokeWidth="2.5" markerEnd="url(#arrowHead)" />
                      <text x="490" y="170" textAnchor="middle" fill={isDark ? '#94A3B8' : '#64748B'} fontSize="10" fontFamily="monospace">triggerSync()</text>

                      <g>
                        <polygon points="590,130 650,180 590,230 530,180" fill={isDark ? '#131722' : '#FFFFFF'} stroke="#F59E0B" strokeWidth="2.5" />
                        <text x="590" y="184" textAnchor="middle" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="11" fontWeight="bold">Online?</text>
                      </g>

                      <path d="M 650 180 L 730 180" fill="none" stroke="#00F076" strokeWidth="2.5" markerEnd="url(#arrowHead)" />
                      <text x="690" y="170" textAnchor="middle" fill="#00F076" fontSize="10" fontWeight="bold">YES</text>

                      <g>
                        <rect x="740" y="140" width="130" height="80" rx="14" fill={isDark ? '#131722' : '#FFFFFF'} stroke="#00F076" strokeWidth="2.5" />
                        <text x="805" y="175" textAnchor="middle" fill={isDark ? '#FFFFFF' : '#0F172A'} fontSize="12" fontWeight="bold">SYNCED</text>
                        <text x="805" y="195" textAnchor="middle" fill={isDark ? '#94A3B8' : '#64748B'} fontSize="10" fontFamily="monospace">Encrypted Peer</text>
                      </g>
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Status Bar */}
            <div className={`p-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono opacity-80 ${
              isDark ? 'bg-[#08090D] border-white/10' : 'bg-slate-50 border-black/10'
            }`}>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00F076] animate-pulse" />
                <span className="font-bold">Active Template:</span>
                <span className="text-[#00F076]">{activeTemplate.name}</span>
              </div>

              <a
                href={APP_REDIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#00F076] hover:underline flex items-center gap-1"
              >
                <span>Launch Whiteboard in Web App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </ThreeDCard>
      </div>
    </section>
  );
};
