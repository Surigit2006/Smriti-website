import React, { useState, useEffect } from 'react';
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
import { UnifiedDock } from './components/UnifiedDock';
import { DEFAULT_THEME, AppPalette } from './data/palettes';

export function App() {
  const [activePalette, setActivePalette] = useState<AppPalette>(DEFAULT_THEME);
  const [isDark, setIsDark] = useState<boolean>(true);

  // Sync theme class to HTML root element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleSelectPalette = (palette: AppPalette) => {
    setActivePalette(palette);
  };

  return (
    <div 
      className={`min-h-screen flex flex-col font-sans transition-colors duration-500 relative antialiased cursor-auto selection:bg-[#00F076] selection:text-black ${
        isDark ? 'bg-[#08090D] text-white' : 'bg-[#F8FAFC] text-slate-900'
      }`}
    >
      {/* 3D Atmospheric Background Constellation Canvas */}
      <ThreeDBackground 
        accentColor={activePalette.accent || '#00F076'} 
        isDark={isDark}
      />

      {/* Top sticky navigation */}
      <Navbar 
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Main Page Content */}
      <main className="flex-1 relative z-10">
        {/* 1. Shopify Editions Summer '24 Style Hero Section */}
        <Hero 
          activePalette={activePalette}
          onSelectPalette={handleSelectPalette}
          isDark={isDark}
        />

        {/* 2. Unified Tech Ticker */}
        <MarqueeTicker />

        {/* 3. Section Curve Divider */}
        <CurvedDome fill={isDark ? '#0E1118' : '#F8FAFC'} />

        {/* 4. A First-Class Note Editor (Product Benefit) */}
        <EditorShowcase 
          activePalette={activePalette}
          isDark={isDark}
        />

        {/* 5. Award-Winning Mouse-Sensitive 3D Notes Renders & Spatial Arena */}
        <SpatialNotes3D 
          isDark={isDark}
        />

        {/* 6. Highlight: Excalidraw Sketching & System Design Canvas */}
        <ExcalidrawShowcase 
          isDark={isDark}
        />

        {/* 7. Upcoming Feature: Pre-built Notebook Templates & Interactive Demo */}
        <TemplatesGallery 
          isDark={isDark}
        />

        {/* 8. Upcoming Feature: Thought-speed Inline Autocomplete & Slash Commands */}
        <AutocompleteDemo 
          isDark={isDark}
        />

        {/* 9. Effortless Organization (Spatial Hierarchy) */}
        <OrganizationShowcase 
          activePalette={activePalette}
          isDark={isDark}
        />

        {/* 10. 162 Color Palettes (Balanced Feature Card + Production Theme Modal Screenshot) */}
        <PaletteShowcase 
          activePalette={activePalette}
          onSelectPalette={handleSelectPalette}
          isDark={isDark}
        />

        {/* 11. Signature Upcoming Feature: Connected Sticky Notes Canvas */}
        <ConnectedStickyNotesShowcase 
          activePalette={activePalette}
          isDark={isDark}
        />

        {/* 12. Roadmap: Autocomplete, Templates, Cloud Sync, Excalidraw, AI */}
        <RoadmapSection 
          isDark={isDark}
        />

        {/* 13. Why Smriti: Unified Writing & Excalidraw Architecture */}
        <WhySmriti 
          activePalette={activePalette}
          isDark={isDark}
        />

        {/* 14. FAQ & Final Call to Action */}
        <FAQAndCTA 
          activePalette={activePalette}
          isDark={isDark}
        />
      </main>

      {/* 15. Minimal Footer with Author Attribution placed ONCE at the end */}
      <Footer 
        activePalette={activePalette}
        isDark={isDark}
      />

      {/* 16. Shopify Editions Unified Floating Dock Controller */}
      <UnifiedDock 
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />
    </div>
  );
}

export default App;
