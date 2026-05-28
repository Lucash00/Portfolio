import { en } from "./en";
import { es, type Messages } from "./es";

export const catalogs = {
  es,
  en,
} as Record<string, Messages>;

export { es, en };
export type { Messages };
