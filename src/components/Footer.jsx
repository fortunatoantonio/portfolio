import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  ?? ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? ''
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  ?? ''

const NAV_LINKS = ['about', 'experience', 'education', 'skills', 'projects', 'certifications', 'languages']

const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/antonio-fortunato-aaa739325',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/fortunatoantonio',
  },
  {
    label: 'Email',
    href: 'mailto:fortunatoantonio908@gmail.com',
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
    <footer id="contact" className="relative bg-dark-950 text-white">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500" aria-hidden="true" />

      {/* ═══════════════════════════════════════════
          TOP: 3-column layout — Contact | Navigation | Connect
          On mobile: stacks to single column, centered
      ═══════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* ── Left: Contact form ── */}
          <div className="md:col-span-2 text-left">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-8">
              {t('contact.title')}
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
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
                  className={`resize-none ${errors.message ? inputError : inputNormal}`}
                  aria-invalid={!!errors.message} />
              </div>

              <div className="pt-2">
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
                <p role="alert" className="text-gold-300 text-sm bg-gold-500/10 border border-gold-500/30 rounded-sm px-4 py-3">
                  {t('contact.success')}
                </p>
              )}
              {status === 'error' && (
                <p role="alert" className="text-red-400 text-sm bg-red-900/20 border border-red-700/40 rounded-sm px-4 py-3">
                  {t('contact.error')}
                </p>
              )}
            </form>
          </div>

          {/* ── Right: Navigation + Contatti side by side ── */}
          <div className="text-center md:text-right">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-0">
              {/* Navigation */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400 mb-5">
                  {t('footer.navigation')}
                </h3>
                <nav className="flex flex-col gap-2.5">
                  {NAV_LINKS.map((key) => (
                    <a
                      key={key}
                      href={`#${key}`}
                      className="text-sm text-muted-400 hover:text-white transition-colors"
                    >
                      {t(`nav.${key}`)}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Contatti */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400 mb-5 md:mt-10">
                  {t('footer.connect')}
                </h3>
                <div className="flex flex-col gap-2.5">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith('http') ? '_blank' : undefined}
                      rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-muted-400 hover:text-white transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════════════════════════════════════
          BOTTOM: Copyright bar — Savino style
          Large: left/right. Small: centered
      ═══════════════════════════════════════════ */}
      <div className="border-t border-dark-800 py-5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-dark-500 text-xs">
            © {year} Antonio Fortunato
          </p>
          <p className="text-dark-500 text-xs">
            All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  )
}
