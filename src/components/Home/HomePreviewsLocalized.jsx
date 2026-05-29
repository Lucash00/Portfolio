import { useMemo } from "react";
import { getCertificates, getExperiences, getProjects } from "../../data/getLocalized";
import { useTranslation } from "../../i18n/client";
import CertificateCard from "../Certificate/CertificateCard.jsx";
import ExperienceCard from "../Experience/ExperienceCard.jsx";
import ProjectCard from "../Project/ProjectCard.jsx";
import HomePreviewSectionLocalized from "./HomePreviewSectionLocalized.jsx";

const PREVIEW_COUNT = 3;

export default function HomePreviewsLocalized() {
  const { locale } = useTranslation();
  const experiences = useMemo(
    () => getExperiences(locale).slice(0, PREVIEW_COUNT),
    [locale],
  );
  const projects = useMemo(
    () => getProjects(locale).slice(0, PREVIEW_COUNT),
    [locale],
  );
  const certificates = useMemo(
    () => getCertificates(locale).slice(0, PREVIEW_COUNT),
    [locale],
  );

  return (
    <>
      <HomePreviewSectionLocalized
        sectionId="home-experiences"
        titleKey="home.experiences.title"
        descriptionKey="home.experiences.description"
        viewMoreHref="/experiencia"
      >
        <div className="w-full">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.slug}
              experience={experience}
              compact
            />
          ))}
        </div>
      </HomePreviewSectionLocalized>

      <HomePreviewSectionLocalized
        titleKey="home.projects.title"
        descriptionKey="home.projects.description"
        viewMoreHref="/proyectos"
      >
        <div className="min-w-0 w-full max-w-full">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} compact />
          ))}
        </div>
      </HomePreviewSectionLocalized>

      <HomePreviewSectionLocalized
        titleKey="home.certificates.title"
        descriptionKey="home.certificates.description"
        viewMoreHref="/certificados"
      >
        <div className="min-w-0 w-full max-w-full">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.slug}
              certificate={certificate}
              compact
            />
          ))}
        </div>
      </HomePreviewSectionLocalized>
    </>
  );
}
