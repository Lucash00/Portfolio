import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const outDir = path.join(rootDir, "public", "_card-logos");

const CARD_LOGO_PATHS = [
  "/DatabaySolutions/logo.png",
  "/Certificates/logo.png",
  "/ControlNet/logo.png",
  "/tecnico/logo.png",
  "/DevOpsTemplate/logo.png",
  "/Utsch/logo.png",
  "/Cuboc/logo.png",
  "/IndeK/logo.png",
  "/TourismWithStyle/logo.png",
  "/Russells/logo.png",
  "/ICEditorial/logo.png",
  "/BookingApi/logo.png",
  "/BafreMedia/logo.png",
  "/la11mil/logo.png",
  "/CRM/logo.png",
  "/MoviesDetails/logo.png",
  "/RotaPlace/logo.png",
];

function cardLogoSlug(publicPath) {
  return publicPath.slice(1).replace(/\.png$/i, "").replace(/\//g, "--");
}

async function optimizeLogo(publicPath, width, height, variant) {
  const source = path.join(rootDir, "public", publicPath.slice(1));
  const target = path.join(
    outDir,
    `${cardLogoSlug(publicPath)}-${variant}.webp`,
  );

  await sharp(source)
    .resize(width, height, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(target);
}

async function main() {
  await mkdir(outDir, { recursive: true });

  for (const logoPath of CARD_LOGO_PATHS) {
    await optimizeLogo(logoPath, 224, 96, "card");
    await optimizeLogo(logoPath, 80, 80, "detail");
  }

  const mapPath = path.join(rootDir, "src", "data", "cardLogoUrlMap.json");
  const map = Object.fromEntries(
    CARD_LOGO_PATHS.map((logoPath) => [
      logoPath,
      {
        card: `/_card-logos/${cardLogoSlug(logoPath)}-card.webp`,
        detail: `/_card-logos/${cardLogoSlug(logoPath)}-detail.webp`,
      },
    ]),
  );

  await writeFile(mapPath, `${JSON.stringify(map, null, 2)}\n`, "utf8");
  console.log(`[card-logos] ${CARD_LOGO_PATHS.length} logos → public/_card-logos/`);
}

main().catch((error) => {
  console.error("[card-logos]", error);
  process.exit(1);
});
