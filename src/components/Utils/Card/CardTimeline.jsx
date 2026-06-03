import { FiExternalLink } from 'react-icons/fi';

import CardLogoImage from '../Card/CardLogoImage.jsx';

import { cardEntryTitleClass } from './cardEntryTitle';
import TextContent from '../Font/TextContent.jsx';
import { experiencePath } from '../../../data/slug';
import { useTranslation } from '../../../i18n/client';

const stackedSectionDividerClass =
  'mt-3 w-full border-t-2 border-gray-300 pt-3';

export default function CardTimeline({ experience, variant = 'default' }) {
  const { t } = useTranslation();

  if (!experience) return null;

  const endLabel = experience.endDate ?? t('experience.current');
  const metaLine = experience.provider
    ? `${experience.provider} / ${experience.startDate} - ${endLabel}`
    : `${experience.startDate} - ${endLabel}`;
  const visibleTags = experience.tags?.slice(0, 6) ?? [];

  if (variant === 'stacked') {
    return (
      <a
        href={experiencePath(experience.slug)}
        className="portfolio-list-card group flex w-full min-w-0 max-w-full flex-col rounded-lg"
      >
        <div className="card-accent-bar" aria-hidden="true" />
        <div className="relative flex w-full min-w-0 flex-col items-center rounded-b-lg bg-slate-100 px-4 py-4 text-center shadow-lg sm:px-5 sm:py-5">
          <div className="pointer-events-none absolute right-2 top-2 z-10 text-gray-400">
            <FiExternalLink />
          </div>

          {experience.logo ? (
            <>
              <div className="card-logo-wrap mt-1">
                <CardLogoImage
                  src={experience.logo}
                  alt={experience.title}
                  className="card-logo card-logo-img md:group-hover:animate-logoWobble"
                />
              </div>
              <div className={stackedSectionDividerClass}>
                <h2 className={`${cardEntryTitleClass} text-center`}>{experience.title}</h2>
                <p className="mt-1 text-sm text-gray-400">{metaLine}</p>
              </div>
            </>
          ) : (
            <div className="w-full">
              <h2 className={`${cardEntryTitleClass} text-center`}>{experience.title}</h2>
              <p className="mt-1 text-sm text-gray-400">{metaLine}</p>
            </div>
          )}

          <div className={`${stackedSectionDividerClass} text-left`}>
            <TextContent content={experience.briefDescription} variant="compact" />
          </div>

          {visibleTags.length > 0 ? (
            <div className="mt-3 flex w-full flex-wrap justify-center gap-1">
              {visibleTags.map((tag) => (
                <span key={tag} className="portfolio-tag">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </a>
    );
  }

  return (
    <a
      href={experiencePath(experience.slug)}
      className="portfolio-list-card group flex min-w-0 max-w-full flex-col rounded-lg"
    >
      <div className="card-accent-bar" aria-hidden="true" />
      <div className="relative grid w-full min-w-0 gap-1 overflow-hidden rounded-b-lg bg-slate-100 px-3 py-2 shadow-lg sm:px-3 sm:py-2 md:p-8">
        <div className="pointer-events-none absolute right-2 top-2 z-10 text-gray-400 sm:text-sm md:text-base lg:text-lg xl:text-xl">
          <FiExternalLink />
        </div>

        <div className="flex items-center gap-3 pr-8">
          {experience.logo ? (
            <div className="card-logo-wrap">
              <CardLogoImage
                src={experience.logo}
                alt={experience.title}
                className="card-logo card-logo-img card-logo-img-timeline md:group-hover:animate-logoWobble"
              />
            </div>
          ) : null}
          <h2 className={cardEntryTitleClass}>{experience.title}</h2>
        </div>

        <p className="mt-2 text-sm text-gray-400 sm:text-[0.9375rem] 2xl:text-base">
          {metaLine}
        </p>

        <div className="border-t-2 border-gray-300">
          <TextContent content={experience.briefDescription} variant="compact" />
        </div>
      </div>
    </a>
  );
}
