import { useEffect, useState } from "react";
import { getCurriculumUrl } from "../../data/curriculum";
import { useTranslation } from "../../i18n/client";

const RELATED_PATHS = {
  "/proyectos": "/proyecto",
  "/certificados": "/certificado",
  "/experiencia": "/experiencia",
  "/sobreMi": "/sobreMi",
};

const NAV_ITEMS = [
  { href: "/", icon: "far fa-home", key: "nav.home" },
  { href: "/proyectos", icon: "far fa-folder-open", key: "nav.projects" },
  { href: "/certificados", icon: "far fa-file-certificate", key: "nav.certificates" },
  { href: "/experiencia", icon: "far fa-briefcase", key: "nav.experience" },
  { href: "/sobreMi", icon: "far fa-user", key: "nav.about" },
  { icon: "far fa-file-alt", key: "nav.downloadCv", external: true, cv: true },
];

function isActive(href, pathname) {
  if (pathname === href) return true;
  const prefix = RELATED_PATHS[href];
  return prefix ? pathname.startsWith(prefix) : false;
}

function NavLink({ href, icon, label, active, external }) {
  const linkClass = [
    "menu-link group flex h-full w-full flex-col border-b-2 box-border pt-1 pb-0 text-center transition-colors duration-150 ease-in-out",
    "md:px-3 lg:px-5 xl:px-7 2xl:px-8",
    active
      ? "cursor-default text-white border-transparent"
      : "text-gray-400 border-transparent hover:text-yellow-400 hover:border-yellow-400",
  ].join(" ");

  const contentClass = [
    "menu-link__content block flex-1 pb-0.5 transition-transform duration-150 ease-in-out",
    !active && "group-hover:scale-110",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="flex h-full flex-none z-40 opacity-100">
      <a
        href={href}
        data-menu-link
        data-active={active ? "true" : undefined}
        className={linkClass}
      >
        <span className={contentClass}>
          <i className={`${icon} block text-xl leading-none mb-0.5`} aria-hidden="true" />
          <span className="block md:text-xxs lg:text-xs 2xl:text-sm leading-tight">
            {label}
          </span>
        </span>
      </a>
    </div>
  );
}

export default function HeaderNavLocalized() {
  const { locale, t } = useTranslation();
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    const update = () => setPathname(window.location.pathname);
    update();
    document.addEventListener("astro:page-load", update);
    return () => document.removeEventListener("astro:page-load", update);
  }, []);

  return (
    <nav
      className="header__nav hidden min-h-0 md:flex md:min-w-0 md:flex-1 md:items-stretch md:justify-end md:pl-2 md:pr-[6.75rem] md:p-0 lg:pr-[7.25rem] z-40"
      aria-label={t("footer.navAria")}
      data-locale={locale}
    >
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.key}
          href={item.cv ? getCurriculumUrl(locale) : item.href}
          icon={item.icon}
          label={t(item.key)}
          active={!item.external && isActive(item.href, pathname)}
          external={item.external}
        />
      ))}
    </nav>
  );
}
