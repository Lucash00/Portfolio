/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { CardLogoUrls } from "./data/cardLogoPaths";

declare global {
  interface Window {
    __CARD_LOGO_URLS__?: Record<string, CardLogoUrls>;
  }
}

export {};
