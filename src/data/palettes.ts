import exactPalettes from './exactAppPalettes.json';

export interface AppPalette {
  id: string;
  name: string;
  desc: string;
  category: string;
  mode: 'light' | 'dark';
  colors: string[];
  bg: string;
  sidebarBg: string;
  surface: string;
  text: string;
  muted: string;
  border: string;
  hover: string;
  active: string;
  accent: string;
  accentFg: string;
}

export type ColorPalette = AppPalette;

export const ALL_APP_PALETTES: AppPalette[] = exactPalettes as AppPalette[];
export const ALL_162_PALETTES: AppPalette[] = ALL_APP_PALETTES;
export const TOTAL_PALETTE_COUNT: number = ALL_APP_PALETTES.length;

export const APP_PALETTE_CATEGORIES = [
  'All',
  'Modern',
  'Brutal',
  'World',
  'Retro',
  'Nature',
  'Pastel',
  'Dark',
  'Neon',
  'Cozy',
  'Code Editor',
  'Design Styles',
  'Accessible',
  'Transparent (Glass)'
] as const;

export const CATEGORIES = APP_PALETTE_CATEGORIES;

// The default app theme is paper-ink (#F6F0E5 / light beige)
export const DEFAULT_THEME = ALL_APP_PALETTES.find(p => p.id === 'paper-ink') || ALL_APP_PALETTES[0];

// A curated selection representing different moods for interactive previews
export const FEATURED_THEMES: AppPalette[] = [
  ALL_APP_PALETTES.find(p => p.id === 'paper-ink') || ALL_APP_PALETTES[0],
  ALL_APP_PALETTES.find(p => p.id === 'linen') || ALL_APP_PALETTES[1],
  ALL_APP_PALETTES.find(p => p.id === 'pink-riot') || ALL_APP_PALETTES[2],
  ALL_APP_PALETTES.find(p => p.id === 'cobalt-block') || ALL_APP_PALETTES[3],
  ALL_APP_PALETTES.find(p => p.id === 'mint-slab') || ALL_APP_PALETTES[4],
  ALL_APP_PALETTES.find(p => p.id === 'peacock') || ALL_APP_PALETTES[5],
  ALL_APP_PALETTES.find(p => p.id === 'matcha') || ALL_APP_PALETTES[6],
  ALL_APP_PALETTES.find(p => p.id === 'tokyo-night') || ALL_APP_PALETTES[7],
].filter(Boolean);

export const FEATURED_PALETTES: AppPalette[] = FEATURED_THEMES;
export const OFFICIAL_SMRITI_PALETTES: AppPalette[] = FEATURED_THEMES;

export const APP_REDIRECT_URL = "https://app.smritinotes.site";
export const CREATOR_NAME = "Suriya Prakash";
