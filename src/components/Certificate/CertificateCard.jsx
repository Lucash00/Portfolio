import CardLink from "../Utils/Card/CardLink.jsx";
import TextContent from "../Utils/Font/TextContent.jsx";
import { certificatePath } from "../../data/slug";

const cardEntryTitleClass =
  "card-title font-bold text-[0.8125rem] sm:text-[1.25rem] md:text-[1.625rem] mb-1 leading-snug";

export default function CertificateCard({ certificate, compact = false }) {
  const visibleTags = compact ? certificate.tags.slice(0, 4) : certificate.tags;

  const logoColClass = compact
    ? "card-logo-col sm:col-span-10 sm:mt-4 sm:mb-2 md:col-span-3 flex items-center justify-center"
    : "card-logo-col sm:col-span-10 sm:mt-10 sm:mb-5 md:col-span-3 lg:col-span-2 xl:col-span-2 2xl:col-span-2 flex items-center justify-center";
  const bodyColClass = compact
    ? "sm:px-3 sm:py-2 md:py-3 sm:border-t-2 md:border-l-2 sm:pt-3 sm:border-slate-200 md:px-4 sm:col-span-10 md:col-span-7"
    : "min-w-0 sm:px-3 sm:py-2 md:py-4 sm:border-t-2 md:border-l-2 sm:pt-4 sm:border-slate-200 md:px-6 sm:col-span-10 md:col-span-7 lg:col-span-8 xl:col-span-8 2xl:col-span-8";
  const metaClass = compact
    ? "mb-2 text-gray-400 text-sm sm:text-xs md:text-[0.9375rem]"
    : "mb-2 text-gray-400 sm:text-sm md:text-base";
  const tagClass = compact ? "portfolio-tag" : "portfolio-tag portfolio-tag--list";

  return (
    <CardLink link={certificatePath(certificate.slug)} compact={compact}>
      <div className={logoColClass}>
        <div className="card-logo-wrap">
          <img
            src={certificate.logo}
            alt={certificate.title}
            className="card-logo card-logo-img md:group-hover:animate-logoWobble"
            width={224}
            height={96}
            loading="lazy"
          />
        </div>
      </div>
      <div className={bodyColClass}>
        <h3 className={cardEntryTitleClass}>{certificate.title}</h3>
        <p className={metaClass}>
          {certificate.provider} / {certificate.date}
        </p>
        <TextContent content={certificate.description} variant="compact" />
        {visibleTags.map((tag) => (
          <span key={tag} className={tagClass}>
            {tag}
          </span>
        ))}
      </div>
    </CardLink>
  );
}
