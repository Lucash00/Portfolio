import CardLogoImage from "../Card/CardLogoImage.jsx";

export default function DetailTitle({ title, logo }) {
  return (
    <div className="detail-title w-fit max-w-full sm:mb-3 sm:w-full">
      <h1 className="detail-title__heading w-fit max-w-full text-4xl text-left font-extrabold tracking-tight text-white flex items-center gap-3">
        {logo ? (
          <CardLogoImage
            src={logo}
            alt={`${title} logo`}
            variant="detail"
            className="detail-title__logo h-10 w-auto shrink-0 object-contain select-none"
          />
        ) : null}
        <span data-text-glow className="detail-title__text text-mouse-glow min-w-0">
          {title}
        </span>
      </h1>

      <style>{`
        @media (max-width: 639px) {
          .detail-title {
            margin-bottom: 0.75rem;
          }

          .detail-title__heading {
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            width: 100%;
            max-width: 100%;
            text-align: center;
            font-size: 1.0625rem;
            font-weight: 700;
            line-height: 1.25;
          }

          .detail-title__logo {
            height: 2rem;
            max-width: 5.5rem;
            max-height: 2rem;
          }

          .detail-title__text {
            display: block;
            width: 100%;
            max-width: 18rem;
            font-size: 1.0625rem;
            font-weight: 700;
            line-height: 1.3;
            text-wrap: balance;
          }
        }
      `}</style>
    </div>
  );
}
