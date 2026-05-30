import CardLink from "../Utils/Card/CardLink.jsx";
import TextContent from "../Utils/Font/TextContent.jsx";
import { experiencePath } from "../../data/slug";
import { useTranslation } from "../../i18n/client";

const cardEntryTitleClass =
  "card-title font-bold text-[0.8125rem] sm:text-[1.25rem] md:text-[1.625rem] mb-1 leading-snug";

export default function ExperienceCard({ experience, compact = false }) {
  const { t } = useTranslation();
  const visibleTags = compact ? experience.tags.slice(0, 4) : experience.tags;
  const subtitle = experience.provider
    ? `${experience.provider} / ${experience.startDate} - ${experience.endDate ?? (t("experience.current") ?? "Present")}`
    : `${experience.startDate} - ${experience.endDate ?? (t("experience.current") ?? "Present")}`;

  const metaClass = compact
    ? "mb-2 text-gray-400 text-sm sm:text-xs md:text-[0.9375rem]"
    : "mb-2 text-gray-400 sm:text-xs md:text-sm";
  const tagClass = compact ? "portfolio-tag" : "portfolio-tag portfolio-tag--list";

  return (
    <CardLink link={experiencePath(experience.slug)} compact={compact}>
      {experience.logo ? (
        <div className="card-logo-col sm:col-span-10 sm:mt-4 sm:mb-2 md:col-span-3 flex items-center justify-center">
          <div className="card-logo-wrap">
            <img
              src={experience.logo}
              alt={experience.title}
              className="card-logo card-logo-img md:group-hover:animate-logoWobble"
              width={224}
              height={96}
              loading="lazy"
            />
          </div>
        </div>
      ) : null}
      <div
        className={
          experience.logo
            ? "min-w-0 sm:px-3 sm:py-2 md:py-3 sm:border-t-2 md:border-l-2 sm:pt-3 sm:border-slate-200 md:px-4 sm:col-span-10 md:col-span-7"
            : "min-w-0 sm:px-3 sm:py-2 md:py-4 sm:border-t-2 md:border-l-2 sm:pt-4 sm:border-slate-200 md:px-6 sm:col-span-10 md:col-span-7 lg:col-span-8 xl:col-span-8 2xl:col-span-8"
        }
      >
        <div className={cardEntryTitleClass}>{experience.title}</div>
        <p className={metaClass}>{subtitle}</p>
        <TextContent content={experience.briefDescription} variant="compact" />
        {visibleTags.map((tag) => (
          <span key={tag} className={tagClass}>
            {tag}
          </span>
        ))}
      </div>
    </CardLink>
  );
}
