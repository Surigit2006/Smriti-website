import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { CurvedDome } from './components/CurvedDome';
import { EditorShowcase } from './components/EditorShowcase';
import { SpatialNotes3D } from './components/SpatialNotes3D';
import { ExcalidrawShowcase } from './components/ExcalidrawShowcase';
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
import { CustomCursor } from './components/CustomCursor';
import { DEFAULT_THEME, AppPalette } from './data/palettes';

export function App() {
  const [activePalette, setActivePalette] = useState<AppPalette>(DEFAULT_THEME);

  const handleSelectPalette = (palette: AppPalette) => {
    setActivePalette(palette);
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#141414] flex flex-col font-sans selection:bg-[#0F4C81] selection:text-white relative antialiased cursor-auto">
      {/* High-End Mouse Sensitive Dual-Ring Magnetic Cursor */}
      <CustomCursor />

      {/* 3D Atmospheric Background Constellation Canvas */}
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

        {/* 5. Award-Winning Mouse-Sensitive 3D Notes Renders & Spatial Arena */}
        <SpatialNotes3D />

        {/* 6. Highlight: Excalidraw Sketching & System Design Canvas */}
        <ExcalidrawShowcase />

        {/* 7. Upcoming Feature: Pre-built Notebook Templates & Interactive Demo */}
        <TemplatesGallery />

        {/* 8. Upcoming Feature: Thought-speed Inline Autocomplete & Slash Commands */}
        <AutocompleteDemo />

        {/* 9. Effortless Organization (Spatial Hierarchy) */}
        <OrganizationShowcase 
          activePalette={activePalette}
        />

        {/* 10. 162 Color Palettes (Balanced Feature Card + Production Theme Modal Screenshot) */}
        <PaletteShowcase 
          activePalette={activePalette}
          onSelectPalette={handleSelectPalette}
        />

        {/* 11. Signature Upcoming Feature: Connected Sticky Notes Canvas */}
        <ConnectedStickyNotesShowcase 
          activePalette={activePalette}
        />

        {/* 12. Roadmap: Autocomplete, Templates, Cloud Sync, Excalidraw, AI */}
        <RoadmapSection />

        {/* 13. Why Smriti: Unified Writing & Excalidraw Architecture */}
        <WhySmriti 
          activePalette={activePalette}
        />

        {/* 14. FAQ & Final Call to Action */}
        <FAQAndCTA 
          activePalette={activePalette}
        />
      </main>

      {/* 15. Minimal Footer with Author Attribution placed ONCE at the end */}
      <Footer 
        activePalette={activePalette}
      />
    </div>
  );
}

export default App;
