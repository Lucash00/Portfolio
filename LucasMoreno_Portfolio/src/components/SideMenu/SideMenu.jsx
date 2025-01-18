import { useState, useEffect } from "react";
import SideMenuSection from "./SideMenuSecion.jsx";
import curriculum from "../../assets/CurriculumVitae_LucasMoreno_ES.pdf";

const SideMenu = () => {
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
      {/* Botón para abrir/cerrar el menú */}
      <button
        onClick={toggleMenu}
        className="fixed top-5 left-5 z-[10000] w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full md:hidden"
        aria-label="Toggle menu"
      >
        <i className={isOpen ? "far fa-times" : "far fa-bars"}></i>
      </button>

      {/* Contenedor del menú lateral */}
      <div
        className={`side-menu fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg transform transition-transform duration-300 z-[9999] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <nav className="flex flex-col items-start p-4 space-y-4">
          {/* Imagen de perfil */}
          <div className="w-full flex justify-center mb-4">
            <img
              src="https://avatars.githubusercontent.com/u/168908236?v=4"
              alt="Foto Perfil"
              className="w-20 h-20 rounded-full"
            />
          </div>

          {/* Secciones del menú */}
          <SideMenuSection
            href="/"
            icon="far fa-home"
            text="Inicio"
            isActive={currentPath === "/"}
          />
          <SideMenuSection
            href="/proyectos"
            icon="far fa-folder-open"
            text="Proyectos"
            isActive={currentPath === "/proyectos"}
          />
          <SideMenuSection
            href="/certificados"
            icon="far fa-file-certificate"
            text="Certificados"
            isActive={currentPath === "/certificados"}
          />
          <SideMenuSection
            href="/experiencia"
            icon="far fa-briefcase"
            text="Experiencia"
            isActive={currentPath === "/experiencia"}
          />
          <SideMenuSection
            href="/sobreMi"
            icon="far fa-user"
            text="Sobre mí"
            isActive={currentPath === "/sobreMi"}
          />
          <SideMenuSection
            href={curriculum}
            icon="far fa-file-alt"
            text="Descargar CV"
            isActive={false}
          />
        </nav>
      </div>

      {/* Fondo oscuro al abrir el menú */}
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
