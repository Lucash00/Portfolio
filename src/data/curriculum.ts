import cvEn from "../assets/CV_Lucas_Moreno_Corral_EN.pdf";
import cvEs from "../assets/CV_Lucas_Moreno_Corral_ES.pdf";

const CV_BY_LOCALE = {
  en: cvEn,
  es: cvEs,
} as const;

export function getCurriculumUrl(locale: string): string {
  return locale === "en" ? CV_BY_LOCALE.en : CV_BY_LOCALE.es;
}
