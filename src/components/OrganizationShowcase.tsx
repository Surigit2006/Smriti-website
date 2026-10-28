import React, { useState } from 'react';
import { 
  FolderTree, 
  Search, 
  Pin, 
  Archive, 
  Trash2, 
  Folder, 
  FileText, 
  ArrowRight,
  Sparkles,
  Command,
  X
} from 'lucide-react';
import { AppPalette, APP_REDIRECT_URL } from '../data/palettes';
import { ThreeDCard } from './ThreeDCard';

interface OrganizationShowcaseProps {
  activePalette?: AppPalette;
  isDark?: boolean;
}

export const OrganizationShowcase: React.FC<OrganizationShowcaseProps> = ({ isDark = true }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'pinned' | 'archive' | 'trash' | 'folder-arch'>('all');
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const allNotes = [
    { id: 1, title: 'Smriti Architecture & Spatial Spec', folder: 'Architecture', pinned: true, archived: false, trash: false, words: 1240, date: 'Oct 28' },
    { id: 2, title: 'Weekly Sprint & Goal Tracker', folder: 'Personal', pinned: true, archived: false, trash: false, words: 410, date: 'Oct 27' },
    { id: 3, title: '162 Color Palette Contrast Matrix', folder: 'Design', pinned: false, archived: false, trash: false, words: 890, date: 'Oct 26' },
    { id: 4, title: 'Deep Work Habits & Dopamine Detox', folder: 'Essays', pinned: false, archived: false, trash: false, words: 1620, date: 'Oct 22' },
    { id: 5, title: 'Q3 Retrospective & Learned Lessons', folder: 'Work', pinned: false, archived: true, trash: false, words: 950, date: 'Sep 30' },
    { id: 6, title: 'Excalidraw Vector Engine Integration Spec', folder: 'Architecture', pinned: true, archived: false, trash: false, words: 2140, date: 'Sep 12' },
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
    <section 
      id="organization" 
      className={`py-24 sm:py-32 relative border-t transition-colors duration-500 overflow-hidden ${
        isDark 
          ? 'bg-[#08090D] border-white/10 text-white' 
          : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Shopify Editions Section Header */}
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
                [ 02 // SPATIAL HIERARCHY ]
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold ${
                isDark ? 'bg-white/10 text-white' : 'bg-slate-200 text-slate-800'
              }`}>
                Current Feature
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-archivo font-black tracking-tight leading-[0.95] uppercase">
              ORDER WITHOUT OVERHEAD.<br />
              <span className="text-[#00F076]">FOLDERS. SEARCH. PINNED THOUGHTS.</span>
            </h2>

            <p className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Keep notes organized with structured collections, instantaneous ⌘K search, pinned anchors, Archive, and Trash. Zero friction, zero complex database queries.
            </p>
          </div>

          <button
            onClick={() => setSearchModalOpen(true)}
            className={`inline-flex items-center gap-3 px-6 py-3.5 rounded-full border font-mono text-xs uppercase tracking-wider transition-all shadow-md shrink-0 group ${
              isDark 
                ? 'bg-[#131722] hover:bg-[#1c2233] border-white/10 text-white' 
                : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-900'
            }`}
          >
            <Search className="w-4 h-4 text-[#00F076] group-hover:scale-110 transition-transform" />
            <span>Try Command Bar (⌘K)</span>
          </button>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div 
            onClick={() => setActiveFilter(activeFilter === 'folder-arch' ? 'all' : 'folder-arch')}
            className={`p-6 rounded-2xl cursor-pointer transition-all border ${
              activeFilter === 'folder-arch'
                ? 'ring-2 ring-[#00F076] bg-[#00F076]/5'
                : isDark ? 'bg-[#131722] border-white/10 hover:border-white/20' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="font-mono text-xs text-[#00F076] font-bold mb-3">01 // COLLECTIONS</div>
            <h4 className="font-archivo text-xl font-bold uppercase mb-2">Projects & Folders</h4>
            <p className={`text-xs font-mono leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Group related notes cleanly by project, system architecture, or study topic.
            </p>
          </div>

          <div 
            onClick={() => setSearchModalOpen(true)}
            className={`p-6 rounded-2xl cursor-pointer transition-all border ${
              isDark ? 'bg-[#131722] border-white/10 hover:border-[#00F076]' : 'bg-slate-50 border-slate-200 hover:border-[#00F076]'
            }`}
          >
            <div className="font-mono text-xs text-[#00E5FF] font-bold mb-3">02 // SEARCH</div>
            <h4 className="font-archivo text-xl font-bold uppercase mb-2">Instant ⌘K</h4>
            <p className={`text-xs font-mono leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Sub-millisecond fuzzy search across titles, Excalidraw diagrams, and body text.
            </p>
          </div>

          <div 
            onClick={() => setActiveFilter(activeFilter === 'pinned' ? 'all' : 'pinned')}
            className={`p-6 rounded-2xl cursor-pointer transition-all border ${
              activeFilter === 'pinned'
                ? 'ring-2 ring-amber-400 bg-amber-400/5'
                : isDark ? 'bg-[#131722] border-white/10 hover:border-white/20' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="font-mono text-xs text-amber-400 font-bold mb-3">03 // PRIORITIES</div>
            <h4 className="font-archivo text-xl font-bold uppercase mb-2">Pinned Notes</h4>
            <p className={`text-xs font-mono leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Keep high-leverage plans anchored at the top of your sidebar always.
            </p>
          </div>

          <div 
            onClick={() => setActiveFilter(activeFilter === 'archive' ? 'all' : 'archive')}
            className={`p-6 rounded-2xl cursor-pointer transition-all border ${
              activeFilter === 'archive'
                ? 'ring-2 ring-violet-400 bg-violet-400/5'
                : isDark ? 'bg-[#131722] border-white/10 hover:border-white/20' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="font-mono text-xs text-violet-400 font-bold mb-3">04 // HYGIENE</div>
            <h4 className="font-archivo text-xl font-bold uppercase mb-2">Archive & Trash</h4>
            <p className={`text-xs font-mono leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Stash finished milestones out of sight without permanent deletion anxiety.
            </p>
          </div>
        </div>

        {/* Interactive Workspace Simulator */}
        <ThreeDCard maxTilt={2}>
          <div className={`p-6 sm:p-8 rounded-3xl border shadow-2xl relative transition-colors ${
            isDark ? 'bg-[#131722] border-white/10' : 'bg-white border-slate-200'
          }`}>
            <div className={`flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b ${
              isDark ? 'border-white/10' : 'border-slate-200'
            }`}>
              <div className="flex items-center gap-2 overflow-x-auto">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                    activeFilter === 'all'
                      ? 'bg-[#00F076] text-black shadow-sm'
                      : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All Notes ({allNotes.filter(n => !n.archived && !n.trash).length})
                </button>
                <button
                  onClick={() => setActiveFilter('pinned')}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                    activeFilter === 'pinned'
                      ? 'bg-amber-400 text-black shadow-sm'
                      : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Pinned Only
                </button>
                <button
                  onClick={() => setActiveFilter('folder-arch')}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                    activeFilter === 'folder-arch'
                      ? 'bg-[#00E5FF] text-black shadow-sm'
                      : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Architecture Folder
                </button>
                <button
                  onClick={() => setActiveFilter('archive')}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                    activeFilter === 'archive'
                      ? 'bg-violet-400 text-black shadow-sm'
                      : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Archive
                </button>
              </div>

              <div className="text-xs font-mono text-slate-400">
                Click filters above to simulate live sidebar state
              </div>
            </div>

            {/* Simulated Note List */}
            <div className="space-y-3">
              {displayedNotes.map((note) => (
                <div
                  key={note.id}
                  className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                    isDark 
                      ? 'bg-[#0E1118] border-white/10 hover:border-white/20' 
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <FileText className={`w-4 h-4 shrink-0 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
                    <div>
                      <div className="font-archivo font-bold text-sm sm:text-base flex items-center gap-2">
                        <span>{note.title}</span>
                        {note.pinned && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                            PINNED
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mt-1">
                        <Folder className="w-3 h-3 text-[#00F076]" />
                        <span>{note.folder}</span>
                        <span>•</span>
                        <span>{note.words} words</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-slate-400 shrink-0">
                    {note.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ThreeDCard>

        {/* Command Bar Modal Simulator */}
        {searchModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className={`w-full max-w-xl rounded-3xl border shadow-2xl p-6 ${
              isDark ? 'bg-[#0E1118] border-white/20 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-[#00F076]">
                  <Command className="w-4 h-4" />
                  <span>Command Center ⌘K</span>
                </div>
                <button 
                  onClick={() => setSearchModalOpen(false)}
                  className="p-1 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Type note title, keyword, or Excalidraw diagram..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-mono outline-none ${
                    isDark 
                      ? 'bg-[#131722] border-white/10 text-white placeholder-slate-500 focus:border-[#00F076]' 
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#00F076]'
                  }`}
                />
              </div>

              <div className="max-h-60 overflow-y-auto space-y-2">
                {searchResults.length === 0 ? (
                  <div className="py-6 text-center text-xs font-mono text-slate-500">
                    No notes matching "{searchQuery}"
                  </div>
                ) : (
                  searchResults.map((n) => (
                    <div 
                      key={n.id}
                      onClick={() => setSearchModalOpen(false)}
                      className={`p-3 rounded-xl cursor-pointer flex items-center justify-between text-xs font-mono transition-colors ${
                        isDark ? 'hover:bg-white/10' : 'hover:bg-slate-100'
                      }`}
                    >
                      <div className="font-semibold">{n.title}</div>
                      <div className="text-slate-400">{n.folder}</div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
