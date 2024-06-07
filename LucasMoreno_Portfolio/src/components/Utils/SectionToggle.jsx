import React, { useState } from 'react';

const SectionToggle = ({ sections }) => {
  const [selectedSection, setSelectedSection] = useState(sections[0].name); // Inicia con la primera sección seleccionada

  return (
    <div>
      <div className="flex">
        {sections.map((section, index) => (
          <button
            key={index}
            className={`px-4 py-2 mr-2 bg-gray-200 ${selectedSection === section.name ? 'bg-gray-400' : ''}`}
            onClick={() => setSelectedSection(section.name)}
          >
            {section.name}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {/* Mostrar el contenido de la sección seleccionada */}
        {sections.map((section, index) => (
          <div key={index} style={{ display: selectedSection === section.name ? 'block' : 'none' }}>
            {/* Verificar si el contenido es un objeto */}
            {typeof section.content === 'object' ? (
              <ul>
                {/* Iterar sobre las propiedades del objeto */}
                {Object.entries(section.content).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            ) : 
            // Si no es un objeto, mostrar como texto
            section.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionToggle;
