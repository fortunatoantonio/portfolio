import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  ?? ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? ''
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  ?? ''

const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/antonio-fortunato-aaa739325',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/fortunatoantonio',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:fortunatoantonio908@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const { t } = useTranslation()
  const formRef = useRef(null)
  const year = new Date().getFullYear()
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  function validate(form) {
    const errs = {}
    if (!form.user_name.value.trim()) errs.name = true
    if (!form.user_email.value.trim() || !/\S+@\S+\.\S+/.test(form.user_email.value)) errs.email = true
    if (!form.message.value.trim()) errs.message = true
    return errs
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const form = formRef.current
    const errs = validate(form)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setStatus('sending')
    const allowed = ['fortunatoantonio.github.io', 'localhost']
    if (!allowed.some((h) => window.location.hostname === h || window.location.hostname.endsWith(h))) {
      setStatus('error'); return
    }
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  const inputBase = 'w-full px-4 py-3 rounded-sm text-sm bg-dark-800 border text-white placeholder-muted-400/50 focus:outline-none focus:ring-2 transition-colors'
  const inputNormal = `${inputBase} border-dark-600 focus:border-gold-400 focus:ring-gold-400/20`
  const inputError  = `${inputBase} border-red-500 focus:border-red-400 focus:ring-red-500/20`

  return (
    <footer id="contact" className="bg-dark-950 text-white">

      {/* ── Form contatti centrato ── */}
      <div className="max-w-2xl mx-auto px-4 sm:px-8 pt-16 pb-12 text-center">

        {/* Eyebrow */}
        <p className="text-gold-400 text-xs font-bold uppercase tracking-[0.25em] mb-4">
          {t('contact.eyebrow')}
        </p>

        {/* Titolo */}
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-10">
          {t('contact.title')}
        </h2>

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} noValidate className="text-left space-y-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="f_name" className="block text-xs font-bold text-muted-400 mb-1.5 uppercase tracking-wider">
                {t('contact.name_label')}
              </label>
              <input id="f_name" name="user_name" type="text" autoComplete="name"
                placeholder={t('contact.name_placeholder')}
                className={errors.name ? inputError : inputNormal}
                aria-invalid={!!errors.name} />
            </div>
            <div>
              <label htmlFor="f_email" className="block text-xs font-bold text-muted-400 mb-1.5 uppercase tracking-wider">
                {t('contact.email_label')}
              </label>
              <input id="f_email" name="user_email" type="email" autoComplete="email"
                placeholder={t('contact.email_placeholder')}
                className={errors.email ? inputError : inputNormal}
                aria-invalid={!!errors.email} />
            </div>
          </div>

          <div>
            <label htmlFor="f_message" className="block text-xs font-bold text-muted-400 mb-1.5 uppercase tracking-wider">
              {t('contact.message_label')}
            </label>
            <textarea id="f_message" name="message" rows={4}
              placeholder={t('contact.message_placeholder')}
              className={errors.message ? inputError : inputNormal}
              aria-invalid={!!errors.message} />
          </div>

          {/* Bottone pill giallo — come il riferimento */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold-500 hover:bg-gold-400 disabled:opacity-60 text-dark-950 font-bold rounded-full transition-colors shadow-lg shadow-gold-500/20 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {status === 'sending' ? t('contact.sending') : t('contact.send')}
            </button>
          </div>

          {status === 'success' && (
            <p role="alert" className="text-center text-gold-300 text-sm bg-gold-500/10 border border-gold-500/30 rounded-sm px-4 py-3">
              {t('contact.success')}
            </p>
          )}
          {status === 'error' && (
            <p role="alert" className="text-center text-red-400 text-sm bg-red-900/20 border border-red-700/40 rounded-sm px-4 py-3">
              {t('contact.error')}
            </p>
          )}
        </form>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-6 mt-10">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={s.label}
              className="text-muted-400 hover:text-gold-400 transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* ── Copyright ── */}
      <div className="border-t border-dark-800 py-4 px-4 text-center">
        <p className="text-dark-500 text-xs">
          © {year} Antonio Fortunato · {t('footer.rights')}
        </p>
      </div>

    </footer>
  )
}
