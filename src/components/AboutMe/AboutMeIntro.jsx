import { useTranslation } from "../../i18n/client";

const PARAGRAPH_KEYS = [
  "about.paragraphs.p1",
  "about.paragraphs.p2",
  "about.paragraphs.p3",
];

export default function AboutMeIntro() {
  const { locale, t } = useTranslation();

  return (
    <>
      <h1
        className="about-intro__title text-mouse-glow w-fit max-w-full"
        data-text-glow
        data-locale={locale}
      >
        <span>{t("about.greeting")}</span>{" "}
        <span className="about-intro__name">{t("about.name")}</span>
      </h1>

      <div
        className="about-intro__body text-mouse-glow w-full max-w-full"
        data-text-glow
      >
        {PARAGRAPH_KEYS.map((key) => (
          <p key={key} dangerouslySetInnerHTML={{ __html: t(key) }} />
        ))}
      </div>
    </>
  );
}
