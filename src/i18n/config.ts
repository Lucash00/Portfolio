export const DEFAULT_LOCALE = "es" as const;
export type Locale = typeof DEFAULT_LOCALE | string;

export const LOCALE_STORAGE_KEY = "portfolio-locale";
export const LOCALE_COOKIE = "portfolio-locale";

/** Idiomas disponibles en el selector. */
export const LOCALE_OPTIONS = [
  { code: "es", flag: "fi fi-es", enabled: true },
  { code: "en", flag: "fi fi-gb", enabled: true },
] as const;

export type LocaleOptionCode = (typeof LOCALE_OPTIONS)[number]["code"];

export function isLocaleEnabled(code: string): boolean {
  const option = LOCALE_OPTIONS.find((item) => item.code === code);
  return Boolean(option?.enabled);
}
