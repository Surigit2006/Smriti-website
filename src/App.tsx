import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PaletteShowcase } from './components/PaletteShowcase';
import { EditorShowcase } from './components/EditorShowcase';
import { OrganizationShowcase } from './components/OrganizationShowcase';
import { ConnectedStickyNotesShowcase } from './components/ConnectedStickyNotesShowcase';
import { RoadmapSection } from './components/RoadmapSection';
import { WhySmriti } from './components/WhySmriti';
import { FAQAndCTA } from './components/FAQAndCTA';
import { Footer } from './components/Footer';
import { WaitlistModal } from './components/WaitlistModal';
import { ThreeDBackground } from './components/ThreeDBackground';
import { FEATURED_PALETTES, ColorPalette, APP_REDIRECT_URL, CREATOR_NAME } from './data/palettes';
import { ArrowUpRight, Sparkles, ExternalLink } from 'lucide-react';

export function App() {
  // Default to the first official Smriti palette (Smriti Peacock & Sun from the artwork)
  const [activePalette, setActivePalette] = useState<ColorPalette>(FEATURED_PALETTES[0]);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const handleSelectPalette = (palette: ColorPalette) => {
    setActivePalette(palette);
  };

  return (
    <div className="min-h-screen bg-[#06080e] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200 relative">
      {/* 3D GPU Particle Constellation Canvas */}
      <ThreeDBackground accentColor={activePalette.accent} />

      {/* Top sticky navigation with Indian Artwork Icon */}
      <Navbar 
        onOpenWaitlist={() => setIsWaitlistOpen(true)} 
        activePaletteName={activePalette.name}
      />

      {/* Main Page Sections */}
      <main className="flex-1 relative z-10">
        {/* 1. 3D Hero Section */}
        <Hero 
          onOpenWaitlist={() => setIsWaitlistOpen(true)}
          activePalette={activePalette}
          onSelectPalette={handleSelectPalette}
        />

        {/* 2. Visual Hook: 162 Color Palettes & Real App Screenshot */}
        <PaletteShowcase 
          activePalette={activePalette}
          onSelectPalette={handleSelectPalette}
        />

        {/* 3. Main Product Benefit: The First-Class Note Editor */}
        <EditorShowcase 
          activePalette={activePalette}
        />

        {/* 4. Current Features: Effortless Organization */}
        <OrganizationShowcase 
          activePalette={activePalette}
        />

        {/* 5. Signature Upcoming Feature: Connected Sticky Notes */}
        <ConnectedStickyNotesShowcase 
          activePalette={activePalette}
          onOpenWaitlist={() => setIsWaitlistOpen(true)}
        />

        {/* 6. Roadmap: Cloud Sync, Templates, Sketching, AI */}
        <RoadmapSection 
          onOpenWaitlist={() => setIsWaitlistOpen(true)}
        />

        {/* 7. Why Smriti / Spatial architecture evolution (No-tabs) */}
        <WhySmriti 
          activePalette={activePalette}
        />

        {/* 8. FAQ & Final 3D Call to Action */}
        <FAQAndCTA 
          onOpenWaitlist={() => setIsWaitlistOpen(true)}
          activePalette={activePalette}
        />
      </main>

      {/* Footer with Creator Credit */}
      <Footer 
        activePalette={activePalette}
        onOpenWaitlist={() => setIsWaitlistOpen(true)}
      />

      {/* Early Access Waitlist Modal */}
      <WaitlistModal 
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        activePaletteAccent={activePalette.accent}
      />

      {/* Floating 3D Bottom Pill Redirect to app.smritinotes.site */}
      <aside aria-label="Quick launch bar" className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 max-w-[92vw] sm:max-w-md">
        <div className="p-1.5 pl-3 rounded-full bg-[#0b0f19]/90 border border-amber-500/40 shadow-2xl shadow-black/80 backdrop-blur-xl flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-full overflow-hidden border border-amber-400 shrink-0">
              <img
                src="/images/smriti-icon.jpg"
                alt="Smriti"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="truncate">
              <span className="font-extrabold text-white text-xs block truncate">
                app.smritinotes.site
              </span>
              <span className="text-[10px] text-amber-300/90 font-mono block truncate">
                By {CREATOR_NAME}
              </span>
            </div>
          </div>

          <a
            href={APP_REDIRECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full font-extrabold text-black bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 shadow-md flex items-center gap-1.5 shrink-0 transition-transform hover:scale-105"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Launch App</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </aside>
    </div>
  );
}

export default App;
