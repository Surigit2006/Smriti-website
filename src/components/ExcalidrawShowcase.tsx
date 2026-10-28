import React, { useState } from 'react';
import { 
  PenTool, 
  Square, 
  Circle, 
  Diamond, 
  ArrowRight, 
  Move, 
  Type, 
  Eraser, 
  Download, 
  Sparkles, 
  Layers, 
  Server, 
  Database, 
  Cpu, 
  Smartphone, 
  GitBranch, 
  ArrowUpRight, 
  Check, 
  Boxes,
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
    accent: '#0F4C81',
    diagramType: 'microservices'
  },
  {
    id: 'erd',
    name: 'Database Schema & ERD Model',
    category: 'Data Modeling',
    desc: 'Relational entity tables with primary keys, foreign keys, and 1-to-N relationships.',
    icon: Database,
    accent: '#1B4332',
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
    accent: '#D97706',
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

export const ExcalidrawShowcase: React.FC = () => {
  const [activeTemplateId, setActiveTemplateId] = useState(EXCALIDRAW_TEMPLATES[0].id);
  const [selectedTool, setSelectedTool] = useState<'select' | 'rect' | 'diamond' | 'arrow' | 'pen' | 'text'>('arrow');
  const [strokeColor, setStrokeColor] = useState('#0F4C81');

  const activeTemplate = EXCALIDRAW_TEMPLATES.find((t) => t.id === activeTemplateId) || EXCALIDRAW_TEMPLATES[0];

  return (
    <section id="excalidraw" className="py-24 sm:py-32 relative bg-[#F5F0E8] border-t border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* DOVV Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/[0.07]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#0F4C81] font-bold uppercase tracking-widest">
                [ 02 // EXCALIDRAW WHITEBOARD & SYSTEM DESIGN ]
              </span>
              <span className="dovv-chip text-[#0F4C81] text-xs py-0.5 font-bold">
                Infinite Vector Canvas
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-archivo font-black text-[#141414] tracking-tight leading-[0.95] uppercase">
              THINK IN SHAPES & CODE.<br />
              <span className="text-[#0F4C81]">EXCALIDRAW SYSTEM DESIGN.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#666055] leading-relaxed max-w-2xl font-normal">
              Map out distributed microservices, design database schemas, model event-driven pipelines, and sketch UI wireframes — powered by an embedded Excalidraw infinite whiteboard directly beside your notes.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={APP_REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#141414] hover:bg-[#0F4C81] text-white font-archivo font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105"
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
                <div className="dovv-card bg-white p-6 rounded-3xl border border-black/[0.08] shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-black/[0.06] flex items-center justify-center text-[#0F4C81] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-archivo text-lg font-bold uppercase text-[#141414] mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-[#666055] leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-black/[0.05] text-[11px] font-mono text-[#0F4C81] font-semibold">
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
            <span className="text-xs font-mono font-bold text-[#141414] uppercase tracking-wider">
              Excalidraw System Design Templates
            </span>
            <span className="text-[11px] font-mono text-[#666055]">
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
                      ? 'bg-white border-[#0F4C81] text-[#141414] ring-2 ring-[#0F4C81] shadow-sm font-bold scale-102'
                      : 'bg-white/80 hover:bg-white border-black/[0.06] text-[#666055]'
                  }`}
                >
                  <Icon className="w-4 h-4" style={{ color: tmpl.accent }} />
                  <span>{tmpl.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive 3D Excalidraw Whiteboard Canvas Simulator */}
        <ThreeDCard maxTilt={3} className="w-full mb-16">
          <div className="dovv-card bg-white p-0 rounded-3xl border border-black/[0.08] shadow-2xl overflow-hidden">
            {/* Whiteboard Top Toolbar with Tools */}
            <div className="p-4 bg-[#FAF7F2] border-b border-black/[0.06] flex flex-wrap items-center justify-between gap-4">
              {/* Virtual Excalidraw Toolset */}
              <div className="flex items-center gap-1 bg-white p-1 rounded-2xl border border-black/10 shadow-xs">
                <button
                  onClick={() => setSelectedTool('select')}
                  className={`p-2 rounded-xl transition-colors ${selectedTool === 'select' ? 'bg-[#141414] text-white' : 'text-[#666055] hover:bg-black/5'}`}
                  title="Selection"
                >
                  <Move className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedTool('rect')}
                  className={`p-2 rounded-xl transition-colors ${selectedTool === 'rect' ? 'bg-[#141414] text-white' : 'text-[#666055] hover:bg-black/5'}`}
                  title="Rectangle / Service Container"
                >
                  <Square className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedTool('diamond')}
                  className={`p-2 rounded-xl transition-colors ${selectedTool === 'diamond' ? 'bg-[#141414] text-white' : 'text-[#666055] hover:bg-black/5'}`}
                  title="Diamond / Decision Branch"
                >
                  <Diamond className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedTool('arrow')}
                  className={`p-2 rounded-xl transition-colors ${selectedTool === 'arrow' ? 'bg-[#141414] text-white' : 'text-[#666055] hover:bg-black/5'}`}
                  title="Smart Binding Arrow"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedTool('pen')}
                  className={`p-2 rounded-xl transition-colors ${selectedTool === 'pen' ? 'bg-[#141414] text-white' : 'text-[#666055] hover:bg-black/5'}`}
                  title="Freehand Stylus Pen"
                >
                  <PenTool className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedTool('text')}
                  className={`p-2 rounded-xl transition-colors ${selectedTool === 'text' ? 'bg-[#141414] text-white' : 'text-[#666055] hover:bg-black/5'}`}
                  title="Annotation Text"
                >
                  <Type className="w-4 h-4" />
                </button>
              </div>

              {/* Color Swatches from Smriti's Palette */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-[#666055] hidden sm:inline">Stroke Ink:</span>
                <div className="flex items-center gap-1.5 bg-white p-1 rounded-full border border-black/10">
                  {['#0F4C81', '#1B4332', '#D97706', '#E87A90', '#141414'].map((color) => (
                    <button
                      key={color}
                      onClick={() => setStrokeColor(color)}
                      className={`w-5 h-5 rounded-full transition-transform ${strokeColor === color ? 'scale-125 ring-2 ring-black' : 'hover:scale-110'}`}
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
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-black/10 text-xs font-mono font-bold text-[#141414] hover:bg-[#FAF7F2] shadow-xs"
                >
                  <Download className="w-3.5 h-3.5 text-[#0F4C81]" />
                  <span>Export SVG</span>
                </a>
              </div>
            </div>

            {/* Canvas Surface with Hand-Drawn System Design Architecture */}
            <div className="relative min-h-[440px] sm:min-h-[500px] p-6 sm:p-10 bg-[#FAF7F2]/50 flex items-center justify-center overflow-x-auto select-none">
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
                    {/* Hand-drawn Microservices Diagram SVG */}
                    <svg viewBox="0 0 900 420" className="w-full h-auto drop-shadow-sm font-sans">
                      <defs>
                        <marker id="arrowHead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill={strokeColor} />
                        </marker>
                      </defs>

                      {/* 1. Client / User App */}
                      <g className="cursor-pointer group">
                        <rect x="40" y="160" width="140" height="90" rx="14" fill="#FFFFFF" stroke={strokeColor} strokeWidth="2.5" strokeDasharray="3 1" />
                        <text x="110" y="195" textAnchor="middle" fill="#141414" fontSize="13" fontWeight="bold">Web Client / App</text>
                        <text x="110" y="215" textAnchor="middle" fill="#666055" fontSize="10" fontFamily="monospace">React / Next.js</text>
                        <circle cx="110" cy="232" r="4" fill="#16c847" />
                      </g>

                      {/* Arrow to Gateway */}
                      <path d="M 180 205 L 260 205" fill="none" stroke={strokeColor} strokeWidth="2.5" markerEnd="url(#arrowHead)" />
                      <text x="220" y="195" textAnchor="middle" fill="#666055" fontSize="10" fontFamily="monospace">HTTPS / WSS</text>

                      {/* 2. API Gateway & Load Balancer */}
                      <g className="cursor-pointer">
                        <rect x="270" y="130" width="150" height="150" rx="16" fill="#FFFFFF" stroke="#0F4C81" strokeWidth="2.5" />
                        <rect x="280" y="140" width="130" height="24" rx="6" fill="#0F4C81" />
                        <text x="345" y="156" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">API GATEWAY</text>
                        <text x="345" y="190" textAnchor="middle" fill="#141414" fontSize="11" fontWeight="600">Rate Limiter</text>
                        <text x="345" y="212" textAnchor="middle" fill="#141414" fontSize="11" fontWeight="600">JWT Validator</text>
                        <text x="345" y="234" textAnchor="middle" fill="#141414" fontSize="11" fontWeight="600">Reverse Proxy</text>
                        <text x="345" y="258" textAnchor="middle" fill="#0F4C81" fontSize="9" fontFamily="monospace">Envoy / NGINX</text>
                      </g>

                      {/* Branching Arrows to Services */}
                      <path d="M 420 170 Q 470 110 520 80" fill="none" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrowHead)" />
                      <path d="M 420 205 L 520 205" fill="none" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrowHead)" />
                      <path d="M 420 240 Q 470 300 520 330" fill="none" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrowHead)" />

                      {/* 3. Microservice A: Auth & Users */}
                      <g>
                        <rect x="530" y="40" width="150" height="80" rx="12" fill="#FFFFFF" stroke="#D97706" strokeWidth="2" />
                        <text x="605" y="70" textAnchor="middle" fill="#141414" fontSize="12" fontWeight="bold">Auth Service</text>
                        <text x="605" y="90" textAnchor="middle" fill="#666055" fontSize="10" fontFamily="monospace">Sessions & OAuth</text>
                      </g>

                      {/* 4. Microservice B: Notes & Canvas Core */}
                      <g>
                        <rect x="530" y="165" width="150" height="80" rx="12" fill="#FFFFFF" stroke="#0F4C81" strokeWidth="2.5" />
                        <text x="605" y="195" textAnchor="middle" fill="#141414" fontSize="12" fontWeight="bold">Notes & Excalidraw</text>
                        <text x="605" y="215" textAnchor="middle" fill="#0F4C81" fontSize="10" fontFamily="monospace">162 Palettes Engine</text>
                      </g>

                      {/* 5. Microservice C: Async Workers */}
                      <g>
                        <rect x="530" y="290" width="150" height="80" rx="12" fill="#FFFFFF" stroke="#1B4332" strokeWidth="2" />
                        <text x="605" y="320" textAnchor="middle" fill="#141414" fontSize="12" fontWeight="bold">Sync & AI Worker</text>
                        <text x="605" y="340" textAnchor="middle" fill="#666055" fontSize="10" fontFamily="monospace">CRDT Re-index</text>
                      </g>

                      {/* Arrows to Storage */}
                      <path d="M 680 80 L 750 80" fill="none" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrowHead)" />
                      <path d="M 680 205 L 750 205" fill="none" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrowHead)" />
                      <path d="M 680 330 L 750 330" fill="none" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrowHead)" />

                      {/* 6. Redis Cache */}
                      <g>
                        <ellipse cx="800" cy="80" rx="45" ry="30" fill="#FFFFFF" stroke="#E87A90" strokeWidth="2" />
                        <text x="800" y="84" textAnchor="middle" fill="#141414" fontSize="11" fontWeight="bold">Redis Cache</text>
                      </g>

                      {/* 7. PostgreSQL Database */}
                      <g>
                        <rect x="755" y="165" width="90" height="80" rx="10" fill="#FFFFFF" stroke="#0F4C81" strokeWidth="2.5" />
                        <text x="800" y="195" textAnchor="middle" fill="#141414" fontSize="11" fontWeight="bold">PostgreSQL</text>
                        <text x="800" y="215" textAnchor="middle" fill="#666055" fontSize="9" fontFamily="monospace">Primary DB</text>
                      </g>

                      {/* 8. Event Stream (Kafka / RabbitMQ) */}
                      <g>
                        <rect x="755" y="290" width="90" height="80" rx="10" fill="#FFFFFF" stroke="#1B4332" strokeWidth="2" />
                        <text x="800" y="320" textAnchor="middle" fill="#141414" fontSize="11" fontWeight="bold">Kafka Bus</text>
                        <text x="800" y="340" textAnchor="middle" fill="#666055" fontSize="9" fontFamily="monospace">Event Stream</text>
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
                    {/* Database ERD Diagram */}
                    <svg viewBox="0 0 900 380" className="w-full h-auto drop-shadow-sm font-sans">
                      {/* Table: Users */}
                      <g>
                        <rect x="60" y="80" width="220" height="200" rx="12" fill="#FFFFFF" stroke="#0F4C81" strokeWidth="2.5" />
                        <rect x="60" y="80" width="220" height="35" rx="12" fill="#0F4C81" />
                        <text x="170" y="103" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">USERS</text>
                        <text x="80" y="140" fill="#141414" fontSize="11" fontFamily="monospace">🔑 id: UUID [PK]</text>
                        <text x="80" y="165" fill="#141414" fontSize="11" fontFamily="monospace">email: VARCHAR(255)</text>
                        <text x="80" y="190" fill="#141414" fontSize="11" fontFamily="monospace">active_theme: VARCHAR</text>
                        <text x="80" y="215" fill="#141414" fontSize="11" fontFamily="monospace">created_at: TIMESTAMP</text>
                        <text x="80" y="240" fill="#141414" fontSize="11" fontFamily="monospace">offline_sync_key: TEXT</text>
                      </g>

                      {/* Relationship Connector */}
                      <path d="M 280 180 L 370 180" fill="none" stroke={strokeColor} strokeWidth="2.5" strokeDasharray="4 2" />
                      <text x="325" y="170" textAnchor="middle" fill="#0F4C81" fontSize="11" fontWeight="bold">1 : N</text>

                      {/* Table: Notes & Sketches */}
                      <g>
                        <rect x="380" y="50" width="250" height="260" rx="12" fill="#FFFFFF" stroke="#1B4332" strokeWidth="2.5" />
                        <rect x="380" y="50" width="250" height="35" rx="12" fill="#1B4332" />
                        <text x="505" y="73" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">NOTES & EXCALIDRAW</text>
                        <text x="400" y="110" fill="#141414" fontSize="11" fontFamily="monospace">🔑 id: UUID [PK]</text>
                        <text x="400" y="135" fill="#0F4C81" fontSize="11" fontFamily="monospace">🔗 user_id: UUID [FK]</text>
                        <text x="400" y="160" fill="#141414" fontSize="11" fontFamily="monospace">title: VARCHAR(255)</text>
                        <text x="400" y="185" fill="#141414" fontSize="11" fontFamily="monospace">content_markdown: TEXT</text>
                        <text x="400" y="210" fill="#D97706" fontSize="11" fontFamily="monospace">excalidraw_data: JSONB</text>
                        <text x="400" y="235" fill="#141414" fontSize="11" fontFamily="monospace">palette_theme: VARCHAR</text>
                        <text x="400" y="260" fill="#141414" fontSize="11" fontFamily="monospace">is_pinned: BOOLEAN</text>
                        <text x="400" y="285" fill="#141414" fontSize="11" fontFamily="monospace">updated_at: TIMESTAMP</text>
                      </g>

                      {/* Relationship Connector to Collections */}
                      <path d="M 630 180 L 700 180" fill="none" stroke={strokeColor} strokeWidth="2.5" strokeDasharray="4 2" />
                      <text x="665" y="170" textAnchor="middle" fill="#1B4332" fontSize="11" fontWeight="bold">N : 1</text>

                      {/* Table: Collections / Folders */}
                      <g>
                        <rect x="710" y="80" width="180" height="200" rx="12" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="2.5" />
                        <rect x="710" y="80" width="180" height="35" rx="12" fill="#F59E0B" />
                        <text x="800" y="103" textAnchor="middle" fill="#141414" fontSize="13" fontWeight="bold">COLLECTIONS</text>
                        <text x="725" y="140" fill="#141414" fontSize="11" fontFamily="monospace">🔑 id: UUID [PK]</text>
                        <text x="725" y="165" fill="#141414" fontSize="11" fontFamily="monospace">name: VARCHAR</text>
                        <text x="725" y="190" fill="#141414" fontSize="11" fontFamily="monospace">color_badge: TEXT</text>
                        <text x="725" y="215" fill="#141414" fontSize="11" fontFamily="monospace">sort_order: INT</text>
                        <text x="725" y="240" fill="#141414" fontSize="11" fontFamily="monospace">is_archived: BOOL</text>
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
                    {/* OAuth & Auth Pipeline */}
                    <svg viewBox="0 0 900 360" className="w-full h-auto drop-shadow-sm font-sans">
                      <g>
                        <rect x="50" y="80" width="180" height="220" rx="14" fill="#FFFFFF" stroke="#0F4C81" strokeWidth="2" />
                        <text x="140" y="120" textAnchor="middle" fill="#141414" fontSize="14" fontWeight="bold">1. CLIENT</text>
                        <text x="140" y="150" textAnchor="middle" fill="#666055" fontSize="11">Smriti Local App</text>
                        <text x="140" y="190" textAnchor="middle" fill="#0F4C81" fontSize="11" fontFamily="monospace">IndexedDB Keystore</text>
                      </g>

                      <path d="M 230 140 L 370 140" fill="none" stroke={strokeColor} strokeWidth="2.5" markerEnd="url(#arrowHead)" />
                      <text x="300" y="130" textAnchor="middle" fill="#666055" fontSize="10" fontFamily="monospace">POST /oauth/token</text>

                      <g>
                        <rect x="380" y="60" width="200" height="240" rx="14" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="2.5" />
                        <rect x="380" y="60" width="200" height="35" rx="14" fill="#F59E0B" />
                        <text x="480" y="83" textAnchor="middle" fill="#141414" fontSize="12" fontWeight="bold">2. IDENTITY PROVIDER</text>
                        <text x="480" y="130" textAnchor="middle" fill="#141414" fontSize="11">Argon2 Password Hash</text>
                        <text x="480" y="160" textAnchor="middle" fill="#141414" fontSize="11">Issue Ed25519 Token</text>
                        <text x="480" y="190" textAnchor="middle" fill="#141414" fontSize="11">Sign Claims & Expiry</text>
                        <text x="480" y="230" textAnchor="middle" fill="#16c847" fontSize="11" fontWeight="bold">✓ Cryptographically Valid</text>
                      </g>

                      <path d="M 580 180 L 700 180" fill="none" stroke={strokeColor} strokeWidth="2.5" markerEnd="url(#arrowHead)" />
                      <text x="640" y="170" textAnchor="middle" fill="#666055" fontSize="10" fontFamily="monospace">Bearer JWT</text>

                      <g>
                        <rect x="710" y="80" width="160" height="220" rx="14" fill="#FFFFFF" stroke="#1B4332" strokeWidth="2" />
                        <text x="790" y="120" textAnchor="middle" fill="#141414" fontSize="14" fontWeight="bold">3. RESOURCE</text>
                        <text x="790" y="150" textAnchor="middle" fill="#666055" fontSize="11">Protected API</text>
                        <text x="790" y="190" textAnchor="middle" fill="#1B4332" fontSize="11" fontFamily="monospace">Sync & Canvas Data</text>
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
                    {/* UI/UX Wireframe */}
                    <svg viewBox="0 0 900 380" className="w-full h-auto drop-shadow-sm font-sans">
                      {/* Mobile Canvas Screen */}
                      <g>
                        <rect x="120" y="20" width="240" height="340" rx="28" fill="#FFFFFF" stroke="#141414" strokeWidth="3" />
                        <line x1="210" y1="35" x2="270" y2="35" stroke="#141414" strokeWidth="3" strokeLinecap="round" />
                        <rect x="140" y="60" width="200" height="30" rx="8" fill="#FAF7F2" stroke="#141414" strokeWidth="1.5" strokeDasharray="3 2" />
                        <text x="155" y="80" fill="#666055" fontSize="11" fontFamily="monospace">Search notes...</text>
                        
                        <rect x="140" y="105" width="200" height="60" rx="10" fill="#FFFFFF" stroke="#0F4C81" strokeWidth="2" />
                        <text x="155" y="130" fill="#141414" fontSize="11" fontWeight="bold">Deep Work Habits</text>
                        <text x="155" y="150" fill="#666055" fontSize="9">Oct 28 • 1,240 words</text>

                        <rect x="140" y="180" width="200" height="60" rx="10" fill="#FFFFFF" stroke="#D97706" strokeWidth="2" />
                        <text x="155" y="205" fill="#141414" fontSize="11" fontWeight="bold">System Design & Excalidraw</text>
                        <text x="155" y="225" fill="#666055" fontSize="9">Oct 26 • Infinite Canvas</text>

                        <circle cx="310" cy="300" r="22" fill="#0F4C81" />
                        <text x="310" y="306" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="bold">+</text>
                      </g>

                      {/* Desktop Wireframe */}
                      <g>
                        <rect x="420" y="40" width="440" height="300" rx="16" fill="#FFFFFF" stroke="#141414" strokeWidth="2.5" />
                        <line x1="420" y1="75" x2="860" y2="75" stroke="#141414" strokeWidth="1.5" />
                        <circle cx="445" cy="58" r="4" fill="#E87A90" />
                        <circle cx="460" cy="58" r="4" fill="#F59E0B" />
                        <circle cx="475" cy="58" r="4" fill="#16c847" />
                        <text x="640" y="62" textAnchor="middle" fill="#666055" fontSize="11" fontFamily="monospace">app.smritinotes.site</text>

                        {/* Sidebar */}
                        <line x1="560" y1="75" x2="560" y2="340" stroke="#141414" strokeWidth="1.5" />
                        <rect x="435" y="90" width="110" height="20" rx="4" fill="#FAF7F2" />
                        <text x="445" y="104" fill="#141414" fontSize="10" fontWeight="bold">Collections</text>
                        <text x="445" y="130" fill="#666055" fontSize="10">Architecture</text>
                        <text x="445" y="150" fill="#666055" fontSize="10">Excalidraw</text>
                        <text x="445" y="170" fill="#666055" fontSize="10">Templates</text>

                        {/* Main Editor Wireframe */}
                        <text x="580" y="110" fill="#141414" fontSize="14" fontWeight="bold"># Architecture Decisions</text>
                        <rect x="580" y="130" width="260" height="120" rx="8" fill="#FAF7F2" stroke="#0F4C81" strokeWidth="1.5" strokeDasharray="4 2" />
                        <text x="710" y="195" textAnchor="middle" fill="#0F4C81" fontSize="11" fontWeight="bold">[ Embedded Excalidraw Canvas ]</text>
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
                    {/* Pipeline & State Machine */}
                    <svg viewBox="0 0 900 360" className="w-full h-auto drop-shadow-sm font-sans">
                      {/* State 1: IDLE */}
                      <g>
                        <rect x="80" y="140" width="130" height="80" rx="14" fill="#FFFFFF" stroke="#0F4C81" strokeWidth="2.5" />
                        <text x="145" y="185" textAnchor="middle" fill="#141414" fontSize="13" fontWeight="bold">IDLE / DRAFT</text>
                      </g>

                      <path d="M 210 180 L 290 180" fill="none" stroke={strokeColor} strokeWidth="2.5" markerEnd="url(#arrowHead)" />
                      <text x="250" y="170" textAnchor="middle" fill="#666055" fontSize="10" fontFamily="monospace">onEdit()</text>

                      {/* State 2: LOCAL WRITE */}
                      <g>
                        <rect x="300" y="140" width="150" height="80" rx="14" fill="#FFFFFF" stroke="#1B4332" strokeWidth="2.5" />
                        <text x="375" y="175" textAnchor="middle" fill="#141414" fontSize="13" fontWeight="bold">SAVING LOCAL</text>
                        <text x="375" y="195" textAnchor="middle" fill="#16c847" fontSize="10" fontFamily="monospace">sub-4ms IndexedDB</text>
                      </g>

                      <path d="M 450 180 L 530 180" fill="none" stroke={strokeColor} strokeWidth="2.5" markerEnd="url(#arrowHead)" />
                      <text x="490" y="170" textAnchor="middle" fill="#666055" fontSize="10" fontFamily="monospace">triggerSync()</text>

                      {/* Decision Diamond */}
                      <g>
                        <polygon points="590,130 650,180 590,230 530,180" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="2.5" />
                        <text x="590" y="184" textAnchor="middle" fill="#141414" fontSize="11" fontWeight="bold">Online?</text>
                      </g>

                      {/* Branch Yes: Cloud Sync */}
                      <path d="M 650 180 L 730 180" fill="none" stroke="#16c847" strokeWidth="2.5" markerEnd="url(#arrowHead)" />
                      <text x="690" y="170" textAnchor="middle" fill="#16c847" fontSize="10" fontWeight="bold">YES</text>

                      <g>
                        <rect x="740" y="140" width="130" height="80" rx="14" fill="#FFFFFF" stroke="#16c847" strokeWidth="2.5" />
                        <text x="805" y="175" textAnchor="middle" fill="#141414" fontSize="12" fontWeight="bold">SYNCED</text>
                        <text x="805" y="195" textAnchor="middle" fill="#666055" fontSize="10" fontFamily="monospace">Encrypted Peer</text>
                      </g>

                      {/* Branch No: Offline Queue */}
                      <path d="M 590 230 Q 590 300 450 300 Q 300 300 300 230" fill="none" stroke="#E87A90" strokeWidth="2" markerEnd="url(#arrowHead)" strokeDasharray="4 2" />
                      <text x="450" y="315" textAnchor="middle" fill="#E87A90" fontSize="10" fontFamily="monospace">NO: Stays 100% Offline in Local Queue</text>
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Status Bar */}
            <div className="p-4 bg-[#FAF7F2] border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#666055]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#16c847] animate-pulse" />
                <span className="text-[#141414] font-bold">Active Template:</span>
                <span className="text-[#0F4C81]">{activeTemplate.name}</span>
                <span className="text-black/30">•</span>
                <span>{activeTemplate.desc}</span>
              </div>

              <a
                href={APP_REDIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#141414] hover:text-[#0F4C81] flex items-center gap-1 shrink-0"
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

