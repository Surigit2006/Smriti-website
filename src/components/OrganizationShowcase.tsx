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
  activePalette: AppPalette;
}

export const OrganizationShowcase: React.FC<OrganizationShowcaseProps> = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'pinned' | 'archive' | 'trash' | 'folder-arch'>('all');
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const allNotes = [
    { id: 1, title: 'Smriti Architecture & Spatial Spec', folder: 'Architecture', pinned: true, archived: false, trash: false, words: 1240, date: 'Oct 28' },
    { id: 2, title: 'Weekly Sprint & Goal Tracker', folder: 'Personal', pinned: true, archived: false, trash: false, words: 410, date: 'Oct 27' },
    { id: 3, title: '162 Color Palette Contrast Matrix', folder: 'Design', pinned: false, archived: false, trash: false, words: 890, date: 'Oct 26' },
    { id: 4, title: 'Deep Work Habits & Dopamine Detox', folder: 'Essays', pinned: false, archived: false, trash: false, words: 1620, date: 'Oct 22' },
    { id: 5, title: 'Q3 Retrospective & Learned Lessons', folder: 'Work', pinned: false, archived: true, trash: false, words: 950, date: 'Sep 30' },
    { id: 6, title: 'Old Tab Hierarchy Draft (Deprecated)', folder: 'Archive', pinned: false, archived: true, trash: false, words: 340, date: 'Sep 12' },
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
    <section id="organization" className="py-24 sm:py-32 relative bg-[#F5F0E8] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* DOVV Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/[0.07]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#F59E0B] font-bold uppercase tracking-widest">
                [ 02 // SPATIAL ORGANIZATION ]
              </span>
              <span className="dovv-chip text-[#141414] text-xs py-0.5">
                Current Feature
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-archivo font-black text-[#141414] tracking-tight leading-[0.95] uppercase">
              ORDER WITHOUT OVERHEAD.<br />
              <span className="text-[#D97706]">FOLDERS. SEARCH. PINS.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#666055] leading-relaxed max-w-2xl font-normal">
              Keep notes organized with folders, search, pinned notes, Archive, and Trash. No convoluted database setups or slow sync pipelines — just fast, logical structure.
            </p>
          </div>

          <button
            onClick={() => setSearchModalOpen(true)}
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF7F2] border border-black/[0.08] text-[#141414] font-mono text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow shrink-0 group"
          >
            <Search className="w-4 h-4 text-[#0F4C81] group-hover:scale-110 transition-transform" />
            <span>Try Command Bar (⌘K)</span>
          </button>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div 
            onClick={() => setActiveFilter(activeFilter === 'folder-arch' ? 'all' : 'folder-arch')}
            className={`dovv-card p-6 cursor-pointer transition-all bg-white ${
              activeFilter === 'folder-arch' ? 'ring-2 ring-[#0F4C81]' : ''
            }`}
          >
            <div className="font-mono text-xs text-[#0F4C81] font-bold mb-3">01 // FOLDERS</div>
            <h4 className="font-archivo text-xl font-bold text-[#141414] uppercase mb-2">Collections</h4>
            <p className="text-xs text-[#666055] font-mono leading-relaxed">
              Group related notes cleanly by project, sprint, or study topic.
            </p>
          </div>

          <div 
            onClick={() => setSearchModalOpen(true)}
            className="dovv-card p-6 cursor-pointer transition-all bg-white hover:border-[#0F4C81]"
          >
            <div className="font-mono text-xs text-[#F59E0B] font-bold mb-3">02 // SEARCH</div>
            <h4 className="font-archivo text-xl font-bold text-[#141414] uppercase mb-2">Instant ⌘K</h4>
            <p className="text-xs text-[#666055] font-mono leading-relaxed">
              Sub-millisecond fuzzy search across titles, tags, and full body text.
            </p>
          </div>

          <div 
            onClick={() => setActiveFilter(activeFilter === 'pinned' ? 'all' : 'pinned')}
            className={`dovv-card p-6 cursor-pointer transition-all bg-white ${
              activeFilter === 'pinned' ? 'ring-2 ring-[#F59E0B]' : ''
            }`}
          >
            <div className="font-mono text-xs text-[#E87A90] font-bold mb-3">03 // PRIORITIES</div>
            <h4 className="font-archivo text-xl font-bold text-[#141414] uppercase mb-2">Pinned Notes</h4>
            <p className="text-xs text-[#666055] font-mono leading-relaxed">
              Pin high-priority items so they stay anchored at the top of your sidebar.
            </p>
          </div>

          <div 
            onClick={() => setActiveFilter(activeFilter === 'archive' ? 'all' : 'archive')}
            className={`dovv-card p-6 cursor-pointer transition-all bg-white ${
              activeFilter === 'archive' ? 'ring-2 ring-[#141414]' : ''
            }`}
          >
            <div className="font-mono text-xs text-[#141414] font-bold mb-3">04 // HYGIENE</div>
            <h4 className="font-archivo text-xl font-bold text-[#141414] uppercase mb-2">Archive & Trash</h4>
            <p className="text-xs text-[#666055] font-mono leading-relaxed">
              Safely store completed work out of sight, or restore deleted notes.
            </p>
          </div>
        </div>

        {/* Interactive Workspace Organization Demo */}
        <ThreeDCard maxTilt={3}>
          <div className="dovv-card p-6 sm:p-8 bg-white border border-black/[0.08] shadow-md rounded-3xl">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-black/[0.06]">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                    activeFilter === 'all'
                      ? 'bg-[#141414] text-white'
                      : 'bg-[#FAF7F2] text-[#666055] hover:text-[#141414]'
                  }`}
                >
                  All Notes ({allNotes.filter(n => !n.archived && !n.trash).length})
                </button>

                <button
                  onClick={() => setActiveFilter('pinned')}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                    activeFilter === 'pinned'
                      ? 'bg-[#F59E0B] text-black'
                      : 'bg-[#FAF7F2] text-[#666055] hover:text-[#141414]'
                  }`}
                >
                  <Pin className="w-3 h-3" />
                  <span>Pinned ({allNotes.filter(n => n.pinned && !n.trash).length})</span>
                </button>

                <button
                  onClick={() => setActiveFilter('archive')}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                    activeFilter === 'archive'
                      ? 'bg-[#141414] text-white'
                      : 'bg-[#FAF7F2] text-[#666055] hover:text-[#141414]'
                  }`}
                >
                  <Archive className="w-3 h-3" />
                  <span>Archive ({allNotes.filter(n => n.archived).length})</span>
                </button>

                <button
                  onClick={() => setActiveFilter('trash')}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                    activeFilter === 'trash'
                      ? 'bg-[#E87A90] text-white'
                      : 'bg-[#FAF7F2] text-[#666055] hover:text-[#141414]'
                  }`}
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Trash ({allNotes.filter(n => n.trash).length})</span>
                </button>
              </div>

              <span className="text-xs font-mono text-[#666055]">
                {displayedNotes.length} notes in current view
              </span>
            </div>

            {/* Note List Items */}
            <div className="space-y-2.5">
              {displayedNotes.map((note) => (
                <div
                  key={note.id}
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF7F2] hover:bg-[#F0EAE1] border border-black/[0.04] transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-white border border-black/[0.06] flex items-center justify-center text-[#141414]">
                      <FileText className="w-4 h-4 text-[#0F4C81]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-[#141414] group-hover:text-[#0F4C81] transition-colors">
                          {note.title}
                        </span>
                        {note.pinned && (
                          <span className="px-2 py-0.5 rounded-md bg-[#F59E0B]/15 text-[#D97706] text-[10px] font-mono font-bold">
                            Pinned
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-xs font-mono text-[#666055] mt-0.5">
                        <span className="text-[#0F4C81]">{note.folder}</span>
                        <span>•</span>
                        <span>{note.words} words</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-[#666055]">
                    {note.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ThreeDCard>

        {/* ⌘K Search Modal Simulation */}
        {searchModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <div className="w-full max-w-xl bg-white rounded-3xl p-6 shadow-2xl border border-black/10">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/[0.06]">
                <div className="flex items-center gap-2.5 w-full">
                  <Search className="w-5 h-5 text-[#0F4C81]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search notes, folders, and tags..."
                    className="w-full text-base font-sans focus:outline-none text-[#141414] bg-transparent"
                    autoFocus
                  />
                </div>
                <button
                  onClick={() => setSearchModalOpen(false)}
                  className="p-1.5 rounded-lg text-black/40 hover:text-black hover:bg-black/5"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1.5 max-h-60 overflow-y-auto">
                {searchResults.map((n) => (
                  <div
                    key={n.id}
                    className="p-3 rounded-xl hover:bg-[#FAF7F2] flex items-center justify-between cursor-pointer text-xs font-mono"
                  >
                    <span className="font-semibold text-[#141414]">{n.title}</span>
                    <span className="text-[#0F4C81]">{n.folder}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 mt-4 border-t border-black/[0.06] text-right">
                <span className="text-[11px] font-mono text-[#666055]">Press ESC or click close</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
