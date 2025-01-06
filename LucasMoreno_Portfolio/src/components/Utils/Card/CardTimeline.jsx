import React from 'react';

export default function CardTimeline({ experience }) {
  if (!experience) return null;

  return (
    <a
      href={`/experiencia/${experience.id}`}
      className="my-8 mx-8 p-8 grid gap-1 w-screen rounded overflow-hidden hover:shadow-gray-600 hover:shadow-lg bg-slate-100 shadow-lg rounded-l"
    >
        <h2 className="text-2xl font-bold">{experience.title}</h2>
        <p className="mt-4 text-gray-400">{experience.startDate} / {experience.endDate}</p>
        <p className="mt-4 text-gray-700">{experience.description}</p>
    </a>
  );
}
