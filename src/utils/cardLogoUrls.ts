import { CARD_LOGO_PATHS, type CardLogoUrlMap } from "../data/cardLogoPaths";

export const CARD_LOGO_WIDTH = 224;
export const CARD_LOGO_HEIGHT = 96;
/** 2× del tamaño en pantalla (h-10 / 2rem) para logos anchos en DetailTitle. */
export const DETAIL_LOGO_MAX_WIDTH = 320;
export const DETAIL_LOGO_MAX_HEIGHT = 80;

/** Slug estable: /DatabaySolutions/logo.png → DatabaySolutions--logo */
export function cardLogoSlug(publicPath: string): string {
  return publicPath.slice(1).replace(/\.png$/i, "").replace(/\//g, "--");
}

export function getCardLogoWebpSrc(
  publicPath: string,
  variant: "card" | "detail" = "card",
): string {
  if (!publicPath || publicPath.endsWith(".svg")) return publicPath;
  if (!publicPath.endsWith(".png")) return publicPath;

  return `/_card-logos/${cardLogoSlug(publicPath)}-${variant}.webp`;
}

export function buildCardLogoUrlMapSync(): CardLogoUrlMap {
  return Object.fromEntries(
    CARD_LOGO_PATHS.map((path) => [
      path,
      {
        card: getCardLogoWebpSrc(path, "card"),
        detail: getCardLogoWebpSrc(path, "detail"),
      },
    ]),
  );
}
