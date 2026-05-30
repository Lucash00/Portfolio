import { useMemo } from "react";
import { getProjectBySlug } from "../../data/getLocalized";
import { useTranslation } from "../../i18n/client";
import DetailTitle from "../Utils/Font/DetailTitle.jsx";
import TextContent from "../Utils/Font/TextContent.jsx";
import SectionToggle from "../Utils/SectionToggle.jsx";
import Slider from "../Utils/Slider/Slider.jsx";
import LinkList from "../Utils/Link/Link";
import CardShell from "../Utils/Card/CardShell.jsx";

function TitleContent({ title }) {
  return (
    <div className="card-entry-title-wrap relative mb-2">
      <h2 className="relative flex items-center gap-3">
        <span className="block min-w-0 flex-1 text-2xl font-bold text-gray-900 animate-cardEntryTitleIn">
          {title}
        </span>
      </h2>
    </div>
  );
}

export default function ProjectDetailLocalized({ slug }) {
  const { locale, t } = useTranslation();
  const project = useMemo(
    () => getProjectBySlug(slug, locale),
    [slug, locale],
  );

  if (!project) {
    return (
      <main>
        <p className="text-white p-8">Project not found.</p>
      </main>
    );
  }

  const sections = [
    { name: t("project.sections.objective"), content: project.objective },
    {
      name: t("project.sections.team"),
      content: project.team
        ? project.team.contributors
            ?.map((c) => `**${c.name}**: ${c.role}`)
            .join("\n\n")
        : "",
    },
    {
      name: t("project.sections.process"),
      content: project.developmentProcess
        ? `${t("project.sections.methodology")} ${project.developmentProcess.methodology}`
        : "",
    },
  ];

  const links = [
    ...(project.links?.website
      ? [{ url: project.links.website, name: t("project.links.viewProject") }]
      : []),
    ...(project.links?.codeRepository
      ? [{ url: project.links.codeRepository, name: t("project.links.viewCode") }]
      : []),
  ];

  return (
    <main>
      <DetailTitle title={project.title} logo={project.logo} />
      <CardShell>
        {project.media?.length > 0 ? (
          <div className="z-10 mb-4 pt-3 md:pt-4 col-span-2 col-start-1">
            <Slider images={project.media} lightboxLabel={project.title} />
          </div>
        ) : null}

        {links.length > 0 ? (
          <div className="py-2 col-span-2 col-start-1">
            <LinkList links={links} />
          </div>
        ) : null}

        {project.tags?.length > 0 ? (
          <div className="sm:col-span-2 md:col-span-2 col-start-1">
            <ul className="portfolio-tag-list mb-4">
              {project.tags.map((tag) => (
                <li key={tag} className="portfolio-tag">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="pt-4 col-span-2 col-start-1 border-spacing-y-10 border-y-2 border-gray-300">
          <TitleContent title={project.titleJob} />
          <p className="mb-2 text-gray-400">
            {project.company
              ? `${project.company} / ${project.startDate} - ${project.endDate}`
              : `${t("project.selfTaught")} / ${project.startDate} - ${project.endDate}`}
          </p>
          <TextContent content={project.description} />
        </div>

        <div className="py-2 sm:col-span-2 sm:col-start-1 md:col-span-2 md:col-start-1">
          <SectionToggle sections={sections} />
        </div>
      </CardShell>
    </main>
  );
}
