import { getImage } from "astro:assets";

import {
  CARD_LOGO_PATHS,
  type CardLogoUrlMap,
} from "../data/cardLogoPaths";
import { resolvePublicLogo } from "./cardLogoImageSources";

const CARD_LOGO_WIDTH = 224;
const CARD_LOGO_HEIGHT = 96;
const DETAIL_LOGO_WIDTH = 80;
const DETAIL_LOGO_HEIGHT = 80;

let cachedMap: CardLogoUrlMap | null = null;

async function optimizeLogo(
  src: string,
  width: number,
  height: number,
): Promise<string> {
  if (!src || src.endsWith(".svg")) return src;

  const imageSrc = resolvePublicLogo(src);
  if (!imageSrc) return src;

  const image = await getImage({
    src: imageSrc,
    width,
    height,
    format: "webp",
  });

  return image.src;
}

export async function getCardLogoUrlMap(): Promise<CardLogoUrlMap> {
  if (cachedMap) return cachedMap;

  const entries = await Promise.all(
    CARD_LOGO_PATHS.map(async (path) => {
      const card = await optimizeLogo(path, CARD_LOGO_WIDTH, CARD_LOGO_HEIGHT);
      const detail = await optimizeLogo(
        path,
        DETAIL_LOGO_WIDTH,
        DETAIL_LOGO_HEIGHT,
      );

      return [path, { card, detail }] as const;
    }),
  );

  cachedMap = Object.fromEntries(entries);
  return cachedMap;
}
