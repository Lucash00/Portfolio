import type { ImageMetadata } from "astro";

const logoModules = import.meta.glob<{ default: ImageMetadata }>(
  "../../public/**/logo.png",
  { eager: true },
);

/** Resuelve una ruta pública (/DatabaySolutions/logo.png) al módulo importable. */
export function resolvePublicLogo(
  publicPath: string,
): ImageMetadata | undefined {
  const key = `../../public${publicPath}`;
  return logoModules[key]?.default;
}
