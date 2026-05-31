import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import subsetFont from "subset-font";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const fontsDir = path.join(rootDir, "public", "fonts");
const cssPath = path.join(rootDir, "src", "styles", "fontawesome-subset.css");

const FA_REGULAR_URL =
  "https://pro.fontawesome.com/releases/v5.10.0/webfonts/fa-regular-400.woff2";

/** Iconos usados en navegación (Font Awesome 5 Pro Regular). */
const ICON_GLYPHS = "\uf00d\uf0c9\uf015\uf07c\uf5f3\uf0b1\uf007\uf15c";

const ICON_RULES = [
  [".fa-times:before", "\\f00d"],
  [".fa-bars:before", "\\f0c9"],
  [".fa-home:before", "\\f015"],
  [".fa-folder-open:before", "\\f07c"],
  [".fa-file-certificate:before", "\\f5f3"],
  [".fa-briefcase:before", "\\f0b1"],
  [".fa-user:before", "\\f007"],
  [".fa-file-alt:before", "\\f15c"],
];

async function main() {
  const response = await fetch(FA_REGULAR_URL);
  if (!response.ok) {
    throw new Error(`No se pudo descargar Font Awesome: ${response.status}`);
  }

  const sourceBuffer = Buffer.from(await response.arrayBuffer());
  const subsetBuffer = await subsetFont(sourceBuffer, ICON_GLYPHS, {
    targetFormat: "woff2",
  });

  await mkdir(fontsDir, { recursive: true });

  const fontFileName = "fa-regular-subset.woff2";
  const fontPath = path.join(fontsDir, fontFileName);
  await writeFile(fontPath, subsetBuffer);

  const css = `@font-face {
  font-family: "Font Awesome 5 Pro";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("/fonts/${fontFileName}") format("woff2");
}

.fa,
.far {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
}

.far {
  font-family: "Font Awesome 5 Pro";
  font-weight: 400;
}

${ICON_RULES.map(([selector, code]) => `${selector} { content: "${code}"; }`).join("\n")}
`;

  await writeFile(cssPath, css);
  console.log(
    `[fa-subset] ${fontFileName} (${subsetBuffer.length} bytes) + fontawesome-subset.css`,
  );
}

main().catch((error) => {
  console.error("[fa-subset]", error);
  process.exit(1);
});
