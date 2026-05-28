import { useMemo } from "react";
import { getExperiences } from "../../data/getLocalized";
import { useTranslation } from "../../i18n/client";
import ExperienceCard from "./ExperienceCard.jsx";

export default function ExperiencePreviewListLocalized({ limit = 3 }) {
  const { locale } = useTranslation();
  const experiences = useMemo(
    () => getExperiences(locale).slice(0, limit),
    [locale, limit],
  );

  return (
    <div className="w-full">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.slug} experience={experience} compact />
      ))}
    </div>
  );
}
