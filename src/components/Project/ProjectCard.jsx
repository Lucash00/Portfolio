import CardLink from "../Utils/Card/CardLink.jsx";
import CardLogoImage from "../Utils/Card/CardLogoImage.jsx";
import TextContent from "../Utils/Font/TextContent.jsx";
import { projectPath } from "../../data/slug";
import { useTranslation } from "../../i18n/client";

const cardEntryTitleClass =
  "card-title font-bold text-[0.8125rem] sm:text-[1.25rem] md:text-[1.625rem] mb-1 leading-snug";

export default function ProjectCard({ project, compact = false }) {
  const { t } = useTranslation();
  const visibleTags = compact ? project.tags.slice(0, 4) : project.tags;

  const logoColClass = compact
    ? "card-logo-col sm:col-span-10 sm:mt-4 sm:mb-2 md:col-span-3 flex items-center justify-center"
    : "card-logo-col sm:col-span-10 sm:mt-10 sm:mb-5 md:col-span-3 lg:col-span-2 xl:col-span-2 2xl:col-span-2 flex items-center justify-center";
  const bodyColClass = compact
    ? "sm:px-3 sm:py-2 md:py-3 sm:border-t-2 md:border-l-2 sm:pt-3 sm:border-slate-200 md:px-4 sm:col-span-10 md:col-span-7"
    : "min-w-0 sm:px-3 sm:py-2 md:py-4 sm:border-t-2 md:border-l-2 sm:pt-4 sm:border-slate-200 md:px-6 sm:col-span-10 md:col-span-7 lg:col-span-8 xl:col-span-8 2xl:col-span-8";
  const metaClass = compact
    ? "mb-2 text-gray-400 text-sm sm:text-xs md:text-[0.9375rem]"
    : "mb-2 text-gray-400 sm:text-xs md:text-sm";
  const tagClass = compact ? "portfolio-tag" : "portfolio-tag portfolio-tag--list";

  return (
    <CardLink link={projectPath(project.slug)} compact={compact}>
      <div className={logoColClass}>
        <div className="card-logo-wrap">
          <CardLogoImage
            src={project.logo}
            alt={project.title}
            className="card-logo card-logo-img md:group-hover:animate-logoWobble"
          />
        </div>
      </div>
      <div className={bodyColClass}>
        <div className={cardEntryTitleClass}>{project.title}</div>
        <p className={metaClass}>
          {project.company ?? t("project.selfTaught")} / {project.startDate} - {project.endDate}
        </p>
        <TextContent content={project.briefDescription} variant="compact" />
        {visibleTags.map((tag) => (
          <span key={tag} className={tagClass}>
            {tag}
          </span>
        ))}
      </div>
    </CardLink>
  );
}
