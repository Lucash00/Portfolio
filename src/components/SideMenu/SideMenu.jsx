import { useEffect, useState } from "react";
import SideMenuSection from "./SideMenuSection.jsx";
import { getCurriculumUrl } from "../../data/curriculum";
import { useTranslation } from "../../i18n/client";

const SideMenu = ({ avatarSrc }) => {
  const { locale, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    const syncPath = () => {
      setCurrentPath(window.location.pathname);
      setIsOpen(false);
    };

    syncPath();
    document.addEventListener("astro:page-load", syncPath);

    return () => {
      document.removeEventListener("astro:page-load", syncPath);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleMenu}
        className="side-menu-toggle fixed top-5 left-5 z-[10000] flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white md:hidden"
        aria-label={t("nav.toggleMenu")}
        aria-expanded={isOpen}
      >
        <i className={isOpen ? "far fa-times" : "far fa-bars"}></i>
      </button>

      <div
        className={`side-menu md:hidden${isOpen ? " side-menu--open" : ""}`}
        aria-hidden={!isOpen}
      >
        <nav className="flex flex-col items-start space-y-4 p-4">
          <div className="mb-4 flex w-full justify-center">
            <img
              src={avatarSrc}
              alt={t("nav.profilePhoto")}
              className="h-20 w-20 rounded-full object-cover"
              width={80}
              height={80}
              loading="eager"
              decoding="async"
            />
          </div>

          <SideMenuSection
            href="/"
            icon="far fa-home"
            text={t("nav.home")}
            isActive={currentPath === "/"}
          />
          <SideMenuSection
            href="/proyectos"
            icon="far fa-folder-open"
            text={t("nav.projects")}
            isActive={currentPath === "/proyectos"}
          />
          <SideMenuSection
            href="/certificados"
            icon="far fa-file-certificate"
            text={t("nav.certificates")}
            isActive={currentPath === "/certificados"}
          />
          <SideMenuSection
            href="/experiencia"
            icon="far fa-briefcase"
            text={t("nav.experience")}
            isActive={currentPath === "/experiencia"}
          />
          <SideMenuSection
            href="/sobreMi"
            icon="far fa-user"
            text={t("nav.about")}
            isActive={currentPath === "/sobreMi"}
          />
          <SideMenuSection
            href={getCurriculumUrl(locale)}
            icon="far fa-file-alt"
            text={t("nav.downloadCv")}
            isActive={false}
          />
        </nav>
      </div>

      {isOpen && (
        <div
          onClick={toggleMenu}
          className="side-menu-backdrop md:hidden"
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default SideMenu;
