import React, { useState } from 'react';
import TextContent from '../../components/Utils/Font/TextContent.jsx'; // Asegúrate de importar el componente TextContent

const SectionToggle = ({ sections }) => {
  const [selectedSection, setSelectedSection] = useState(sections[0].name); // Inicia con la primera sección seleccionada

  // Filtrar las secciones que tienen contenido
  const filteredSections = sections.filter(section => section.content !== '' && section.content !== null);

  return (
    <div className='pb-5'>
      <div className="flex">
        {/* Mostrar solo los botones de las secciones que tienen contenido */}
        {filteredSections.map((section, index) => (
          <button
            key={index}
            // className="bg-gradient-to-t from-blue-800 via-blue-700 to-blue-500 text-white w-fit transition-all hover:bg-gradient-to-t hover:from-blue-900 hover:via-blue-800 hover:to-blue-600 hover:text-gray-100 hover:translate-x-[1px] hover:translate-y-[1px]"

            className={`w-fit font-bold text-sm px-4 py-2 mr-2 bg-gray-200 hover:bg-gray-300 transition-all shadow-xl hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] ${selectedSection === section.name ? 'bg-gray-400 hover:bg-gray-400 shadow-none translate-y-[2px] translate-x-[2px]' : ''}`}
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
