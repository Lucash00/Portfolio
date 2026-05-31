import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, "..", "public", "assets");

async function optimizeLinuxIcon() {
  const source = path.join(assetsDir, "linux.svg");
  const target = path.join(assetsDir, "linux.webp");

  await sharp(source, { density: 200 })
    .resize(300, 150, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(target);

  const { size } = await import("node:fs/promises").then((fs) =>
    fs.stat(target),
  );
  console.log(`[icons] linux.webp (${size} bytes)`);
}

optimizeLinuxIcon().catch((error) => {
  console.error("[icons]", error);
  process.exit(1);
});
