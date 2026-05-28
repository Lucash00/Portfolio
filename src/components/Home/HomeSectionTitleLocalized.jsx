import { useTranslation } from "../../i18n/client";

/**
 * @param {{ i18nKey: string, className?: string, id?: string }} props
 */
export default function HomeSectionTitleLocalized({
  i18nKey,
  className = "",
  id = undefined,
}) {
  const { t } = useTranslation();

  return (
    <h2
      id={id}
      data-text-glow
      className={`scroll-reveal-item home-section-title text-mouse-glow w-fit max-w-full text-left text-white font-extrabold tracking-tight text-shadow text-balance text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] ${className}`}
    >
      {t(i18nKey)}
    </h2>
  );
}
