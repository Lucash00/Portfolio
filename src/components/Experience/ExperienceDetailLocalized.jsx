import { useMemo } from "react";
import { getExperienceBySlug } from "../../data/getLocalized";
import { useTranslation } from "../../i18n/client";
import DetailTitle from "../Utils/Font/DetailTitle.jsx";
import TextContent from "../Utils/Font/TextContent.jsx";
import SectionToggle from "../Utils/SectionToggle.jsx";
import Slider from "../Utils/Slider/Slider.jsx";
import LinkList from "../Utils/Link/Link";
import LinkExperience from "../Utils/Link/LinkExperience";
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

export default function ExperienceDetailLocalized({ slug }) {
  const { locale, t } = useTranslation();
  const experience = useMemo(
    () => getExperienceBySlug(slug, locale),
    [slug, locale],
  );

  if (!experience) {
    return (
      <main>
        <p className="text-white p-8">Experience not found.</p>
      </main>
    );
  }

  const endLabel = experience.endDate ?? t("experience.current");
  const sections = [
    {
      name: t("experience.sections.highlights"),
      content: experience.highlights?.join("") || null,
    },
    {
      name: t("experience.sections.responsibilities"),
      content: experience.responsibilities?.join("") || null,
    },
    {
      name: t("experience.sections.skills"),
      content: experience.skills?.join("") || null,
    },
    { name: t("experience.sections.type"), content: experience.type || null },
    {
      name: t("experience.sections.location"),
      content: experience.location || null,
    },
  ].filter((s) => s.content);

  const experienceMedia =
    experience.media?.filter((src) => src?.trim().length > 0) ?? [];

  return (
    <main>
      <DetailTitle title={experience.title} logo={experience.logo} />
      <CardShell>
        {experienceMedia.length > 0 ? (
          <div className="z-10 mb-4 pt-3 md:pt-4 col-span-2 col-start-1">
            <Slider
              images={experienceMedia}
              lightboxLabel={experience.title}
            />
          </div>
        ) : null}

        <div className="py-4 col-span-2 col-start-1 border-spacing-y-10 border-b-2 border-gray-300">
          <TitleContent title={experience.title} />
          <p className="mb-2 text-gray-400">
            {experience.provider
              ? `${experience.provider} / ${experience.startDate} - ${endLabel}`
              : `${experience.startDate} - ${endLabel}`}
          </p>
          <TextContent content={experience.description} />
        </div>

        {experience.tags?.length > 0 ? (
          <div className="col-span-2 col-start-1 mb-2">
            <ul className="portfolio-tag-list mb-2">
              {experience.tags.map((tag) => (
                <li key={tag} className="portfolio-tag">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {sections.length > 0 ? (
          <div className="pt-4 sm:col-span-2 sm:col-start-1 md:col-span-2 md:col-start-1 border-y-2 border-gray-300">
            <SectionToggle sections={sections} />
          </div>
        ) : null}

        {(experience.companyUrl ||
          experience.certificateUrl?.length > 0 ||
          experience.projectUrl?.length > 0) && (
          <div className="pb-2 col-span-2 col-start-1">
            <TitleContent title={t("experience.sections.links")} />
            <div className="text-sm">
              {experience.companyUrl ? (
                <div className="mb-4">
                  <LinkList
                    links={[
                      {
                        url: experience.companyUrl,
                        name:
                          experience.companyLinkLabel ??
                          t("experience.links.viewCompany"),
                      },
                    ]}
                  />
                </div>
              ) : null}
              {experience.certificateUrl?.length > 0 ? (
                <LinkExperience
                  kind="certificate"
                  title={t("experience.links.certificates")}
                  urls={experience.certificateUrl}
                />
              ) : null}
              {experience.projectUrl?.length > 0 ? (
                <LinkExperience
                  kind="project"
                  title={t("experience.links.projects")}
                  urls={experience.projectUrl}
                />
              ) : null}
            </div>
          </div>
        )}
      </CardShell>
    </main>
  );
}
