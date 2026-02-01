export const COLORS = {
  primary: '#1F3C73',
  primaryDark: '#1A3366',
  primaryLight: '#2F5597',
  secondary: '#2F5597',
  accent: '#F57C00',
  accentDark: '#E06B00',
  accentLight: '#FF8C1A',
  background: '#FFFFFF',
  text: '#2E2E2E',
  textLight: '#666666',
  textLighter: '#999999',
} as const;

export type ColorKey = keyof typeof COLORS;