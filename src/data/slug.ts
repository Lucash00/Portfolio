/** Slug estable para URLs (independiente del idioma). */
export function titleToSlug(title: string): string {
  return title.trim().replace(/\s+/g, "-");
}

export function projectPath(slug: string): string {
  return `/proyecto/${slug}`;
}

export function certificatePath(slug: string): string {
  return `/certificado/${slug}`;
}

export function experiencePath(slug: string): string {
  return `/experiencia/${slug}`;
}
