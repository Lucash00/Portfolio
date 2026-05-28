import { useMemo } from "react";
import { getProjects } from "../../data/getLocalized";
import { useTranslation } from "../../i18n/client";
import ProjectCard from "./ProjectCard.jsx";

/**
 * @param {{ limit?: number, compact?: boolean }} props
 */
export default function ProjectListLocalized({ limit, compact = false }) {
  const { locale } = useTranslation();
  const projects = useMemo(() => {
    const list = getProjects(locale);
    return limit ? list.slice(0, limit) : list;
  }, [locale, limit]);

  return (
    <div className={compact ? "min-w-0 w-full max-w-full" : "min-w-0 w-full max-w-full mb-20"}>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} compact={compact} />
      ))}
    </div>
  );
}
