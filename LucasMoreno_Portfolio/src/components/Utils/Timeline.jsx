import React, { useState } from 'react';

export default function Timeline({ experiences, onExperienceSelect }) {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <div className="flex flex-col items-center space-y-8 py-8">
      <div className="w-1 bg-gray-300 h-full relative">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            onClick={() => {
              setSelectedExperience(exp);
              onExperienceSelect(exp); // Llamar al callback para actualizar la experiencia seleccionada globalmente
            }}
            className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full cursor-pointer hover:scale-110 transition ${
              selectedExperience.id === exp.id ? 'bg-blue-500' : 'bg-gray-400'
            }`}
            style={{ top: `${index * 100}px` }} // Ajusta el espaciado
          />
        ))}
      </div>
    </div>
  );
}
