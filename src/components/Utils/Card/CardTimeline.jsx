import React from 'react';

import { FiExternalLink } from 'react-icons/fi';

import { cardEntryTitleClass } from './cardEntryTitle';
import TextContent from '../Font/TextContent.jsx';



export default function CardTimeline({ experience }) {

  if (!experience) return null;



  const formattedTitle = encodeURIComponent(experience.title.replace(/\s+/g, '-'));



  return (

    <a

      href={`/experiencia/${formattedTitle}`}

      className="group flex flex-col w-screen sm:mr-3 rounded-lg ease-in-out duration-300 sm:transform-none transform md:hover:-translate-y-1 md:hover:shadow-lg md:hover:shadow-gray-900"

    >

      <div className="card-accent-bar" aria-hidden="true" />

      <div className="relative sm:px-3 sm:py-2 md:p-8 grid gap-1 w-full rounded-b-lg overflow-hidden bg-slate-100 shadow-lg">

        <div className="absolute top-2 right-2 text-gray-400 pointer-events-none z-10 sm:text-sm md:text-base lg:text-lg xl:text-xl">

          <FiExternalLink />

        </div>



        <div className="flex items-center gap-3 pr-8">

          {experience.logo && (

            <div className="card-logo-wrap">

              <img

                src={experience.logo}

                alt={experience.title}

                className="card-logo card-logo-img card-logo-img-timeline md:group-hover:animate-logoWobble"

              />

            </div>

          )}

          <h2 className={cardEntryTitleClass}>{experience.title}</h2>

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

      </div>

    </a>

  );

}


