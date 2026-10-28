import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { CurvedDome } from './components/CurvedDome';
import { EditorShowcase } from './components/EditorShowcase';
import { TemplatesGallery } from './components/TemplatesGallery';
import { AutocompleteDemo } from './components/AutocompleteDemo';
import { OrganizationShowcase } from './components/OrganizationShowcase';
import { PaletteShowcase } from './components/PaletteShowcase';
import { ConnectedStickyNotesShowcase } from './components/ConnectedStickyNotesShowcase';
import { RoadmapSection } from './components/RoadmapSection';
import { WhySmriti } from './components/WhySmriti';
import { FAQAndCTA } from './components/FAQAndCTA';
import { Footer } from './components/Footer';
import { ThreeDBackground } from './components/ThreeDBackground';
import { DEFAULT_THEME, AppPalette } from './data/palettes';

export function App() {
  const [activePalette, setActivePalette] = useState<AppPalette>(DEFAULT_THEME);

  const handleSelectPalette = (palette: AppPalette) => {
    setActivePalette(palette);
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#141414] flex flex-col font-sans selection:bg-[#0F4C81] selection:text-white relative antialiased">
      {/* 3D Atmospheric Background Canvas */}
      <ThreeDBackground accentColor={activePalette.accent || '#F59E0B'} />

      {/* Top sticky navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1 relative z-10">
        {/* 1. DOVV Style Hero Section with Original App Screenshot */}
        <Hero 
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

        {/* 5. Upcoming Feature: Pre-built Notebook Templates & Interactive Demo */}
        <TemplatesGallery />

        {/* 6. Upcoming Feature: Thought-speed Inline Autocomplete & Slash Commands */}
        <AutocompleteDemo />

        {/* 7. Effortless Organization (Spatial Hierarchy, No Tabs) */}
        <OrganizationShowcase 
          activePalette={activePalette}
        />

        {/* 8. 162 Color Palettes (Balanced Feature Card + Production Theme Modal Screenshot) */}
        <PaletteShowcase 
          activePalette={activePalette}
          onSelectPalette={handleSelectPalette}
        />

        {/* 9. Signature Upcoming Feature: Connected Sticky Notes Canvas */}
        <ConnectedStickyNotesShowcase 
          activePalette={activePalette}
        />

        {/* 10. Roadmap: Autocomplete, Templates, Cloud Sync, Sketching, AI */}
        <RoadmapSection />

        {/* 11. Why Smriti: Architectural evolution (Zero Tabs) */}
        <WhySmriti 
          activePalette={activePalette}
        />

        {/* 12. FAQ & Final Call to Action */}
        <FAQAndCTA 
          activePalette={activePalette}
        />
      </main>

      {/* 13. Minimal Footer with Author Attribution placed ONCE at the end */}
      <Footer 
        activePalette={activePalette}
      />
    </div>
  );
}

export default App;
