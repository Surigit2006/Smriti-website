import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { CurvedDome } from './components/CurvedDome';
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
import { ArrowUpRight } from 'lucide-react';

export function App() {
  const [activePalette, setActivePalette] = useState<ColorPalette>(FEATURED_PALETTES[0]);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const handleSelectPalette = (palette: ColorPalette) => {
    setActivePalette(palette);
  };

  return (
    <div className="min-h-screen bg-[#05080c] text-[#f5f5f5] flex flex-col font-sans selection:bg-[#ed4a1c] selection:text-white relative">
      {/* 3D Atmospheric Particle Constellation Canvas */}
      <ThreeDBackground accentColor={activePalette.accent} />

      {/* Top sticky navigation */}
      <Navbar 
        onOpenWaitlist={() => setIsWaitlistOpen(true)} 
        activePaletteName={activePalette.name}
      />

      {/* Main Page Content */}
      <main className="flex-1 relative z-10">
        {/* 1. DOVV Studio Inspired Hero Section */}
        <Hero 
          onOpenWaitlist={() => setIsWaitlistOpen(true)}
          activePalette={activePalette}
          onSelectPalette={handleSelectPalette}
        />

        {/* 2. DOVV Studio Dual Infinite Marquee Ticker */}
        <MarqueeTicker />

        {/* 3. Curved Dome Section Divider */}
        <CurvedDome fill="#05080c" />

        {/* 4. 162 Color Palettes & Official App Colorways (Work Cards Style) */}
        <PaletteShowcase 
          activePalette={activePalette}
          onSelectPalette={handleSelectPalette}
        />

        {/* 5. A First-Class Note Editor (Product Benefit) */}
        <EditorShowcase 
          activePalette={activePalette}
        />

        {/* 6. Effortless Organization (Spatial Flow) */}
        <OrganizationShowcase 
          activePalette={activePalette}
        />

        {/* 7. Signature Upcoming Feature: Connected Sticky Notes */}
        <ConnectedStickyNotesShowcase 
          activePalette={activePalette}
          onOpenWaitlist={() => setIsWaitlistOpen(true)}
        />

        {/* 8. Roadmap: Cloud Sync, Templates, Sketching, AI */}
        <RoadmapSection 
          onOpenWaitlist={() => setIsWaitlistOpen(true)}
        />

        {/* 9. Why Smriti / Architecture evolution (No-tabs) */}
        <WhySmriti 
          activePalette={activePalette}
        />

        {/* 10. FAQ & Final Monumental Call to Action */}
        <FAQAndCTA 
          onOpenWaitlist={() => setIsWaitlistOpen(true)}
          activePalette={activePalette}
        />
      </main>

      {/* Footer */}
      <Footer 
        activePalette={activePalette}
        onOpenWaitlist={() => setIsWaitlistOpen(true)}
      />

      {/* Early Access Modal */}
      <WaitlistModal 
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        activePaletteAccent={activePalette.accent}
      />

      {/* Floating Bottom Quick Launch Pill */}
      <aside aria-label="Quick launch bar" className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 max-w-[92vw] sm:max-w-md">
        <div className="p-2 pl-3.5 rounded-full bg-[#080c14]/95 border border-[#262c3b] shadow-2xl shadow-black/90 backdrop-blur-2xl flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#ed4a1c] shrink-0">
              <img
                src="/images/smriti-icon.jpg"
                alt="Smriti"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="truncate">
              <span className="font-archivo text-white text-xs block truncate uppercase font-bold tracking-tight">
                app.smritinotes.site
              </span>
              <span className="text-[10px] text-[#c6f432] font-mono block truncate font-bold">
                by {CREATOR_NAME}
              </span>
            </div>
          </div>

          <a
            href={APP_REDIRECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full font-archivo font-black text-xs uppercase tracking-wider text-white bg-[#ed4a1c] hover:bg-[#ff5d33] shadow-lg shadow-[#ed4a1c]/30 flex items-center gap-1.5 shrink-0 transition-transform hover:scale-105"
          >
            <span>Launch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </aside>
    </div>
  );
}

export default App;
