import React from 'react';
import TextContent from '../Font/TextContent.jsx';

export default function CardTimeline({ experience }) {
  if (!experience) return null;

  const formattedTitle = encodeURIComponent(experience.title.replace(/\s+/g, '-'));

  return (
    <a
      href={`/experiencia/${formattedTitle}`}
      className="my-8 mx-8 p-8 grid gap-1 w-screen rounded overflow-hidden hover:shadow-gray-600 hover:shadow-lg bg-slate-100 shadow-lg rounded-l"
    >
      <h2 className="text-2xl font-bold">{experience.title}</h2>
      {
                    experience.provider ? (
                        <p className="mt-2 text-gray-400">
                            {experience.provider} / {experience.startDate} -{" "}
                            {experience.endDate}
                        </p>
                    ) : (
                        <p className="mt-2 text-gray-400">
                            {experience.startDate} - {experience.endDate}
                        </p>
                    )
                }
            <TextContent content={experience.briefDescription} />
    </a>
  );
}
