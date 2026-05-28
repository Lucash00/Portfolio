import { FiExternalLink } from 'react-icons/fi';

import { cardEntryTitleClass } from './cardEntryTitle';
import TextContent from '../Font/TextContent.jsx';
import { experiencePath } from '../../../data/slug';
import { useTranslation } from '../../../i18n/client';



export default function CardTimeline({ experience }) {
  const { t } = useTranslation();

  if (!experience) return null;

  const endLabel = experience.endDate ?? t('experience.current');

  return (

    <a

      href={experiencePath(experience.slug)}

      className="group flex min-w-0 max-w-full flex-col rounded-lg ease-in-out duration-300 sm:transform-none transform md:hover:-translate-y-1 md:hover:shadow-lg md:hover:shadow-gray-900"

    >

      <div className="card-accent-bar" aria-hidden="true" />

      <div className="relative sm:px-3 sm:py-2 md:p-8 grid gap-1 w-full min-w-0 rounded-b-lg overflow-hidden bg-slate-100 shadow-lg">

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

            {experience.provider} / {experience.startDate} - {endLabel}

          </p>

        ) : (

          <p className="mt-1 text-sm text-gray-400 sm:text-[0.9375rem] 2xl:text-base">

            {experience.startDate} - {endLabel}

          </p>

        )}



        <div className="border-t-2 border-gray-300">

          <TextContent content={experience.briefDescription} variant="compact" />

        </div>

      </div>

    </a>

  );

}


