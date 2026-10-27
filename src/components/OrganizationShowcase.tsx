import React, { useState } from 'react';
import { 
  FolderTree, 
  Search, 
  Pin, 
  Archive, 
  Trash2, 
  Folder, 
  FileText, 
  Command, 
  CheckCircle2, 
  Download, 
  Upload, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ColorPalette } from '../data/palettes';

interface OrganizationShowcaseProps {
  activePalette: ColorPalette;
}

export const OrganizationShowcase: React.FC<OrganizationShowcaseProps> = ({ activePalette }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'pinned' | 'archive' | 'trash' | 'folder-arch'>('all');
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const allNotes = [
    { id: 1, title: 'Smriti 2.0 Architectural Whitepaper', folder: 'Architecture', pinned: true, archived: false, trash: false, words: 1240, date: 'Oct 27' },
    { id: 2, title: 'Weekly Sprint & Goal Tracker', folder: 'Personal', pinned: true, archived: false, trash: false, words: 410, date: 'Oct 26' },
    { id: 3, title: '162 Color Palette Contrast Matrix', folder: 'Design', pinned: false, archived: false, trash: false, words: 890, date: 'Oct 25' },
    { id: 4, title: 'Deep Work Habits & Dopamine Detox', folder: 'Personal', pinned: false, archived: false, trash: false, words: 1620, date: 'Oct 21' },
    { id: 5, title: 'Q3 Retrospective & Learned Lessons', folder: 'Work', pinned: false, archived: true, trash: false, words: 950, date: 'Sep 30' },
    { id: 6, title: 'Drafting Old Tab Concepts (Deprecated)', folder: 'Archive', pinned: false, archived: true, trash: false, words: 340, date: 'Sep 12' },
    { id: 7, title: 'Scrap Grocery & Quick Brain Dump', folder: 'Personal', pinned: false, archived: false, trash: true, words: 80, date: 'Aug 19' },
  ];

  const displayedNotes = allNotes.filter((n) => {
    if (activeFilter === 'pinned') return n.pinned && !n.trash;
    if (activeFilter === 'archive') return n.archived && !n.trash;
    if (activeFilter === 'trash') return n.trash;
    if (activeFilter === 'folder-arch') return n.folder === 'Architecture' && !n.trash;
    return !n.archived && !n.trash;
  });

  const searchResults = allNotes.filter((n) =>
    n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    n.folder.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="organization" className="py-24 sm:py-32 relative bg-[#090d16] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <FolderTree className="w-3.5 h-3.5" />
              <span>Effortless Organization</span>
              <span className="bg-emerald-500/20 text-emerald-400 px-1.5 py-0.2 rounded text-[10px]">
                Current
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Order without the friction. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-amber-300">
                Folders, Search, Pin, Archive & Trash.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Keep notes organized with folders, search, pinned notes, Archive, and Trash. No convoluted database setups or slow sync pipelines — just fast, logical structure.
            </p>
          </div>

          <button
            onClick={() => setSearchModalOpen(true)}
            className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-400/50 text-slate-300 hover:text-white transition-all shadow-lg shrink-0 group"
          >
            <Search className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Try Command Bar</span>
            <kbd className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-slate-400 border border-white/10">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* 5 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {/* Folders */}
          <div 
            onClick={() => setActiveFilter(activeFilter === 'folder-arch' ? 'all' : 'folder-arch')}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              activeFilter === 'folder-arch' 
                ? 'bg-indigo-950/40 border-indigo-500/60 shadow-lg' 
                : 'bg-slate-900/60 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
              <Folder className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-sm text-white mb-1">Folders</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Group related notes cleanly by project, sprint, or study topic.
            </p>
          </div>

          {/* Instant Search */}
          <div 
            onClick={() => setSearchModalOpen(true)}
            className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-white/20 transition-all cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Search className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-sm text-white mb-1">Search</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sub-millisecond fuzzy search across titles, tags, and full text.
            </p>
          </div>

          {/* Pinned Notes */}
          <div 
            onClick={() => setActiveFilter(activeFilter === 'pinned' ? 'all' : 'pinned')}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              activeFilter === 'pinned' 
                ? 'bg-amber-950/40 border-amber-500/60 shadow-lg' 
                : 'bg-slate-900/60 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
              <Pin className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-sm text-white mb-1">Pinned Notes</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Lock key projects and daily anchors right at the top of your list.
            </p>
          </div>

          {/* Archive */}
          <div 
            onClick={() => setActiveFilter(activeFilter === 'archive' ? 'all' : 'archive')}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              activeFilter === 'archive' 
                ? 'bg-emerald-950/40 border-emerald-500/60 shadow-lg' 
                : 'bg-slate-900/60 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <Archive className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-sm text-white mb-1">Archive</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              De-clutter your active desk while retaining searchable archives.
            </p>
          </div>

          {/* Trash */}
          <div 
            onClick={() => setActiveFilter(activeFilter === 'trash' ? 'all' : 'trash')}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              activeFilter === 'trash' 
                ? 'bg-rose-950/40 border-rose-500/60 shadow-lg' 
                : 'bg-slate-900/60 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center mb-3">
              <Trash2 className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-sm text-white mb-1">Trash</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Safe deletion staging. Restore any note with one click.
            </p>
          </div>
        </div>

        {/* Live Filterable Notes Table Preview */}
        <div className="bg-slate-900/80 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl">
          {/* Table Header Controls */}
          <div className="p-4 sm:p-5 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 bg-slate-950/50">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-white">Viewing:</span>
              <div className="flex flex-wrap gap-1">
                {[
                  { key: 'all', label: 'All Active' },
                  { key: 'pinned', label: 'Pinned' },
                  { key: 'folder-arch', label: '📁 Architecture' },
                  { key: 'archive', label: 'Archive' },
                  { key: 'trash', label: 'Trash' },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveFilter(tab.key as any)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      activeFilter === tab.key
                        ? 'bg-white/20 text-white font-semibold'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <button 
                onClick={() => alert('JSON Export downloaded: smriti_backup.json')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export JSON</span>
              </button>
              <button 
                onClick={() => alert('JSON Import dialog ready')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Import JSON</span>
              </button>
            </div>
          </div>

          {/* List of Notes */}
          <div className="divide-y divide-white/5">
            {displayedNotes.map((note) => (
              <div
                key={note.id}
                className="p-4 sm:px-6 flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    {note.trash ? (
                      <Trash2 className="w-4 h-4 text-rose-400" />
                    ) : note.archived ? (
                      <Archive className="w-4 h-4 text-emerald-400" />
                    ) : note.pinned ? (
                      <Pin className="w-4 h-4 text-amber-400" />
                    ) : (
                      <FileText className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors truncate">
                      {note.title}
                    </h5>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                      <span className="text-amber-400/90 font-mono">📁 {note.folder}</span>
                      <span>•</span>
                      <span>{note.words} words</span>
                      <span>•</span>
                      <span>{note.date}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {note.pinned && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Pinned
                    </span>
                  )}
                  {note.archived && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Archived
                    </span>
                  )}
                  {note.trash && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-rose-500/20 text-rose-300 border border-rose-500/30">
                      In Trash
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-slate-950/60 border-t border-white/10 text-xs text-slate-400 flex items-center justify-between">
            <span>Showing {displayedNotes.length} notes</span>
            <span className="text-indigo-400 flex items-center gap-1 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Offline Ready
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Search Modal Dialog Simulator */}
      {searchModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSearchModalOpen(false)}
        >
          <div 
            className="w-full max-w-xl bg-slate-900 border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-white/10 flex items-center gap-3">
              <Search className="w-5 h-5 text-indigo-400" />
              <input
                type="text"
                autoFocus
                placeholder="Search notes, folders, and keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-slate-500"
              />
              <button 
                onClick={() => setSearchModalOpen(false)}
                className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-white/5 border border-white/10"
              >
                ESC
              </button>
            </div>

            <div className="p-2 max-h-80 overflow-y-auto divide-y divide-white/5">
              {searchResults.length > 0 ? (
                searchResults.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => {
                      alert(`Opening note: "${item.title}"`);
                      setSearchModalOpen(false);
                    }}
                    className="p-3 hover:bg-white/5 rounded-xl cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div>
                      <div className="text-sm font-medium text-white">{item.title}</div>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">📁 {item.folder} • {item.words} words</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-xs text-slate-400">
                  No notes matching "{searchQuery}"
                </div>
              )}
            </div>

            <div className="p-3 bg-slate-950 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <span>Navigate with ↑ ↓ • Press Enter to select</span>
              <span className="font-mono text-indigo-400">Smriti Fuzzy Search</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

