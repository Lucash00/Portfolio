export default function DetailTitle({ title, logo }) {
  return (
    <div className="w-fit max-w-full">
      <h1 className="w-fit max-w-full text-4xl text-left font-extrabold tracking-tight text-white flex items-center gap-3">
        {logo ? (
          <img
            src={logo}
            alt={`${title} logo`}
            className="h-10 w-auto shrink-0 object-contain select-none"
            width={40}
            height={40}
            loading="lazy"
          />
        ) : null}
        <span data-text-glow className="text-mouse-glow">
          {title}
        </span>
      </h1>
    </div>
  );
}
