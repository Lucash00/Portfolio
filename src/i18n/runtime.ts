import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALE_STORAGE_KEY,
  isLocaleEnabled,
  type LocaleOptionCode,
} from "./config";
import { catalogs } from "./locales";
import { createTranslator, resolveLocale, type Translator } from "./core";

export type PortfolioI18nWindow = {
  locale: string;
  catalogs: typeof catalogs;
  t: Translator;
};

declare global {
  interface Window {
    __PORTFOLIO_I18N__?: PortfolioI18nWindow;
  }
}

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export function getStoredLocale(): string {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  const fromStorage = localStorage.getItem(LOCALE_STORAGE_KEY);
  const fromCookie = readCookie(LOCALE_COOKIE);
  const fromHtml = document.documentElement.lang;

  return resolveLocale(fromStorage || fromCookie || fromHtml);
}

export function persistLocale(locale: string) {
  if (typeof window === "undefined") return;

  localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  document.cookie = `${LOCALE_COOKIE}=${encodeURIComponent(locale)};path=/;max-age=31536000;SameSite=Lax`;
  document.documentElement.lang = locale;
}

export function applyDomTranslations(locale: string) {
  if (typeof document === "undefined") return;

  const t = createTranslator(locale);

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    el.textContent = t(key);
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (!key) return;
    el.setAttribute("aria-label", t(key));
  });

  document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
    "[data-i18n-placeholder]",
  ).forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (!key) return;
    el.placeholder = t(key);
  });
}

export function initPortfolioI18n() {
  const locale = getStoredLocale();
  const t = createTranslator(locale);

  window.__PORTFOLIO_I18N__ = { locale, catalogs, t };
  document.documentElement.lang = locale;

  applyDomTranslations(locale);

  window.dispatchEvent(
    new CustomEvent("portfolio:locale-change", { detail: { locale } }),
  );
}

export function setPortfolioLocale(code: LocaleOptionCode) {
  if (!isLocaleEnabled(code)) return false;

  persistLocale(code);

  if (typeof window !== "undefined") {
    window.location.reload();
  }

  return true;
}
