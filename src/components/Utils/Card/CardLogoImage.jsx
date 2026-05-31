const CARD_LOGO_WIDTH = 224;
const CARD_LOGO_HEIGHT = 96;
const DETAIL_LOGO_WIDTH = 80;
const DETAIL_LOGO_HEIGHT = 80;

function resolveCardLogoSrc(src, variant = "card") {
  if (!src) return src;

  const entry =
    typeof window !== "undefined" ? window.__CARD_LOGO_URLS__?.[src] : undefined;

  if (entry) {
    return variant === "detail" ? entry.detail : entry.card;
  }

  return src;
}

export default function CardLogoImage({
  src,
  alt,
  className,
  variant = "card",
  width,
  height,
  loading = "lazy",
  ...rest
}) {
  const resolvedSrc = resolveCardLogoSrc(src, variant);
  const resolvedWidth =
    width ?? (variant === "detail" ? DETAIL_LOGO_WIDTH : CARD_LOGO_WIDTH);
  const resolvedHeight =
    height ?? (variant === "detail" ? DETAIL_LOGO_HEIGHT : CARD_LOGO_HEIGHT);

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      className={className}
      width={resolvedWidth}
      height={resolvedHeight}
      loading={loading}
      decoding="async"
      {...rest}
    />
  );
}
