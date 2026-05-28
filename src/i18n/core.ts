import {
  DEFAULT_LOCALE,
  type Locale,
  isLocaleEnabled,
} from "./config";
import { catalogs, es, type Messages } from "./locales";

export type Translator = (
  key: string,
  params?: Record<string, string | number>,
) => string;

function getByPath(source: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, source);
}

export function resolveLocale(raw?: string | null): Locale {
  if (raw && isLocaleEnabled(raw) && catalogs[raw]) {
    return raw;
  }
  return DEFAULT_LOCALE;
}

export function getMessages(locale: Locale): Messages {
  return catalogs[locale] ?? es;
}

export function createTranslator(locale: Locale): Translator {
  const messages = getMessages(locale);
  const fallback = es;

  return (key, params) => {
    let value = getByPath(messages as Record<string, unknown>, key);
    if (typeof value !== "string") {
      value = getByPath(fallback as Record<string, unknown>, key);
    }
    if (typeof value !== "string") {
      return key;
    }

    if (!params) return value;

    return Object.entries(params).reduce(
      (text, [paramKey, paramValue]) =>
        text.replaceAll(`{${paramKey}}`, String(paramValue)),
      value,
    );
  };
}

/** Traducción en build / Astro (siempre español por defecto). */
export const t = createTranslator(DEFAULT_LOCALE);
