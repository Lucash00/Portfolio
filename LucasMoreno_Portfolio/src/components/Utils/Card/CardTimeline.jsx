import React from 'react';

export default function CardTimeline({ experience }) {
  if (!experience) return null;

  return (
    <div className="p-8 shadow-lg rounded-lg bg-gray-50 m-4">
      <h2 className="text-2xl font-bold">{experience.title}</h2>
      <p className="mt-4 text-gray-700">{experience.description}</p>
      <a
        href={`/experiencia/${experience.id}`} // Cambiado "to" por "href"
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded"
      >
        Ver más
      </a>
    </div>
  );
}
