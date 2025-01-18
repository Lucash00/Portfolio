import React, { useState } from 'react';
import 'flag-icons/css/flag-icons.min.css'; // Importar la librería de iconos de banderas

const TranslatorDynamic = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('es'); // Idioma predeterminado: Español
  const [isOpen, setIsOpen] = useState(false); // Controlar la apertura/cierre del dropdown

  // Lista de idiomas soportados por Google Translate con sus códigos de bandera
  const languages = [
    { code: 'en', name: 'Inglés', flag: 'fi fi-gb' },
    { code: 'es', name: 'Español', flag: 'fi fi-es' },
    { code: 'fr', name: 'Francés', flag: 'fi fi-fr' },
    { code: 'it', name: 'Italiano', flag: 'fi fi-it' },
    { code: 'de', name: 'Alemán', flag: 'fi fi-de' },
    { code: 'pl', name: 'Polaco', flag: 'fi fi-pl' }
    // Agrega más idiomas según sea necesario
  ];

  const translatePage = (languageCode) => {
    const currentUrl = window.location.href; // Obtener la URL actual
    const translateUrl = `https://translate.google.com/translate?hl=${languageCode}&sl=auto&tl=${languageCode}&u=${encodeURIComponent(
      currentUrl
    )}`;
    window.location.href = translateUrl; // Redirigir a la versión traducida
  };

  const handleLanguageChange = (languageCode) => {
    setSelectedLanguage(languageCode);
    translatePage(languageCode); // Traducir la página automáticamente
    setIsOpen(false); // Cerrar el dropdown después de seleccionar el idioma
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Cambiar estado de apertura/cierre del dropdown
  };

  return (
    <div className="fixed top-2 right-2 z-50">
      <div className="mb-2">
        <div className="relative">
          {/* Botón que muestra el idioma seleccionado */}
          <div
            onClick={toggleDropdown}
            className="cursor-pointer py-2 pl-2 pr-2 border border-gray-300 bg-white rounded-md shadow-sm"
          >
            <span className={`${languages.find((lang) => lang.code === selectedLanguage)?.flag} mr-1`} />
            {languages.find((lang) => lang.code === selectedLanguage)?.name}
          </div>

          {/* Dropdown con opciones de idioma */}
          {isOpen && (
            <ul className="absolute w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
              {languages.map((language) => (
                <li
                  key={language.code}
                  className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleLanguageChange(language.code)}
                >
                  <span className={`${language.flag} mr-2`} />
                  {language.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TranslatorDynamic;
