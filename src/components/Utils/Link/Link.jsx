import { FiGithub, FiFileText, FiExternalLink } from "react-icons/fi";
import {
  DETAIL_LINK_CHIP_CLASS,
  DETAIL_LINK_CHIP_INNER_CLASS,
  DETAIL_LINK_CHIP_LIST_CLASS,
} from "./detailLinkChip";

function getIcon(name) {
  const iconClass = "shrink-0 text-base";
  const normalized = name.toLowerCase();

  if (normalized.includes("código") || normalized.includes("code")) {
    return <FiGithub className={iconClass} aria-hidden="true" />;
  }

  if (
    normalized.includes("certificado") ||
    normalized.includes("certificate")
  ) {
    return <FiFileText className={iconClass} aria-hidden="true" />;
  }

  return <FiExternalLink className={iconClass} aria-hidden="true" />;
}

function Link({ url, name }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={DETAIL_LINK_CHIP_CLASS}
    >
      <span className={DETAIL_LINK_CHIP_INNER_CLASS}>
        {getIcon(name)}
        <span className="min-w-0">{name}</span>
      </span>
    </a>
  );
}

function LinkList({ links }) {
  return (
    <div className={DETAIL_LINK_CHIP_LIST_CLASS}>
      {links.map((link, index) => (
        <Link key={index} url={link.url} name={link.name} />
      ))}
    </div>
  );
}

export default LinkList;
