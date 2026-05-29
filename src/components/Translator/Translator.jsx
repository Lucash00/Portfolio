import { useEffect, useRef, useState } from "react";
import "flag-icons/css/flag-icons.min.css";
import "./Translator.css";
import { LOCALE_OPTIONS } from "../../i18n/config";
import { getStoredLocale, setPortfolioLocale } from "../../i18n/runtime";
import { useTranslation } from "../../i18n/client";

const ENABLED_LOCALES = LOCALE_OPTIONS.filter((lang) => lang.enabled);

const Translator = () => {
  const { t } = useTranslation();
  const rootRef = useRef(null);
  const [selectedLanguage, setSelectedLanguage] = useState("es");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSelectedLanguage(getStoredLocale());
  }, []);

  useEffect(() => {
    const sync = () => setSelectedLanguage(getStoredLocale());
    window.addEventListener("portfolio:locale-change", sync);
    document.addEventListener("astro:page-load", sync);
    return () => {
      window.removeEventListener("portfolio:locale-change", sync);
      document.removeEventListener("astro:page-load", sync);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const closeOnOutside = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOnOutside);
    document.addEventListener("touchstart", closeOnOutside, { passive: true });

    return () => {
      document.removeEventListener("mousedown", closeOnOutside);
      document.removeEventListener("touchstart", closeOnOutside);
    };
  }, [isOpen]);

  const handleLanguageChange = (languageCode) => {
    setSelectedLanguage(languageCode);
    setPortfolioLocale(languageCode);
    setIsOpen(false);
  };

  const selected =
    ENABLED_LOCALES.find((lang) => lang.code === selectedLanguage) ??
    ENABLED_LOCALES[0];

  const label = t(`language.${selected.code}`);

  return (
    <div ref={rootRef} className="header-lang">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className={`header-lang__trigger${isOpen ? " header-lang__trigger--expanded" : ""}`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`${t("language.label")}: ${label}`}
      >
        <span
          className={`header-lang__flag ${selected.flag}`}
          aria-hidden="true"
        />
        <span className="header-lang__label">{label}</span>
      </button>

      {isOpen && (
        <ul
          className="header-lang__menu"
          role="listbox"
          aria-label={t("language.label")}
        >
          {ENABLED_LOCALES.map((language) => (
            <li key={language.code} role="option" aria-selected={language.code === selectedLanguage}>
              <button
                type="button"
                className="header-lang__menu-item"
                onClick={() => handleLanguageChange(language.code)}
              >
                <span
                  className={`header-lang__flag ${language.flag}`}
                  aria-hidden="true"
                />
                {t(`language.${language.code}`)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Translator;
