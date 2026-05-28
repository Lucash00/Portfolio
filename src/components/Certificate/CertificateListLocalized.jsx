import { useMemo } from "react";
import { getCertificates } from "../../data/getLocalized";
import { useTranslation } from "../../i18n/client";
import CertificateCard from "./CertificateCard.jsx";

export default function CertificateListLocalized() {
  const { locale } = useTranslation();
  const certificates = useMemo(() => getCertificates(locale), [locale]);

  return (
    <div className="min-w-0 w-full max-w-full mb-20">
      {certificates.map((certificate) => (
        <CertificateCard key={certificate.slug} certificate={certificate} />
      ))}
    </div>
  );
}
