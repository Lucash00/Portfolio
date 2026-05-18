import React, { useState } from 'react';
import TextContent from '../../components/Utils/Font/TextContent.jsx'; // Asegúrate de importar el componente TextContent

const SectionToggle = ({ sections }) => {
  const [selectedSection, setSelectedSection] = useState(sections[0].name); // Inicia con la primera sección seleccionada

  // Filtrar las secciones que tienen contenido
  const filteredSections = sections.filter(section => section.content !== '' && section.content !== null);

  return (
    <div>
      <div className="flex">
        {/* Mostrar solo los botones de las secciones que tienen contenido */}
        {filteredSections.map((section, index) => (
          <button
            key={index}
            className={`w-fit font-bold sm:text-xs md:text-sm lg:text-md sm:px-2 sm:py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 mr-2 bg-gray-100 hover:bg-gray-300 transition-all shadow-lg hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] ${selectedSection === section.name ? 'bg-gray-300 hover:bg-gray-300 shadow-none translate-y-[2px] translate-x-[2px]' : ''}`}
            onClick={() => setSelectedSection(section.name)}
          >
            {section.name}
          </button>
        ))}
      </div>
      <div className="mt-4 text-gray-700 text-base">
        {/* Mostrar el contenido de la sección seleccionada */}
        {filteredSections.map((section, index) => (
          <div key={index} style={{ display: selectedSection === section.name ? 'block' : 'none' }}>
            {/* Usar el componente TextContent para procesar el contenido Markdown */}
            <TextContent content={section.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionToggle;
