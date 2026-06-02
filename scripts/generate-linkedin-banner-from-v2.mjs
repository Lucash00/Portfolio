/**
 * Banner 1584×396 desde v2: fondo/código igual, destello de texto copiado de v2 (volteado a la derecha).
 */
import { mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const v2Path = path.resolve(
  __dirname,
  "..",
  "..",
  "..",
  "linkedin-banner-lucas-moreno-dev-v2.png",
);
const outDir = path.resolve(__dirname, "..", "..", "..");

const W = 1584;
const H = 396;

/** Recorte en v2 (1536×1024) donde está el bloque texto + destello azul. */
const V2_TEXT_GLOW = { left: 40, top: 400, width: 580, height: 240 };

/** Posición del bloque en el banner 1× (esquina sup. izq. del recorte volteado). */
const GLOW_PLACE = { left: 948, top: 78, width: 580, height: 240 };

function buildOverlaySvg(width, height) {
  const scaleX = width / W;
  const scaleY = height / H;
  const solidW = Math.round(820 * scaleX);

  return Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="hideLeftText" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0a1628" stop-opacity="1"/>
      <stop offset="50%" stop-color="#0c1a30" stop-opacity="1"/>
      <stop offset="62%" stop-color="#0c1a30" stop-opacity="0.92"/>
      <stop offset="74%" stop-color="#0c1a30" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="${solidW}" height="${height}" fill="#0a1628"/>
  <rect width="${width}" height="${height}" fill="url(#hideLeftText)"/>
</svg>`);
}

/** Texto limpio encima (el destello viene del recorte v2). */
function buildTextSvg(width, height) {
  const scaleX = width / W;
  const scaleY = height / H;
  const x = 1536 * scaleX;
  const y1 = 172 * scaleY;
  const y2 = 212 * scaleY;
  const fs1 = 40 * scaleY;
  const fs2 = 18 * scaleY;

  return Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <text
    x="${x}"
    y="${y1}"
    text-anchor="end"
    font-family="'Segoe UI','Helvetica Neue',Arial,sans-serif"
    font-size="${fs1}"
    font-weight="700"
    fill="#ffffff"
    letter-spacing="-0.02em"
  >Full Stack &amp; DevOps</text>
  <text
    x="${x}"
    y="${y2}"
    text-anchor="end"
    font-family="'Segoe UI','Helvetica Neue',Arial,sans-serif"
    font-size="${fs2}"
    font-weight="400"
    fill="#b8c5d6"
  >lucas-moreno-dev.com</text>
</svg>`);
}

async function buildV2GlowPatch(pixelW, pixelH) {
  const scaleX = pixelW / W;
  const scaleY = pixelH / H;
  const w = Math.round(GLOW_PLACE.width * scaleX);
  const h = Math.round(GLOW_PLACE.height * scaleY);

  return sharp(v2Path)
    .extract(V2_TEXT_GLOW)
    .flop()
    .resize(w, h, { fit: "fill" })
    .png()
    .toBuffer();
}

async function renderBanner(pixelW, pixelH, outPath) {
  const scaleX = pixelW / W;
  const scaleY = pixelH / H;
  const glowLeft = Math.round(GLOW_PLACE.left * scaleX);
  const glowTop = Math.round(GLOW_PLACE.top * scaleY);

  const base = await sharp(v2Path)
    .resize(pixelW, pixelH, { fit: "cover", position: "right" })
    .modulate({ brightness: 1.02 })
    .sharpen({ sigma: 0.5 })
    .toBuffer();

  const overlay = await sharp(buildOverlaySvg(pixelW, pixelH)).png().toBuffer();
  const glowPatch = await buildV2GlowPatch(pixelW, pixelH);
  const text = await sharp(buildTextSvg(pixelW, pixelH)).png().toBuffer();

  await sharp(base)
    .composite([
      { input: overlay, blend: "over" },
      { input: glowPatch, left: glowLeft, top: glowTop, blend: "screen" },
      { input: text, blend: "over" },
    ])
    .png({ compressionLevel: 9 })
    .toFile(outPath);
}

async function main() {
  mkdirSync(outDir, { recursive: true });

  const path1x = path.join(outDir, "linkedin-banner-1584x396.png");
  const path2x = path.join(outDir, "linkedin-banner-1584x396@2x.png");

  await renderBanner(W, H, path1x);
  await renderBanner(W * 2, H * 2, path2x);

  const m1 = await sharp(path1x).metadata();
  console.log(`[linkedin-banner-v2] ${path1x} → ${m1.width}×${m1.height}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
