import { FiExternalLink } from "react-icons/fi";

export default function CardLink({ link, compact = false, children }) {
  const wrapClass = compact
    ? "scroll-reveal-item portfolio-list-card-wrap min-w-0 max-w-full my-2.5 sm:my-3 md:my-4"
    : "scroll-reveal-item portfolio-list-card-wrap min-w-0 max-w-full sm:my-6 sm:mx-2 md:my-8 md:mx-4 lg:my-8 lg:mx-6 xl:my-8 xl:mx-8 2xl:my-8 2xl:mx-12";

  const linkClass =
    "portfolio-list-card group flex flex-col relative min-w-0 w-full rounded-lg";

  const cardSurfaceClass =
    "relative min-w-0 w-full grid grid-cols-10 rounded-b-lg overflow-hidden bg-slate-100 shadow-lg";

  return (
    <div className={wrapClass}>
      <a href={link} className={linkClass}>
        <div className="card-accent-bar" aria-hidden="true" />
        <div className={cardSurfaceClass}>
          {children}
          <div className="absolute top-2 right-2 text-gray-400 pointer-events-none z-10 sm:text-base lg:text-lg xl:text-xl">
            <FiExternalLink />
          </div>
        </div>
      </a>
    </div>
  );
}
