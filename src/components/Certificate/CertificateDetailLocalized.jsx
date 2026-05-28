import { useMemo } from "react";
import { getCertificateBySlug } from "../../data/getLocalized";
import { useTranslation } from "../../i18n/client";
import DetailTitle from "../Utils/Font/DetailTitle.jsx";
import TextContent from "../Utils/Font/TextContent.jsx";
import Slider from "../Utils/Slider/Slider.jsx";
import LinkList from "../Utils/Link/Link";
import CardShell from "../Utils/Card/CardShell.jsx";

function TitleContent({ title }) {
  return (
    <div className="card-entry-title-wrap relative mb-2">
      <h2 className="relative flex items-center gap-3">
        <span className="block min-w-0 flex-1 text-2xl font-bold text-gray-900 animate-cardEntryTitleIn">
          {title}
        </span>
      </h2>
    </div>
  );
}

export default function CertificateDetailLocalized({ slug }) {
  const { locale, t } = useTranslation();
  const certificate = useMemo(
    () => getCertificateBySlug(slug, locale),
    [slug, locale],
  );

  if (!certificate) {
    return (
      <main>
        <p className="text-white p-8">Certificate not found.</p>
      </main>
    );
  }

  return (
    <main>
      <DetailTitle title={certificate.title} logo={certificate.logo} />
      <CardShell>
        {certificate.media?.length > 0 ? (
          <div className="z-10 mb-4 pt-3 md:pt-4 col-span-2 col-start-1">
            <Slider
              images={certificate.media}
              lightboxLabel={certificate.title}
            />
          </div>
        ) : null}

        {certificate.certificateUrl ? (
          <div className="py-2 col-span-2 col-start-1">
            <LinkList
              links={[
                {
                  url: certificate.certificateUrl,
                  name: t("certificate.viewCertificate"),
                },
              ]}
            />
          </div>
        ) : null}

        {certificate.tags?.length > 0 ? (
          <div className="sm:col-span-2 md:col-span-2 lg:col-span-1 col-start-1">
            <ul className="flex flex-wrap gap-2 mb-4">
              {certificate.tags.map((tag) => (
                <li
                  key={tag}
                  className="px-2 py-1 bg-gray-300 rounded-full font-semibold text-gray-700 text-sm"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {certificate.credentials ? (
          <div className="sm:col-span-2 sm:col-start-1 md:col-span-2 md:col-start-1 lg:col-span-1 lg:col-start-2">
            <TitleContent title={t("certificate.credentials")} />
            <p>{certificate.credentials}</p>
          </div>
        ) : null}

        <div className="py-4 col-span-2 col-start-1 border-spacing-y-10 border-y-2 border-gray-300">
          <TitleContent title={certificate.title} />
          <p className="mb-2 text-gray-400">
            {certificate.provider} / {certificate.date}
          </p>
          <TextContent content={certificate.description} />
        </div>
      </CardShell>
    </main>
  );
}
