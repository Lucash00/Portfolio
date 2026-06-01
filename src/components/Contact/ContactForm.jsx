import { useMemo, useState } from 'react';
import PopUp from '../Utils/PopUp/PopUp.jsx';
import { useTranslation } from '../../i18n/client';

/** Mismo origen: Cloudflare Pages Function (functions/api/contact.js) */
const FORM_ENDPOINT = '/api/contact';

const inputClass =
  'mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-gray-800 shadow-sm transition-[border-color,box-shadow] duration-200 placeholder:text-gray-400 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/35 md:text-sm';

const labelClass = 'text-sm font-medium text-gray-700';

export default function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle');
  const [popupMessage, setPopupMessage] = useState('');

  const subjectOptions = useMemo(
    () => [
      { value: 'proyecto', label: t('contact.form.subjects.project') },
      { value: 'colaboracion', label: t('contact.form.subjects.collaboration') },
      { value: 'empleo', label: t('contact.form.subjects.job') },
      { value: 'consulta', label: t('contact.form.subjects.inquiry') },
      { value: 'otro', label: t('contact.form.subjects.other') },
    ],
    [t],
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === 'loading') return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus('loading');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success !== true) {
        throw new Error(result.error ?? 'send_failed');
      }

      form.reset();
      setStatus('success');
      setPopupMessage(t('contact.form.success'));
    } catch {
      setStatus('error');
      setPopupMessage(t('contact.form.error'));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <input type="hidden" name="_subject" value={t('contact.form.hiddenSubject')} />
        <input type="hidden" name="_template" value="table" />
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

        <div>
          <label htmlFor="contact-name" className={labelClass}>
            {t('contact.form.nameLabel')}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={t('contact.form.namePlaceholder')}
            data-i18n-placeholder="contact.form.namePlaceholder"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            {t('contact.form.emailLabel')}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={t('contact.form.emailPlaceholder')}
            data-i18n-placeholder="contact.form.emailPlaceholder"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            {t('contact.form.phoneLabel')}{' '}
            <span className="font-normal text-gray-500">{t('contact.form.phoneOptional')}</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={t('contact.form.phonePlaceholder')}
            data-i18n-placeholder="contact.form.phonePlaceholder"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className={labelClass}>
            {t('contact.form.subjectLabel')}
          </label>
          <select
            id="contact-subject"
            name="subject"
            required
            defaultValue=""
            className={`${inputClass} cursor-pointer`}
          >
            <option value="" disabled>
              {t('contact.form.selectPlaceholder')}
            </option>
            {subjectOptions.map((option) => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClass}>
            {t('contact.form.messageLabel')}
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={6}
            placeholder={t('contact.form.messagePlaceholder')}
            data-i18n-placeholder="contact.form.messagePlaceholder"
            className={`${inputClass} min-h-[150px] resize-y`}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-amber-400 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-900 shadow-md transition-[background-color,transform,box-shadow] duration-200 hover:bg-amber-500 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 md:hover:scale-[1.02]"
        >
          <SendIcon />
          {status === 'loading' ? t('contact.form.sending') : t('contact.form.submit')}
        </button>
      </form>

      {popupMessage && (
        <PopUp message={popupMessage} onClose={() => setPopupMessage('')} />
      )}
    </>
  );
}

function SendIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
      <path d="m21.854 2.147-10.94 10.939" />
    </svg>
  );
}
