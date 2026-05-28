import { useTranslation } from "../../i18n/client";

export default function AboutMeBody() {
  const { t } = useTranslation();
  const keys = ["about.paragraphs.p1", "about.paragraphs.p2", "about.paragraphs.p3"];

  return (
    <div
      className="about-intro__body text-mouse-glow w-full max-w-full"
      data-text-glow
    >
      {keys.map((key) => (
        <p key={key} dangerouslySetInnerHTML={{ __html: t(key) }} />
      ))}
    </div>
  );
}
