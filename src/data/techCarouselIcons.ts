/**
 * Iconos del carrusel de tecnologías (sección Tecnologías en inicio).
 * Cada entrada debe existir en: public/assets/<nombre>.svg
 */
export type TechCarouselIcon = {
  alt: string;
  /** Nombre del archivo en public/assets/ (ej. "gcp.svg") */
  file: string;
};

export const techCarouselIcons: TechCarouselIcon[] = [
  // —— Ya en assets ——
  { alt: "HTML", file: "html.svg" },
  { alt: "CSS", file: "css.svg" },
  { alt: "TailwindCSS", file: "tailwind.svg" },
  { alt: "JavaScript", file: "js.svg" },
  { alt: "TypeScript", file: "typescript.svg" },
  { alt: "Python", file: "python.svg" },
  { alt: "Swift", file: "swift.svg" },
  { alt: "React", file: "react.svg" },
  { alt: "Astro", file: "astro.svg" },
  { alt: "Angular", file: "angular.svg" },
  { alt: "Django", file: "django.svg" },
  { alt: "ASP.NET", file: "aspnet.svg" },
  { alt: "Java", file: "java.svg" },
  { alt: "Spring", file: "spring.svg" },
  { alt: "Node.js", file: "nodejs.svg" },
  { alt: "PHP", file: "php.svg" },
  { alt: "Linux", file: "linux.webp" },
  { alt: "Nginx", file: "nginx.svg" },
  { alt: "Wordpress", file: "wordpress.svg" },
  { alt: "SQL", file: "sql.svg" },
  { alt: "MongoDB", file: "mongodb.svg" },
  { alt: "Github", file: "github.svg" },
  { alt: "Gitlab", file: "gitlab.svg" },

  // —— Nuevas (proyectos recientes): añade estos SVG en public/assets/ ——
  { alt: "Google Cloud Platform", file: "gcp.svg" },
  { alt: "Terraform", file: "terraform.svg" },
  { alt: "Docker", file: "docker.svg" },
  { alt: "Cloudflare", file: "cloudflare.svg" },
  { alt: "GitHub Actions", file: "githubactions.svg" },
  { alt: "Vue.js", file: "vue.svg" },
  { alt: "Next.js", file: "nextjs.svg" },
  { alt: "PostgreSQL", file: "postgresql.svg" },
  { alt: "Prisma", file: "prisma.svg" },
  { alt: "Redis", file: "redis.svg" },
  { alt: "FastAPI", file: "fastapi.svg" },
  { alt: "Express", file: "express.svg" },
  { alt: "PrestaShop", file: "prestashop.svg" },
  { alt: "Odoo", file: "odoo.svg" },
  { alt: "AWS", file: "aws.svg" },
  { alt: "Firebase", file: "firebase.svg" },
];

export const techCarouselIconsPending = techCarouselIcons.filter(
  (icon) =>
    ![
      "html.svg",
      "css.svg",
      "tailwind.svg",
      "js.svg",
      "typescript.svg",
      "python.svg",
      "swift.svg",
      "react.svg",
      "astro.svg",
      "angular.svg",
      "django.svg",
      "aspnet.svg",
      "java.svg",
      "spring.svg",
      "nodejs.svg",
      "php.svg",
      "linux.webp",
      "nginx.svg",
      "wordpress.svg",
      "sql.svg",
      "mongodb.svg",
      "github.svg",
      "gitlab.svg",
    ].includes(icon.file),
);
