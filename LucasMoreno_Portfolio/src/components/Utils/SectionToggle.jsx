import React, { useState } from 'react';
import TextContent from '../../components/Utils/Font/TextContent.jsx'; // Asegúrate de importar el componente TextContent

const SectionToggle = ({ sections }) => {
  const [selectedSection, setSelectedSection] = useState(sections[0].name); // Inicia con la primera sección seleccionada

  // Filtrar las secciones que tienen contenido
  const filteredSections = sections.filter(section => section.content !== '' && section.content !== null);

  return (
    <div className='px-6 pb-5'>
      <div className="flex">
        {/* Mostrar solo los botones de las secciones que tienen contenido */}
        {filteredSections.map((section, index) => (
          <button
            key={index}
            className={`font-bold text-sm px-4 py-2 mr-2 bg-gray-200 ${selectedSection === section.name ? 'bg-gray-400' : ''}`}
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
