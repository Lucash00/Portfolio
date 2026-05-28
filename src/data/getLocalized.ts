import type { Locale } from "../i18n/config";
import { DEFAULT_LOCALE } from "../i18n/config";
import { resolveLocale } from "../i18n/core";
import type { Certificate, Experience, Project } from "./types";
import { certificatesEn } from "./certificates/en";
import { certificatesEs } from "./certificates/es";
import { experiencesEn } from "./experiences/en";
import { experiencesEs } from "./experiences/es";
import { projectsEn } from "./projects/en";
import { projectsEs } from "./projects/es";

const projectsByLocale: Record<string, Project[]> = {
  es: projectsEs,
  en: projectsEn,
};

const certificatesByLocale: Record<string, Certificate[]> = {
  es: certificatesEs,
  en: certificatesEn,
};

const experiencesByLocale: Record<string, Experience[]> = {
  es: experiencesEs,
  en: experiencesEn,
};

function pickLocale(locale?: string | null): Locale {
  return resolveLocale(locale ?? DEFAULT_LOCALE);
}

export function getProjects(locale?: string | null): Project[] {
  const key = pickLocale(locale);
  return projectsByLocale[key] ?? projectsByLocale[DEFAULT_LOCALE];
}

export function getProjectBySlug(
  slug: string,
  locale?: string | null,
): Project | undefined {
  return getProjects(locale).find((p) => p.slug === slug);
}

export function getCertificates(locale?: string | null): Certificate[] {
  const key = pickLocale(locale);
  return certificatesByLocale[key] ?? certificatesByLocale[DEFAULT_LOCALE];
}

export function getCertificateBySlug(
  slug: string,
  locale?: string | null,
): Certificate | undefined {
  return getCertificates(locale).find((c) => c.slug === slug);
}

export function getExperiences(locale?: string | null): Experience[] {
  const key = pickLocale(locale);
  return experiencesByLocale[key] ?? experiencesByLocale[DEFAULT_LOCALE];
}

export function getExperienceBySlug(
  slug: string,
  locale?: string | null,
): Experience | undefined {
  return getExperiences(locale).find((e) => e.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsEs.map((p) => p.slug);
}

export function getAllCertificateSlugs(): string[] {
  return certificatesEs.map((c) => c.slug);
}

export function getAllExperienceSlugs(): string[] {
  return experiencesEs.map((e) => e.slug);
}
