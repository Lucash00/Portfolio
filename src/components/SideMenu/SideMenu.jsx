import { useEffect, useState } from "react";
import SideMenuSection from "./SideMenuSection.jsx";
import { getCurriculumUrl } from "../../data/curriculum";
import { useTranslation } from "../../i18n/client";

const SideMenu = ({ avatarSrc }) => {
  const { locale, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-5 left-5 z-[10000] w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full md:hidden"
        aria-label={t("nav.toggleMenu")}
      >
        <i className={isOpen ? "far fa-times" : "far fa-bars"}></i>
      </button>

      <div
        className={`side-menu fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg transform transition-transform duration-300 z-[9999] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <nav className="flex flex-col items-start p-4 space-y-4">
          <div className="w-full flex justify-center mb-4">
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
          className="fixed inset-0 bg-black bg-opacity-50 z-[9998] md:hidden pointer-events-auto"
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default SideMenu;
