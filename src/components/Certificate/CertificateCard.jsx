import CardLink from "../Utils/Card/CardLink.jsx";
import TextContent from "../Utils/Font/TextContent.jsx";
import { certificatePath } from "../../data/slug";

const cardEntryTitleClass =
  "card-title font-bold text-[0.8125rem] sm:text-[1.25rem] md:text-[1.625rem] mb-1 leading-snug";

export default function CertificateCard({ certificate }) {
  return (
    <CardLink link={certificatePath(certificate.slug)}>
      <div className="sm:col-span-10 sm:mt-10 sm:mb-5 md:col-span-3 lg:col-span-2 xl:col-span-2 2xl:col-span-2 flex items-center justify-center">
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
      <div className="min-w-0 sm:px-3 sm:py-2 md:py-4 sm:border-t-2 md:border-l-2 sm:pt-4 sm:border-slate-200 md:px-6 sm:col-span-10 md:col-span-7 lg:col-span-8 xl:col-span-8 2xl:col-span-8">
        <h3 className={cardEntryTitleClass}>{certificate.title}</h3>
        <p className="text-gray-400 sm:text-sm md:text-base mb-2">
          {certificate.provider} / {certificate.date}
        </p>
        <TextContent content={certificate.description} variant="compact" />
        {certificate.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-300 rounded-full sm:px-2 sm:py-1 md:px-3 md:py-1 sm:mr-1 sm:my-1 md:mr-2 md:my-2 sm:text-xs md:text-sm font-semibold text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </CardLink>
  );
}
