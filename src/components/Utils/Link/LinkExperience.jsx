import { FiArrowUpRight, FiFileText, FiFolder } from "react-icons/fi";
import {
  getCertificateBySlug,
  getProjectBySlug,
} from "../../../data/getLocalized";
import { useTranslation } from "../../../i18n/client";
import {
  DETAIL_LINK_CHIP_ARROW_CLASS,
  DETAIL_LINK_CHIP_CLASS,
  DETAIL_LINK_CHIP_INNER_CLASS,
  DETAIL_LINK_CHIP_LIST_CLASS,
} from "./detailLinkChip";

function slugFromPortfolioUrl(url) {
  const path = url.startsWith("http")
    ? new URL(url, window.location.origin).pathname
    : url.split("?")[0];

  const segment = path.split("/").filter(Boolean).pop() ?? "";
  try {
    return decodeURIComponent(segment);
  } catch {
    return segment;
  }
}

function formatSlug(slug) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function resolveLinkLabel(url, kind, locale) {
  const slug = slugFromPortfolioUrl(url);

  if (kind === "project") {
    return getProjectBySlug(slug, locale)?.title ?? formatSlug(slug);
  }

  if (kind === "certificate") {
    return getCertificateBySlug(slug, locale)?.title ?? formatSlug(slug);
  }

  return formatSlug(slug);
}

function LinkIcon({ kind }) {
  if (kind === "certificate") {
    return <FiFileText className="shrink-0 text-base" aria-hidden="true" />;
  }

  return <FiFolder className="shrink-0 text-base" aria-hidden="true" />;
}

function ExperienceLinkGroup({ title, urls, kind }) {
  const { locale } = useTranslation();

  if (!urls?.length) return null;

  return (
    <div className="experience-link-group mb-4 last:mb-0">
      {title ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
          {title}
        </p>
      ) : null}
      <ul className={DETAIL_LINK_CHIP_LIST_CLASS}>
        {urls.map((url) => {
          const label = resolveLinkLabel(url, kind, locale);
          const isExternal = /^https?:\/\//i.test(url);

          return (
            <li key={url}>
              <a
                href={url}
                className={DETAIL_LINK_CHIP_CLASS}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className={DETAIL_LINK_CHIP_INNER_CLASS}>
                  <LinkIcon kind={kind} />
                  <span className="min-w-0">{label}</span>
                  <FiArrowUpRight
                    className={DETAIL_LINK_CHIP_ARROW_CLASS}
                    aria-hidden="true"
                  />
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function LinkExperience({ urls, kind, title }) {
  return <ExperienceLinkGroup title={title} urls={urls} kind={kind} />;
}
