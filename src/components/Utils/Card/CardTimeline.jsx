import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import TextContent from '../Font/TextContent.jsx';

export default function CardTimeline({ experience }) {
  if (!experience) return null;

  const formattedTitle = encodeURIComponent(experience.title.replace(/\s+/g, '-'));

  return (
    <a
      href={`/experiencia/${formattedTitle}`}
      className="relative sm:px-3 sm:py-2 sm:mr-3 md:p-8 grid gap-1 w-screen rounded overflow-hidden hover:shadow-gray-900 hover:shadow-lg bg-slate-100 shadow-lg rounded-l ease-in-out duration-300 sm:transform-none transform hover:-translate-y-1"
    >
      <div className="absolute top-2 right-2 text-gray-400 pointer-events-none z-10 sm:text-sm md:text-base lg:text-lg xl:text-xl">
        <FiExternalLink />
      </div>

      <div className="flex items-center gap-3 pr-8">
        {experience.logo && (
          <img
            src={experience.logo}
            alt={experience.title}
            className="h-12 w-auto shrink-0 object-contain"
          />
        )}
        <h2 className="sm:text-xl text-2xl 2xl:text-4xl font-bold">{experience.title}</h2>
      </div>

      {experience.provider ? (
        <p className="mt-2 text-sm text-gray-400 sm:text-[0.9375rem] 2xl:text-base">
          {experience.provider} / {experience.startDate} - {experience.endDate}
        </p>
      ) : (
        <p className="mt-1 text-sm text-gray-400 sm:text-[0.9375rem] 2xl:text-base">
          {experience.startDate} - {experience.endDate}
        </p>
      )}

      <div className="border-t-2 border-gray-300">
        <TextContent content={experience.briefDescription} variant="compact" />
      </div>
    </a>
  );
}
