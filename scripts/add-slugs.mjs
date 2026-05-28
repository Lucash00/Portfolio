import fs from "fs";

function titleToSlug(title) {
  return title.trim().replace(/\s+/g, "-");
}

function patchFile(path, exportConst, typeImport, typeName) {
  let content = fs.readFileSync(path, "utf8");
  if (content.includes("slug:")) {
    console.log("skip", path);
    return;
  }

  content = content.replace(/export interface[\s\S]*?\r?\n\r?\n/g, "");
  if (!content.includes(`import type { ${typeName} }`)) {
    const insertAt = content.indexOf("export const");
    content =
      content.slice(0, insertAt) +
      `import type { ${typeName} } from "../types";\n\n` +
      content.slice(insertAt);
  }

  content = content.replace(
    new RegExp(`export const ${exportConst}: [\\s\\S]*?= \\[`),
    `export const ${exportConst}Es: ${typeName}[] = [`,
  );

  if (exportConst === "experiences") {
    content = content.replace(
      /\{\r?\n    id: (\d+),\r?\n    title: "([^"]+)"/g,
      (_, id, title) =>
        `{\n    id: ${id},\n    slug: "${titleToSlug(title)}",\n    title: "${title}"`,
    );
  } else {
    content = content.replace(
      /\{\r?\n    title: "([^"]+)"/g,
      (_, title) =>
        `{\n    slug: "${titleToSlug(title)}",\n    title: "${title}"`,
    );
  }

  fs.writeFileSync(path, content);
  console.log("patched", path);
}

patchFile("src/data/projects/es.ts", "projects", "Project", "Project");
patchFile("src/data/certificates/es.ts", "certificates", "Certificate", "Certificate");
patchFile("src/data/experiences/es.ts", "experiences", "Experience", "Experience");
