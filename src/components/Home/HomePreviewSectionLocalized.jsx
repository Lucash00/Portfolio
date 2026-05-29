import { useTranslation } from "../../i18n/client";

export default function HomePreviewSectionLocalized({
  titleKey,
  descriptionKey,
  viewMoreHref,
  sectionId,
  children,
}) {
  const { t } = useTranslation();

  return (
    <section
      id={sectionId}
      className="home-preview-section mt-12 sm:mt-16 md:mt-24 lg:mt-28 mb-10 sm:mb-12 md:mb-16"
    >
      <div className="mx-6 md:mx-[10%]">
        <h2
          data-text-glow
          className="scroll-reveal-item home-section-title text-mouse-glow w-fit max-w-full text-left text-white font-extrabold tracking-tight text-shadow text-balance text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] mb-4 sm:mb-5 md:mb-6"
        >
          {t(titleKey)}
        </h2>
        {descriptionKey ? (
          <p
            data-text-glow
            className="scroll-reveal-item text-mouse-glow mb-4 sm:mb-5 md:mb-6 -mt-1 w-full max-w-none text-sm md:text-base font-medium tracking-tight text-slate-300 text-shadow text-pretty"
          >
            {t(descriptionKey)}
          </p>
        ) : null}
        {children}
      </div>

      <div className="flex justify-center mt-5 sm:mt-6 md:mt-8 w-full">
        <a href={viewMoreHref} className="scroll-reveal-item home-preview-link">
          {t("home.viewMore")}
          <span className="home-preview-link-arrow" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
