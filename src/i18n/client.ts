import { useEffect, useMemo, useState } from "react";
import { createTranslator } from "./core";
import { getStoredLocale } from "./runtime";

export function useTranslation() {
  const [locale, setLocale] = useState(() =>
    typeof window !== "undefined" ? getStoredLocale() : "es",
  );

  useEffect(() => {
    const sync = () => setLocale(getStoredLocale());

    sync();
    window.addEventListener("portfolio:locale-change", sync);
    document.addEventListener("astro:page-load", sync);

    return () => {
      window.removeEventListener("portfolio:locale-change", sync);
      document.removeEventListener("astro:page-load", sync);
    };
  }, []);

  const t = useMemo(() => createTranslator(locale), [locale]);

  return { locale, t };
}
