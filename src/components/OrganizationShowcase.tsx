import React, { useState } from 'react';
import { 
  FolderTree, 
  Search, 
  Pin, 
  Archive, 
  Trash2, 
  Folder, 
  FileText, 
  Download, 
  Upload, 
  ArrowRight
} from 'lucide-react';
import { ColorPalette, APP_REDIRECT_URL, CREATOR_NAME } from '../data/palettes';
import { ThreeDCard } from './ThreeDCard';

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
    <section id="organization" className="py-24 sm:py-32 relative bg-[#05080c] border-t border-[#1c1c1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* DOVV Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#1c1c1c]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#facc15] font-bold uppercase tracking-widest">
                [ 03 // SPATIAL ORGANIZATION ]
              </span>
              <span className="dovv-chip text-[#c6f432] text-xs py-0.5">
                Current Feature
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-archivo font-black text-white tracking-tight leading-[0.95] uppercase">
              ORDER WITHOUT OVERHEAD.<br />
              <span className="text-[#facc15]">FOLDERS. SEARCH. PINS.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Keep notes organized with folders, search, pinned notes, Archive, and Trash. No convoluted database setups or slow sync pipelines — just fast, logical structure.
            </p>
          </div>

          <button
            onClick={() => setSearchModalOpen(true)}
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#111622] hover:bg-[#1a2233] border border-[#222] text-white font-mono text-xs uppercase tracking-wider transition-all shadow-lg shrink-0 group"
          >
            <Search className="w-4 h-4 text-[#c6f432] group-hover:scale-110 transition-transform" />
            <span>Try Command Bar (⌘K)</span>
          </button>
        </div>

        {/* 4 Step Cards in DOVV Studio Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div 
            onClick={() => setActiveFilter(activeFilter === 'folder-arch' ? 'all' : 'folder-arch')}
            className={`dovv-card p-6 cursor-pointer transition-all ${
              activeFilter === 'folder-arch' ? 'ring-2 ring-[#c6f432]' : ''
            }`}
          >
            <div className="font-mono text-xs text-[#ed4a1c] font-bold mb-3">01 // FOLDERS</div>
            <h4 className="font-archivo text-xl font-bold text-white uppercase mb-2">Projects</h4>
            <p className="text-xs text-slate-400 font-mono leading-relaxed">
              Group related notes cleanly by project, sprint, or study topic.
            </p>
          </div>

          <div 
            onClick={() => setSearchModalOpen(true)}
            className="dovv-card p-6 cursor-pointer transition-all hover:border-[#c6f432]"
          >
            <div className="font-mono text-xs text-[#c6f432] font-bold mb-3">02 // SEARCH</div>
            <h4 className="font-archivo text-xl font-bold text-white uppercase mb-2">Fuzzy ⌘K</h4>
            <p className="text-xs text-slate-400 font-mono leading-relaxed">
              Sub-millisecond fuzzy search across titles, tags, and full text.
            </p>
          </div>

          <div 
            onClick={() => setActiveFilter(activeFilter === 'pinned' ? 'all' : 'pinned')}
            className={`dovv-card p-6 cursor-pointer transition-all ${
              activeFilter === 'pinned' ? 'ring-2 ring-[#facc15]' : ''
            }`}
          >
            <div className="font-mono text-xs text-[#facc15] font-bold mb-3">03 // PINNED</div>
            <h4 className="font-archivo text-xl font-bold text-white uppercase mb-2">Anchors</h4>
            <p className="text-xs text-slate-400 font-mono leading-relaxed">
              Lock key projects and daily anchors right at the top of your list.
            </p>
          </div>

          <div 
            onClick={() => setActiveFilter(activeFilter === 'archive' ? 'all' : 'archive')}
            className={`dovv-card p-6 cursor-pointer transition-all ${
              activeFilter === 'archive' ? 'ring-2 ring-emerald-400' : ''
            }`}
          >
            <div className="font-mono text-xs text-emerald-400 font-bold mb-3">04 // ARCHIVE</div>
            <h4 className="font-archivo text-xl font-bold text-white uppercase mb-2">Clean Desk</h4>
            <p className="text-xs text-slate-400 font-mono leading-relaxed">
              De-clutter your active desk while retaining searchable archives.
            </p>
          </div>
        </div>

        {/* Live Filterable Notes Table Preview in DOVV Card Frame */}
        <div className="dovv-card p-0 rounded-[32px] overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-[#222222] flex flex-wrap items-center justify-between gap-4 bg-[#0a0e16]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-slate-400 font-bold uppercase">Viewing:</span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { key: 'all', label: 'All Active' },
                  { key: 'pinned', label: 'Pinned' },
                  { key: 'folder-arch', label: 'Architecture' },
                  { key: 'archive', label: 'Archive' },
                  { key: 'trash', label: 'Trash' },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveFilter(tab.key as any)}
                    className={`dovv-chip text-xs font-mono uppercase ${
                      activeFilter === tab.key
                        ? 'bg-[#ed4a1c] text-white font-bold border-transparent'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-[#c6f432] font-bold">
                100% Offline Ready
              </span>
            </div>
          </div>

          <div className="divide-y divide-[#1c1c1c]">
            {displayedNotes.map((note) => (
              <div
                key={note.id}
                className="p-4 sm:px-6 flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="min-w-0">
                    <h5 className="font-archivo text-base font-bold text-white uppercase truncate">
                      {note.title}
                    </h5>
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mt-0.5">
                      <span className="text-[#facc15]">📁 {note.folder}</span>
                      <span>•</span>
                      <span>{note.words} words</span>
                      <span>•</span>
                      <span>{note.date}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {note.pinned && (
                    <span className="dovv-chip text-[#facc15] font-mono text-[11px] py-0.5">
                      Pinned
                    </span>
                  )}
                  {note.archived && (
                    <span className="dovv-chip text-emerald-400 font-mono text-[11px] py-0.5">
                      Archived
                    </span>
                  )}
                  {note.trash && (
                    <span className="dovv-chip text-rose-400 font-mono text-[11px] py-0.5">
                      Trash
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#0a0e16] border-t border-[#1c1c1c] text-xs font-mono text-slate-400 flex items-center justify-between">
            <span>Showing {displayedNotes.length} notes</span>
            <a 
              href={APP_REDIRECT_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#c6f432] font-bold hover:underline"
            >
              Organize on app.smritinotes.site →
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Search Modal Dialog Simulator */}
      {searchModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/85 backdrop-blur-md"
          onClick={() => setSearchModalOpen(false)}
        >
          <div 
            className="w-full max-w-xl dovv-card p-0 rounded-[32px] overflow-hidden border border-[#333]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-[#222] flex items-center gap-3 bg-[#0a0e16]">
              <Search className="w-5 h-5 text-[#c6f432]" />
              <input
                type="text"
                autoFocus
                placeholder="Search notes, folders, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white text-sm font-mono focus:outline-none placeholder-slate-500"
              />
              <button 
                onClick={() => setSearchModalOpen(false)}
                className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-[#1c1c1c] font-mono"
              >
                ESC
              </button>
            </div>

            <div className="p-2 max-h-80 overflow-y-auto divide-y divide-[#1c1c1c]">
              {searchResults.length > 0 ? (
                searchResults.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => {
                      alert(`Opening note: "${item.title}"`);
                      setSearchModalOpen(false);
                    }}
                    className="p-3.5 hover:bg-white/5 rounded-2xl cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div>
                      <div className="text-sm font-bold font-archivo uppercase text-white">{item.title}</div>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">📁 {item.folder} • {item.words} words</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-xs text-slate-400 font-mono">
                  No notes matching "{searchQuery}"
                </div>
              )}
            </div>

            <div className="p-3 bg-[#0a0e16] border-t border-[#222] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Navigate with ↑ ↓ • Press Enter to select</span>
              <span className="text-[#ed4a1c] font-bold">Smriti Sub-ms Search</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
