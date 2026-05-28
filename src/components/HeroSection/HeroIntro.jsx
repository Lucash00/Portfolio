import { useTranslation } from "../../i18n/client";

const introParagraphClass =
  "scroll-reveal-item text-mouse-glow z-0 mb-2 ml-auto w-fit max-w-full sm:text-sm md:text-base lg:text-lg xl:text-xl text-right font-normal text-gray-400";

const locationParagraphClass =
  "scroll-reveal-item text-mouse-glow z-0 mb-8 ml-auto w-fit max-w-full text-right font-normal sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400";

export default function HeroIntro() {
  const { t } = useTranslation();
  const versatile = t("hero.introVersatile").trim();

  return (
    <>
      <p data-text-glow className={introParagraphClass}>
        <span>{t("hero.introPrefix")}</span>
        <span className="text-amber-400">{t("hero.introName")}</span>
        <span>{t("hero.introMiddle")}</span>
        {versatile ? (
          <span className="text-gray-200">{versatile}</span>
        ) : null}
        <span>{t("hero.introRest")}</span>
        <span className="text-gray-200">{t("hero.introTechnologies")}</span>
      </p>
      <p data-text-glow className={locationParagraphClass}>
        <span className="text-amber-400">{t("hero.locationCity")}</span>,{" "}
        <span>{t("hero.locationCountry")}</span>
      </p>
    </>
  );
}
