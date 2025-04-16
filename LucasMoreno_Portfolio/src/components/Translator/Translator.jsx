import React, { useState, useEffect } from 'react';
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
  ];

  // Detectar idioma actual (cuando ya se está en una página traducida)
  useEffect(() => {
    const currentUrl = window.location.href;
    const urlParams = new URLSearchParams(window.location.search);
    const currentLang = urlParams.get('_x_tr_hl') || urlParams.get('hl');
    
    // Si el idioma detectado es diferente al actual, actualizar el estado
    if (currentLang && currentLang !== selectedLanguage) {
      setSelectedLanguage(currentLang);
    }
  }, []);

  const translatePage = (languageCode) => {
    const currentUrl = window.location.href;
    // Detectar si estamos en Google Translate y redirigir a la página original
    if (currentUrl.includes('translate.google')) {
      const urlParams = new URLSearchParams(window.location.search);
      const originalPage = urlParams.get('_x_tr_u') || urlParams.get('u');
      if (originalPage) {
        const originalUrl = decodeURIComponent(originalPage);
        window.location.href = `${originalUrl}?lang=${languageCode}`;  // Redirigir a la página original con el idioma seleccionado
      }
    } else {
      // Si no estamos en Google Translate, simplemente traducir
      const translateUrl = `https://translate.google.com/translate?hl=${languageCode}&sl=auto&tl=${languageCode}&u=${encodeURIComponent(currentUrl)}`;
      window.location.href = translateUrl;
    }
  };

  const backToOriginal = () => {
    const originalUrl = window.location.href;
    // Si estamos en Google Translate, extraemos la URL original
    if (originalUrl.includes('translate.google')) {
      const urlParams = new URLSearchParams(window.location.search);
      const originalPage = urlParams.get('_x_tr_u') || urlParams.get('u');
      if (originalPage) {
        window.location.href = decodeURIComponent(originalPage); // Regresar a la URL original sin traducción
        return;
      }
    }

    // Si estamos ya en la URL original, simplemente recargamos
    window.location.reload();
  };

  const handleLanguageChange = (languageCode) => {
    setSelectedLanguage(languageCode); // Actualizar el idioma seleccionado
    if (languageCode === 'es') {
      backToOriginal(); // Volver al contenido original
    } else {
      translatePage(languageCode); // Traducir
    }
    setIsOpen(false); // Cerrar dropdown
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-2 right-2 z-50">
      <div className="mb-2">
        <div className="relative">
          <div
            onClick={toggleDropdown}
            className="cursor-pointer py-2 pl-2 pr-2 border border-gray-300 bg-white rounded-md shadow-sm"
          >
            {/* Mostrar la bandera y el nombre del idioma seleccionado */}
            <span className={`${languages.find((lang) => lang.code === selectedLanguage)?.flag} mr-1`} />
            {languages.find((lang) => lang.code === selectedLanguage)?.name}
          </div>

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
