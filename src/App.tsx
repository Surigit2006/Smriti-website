import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { CurvedDome } from './components/CurvedDome';
import { EditorShowcase } from './components/EditorShowcase';
import { OrganizationShowcase } from './components/OrganizationShowcase';
import { PaletteShowcase } from './components/PaletteShowcase';
import { ConnectedStickyNotesShowcase } from './components/ConnectedStickyNotesShowcase';
import { RoadmapSection } from './components/RoadmapSection';
import { WhySmriti } from './components/WhySmriti';
import { FAQAndCTA } from './components/FAQAndCTA';
import { Footer } from './components/Footer';
import { WaitlistModal } from './components/WaitlistModal';
import { ThreeDBackground } from './components/ThreeDBackground';
import { DEFAULT_THEME, AppPalette } from './data/palettes';

export function App() {
  const [activePalette, setActivePalette] = useState<AppPalette>(DEFAULT_THEME);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const handleSelectPalette = (palette: AppPalette) => {
    setActivePalette(palette);
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#141414] flex flex-col font-sans selection:bg-[#0F4C81] selection:text-white relative antialiased">
      {/* 3D Atmospheric Background Canvas */}
      <ThreeDBackground accentColor={activePalette.accent || '#F59E0B'} />

      {/* Top sticky navigation */}
      <Navbar 
        onOpenWaitlist={() => setIsWaitlistOpen(true)} 
        activePaletteName={activePalette.name}
      />

      {/* Main Page Content */}
      <main className="flex-1 relative z-10">
        {/* 1. Minimal DOVV Style Hero Section */}
        <Hero 
          onOpenWaitlist={() => setIsWaitlistOpen(true)}
          activePalette={activePalette}
          onSelectPalette={handleSelectPalette}
        />

        {/* 2. Paper Ticker */}
        <MarqueeTicker />

        {/* 3. Section Curve Divider */}
        <CurvedDome fill="#FAF7F2" />

        {/* 4. A First-Class Note Editor (Product Benefit) */}
        <EditorShowcase 
          activePalette={activePalette}
        />

        {/* 5. Effortless Organization (Spatial Hierarchy, No Tabs) */}
        <OrganizationShowcase 
          activePalette={activePalette}
        />

        {/* 6. 162 Color Palettes (Balanced Feature Card) */}
        <PaletteShowcase 
          activePalette={activePalette}
          onSelectPalette={handleSelectPalette}
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

        {/* 9. Why Smriti: Architectural evolution (Zero Tabs) */}
        <WhySmriti 
          activePalette={activePalette}
        />

        {/* 10. FAQ & Final Call to Action */}
        <FAQAndCTA 
          onOpenWaitlist={() => setIsWaitlistOpen(true)}
          activePalette={activePalette}
        />
      </main>

      {/* 11. Minimal Footer with Author Attribution placed ONCE at the end */}
      <Footer 
        activePalette={activePalette}
        onOpenWaitlist={() => setIsWaitlistOpen(true)}
      />

      {/* Early Access Priority Modal */}
      <WaitlistModal 
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        activePaletteAccent={activePalette.accent}
      />
    </div>
  );
}

export default App;
