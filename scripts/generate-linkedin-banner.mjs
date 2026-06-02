/**
 * Banner LinkedIn: 1584×396 (@2x 3168×792).
 * Código difuminado a la derecha (estilo portfolio), texto a la derecha sin glow.
 */
import { mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "..", "..", "..");

const W = 1584;
const H = 396;

const CODE_LINES = [
  [{ c: "#5a6b5a", t: "// React · API client" }],
  [
    { c: "#569cd6", t: "import" },
    { c: "#6b7280", t: " { " },
    { c: "#dcdcaa", t: "useEffect" },
    { c: "#6b7280", t: " } " },
    { c: "#569cd6", t: "from" },
    { c: "#ce9178", t: '"react"' },
  ],
  [
    { c: "#569cd6", t: "export" },
    { c: "#569cd6", t: " async " },
    { c: "#569cd6", t: "function" },
    { c: "#dcdcaa", t: "fetchData" },
    { c: "#6b7280", t: "(url) {" },
  ],
  [
    { c: "#569cd6", t: "  return" },
    { c: "#6b7280", t: " res." },
    { c: "#dcdcaa", t: "json" },
    { c: "#6b7280", t: "()" },
  ],
  [{ c: "#6b7280", t: "}" }],
  [{ c: "#5a6b5a", t: "# Terraform · GCP" }],
  [
    { c: "#dcdcaa", t: "resource" },
    { c: "#ce9178", t: ' "google_cloud_run_service"' },
    { c: "#6b7280", t: " {" },
  ],
  [
    { c: "#6b7280", t: "  name = " },
    { c: "#dcdcaa", t: "var" },
    { c: "#6b7280", t: ".service_name" },
  ],
  [{ c: "#5a6b5a", t: "# CI/CD · GitHub Actions" }],
  [{ c: "#5a6b5a", t: "--- Astro layout ---" }],
  [
    { c: "#569cd6", t: "import" },
    { c: "#6b7280", t: " Layout " },
    { c: "#569cd6", t: "from" },
    { c: "#ce9178", t: '"../layouts/Layout.astro"' },
  ],
  [
    { c: "#6b7280", t: "<Layout " },
    { c: "#9cdcfe", t: "title" },
    { c: "#6b7280", t: "={title}>" },
  ],
  [{ c: "#5a6b5a", t: "// PHP · PrestaShop" }],
  [
    { c: "#569cd6", t: "class" },
    { c: "#dcdcaa", t: " OrderSync" },
    { c: "#6b7280", t: " {" },
  ],
  [{ c: "#5a6b5a", t: "// Odoo · Verifactu" }],
  [
    { c: "#6b7280", t: "invoice." },
    { c: "#dcdcaa", t: "action_post" },
    { c: "#6b7280", t: "()" },
  ],
];

function escapeXml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildCodeLinesSvg() {
  const fontSize = 13;
  const lineHeight = 20;
  const startX = 680;
  let y = 28;

  return CODE_LINES.map((parts) => {
    const spans = parts
      .map((p) => `<tspan fill="${p.c}">${escapeXml(p.t)}</tspan>`)
      .join("");
    const line = `<text x="${startX}" y="${y}" font-family="'Cascadia Code','Consolas',monospace" font-size="${fontSize}">${spans}</text>`;
    y += lineHeight;
    return line;
  }).join("\n");
}

function buildBannerSvg(pixelWidth, pixelHeight) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${pixelWidth}" height="${pixelHeight}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="${H}" x2="${W * 0.2}" y2="0">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="45%" stop-color="#172554"/>
      <stop offset="100%" stop-color="#164e63"/>
    </linearGradient>
    <linearGradient id="codeFade" x1="0" y1="0" x2="${W}" y2="0">
      <stop offset="0%" stop-color="black" stop-opacity="0"/>
      <stop offset="32%" stop-color="black" stop-opacity="0.35"/>
      <stop offset="58%" stop-color="white" stop-opacity="1"/>
      <stop offset="100%" stop-color="white" stop-opacity="1"/>
    </linearGradient>
    <mask id="codeMask">
      <rect width="${W}" height="${H}" fill="url(#codeFade)"/>
    </mask>
    <filter id="codeBlur" x="-15%" y="-15%" width="130%" height="130%">
      <feGaussianBlur stdDeviation="2.8"/>
    </filter>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <g mask="url(#codeMask)" filter="url(#codeBlur)" opacity="0.4">
    ${buildCodeLinesSvg()}
  </g>

  <text
    x="1544"
    y="182"
    text-anchor="end"
    font-family="'Poppins','Segoe UI',system-ui,sans-serif"
    font-size="38"
    font-weight="700"
    fill="#ffffff"
    letter-spacing="-0.02em"
  >Full Stack &amp; DevOps</text>

  <text
    x="1544"
    y="228"
    text-anchor="end"
    font-family="'Poppins','Segoe UI',system-ui,sans-serif"
    font-size="17"
    font-weight="500"
    fill="#94a3b8"
  >lucas-moreno-dev.com</text>
</svg>`;
}

async function renderPng(pixelWidth, pixelHeight, outPath) {
  const svg = buildBannerSvg(pixelWidth, pixelHeight);
  await sharp(Buffer.from(svg))
    .resize(pixelWidth, pixelHeight, { fit: "fill" })
    .png({ compressionLevel: 9 })
    .toFile(outPath);
}

async function main() {
  mkdirSync(outDir, { recursive: true });

  const path1x = path.join(outDir, "linkedin-banner-1584x396.png");
  const path2x = path.join(outDir, "linkedin-banner-1584x396@2x.png");

  await renderPng(W, H, path1x);
  await renderPng(W * 2, H * 2, path2x);

  const meta1 = await sharp(path1x).metadata();
  const meta2 = await sharp(path2x).metadata();

  console.log(`[linkedin-banner] ${path1x} → ${meta1.width}×${meta1.height}`);
  console.log(`[linkedin-banner] ${path2x} → ${meta2.width}×${meta2.height}`);
}

main().catch((err) => {
  console.error("[linkedin-banner]", err);
  process.exit(1);
});
