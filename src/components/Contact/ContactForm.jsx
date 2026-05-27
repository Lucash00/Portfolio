import React, { useState } from 'react';
import PopUp from '../Utils/PopUp/PopUp.jsx';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/lucas.moreno.dev@gmail.com';

const inputClass =
  'mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-gray-800 shadow-sm transition-[border-color,box-shadow] duration-200 placeholder:text-gray-400 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/35 md:text-sm';

const labelClass = 'text-sm font-medium text-gray-700';

const subjectOptions = [
  { value: 'proyecto', label: 'Proyecto o encargo' },
  { value: 'colaboracion', label: 'Colaboración' },
  { value: 'empleo', label: 'Oportunidad laboral' },
  { value: 'consulta', label: 'Consulta general' },
  { value: 'otro', label: 'Otro' },
];

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [popupMessage, setPopupMessage] = useState('');

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

      if (!response.ok) {
        throw new Error('Error al enviar');
      }

      form.reset();
      setStatus('success');
      setPopupMessage('¡Mensaje enviado! Te responderé lo antes posible.');
    } catch {
      setStatus('error');
      setPopupMessage(
        'No se pudo enviar el mensaje. Prueba de nuevo o escríbeme por correo directamente.',
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <input type="hidden" name="_subject" value="Nuevo mensaje desde el portfolio" />
        <input type="hidden" name="_template" value="table" />
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Tu nombre
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Lucas Moreno"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Tu email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="tu@email.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Teléfono <span className="font-normal text-gray-500">(opcional)</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+34 600 000 000"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className={labelClass}>
            Motivo del mensaje
          </label>
          <select
            id="contact-subject"
            name="subject"
            required
            defaultValue=""
            className={`${inputClass} cursor-pointer`}
          >
            <option value="" disabled>
              Selecciona una opción
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
            Tu mensaje
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={6}
            placeholder="Hola, me gustaría hablar sobre..."
            className={`${inputClass} min-h-[150px] resize-y`}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-amber-400 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-900 shadow-md transition-[background-color,transform,box-shadow] duration-200 hover:bg-amber-500 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 md:hover:scale-[1.02]"
        >
          <SendIcon />
          {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
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
