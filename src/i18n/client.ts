import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { DEFAULT_LOCALE, type Locale } from "./config";
import { createTranslator } from "./core";
import { getClientLocale } from "./runtime";

export function useTranslation() {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  useLayoutEffect(() => {
    setLocale(getClientLocale());
  }, []);

  useEffect(() => {
    const sync = () => setLocale(getClientLocale());

    window.addEventListener("portfolio:locale-change", sync);
    document.addEventListener("astro:page-load", sync);
    document.addEventListener("astro:after-swap", sync);

    return () => {
      window.removeEventListener("portfolio:locale-change", sync);
      document.removeEventListener("astro:page-load", sync);
      document.removeEventListener("astro:after-swap", sync);
    };
  }, []);

  const t = useMemo(() => createTranslator(locale), [locale]);

  return { locale, t };
}
