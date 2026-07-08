import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { SectionTitle } from './About'

// ── Credenziali EmailJS — lette da .env (mai hardcodate nel sorgente) ──
// Crea un file .env nella root del progetto (vedi .env.example).
// Vite espone solo le variabili con prefisso VITE_ al browser.
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  ?? ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? ''
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  ?? ''

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/antonio-fortunato',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/fortunatoantonio',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:fortunatoantonio908@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: '+39 347 749 4842',
    href: 'tel:+393477494842',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const { t } = useTranslation()
  const titleRef = useIntersectionObserver()
  const formRef = useRef(null)

  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errors, setErrors] = useState({})

  // Avviso in sviluppo se le credenziali EmailJS non sono configurate
  if (import.meta.env.DEV && !EMAILJS_PUBLIC_KEY) {
    console.warn(
      '[Contact] Credenziali EmailJS mancanti.\n' +
      'Crea un file .env nella root del progetto (vedi .env.example).'
    )
  }

  function validate(form) {
    const errs = {}
    if (!form.user_name.value.trim()) errs.name = true
    if (!form.user_email.value.trim() || !/\S+@\S+\.\S+/.test(form.user_email.value))
      errs.email = true
    if (!form.message.value.trim()) errs.message = true
    return errs
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const form = formRef.current
    const errs = validate(form)

    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setErrors({})
    setStatus('sending')

    // Blocca invii da origini non autorizzate (protezione lato client)
    const allowed = ['fortunatoantonio.github.io', 'localhost']
    const host = window.location.hostname
    if (!allowed.some((h) => host === h || host.endsWith(h))) {
      setStatus('error')
      return
    }

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  const inputBase =
    'w-full px-4 py-3 rounded-lg border text-navy-800 text-sm bg-white focus:outline-none focus:ring-2 transition-colors'
  const inputNormal = `${inputBase} border-gray-200 focus:border-indigo-400 focus:ring-indigo-200`
  const inputError = `${inputBase} border-red-400 focus:border-red-400 focus:ring-red-200`

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div ref={titleRef} className="fade-up">
          <SectionTitle title={t('contact.title')} />
          <p className="mt-3 text-navy-600 text-base">{t('contact.subtitle')}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Contact form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="fade-up md:col-span-3 space-y-5"
          >
            <div>
              <label htmlFor="user_name" className="block text-sm font-semibold text-navy-700 mb-1">
                {t('contact.name_label')}
              </label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                autoComplete="name"
                placeholder={t('contact.name_placeholder')}
                className={errors.name ? inputError : inputNormal}
                aria-invalid={!!errors.name}
              />
            </div>

            <div>
              <label htmlFor="user_email" className="block text-sm font-semibold text-navy-700 mb-1">
                {t('contact.email_label')}
              </label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                autoComplete="email"
                placeholder={t('contact.email_placeholder')}
                className={errors.email ? inputError : inputNormal}
                aria-invalid={!!errors.email}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-navy-700 mb-1">
                {t('contact.message_label')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder={t('contact.message_placeholder')}
                className={errors.message ? inputError : inputNormal}
                aria-invalid={!!errors.message}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full sm:w-auto px-8 py-3 bg-navy-800 text-white font-semibold rounded-lg hover:bg-navy-700 disabled:opacity-60 transition-colors shadow-md"
            >
              {status === 'sending' ? t('contact.sending') : t('contact.send')}
            </button>

            {status === 'success' && (
              <p role="alert" className="text-emerald-700 text-sm font-medium bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3">
                {t('contact.success')}
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="text-red-700 text-sm font-medium bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                {t('contact.error')}
              </p>
            )}
          </form>

          {/* Social links */}
          <div className="fade-up md:col-span-2">
            <p className="text-sm font-semibold text-navy-600 mb-4 uppercase tracking-widest">
              {t('contact.or_reach')}
            </p>
            <div className="space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 text-navy-700 hover:text-indigo-500 transition-colors text-sm font-medium"
                >
                  <span className="w-9 h-9 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-500 flex-shrink-0">
                    {link.icon}
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
