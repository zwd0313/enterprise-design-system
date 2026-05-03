// ── Design tokens — Enterprise Portal (Linear 风格) ──────────────
// Dark mode 为主，light mode 备用

export const darkTokens = {
  isDark: true as const,
  bgBase:     '#08090a',
  bgShell:    '#0b0c0f',
  bgSurface:  '#101114',
  bgElevated: '#17181d',
  bgHover:    '#1c1d23',
  textPrimary:   '#f7f8f8',
  textSecondary: '#9ba1ad',
  textTertiary:  '#69707d',
  accent:      '#5e6ad2',
  accentHover: '#7170ff',
  success: '#26b56b',
  warning: '#f2b84b',
  danger:  '#ff5c5c',
  info:    '#60a5fa',
  borderSubtle: 'rgba(255,255,255,0.055)',
  borderStrong: 'rgba(255,255,255,0.10)',
  // Shell
  sidebarBg: 'rgba(12,13,16,0.92)',
  topbarBg:  'rgba(8,9,10,0.78)',
  cardBg:    'linear-gradient(180deg,rgba(255,255,255,0.038),rgba(255,255,255,0.024))',
  pageBg:    `radial-gradient(circle at 18% 0%, rgba(94,106,210,0.12), transparent 28rem),
              radial-gradient(circle at 85% 12%, rgba(113,112,255,0.07), transparent 28rem), #08090a`,
} as const

export const lightTokens = {
  isDark: false as const,
  bgBase:     '#f7f8f8',
  bgShell:    '#f0f1f4',
  bgSurface:  '#ffffff',
  bgElevated: '#f4f5f7',
  bgHover:    '#ecedf0',
  textPrimary:   '#0f1011',
  textSecondary: '#4a5060',
  textTertiary:  '#8a8f98',
  accent:      '#5e6ad2',
  accentHover: '#4f5bbf',
  success: '#1e9e56',
  warning: '#c98b00',
  danger:  '#e03030',
  info:    '#3b82f6',
  borderSubtle: 'rgba(0,0,0,0.07)',
  borderStrong: 'rgba(0,0,0,0.12)',
  // Shell
  sidebarBg: 'rgba(240,241,244,0.96)',
  topbarBg:  'rgba(247,248,248,0.88)',
  cardBg:    '#ffffff',
  pageBg:    `radial-gradient(circle at 18% 0%, rgba(94,106,210,0.05), transparent 28rem),
              radial-gradient(circle at 85% 12%, rgba(113,112,255,0.04), transparent 28rem), #f7f8f8`,
} as const

export type DarkTokens  = typeof darkTokens
export type LightTokens = typeof lightTokens
export type ThemeTokens = DarkTokens | LightTokens

export const getTokens = (isDark: boolean): ThemeTokens => isDark ? darkTokens : lightTokens

// 向后兼容结构化导出
export const enterprisePortalTokens = {
  color: {
    bgBase:     darkTokens.bgBase,
    bgShell:    darkTokens.bgShell,
    bgSurface:  darkTokens.bgSurface,
    bgElevated: darkTokens.bgElevated,
    bgHover:    darkTokens.bgHover,
    textPrimary:   darkTokens.textPrimary,
    textSecondary: darkTokens.textSecondary,
    textTertiary:  darkTokens.textTertiary,
    accent:      darkTokens.accent,
    accentHover: darkTokens.accentHover,
    success: darkTokens.success,
    warning: darkTokens.warning,
    danger:  darkTokens.danger,
    info:    darkTokens.info,
    borderSubtle: darkTokens.borderSubtle,
    borderStrong: darkTokens.borderStrong,
  },
  radius: { xs: 6, sm: 8, md: 12, lg: 16, pill: 9999 },
  space: { 1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24, 8: 32 },
  font: {
    family: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
    weights: { body: 400, emphasis: 510, heading: 590 },
  },
} as const

export type EnterprisePortalTokens = typeof enterprisePortalTokens
