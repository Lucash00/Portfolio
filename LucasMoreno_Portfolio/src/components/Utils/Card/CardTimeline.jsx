import React from 'react';
import TextContent from '../Font/TextContent.jsx';

export default function CardTimeline({ experience }) {
  if (!experience) return null;

  const formattedTitle = encodeURIComponent(experience.title.replace(/\s+/g, '-'));

  return (
    <a
      href={`/experiencia/${formattedTitle}`}
      className="sm:px-3 sm:py-2 sm:mr-3 md:p-8 grid gap-1 w-screen rounded overflow-hidden hover:shadow-gray-900 hover:shadow-lg bg-slate-100 shadow-lg rounded-l ease-in-out duration-300 sm:transform-none transform hover:-translate-y-1"
    >
      <h2 className="sm:text-xl text-2xl 2xl:text-4xl font-bold">{experience.title}</h2>
      {
                    experience.provider ? (
                        <p className="mt-2 sm:text-sm text-md 2xl:text-lg text-gray-400">
                            {experience.provider} / {experience.startDate} -{" "}
                            {experience.endDate}
                        </p>
                    ) : (
                        <p className="mt-1 sm:text-sm text-md 2xl:text-lg text-gray-400">
                            {experience.startDate} - {experience.endDate}
                        </p>
                    )
                }
                <div className='border-t-2 border-gray-300'>

            <TextContent content={experience.briefDescription}/>
                </div>
    </a>
  );
}
