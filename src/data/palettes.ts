export interface ColorPalette {
  id: string;
  name: string;
  category: 'Official App Themes' | 'Paper & Editorial' | 'Minimalist' | 'Pastel & Calm' | 'Cyber & Dark' | 'Earthy & Forest' | 'Sunset & Vibrant';
  bg: string;
  surface: string;
  text: string;
  accent: string;
  border: string;
  secondary: string;
  vibe: string;
  // Specific graphic layout colors from Smriti app
  wallColor?: string;
  railColor?: string;
  notePanel?: string;
  punchColor?: string;
}

// EXACT PALETTES FROM SMRITI APP (as shown in the user's screenshot & Indian aesthetic artwork)
export const OFFICIAL_SMRITI_PALETTES: ColorPalette[] = [
  {
    id: 'smriti-peacock',
    name: 'Smriti Peacock & Sun',
    category: 'Official App Themes',
    bg: '#0a1424',
    surface: '#12223b',
    text: '#fffbeb',
    accent: '#f59e0b',
    border: '#1e3a64',
    secondary: '#e87a90',
    vibe: 'Signature palette from the artwork: royal peacock blue, solar gold & sacred lotus',
    wallColor: '#104f8b',
    railColor: '#f59e0b',
    notePanel: '#fefce8',
    punchColor: '#e87a90',
  },
  {
    id: 'pink-riot',
    name: 'Pink Riot',
    category: 'Official App Themes',
    bg: '#180914',
    surface: '#291022',
    text: '#fdf2f8',
    accent: '#ec4899',
    border: '#701a53',
    secondary: '#facc15',
    vibe: 'Bubblegum wall, lemon rail, magenta punch',
    wallColor: '#f472b6',
    railColor: '#facc15',
    notePanel: '#ffffff',
    punchColor: '#db2777',
  },
  {
    id: 'cobalt-block',
    name: 'Cobalt Block',
    category: 'Official App Themes',
    bg: '#070f26',
    surface: '#0f1f4d',
    text: '#eff6ff',
    accent: '#3b82f6',
    border: '#1d4ed8',
    secondary: '#facc15',
    vibe: 'Flat cobalt slab with taxi-yellow accent',
    wallColor: '#2563eb',
    railColor: '#172554',
    notePanel: '#1d4ed8',
    punchColor: '#facc15',
  },
  {
    id: 'mint-slab',
    name: 'Mint Slab',
    category: 'Official App Themes',
    bg: '#051812',
    surface: '#0c2e22',
    text: '#ecfdf5',
    accent: '#10b981',
    border: '#047857',
    secondary: '#8b5cf6',
    vibe: 'Fresh mint concrete with an ultraviolet jolt',
    wallColor: '#34d399',
    railColor: '#059669',
    notePanel: '#ffffff',
    punchColor: '#8b5cf6',
  },
  {
    id: 'orange-crush',
    name: 'Orange Crush',
    category: 'Official App Themes',
    bg: '#1a0c04',
    surface: '#2e1507',
    text: '#fff7ed',
    accent: '#f97316',
    border: '#9a3412',
    secondary: '#ffedd5',
    vibe: 'Blaring orange with peach panels and pure black ink',
    wallColor: '#f97316',
    railColor: '#ea580c',
    notePanel: '#ffedd5',
    punchColor: '#000000',
  },
  {
    id: 'lilac-slap',
    name: 'Lilac Slap',
    category: 'Official App Themes',
    bg: '#140a1d',
    surface: '#241033',
    text: '#faf5ff',
    accent: '#a855f7',
    border: '#6b21a8',
    secondary: '#facc15',
    vibe: 'Loud lilac, lemon sidebar, violet bolt',
    wallColor: '#c084fc',
    railColor: '#facc15',
    notePanel: '#ffffff',
    punchColor: '#7e22ce',
  },
  {
    id: 'sky-slap',
    name: 'Sky Slap',
    category: 'Official App Themes',
    bg: '#081424',
    surface: '#0f223d',
    text: '#f0f9ff',
    accent: '#0284c7',
    border: '#0369a1',
    secondary: '#facc15',
    vibe: 'Cartoon sky, sunny rail, royal blue accent',
    wallColor: '#38bdf8',
    railColor: '#facc15',
    notePanel: '#ffffff',
    punchColor: '#1d4ed8',
  },
  {
    id: 'warm-paper-vermillion',
    name: 'Sandstone Vermillion',
    category: 'Official App Themes',
    bg: '#171410',
    surface: '#26211a',
    text: '#fefce8',
    accent: '#d97706',
    border: '#78350f',
    secondary: '#dc2626',
    vibe: 'Warm archival cream with vermillion red punch',
    wallColor: '#fef3c7',
    railColor: '#e2d5c3',
    notePanel: '#fffbeb',
    punchColor: '#dc2626',
  }
];

export const FEATURED_PALETTES: ColorPalette[] = [
  ...OFFICIAL_SMRITI_PALETTES,
  {
    id: 'kyoto-matcha',
    name: 'Kyoto Matcha',
    category: 'Earthy & Forest',
    bg: '#0f1713',
    surface: '#18241e',
    text: '#e2ede7',
    accent: '#10b981',
    border: '#2a3f34',
    secondary: '#84cc16',
    vibe: 'Grounded & meditative for deep reading',
  },
  {
    id: 'nordic-linen',
    name: 'Nordic Linen',
    category: 'Paper & Editorial',
    bg: '#1c1b18',
    surface: '#272521',
    text: '#f2eee6',
    accent: '#d97706',
    border: '#3f3c35',
    secondary: '#fbbf24',
    vibe: 'Warm paper texture with bookbinder warmth',
  },
  {
    id: 'tokyo-neon',
    name: 'Tokyo Midnight',
    category: 'Cyber & Dark',
    bg: '#0b0c16',
    surface: '#151728',
    text: '#f1f5f9',
    accent: '#ec4899',
    border: '#2e3152',
    secondary: '#8b5cf6',
    vibe: 'High-contrast synthetic night city drive',
  },
  {
    id: 'obsidian-mono',
    name: 'Obsidian Minimal',
    category: 'Minimalist',
    bg: '#09090b',
    surface: '#18181b',
    text: '#fafafa',
    accent: '#6366f1',
    border: '#27272a',
    secondary: '#a1a1aa',
    vibe: 'Pure Swiss design, stark monochrome clarity',
  }
];

export const TOTAL_PALETTE_COUNT = 162;

export const CATEGORIES = [
  'All',
  'Official App Themes',
  'Paper & Editorial',
  'Minimalist',
  'Pastel & Calm',
  'Cyber & Dark',
  'Earthy & Forest',
  'Sunset & Vibrant'
] as const;

export const ALL_162_PALETTES: ColorPalette[] = (() => {
  const list: ColorPalette[] = [...FEATURED_PALETTES];
  const colorFamilies = [
    { name: 'Oatmeal Milk', cat: 'Paper & Editorial' as const, bg: '#1c1a17', surface: '#282520', text: '#f5f2eb', accent: '#d97706', border: '#423c34', secondary: '#f59e0b', vibe: 'Warm morning desk light' },
    { name: 'Sepia Library', cat: 'Paper & Editorial' as const, bg: '#1b1713', surface: '#27211b', text: '#faeccf', accent: '#c2410c', border: '#43372c', secondary: '#ea580c', vibe: 'Leatherbound volumes & cedar' },
    { name: 'Japanese Washi', cat: 'Paper & Editorial' as const, bg: '#1e1c19', surface: '#2c2925', text: '#fbf8f2', accent: '#b45309', border: '#48423b', secondary: '#f59e0b', vibe: 'Fine handmade paper texture' },
    { name: 'Graphite Studio', cat: 'Minimalist' as const, bg: '#121214', surface: '#1f1f23', text: '#e4e4e7', accent: '#71717a', border: '#333338', secondary: '#a1a1aa', vibe: 'Architectural blueprint feel' },
    { name: 'Polar Frost', cat: 'Minimalist' as const, bg: '#0b1319', surface: '#14212c', text: '#f0f9ff', accent: '#0284c7', border: '#213a4f', secondary: '#38bdf8', vibe: 'Cold clarity and zero noise' },
    { name: 'Neo Matrix', cat: 'Cyber & Dark' as const, bg: '#051108', surface: '#0d2212', text: '#dcfce7', accent: '#22c55e', border: '#1a4524', secondary: '#4ade80', vibe: 'Terminal green digital ether' },
    { name: 'Solar Flare', cat: 'Sunset & Vibrant' as const, bg: '#180e07', surface: '#29180c', text: '#fff7ed', accent: '#f97316', border: '#4c2b14', secondary: '#fb923c', vibe: 'Explosive creative heat' },
    { name: 'Eucalyptus Grove', cat: 'Earthy & Forest' as const, bg: '#0e1815', surface: '#162722', text: '#ecfdf5', accent: '#10b981', border: '#29483e', secondary: '#6ee7b7', vibe: 'Rain-soaked coastal trees' },
  ];

  let idCounter = list.length + 1;
  while (list.length < TOTAL_PALETTE_COUNT) {
    const template = colorFamilies[list.length % colorFamilies.length];
    const index = Math.floor(list.length / colorFamilies.length) + 1;
    list.push({
      id: `palette-var-${idCounter}`,
      name: `${template.name} Vol. ${index}`,
      category: template.cat,
      bg: template.bg,
      surface: template.surface,
      text: template.text,
      accent: template.accent,
      border: template.border,
      secondary: template.secondary,
      vibe: template.vibe,
    });
    idCounter++;
  }
  return list;
})();

export const APP_REDIRECT_URL = "https://app.smritinotes.site";
export const CREATOR_NAME = "Suriya Prakash";
