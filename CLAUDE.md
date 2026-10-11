# Portfolio de Lucas Moreno (Astro)

Portfolio personal (www.lucas-moreno-dev.com): Astro 5 + React 18 + Tailwind 3, bilingüe es/en, desplegado en Cloudflare Pages.

## Contexto empaquetado (repomix)

Antes de explorar el código, consulta `repomix-output.xml` (raíz del repo): todo el código y la documentación en un único fichero (~140K tokens; no lo leas entero, usa Grep sobre él o Read con offset/limit y empieza por `<directory_structure>`).

- Se regenera con `repomix` (o `npx repomix`); la configuración está en `repomix.config.json`. Regéneralo tras cambios relevantes o si no existe: está en `.gitignore` y no se versiona.
- Excluye `package-lock.json`, `README.md` (es el de la plantilla de Astro), los SVG de `public/` y los binarios (estos sí aparecen en el árbol).

## Dónde vive el contenido

- `src/data/projects/{es,en}.ts` y `src/data/experiences/{es,en}.ts`: más reciente primero. El orden del array es el de las listas, el de la línea de tiempo y el de las previews de la home (las 3 primeras). El `slug` es el mismo en ambos idiomas. `endDate` es la etiqueta de la línea de tiempo. `projectUrl` de una experiencia enlaza a `/proyecto/<slug>`.
- `src/data/certificates/{es,en}.ts`: certificados. UI: `src/i18n/locales/{es,en}.ts`; el idioma activo se guarda en `localStorage["portfolio-locale"]`.
- Media en `public/<Carpeta>/N.png|webp` (el slider acepta cualquier formato) y logo en `public/<Carpeta>/logo.png`.
- Los textos son HTML + markdown (react-markdown + rehype-raw). `normalizeContent` borra el espacio entre etiquetas contiguas: `</strong> <strong>` se pega, intercala texto. Patrón de listas: `<strong>Título:</strong>` seguido de `<ul>` sin línea en blanco, como en las fichas existentes.

## Checklist para añadir un proyecto o una experiencia

1. Logo `public/<Carpeta>/logo.png` (PNG con alpha) y media.
2. Añadir `/<Carpeta>/logo.png` a las DOS listas: `scripts/generate-card-logos.mjs` y `src/data/cardLogoPaths.ts`. Después `node scripts/generate-card-logos.mjs` (genera `public/_card-logos/*.webp` y `src/data/cardLogoUrlMap.json`; ambos se versionan).
3. Entrada en `es.ts` y `en.ts` con el mismo slug.
4. Verificar con `npx astro check` y `npx astro build`, y revisar a mano con `npm run dev` (localhost:4321) en escritorio, móvil y en inglés. En Windows, `npx`/`npm` hay que lanzarlos desde PowerShell.

La cabecera de detalle tiene fondo azul oscuro: un logo oscuro se pierde. Si pasa, ponerlo sobre una pastilla blanca redondeada (ver `public/NettDigitalSchool/logo.png`).
