// I18n configuration constants
// This should match the configuration in astro.config.mjs
export const DEFAULT_LOCALE = 'en';
export const LOCALES = ['en', 'nl'] as const;

export type Locale = typeof LOCALES[number];

export function getDefaultLocaleUrl(): string {
  return `/${DEFAULT_LOCALE}/`;
}
