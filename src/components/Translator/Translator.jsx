import { useEffect, useState } from "react";
import "flag-icons/css/flag-icons.min.css";
import { LOCALE_OPTIONS } from "../../i18n/config";
import { getStoredLocale, setPortfolioLocale } from "../../i18n/runtime";
import { useTranslation } from "../../i18n/client";

const ENABLED_LOCALES = LOCALE_OPTIONS.filter((lang) => lang.enabled);

const Translator = () => {
  const { t } = useTranslation();
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

  const handleLanguageChange = (languageCode) => {
    setSelectedLanguage(languageCode);
    setPortfolioLocale(languageCode);
    setIsOpen(false);
  };

  const selected =
    ENABLED_LOCALES.find((lang) => lang.code === selectedLanguage) ??
    ENABLED_LOCALES[0];

  return (
    <div className="header-lang relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="header-lang__trigger cursor-pointer whitespace-nowrap rounded-md border border-gray-300 bg-white px-1.5 py-0.5 text-sm leading-tight shadow-sm md:px-2 md:py-1 md:text-base"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={t("language.label")}
      >
        <span className={`${selected.flag} mr-1`} aria-hidden="true" />
        {t(`language.${selected.code}`)}
      </button>

      {isOpen && (
        <ul
          className="header-lang__menu absolute right-0 top-full z-[60] mt-1 min-w-full overflow-hidden rounded-md border border-gray-300 bg-white shadow-lg"
          role="listbox"
        >
          {ENABLED_LOCALES.map((language) => (
            <li key={language.code} role="option">
              <button
                type="button"
                className="flex w-full cursor-pointer items-center px-1.5 py-0.5 text-sm hover:bg-gray-100 md:px-2 md:text-base"
                onClick={() => handleLanguageChange(language.code)}
              >
                <span className={`${language.flag} mr-1 md:mr-2`} aria-hidden="true" />
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
